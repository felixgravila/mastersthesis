class Read:
    def __init__(self, id, signal, label):
        self.id = id
        self.signal = signal
        self.label = self.trim_label_data(label)

    def trim_label_data(self, data):
        start_index = None
        end_index = None
        i = 0
        while(i < len(data) and start_index == None):
            if(self.is_base(data[i]) == False):
                i = i + 1
                continue

            if(self.is_base_string(data[i:], 10) == False):
                i = i + 1
                continue

            start_index = i
        end_index = data[start_index:].find("+") + start_index
        return data[start_index:end_index]

    def is_base_string(self, data, look_ahead):
        i = 0
        while(i < look_ahead):
            if(self.is_base(data[i]) == False):
                return False
            i = i + 1
        return True

    def is_base(self, character):
        if(character == 'A'):
            return True
        if(character == 'T'):
            return True
        if(character == 'G'):
            return True
        if(character == 'C'):
            return True

        return False
