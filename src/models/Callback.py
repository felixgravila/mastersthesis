import os
import matplotlib as plt
import datetime
from tensorflow.keras.callbacks import Callback
import numpy as np

from utils.Other import labelBaseMap

class SaveCB(Callback):
    def __init__(self, chiron, prepper):

        self.chiron = chiron
        self.prepper = prepper
        self.best_dist = None
        self.save_mdoel = False
        self.save_image = False
        self.Xforimg = None
        self.testvalid = [[],[],[]]
        self.start_time = datetime.datetime.now().strftime("%Y-%m-%d_%H:%M:%S")

    def  withCheckpoints(self, dir):
        if(not os.path.exists(dir)):
            os.makedirs(dir)
        self.save_mdoel = True
        self.model_output_dir = dir
        return self

    def withImageOutput(self, dir):
        if(not os.path.exists(dir)):
            os.makedirs(dir)
        self.save_image = True
        self.image_output_dir = dir
        return self

    def save_anim_pic(self, epoch):
        fig, ax = plt.subplots( nrows=1, ncols=1, figsize=(30,10))
        ax.set_ylim(top=1)
        ax.set_ylim(bottom=0)
        prediction = self.chiron.predict_raw(self.Xforimg)[0]
        transposed = list(map(list, zip(*prediction)))
        for i in range(len(transposed)):
            ax.plot(transposed[i], label=labelBaseMap[i])
        ax.plot(self.Xforimg[0], "k", label="raw")
        ax.legend()
        fig.savefig(os.path.join(self.image_output_dir, f'{self.start_time}-{epoch:05d}.png'))
        plt.close(fig)
    
    def save_model(self, epoch, valloss):
        np.save(os.path.join(self.model_output_dir, self.start_time), np.array(self.testvalid))
        
        if self.best_dist is None or valloss < self.best_dist or epoch%20==0:
            self.best_dist = valloss
            self.model.save_weights(os.path.join(self.model_output_dir, f'{self.start_time}_e{epoch:05d}_dis{round(valloss*100)}.h5'))

    def on_epoch_end(self, epoch, logs={}):
        print(f"End of epoch {epoch}")
        # test_X, test_y = next(self.prepper.test_gen())
        # train_X, train_y = self.prepper.last_train_gen_data[0]['the_input'], self.prepper.last_train_gen_data[0]['unpadded_labels']
        # if self.Xforimg is None:
        #     self.Xforimg = test_X[0:1]
        
        # totloss, n, _ = self.chiron.calculate_loss(train_X, train_y)
        # testloss = totloss/n
        # print(f"\nAverage test edit distance is: {testloss}")
        # totloss, n, _ = self.chiron.calculate_loss(test_X, test_y)
        # valloss = totloss/n
        # print(f"\nAverage validation edit distance is: {valloss}")
        # self.testvalid[0].append(testloss)
        # self.testvalid[1].append(valloss)
        # self.testvalid[2].append(int(datetime.datetime.now().timestamp()))
        
        # if self.save_image:
        #     self.save_anim_pic(epoch)

        # if(self.save_model):
        #     self.save_model(epoch, valloss)
    