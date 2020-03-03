import os
import matplotlib.pyplot as plt
import datetime
from tensorflow.keras.callbacks import Callback
import numpy as np

from utils.Other import labelBaseMap

class SaveCB(Callback):
    def __init__(self, chiron, val_generator):

        self.chiron = chiron
        self.val_generator = val_generator
        self.best_dist = None
        self.save_model_flag = False
        self.save_image_flag = False
        self.Xforimg = None
        self.testvalid = [[],[]]
        self.start_time = datetime.datetime.now().strftime("%Y-%m-%d_%H:%M:%S")
        try:
            self.model_name = self.chiron.get_model_name()
        except:
            print("No model name defined in the model.")
            self.model_name = "chiron"

    def  withCheckpoints(self, dir):
        if(not os.path.exists(dir)):
            os.makedirs(dir)
        self.save_model_flag = True
        self.model_output_dir = dir
        return self

    def withImageOutput(self, dir):
        if(not os.path.exists(dir)):
            os.makedirs(dir)
        self.save_image_flag = True
        self.image_output_dir = dir
        return self

    # You can use this, but better to define get_model_name() in model and let it get it from there in __init__
    def withName(self, model_name):
        self.model_name = model_name
        return self

    def save_image(self, epoch):
        fig, ax = plt.subplots( nrows=1, ncols=1, figsize=(30,10))
        xmax = max(self.Xforimg[0])[0]
        xmin = min(self.Xforimg[0])[0]
        ax.set_ylim(top=xmax)
        ax.set_ylim(bottom=xmin)
        prediction = self.chiron.predict_raw(self.Xforimg)[0]
        transposed = list(map(list, zip(*prediction)))
        for i in range(len(transposed)):
            ti = [t*(xmax-xmin)+xmin for t in transposed[i]]
            ax.plot(ti, label=labelBaseMap[i])
        ax.plot(self.Xforimg[0], "k", label="raw")
        ax.legend()
        fig.savefig(os.path.join(self.image_output_dir, f'{self.model_name}-{self.start_time}-{epoch:05d}.png'))
        plt.close(fig)
    
    def save_model(self, epoch, valloss):
        if self.best_dist is None or valloss < self.best_dist or epoch%20==0:
            self.best_dist = valloss
            self.model.save_weights(os.path.join(self.model_output_dir, f'{self.model_name}-{self.start_time}_e{epoch:05d}_dis{round(valloss*100)}.h5'))

    def on_epoch_end(self, epoch, logs={}):
        print(f"End of epoch {epoch}")

        val_data, _ = next(self.val_generator.get_batch())
        val_X = val_data['the_input']
        val_y = val_data['unpadded_labels']

        tot_editdis, example_count, _ = self.chiron.calculate_loss(val_X, val_y)
        valloss = tot_editdis/example_count
        self.testvalid[0].append(valloss)
        self.testvalid[1].append(int(datetime.datetime.now().timestamp()))
        print(f"\nAverage validation edit distance is: {valloss}")
        np.save(os.path.join(self.model_output_dir, f"{self.model_name}-{self.start_time}"), np.array(self.testvalid))

        if self.save_model_flag:
            self.save_model(epoch, valloss)
        if self.save_image_flag:
            if self.Xforimg is None:
                self.Xforimg = val_X[0:1]
            self.save_image(epoch)
