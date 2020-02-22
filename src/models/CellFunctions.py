import numpy as np
import tensorflow as tf

def orthogonal(shape):
    flat_shape = (shape[0], np.prod(shape[1:]))
    a = np.random.normal(0.0, 1.0, flat_shape)
    u, _, v = np.linalg.svd(a, full_matrices=False)
    q = u if u.shape == flat_shape else v
    return q.reshape(shape)

def orthogonal_initializer():
    def _initializer(shape, dtype=tf.float32, partition_info=None):
        return tf.constant(orthogonal(shape), dtype)
    return _initializer

def bn_lstm_identity_initializer(self, scale):
    def _initializer(shape, dtype=tf.float32, partition_info=None):
        size = shape[0]
        # gate (j) is identity
        t = np.zeros(shape)
        t[:, size:size * 2] = np.identity(size) * scale
        t[:, :size] = orthogonal([size, size])
        t[:, size * 2:size * 3] = orthogonal([size, size])
        t[:, size * 3:] = orthogonal([size, size])
        return tf.constant(t, dtype)
        
    return _initializer

def batch_norm(input, name_scope, training, epsilon=1e-3, decay=0.999):
    '''Assume 2d [batch, values] tensor'''

    with tf.variable_scope(name_scope):
        
        input_size = input.get_shape().as_list()[1]

        scale = tf.get_variable('scale', [input_size], initializer=tf.constant_initializer(0.1))
        offset = tf.get_variable('offset', [input_size])

        pop_mean = tf.get_variable('pop_mean', [input_size], initializer=tf.zeros_initializer, trainable=False)
        pop_var = tf.get_variable('pop_var', [input_size], initializer=tf.ones_initializer, trainable=False)
        batch_mean, batch_var = tf.nn.moments(input, [0])

        train_mean_op = tf.assign(pop_mean, pop_mean * decay + batch_mean * (1 - decay))
        train_var_op = tf.assign(pop_var, pop_var * decay + batch_var * (1 - decay))

        def batch_statistics():
            with tf.control_dependencies([train_mean_op, train_var_op]):
                return tf.nn.batch_normalization(input, batch_mean, batch_var, offset, scale, epsilon)

        def population_statistics():
            return tf.nn.batch_normalization(input, pop_mean, pop_var, offset, scale, epsilon)

        return tf.cond(training, batch_statistics, population_statistics)