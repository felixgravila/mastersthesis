from models.Chiron import Chiron

class ChironBuilder():

    def __init__(self, input_length, label_length):
        self.input_length = input_length
        self.label_length= label_length
        self.batch_normalization = False

    def with_batch_normalization(self):
        self.batch_normalization = True
        return self        
    
    def build(self):
        return Chiron(
            input_length=self.input_length,
            label_length=self.label_length, 
            batch_normalization = self.batch_normalization)