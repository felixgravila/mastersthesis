import sys

sys.path.insert(0, './../src')
from utils.AttentionDataGenerator import AttentionDataGenerator

def run():
    filename = "mapped_therest.hdf5"
    training_bacteria = ["Bacillus", "Staphylococcus", "Lactobacillus", "Pseudomonas", "Listeria", "Enterococcus"]
    testing_bacteria = ["Escherichia", "Salmonella"]
    
    train_generator = AttentionDataGenerator(filename, bacteria=training_bacteria, batch_size=32, stride=30, pe_encoder_max_length=300, pe_decoder_max_length=100)
    test_generator = AttentionDataGenerator(filename, bacteria=testing_bacteria, batch_size=32, stride=30, pe_encoder_max_length=300, pe_decoder_max_length=100)

    batches = next(train_generator.get_batches(100))
    for (batch, (inp, tar)) in enumerate(batches):  
        print(f"{batch}| {inp.shape}")
    print("Training Done")

    batches = next(test_generator.get_batches(100))
    for (batch, (inp, tar)) in enumerate(batches):  
        print(f"{batch}| {inp.shape}")
    print("Testing Done")

if __name__ == "__main__":
    run()