from models.Chiron import Chiron

class ChironBuilder():

    def __init__(self, input_length):
        self.input_length = input_length
        self.rnn_padding = 0
        self.maxpool_layer = 0
        self.batch_normalization = False
        self.model_name = "chiron"

    def with_batch_normalization(self):
        self.batch_normalization = True
        self.model_name += "-bn"
        return self

    def with_rnn_padding(self, rnn_padding):
        self.rnn_padding = rnn_padding
        self.model_name += f"-pad{rnn_padding}"
        return self

    def with_maxpool(self, maxpool_layer):
        self.maxpool_layer = maxpool_layer
        self.model_name += f"-maxpool{maxpool_layer}"
        return self
    
    def build(self):
        return Chiron(
            input_length=self.input_length,
            rnn_padding = self.rnn_padding,
            batch_normalization = self.batch_normalization,
            maxpool_layer=self.maxpool_layer,
            model_name=self.model_name)