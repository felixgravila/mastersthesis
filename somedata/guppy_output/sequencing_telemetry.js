[
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1,
                "pass": 13
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 6.0
                },
                {
                    "count": 3,
                    "mean_qscore": 9.5
                },
                {
                    "count": 5,
                    "mean_qscore": 10.0
                },
                {
                    "count": 2,
                    "mean_qscore": 10.5
                },
                {
                    "count": 3,
                    "mean_qscore": 11.0
                }
            ],
            "qscore_sum_temp": {
                "count": 14,
                "mean": 10.0943956375122,
                "sum": 141.321533203125
            },
            "read_len_events_sum_temp": 280209,
            "seq_len_bases_dist_temp": [
                {
                    "count": 14,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 14,
            "seq_len_events_dist_temp": [
                {
                    "count": 6,
                    "length": 10000.0
                },
                {
                    "count": 2,
                    "length": 11000.0
                },
                {
                    "count": 1,
                    "length": 12000.0
                },
                {
                    "count": 1,
                    "length": 22000.0
                },
                {
                    "count": 1,
                    "length": 32000.0
                },
                {
                    "count": 1,
                    "length": 33000.0
                },
                {
                    "count": 1,
                    "length": 39000.0
                },
                {
                    "count": 1,
                    "length": 54000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 14,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 14,
                "mean": 74.4737930297852,
                "sum": 1042.63305664062
            },
            "strand_sd_pa": {
                "count": 14,
                "mean": 9.33998775482178,
                "sum": 130.759826660156
            }
        },
        "channel_count": 14,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 3500.0556640625,
        "levels_sums": {
            "count": 14,
            "mean": 204.708709716797,
            "open_pore_level_sum": 2865.921875
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 14,
        "reads_per_channel_dist": [
            {
                "channel": 55,
                "count": 1
            },
            {
                "channel": 69,
                "count": 1
            },
            {
                "channel": 94,
                "count": 1
            },
            {
                "channel": 96,
                "count": 1
            },
            {
                "channel": 154,
                "count": 1
            },
            {
                "channel": 200,
                "count": 1
            },
            {
                "channel": 224,
                "count": 1
            },
            {
                "channel": 245,
                "count": 1
            },
            {
                "channel": 274,
                "count": 1
            },
            {
                "channel": 382,
                "count": 1
            },
            {
                "channel": 400,
                "count": 1
            },
            {
                "channel": 466,
                "count": 1
            },
            {
                "channel": 480,
                "count": 1
            },
            {
                "channel": 508,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 1,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "a14c1d08-7f80-4ed1-8e13-2515153cad7a",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 18
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 8.0
                },
                {
                    "count": 1,
                    "mean_qscore": 8.5
                },
                {
                    "count": 1,
                    "mean_qscore": 9.0
                },
                {
                    "count": 5,
                    "mean_qscore": 10.0
                },
                {
                    "count": 5,
                    "mean_qscore": 10.5
                },
                {
                    "count": 3,
                    "mean_qscore": 11.0
                },
                {
                    "count": 2,
                    "mean_qscore": 11.5
                }
            ],
            "qscore_sum_temp": {
                "count": 18,
                "mean": 10.4663343429565,
                "sum": 188.394012451172
            },
            "read_len_events_sum_temp": 327290,
            "seq_len_bases_dist_temp": [
                {
                    "count": 18,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 18,
            "seq_len_events_dist_temp": [
                {
                    "count": 4,
                    "length": 10000.0
                },
                {
                    "count": 6,
                    "length": 11000.0
                },
                {
                    "count": 1,
                    "length": 12000.0
                },
                {
                    "count": 1,
                    "length": 20000.0
                },
                {
                    "count": 2,
                    "length": 23000.0
                },
                {
                    "count": 1,
                    "length": 32000.0
                },
                {
                    "count": 2,
                    "length": 33000.0
                },
                {
                    "count": 1,
                    "length": 34000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 18,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 18,
                "mean": 72.3285140991211,
                "sum": 1301.91320800781
            },
            "strand_sd_pa": {
                "count": 18,
                "mean": 9.14993381500244,
                "sum": 164.698806762695
            }
        },
        "channel_count": 17,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 7168.4208984375,
        "levels_sums": {
            "count": 18,
            "mean": 202.582168579102,
            "open_pore_level_sum": 3646.47900390625
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 18,
        "reads_per_channel_dist": [
            {
                "channel": 48,
                "count": 1
            },
            {
                "channel": 54,
                "count": 1
            },
            {
                "channel": 78,
                "count": 1
            },
            {
                "channel": 86,
                "count": 1
            },
            {
                "channel": 104,
                "count": 1
            },
            {
                "channel": 148,
                "count": 1
            },
            {
                "channel": 185,
                "count": 1
            },
            {
                "channel": 194,
                "count": 1
            },
            {
                "channel": 203,
                "count": 1
            },
            {
                "channel": 225,
                "count": 1
            },
            {
                "channel": 236,
                "count": 1
            },
            {
                "channel": 289,
                "count": 1
            },
            {
                "channel": 318,
                "count": 1
            },
            {
                "channel": 330,
                "count": 1
            },
            {
                "channel": 345,
                "count": 1
            },
            {
                "channel": 414,
                "count": 2
            },
            {
                "channel": 445,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 2,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "c83e54b9-7078-4b05-82d8-34ffa77884e4",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 18
            },
            "qscore_dist_temp": [
                {
                    "count": 3,
                    "mean_qscore": 9.0
                },
                {
                    "count": 5,
                    "mean_qscore": 9.5
                },
                {
                    "count": 2,
                    "mean_qscore": 10.0
                },
                {
                    "count": 5,
                    "mean_qscore": 10.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                },
                {
                    "count": 2,
                    "mean_qscore": 11.5
                }
            ],
            "qscore_sum_temp": {
                "count": 18,
                "mean": 10.3379077911377,
                "sum": 186.082336425781
            },
            "read_len_events_sum_temp": 485029,
            "seq_len_bases_dist_temp": [
                {
                    "count": 18,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 18,
            "seq_len_events_dist_temp": [
                {
                    "count": 2,
                    "length": 11000.0
                },
                {
                    "count": 4,
                    "length": 12000.0
                },
                {
                    "count": 1,
                    "length": 21000.0
                },
                {
                    "count": 1,
                    "length": 22000.0
                },
                {
                    "count": 2,
                    "length": 23000.0
                },
                {
                    "count": 1,
                    "length": 25000.0
                },
                {
                    "count": 1,
                    "length": 27000.0
                },
                {
                    "count": 1,
                    "length": 33000.0
                },
                {
                    "count": 1,
                    "length": 34000.0
                },
                {
                    "count": 1,
                    "length": 36000.0
                },
                {
                    "count": 1,
                    "length": 39000.0
                },
                {
                    "count": 1,
                    "length": 58000.0
                },
                {
                    "count": 1,
                    "length": 65000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 18,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 18,
                "mean": 71.2086944580078,
                "sum": 1281.75646972656
            },
            "strand_sd_pa": {
                "count": 18,
                "mean": 9.48492050170898,
                "sum": 170.728576660156
            }
        },
        "channel_count": 18,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 10671.01953125,
        "levels_sums": {
            "count": 18,
            "mean": 201.080810546875,
            "open_pore_level_sum": 3619.45458984375
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 18,
        "reads_per_channel_dist": [
            {
                "channel": 27,
                "count": 1
            },
            {
                "channel": 31,
                "count": 1
            },
            {
                "channel": 52,
                "count": 1
            },
            {
                "channel": 93,
                "count": 1
            },
            {
                "channel": 137,
                "count": 1
            },
            {
                "channel": 203,
                "count": 1
            },
            {
                "channel": 210,
                "count": 1
            },
            {
                "channel": 242,
                "count": 1
            },
            {
                "channel": 277,
                "count": 1
            },
            {
                "channel": 285,
                "count": 1
            },
            {
                "channel": 296,
                "count": 1
            },
            {
                "channel": 313,
                "count": 1
            },
            {
                "channel": 321,
                "count": 1
            },
            {
                "channel": 356,
                "count": 1
            },
            {
                "channel": 396,
                "count": 1
            },
            {
                "channel": 423,
                "count": 1
            },
            {
                "channel": 488,
                "count": 1
            },
            {
                "channel": 511,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 3,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "b76f9940-6aae-4cd8-89d2-d60f6b1ac5b0",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 13
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 9.0
                },
                {
                    "count": 3,
                    "mean_qscore": 9.5
                },
                {
                    "count": 1,
                    "mean_qscore": 10.0
                },
                {
                    "count": 2,
                    "mean_qscore": 10.5
                },
                {
                    "count": 3,
                    "mean_qscore": 11.0
                },
                {
                    "count": 3,
                    "mean_qscore": 11.5
                }
            ],
            "qscore_sum_temp": {
                "count": 13,
                "mean": 10.78830909729,
                "sum": 140.248016357422
            },
            "read_len_events_sum_temp": 274457,
            "seq_len_bases_dist_temp": [
                {
                    "count": 13,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 13,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 11000.0
                },
                {
                    "count": 2,
                    "length": 12000.0
                },
                {
                    "count": 3,
                    "length": 13000.0
                },
                {
                    "count": 1,
                    "length": 15000.0
                },
                {
                    "count": 1,
                    "length": 23000.0
                },
                {
                    "count": 2,
                    "length": 26000.0
                },
                {
                    "count": 1,
                    "length": 30000.0
                },
                {
                    "count": 2,
                    "length": 37000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 13,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 13,
                "mean": 71.1777801513672,
                "sum": 925.311096191406
            },
            "strand_sd_pa": {
                "count": 13,
                "mean": 9.32957553863525,
                "sum": 121.284484863281
            }
        },
        "channel_count": 13,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 14152.43359375,
        "levels_sums": {
            "count": 13,
            "mean": 202.324142456055,
            "open_pore_level_sum": 2630.2138671875
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 13,
        "reads_per_channel_dist": [
            {
                "channel": 6,
                "count": 1
            },
            {
                "channel": 26,
                "count": 1
            },
            {
                "channel": 59,
                "count": 1
            },
            {
                "channel": 132,
                "count": 1
            },
            {
                "channel": 134,
                "count": 1
            },
            {
                "channel": 181,
                "count": 1
            },
            {
                "channel": 302,
                "count": 1
            },
            {
                "channel": 322,
                "count": 1
            },
            {
                "channel": 335,
                "count": 1
            },
            {
                "channel": 386,
                "count": 1
            },
            {
                "channel": 411,
                "count": 1
            },
            {
                "channel": 427,
                "count": 1
            },
            {
                "channel": 475,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 4,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "481cb302-792e-4e2f-9274-fbd66aac6848",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 11
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 7.0
                },
                {
                    "count": 2,
                    "mean_qscore": 10.0
                },
                {
                    "count": 4,
                    "mean_qscore": 10.5
                },
                {
                    "count": 3,
                    "mean_qscore": 11.0
                },
                {
                    "count": 1,
                    "mean_qscore": 11.5
                }
            ],
            "qscore_sum_temp": {
                "count": 11,
                "mean": 10.5781087875366,
                "sum": 116.359191894531
            },
            "read_len_events_sum_temp": 276943,
            "seq_len_bases_dist_temp": [
                {
                    "count": 11,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 11,
            "seq_len_events_dist_temp": [
                {
                    "count": 2,
                    "length": 12000.0
                },
                {
                    "count": 2,
                    "length": 13000.0
                },
                {
                    "count": 1,
                    "length": 14000.0
                },
                {
                    "count": 1,
                    "length": 15000.0
                },
                {
                    "count": 2,
                    "length": 16000.0
                },
                {
                    "count": 1,
                    "length": 40000.0
                },
                {
                    "count": 1,
                    "length": 54000.0
                },
                {
                    "count": 1,
                    "length": 67000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 11,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 11,
                "mean": 68.0032577514648,
                "sum": 748.035827636719
            },
            "strand_sd_pa": {
                "count": 11,
                "mean": 9.80424690246582,
                "sum": 107.846717834473
            }
        },
        "channel_count": 11,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 17544.734375,
        "levels_sums": {
            "count": 11,
            "mean": 199.975036621094,
            "open_pore_level_sum": 2199.72534179688
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 11,
        "reads_per_channel_dist": [
            {
                "channel": 19,
                "count": 1
            },
            {
                "channel": 115,
                "count": 1
            },
            {
                "channel": 134,
                "count": 1
            },
            {
                "channel": 148,
                "count": 1
            },
            {
                "channel": 161,
                "count": 1
            },
            {
                "channel": 310,
                "count": 1
            },
            {
                "channel": 349,
                "count": 1
            },
            {
                "channel": 403,
                "count": 1
            },
            {
                "channel": 413,
                "count": 1
            },
            {
                "channel": 490,
                "count": 1
            },
            {
                "channel": 499,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 5,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "b84c6492-e395-4cd1-a8c2-d762ec8a5e51",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 18
            },
            "qscore_dist_temp": [
                {
                    "count": 2,
                    "mean_qscore": 8.0
                },
                {
                    "count": 1,
                    "mean_qscore": 9.0
                },
                {
                    "count": 2,
                    "mean_qscore": 9.5
                },
                {
                    "count": 6,
                    "mean_qscore": 10.0
                },
                {
                    "count": 4,
                    "mean_qscore": 10.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                },
                {
                    "count": 2,
                    "mean_qscore": 11.5
                }
            ],
            "qscore_sum_temp": {
                "count": 18,
                "mean": 10.3109836578369,
                "sum": 185.597702026367
            },
            "read_len_events_sum_temp": 263617,
            "seq_len_bases_dist_temp": [
                {
                    "count": 18,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 18,
            "seq_len_events_dist_temp": [
                {
                    "count": 2,
                    "length": 9000.0
                },
                {
                    "count": 5,
                    "length": 10000.0
                },
                {
                    "count": 2,
                    "length": 11000.0
                },
                {
                    "count": 2,
                    "length": 12000.0
                },
                {
                    "count": 4,
                    "length": 14000.0
                },
                {
                    "count": 2,
                    "length": 22000.0
                },
                {
                    "count": 1,
                    "length": 41000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 18,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 18,
                "mean": 68.461784362793,
                "sum": 1232.31213378906
            },
            "strand_sd_pa": {
                "count": 18,
                "mean": 9.41792392730713,
                "sum": 169.52262878418
            }
        },
        "channel_count": 18,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 21399.439453125,
        "levels_sums": {
            "count": 18,
            "mean": 191.586029052734,
            "open_pore_level_sum": 3448.54858398438
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 18,
        "reads_per_channel_dist": [
            {
                "channel": 23,
                "count": 1
            },
            {
                "channel": 50,
                "count": 1
            },
            {
                "channel": 79,
                "count": 1
            },
            {
                "channel": 153,
                "count": 1
            },
            {
                "channel": 160,
                "count": 1
            },
            {
                "channel": 168,
                "count": 1
            },
            {
                "channel": 173,
                "count": 1
            },
            {
                "channel": 213,
                "count": 1
            },
            {
                "channel": 238,
                "count": 1
            },
            {
                "channel": 260,
                "count": 1
            },
            {
                "channel": 344,
                "count": 1
            },
            {
                "channel": 362,
                "count": 1
            },
            {
                "channel": 366,
                "count": 1
            },
            {
                "channel": 376,
                "count": 1
            },
            {
                "channel": 397,
                "count": 1
            },
            {
                "channel": 427,
                "count": 1
            },
            {
                "channel": 484,
                "count": 1
            },
            {
                "channel": 487,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 6,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "23be32aa-500e-4d24-87fa-53191586ee6d",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 24
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 7.0
                },
                {
                    "count": 1,
                    "mean_qscore": 8.5
                },
                {
                    "count": 3,
                    "mean_qscore": 9.5
                },
                {
                    "count": 7,
                    "mean_qscore": 10.0
                },
                {
                    "count": 10,
                    "mean_qscore": 10.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                },
                {
                    "count": 1,
                    "mean_qscore": 11.5
                }
            ],
            "qscore_sum_temp": {
                "count": 24,
                "mean": 10.300874710083,
                "sum": 247.220993041992
            },
            "read_len_events_sum_temp": 452267,
            "seq_len_bases_dist_temp": [
                {
                    "count": 24,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 24,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 9000.0
                },
                {
                    "count": 6,
                    "length": 10000.0
                },
                {
                    "count": 10,
                    "length": 11000.0
                },
                {
                    "count": 2,
                    "length": 15000.0
                },
                {
                    "count": 1,
                    "length": 22000.0
                },
                {
                    "count": 1,
                    "length": 23000.0
                },
                {
                    "count": 1,
                    "length": 55000.0
                },
                {
                    "count": 1,
                    "length": 64000.0
                },
                {
                    "count": 1,
                    "length": 67000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 24,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 24,
                "mean": 71.1297302246094,
                "sum": 1707.11352539062
            },
            "strand_sd_pa": {
                "count": 24,
                "mean": 9.28153800964355,
                "sum": 222.756912231445
            }
        },
        "channel_count": 23,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 25192.82421875,
        "levels_sums": {
            "count": 24,
            "mean": 196.896194458008,
            "open_pore_level_sum": 4725.5087890625
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 24,
        "reads_per_channel_dist": [
            {
                "channel": 14,
                "count": 1
            },
            {
                "channel": 16,
                "count": 1
            },
            {
                "channel": 69,
                "count": 1
            },
            {
                "channel": 83,
                "count": 2
            },
            {
                "channel": 108,
                "count": 1
            },
            {
                "channel": 123,
                "count": 1
            },
            {
                "channel": 125,
                "count": 1
            },
            {
                "channel": 131,
                "count": 1
            },
            {
                "channel": 184,
                "count": 1
            },
            {
                "channel": 212,
                "count": 1
            },
            {
                "channel": 225,
                "count": 1
            },
            {
                "channel": 245,
                "count": 1
            },
            {
                "channel": 277,
                "count": 1
            },
            {
                "channel": 326,
                "count": 1
            },
            {
                "channel": 345,
                "count": 1
            },
            {
                "channel": 374,
                "count": 1
            },
            {
                "channel": 381,
                "count": 1
            },
            {
                "channel": 397,
                "count": 1
            },
            {
                "channel": 408,
                "count": 1
            },
            {
                "channel": 410,
                "count": 1
            },
            {
                "channel": 423,
                "count": 1
            },
            {
                "channel": 476,
                "count": 1
            },
            {
                "channel": 508,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 7,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "62319e93-7cfc-422a-a14e-8cc2d6ba8c73",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1,
                "pass": 17
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 6.5
                },
                {
                    "count": 2,
                    "mean_qscore": 8.5
                },
                {
                    "count": 3,
                    "mean_qscore": 9.5
                },
                {
                    "count": 5,
                    "mean_qscore": 10.0
                },
                {
                    "count": 5,
                    "mean_qscore": 10.5
                },
                {
                    "count": 2,
                    "mean_qscore": 11.5
                }
            ],
            "qscore_sum_temp": {
                "count": 18,
                "mean": 10.0706205368042,
                "sum": 181.27116394043
            },
            "read_len_events_sum_temp": 331270,
            "seq_len_bases_dist_temp": [
                {
                    "count": 18,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 18,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 8000.0
                },
                {
                    "count": 4,
                    "length": 10000.0
                },
                {
                    "count": 5,
                    "length": 11000.0
                },
                {
                    "count": 1,
                    "length": 12000.0
                },
                {
                    "count": 1,
                    "length": 13000.0
                },
                {
                    "count": 1,
                    "length": 15000.0
                },
                {
                    "count": 2,
                    "length": 21000.0
                },
                {
                    "count": 1,
                    "length": 31000.0
                },
                {
                    "count": 1,
                    "length": 36000.0
                },
                {
                    "count": 1,
                    "length": 70000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 18,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 18,
                "mean": 71.687255859375,
                "sum": 1290.37060546875
            },
            "strand_sd_pa": {
                "count": 18,
                "mean": 9.2169303894043,
                "sum": 165.904754638672
            }
        },
        "channel_count": 17,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 28778.685546875,
        "levels_sums": {
            "count": 18,
            "mean": 197.621139526367,
            "open_pore_level_sum": 3557.18041992188
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 18,
        "reads_per_channel_dist": [
            {
                "channel": 20,
                "count": 1
            },
            {
                "channel": 91,
                "count": 1
            },
            {
                "channel": 105,
                "count": 1
            },
            {
                "channel": 107,
                "count": 1
            },
            {
                "channel": 125,
                "count": 1
            },
            {
                "channel": 146,
                "count": 1
            },
            {
                "channel": 160,
                "count": 1
            },
            {
                "channel": 205,
                "count": 1
            },
            {
                "channel": 230,
                "count": 2
            },
            {
                "channel": 249,
                "count": 1
            },
            {
                "channel": 264,
                "count": 1
            },
            {
                "channel": 289,
                "count": 1
            },
            {
                "channel": 291,
                "count": 1
            },
            {
                "channel": 300,
                "count": 1
            },
            {
                "channel": 367,
                "count": 1
            },
            {
                "channel": 387,
                "count": 1
            },
            {
                "channel": 419,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 8,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "6ca82289-d3c1-4ce1-bed7-f1090aed9fa2",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1,
                "pass": 13
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 6.0
                },
                {
                    "count": 2,
                    "mean_qscore": 8.5
                },
                {
                    "count": 4,
                    "mean_qscore": 9.5
                },
                {
                    "count": 2,
                    "mean_qscore": 10.0
                },
                {
                    "count": 4,
                    "mean_qscore": 10.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                }
            ],
            "qscore_sum_temp": {
                "count": 14,
                "mean": 9.77545642852783,
                "sum": 136.856384277344
            },
            "read_len_events_sum_temp": 381002,
            "seq_len_bases_dist_temp": [
                {
                    "count": 14,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 14,
            "seq_len_events_dist_temp": [
                {
                    "count": 2,
                    "length": 10000.0
                },
                {
                    "count": 2,
                    "length": 11000.0
                },
                {
                    "count": 1,
                    "length": 12000.0
                },
                {
                    "count": 1,
                    "length": 23000.0
                },
                {
                    "count": 1,
                    "length": 24000.0
                },
                {
                    "count": 1,
                    "length": 31000.0
                },
                {
                    "count": 2,
                    "length": 34000.0
                },
                {
                    "count": 1,
                    "length": 35000.0
                },
                {
                    "count": 1,
                    "length": 39000.0
                },
                {
                    "count": 1,
                    "length": 42000.0
                },
                {
                    "count": 1,
                    "length": 59000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 14,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 14,
                "mean": 70.4498443603516,
                "sum": 986.297790527344
            },
            "strand_sd_pa": {
                "count": 14,
                "mean": 9.40151691436768,
                "sum": 131.621231079102
            }
        },
        "channel_count": 14,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 32106.794921875,
        "levels_sums": {
            "count": 14,
            "mean": 197.615020751953,
            "open_pore_level_sum": 2766.6103515625
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 14,
        "reads_per_channel_dist": [
            {
                "channel": 71,
                "count": 1
            },
            {
                "channel": 82,
                "count": 1
            },
            {
                "channel": 83,
                "count": 1
            },
            {
                "channel": 113,
                "count": 1
            },
            {
                "channel": 138,
                "count": 1
            },
            {
                "channel": 165,
                "count": 1
            },
            {
                "channel": 168,
                "count": 1
            },
            {
                "channel": 202,
                "count": 1
            },
            {
                "channel": 233,
                "count": 1
            },
            {
                "channel": 246,
                "count": 1
            },
            {
                "channel": 265,
                "count": 1
            },
            {
                "channel": 357,
                "count": 1
            },
            {
                "channel": 474,
                "count": 1
            },
            {
                "channel": 480,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 9,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "e8428ab1-fa69-4e19-9487-3ca7d79201bd",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 20
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 7.5
                },
                {
                    "count": 1,
                    "mean_qscore": 8.0
                },
                {
                    "count": 6,
                    "mean_qscore": 9.0
                },
                {
                    "count": 1,
                    "mean_qscore": 9.5
                },
                {
                    "count": 2,
                    "mean_qscore": 10.0
                },
                {
                    "count": 6,
                    "mean_qscore": 10.5
                },
                {
                    "count": 3,
                    "mean_qscore": 11.0
                }
            ],
            "qscore_sum_temp": {
                "count": 20,
                "mean": 10.0159168243408,
                "sum": 200.318328857422
            },
            "read_len_events_sum_temp": 479205,
            "seq_len_bases_dist_temp": [
                {
                    "count": 20,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 20,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 10000.0
                },
                {
                    "count": 1,
                    "length": 11000.0
                },
                {
                    "count": 6,
                    "length": 12000.0
                },
                {
                    "count": 1,
                    "length": 13000.0
                },
                {
                    "count": 1,
                    "length": 20000.0
                },
                {
                    "count": 3,
                    "length": 22000.0
                },
                {
                    "count": 1,
                    "length": 23000.0
                },
                {
                    "count": 2,
                    "length": 34000.0
                },
                {
                    "count": 2,
                    "length": 36000.0
                },
                {
                    "count": 1,
                    "length": 43000.0
                },
                {
                    "count": 1,
                    "length": 72000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 20,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 20,
                "mean": 69.3940277099609,
                "sum": 1387.88049316406
            },
            "strand_sd_pa": {
                "count": 20,
                "mean": 9.27723026275635,
                "sum": 185.54460144043
            }
        },
        "channel_count": 20,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 35923.08984375,
        "levels_sums": {
            "count": 20,
            "mean": 193.945281982422,
            "open_pore_level_sum": 3878.90551757812
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 20,
        "reads_per_channel_dist": [
            {
                "channel": 36,
                "count": 1
            },
            {
                "channel": 65,
                "count": 1
            },
            {
                "channel": 79,
                "count": 1
            },
            {
                "channel": 125,
                "count": 1
            },
            {
                "channel": 126,
                "count": 1
            },
            {
                "channel": 185,
                "count": 1
            },
            {
                "channel": 187,
                "count": 1
            },
            {
                "channel": 217,
                "count": 1
            },
            {
                "channel": 235,
                "count": 1
            },
            {
                "channel": 264,
                "count": 1
            },
            {
                "channel": 267,
                "count": 1
            },
            {
                "channel": 315,
                "count": 1
            },
            {
                "channel": 349,
                "count": 1
            },
            {
                "channel": 368,
                "count": 1
            },
            {
                "channel": 375,
                "count": 1
            },
            {
                "channel": 381,
                "count": 1
            },
            {
                "channel": 394,
                "count": 1
            },
            {
                "channel": 422,
                "count": 1
            },
            {
                "channel": 460,
                "count": 1
            },
            {
                "channel": 512,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 10,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "8bb741fa-83d1-46cb-bb6f-23e6c7e0cc7b",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 15
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 8.0
                },
                {
                    "count": 1,
                    "mean_qscore": 9.0
                },
                {
                    "count": 2,
                    "mean_qscore": 9.5
                },
                {
                    "count": 3,
                    "mean_qscore": 10.0
                },
                {
                    "count": 6,
                    "mean_qscore": 10.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                },
                {
                    "count": 1,
                    "mean_qscore": 12.0
                }
            ],
            "qscore_sum_temp": {
                "count": 15,
                "mean": 10.3165445327759,
                "sum": 154.748168945312
            },
            "read_len_events_sum_temp": 291001,
            "seq_len_bases_dist_temp": [
                {
                    "count": 15,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 15,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 10000.0
                },
                {
                    "count": 2,
                    "length": 11000.0
                },
                {
                    "count": 4,
                    "length": 12000.0
                },
                {
                    "count": 1,
                    "length": 13000.0
                },
                {
                    "count": 1,
                    "length": 21000.0
                },
                {
                    "count": 2,
                    "length": 23000.0
                },
                {
                    "count": 2,
                    "length": 24000.0
                },
                {
                    "count": 1,
                    "length": 35000.0
                },
                {
                    "count": 1,
                    "length": 40000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 15,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 15,
                "mean": 70.990478515625,
                "sum": 1064.85717773438
            },
            "strand_sd_pa": {
                "count": 15,
                "mean": 9.52129077911377,
                "sum": 142.819366455078
            }
        },
        "channel_count": 15,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 39393.94140625,
        "levels_sums": {
            "count": 15,
            "mean": 198.357147216797,
            "open_pore_level_sum": 2975.35717773438
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 15,
        "reads_per_channel_dist": [
            {
                "channel": 39,
                "count": 1
            },
            {
                "channel": 84,
                "count": 1
            },
            {
                "channel": 91,
                "count": 1
            },
            {
                "channel": 176,
                "count": 1
            },
            {
                "channel": 216,
                "count": 1
            },
            {
                "channel": 230,
                "count": 1
            },
            {
                "channel": 255,
                "count": 1
            },
            {
                "channel": 271,
                "count": 1
            },
            {
                "channel": 318,
                "count": 1
            },
            {
                "channel": 333,
                "count": 1
            },
            {
                "channel": 351,
                "count": 1
            },
            {
                "channel": 462,
                "count": 1
            },
            {
                "channel": 503,
                "count": 1
            },
            {
                "channel": 511,
                "count": 1
            },
            {
                "channel": 512,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 11,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "54c1b1af-2461-40cc-b025-55fdfe150f85",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 12
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 8.5
                },
                {
                    "count": 2,
                    "mean_qscore": 9.5
                },
                {
                    "count": 4,
                    "mean_qscore": 10.0
                },
                {
                    "count": 2,
                    "mean_qscore": 10.5
                },
                {
                    "count": 2,
                    "mean_qscore": 11.0
                },
                {
                    "count": 1,
                    "mean_qscore": 11.5
                }
            ],
            "qscore_sum_temp": {
                "count": 12,
                "mean": 10.3766775131226,
                "sum": 124.520126342773
            },
            "read_len_events_sum_temp": 359553,
            "seq_len_bases_dist_temp": [
                {
                    "count": 12,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 12,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 11000.0
                },
                {
                    "count": 1,
                    "length": 12000.0
                },
                {
                    "count": 1,
                    "length": 20000.0
                },
                {
                    "count": 1,
                    "length": 21000.0
                },
                {
                    "count": 1,
                    "length": 22000.0
                },
                {
                    "count": 1,
                    "length": 23000.0
                },
                {
                    "count": 1,
                    "length": 33000.0
                },
                {
                    "count": 1,
                    "length": 34000.0
                },
                {
                    "count": 1,
                    "length": 35000.0
                },
                {
                    "count": 1,
                    "length": 37000.0
                },
                {
                    "count": 1,
                    "length": 47000.0
                },
                {
                    "count": 1,
                    "length": 59000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 12,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 12,
                "mean": 72.184944152832,
                "sum": 866.219360351562
            },
            "strand_sd_pa": {
                "count": 12,
                "mean": 9.647629737854,
                "sum": 115.771553039551
            }
        },
        "channel_count": 12,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 42831.1640625,
        "levels_sums": {
            "count": 12,
            "mean": 201.324279785156,
            "open_pore_level_sum": 2415.89135742188
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 12,
        "reads_per_channel_dist": [
            {
                "channel": 37,
                "count": 1
            },
            {
                "channel": 155,
                "count": 1
            },
            {
                "channel": 168,
                "count": 1
            },
            {
                "channel": 207,
                "count": 1
            },
            {
                "channel": 236,
                "count": 1
            },
            {
                "channel": 302,
                "count": 1
            },
            {
                "channel": 316,
                "count": 1
            },
            {
                "channel": 336,
                "count": 1
            },
            {
                "channel": 350,
                "count": 1
            },
            {
                "channel": 380,
                "count": 1
            },
            {
                "channel": 386,
                "count": 1
            },
            {
                "channel": 492,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 12,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "323597cc-5fab-420d-bd09-5b736f425264",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 14
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 7.5
                },
                {
                    "count": 1,
                    "mean_qscore": 9.0
                },
                {
                    "count": 1,
                    "mean_qscore": 9.5
                },
                {
                    "count": 1,
                    "mean_qscore": 10.0
                },
                {
                    "count": 3,
                    "mean_qscore": 10.5
                },
                {
                    "count": 4,
                    "mean_qscore": 11.0
                },
                {
                    "count": 2,
                    "mean_qscore": 11.5
                },
                {
                    "count": 1,
                    "mean_qscore": 12.0
                }
            ],
            "qscore_sum_temp": {
                "count": 14,
                "mean": 10.6712436676025,
                "sum": 149.397415161133
            },
            "read_len_events_sum_temp": 298191,
            "seq_len_bases_dist_temp": [
                {
                    "count": 14,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 14,
            "seq_len_events_dist_temp": [
                {
                    "count": 4,
                    "length": 11000.0
                },
                {
                    "count": 2,
                    "length": 12000.0
                },
                {
                    "count": 2,
                    "length": 13000.0
                },
                {
                    "count": 1,
                    "length": 21000.0
                },
                {
                    "count": 2,
                    "length": 24000.0
                },
                {
                    "count": 1,
                    "length": 35000.0
                },
                {
                    "count": 1,
                    "length": 38000.0
                },
                {
                    "count": 1,
                    "length": 53000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 14,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 14,
                "mean": 69.9084014892578,
                "sum": 978.717590332031
            },
            "strand_sd_pa": {
                "count": 14,
                "mean": 9.65993499755859,
                "sum": 135.23908996582
            }
        },
        "channel_count": 14,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 46293.5234375,
        "levels_sums": {
            "count": 14,
            "mean": 198.26203918457,
            "open_pore_level_sum": 2775.66845703125
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 14,
        "reads_per_channel_dist": [
            {
                "channel": 42,
                "count": 1
            },
            {
                "channel": 61,
                "count": 1
            },
            {
                "channel": 135,
                "count": 1
            },
            {
                "channel": 148,
                "count": 1
            },
            {
                "channel": 158,
                "count": 1
            },
            {
                "channel": 230,
                "count": 1
            },
            {
                "channel": 241,
                "count": 1
            },
            {
                "channel": 337,
                "count": 1
            },
            {
                "channel": 461,
                "count": 1
            },
            {
                "channel": 475,
                "count": 1
            },
            {
                "channel": 476,
                "count": 1
            },
            {
                "channel": 480,
                "count": 1
            },
            {
                "channel": 500,
                "count": 1
            },
            {
                "channel": 508,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 13,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "1386a94f-ce4f-446a-b3ac-35ae72afa2a7",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 15
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 8.5
                },
                {
                    "count": 2,
                    "mean_qscore": 9.0
                },
                {
                    "count": 1,
                    "mean_qscore": 9.5
                },
                {
                    "count": 1,
                    "mean_qscore": 10.0
                },
                {
                    "count": 3,
                    "mean_qscore": 10.5
                },
                {
                    "count": 4,
                    "mean_qscore": 11.0
                },
                {
                    "count": 3,
                    "mean_qscore": 11.5
                }
            ],
            "qscore_sum_temp": {
                "count": 15,
                "mean": 10.5967874526978,
                "sum": 158.951812744141
            },
            "read_len_events_sum_temp": 355911,
            "seq_len_bases_dist_temp": [
                {
                    "count": 15,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 15,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 11000.0
                },
                {
                    "count": 3,
                    "length": 12000.0
                },
                {
                    "count": 2,
                    "length": 13000.0
                },
                {
                    "count": 1,
                    "length": 15000.0
                },
                {
                    "count": 1,
                    "length": 17000.0
                },
                {
                    "count": 1,
                    "length": 24000.0
                },
                {
                    "count": 3,
                    "length": 25000.0
                },
                {
                    "count": 1,
                    "length": 37000.0
                },
                {
                    "count": 1,
                    "length": 39000.0
                },
                {
                    "count": 1,
                    "length": 67000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 15,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 15,
                "mean": 69.5318450927734,
                "sum": 1042.97766113281
            },
            "strand_sd_pa": {
                "count": 15,
                "mean": 9.08485126495361,
                "sum": 136.272766113281
            }
        },
        "channel_count": 14,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 50325.8671875,
        "levels_sums": {
            "count": 15,
            "mean": 194.782669067383,
            "open_pore_level_sum": 2921.73999023438
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 15,
        "reads_per_channel_dist": [
            {
                "channel": 12,
                "count": 1
            },
            {
                "channel": 18,
                "count": 1
            },
            {
                "channel": 45,
                "count": 1
            },
            {
                "channel": 88,
                "count": 1
            },
            {
                "channel": 115,
                "count": 1
            },
            {
                "channel": 118,
                "count": 1
            },
            {
                "channel": 144,
                "count": 1
            },
            {
                "channel": 183,
                "count": 2
            },
            {
                "channel": 185,
                "count": 1
            },
            {
                "channel": 264,
                "count": 1
            },
            {
                "channel": 353,
                "count": 1
            },
            {
                "channel": 472,
                "count": 1
            },
            {
                "channel": 498,
                "count": 1
            },
            {
                "channel": 500,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 14,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "c89e5f18-24f4-4aeb-ae96-36648348501e",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 13
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 8.0
                },
                {
                    "count": 1,
                    "mean_qscore": 8.5
                },
                {
                    "count": 2,
                    "mean_qscore": 9.0
                },
                {
                    "count": 1,
                    "mean_qscore": 9.5
                },
                {
                    "count": 2,
                    "mean_qscore": 10.0
                },
                {
                    "count": 3,
                    "mean_qscore": 10.5
                },
                {
                    "count": 2,
                    "mean_qscore": 11.0
                },
                {
                    "count": 1,
                    "mean_qscore": 11.5
                }
            ],
            "qscore_sum_temp": {
                "count": 13,
                "mean": 10.1784257888794,
                "sum": 132.319534301758
            },
            "read_len_events_sum_temp": 258244,
            "seq_len_bases_dist_temp": [
                {
                    "count": 13,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 13,
            "seq_len_events_dist_temp": [
                {
                    "count": 2,
                    "length": 11000.0
                },
                {
                    "count": 4,
                    "length": 12000.0
                },
                {
                    "count": 2,
                    "length": 13000.0
                },
                {
                    "count": 2,
                    "length": 23000.0
                },
                {
                    "count": 1,
                    "length": 27000.0
                },
                {
                    "count": 1,
                    "length": 36000.0
                },
                {
                    "count": 1,
                    "length": 45000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 13,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 13,
                "mean": 71.8403854370117,
                "sum": 933.924987792969
            },
            "strand_sd_pa": {
                "count": 13,
                "mean": 9.46209812164307,
                "sum": 123.007270812988
            }
        },
        "channel_count": 12,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 53483.35546875,
        "levels_sums": {
            "count": 13,
            "mean": 201.201080322266,
            "open_pore_level_sum": 2615.61401367188
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 13,
        "reads_per_channel_dist": [
            {
                "channel": 71,
                "count": 2
            },
            {
                "channel": 95,
                "count": 1
            },
            {
                "channel": 105,
                "count": 1
            },
            {
                "channel": 131,
                "count": 1
            },
            {
                "channel": 171,
                "count": 1
            },
            {
                "channel": 206,
                "count": 1
            },
            {
                "channel": 359,
                "count": 1
            },
            {
                "channel": 396,
                "count": 1
            },
            {
                "channel": 447,
                "count": 1
            },
            {
                "channel": 463,
                "count": 1
            },
            {
                "channel": 473,
                "count": 1
            },
            {
                "channel": 480,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 15,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "aedc2fa2-ba7b-4307-b16e-34d07ef78393",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 7
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 9.0
                },
                {
                    "count": 1,
                    "mean_qscore": 10.0
                },
                {
                    "count": 2,
                    "mean_qscore": 10.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                },
                {
                    "count": 1,
                    "mean_qscore": 11.5
                },
                {
                    "count": 1,
                    "mean_qscore": 12.0
                }
            ],
            "qscore_sum_temp": {
                "count": 7,
                "mean": 10.9115381240845,
                "sum": 76.3807678222656
            },
            "read_len_events_sum_temp": 149130,
            "seq_len_bases_dist_temp": [
                {
                    "count": 7,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 7,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 11000.0
                },
                {
                    "count": 1,
                    "length": 12000.0
                },
                {
                    "count": 1,
                    "length": 13000.0
                },
                {
                    "count": 3,
                    "length": 14000.0
                },
                {
                    "count": 1,
                    "length": 69000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 7,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 7,
                "mean": 75.1875228881836,
                "sum": 526.312683105469
            },
            "strand_sd_pa": {
                "count": 7,
                "mean": 9.62301826477051,
                "sum": 67.3611297607422
            }
        },
        "channel_count": 7,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 57002.48046875,
        "levels_sums": {
            "count": 7,
            "mean": 207.419967651367,
            "open_pore_level_sum": 1451.93981933594
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 7,
        "reads_per_channel_dist": [
            {
                "channel": 57,
                "count": 1
            },
            {
                "channel": 188,
                "count": 1
            },
            {
                "channel": 199,
                "count": 1
            },
            {
                "channel": 298,
                "count": 1
            },
            {
                "channel": 370,
                "count": 1
            },
            {
                "channel": 440,
                "count": 1
            },
            {
                "channel": 500,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 16,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "12f84f05-3277-420b-8558-16d9008efec9",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 14
            },
            "qscore_dist_temp": [
                {
                    "count": 2,
                    "mean_qscore": 8.0
                },
                {
                    "count": 4,
                    "mean_qscore": 9.0
                },
                {
                    "count": 2,
                    "mean_qscore": 9.5
                },
                {
                    "count": 5,
                    "mean_qscore": 10.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.5
                }
            ],
            "qscore_sum_temp": {
                "count": 14,
                "mean": 9.8912410736084,
                "sum": 138.47737121582
            },
            "read_len_events_sum_temp": 413552,
            "seq_len_bases_dist_temp": [
                {
                    "count": 14,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 14,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 12000.0
                },
                {
                    "count": 3,
                    "length": 13000.0
                },
                {
                    "count": 3,
                    "length": 14000.0
                },
                {
                    "count": 1,
                    "length": 25000.0
                },
                {
                    "count": 2,
                    "length": 28000.0
                },
                {
                    "count": 1,
                    "length": 34000.0
                },
                {
                    "count": 1,
                    "length": 45000.0
                },
                {
                    "count": 1,
                    "length": 52000.0
                },
                {
                    "count": 1,
                    "length": 104000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 14,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 14,
                "mean": 68.8378067016602,
                "sum": 963.729248046875
            },
            "strand_sd_pa": {
                "count": 14,
                "mean": 9.54918384552002,
                "sum": 133.688568115234
            }
        },
        "channel_count": 14,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 61189.63671875,
        "levels_sums": {
            "count": 14,
            "mean": 196.7939453125,
            "open_pore_level_sum": 2755.115234375
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 14,
        "reads_per_channel_dist": [
            {
                "channel": 49,
                "count": 1
            },
            {
                "channel": 57,
                "count": 1
            },
            {
                "channel": 142,
                "count": 1
            },
            {
                "channel": 147,
                "count": 1
            },
            {
                "channel": 224,
                "count": 1
            },
            {
                "channel": 249,
                "count": 1
            },
            {
                "channel": 282,
                "count": 1
            },
            {
                "channel": 286,
                "count": 1
            },
            {
                "channel": 327,
                "count": 1
            },
            {
                "channel": 338,
                "count": 1
            },
            {
                "channel": 354,
                "count": 1
            },
            {
                "channel": 391,
                "count": 1
            },
            {
                "channel": 426,
                "count": 1
            },
            {
                "channel": 452,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 17,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "65eeac08-fdec-43a1-9dcc-4bc3297ca0aa",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 2,
                "pass": 10
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 5.0
                },
                {
                    "count": 1,
                    "mean_qscore": 5.5
                },
                {
                    "count": 1,
                    "mean_qscore": 7.5
                },
                {
                    "count": 2,
                    "mean_qscore": 8.0
                },
                {
                    "count": 3,
                    "mean_qscore": 9.5
                },
                {
                    "count": 2,
                    "mean_qscore": 10.0
                },
                {
                    "count": 2,
                    "mean_qscore": 10.5
                }
            ],
            "qscore_sum_temp": {
                "count": 12,
                "mean": 8.86408805847168,
                "sum": 106.36905670166
            },
            "read_len_events_sum_temp": 235040,
            "seq_len_bases_dist_temp": [
                {
                    "count": 12,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 12,
            "seq_len_events_dist_temp": [
                {
                    "count": 2,
                    "length": 12000.0
                },
                {
                    "count": 3,
                    "length": 13000.0
                },
                {
                    "count": 2,
                    "length": 14000.0
                },
                {
                    "count": 1,
                    "length": 16000.0
                },
                {
                    "count": 2,
                    "length": 24000.0
                },
                {
                    "count": 1,
                    "length": 27000.0
                },
                {
                    "count": 1,
                    "length": 46000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 12,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 12,
                "mean": 69.6869049072266,
                "sum": 836.242858886719
            },
            "strand_sd_pa": {
                "count": 12,
                "mean": 9.56149005889893,
                "sum": 114.737884521484
            }
        },
        "channel_count": 12,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 64742.6328125,
        "levels_sums": {
            "count": 12,
            "mean": 197.78239440918,
            "open_pore_level_sum": 2373.388671875
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 12,
        "reads_per_channel_dist": [
            {
                "channel": 22,
                "count": 1
            },
            {
                "channel": 32,
                "count": 1
            },
            {
                "channel": 125,
                "count": 1
            },
            {
                "channel": 157,
                "count": 1
            },
            {
                "channel": 235,
                "count": 1
            },
            {
                "channel": 241,
                "count": 1
            },
            {
                "channel": 270,
                "count": 1
            },
            {
                "channel": 312,
                "count": 1
            },
            {
                "channel": 313,
                "count": 1
            },
            {
                "channel": 327,
                "count": 1
            },
            {
                "channel": 406,
                "count": 1
            },
            {
                "channel": 465,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 18,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "e0210018-760d-4485-9c70-ae9de63c6c99",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 6
            },
            "qscore_dist_temp": [
                {
                    "count": 3,
                    "mean_qscore": 8.0
                },
                {
                    "count": 1,
                    "mean_qscore": 9.0
                },
                {
                    "count": 2,
                    "mean_qscore": 10.5
                }
            ],
            "qscore_sum_temp": {
                "count": 6,
                "mean": 9.18352222442627,
                "sum": 55.101131439209
            },
            "read_len_events_sum_temp": 147837,
            "seq_len_bases_dist_temp": [
                {
                    "count": 6,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 6,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 12000.0
                },
                {
                    "count": 1,
                    "length": 13000.0
                },
                {
                    "count": 2,
                    "length": 21000.0
                },
                {
                    "count": 1,
                    "length": 27000.0
                },
                {
                    "count": 1,
                    "length": 50000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 6,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 6,
                "mean": 72.184944152832,
                "sum": 433.109680175781
            },
            "strand_sd_pa": {
                "count": 6,
                "mean": 8.9585132598877,
                "sum": 53.7510795593262
            }
        },
        "channel_count": 6,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 67295.6328125,
        "levels_sums": {
            "count": 6,
            "mean": 156.01252746582,
            "open_pore_level_sum": 936.0751953125
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 6,
        "reads_per_channel_dist": [
            {
                "channel": 79,
                "count": 1
            },
            {
                "channel": 116,
                "count": 1
            },
            {
                "channel": 161,
                "count": 1
            },
            {
                "channel": 314,
                "count": 1
            },
            {
                "channel": 330,
                "count": 1
            },
            {
                "channel": 500,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 19,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "a0aa0ffb-d6db-4a32-9b87-b596dd289452",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 11
            },
            "qscore_dist_temp": [
                {
                    "count": 2,
                    "mean_qscore": 8.0
                },
                {
                    "count": 2,
                    "mean_qscore": 8.5
                },
                {
                    "count": 1,
                    "mean_qscore": 9.5
                },
                {
                    "count": 3,
                    "mean_qscore": 10.0
                },
                {
                    "count": 1,
                    "mean_qscore": 10.5
                },
                {
                    "count": 2,
                    "mean_qscore": 11.0
                }
            ],
            "qscore_sum_temp": {
                "count": 11,
                "mean": 9.79121875762939,
                "sum": 107.703407287598
            },
            "read_len_events_sum_temp": 272080,
            "seq_len_bases_dist_temp": [
                {
                    "count": 11,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 11,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 10000.0
                },
                {
                    "count": 1,
                    "length": 13000.0
                },
                {
                    "count": 2,
                    "length": 14000.0
                },
                {
                    "count": 1,
                    "length": 15000.0
                },
                {
                    "count": 2,
                    "length": 16000.0
                },
                {
                    "count": 1,
                    "length": 20000.0
                },
                {
                    "count": 1,
                    "length": 40000.0
                },
                {
                    "count": 1,
                    "length": 42000.0
                },
                {
                    "count": 1,
                    "length": 66000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 11,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 11,
                "mean": 71.1982574462891,
                "sum": 783.180847167969
            },
            "strand_sd_pa": {
                "count": 11,
                "mean": 9.31873321533203,
                "sum": 102.506065368652
            }
        },
        "channel_count": 11,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 71842.859375,
        "levels_sums": {
            "count": 11,
            "mean": 198.649993896484,
            "open_pore_level_sum": 2185.14990234375
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 11,
        "reads_per_channel_dist": [
            {
                "channel": 52,
                "count": 1
            },
            {
                "channel": 108,
                "count": 1
            },
            {
                "channel": 127,
                "count": 1
            },
            {
                "channel": 173,
                "count": 1
            },
            {
                "channel": 206,
                "count": 1
            },
            {
                "channel": 320,
                "count": 1
            },
            {
                "channel": 358,
                "count": 1
            },
            {
                "channel": 364,
                "count": 1
            },
            {
                "channel": 440,
                "count": 1
            },
            {
                "channel": 493,
                "count": 1
            },
            {
                "channel": 510,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 20,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "4c57f37c-d923-4205-b8de-bd95496ab2c9",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 5
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 9.5
                },
                {
                    "count": 1,
                    "mean_qscore": 10.5
                },
                {
                    "count": 2,
                    "mean_qscore": 11.0
                },
                {
                    "count": 1,
                    "mean_qscore": 12.0
                }
            ],
            "qscore_sum_temp": {
                "count": 5,
                "mean": 11.0575122833252,
                "sum": 55.2875633239746
            },
            "read_len_events_sum_temp": 89025,
            "seq_len_bases_dist_temp": [
                {
                    "count": 5,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 5,
            "seq_len_events_dist_temp": [
                {
                    "count": 3,
                    "length": 14000.0
                },
                {
                    "count": 1,
                    "length": 15000.0
                },
                {
                    "count": 1,
                    "length": 30000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 5,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 5,
                "mean": 70.4276962280273,
                "sum": 352.138488769531
            },
            "strand_sd_pa": {
                "count": 5,
                "mean": 8.7517786026001,
                "sum": 43.7588920593262
            }
        },
        "channel_count": 5,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 75248.84375,
        "levels_sums": {
            "count": 5,
            "mean": 197.662399291992,
            "open_pore_level_sum": 988.31201171875
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 5,
        "reads_per_channel_dist": [
            {
                "channel": 175,
                "count": 1
            },
            {
                "channel": 187,
                "count": 1
            },
            {
                "channel": 215,
                "count": 1
            },
            {
                "channel": 245,
                "count": 1
            },
            {
                "channel": 352,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 21,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "87bf91e0-50c4-4309-b9dd-6486e2515847",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 3
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 8.5
                },
                {
                    "count": 1,
                    "mean_qscore": 9.5
                },
                {
                    "count": 1,
                    "mean_qscore": 10.5
                }
            ],
            "qscore_sum_temp": {
                "count": 3,
                "mean": 9.70583057403564,
                "sum": 29.1174926757812
            },
            "read_len_events_sum_temp": 88604,
            "seq_len_bases_dist_temp": [
                {
                    "count": 3,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 3,
            "seq_len_events_dist_temp": [
                {
                    "count": 2,
                    "length": 14000.0
                },
                {
                    "count": 1,
                    "length": 59000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 3,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 3,
                "mean": 75.8602294921875,
                "sum": 227.580688476562
            },
            "strand_sd_pa": {
                "count": 3,
                "mean": 9.9921875,
                "sum": 29.9765625
            }
        },
        "channel_count": 3,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 78654.890625,
        "levels_sums": {
            "count": 3,
            "mean": 208.18586730957,
            "open_pore_level_sum": 624.5576171875
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 3,
        "reads_per_channel_dist": [
            {
                "channel": 131,
                "count": 1
            },
            {
                "channel": 188,
                "count": 1
            },
            {
                "channel": 440,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 22,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "e2593586-a296-421c-a391-0351c6a4bacb",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1,
                "pass": 2
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 6.5
                },
                {
                    "count": 1,
                    "mean_qscore": 9.0
                },
                {
                    "count": 1,
                    "mean_qscore": 10.5
                }
            ],
            "qscore_sum_temp": {
                "count": 3,
                "mean": 8.82798099517822,
                "sum": 26.483943939209
            },
            "read_len_events_sum_temp": 60877,
            "seq_len_bases_dist_temp": [
                {
                    "count": 3,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 3,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 13000.0
                },
                {
                    "count": 1,
                    "length": 15000.0
                },
                {
                    "count": 1,
                    "length": 31000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 3,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 3,
                "mean": 69.4284744262695,
                "sum": 208.285430908203
            },
            "strand_sd_pa": {
                "count": 3,
                "mean": 9.41792392730713,
                "sum": 28.2537727355957
            }
        },
        "channel_count": 3,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 81909.71875,
        "levels_sums": {
            "count": 3,
            "mean": 199.479995727539,
            "open_pore_level_sum": 598.440002441406
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 3,
        "reads_per_channel_dist": [
            {
                "channel": 291,
                "count": 1
            },
            {
                "channel": 322,
                "count": 1
            },
            {
                "channel": 501,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 23,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "e2c62264-96d6-4649-99a4-9a91712892b1",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 7
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 8.5
                },
                {
                    "count": 1,
                    "mean_qscore": 9.0
                },
                {
                    "count": 2,
                    "mean_qscore": 10.0
                },
                {
                    "count": 1,
                    "mean_qscore": 10.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                },
                {
                    "count": 1,
                    "mean_qscore": 11.5
                }
            ],
            "qscore_sum_temp": {
                "count": 7,
                "mean": 10.4075107574463,
                "sum": 72.8525772094727
            },
            "read_len_events_sum_temp": 108415,
            "seq_len_bases_dist_temp": [
                {
                    "count": 7,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 7,
            "seq_len_events_dist_temp": [
                {
                    "count": 3,
                    "length": 14000.0
                },
                {
                    "count": 1,
                    "length": 15000.0
                },
                {
                    "count": 3,
                    "length": 16000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 7,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 7,
                "mean": 75.655143737793,
                "sum": 529.585998535156
            },
            "strand_sd_pa": {
                "count": 7,
                "mean": 9.3769063949585,
                "sum": 65.6383438110352
            }
        },
        "channel_count": 7,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 85984.9921875,
        "levels_sums": {
            "count": 7,
            "mean": 207.648681640625,
            "open_pore_level_sum": 1453.54077148438
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 7,
        "reads_per_channel_dist": [
            {
                "channel": 16,
                "count": 1
            },
            {
                "channel": 113,
                "count": 1
            },
            {
                "channel": 140,
                "count": 1
            },
            {
                "channel": 181,
                "count": 1
            },
            {
                "channel": 245,
                "count": 1
            },
            {
                "channel": 446,
                "count": 1
            },
            {
                "channel": 493,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 24,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "0ef47ecb-296c-42d1-b7a1-d5f6c3dc5cb0",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 9.5
                }
            ],
            "qscore_sum_temp": {
                "count": 1,
                "mean": 9.78693675994873,
                "sum": 9.78693675994873
            },
            "read_len_events_sum_temp": 43380,
            "seq_len_bases_dist_temp": [
                {
                    "count": 1,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 1,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 43000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 1,
                "mean": 77.3533172607422,
                "sum": 77.3533172607422
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 9.99218845367432,
                "sum": 9.99218845367432
            }
        },
        "channel_count": 1,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 88615.9609375,
        "levels_sums": {
            "count": 1,
            "mean": 210.319686889648,
            "open_pore_level_sum": 210.319686889648
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 1,
        "reads_per_channel_dist": [
            {
                "channel": 430,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 25,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "99ad4cab-6377-4396-9cc2-d08f5795ff94",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 7
            },
            "qscore_dist_temp": [
                {
                    "count": 4,
                    "mean_qscore": 10.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                },
                {
                    "count": 2,
                    "mean_qscore": 11.5
                }
            ],
            "qscore_sum_temp": {
                "count": 7,
                "mean": 11.0579824447632,
                "sum": 77.405876159668
            },
            "read_len_events_sum_temp": 100986,
            "seq_len_bases_dist_temp": [
                {
                    "count": 7,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 7,
            "seq_len_events_dist_temp": [
                {
                    "count": 2,
                    "length": 11000.0
                },
                {
                    "count": 1,
                    "length": 12000.0
                },
                {
                    "count": 3,
                    "length": 13000.0
                },
                {
                    "count": 1,
                    "length": 25000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 7,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 7,
                "mean": 74.4245681762695,
                "sum": 520.971984863281
            },
            "strand_sd_pa": {
                "count": 7,
                "mean": 9.352294921875,
                "sum": 65.466064453125
            }
        },
        "channel_count": 7,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 93344.1796875,
        "levels_sums": {
            "count": 7,
            "mean": 201.968978881836,
            "open_pore_level_sum": 1413.78283691406
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 7,
        "reads_per_channel_dist": [
            {
                "channel": 2,
                "count": 1
            },
            {
                "channel": 199,
                "count": 1
            },
            {
                "channel": 253,
                "count": 1
            },
            {
                "channel": 397,
                "count": 1
            },
            {
                "channel": 443,
                "count": 1
            },
            {
                "channel": 455,
                "count": 1
            },
            {
                "channel": 507,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 26,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "d69e4060-62cd-42e2-90a8-40538cce455d",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 5
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 8.0
                },
                {
                    "count": 1,
                    "mean_qscore": 9.0
                },
                {
                    "count": 2,
                    "mean_qscore": 9.5
                },
                {
                    "count": 1,
                    "mean_qscore": 10.5
                }
            ],
            "qscore_sum_temp": {
                "count": 5,
                "mean": 9.69470596313477,
                "sum": 48.4735298156738
            },
            "read_len_events_sum_temp": 61749,
            "seq_len_bases_dist_temp": [
                {
                    "count": 5,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 5,
            "seq_len_events_dist_temp": [
                {
                    "count": 2,
                    "length": 11000.0
                },
                {
                    "count": 3,
                    "length": 12000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 5,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 5,
                "mean": 65.3971405029297,
                "sum": 326.985717773438
            },
            "strand_sd_pa": {
                "count": 5,
                "mean": 8.23494148254395,
                "sum": 41.1747055053711
            }
        },
        "channel_count": 5,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 96675.5546875,
        "levels_sums": {
            "count": 5,
            "mean": 185.372894287109,
            "open_pore_level_sum": 926.864501953125
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 5,
        "reads_per_channel_dist": [
            {
                "channel": 206,
                "count": 1
            },
            {
                "channel": 243,
                "count": 1
            },
            {
                "channel": 342,
                "count": 1
            },
            {
                "channel": 372,
                "count": 1
            },
            {
                "channel": 440,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 27,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "744d2552-4196-417c-a5ce-dffb8ee24702",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 3
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 10.0
                },
                {
                    "count": 2,
                    "mean_qscore": 10.5
                }
            ],
            "qscore_sum_temp": {
                "count": 3,
                "mean": 10.6023149490356,
                "sum": 31.8069458007812
            },
            "read_len_events_sum_temp": 42157,
            "seq_len_bases_dist_temp": [
                {
                    "count": 3,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 3,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 12000.0
                },
                {
                    "count": 1,
                    "length": 13000.0
                },
                {
                    "count": 1,
                    "length": 16000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 3,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 3,
                "mean": 61.7333488464355,
                "sum": 185.200042724609
            },
            "strand_sd_pa": {
                "count": 3,
                "mean": 9.647629737854,
                "sum": 28.9428901672363
            }
        },
        "channel_count": 3,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 100358.921875,
        "levels_sums": {
            "count": 3,
            "mean": 184.838195800781,
            "open_pore_level_sum": 554.514587402344
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 3,
        "reads_per_channel_dist": [
            {
                "channel": 60,
                "count": 1
            },
            {
                "channel": 216,
                "count": 1
            },
            {
                "channel": 422,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 28,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "57892898-6aba-448c-844c-9542d2cd70a5",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 6
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 8.5
                },
                {
                    "count": 1,
                    "mean_qscore": 9.0
                },
                {
                    "count": 3,
                    "mean_qscore": 10.0
                },
                {
                    "count": 1,
                    "mean_qscore": 10.5
                }
            ],
            "qscore_sum_temp": {
                "count": 6,
                "mean": 9.93461036682129,
                "sum": 59.6076622009277
            },
            "read_len_events_sum_temp": 136587,
            "seq_len_bases_dist_temp": [
                {
                    "count": 6,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 6,
            "seq_len_events_dist_temp": [
                {
                    "count": 2,
                    "length": 12000.0
                },
                {
                    "count": 1,
                    "length": 13000.0
                },
                {
                    "count": 1,
                    "length": 23000.0
                },
                {
                    "count": 1,
                    "length": 25000.0
                },
                {
                    "count": 1,
                    "length": 48000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 6,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 6,
                "mean": 72.7592010498047,
                "sum": 436.555206298828
            },
            "strand_sd_pa": {
                "count": 6,
                "mean": 9.90604877471924,
                "sum": 59.4362907409668
            }
        },
        "channel_count": 6,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 103757.3984375,
        "levels_sums": {
            "count": 6,
            "mean": 203.3154296875,
            "open_pore_level_sum": 1219.892578125
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 6,
        "reads_per_channel_dist": [
            {
                "channel": 152,
                "count": 1
            },
            {
                "channel": 241,
                "count": 1
            },
            {
                "channel": 284,
                "count": 1
            },
            {
                "channel": 369,
                "count": 1
            },
            {
                "channel": 441,
                "count": 1
            },
            {
                "channel": 496,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 29,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "3d3883b4-ec5f-41e3-be27-469dafac2f20",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 6
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 8.5
                },
                {
                    "count": 1,
                    "mean_qscore": 9.0
                },
                {
                    "count": 1,
                    "mean_qscore": 9.5
                },
                {
                    "count": 1,
                    "mean_qscore": 10.0
                },
                {
                    "count": 1,
                    "mean_qscore": 10.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                }
            ],
            "qscore_sum_temp": {
                "count": 6,
                "mean": 9.99595928192139,
                "sum": 59.9757537841797
            },
            "read_len_events_sum_temp": 82580,
            "seq_len_bases_dist_temp": [
                {
                    "count": 6,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 6,
            "seq_len_events_dist_temp": [
                {
                    "count": 2,
                    "length": 10000.0
                },
                {
                    "count": 1,
                    "length": 11000.0
                },
                {
                    "count": 2,
                    "length": 12000.0
                },
                {
                    "count": 1,
                    "length": 23000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 6,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 6,
                "mean": 74.7691345214844,
                "sum": 448.614807128906
            },
            "strand_sd_pa": {
                "count": 6,
                "mean": 9.76248264312744,
                "sum": 58.5748977661133
            }
        },
        "channel_count": 5,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 107956.6328125,
        "levels_sums": {
            "count": 6,
            "mean": 206.789047241211,
            "open_pore_level_sum": 1240.73425292969
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 6,
        "reads_per_channel_dist": [
            {
                "channel": 291,
                "count": 1
            },
            {
                "channel": 435,
                "count": 2
            },
            {
                "channel": 441,
                "count": 1
            },
            {
                "channel": 504,
                "count": 1
            },
            {
                "channel": 512,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 30,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "02a156d2-8ca4-49a2-9bed-72b3012e94d8",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 2
            },
            "qscore_dist_temp": [
                {
                    "count": 2,
                    "mean_qscore": 10.0
                }
            ],
            "qscore_sum_temp": {
                "count": 2,
                "mean": 10.2716369628906,
                "sum": 20.5432739257812
            },
            "read_len_events_sum_temp": 25781,
            "seq_len_bases_dist_temp": [
                {
                    "count": 2,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 2,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 12000.0
                },
                {
                    "count": 1,
                    "length": 13000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 2,
                "mean": 78.6454086303711,
                "sum": 157.290817260742
            },
            "strand_sd_pa": {
                "count": 2,
                "mean": 9.13079261779785,
                "sum": 18.2615852355957
            }
        },
        "channel_count": 2,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 109675.9140625,
        "levels_sums": {
            "count": 2,
            "mean": 206.035797119141,
            "open_pore_level_sum": 412.071594238281
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 2,
        "reads_per_channel_dist": [
            {
                "channel": 359,
                "count": 1
            },
            {
                "channel": 371,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 31,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "64f75464-7f9b-4c7c-a5b9-c7fd9ee0b434",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 2
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 8.0
                },
                {
                    "count": 1,
                    "mean_qscore": 10.0
                }
            ],
            "qscore_sum_temp": {
                "count": 2,
                "mean": 9.20936393737793,
                "sum": 18.4187278747559
            },
            "read_len_events_sum_temp": 41780,
            "seq_len_bases_dist_temp": [
                {
                    "count": 2,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 2,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 13000.0
                },
                {
                    "count": 1,
                    "length": 28000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 2,
                "mean": 72.184944152832,
                "sum": 144.369888305664
            },
            "strand_sd_pa": {
                "count": 2,
                "mean": 9.9921875,
                "sum": 19.984375
            }
        },
        "channel_count": 2,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 114976.4921875,
        "levels_sums": {
            "count": 2,
            "mean": 204.324951171875,
            "open_pore_level_sum": 408.64990234375
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 2,
        "reads_per_channel_dist": [
            {
                "channel": 292,
                "count": 1
            },
            {
                "channel": 488,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 32,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "e7612e14-7394-4701-847a-cfa78446ce2b",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1,
                "pass": 4
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 6.5
                },
                {
                    "count": 1,
                    "mean_qscore": 8.0
                },
                {
                    "count": 1,
                    "mean_qscore": 8.5
                },
                {
                    "count": 1,
                    "mean_qscore": 9.0
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                }
            ],
            "qscore_sum_temp": {
                "count": 5,
                "mean": 8.8211145401001,
                "sum": 44.1055717468262
            },
            "read_len_events_sum_temp": 134569,
            "seq_len_bases_dist_temp": [
                {
                    "count": 5,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 5,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 11000.0
                },
                {
                    "count": 1,
                    "length": 13000.0
                },
                {
                    "count": 1,
                    "length": 26000.0
                },
                {
                    "count": 1,
                    "length": 36000.0
                },
                {
                    "count": 1,
                    "length": 45000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 5,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 5,
                "mean": 70.4966125488281,
                "sum": 352.483062744141
            },
            "strand_sd_pa": {
                "count": 5,
                "mean": 9.33752822875977,
                "sum": 46.6876411437988
            }
        },
        "channel_count": 5,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 118755.6328125,
        "levels_sums": {
            "count": 5,
            "mean": 197.458450317383,
            "open_pore_level_sum": 987.292236328125
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 5,
        "reads_per_channel_dist": [
            {
                "channel": 11,
                "count": 1
            },
            {
                "channel": 132,
                "count": 1
            },
            {
                "channel": 291,
                "count": 1
            },
            {
                "channel": 457,
                "count": 1
            },
            {
                "channel": 508,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 33,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "b0296f34-4ea0-43da-b6e5-ee710faa3ec3",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 10.5
                }
            ],
            "qscore_sum_temp": {
                "count": 1,
                "mean": 10.7743940353394,
                "sum": 10.7743940353394
            },
            "read_len_events_sum_temp": 27892,
            "seq_len_bases_dist_temp": [
                {
                    "count": 1,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 1,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 27000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 1,
                "mean": 72.5295028686523,
                "sum": 72.5295028686523
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 8.6139554977417,
                "sum": 8.6139554977417
            }
        },
        "channel_count": 1,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 120947.359375,
        "levels_sums": {
            "count": 1,
            "mean": 196.838409423828,
            "open_pore_level_sum": 196.838409423828
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 1,
        "reads_per_channel_dist": [
            {
                "channel": 478,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 34,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "96a116c1-6426-49dd-819c-35e5df06a410",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 4
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 7.5
                },
                {
                    "count": 2,
                    "mean_qscore": 9.0
                },
                {
                    "count": 1,
                    "mean_qscore": 10.0
                }
            ],
            "qscore_sum_temp": {
                "count": 4,
                "mean": 9.23362731933594,
                "sum": 36.9345092773438
            },
            "read_len_events_sum_temp": 66727,
            "seq_len_bases_dist_temp": [
                {
                    "count": 4,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 4,
            "seq_len_events_dist_temp": [
                {
                    "count": 2,
                    "length": 12000.0
                },
                {
                    "count": 1,
                    "length": 13000.0
                },
                {
                    "count": 1,
                    "length": 28000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 4,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 4,
                "mean": 69.3423461914062,
                "sum": 277.369384765625
            },
            "strand_sd_pa": {
                "count": 4,
                "mean": 8.61395454406738,
                "sum": 34.4558181762695
            }
        },
        "channel_count": 4,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 124773.9375,
        "levels_sums": {
            "count": 4,
            "mean": 192.301879882812,
            "open_pore_level_sum": 769.20751953125
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 4,
        "reads_per_channel_dist": [
            {
                "channel": 12,
                "count": 1
            },
            {
                "channel": 150,
                "count": 1
            },
            {
                "channel": 317,
                "count": 1
            },
            {
                "channel": 446,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 35,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "8bf941e1-e0f8-4e16-99b6-40345611aa53",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 3
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 7.0
                },
                {
                    "count": 2,
                    "mean_qscore": 10.5
                }
            ],
            "qscore_sum_temp": {
                "count": 3,
                "mean": 9.63356113433838,
                "sum": 28.9006843566895
            },
            "read_len_events_sum_temp": 45948,
            "seq_len_bases_dist_temp": [
                {
                    "count": 3,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 3,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 13000.0
                },
                {
                    "count": 1,
                    "length": 14000.0
                },
                {
                    "count": 1,
                    "length": 17000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 3,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 3,
                "mean": 72.9889144897461,
                "sum": 218.966751098633
            },
            "strand_sd_pa": {
                "count": 3,
                "mean": 8.38424968719482,
                "sum": 25.1527481079102
            }
        },
        "channel_count": 3,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 134551.90625,
        "levels_sums": {
            "count": 3,
            "mean": 197.63818359375,
            "open_pore_level_sum": 592.91455078125
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 3,
        "reads_per_channel_dist": [
            {
                "channel": 112,
                "count": 1
            },
            {
                "channel": 180,
                "count": 1
            },
            {
                "channel": 371,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 38,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "32c7e0ff-2a3e-4075-94f6-893b913617e1",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 9.5
                }
            ],
            "qscore_sum_temp": {
                "count": 1,
                "mean": 9.83955860137939,
                "sum": 9.83955860137939
            },
            "read_len_events_sum_temp": 12294,
            "seq_len_bases_dist_temp": [
                {
                    "count": 1,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 1,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 12000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 1,
                "mean": 91.8247604370117,
                "sum": 91.8247604370117
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 10.1644668579102,
                "sum": 10.1644668579102
            }
        },
        "channel_count": 1,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 137475.484375,
        "levels_sums": {
            "count": 1,
            "mean": 235.048110961914,
            "open_pore_level_sum": 235.048110961914
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 1,
        "reads_per_channel_dist": [
            {
                "channel": 441,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 39,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "775c98b5-315a-431b-9a1a-e858136648a5",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 2
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 8.0
                },
                {
                    "count": 1,
                    "mean_qscore": 9.5
                }
            ],
            "qscore_sum_temp": {
                "count": 2,
                "mean": 9.01042938232422,
                "sum": 18.0208587646484
            },
            "read_len_events_sum_temp": 34514,
            "seq_len_bases_dist_temp": [
                {
                    "count": 2,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 2,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 16000.0
                },
                {
                    "count": 1,
                    "length": 18000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 2,
                "mean": 61.5897789001465,
                "sum": 123.179557800293
            },
            "strand_sd_pa": {
                "count": 2,
                "mean": 8.52781581878662,
                "sum": 17.0556316375732
            }
        },
        "channel_count": 2,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 161199.53125,
        "levels_sums": {
            "count": 2,
            "mean": 181.730941772461,
            "open_pore_level_sum": 363.461883544922
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 2,
        "reads_per_channel_dist": [
            {
                "channel": 221,
                "count": 1
            },
            {
                "channel": 241,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 45,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "9c287101-f0cc-4926-a651-c16d56002d65",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "cumulative",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 7,
                "pass": 346
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 5.0
                },
                {
                    "count": 1,
                    "mean_qscore": 5.5
                },
                {
                    "count": 2,
                    "mean_qscore": 6.0
                },
                {
                    "count": 3,
                    "mean_qscore": 6.5
                },
                {
                    "count": 3,
                    "mean_qscore": 7.0
                },
                {
                    "count": 4,
                    "mean_qscore": 7.5
                },
                {
                    "count": 19,
                    "mean_qscore": 8.0
                },
                {
                    "count": 16,
                    "mean_qscore": 8.5
                },
                {
                    "count": 32,
                    "mean_qscore": 9.0
                },
                {
                    "count": 45,
                    "mean_qscore": 9.5
                },
                {
                    "count": 65,
                    "mean_qscore": 10.0
                },
                {
                    "count": 92,
                    "mean_qscore": 10.5
                },
                {
                    "count": 41,
                    "mean_qscore": 11.0
                },
                {
                    "count": 25,
                    "mean_qscore": 11.5
                },
                {
                    "count": 4,
                    "mean_qscore": 12.0
                }
            ],
            "qscore_sum_temp": {
                "count": 353,
                "mean": 10.1585626602173,
                "sum": 3585.97265625
            },
            "read_len_events_sum_temp": 7535693,
            "seq_len_bases_dist_temp": [
                {
                    "count": 353,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 353,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 8000.0
                },
                {
                    "count": 3,
                    "length": 9000.0
                },
                {
                    "count": 32,
                    "length": 10000.0
                },
                {
                    "count": 48,
                    "length": 11000.0
                },
                {
                    "count": 52,
                    "length": 12000.0
                },
                {
                    "count": 34,
                    "length": 13000.0
                },
                {
                    "count": 24,
                    "length": 14000.0
                },
                {
                    "count": 10,
                    "length": 15000.0
                },
                {
                    "count": 10,
                    "length": 16000.0
                },
                {
                    "count": 2,
                    "length": 17000.0
                },
                {
                    "count": 1,
                    "length": 18000.0
                },
                {
                    "count": 4,
                    "length": 20000.0
                },
                {
                    "count": 8,
                    "length": 21000.0
                },
                {
                    "count": 9,
                    "length": 22000.0
                },
                {
                    "count": 15,
                    "length": 23000.0
                },
                {
                    "count": 8,
                    "length": 24000.0
                },
                {
                    "count": 7,
                    "length": 25000.0
                },
                {
                    "count": 3,
                    "length": 26000.0
                },
                {
                    "count": 5,
                    "length": 27000.0
                },
                {
                    "count": 4,
                    "length": 28000.0
                },
                {
                    "count": 2,
                    "length": 30000.0
                },
                {
                    "count": 3,
                    "length": 31000.0
                },
                {
                    "count": 2,
                    "length": 32000.0
                },
                {
                    "count": 5,
                    "length": 33000.0
                },
                {
                    "count": 8,
                    "length": 34000.0
                },
                {
                    "count": 4,
                    "length": 35000.0
                },
                {
                    "count": 6,
                    "length": 36000.0
                },
                {
                    "count": 4,
                    "length": 37000.0
                },
                {
                    "count": 1,
                    "length": 38000.0
                },
                {
                    "count": 4,
                    "length": 39000.0
                },
                {
                    "count": 3,
                    "length": 40000.0
                },
                {
                    "count": 1,
                    "length": 41000.0
                },
                {
                    "count": 2,
                    "length": 42000.0
                },
                {
                    "count": 2,
                    "length": 43000.0
                },
                {
                    "count": 3,
                    "length": 45000.0
                },
                {
                    "count": 1,
                    "length": 46000.0
                },
                {
                    "count": 1,
                    "length": 47000.0
                },
                {
                    "count": 1,
                    "length": 48000.0
                },
                {
                    "count": 1,
                    "length": 50000.0
                },
                {
                    "count": 1,
                    "length": 52000.0
                },
                {
                    "count": 1,
                    "length": 53000.0
                },
                {
                    "count": 2,
                    "length": 54000.0
                },
                {
                    "count": 1,
                    "length": 55000.0
                },
                {
                    "count": 1,
                    "length": 58000.0
                },
                {
                    "count": 3,
                    "length": 59000.0
                },
                {
                    "count": 1,
                    "length": 64000.0
                },
                {
                    "count": 1,
                    "length": 65000.0
                },
                {
                    "count": 1,
                    "length": 66000.0
                },
                {
                    "count": 3,
                    "length": 67000.0
                },
                {
                    "count": 1,
                    "length": 69000.0
                },
                {
                    "count": 1,
                    "length": 70000.0
                },
                {
                    "count": 1,
                    "length": 72000.0
                },
                {
                    "count": 1,
                    "length": 104000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 353,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 353,
                "mean": 71.0599975585938,
                "sum": 25084.1796875
            },
            "strand_sd_pa": {
                "count": 353,
                "mean": 9.36943912506104,
                "sum": 3307.412109375
            }
        },
        "channel_count": 249,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 161199.53125,
        "levels_sums": {
            "count": 353,
            "mean": 198.132949829102,
            "open_pore_level_sum": 69940.9296875
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 353,
        "reads_per_channel_dist": [
            {
                "channel": 2,
                "count": 1
            },
            {
                "channel": 6,
                "count": 1
            },
            {
                "channel": 11,
                "count": 1
            },
            {
                "channel": 12,
                "count": 2
            },
            {
                "channel": 14,
                "count": 1
            },
            {
                "channel": 16,
                "count": 2
            },
            {
                "channel": 18,
                "count": 1
            },
            {
                "channel": 19,
                "count": 1
            },
            {
                "channel": 20,
                "count": 1
            },
            {
                "channel": 22,
                "count": 1
            },
            {
                "channel": 23,
                "count": 1
            },
            {
                "channel": 26,
                "count": 1
            },
            {
                "channel": 27,
                "count": 1
            },
            {
                "channel": 31,
                "count": 1
            },
            {
                "channel": 32,
                "count": 1
            },
            {
                "channel": 36,
                "count": 1
            },
            {
                "channel": 37,
                "count": 1
            },
            {
                "channel": 39,
                "count": 1
            },
            {
                "channel": 42,
                "count": 1
            },
            {
                "channel": 45,
                "count": 1
            },
            {
                "channel": 48,
                "count": 1
            },
            {
                "channel": 49,
                "count": 1
            },
            {
                "channel": 50,
                "count": 1
            },
            {
                "channel": 52,
                "count": 2
            },
            {
                "channel": 54,
                "count": 1
            },
            {
                "channel": 55,
                "count": 1
            },
            {
                "channel": 57,
                "count": 2
            },
            {
                "channel": 59,
                "count": 1
            },
            {
                "channel": 60,
                "count": 1
            },
            {
                "channel": 61,
                "count": 1
            },
            {
                "channel": 65,
                "count": 1
            },
            {
                "channel": 69,
                "count": 2
            },
            {
                "channel": 71,
                "count": 3
            },
            {
                "channel": 78,
                "count": 1
            },
            {
                "channel": 79,
                "count": 3
            },
            {
                "channel": 82,
                "count": 1
            },
            {
                "channel": 83,
                "count": 3
            },
            {
                "channel": 84,
                "count": 1
            },
            {
                "channel": 86,
                "count": 1
            },
            {
                "channel": 88,
                "count": 1
            },
            {
                "channel": 91,
                "count": 2
            },
            {
                "channel": 93,
                "count": 1
            },
            {
                "channel": 94,
                "count": 1
            },
            {
                "channel": 95,
                "count": 1
            },
            {
                "channel": 96,
                "count": 1
            },
            {
                "channel": 104,
                "count": 1
            },
            {
                "channel": 105,
                "count": 2
            },
            {
                "channel": 107,
                "count": 1
            },
            {
                "channel": 108,
                "count": 2
            },
            {
                "channel": 112,
                "count": 1
            },
            {
                "channel": 113,
                "count": 2
            },
            {
                "channel": 115,
                "count": 2
            },
            {
                "channel": 116,
                "count": 1
            },
            {
                "channel": 118,
                "count": 1
            },
            {
                "channel": 123,
                "count": 1
            },
            {
                "channel": 125,
                "count": 4
            },
            {
                "channel": 126,
                "count": 1
            },
            {
                "channel": 127,
                "count": 1
            },
            {
                "channel": 131,
                "count": 3
            },
            {
                "channel": 132,
                "count": 2
            },
            {
                "channel": 134,
                "count": 2
            },
            {
                "channel": 135,
                "count": 1
            },
            {
                "channel": 137,
                "count": 1
            },
            {
                "channel": 138,
                "count": 1
            },
            {
                "channel": 140,
                "count": 1
            },
            {
                "channel": 142,
                "count": 1
            },
            {
                "channel": 144,
                "count": 1
            },
            {
                "channel": 146,
                "count": 1
            },
            {
                "channel": 147,
                "count": 1
            },
            {
                "channel": 148,
                "count": 3
            },
            {
                "channel": 150,
                "count": 1
            },
            {
                "channel": 152,
                "count": 1
            },
            {
                "channel": 153,
                "count": 1
            },
            {
                "channel": 154,
                "count": 1
            },
            {
                "channel": 155,
                "count": 1
            },
            {
                "channel": 157,
                "count": 1
            },
            {
                "channel": 158,
                "count": 1
            },
            {
                "channel": 160,
                "count": 2
            },
            {
                "channel": 161,
                "count": 2
            },
            {
                "channel": 165,
                "count": 1
            },
            {
                "channel": 168,
                "count": 3
            },
            {
                "channel": 171,
                "count": 1
            },
            {
                "channel": 173,
                "count": 2
            },
            {
                "channel": 175,
                "count": 1
            },
            {
                "channel": 176,
                "count": 1
            },
            {
                "channel": 180,
                "count": 1
            },
            {
                "channel": 181,
                "count": 2
            },
            {
                "channel": 183,
                "count": 2
            },
            {
                "channel": 184,
                "count": 1
            },
            {
                "channel": 185,
                "count": 3
            },
            {
                "channel": 187,
                "count": 2
            },
            {
                "channel": 188,
                "count": 2
            },
            {
                "channel": 194,
                "count": 1
            },
            {
                "channel": 199,
                "count": 2
            },
            {
                "channel": 200,
                "count": 1
            },
            {
                "channel": 202,
                "count": 1
            },
            {
                "channel": 203,
                "count": 2
            },
            {
                "channel": 205,
                "count": 1
            },
            {
                "channel": 206,
                "count": 3
            },
            {
                "channel": 207,
                "count": 1
            },
            {
                "channel": 210,
                "count": 1
            },
            {
                "channel": 212,
                "count": 1
            },
            {
                "channel": 213,
                "count": 1
            },
            {
                "channel": 215,
                "count": 1
            },
            {
                "channel": 216,
                "count": 2
            },
            {
                "channel": 217,
                "count": 1
            },
            {
                "channel": 221,
                "count": 1
            },
            {
                "channel": 224,
                "count": 2
            },
            {
                "channel": 225,
                "count": 2
            },
            {
                "channel": 230,
                "count": 4
            },
            {
                "channel": 233,
                "count": 1
            },
            {
                "channel": 235,
                "count": 2
            },
            {
                "channel": 236,
                "count": 2
            },
            {
                "channel": 238,
                "count": 1
            },
            {
                "channel": 241,
                "count": 4
            },
            {
                "channel": 242,
                "count": 1
            },
            {
                "channel": 243,
                "count": 1
            },
            {
                "channel": 245,
                "count": 4
            },
            {
                "channel": 246,
                "count": 1
            },
            {
                "channel": 249,
                "count": 2
            },
            {
                "channel": 253,
                "count": 1
            },
            {
                "channel": 255,
                "count": 1
            },
            {
                "channel": 260,
                "count": 1
            },
            {
                "channel": 264,
                "count": 3
            },
            {
                "channel": 265,
                "count": 1
            },
            {
                "channel": 267,
                "count": 1
            },
            {
                "channel": 270,
                "count": 1
            },
            {
                "channel": 271,
                "count": 1
            },
            {
                "channel": 274,
                "count": 1
            },
            {
                "channel": 277,
                "count": 2
            },
            {
                "channel": 282,
                "count": 1
            },
            {
                "channel": 284,
                "count": 1
            },
            {
                "channel": 285,
                "count": 1
            },
            {
                "channel": 286,
                "count": 1
            },
            {
                "channel": 289,
                "count": 2
            },
            {
                "channel": 291,
                "count": 4
            },
            {
                "channel": 292,
                "count": 1
            },
            {
                "channel": 296,
                "count": 1
            },
            {
                "channel": 298,
                "count": 1
            },
            {
                "channel": 300,
                "count": 1
            },
            {
                "channel": 302,
                "count": 2
            },
            {
                "channel": 310,
                "count": 1
            },
            {
                "channel": 312,
                "count": 1
            },
            {
                "channel": 313,
                "count": 2
            },
            {
                "channel": 314,
                "count": 1
            },
            {
                "channel": 315,
                "count": 1
            },
            {
                "channel": 316,
                "count": 1
            },
            {
                "channel": 317,
                "count": 1
            },
            {
                "channel": 318,
                "count": 2
            },
            {
                "channel": 320,
                "count": 1
            },
            {
                "channel": 321,
                "count": 1
            },
            {
                "channel": 322,
                "count": 2
            },
            {
                "channel": 326,
                "count": 1
            },
            {
                "channel": 327,
                "count": 2
            },
            {
                "channel": 330,
                "count": 2
            },
            {
                "channel": 333,
                "count": 1
            },
            {
                "channel": 335,
                "count": 1
            },
            {
                "channel": 336,
                "count": 1
            },
            {
                "channel": 337,
                "count": 1
            },
            {
                "channel": 338,
                "count": 1
            },
            {
                "channel": 342,
                "count": 1
            },
            {
                "channel": 344,
                "count": 1
            },
            {
                "channel": 345,
                "count": 2
            },
            {
                "channel": 349,
                "count": 2
            },
            {
                "channel": 350,
                "count": 1
            },
            {
                "channel": 351,
                "count": 1
            },
            {
                "channel": 352,
                "count": 1
            },
            {
                "channel": 353,
                "count": 1
            },
            {
                "channel": 354,
                "count": 1
            },
            {
                "channel": 356,
                "count": 1
            },
            {
                "channel": 357,
                "count": 1
            },
            {
                "channel": 358,
                "count": 1
            },
            {
                "channel": 359,
                "count": 2
            },
            {
                "channel": 362,
                "count": 1
            },
            {
                "channel": 364,
                "count": 1
            },
            {
                "channel": 366,
                "count": 1
            },
            {
                "channel": 367,
                "count": 1
            },
            {
                "channel": 368,
                "count": 1
            },
            {
                "channel": 369,
                "count": 1
            },
            {
                "channel": 370,
                "count": 1
            },
            {
                "channel": 371,
                "count": 2
            },
            {
                "channel": 372,
                "count": 1
            },
            {
                "channel": 374,
                "count": 1
            },
            {
                "channel": 375,
                "count": 1
            },
            {
                "channel": 376,
                "count": 1
            },
            {
                "channel": 380,
                "count": 1
            },
            {
                "channel": 381,
                "count": 2
            },
            {
                "channel": 382,
                "count": 1
            },
            {
                "channel": 386,
                "count": 2
            },
            {
                "channel": 387,
                "count": 1
            },
            {
                "channel": 391,
                "count": 1
            },
            {
                "channel": 394,
                "count": 1
            },
            {
                "channel": 396,
                "count": 2
            },
            {
                "channel": 397,
                "count": 3
            },
            {
                "channel": 400,
                "count": 1
            },
            {
                "channel": 403,
                "count": 1
            },
            {
                "channel": 406,
                "count": 1
            },
            {
                "channel": 408,
                "count": 1
            },
            {
                "channel": 410,
                "count": 1
            },
            {
                "channel": 411,
                "count": 1
            },
            {
                "channel": 413,
                "count": 1
            },
            {
                "channel": 414,
                "count": 2
            },
            {
                "channel": 419,
                "count": 1
            },
            {
                "channel": 422,
                "count": 2
            },
            {
                "channel": 423,
                "count": 2
            },
            {
                "channel": 426,
                "count": 1
            },
            {
                "channel": 427,
                "count": 2
            },
            {
                "channel": 430,
                "count": 1
            },
            {
                "channel": 435,
                "count": 2
            },
            {
                "channel": 440,
                "count": 4
            },
            {
                "channel": 441,
                "count": 3
            },
            {
                "channel": 443,
                "count": 1
            },
            {
                "channel": 445,
                "count": 1
            },
            {
                "channel": 446,
                "count": 2
            },
            {
                "channel": 447,
                "count": 1
            },
            {
                "channel": 452,
                "count": 1
            },
            {
                "channel": 455,
                "count": 1
            },
            {
                "channel": 457,
                "count": 1
            },
            {
                "channel": 460,
                "count": 1
            },
            {
                "channel": 461,
                "count": 1
            },
            {
                "channel": 462,
                "count": 1
            },
            {
                "channel": 463,
                "count": 1
            },
            {
                "channel": 465,
                "count": 1
            },
            {
                "channel": 466,
                "count": 1
            },
            {
                "channel": 472,
                "count": 1
            },
            {
                "channel": 473,
                "count": 1
            },
            {
                "channel": 474,
                "count": 1
            },
            {
                "channel": 475,
                "count": 2
            },
            {
                "channel": 476,
                "count": 2
            },
            {
                "channel": 478,
                "count": 1
            },
            {
                "channel": 480,
                "count": 4
            },
            {
                "channel": 484,
                "count": 1
            },
            {
                "channel": 487,
                "count": 1
            },
            {
                "channel": 488,
                "count": 2
            },
            {
                "channel": 490,
                "count": 1
            },
            {
                "channel": 492,
                "count": 1
            },
            {
                "channel": 493,
                "count": 2
            },
            {
                "channel": 496,
                "count": 1
            },
            {
                "channel": 498,
                "count": 1
            },
            {
                "channel": 499,
                "count": 1
            },
            {
                "channel": 500,
                "count": 4
            },
            {
                "channel": 501,
                "count": 1
            },
            {
                "channel": 503,
                "count": 1
            },
            {
                "channel": 504,
                "count": 1
            },
            {
                "channel": 507,
                "count": 1
            },
            {
                "channel": 508,
                "count": 4
            },
            {
                "channel": 510,
                "count": 1
            },
            {
                "channel": 511,
                "count": 2
            },
            {
                "channel": 512,
                "count": 3
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 2700,
        "segment_number": 1,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T09:41:11Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.925781",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "2cb89263-78ae-4d2a-9333-98317a686dcf",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 11.0
                }
            ],
            "qscore_sum_temp": {
                "count": 1,
                "mean": 11.1995859146118,
                "sum": 11.1995859146118
            },
            "read_len_events_sum_temp": 44311,
            "seq_len_bases_dist_temp": [
                {
                    "count": 1,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 1,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 44000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 1,
                "mean": 78.7890090942383,
                "sum": 78.7890090942383
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 11.0339088439941,
                "sum": 11.0339088439941
            }
        },
        "channel_count": 1,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 176.492492675781,
        "levels_sums": {
            "count": 1,
            "mean": 217.509155273438,
            "open_pore_level_sum": 217.509155273438
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 1,
        "reads_per_channel_dist": [
            {
                "channel": 373,
                "count": 1
            }
        ],
        "run_id": "94366cac0c36fad0bb7d5154ad192c5ea806fdf0",
        "segment_duration": 60,
        "segment_number": 1,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T07:31:43Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.667969",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "dd1684fc-c4da-4361-95e8-89b10c2c90fa",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "966f5c9b-1d7d-4370-8137-5f4cc4afcefd",
            "protocols_version": "4.0.5",
            "run_id": "94366cac0c36fad0bb7d5154ad192c5ea806fdf0",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "cumulative",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 11.0
                }
            ],
            "qscore_sum_temp": {
                "count": 1,
                "mean": 11.1995859146118,
                "sum": 11.1995859146118
            },
            "read_len_events_sum_temp": 44311,
            "seq_len_bases_dist_temp": [
                {
                    "count": 1,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 1,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 44000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 1,
                "mean": 78.7890090942383,
                "sum": 78.7890090942383
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 11.0339088439941,
                "sum": 11.0339088439941
            }
        },
        "channel_count": 1,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 176.492492675781,
        "levels_sums": {
            "count": 1,
            "mean": 217.509155273438,
            "open_pore_level_sum": 217.509155273438
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 1,
        "reads_per_channel_dist": [
            {
                "channel": 373,
                "count": 1
            }
        ],
        "run_id": "94366cac0c36fad0bb7d5154ad192c5ea806fdf0",
        "segment_duration": 60,
        "segment_number": 1,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.791912",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-07T07:31:43Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.667969",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "70dadad1-7907-4812-881c-4a52ec4a75fd",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "966f5c9b-1d7d-4370-8137-5f4cc4afcefd",
            "protocols_version": "4.0.5",
            "run_id": "94366cac0c36fad0bb7d5154ad192c5ea806fdf0",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 11.0
                }
            ],
            "qscore_sum_temp": {
                "count": 1,
                "mean": 11.3419818878174,
                "sum": 11.3419818878174
            },
            "read_len_events_sum_temp": 11643,
            "seq_len_bases_dist_temp": [
                {
                    "count": 1,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 1,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 11000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 1,
                "mean": 77.5309143066406,
                "sum": 77.5309143066406
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 11.0266189575195,
                "sum": 11.0266189575195
            }
        },
        "channel_count": 1,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 278.291259765625,
        "levels_sums": {
            "count": 1,
            "mean": 212.551528930664,
            "open_pore_level_sum": 212.551528930664
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 1,
        "reads_per_channel_dist": [
            {
                "channel": 429,
                "count": 1
            }
        ],
        "run_id": "dc765ecd41104753606e856f2398211a88925718",
        "segment_duration": 60,
        "segment_number": 1,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.643696",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-06T16:47:19Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.792969",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "93e7bcf7-9fae-4566-b16c-7d425725d249",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "7b5f8a65-94eb-494b-b872-b36fd43bdf6b",
            "protocols_version": "4.0.5",
            "run_id": "dc765ecd41104753606e856f2398211a88925718",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "cumulative",
        "analysis_id": "3b9b0b26-248e-4d77-a7ca-d844a09769df",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 11.0
                }
            ],
            "qscore_sum_temp": {
                "count": 1,
                "mean": 11.3419818878174,
                "sum": 11.3419818878174
            },
            "read_len_events_sum_temp": 11643,
            "seq_len_bases_dist_temp": [
                {
                    "count": 1,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 1,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 11000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 1,
                "mean": 77.5309143066406,
                "sum": 77.5309143066406
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 11.0266189575195,
                "sum": 11.0266189575195
            }
        },
        "channel_count": 1,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 278.291259765625,
        "levels_sums": {
            "count": 1,
            "mean": 212.551528930664,
            "open_pore_level_sum": 212.551528930664
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.286000",
            "qscore_scale": "0.924000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 1,
        "reads_per_channel_dist": [
            {
                "channel": 429,
                "count": 1
            }
        ],
        "run_id": "dc765ecd41104753606e856f2398211a88925718",
        "segment_duration": 60,
        "segment_number": 1,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.5.2+5b7a51b"
        },
        "tracking_id": {
            "asic_id": "617396666",
            "asic_id_eeprom": "4842504",
            "asic_temp": "30.643696",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "device_id": "MN24462",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.05.0",
            "exp_script_name": "798ce4a1e0c80206f7ac965ef41861267e9a393e",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2019-06-06T16:47:19Z",
            "flow_cell_id": "FAK68874",
            "guppy_version": "3.0.3+7e7b7d0c",
            "heatsink_temp": "33.792969",
            "hostname": "AAU116733",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "3ee9db16-2817-475f-8c98-fe3b779550bf",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "7b5f8a65-94eb-494b-b872-b36fd43bdf6b",
            "protocols_version": "4.0.5",
            "run_id": "dc765ecd41104753606e856f2398211a88925718",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-27T13:20:05Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    }
]