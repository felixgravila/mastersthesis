from models.Chiron import Chiron

class ChironBuilder():
   
    def __init__(self, max_label_length):
        self.max_label_length = max_label_length
        self.batch_normalization = False

    def with_batch_normalization(self):
        self.batch_normalization = True
        return self
    
    def build(self):
        return Chiron(
            max_label_length= self.max_label_length, 
            batch_normalization = self.batch_normalization)