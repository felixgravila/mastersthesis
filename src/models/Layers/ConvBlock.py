import tensorflow as tf

class ConvolutionBlock(tf.keras.layers.Layer):
    def __init__(self, cnn_dims, filters, idx):
        super(ConvolutionBlock, self).__init__()

        self.residual = tf.keras.layers.Conv1D(filters, 1, padding="same", name=f"res{idx}-r")      
        self.cnn_layers = [tf.keras.layers.Conv1D(filters, dim, padding="same", activation="relu", name=f"res{idx}-c{i}") for i,dim in enumerate(cnn_dims)]
        self.activation_layer = tf.keras.layers.Activation('relu', name=f"res{idx}-relu")
        
    def call(self, x):
        if x.shape[-1] == 1:
            res = self.residual(x)
        else:
            res = x
        
        for cnn_layer in self.cnn_layers:
            x = cnn_layer(x)
        
        x += res
        x = self.activation_layer(x)
        return x