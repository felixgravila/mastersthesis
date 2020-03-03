from models.Chiron import Chiron

class ChironBuilder():

    def __init__(self, input_length):
        self.input_length = input_length
        self.rnn_padding = 0
        self.batch_normalization = False

    def with_batch_normalization(self):
        self.batch_normalization = True
        return self

    def with_rnn_padding(self, rnn_padding):
        self.rnn_padding = rnn_padding
        return self         
    
    def build(self):
        return Chiron(
            input_length=self.input_length,
            rnn_padding = self.rnn_padding,
            batch_normalization = self.batch_normalization)