from models.Chiron import Chiron

class ChironBuilder():

    def __init__(self, input_length):
        self.input_length = input_length
        self.input_dim = 1
        self.rnn_padding = 0
        self.maxpool_layer = 0
        self.batch_normalization = False
        self.dropout = False
        self.none_input = False
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

    def with_dropout(self):
        self.dropout = True
        self.model_name += f"-dropout"
        return self
    
    '''
    Sets the input to the first CNN layer to None
    This ignores `input_length`
    
    Used for prediction where we can thus predict inputs of any length
    '''
    def with_None_input(self):
        self.none_input = True
        return self

    '''
    Signal usually has input dim 1
    This can be used e.g with spectrogram data
    '''
    def with_different_input_dim(self, input_dim):
        self.input_dim = input_dim
        self.model_name += f"-indim{input_dim}"
        return self
    
    def build(self):
        return Chiron(
            input_length=self.input_length,
            rnn_padding = self.rnn_padding,
            batch_normalization = self.batch_normalization,
            maxpool_layer=self.maxpool_layer,
            model_name=self.model_name,
            dropout=self.dropout,
            use_None_input=self.none_input,
            input_dim=self.input_dim)