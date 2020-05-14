import mappy as mp

from utils.process_utils import get_generator
from utils.attention_evaluation_utils import build, evaluate_batch
from utils.assembler import assemble

class ValidationController():
    def __init__(self, model_config, validation_config):
        self._generator = get_generator(model_config, validation_config, kind="validation")
        self._reads = validation_config['reads']
        self._batch_size = validation_config['batch_size']
        self._aligner = mp.Aligner("../useful_files/zymo-ref-uniq_2019-03-15.fa")
        self._with_assembler = model_config['encoder_max_length'] == validation_config['stride']

    def get_cig_accuracy(self, assembly):
        try:
            besthit = next(self._aligner.map(assembly))
            return 1-(besthit.NM/besthit.blen) 
        except:
            return 0

    def get_assembly(self, y_pred):
        if self._with_assembler:
            return "".join(y_pred)
        return assemble(y_pred)

    def validate(self, model):

        print("*** validating...")

        val_loss = 0
        performed = 0

        for r in range(self._reads):
            print(f"{r}/{self._reads}")
            try:
                x_windows, y_windows, _, _, _ = next(self._generator.get_window_batch(label_as_bases=True))
                nr_windows = len(x_windows)

                assert nr_windows == len(y_windows)

                y_pred = []
                for b in range(0,nr_windows,self._batch_size):
                    x_batch = x_windows[b:b+self._batch_size]          
                    y_batch_pred, _ = evaluate_batch(x_batch, model, len(x_batch), as_bases=True)
                    y_pred.extend(y_batch_pred)

                assembly = self.get_assembly(y_pred)
                acc = self.get_cig_accuracy(assembly)
                val_loss += acc
                performed += 1
            except Exception as e:
                print(e)

        if performed == 0:
            return 0
        return val_loss/performed # not using READS_TO_VALIDATE in case of error caught by catch
