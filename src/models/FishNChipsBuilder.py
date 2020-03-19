from models.FishNChips import FishNChips

class FishNChipsBuilder():

    def __init__(self, input_length):
        self.input_length = input_length
        self.maxpool_layer = 0
        self.model_name = "FishNChips"

    def with_maxpool(self, maxpool_layer):
        self.maxpool_layer = maxpool_layer
        self.model_name += f"-maxpool{maxpool_layer}"
        return self
       
    def build(self):
        return FishNChips(
            input_length=self.input_length,
            maxpool_layer=self.maxpool_layer,
            model_name=self.model_name)
