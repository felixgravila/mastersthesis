from utils.AttentionDataGenerator import AttentionDataGenerator

def get_generator(model_config, process_config, kind=""):
    print(f"*** constructin {kind} generator...")
    batch_size = process_config['batch_size']
    if "dope_ratio" in process_config:
        batch_size = round(batch_size*(1-process_config["dope_ratio"]))
    return AttentionDataGenerator(
        process_config['data'], 
        process_config['bacteria'], 
        batch_size, 
        process_config['stride'],
        model_config['encoder_max_length'], 
        model_config['decoder_max_length'])

def get_doping_generator(model_config, process_config, kind=""):
    if process_config["dope"] == "" or process_config["dope_ratio"] == 0:
        print("*** Not using doping...")
        return None
    print(f"*** constructin {kind} generator...")
    return AttentionDataGenerator(
        process_config['dope'], 
        [], 
        round(process_config['batch_size']*(process_config["dope_ratio"])),
        process_config['stride'],
        model_config['encoder_max_length'],
        model_config['decoder_max_length'])