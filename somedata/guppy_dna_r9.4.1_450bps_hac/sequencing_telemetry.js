[
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 12
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 7.0
                },
                {
                    "count": 1,
                    "mean_qscore": 9.0
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
                    "count": 3,
                    "mean_qscore": 11.0
                },
                {
                    "count": 3,
                    "mean_qscore": 11.5
                },
                {
                    "count": 2,
                    "mean_qscore": 12.0
                }
            ],
            "qscore_sum_temp": {
                "count": 12,
                "mean": 10.9058380126953,
                "sum": 130.870056152344
            },
            "read_len_events_sum_temp": 585988,
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
                    "length": 19000.0
                },
                {
                    "count": 1,
                    "length": 20000.0
                },
                {
                    "count": 4,
                    "length": 21000.0
                },
                {
                    "count": 1,
                    "length": 23000.0
                },
                {
                    "count": 1,
                    "length": 40000.0
                },
                {
                    "count": 1,
                    "length": 43000.0
                },
                {
                    "count": 1,
                    "length": 46000.0
                },
                {
                    "count": 1,
                    "length": 123000.0
                },
                {
                    "count": 1,
                    "length": 180000.0
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
                "mean": 73.9508056640625,
                "sum": 887.40966796875
            },
            "strand_sd_pa": {
                "count": 12,
                "mean": 9.59020328521729,
                "sum": 115.08243560791
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
        "latest_run_time": 3422.16625976562,
        "levels_sums": {
            "count": 12,
            "mean": 205.895004272461,
            "open_pore_level_sum": 2470.73999023438
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 69,
                "count": 1
            },
            {
                "channel": 100,
                "count": 1
            },
            {
                "channel": 133,
                "count": 1
            },
            {
                "channel": 185,
                "count": 1
            },
            {
                "channel": 191,
                "count": 1
            },
            {
                "channel": 217,
                "count": 1
            },
            {
                "channel": 219,
                "count": 1
            },
            {
                "channel": 305,
                "count": 1
            },
            {
                "channel": 308,
                "count": 1
            },
            {
                "channel": 431,
                "count": 1
            },
            {
                "channel": 437,
                "count": 1
            },
            {
                "channel": 488,
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
            "msg_id": "c90db1f3-75f4-463f-a2e0-b6e1ee94fac4",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 14
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 8.0
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
                    "count": 2,
                    "mean_qscore": 11.0
                },
                {
                    "count": 2,
                    "mean_qscore": 11.5
                },
                {
                    "count": 2,
                    "mean_qscore": 12.0
                },
                {
                    "count": 4,
                    "mean_qscore": 12.5
                }
            ],
            "qscore_sum_temp": {
                "count": 14,
                "mean": 11.5227336883545,
                "sum": 161.318267822266
            },
            "read_len_events_sum_temp": 684124,
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
                    "length": 21000.0
                },
                {
                    "count": 2,
                    "length": 22000.0
                },
                {
                    "count": 3,
                    "length": 23000.0
                },
                {
                    "count": 3,
                    "length": 25000.0
                },
                {
                    "count": 1,
                    "length": 26000.0
                },
                {
                    "count": 1,
                    "length": 52000.0
                },
                {
                    "count": 1,
                    "length": 113000.0
                },
                {
                    "count": 1,
                    "length": 138000.0
                },
                {
                    "count": 1,
                    "length": 139000.0
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
                "mean": 71.8773040771484,
                "sum": 1006.2822265625
            },
            "strand_sd_pa": {
                "count": 14,
                "mean": 9.45073795318604,
                "sum": 132.310333251953
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
        "latest_run_time": 6817.73681640625,
        "levels_sums": {
            "count": 14,
            "mean": 202.442611694336,
            "open_pore_level_sum": 2834.19653320312
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 73,
                "count": 1
            },
            {
                "channel": 128,
                "count": 1
            },
            {
                "channel": 153,
                "count": 1
            },
            {
                "channel": 166,
                "count": 1
            },
            {
                "channel": 171,
                "count": 1
            },
            {
                "channel": 190,
                "count": 1
            },
            {
                "channel": 235,
                "count": 1
            },
            {
                "channel": 270,
                "count": 1
            },
            {
                "channel": 277,
                "count": 1
            },
            {
                "channel": 289,
                "count": 1
            },
            {
                "channel": 345,
                "count": 1
            },
            {
                "channel": 479,
                "count": 1
            },
            {
                "channel": 498,
                "count": 1
            },
            {
                "channel": 505,
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
            "msg_id": "68195f8b-5b08-4b9c-84fb-8638bdd694bf",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 15
            },
            "qscore_dist_temp": [
                {
                    "count": 2,
                    "mean_qscore": 7.5
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
                    "count": 2,
                    "mean_qscore": 10.5
                },
                {
                    "count": 4,
                    "mean_qscore": 11.0
                },
                {
                    "count": 1,
                    "mean_qscore": 11.5
                },
                {
                    "count": 3,
                    "mean_qscore": 12.5
                }
            ],
            "qscore_sum_temp": {
                "count": 15,
                "mean": 10.8118629455566,
                "sum": 162.177947998047
            },
            "read_len_events_sum_temp": 562486,
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
                    "length": 21000.0
                },
                {
                    "count": 2,
                    "length": 23000.0
                },
                {
                    "count": 1,
                    "length": 24000.0
                },
                {
                    "count": 6,
                    "length": 25000.0
                },
                {
                    "count": 1,
                    "length": 27000.0
                },
                {
                    "count": 1,
                    "length": 44000.0
                },
                {
                    "count": 1,
                    "length": 66000.0
                },
                {
                    "count": 1,
                    "length": 74000.0
                },
                {
                    "count": 1,
                    "length": 102000.0
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
                "mean": 69.8419494628906,
                "sum": 1047.62927246094
            },
            "strand_sd_pa": {
                "count": 15,
                "mean": 9.67059898376465,
                "sum": 145.058990478516
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
        "latest_run_time": 10686.8251953125,
        "levels_sums": {
            "count": 15,
            "mean": 200.698806762695,
            "open_pore_level_sum": 3010.48217773438
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 27,
                "count": 1
            },
            {
                "channel": 34,
                "count": 1
            },
            {
                "channel": 67,
                "count": 1
            },
            {
                "channel": 85,
                "count": 1
            },
            {
                "channel": 169,
                "count": 1
            },
            {
                "channel": 279,
                "count": 1
            },
            {
                "channel": 292,
                "count": 1
            },
            {
                "channel": 359,
                "count": 1
            },
            {
                "channel": 385,
                "count": 1
            },
            {
                "channel": 386,
                "count": 1
            },
            {
                "channel": 391,
                "count": 1
            },
            {
                "channel": 440,
                "count": 1
            },
            {
                "channel": 446,
                "count": 1
            },
            {
                "channel": 452,
                "count": 1
            },
            {
                "channel": 502,
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
            "msg_id": "91db9003-8464-4eea-9eb7-3c4ce326ec43",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 17
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
                    "count": 1,
                    "mean_qscore": 11.5
                },
                {
                    "count": 3,
                    "mean_qscore": 12.0
                },
                {
                    "count": 2,
                    "mean_qscore": 12.5
                },
                {
                    "count": 2,
                    "mean_qscore": 13.0
                },
                {
                    "count": 1,
                    "mean_qscore": 14.0
                }
            ],
            "qscore_sum_temp": {
                "count": 17,
                "mean": 11.2791337966919,
                "sum": 191.745269775391
            },
            "read_len_events_sum_temp": 742445,
            "seq_len_bases_dist_temp": [
                {
                    "count": 17,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 17,
            "seq_len_events_dist_temp": [
                {
                    "count": 2,
                    "length": 23000.0
                },
                {
                    "count": 3,
                    "length": 24000.0
                },
                {
                    "count": 3,
                    "length": 25000.0
                },
                {
                    "count": 1,
                    "length": 26000.0
                },
                {
                    "count": 1,
                    "length": 27000.0
                },
                {
                    "count": 1,
                    "length": 28000.0
                },
                {
                    "count": 1,
                    "length": 32000.0
                },
                {
                    "count": 1,
                    "length": 40000.0
                },
                {
                    "count": 1,
                    "length": 48000.0
                },
                {
                    "count": 1,
                    "length": 53000.0
                },
                {
                    "count": 1,
                    "length": 114000.0
                },
                {
                    "count": 1,
                    "length": 173000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 17,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 17,
                "mean": 70.6141662597656,
                "sum": 1200.44079589844
            },
            "strand_sd_pa": {
                "count": 17,
                "mean": 9.18146324157715,
                "sum": 156.084869384766
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
        "latest_run_time": 14095.3671875,
        "levels_sums": {
            "count": 17,
            "mean": 199.165771484375,
            "open_pore_level_sum": 3385.81811523438
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
        "read_count": 17,
        "reads_per_channel_dist": [
            {
                "channel": 37,
                "count": 1
            },
            {
                "channel": 38,
                "count": 1
            },
            {
                "channel": 79,
                "count": 1
            },
            {
                "channel": 108,
                "count": 1
            },
            {
                "channel": 109,
                "count": 1
            },
            {
                "channel": 111,
                "count": 1
            },
            {
                "channel": 186,
                "count": 1
            },
            {
                "channel": 188,
                "count": 1
            },
            {
                "channel": 239,
                "count": 1
            },
            {
                "channel": 242,
                "count": 1
            },
            {
                "channel": 256,
                "count": 1
            },
            {
                "channel": 312,
                "count": 1
            },
            {
                "channel": 392,
                "count": 1
            },
            {
                "channel": 455,
                "count": 1
            },
            {
                "channel": 456,
                "count": 1
            },
            {
                "channel": 490,
                "count": 1
            },
            {
                "channel": 500,
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
            "msg_id": "67045ced-36e1-4432-8c9f-f31624eae75f",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 14
            },
            "qscore_dist_temp": [
                {
                    "count": 2,
                    "mean_qscore": 9.5
                },
                {
                    "count": 4,
                    "mean_qscore": 10.5
                },
                {
                    "count": 2,
                    "mean_qscore": 11.0
                },
                {
                    "count": 3,
                    "mean_qscore": 11.5
                },
                {
                    "count": 2,
                    "mean_qscore": 12.0
                },
                {
                    "count": 1,
                    "mean_qscore": 12.5
                }
            ],
            "qscore_sum_temp": {
                "count": 14,
                "mean": 11.2127170562744,
                "sum": 156.978042602539
            },
            "read_len_events_sum_temp": 708057,
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
                    "length": 25000.0
                },
                {
                    "count": 1,
                    "length": 26000.0
                },
                {
                    "count": 4,
                    "length": 28000.0
                },
                {
                    "count": 1,
                    "length": 29000.0
                },
                {
                    "count": 1,
                    "length": 32000.0
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
                    "count": 1,
                    "length": 54000.0
                },
                {
                    "count": 1,
                    "length": 59000.0
                },
                {
                    "count": 1,
                    "length": 127000.0
                },
                {
                    "count": 1,
                    "length": 132000.0
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
                "mean": 68.4809417724609,
                "sum": 958.733215332031
            },
            "strand_sd_pa": {
                "count": 14,
                "mean": 9.43843269348145,
                "sum": 132.138061523438
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
        "latest_run_time": 17715.34375,
        "levels_sums": {
            "count": 14,
            "mean": 197.28889465332,
            "open_pore_level_sum": 2762.04443359375
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 8,
                "count": 1
            },
            {
                "channel": 10,
                "count": 1
            },
            {
                "channel": 93,
                "count": 1
            },
            {
                "channel": 107,
                "count": 1
            },
            {
                "channel": 171,
                "count": 1
            },
            {
                "channel": 191,
                "count": 1
            },
            {
                "channel": 223,
                "count": 1
            },
            {
                "channel": 245,
                "count": 1
            },
            {
                "channel": 259,
                "count": 1
            },
            {
                "channel": 305,
                "count": 1
            },
            {
                "channel": 319,
                "count": 1
            },
            {
                "channel": 392,
                "count": 1
            },
            {
                "channel": 451,
                "count": 1
            },
            {
                "channel": 480,
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
            "msg_id": "00b4fe26-5425-44dd-93fa-32fae6468ac7",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
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
                    "count": 2,
                    "mean_qscore": 11.0
                },
                {
                    "count": 2,
                    "mean_qscore": 11.5
                },
                {
                    "count": 2,
                    "mean_qscore": 12.0
                },
                {
                    "count": 2,
                    "mean_qscore": 12.5
                },
                {
                    "count": 1,
                    "mean_qscore": 13.0
                }
            ],
            "qscore_sum_temp": {
                "count": 13,
                "mean": 11.3817615509033,
                "sum": 147.962905883789
            },
            "read_len_events_sum_temp": 650455,
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
                    "length": 18000.0
                },
                {
                    "count": 1,
                    "length": 21000.0
                },
                {
                    "count": 2,
                    "length": 22000.0
                },
                {
                    "count": 1,
                    "length": 24000.0
                },
                {
                    "count": 1,
                    "length": 26000.0
                },
                {
                    "count": 1,
                    "length": 29000.0
                },
                {
                    "count": 1,
                    "length": 47000.0
                },
                {
                    "count": 1,
                    "length": 65000.0
                },
                {
                    "count": 1,
                    "length": 69000.0
                },
                {
                    "count": 1,
                    "length": 79000.0
                },
                {
                    "count": 1,
                    "length": 87000.0
                },
                {
                    "count": 1,
                    "length": 136000.0
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
                "mean": 71.1645202636719,
                "sum": 925.138793945312
            },
            "strand_sd_pa": {
                "count": 13,
                "mean": 9.51510715484619,
                "sum": 123.696388244629
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
        "latest_run_time": 21564.3359375,
        "levels_sums": {
            "count": 13,
            "mean": 197.390838623047,
            "open_pore_level_sum": 2566.08081054688
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 18,
                "count": 1
            },
            {
                "channel": 98,
                "count": 1
            },
            {
                "channel": 122,
                "count": 1
            },
            {
                "channel": 161,
                "count": 1
            },
            {
                "channel": 198,
                "count": 1
            },
            {
                "channel": 200,
                "count": 1
            },
            {
                "channel": 210,
                "count": 1
            },
            {
                "channel": 225,
                "count": 1
            },
            {
                "channel": 313,
                "count": 1
            },
            {
                "channel": 320,
                "count": 1
            },
            {
                "channel": 329,
                "count": 1
            },
            {
                "channel": 332,
                "count": 1
            },
            {
                "channel": 339,
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
            "msg_id": "4f420fab-5df4-4a74-bbb1-3ed29a66825f",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 4
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 9.5
                },
                {
                    "count": 2,
                    "mean_qscore": 11.0
                },
                {
                    "count": 1,
                    "mean_qscore": 13.0
                }
            ],
            "qscore_sum_temp": {
                "count": 4,
                "mean": 11.4515514373779,
                "sum": 45.8062057495117
            },
            "read_len_events_sum_temp": 111901,
            "seq_len_bases_dist_temp": [
                {
                    "count": 4,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 4,
            "seq_len_events_dist_temp": [
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
                    "length": 44000.0
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
                "mean": 71.0651245117188,
                "sum": 284.260498046875
            },
            "strand_sd_pa": {
                "count": 4,
                "mean": 8.6139554977417,
                "sum": 34.4558219909668
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
        "latest_run_time": 24857.9765625,
        "levels_sums": {
            "count": 4,
            "mean": 192.134658813477,
            "open_pore_level_sum": 768.538635253906
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 38,
                "count": 1
            },
            {
                "channel": 168,
                "count": 1
            },
            {
                "channel": 285,
                "count": 1
            },
            {
                "channel": 400,
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
            "msg_id": "01222371-bc3d-4291-8830-64096f3cabbd",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 12
            },
            "qscore_dist_temp": [
                {
                    "count": 2,
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
                    "count": 2,
                    "mean_qscore": 11.0
                },
                {
                    "count": 2,
                    "mean_qscore": 11.5
                },
                {
                    "count": 4,
                    "mean_qscore": 12.0
                }
            ],
            "qscore_sum_temp": {
                "count": 12,
                "mean": 11.2081155776978,
                "sum": 134.49739074707
            },
            "read_len_events_sum_temp": 311310,
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
                    "length": 19000.0
                },
                {
                    "count": 1,
                    "length": 20000.0
                },
                {
                    "count": 3,
                    "length": 21000.0
                },
                {
                    "count": 3,
                    "length": 22000.0
                },
                {
                    "count": 3,
                    "length": 23000.0
                },
                {
                    "count": 1,
                    "length": 68000.0
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
                "mean": 69.6581802368164,
                "sum": 835.898193359375
            },
            "strand_sd_pa": {
                "count": 12,
                "mean": 9.11643505096436,
                "sum": 109.39722442627
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
        "latest_run_time": 28646.50390625,
        "levels_sums": {
            "count": 12,
            "mean": 193.097534179688,
            "open_pore_level_sum": 2317.17041015625
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 16,
                "count": 1
            },
            {
                "channel": 54,
                "count": 1
            },
            {
                "channel": 64,
                "count": 1
            },
            {
                "channel": 101,
                "count": 1
            },
            {
                "channel": 172,
                "count": 1
            },
            {
                "channel": 184,
                "count": 1
            },
            {
                "channel": 224,
                "count": 1
            },
            {
                "channel": 237,
                "count": 1
            },
            {
                "channel": 241,
                "count": 1
            },
            {
                "channel": 295,
                "count": 1
            },
            {
                "channel": 344,
                "count": 1
            },
            {
                "channel": 492,
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
            "msg_id": "76e49506-a134-4b25-a647-9505cf9de785",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 8
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
                    "mean_qscore": 9.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                },
                {
                    "count": 2,
                    "mean_qscore": 12.0
                },
                {
                    "count": 1,
                    "mean_qscore": 13.5
                }
            ],
            "qscore_sum_temp": {
                "count": 8,
                "mean": 10.8372049331665,
                "sum": 86.697639465332
            },
            "read_len_events_sum_temp": 381824,
            "seq_len_bases_dist_temp": [
                {
                    "count": 8,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 8,
            "seq_len_events_dist_temp": [
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
                    "length": 42000.0
                },
                {
                    "count": 1,
                    "length": 43000.0
                },
                {
                    "count": 1,
                    "length": 44000.0
                },
                {
                    "count": 1,
                    "length": 47000.0
                },
                {
                    "count": 1,
                    "length": 136000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 8,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 8,
                "mean": 71.0220642089844,
                "sum": 568.176513671875
            },
            "strand_sd_pa": {
                "count": 8,
                "mean": 9.087721824646,
                "sum": 72.701774597168
            }
        },
        "channel_count": 8,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 32369.892578125,
        "levels_sums": {
            "count": 8,
            "mean": 196.420028686523,
            "open_pore_level_sum": 1571.36022949219
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
        "read_count": 8,
        "reads_per_channel_dist": [
            {
                "channel": 94,
                "count": 1
            },
            {
                "channel": 162,
                "count": 1
            },
            {
                "channel": 208,
                "count": 1
            },
            {
                "channel": 215,
                "count": 1
            },
            {
                "channel": 223,
                "count": 1
            },
            {
                "channel": 235,
                "count": 1
            },
            {
                "channel": 268,
                "count": 1
            },
            {
                "channel": 499,
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
            "msg_id": "dfce8d31-7c34-4ad6-a92d-042ec33e3cc9",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 17
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 7.5
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
                    "count": 5,
                    "mean_qscore": 11.5
                },
                {
                    "count": 4,
                    "mean_qscore": 12.5
                },
                {
                    "count": 1,
                    "mean_qscore": 13.0
                }
            ],
            "qscore_sum_temp": {
                "count": 17,
                "mean": 11.2739162445068,
                "sum": 191.65657043457
            },
            "read_len_events_sum_temp": 749194,
            "seq_len_bases_dist_temp": [
                {
                    "count": 17,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 17,
            "seq_len_events_dist_temp": [
                {
                    "count": 2,
                    "length": 22000.0
                },
                {
                    "count": 1,
                    "length": 23000.0
                },
                {
                    "count": 5,
                    "length": 24000.0
                },
                {
                    "count": 2,
                    "length": 25000.0
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
                    "length": 44000.0
                },
                {
                    "count": 1,
                    "length": 51000.0
                },
                {
                    "count": 1,
                    "length": 61000.0
                },
                {
                    "count": 1,
                    "length": 95000.0
                },
                {
                    "count": 1,
                    "length": 192000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 17,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 17,
                "mean": 69.5196990966797,
                "sum": 1181.83483886719
            },
            "strand_sd_pa": {
                "count": 17,
                "mean": 9.03958511352539,
                "sum": 153.672943115234
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
        "latest_run_time": 35990.20703125,
        "levels_sums": {
            "count": 17,
            "mean": 193.89013671875,
            "open_pore_level_sum": 3296.13232421875
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
        "read_count": 17,
        "reads_per_channel_dist": [
            {
                "channel": 4,
                "count": 1
            },
            {
                "channel": 24,
                "count": 1
            },
            {
                "channel": 91,
                "count": 1
            },
            {
                "channel": 119,
                "count": 1
            },
            {
                "channel": 140,
                "count": 1
            },
            {
                "channel": 167,
                "count": 1
            },
            {
                "channel": 168,
                "count": 1
            },
            {
                "channel": 223,
                "count": 1
            },
            {
                "channel": 225,
                "count": 1
            },
            {
                "channel": 285,
                "count": 1
            },
            {
                "channel": 325,
                "count": 1
            },
            {
                "channel": 331,
                "count": 1
            },
            {
                "channel": 361,
                "count": 1
            },
            {
                "channel": 407,
                "count": 1
            },
            {
                "channel": 425,
                "count": 1
            },
            {
                "channel": 441,
                "count": 1
            },
            {
                "channel": 501,
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
            "msg_id": "7bd0a7b7-708f-4ece-8a73-b0caae4a181e",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 8
            },
            "qscore_dist_temp": [
                {
                    "count": 2,
                    "mean_qscore": 8.5
                },
                {
                    "count": 1,
                    "mean_qscore": 9.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                },
                {
                    "count": 2,
                    "mean_qscore": 11.5
                },
                {
                    "count": 1,
                    "mean_qscore": 13.0
                },
                {
                    "count": 1,
                    "mean_qscore": 13.5
                }
            ],
            "qscore_sum_temp": {
                "count": 8,
                "mean": 11.057674407959,
                "sum": 88.4613952636719
            },
            "read_len_events_sum_temp": 323027,
            "seq_len_bases_dist_temp": [
                {
                    "count": 8,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 8,
            "seq_len_events_dist_temp": [
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
                    "length": 24000.0
                },
                {
                    "count": 1,
                    "length": 40000.0
                },
                {
                    "count": 2,
                    "length": 45000.0
                },
                {
                    "count": 1,
                    "length": 53000.0
                },
                {
                    "count": 1,
                    "length": 68000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 8,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 8,
                "mean": 71.1512756347656,
                "sum": 569.210205078125
            },
            "strand_sd_pa": {
                "count": 8,
                "mean": 9.5830249786377,
                "sum": 76.6641998291016
            }
        },
        "channel_count": 8,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 38976.1328125,
        "levels_sums": {
            "count": 8,
            "mean": 200.248046875,
            "open_pore_level_sum": 1601.984375
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
        "read_count": 8,
        "reads_per_channel_dist": [
            {
                "channel": 24,
                "count": 1
            },
            {
                "channel": 110,
                "count": 1
            },
            {
                "channel": 187,
                "count": 1
            },
            {
                "channel": 320,
                "count": 1
            },
            {
                "channel": 325,
                "count": 1
            },
            {
                "channel": 349,
                "count": 1
            },
            {
                "channel": 482,
                "count": 1
            },
            {
                "channel": 507,
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
            "msg_id": "7918888b-0625-4a3f-8c0c-2815a8a3e858",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 11
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
                    "count": 2,
                    "mean_qscore": 9.5
                },
                {
                    "count": 2,
                    "mean_qscore": 10.0
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
                "count": 11,
                "mean": 10.1099214553833,
                "sum": 111.209136962891
            },
            "read_len_events_sum_temp": 679338,
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
                    "length": 22000.0
                },
                {
                    "count": 2,
                    "length": 24000.0
                },
                {
                    "count": 2,
                    "length": 25000.0
                },
                {
                    "count": 1,
                    "length": 26000.0
                },
                {
                    "count": 1,
                    "length": 47000.0
                },
                {
                    "count": 1,
                    "length": 53000.0
                },
                {
                    "count": 1,
                    "length": 63000.0
                },
                {
                    "count": 1,
                    "length": 164000.0
                },
                {
                    "count": 1,
                    "length": 200000.0
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
                "mean": 71.6367797851562,
                "sum": 788.004577636719
            },
            "strand_sd_pa": {
                "count": 11,
                "mean": 8.92718982696533,
                "sum": 98.199089050293
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
        "latest_run_time": 42588.59765625,
        "levels_sums": {
            "count": 11,
            "mean": 197.758972167969,
            "open_pore_level_sum": 2175.3486328125
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 73,
                "count": 1
            },
            {
                "channel": 107,
                "count": 1
            },
            {
                "channel": 216,
                "count": 1
            },
            {
                "channel": 220,
                "count": 1
            },
            {
                "channel": 300,
                "count": 1
            },
            {
                "channel": 351,
                "count": 1
            },
            {
                "channel": 379,
                "count": 1
            },
            {
                "channel": 397,
                "count": 1
            },
            {
                "channel": 434,
                "count": 1
            },
            {
                "channel": 435,
                "count": 1
            },
            {
                "channel": 455,
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
            "msg_id": "8f1cff1c-9cc7-4fe3-b94c-8234502b22b6",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 12
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 9.5
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
                    "count": 2,
                    "mean_qscore": 11.0
                },
                {
                    "count": 2,
                    "mean_qscore": 11.5
                },
                {
                    "count": 2,
                    "mean_qscore": 12.0
                },
                {
                    "count": 1,
                    "mean_qscore": 13.0
                },
                {
                    "count": 1,
                    "mean_qscore": 13.5
                }
            ],
            "qscore_sum_temp": {
                "count": 12,
                "mean": 11.5171575546265,
                "sum": 138.20588684082
            },
            "read_len_events_sum_temp": 458061,
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
                    "length": 23000.0
                },
                {
                    "count": 3,
                    "length": 24000.0
                },
                {
                    "count": 3,
                    "length": 25000.0
                },
                {
                    "count": 2,
                    "length": 26000.0
                },
                {
                    "count": 1,
                    "length": 28000.0
                },
                {
                    "count": 1,
                    "length": 95000.0
                },
                {
                    "count": 1,
                    "length": 106000.0
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
                "mean": 68.7967910766602,
                "sum": 825.561462402344
            },
            "strand_sd_pa": {
                "count": 12,
                "mean": 9.40356731414795,
                "sum": 112.842803955078
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
        "latest_run_time": 46708.55078125,
        "levels_sums": {
            "count": 12,
            "mean": 196.331466674805,
            "open_pore_level_sum": 2355.9775390625
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 26,
                "count": 1
            },
            {
                "channel": 46,
                "count": 1
            },
            {
                "channel": 109,
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
                "channel": 207,
                "count": 1
            },
            {
                "channel": 278,
                "count": 1
            },
            {
                "channel": 287,
                "count": 1
            },
            {
                "channel": 290,
                "count": 1
            },
            {
                "channel": 339,
                "count": 1
            },
            {
                "channel": 341,
                "count": 1
            },
            {
                "channel": 489,
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
            "msg_id": "33226377-e3f5-4cb7-8a38-72c67d0be742",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
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
                    "mean_qscore": 9.5
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
                "count": 7,
                "mean": 10.944935798645,
                "sum": 76.6145477294922
            },
            "read_len_events_sum_temp": 388583,
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
                    "length": 23000.0
                },
                {
                    "count": 1,
                    "length": 26000.0
                },
                {
                    "count": 2,
                    "length": 47000.0
                },
                {
                    "count": 1,
                    "length": 51000.0
                },
                {
                    "count": 1,
                    "length": 52000.0
                },
                {
                    "count": 1,
                    "length": 139000.0
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
                "mean": 68.6163101196289,
                "sum": 480.314178466797
            },
            "strand_sd_pa": {
                "count": 7,
                "mean": 9.45073986053467,
                "sum": 66.1551818847656
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
        "latest_run_time": 50131.34375,
        "levels_sums": {
            "count": 7,
            "mean": 195.587539672852,
            "open_pore_level_sum": 1369.11279296875
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 32,
                "count": 1
            },
            {
                "channel": 112,
                "count": 1
            },
            {
                "channel": 121,
                "count": 1
            },
            {
                "channel": 128,
                "count": 1
            },
            {
                "channel": 246,
                "count": 1
            },
            {
                "channel": 397,
                "count": 1
            },
            {
                "channel": 462,
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
            "msg_id": "91491867-e0e1-4215-a326-e73908d1872b",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 6
            },
            "qscore_dist_temp": [
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
                    "mean_qscore": 12.0
                },
                {
                    "count": 3,
                    "mean_qscore": 12.5
                }
            ],
            "qscore_sum_temp": {
                "count": 6,
                "mean": 12.1045532226562,
                "sum": 72.6273193359375
            },
            "read_len_events_sum_temp": 283338,
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
                    "length": 24000.0
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
                    "length": 50000.0
                },
                {
                    "count": 1,
                    "length": 74000.0
                },
                {
                    "count": 1,
                    "length": 80000.0
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
                "mean": 73.7067337036133,
                "sum": 442.240417480469
            },
            "strand_sd_pa": {
                "count": 6,
                "mean": 8.95851230621338,
                "sum": 53.7510757446289
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
        "latest_run_time": 53302.6796875,
        "levels_sums": {
            "count": 6,
            "mean": 202.191848754883,
            "open_pore_level_sum": 1213.15112304688
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 102,
                "count": 1
            },
            {
                "channel": 120,
                "count": 1
            },
            {
                "channel": 182,
                "count": 1
            },
            {
                "channel": 405,
                "count": 1
            },
            {
                "channel": 454,
                "count": 1
            },
            {
                "channel": 510,
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
            "msg_id": "cedc3c66-5cc5-4ca1-846d-dd4eb240e3c8",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 8
            },
            "qscore_dist_temp": [
                {
                    "count": 2,
                    "mean_qscore": 10.5
                },
                {
                    "count": 5,
                    "mean_qscore": 12.0
                },
                {
                    "count": 1,
                    "mean_qscore": 13.0
                }
            ],
            "qscore_sum_temp": {
                "count": 8,
                "mean": 11.9058513641357,
                "sum": 95.2468109130859
            },
            "read_len_events_sum_temp": 444240,
            "seq_len_bases_dist_temp": [
                {
                    "count": 8,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 8,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 25000.0
                },
                {
                    "count": 1,
                    "length": 26000.0
                },
                {
                    "count": 2,
                    "length": 27000.0
                },
                {
                    "count": 1,
                    "length": 42000.0
                },
                {
                    "count": 1,
                    "length": 54000.0
                },
                {
                    "count": 1,
                    "length": 102000.0
                },
                {
                    "count": 1,
                    "length": 137000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 8,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 8,
                "mean": 72.9601974487305,
                "sum": 583.681579589844
            },
            "strand_sd_pa": {
                "count": 8,
                "mean": 9.41074562072754,
                "sum": 75.2859649658203
            }
        },
        "channel_count": 8,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 57166.734375,
        "levels_sums": {
            "count": 8,
            "mean": 202.616500854492,
            "open_pore_level_sum": 1620.93200683594
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
        "read_count": 8,
        "reads_per_channel_dist": [
            {
                "channel": 35,
                "count": 1
            },
            {
                "channel": 155,
                "count": 1
            },
            {
                "channel": 245,
                "count": 1
            },
            {
                "channel": 270,
                "count": 1
            },
            {
                "channel": 272,
                "count": 1
            },
            {
                "channel": 350,
                "count": 1
            },
            {
                "channel": 459,
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
            "msg_id": "18ebf208-d5da-4e5d-ab13-2f1c1c36b496",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
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
                    "count": 2,
                    "mean_qscore": 11.0
                },
                {
                    "count": 2,
                    "mean_qscore": 11.5
                },
                {
                    "count": 2,
                    "mean_qscore": 12.0
                },
                {
                    "count": 1,
                    "mean_qscore": 12.5
                }
            ],
            "qscore_sum_temp": {
                "count": 11,
                "mean": 11.1057138442993,
                "sum": 122.16284942627
            },
            "read_len_events_sum_temp": 553656,
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
                    "length": 24000.0
                },
                {
                    "count": 2,
                    "length": 26000.0
                },
                {
                    "count": 3,
                    "length": 30000.0
                },
                {
                    "count": 1,
                    "length": 49000.0
                },
                {
                    "count": 1,
                    "length": 56000.0
                },
                {
                    "count": 1,
                    "length": 58000.0
                },
                {
                    "count": 1,
                    "length": 73000.0
                },
                {
                    "count": 1,
                    "length": 147000.0
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
                "mean": 70.8067092895508,
                "sum": 778.873779296875
            },
            "strand_sd_pa": {
                "count": 11,
                "mean": 9.61630630493164,
                "sum": 105.779365539551
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
        "latest_run_time": 60569.86328125,
        "levels_sums": {
            "count": 11,
            "mean": 198.984420776367,
            "open_pore_level_sum": 2188.82861328125
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 41,
                "count": 1
            },
            {
                "channel": 104,
                "count": 1
            },
            {
                "channel": 113,
                "count": 1
            },
            {
                "channel": 131,
                "count": 1
            },
            {
                "channel": 233,
                "count": 1
            },
            {
                "channel": 253,
                "count": 1
            },
            {
                "channel": 316,
                "count": 1
            },
            {
                "channel": 395,
                "count": 1
            },
            {
                "channel": 427,
                "count": 1
            },
            {
                "channel": 458,
                "count": 1
            },
            {
                "channel": 505,
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
            "msg_id": "ee81e458-64ab-46b4-a71e-753fb92586bd",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
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
                    "mean_qscore": 9.5
                },
                {
                    "count": 2,
                    "mean_qscore": 11.0
                },
                {
                    "count": 1,
                    "mean_qscore": 11.5
                },
                {
                    "count": 2,
                    "mean_qscore": 12.0
                }
            ],
            "qscore_sum_temp": {
                "count": 7,
                "mean": 11.1501178741455,
                "sum": 78.0508270263672
            },
            "read_len_events_sum_temp": 200709,
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
                    "length": 26000.0
                },
                {
                    "count": 1,
                    "length": 28000.0
                },
                {
                    "count": 1,
                    "length": 29000.0
                },
                {
                    "count": 1,
                    "length": 30000.0
                },
                {
                    "count": 1,
                    "length": 31000.0
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
                "mean": 68.862419128418,
                "sum": 482.036956787109
            },
            "strand_sd_pa": {
                "count": 7,
                "mean": 8.88467979431152,
                "sum": 62.192756652832
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
        "latest_run_time": 64330.79296875,
        "levels_sums": {
            "count": 7,
            "mean": 193.850372314453,
            "open_pore_level_sum": 1356.95263671875
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 88,
                "count": 1
            },
            {
                "channel": 115,
                "count": 1
            },
            {
                "channel": 140,
                "count": 1
            },
            {
                "channel": 254,
                "count": 1
            },
            {
                "channel": 285,
                "count": 1
            },
            {
                "channel": 451,
                "count": 1
            },
            {
                "channel": 492,
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
            "msg_id": "4fbcf857-3ea2-4863-8029-206c3ddc6cc9",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 4
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 8.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                },
                {
                    "count": 2,
                    "mean_qscore": 12.0
                }
            ],
            "qscore_sum_temp": {
                "count": 4,
                "mean": 11.0677871704102,
                "sum": 44.2711486816406
            },
            "read_len_events_sum_temp": 225382,
            "seq_len_bases_dist_temp": [
                {
                    "count": 4,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 4,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 25000.0
                },
                {
                    "count": 1,
                    "length": 55000.0
                },
                {
                    "count": 1,
                    "length": 57000.0
                },
                {
                    "count": 1,
                    "length": 86000.0
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
                "mean": 68.3948059082031,
                "sum": 273.579223632812
            },
            "strand_sd_pa": {
                "count": 4,
                "mean": 10.0783281326294,
                "sum": 40.3133125305176
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
        "latest_run_time": 68312.453125,
        "levels_sums": {
            "count": 4,
            "mean": 198.796630859375,
            "open_pore_level_sum": 795.1865234375
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 83,
                "count": 1
            },
            {
                "channel": 170,
                "count": 1
            },
            {
                "channel": 292,
                "count": 1
            },
            {
                "channel": 489,
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
            "msg_id": "cc8e3cbf-33e3-4f4b-8d87-e5ac35e08d5d",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
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
                "count": 5,
                "mean": 10.7083568572998,
                "sum": 53.5417861938477
            },
            "read_len_events_sum_temp": 177029,
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
                    "length": 26000.0
                },
                {
                    "count": 1,
                    "length": 27000.0
                },
                {
                    "count": 2,
                    "length": 31000.0
                },
                {
                    "count": 1,
                    "length": 60000.0
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
                "mean": 71.8059234619141,
                "sum": 359.029632568359
            },
            "strand_sd_pa": {
                "count": 5,
                "mean": 9.68208599090576,
                "sum": 48.4104309082031
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
        "latest_run_time": 71993.875,
        "levels_sums": {
            "count": 5,
            "mean": 201.926345825195,
            "open_pore_level_sum": 1009.63171386719
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 170,
                "count": 1
            },
            {
                "channel": 292,
                "count": 1
            },
            {
                "channel": 422,
                "count": 1
            },
            {
                "channel": 471,
                "count": 1
            },
            {
                "channel": 473,
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
            "msg_id": "da046b4a-cd4d-452b-987c-0f795def6a4f",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 2
            },
            "qscore_dist_temp": [
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
                "count": 2,
                "mean": 10.1357336044312,
                "sum": 20.2714672088623
            },
            "read_len_events_sum_temp": 140190,
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
                    "length": 29000.0
                },
                {
                    "count": 1,
                    "length": 110000.0
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
                "mean": 68.4809417724609,
                "sum": 136.961883544922
            },
            "strand_sd_pa": {
                "count": 2,
                "mean": 9.73376941680908,
                "sum": 19.4675388336182
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
        "latest_run_time": 74450.5078125,
        "levels_sums": {
            "count": 2,
            "mean": 197.061233520508,
            "open_pore_level_sum": 394.122467041016
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 119,
                "count": 1
            },
            {
                "channel": 248,
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
            "msg_id": "2b854d6e-5e6d-41b3-bf71-f8954f6c0ddd",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 6
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
                    "count": 1,
                    "mean_qscore": 9.5
                },
                {
                    "count": 1,
                    "mean_qscore": 10.0
                },
                {
                    "count": 1,
                    "mean_qscore": 11.5
                }
            ],
            "qscore_sum_temp": {
                "count": 6,
                "mean": 9.55498695373535,
                "sum": 57.3299217224121
            },
            "read_len_events_sum_temp": 263738,
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
                    "length": 27000.0
                },
                {
                    "count": 1,
                    "length": 29000.0
                },
                {
                    "count": 1,
                    "length": 30000.0
                },
                {
                    "count": 1,
                    "length": 34000.0
                },
                {
                    "count": 1,
                    "length": 54000.0
                },
                {
                    "count": 1,
                    "length": 87000.0
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
                "mean": 69.8304672241211,
                "sum": 418.982818603516
            },
            "strand_sd_pa": {
                "count": 6,
                "mean": 9.24564456939697,
                "sum": 55.4738693237305
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
        "latest_run_time": 77841.2734375,
        "levels_sums": {
            "count": 6,
            "mean": 197.554916381836,
            "open_pore_level_sum": 1185.32946777344
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 126,
                "count": 1
            },
            {
                "channel": 136,
                "count": 1
            },
            {
                "channel": 191,
                "count": 1
            },
            {
                "channel": 247,
                "count": 1
            },
            {
                "channel": 309,
                "count": 1
            },
            {
                "channel": 464,
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
            "msg_id": "1e84cf86-2089-4f2e-97ad-1de60f3946f8",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 3
            },
            "qscore_dist_temp": [
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
                "count": 3,
                "mean": 11.6691579818726,
                "sum": 35.0074729919434
            },
            "read_len_events_sum_temp": 168112,
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
                    "length": 29000.0
                },
                {
                    "count": 1,
                    "length": 31000.0
                },
                {
                    "count": 1,
                    "length": 107000.0
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
                "mean": 71.4958267211914,
                "sum": 214.487487792969
            },
            "strand_sd_pa": {
                "count": 3,
                "mean": 9.99218845367432,
                "sum": 29.9765663146973
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
        "latest_run_time": 81784.1171875,
        "levels_sums": {
            "count": 3,
            "mean": 203.621154785156,
            "open_pore_level_sum": 610.863464355469
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 199,
                "count": 1
            },
            {
                "channel": 427,
                "count": 1
            },
            {
                "channel": 505,
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
            "msg_id": "ee641ec1-0ad2-4f68-9668-2b85f45b4cb6",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
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
                    "mean_qscore": 10.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                }
            ],
            "qscore_sum_temp": {
                "count": 3,
                "mean": 9.69002056121826,
                "sum": 29.0700626373291
            },
            "read_len_events_sum_temp": 192999,
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
                    "length": 30000.0
                },
                {
                    "count": 1,
                    "length": 62000.0
                },
                {
                    "count": 1,
                    "length": 99000.0
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
                "mean": 69.5433349609375,
                "sum": 208.630004882812
            },
            "strand_sd_pa": {
                "count": 3,
                "mean": 8.67138195037842,
                "sum": 26.0141468048096
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
        "latest_run_time": 86219.609375,
        "levels_sums": {
            "count": 3,
            "mean": 196.989608764648,
            "open_pore_level_sum": 590.968811035156
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 391,
                "count": 1
            },
            {
                "channel": 401,
                "count": 1
            },
            {
                "channel": 497,
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
            "msg_id": "4ad4ba64-138c-4db3-961e-c5e0889ca838",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 5
            },
            "qscore_dist_temp": [
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
                "count": 5,
                "mean": 11.2433080673218,
                "sum": 56.2165412902832
            },
            "read_len_events_sum_temp": 213714,
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
                    "length": 24000.0
                },
                {
                    "count": 1,
                    "length": 35000.0
                },
                {
                    "count": 1,
                    "length": 46000.0
                },
                {
                    "count": 1,
                    "length": 49000.0
                },
                {
                    "count": 1,
                    "length": 57000.0
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
                "mean": 68.6704483032227,
                "sum": 343.352233886719
            },
            "strand_sd_pa": {
                "count": 5,
                "mean": 8.9585132598877,
                "sum": 44.7925682067871
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
        "latest_run_time": 89433.8046875,
        "levels_sums": {
            "count": 5,
            "mean": 193.161529541016,
            "open_pore_level_sum": 965.8076171875
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 9,
                "count": 1
            },
            {
                "channel": 182,
                "count": 1
            },
            {
                "channel": 235,
                "count": 1
            },
            {
                "channel": 420,
                "count": 1
            },
            {
                "channel": 473,
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
            "msg_id": "a39da730-94bd-428b-aaee-2f5dc88f9994",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 2
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 9.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.5
                }
            ],
            "qscore_sum_temp": {
                "count": 2,
                "mean": 10.8643560409546,
                "sum": 21.7287120819092
            },
            "read_len_events_sum_temp": 50426,
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
                    "length": 24000.0
                },
                {
                    "count": 1,
                    "length": 25000.0
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
                "mean": 72.7879180908203,
                "sum": 145.575836181641
            },
            "strand_sd_pa": {
                "count": 2,
                "mean": 9.56149101257324,
                "sum": 19.1229820251465
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
        "latest_run_time": 93475.171875,
        "levels_sums": {
            "count": 2,
            "mean": 201.384765625,
            "open_pore_level_sum": 402.76953125
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 131,
                "count": 1
            },
            {
                "channel": 369,
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
            "msg_id": "fff3c150-60c8-42bd-917e-72d713a8e273",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 4
            },
            "qscore_dist_temp": [
                {
                    "count": 3,
                    "mean_qscore": 11.5
                },
                {
                    "count": 1,
                    "mean_qscore": 12.5
                }
            ],
            "qscore_sum_temp": {
                "count": 4,
                "mean": 12.1143970489502,
                "sum": 48.4575881958008
            },
            "read_len_events_sum_temp": 119248,
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
                    "length": 22000.0
                },
                {
                    "count": 1,
                    "length": 27000.0
                },
                {
                    "count": 1,
                    "length": 47000.0
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
                "mean": 75.6735916137695,
                "sum": 302.694366455078
            },
            "strand_sd_pa": {
                "count": 4,
                "mean": 9.34614181518555,
                "sum": 37.3845672607422
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
        "latest_run_time": 96200.3125,
        "levels_sums": {
            "count": 4,
            "mean": 204.952911376953,
            "open_pore_level_sum": 819.811645507812
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 105,
                "count": 1
            },
            {
                "channel": 125,
                "count": 1
            },
            {
                "channel": 161,
                "count": 1
            },
            {
                "channel": 215,
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
            "msg_id": "ab84939f-8ad9-4c8d-8036-530a371a1c9e",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
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
                "mean": 10.5351819992065,
                "sum": 10.5351819992065
            },
            "read_len_events_sum_temp": 45746,
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
                    "length": 45000.0
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
                "mean": 70.4621505737305,
                "sum": 70.4621505737305
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 10.6813049316406,
                "sum": 10.6813049316406
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
        "latest_run_time": 103354.9453125,
        "levels_sums": {
            "count": 1,
            "mean": 206.195510864258,
            "open_pore_level_sum": 206.195510864258
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 241,
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
            "msg_id": "c13cd567-9a54-44b8-81e5-ea89a9145b72",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 7
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 7.5
                },
                {
                    "count": 1,
                    "mean_qscore": 8.5
                },
                {
                    "count": 2,
                    "mean_qscore": 11.0
                },
                {
                    "count": 1,
                    "mean_qscore": 12.0
                },
                {
                    "count": 2,
                    "mean_qscore": 12.5
                }
            ],
            "qscore_sum_temp": {
                "count": 7,
                "mean": 11.0593872070312,
                "sum": 77.4157104492188
            },
            "read_len_events_sum_temp": 371067,
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
                    "length": 25000.0
                },
                {
                    "count": 2,
                    "length": 26000.0
                },
                {
                    "count": 1,
                    "length": 50000.0
                },
                {
                    "count": 1,
                    "length": 74000.0
                },
                {
                    "count": 1,
                    "length": 141000.0
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
                "mean": 76.0489120483398,
                "sum": 532.342407226562
            },
            "strand_sd_pa": {
                "count": 7,
                "mean": 9.2784595489502,
                "sum": 64.94921875
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
        "latest_run_time": 107772.9140625,
        "levels_sums": {
            "count": 7,
            "mean": 206.308212280273,
            "open_pore_level_sum": 1444.15747070312
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 22,
                "count": 1
            },
            {
                "channel": 33,
                "count": 1
            },
            {
                "channel": 82,
                "count": 1
            },
            {
                "channel": 208,
                "count": 1
            },
            {
                "channel": 355,
                "count": 1
            },
            {
                "channel": 469,
                "count": 1
            },
            {
                "channel": 501,
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
            "msg_id": "2c6710d9-1924-4b91-87ef-bb74317d158b",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 3
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
                    "mean_qscore": 11.5
                }
            ],
            "qscore_sum_temp": {
                "count": 3,
                "mean": 9.60140609741211,
                "sum": 28.8042182922363
            },
            "read_len_events_sum_temp": 99406,
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
                    "length": 23000.0
                },
                {
                    "count": 1,
                    "length": 24000.0
                },
                {
                    "count": 1,
                    "length": 51000.0
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
                "mean": 66.9017181396484,
                "sum": 200.705154418945
            },
            "strand_sd_pa": {
                "count": 3,
                "mean": 9.13079261779785,
                "sum": 27.3923778533936
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
        "latest_run_time": 110883.796875,
        "levels_sums": {
            "count": 3,
            "mean": 189.222244262695,
            "open_pore_level_sum": 567.666748046875
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 150,
                "count": 1
            },
            {
                "channel": 205,
                "count": 1
            },
            {
                "channel": 423,
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
            "msg_id": "18e817cf-e8d6-41c3-a8ed-540b45eee51f",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 12.0
                }
            ],
            "qscore_sum_temp": {
                "count": 1,
                "mean": 12.0436639785767,
                "sum": 12.0436639785767
            },
            "read_len_events_sum_temp": 25983,
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
                    "length": 25000.0
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
                "mean": 83.210807800293,
                "sum": 83.210807800293
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 9.30307197570801,
                "sum": 9.30307197570801
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
        "latest_run_time": 112656.296875,
        "levels_sums": {
            "count": 1,
            "mean": 219.182220458984,
            "open_pore_level_sum": 219.182220458984
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 97,
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
            "msg_id": "74e11c7a-7146-4706-bba2-547ed620c3ed",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
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
                "mean": 11.14439868927,
                "sum": 11.14439868927
            },
            "read_len_events_sum_temp": 59565,
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
                    "length": 59000.0
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
                "mean": 69.4284820556641,
                "sum": 69.4284820556641
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 10.5090255737305,
                "sum": 10.5090255737305
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
        "latest_run_time": 117026.578125,
        "levels_sums": {
            "count": 1,
            "mean": 200.956771850586,
            "open_pore_level_sum": 200.956771850586
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 241,
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
            "msg_id": "dcb5a181-1d61-4064-b191-5d248c8fb49b",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 12.5
                }
            ],
            "qscore_sum_temp": {
                "count": 1,
                "mean": 12.7787389755249,
                "sum": 12.7787389755249
            },
            "read_len_events_sum_temp": 59645,
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
                    "length": 59000.0
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
                "mean": 11.0258626937866,
                "sum": 11.0258626937866
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
        "latest_run_time": 120146.8203125,
        "levels_sums": {
            "count": 1,
            "mean": 217.574996948242,
            "open_pore_level_sum": 217.574996948242
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 190,
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
            "msg_id": "1aa1e333-ff40-4ceb-b4a8-65ded42a8285",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 4
            },
            "qscore_dist_temp": [
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
                    "mean_qscore": 11.0
                }
            ],
            "qscore_sum_temp": {
                "count": 4,
                "mean": 10.0353527069092,
                "sum": 40.1414108276367
            },
            "read_len_events_sum_temp": 123646,
            "seq_len_bases_dist_temp": [
                {
                    "count": 4,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 4,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 24000.0
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
                    "length": 45000.0
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
                "mean": 79.1191787719727,
                "sum": 316.476715087891
            },
            "strand_sd_pa": {
                "count": 4,
                "mean": 10.2506065368652,
                "sum": 41.0024261474609
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
        "latest_run_time": 125699.7578125,
        "levels_sums": {
            "count": 4,
            "mean": 216.468292236328,
            "open_pore_level_sum": 865.873168945312
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 319,
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
                "channel": 465,
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
            "msg_id": "afa821c4-588f-441e-b28e-ea68bb0897f7",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
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
                "mean": 11.1400699615479,
                "sum": 11.1400699615479
            },
            "read_len_events_sum_temp": 60094,
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
                    "length": 60000.0
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
                "mean": 93.7198333740234,
                "sum": 93.7198333740234
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 11.5426998138428,
                "sum": 11.5426998138428
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
        "latest_run_time": 126571.8203125,
        "levels_sums": {
            "count": 1,
            "mean": 240.630554199219,
            "open_pore_level_sum": 240.630554199219
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 128,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 36,
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
            "msg_id": "e78216fd-4012-495c-b893-7ceb0cb8b49f",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
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
                "mean": 10.6248273849487,
                "sum": 10.6248273849487
            },
            "read_len_events_sum_temp": 29648,
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
                    "length": 29000.0
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
                "mean": 73.9077377319336,
                "sum": 73.9077377319336
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 8.26939678192139,
                "sum": 8.26939678192139
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
        "latest_run_time": 137659.4375,
        "levels_sums": {
            "count": 1,
            "mean": 196.893142700195,
            "open_pore_level_sum": 196.893142700195
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 111,
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
            "msg_id": "79f0d851-0c33-4c8e-af22-d41288649e66",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 9.0
                }
            ],
            "qscore_sum_temp": {
                "count": 1,
                "mean": 9.36117458343506,
                "sum": 9.36117458343506
            },
            "read_len_events_sum_temp": 28119,
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
                    "length": 28000.0
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
                "mean": 62.0204772949219,
                "sum": 62.0204772949219
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 7.58028078079224,
                "sum": 7.58028078079224
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
        "latest_run_time": 157949.9375,
        "levels_sums": {
            "count": 1,
            "mean": 177.389038085938,
            "open_pore_level_sum": 177.389038085938
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 180,
                "count": 1
            }
        ],
        "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
        "segment_duration": 60,
        "segment_number": 44,
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
            "msg_id": "8623d7a0-106e-461a-8cdd-7b7e07732d41",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
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
                "mean": 11.3061065673828,
                "sum": 11.3061065673828
            },
            "read_len_events_sum_temp": 33025,
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
                    "length": 33000.0
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
                "mean": 67.8779678344727,
                "sum": 67.8779678344727
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 10.3367462158203,
                "sum": 10.3367462158203
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
        "latest_run_time": 161420.15625,
        "levels_sums": {
            "count": 1,
            "mean": 197.058578491211,
            "open_pore_level_sum": 197.058578491211
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
                "channel": 442,
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
            "msg_id": "0b412dc6-9012-455d-8700-8ccb7fd069f5",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    },
    {
        "aggregation": "cumulative",
        "analysis_id": "a93800a0-cd09-4b3e-b3ea-aa55da5b90c5",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 2,
                "pass": 250
            },
            "qscore_dist_temp": [
                {
                    "count": 2,
                    "mean_qscore": 6.5
                },
                {
                    "count": 2,
                    "mean_qscore": 7.0
                },
                {
                    "count": 5,
                    "mean_qscore": 7.5
                },
                {
                    "count": 5,
                    "mean_qscore": 8.0
                },
                {
                    "count": 8,
                    "mean_qscore": 8.5
                },
                {
                    "count": 14,
                    "mean_qscore": 9.0
                },
                {
                    "count": 20,
                    "mean_qscore": 9.5
                },
                {
                    "count": 18,
                    "mean_qscore": 10.0
                },
                {
                    "count": 24,
                    "mean_qscore": 10.5
                },
                {
                    "count": 42,
                    "mean_qscore": 11.0
                },
                {
                    "count": 39,
                    "mean_qscore": 11.5
                },
                {
                    "count": 37,
                    "mean_qscore": 12.0
                },
                {
                    "count": 24,
                    "mean_qscore": 12.5
                },
                {
                    "count": 8,
                    "mean_qscore": 13.0
                },
                {
                    "count": 3,
                    "mean_qscore": 13.5
                },
                {
                    "count": 1,
                    "mean_qscore": 14.0
                }
            ],
            "qscore_sum_temp": {
                "count": 252,
                "mean": 11.0852365493774,
                "sum": 2793.4794921875
            },
            "read_len_events_sum_temp": 11305518,
            "seq_len_bases_dist_temp": [
                {
                    "count": 252,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 252,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 18000.0
                },
                {
                    "count": 2,
                    "length": 19000.0
                },
                {
                    "count": 2,
                    "length": 20000.0
                },
                {
                    "count": 12,
                    "length": 21000.0
                },
                {
                    "count": 15,
                    "length": 22000.0
                },
                {
                    "count": 18,
                    "length": 23000.0
                },
                {
                    "count": 22,
                    "length": 24000.0
                },
                {
                    "count": 28,
                    "length": 25000.0
                },
                {
                    "count": 18,
                    "length": 26000.0
                },
                {
                    "count": 9,
                    "length": 27000.0
                },
                {
                    "count": 8,
                    "length": 28000.0
                },
                {
                    "count": 7,
                    "length": 29000.0
                },
                {
                    "count": 6,
                    "length": 30000.0
                },
                {
                    "count": 4,
                    "length": 31000.0
                },
                {
                    "count": 2,
                    "length": 32000.0
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
                    "length": 36000.0
                },
                {
                    "count": 3,
                    "length": 40000.0
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
                    "count": 4,
                    "length": 44000.0
                },
                {
                    "count": 4,
                    "length": 45000.0
                },
                {
                    "count": 2,
                    "length": 46000.0
                },
                {
                    "count": 6,
                    "length": 47000.0
                },
                {
                    "count": 1,
                    "length": 48000.0
                },
                {
                    "count": 2,
                    "length": 49000.0
                },
                {
                    "count": 2,
                    "length": 50000.0
                },
                {
                    "count": 3,
                    "length": 51000.0
                },
                {
                    "count": 3,
                    "length": 52000.0
                },
                {
                    "count": 4,
                    "length": 53000.0
                },
                {
                    "count": 3,
                    "length": 54000.0
                },
                {
                    "count": 1,
                    "length": 55000.0
                },
                {
                    "count": 1,
                    "length": 56000.0
                },
                {
                    "count": 2,
                    "length": 57000.0
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
                    "count": 2,
                    "length": 60000.0
                },
                {
                    "count": 1,
                    "length": 61000.0
                },
                {
                    "count": 1,
                    "length": 62000.0
                },
                {
                    "count": 1,
                    "length": 63000.0
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
                    "count": 2,
                    "length": 68000.0
                },
                {
                    "count": 1,
                    "length": 69000.0
                },
                {
                    "count": 1,
                    "length": 73000.0
                },
                {
                    "count": 3,
                    "length": 74000.0
                },
                {
                    "count": 1,
                    "length": 79000.0
                },
                {
                    "count": 1,
                    "length": 80000.0
                },
                {
                    "count": 1,
                    "length": 86000.0
                },
                {
                    "count": 2,
                    "length": 87000.0
                },
                {
                    "count": 2,
                    "length": 95000.0
                },
                {
                    "count": 1,
                    "length": 99000.0
                },
                {
                    "count": 2,
                    "length": 102000.0
                },
                {
                    "count": 1,
                    "length": 106000.0
                },
                {
                    "count": 1,
                    "length": 107000.0
                },
                {
                    "count": 1,
                    "length": 110000.0
                },
                {
                    "count": 1,
                    "length": 113000.0
                },
                {
                    "count": 1,
                    "length": 114000.0
                },
                {
                    "count": 1,
                    "length": 123000.0
                },
                {
                    "count": 1,
                    "length": 127000.0
                },
                {
                    "count": 1,
                    "length": 132000.0
                },
                {
                    "count": 2,
                    "length": 136000.0
                },
                {
                    "count": 1,
                    "length": 137000.0
                },
                {
                    "count": 1,
                    "length": 138000.0
                },
                {
                    "count": 2,
                    "length": 139000.0
                },
                {
                    "count": 1,
                    "length": 141000.0
                },
                {
                    "count": 1,
                    "length": 147000.0
                },
                {
                    "count": 1,
                    "length": 164000.0
                },
                {
                    "count": 1,
                    "length": 173000.0
                },
                {
                    "count": 1,
                    "length": 180000.0
                },
                {
                    "count": 1,
                    "length": 192000.0
                },
                {
                    "count": 1,
                    "length": 200000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 252,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 252,
                "mean": 71.017936706543,
                "sum": 17896.51953125
            },
            "strand_sd_pa": {
                "count": 252,
                "mean": 9.36118412017822,
                "sum": 2359.01831054688
            }
        },
        "channel_count": 198,
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_fast.cfg",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "package": "bream4",
            "package_version": "4.0.5",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 161420.15625,
        "levels_sums": {
            "count": 252,
            "mean": 199.098876953125,
            "open_pore_level_sum": 50172.91796875
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
            "chunks_per_runner": "512",
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
            "gpu_runners_per_device": "4",
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
            "model_file": "template_r9.4.1_450bps_hac.jsn",
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
            "qscore_offset": "0.327000",
            "qscore_scale": "0.895000",
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
        "read_count": 252,
        "reads_per_channel_dist": [
            {
                "channel": 4,
                "count": 1
            },
            {
                "channel": 8,
                "count": 1
            },
            {
                "channel": 9,
                "count": 1
            },
            {
                "channel": 10,
                "count": 1
            },
            {
                "channel": 16,
                "count": 1
            },
            {
                "channel": 18,
                "count": 1
            },
            {
                "channel": 22,
                "count": 1
            },
            {
                "channel": 24,
                "count": 2
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
                "channel": 32,
                "count": 1
            },
            {
                "channel": 33,
                "count": 1
            },
            {
                "channel": 34,
                "count": 1
            },
            {
                "channel": 35,
                "count": 1
            },
            {
                "channel": 37,
                "count": 1
            },
            {
                "channel": 38,
                "count": 2
            },
            {
                "channel": 41,
                "count": 1
            },
            {
                "channel": 46,
                "count": 1
            },
            {
                "channel": 54,
                "count": 1
            },
            {
                "channel": 64,
                "count": 1
            },
            {
                "channel": 67,
                "count": 1
            },
            {
                "channel": 69,
                "count": 1
            },
            {
                "channel": 73,
                "count": 2
            },
            {
                "channel": 79,
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
                "channel": 85,
                "count": 1
            },
            {
                "channel": 88,
                "count": 1
            },
            {
                "channel": 91,
                "count": 1
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
                "channel": 97,
                "count": 1
            },
            {
                "channel": 98,
                "count": 1
            },
            {
                "channel": 100,
                "count": 1
            },
            {
                "channel": 101,
                "count": 1
            },
            {
                "channel": 102,
                "count": 1
            },
            {
                "channel": 104,
                "count": 1
            },
            {
                "channel": 105,
                "count": 1
            },
            {
                "channel": 107,
                "count": 2
            },
            {
                "channel": 108,
                "count": 1
            },
            {
                "channel": 109,
                "count": 2
            },
            {
                "channel": 110,
                "count": 1
            },
            {
                "channel": 111,
                "count": 2
            },
            {
                "channel": 112,
                "count": 1
            },
            {
                "channel": 113,
                "count": 1
            },
            {
                "channel": 115,
                "count": 1
            },
            {
                "channel": 119,
                "count": 2
            },
            {
                "channel": 120,
                "count": 1
            },
            {
                "channel": 121,
                "count": 1
            },
            {
                "channel": 122,
                "count": 1
            },
            {
                "channel": 125,
                "count": 1
            },
            {
                "channel": 126,
                "count": 2
            },
            {
                "channel": 128,
                "count": 3
            },
            {
                "channel": 131,
                "count": 2
            },
            {
                "channel": 133,
                "count": 1
            },
            {
                "channel": 136,
                "count": 1
            },
            {
                "channel": 140,
                "count": 2
            },
            {
                "channel": 150,
                "count": 1
            },
            {
                "channel": 153,
                "count": 1
            },
            {
                "channel": 155,
                "count": 1
            },
            {
                "channel": 161,
                "count": 2
            },
            {
                "channel": 162,
                "count": 1
            },
            {
                "channel": 166,
                "count": 1
            },
            {
                "channel": 167,
                "count": 1
            },
            {
                "channel": 168,
                "count": 2
            },
            {
                "channel": 169,
                "count": 1
            },
            {
                "channel": 170,
                "count": 2
            },
            {
                "channel": 171,
                "count": 2
            },
            {
                "channel": 172,
                "count": 1
            },
            {
                "channel": 180,
                "count": 1
            },
            {
                "channel": 182,
                "count": 2
            },
            {
                "channel": 184,
                "count": 1
            },
            {
                "channel": 185,
                "count": 2
            },
            {
                "channel": 186,
                "count": 1
            },
            {
                "channel": 187,
                "count": 1
            },
            {
                "channel": 188,
                "count": 1
            },
            {
                "channel": 190,
                "count": 2
            },
            {
                "channel": 191,
                "count": 3
            },
            {
                "channel": 198,
                "count": 1
            },
            {
                "channel": 199,
                "count": 1
            },
            {
                "channel": 200,
                "count": 1
            },
            {
                "channel": 205,
                "count": 1
            },
            {
                "channel": 207,
                "count": 1
            },
            {
                "channel": 208,
                "count": 2
            },
            {
                "channel": 210,
                "count": 1
            },
            {
                "channel": 215,
                "count": 2
            },
            {
                "channel": 216,
                "count": 1
            },
            {
                "channel": 217,
                "count": 1
            },
            {
                "channel": 219,
                "count": 1
            },
            {
                "channel": 220,
                "count": 1
            },
            {
                "channel": 223,
                "count": 3
            },
            {
                "channel": 224,
                "count": 1
            },
            {
                "channel": 225,
                "count": 2
            },
            {
                "channel": 233,
                "count": 1
            },
            {
                "channel": 235,
                "count": 3
            },
            {
                "channel": 237,
                "count": 1
            },
            {
                "channel": 239,
                "count": 1
            },
            {
                "channel": 241,
                "count": 3
            },
            {
                "channel": 242,
                "count": 1
            },
            {
                "channel": 245,
                "count": 2
            },
            {
                "channel": 246,
                "count": 1
            },
            {
                "channel": 247,
                "count": 1
            },
            {
                "channel": 248,
                "count": 1
            },
            {
                "channel": 253,
                "count": 1
            },
            {
                "channel": 254,
                "count": 1
            },
            {
                "channel": 256,
                "count": 1
            },
            {
                "channel": 259,
                "count": 1
            },
            {
                "channel": 268,
                "count": 1
            },
            {
                "channel": 270,
                "count": 2
            },
            {
                "channel": 272,
                "count": 1
            },
            {
                "channel": 277,
                "count": 1
            },
            {
                "channel": 278,
                "count": 1
            },
            {
                "channel": 279,
                "count": 1
            },
            {
                "channel": 285,
                "count": 3
            },
            {
                "channel": 287,
                "count": 1
            },
            {
                "channel": 289,
                "count": 1
            },
            {
                "channel": 290,
                "count": 1
            },
            {
                "channel": 292,
                "count": 3
            },
            {
                "channel": 295,
                "count": 1
            },
            {
                "channel": 300,
                "count": 1
            },
            {
                "channel": 305,
                "count": 2
            },
            {
                "channel": 308,
                "count": 1
            },
            {
                "channel": 309,
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
                "channel": 316,
                "count": 1
            },
            {
                "channel": 319,
                "count": 2
            },
            {
                "channel": 320,
                "count": 2
            },
            {
                "channel": 325,
                "count": 2
            },
            {
                "channel": 329,
                "count": 1
            },
            {
                "channel": 331,
                "count": 1
            },
            {
                "channel": 332,
                "count": 1
            },
            {
                "channel": 339,
                "count": 2
            },
            {
                "channel": 341,
                "count": 1
            },
            {
                "channel": 344,
                "count": 1
            },
            {
                "channel": 345,
                "count": 1
            },
            {
                "channel": 349,
                "count": 1
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
                "channel": 355,
                "count": 1
            },
            {
                "channel": 359,
                "count": 1
            },
            {
                "channel": 361,
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
                "channel": 369,
                "count": 1
            },
            {
                "channel": 379,
                "count": 1
            },
            {
                "channel": 385,
                "count": 1
            },
            {
                "channel": 386,
                "count": 1
            },
            {
                "channel": 391,
                "count": 2
            },
            {
                "channel": 392,
                "count": 2
            },
            {
                "channel": 395,
                "count": 1
            },
            {
                "channel": 397,
                "count": 2
            },
            {
                "channel": 400,
                "count": 1
            },
            {
                "channel": 401,
                "count": 1
            },
            {
                "channel": 405,
                "count": 1
            },
            {
                "channel": 407,
                "count": 1
            },
            {
                "channel": 420,
                "count": 1
            },
            {
                "channel": 422,
                "count": 1
            },
            {
                "channel": 423,
                "count": 1
            },
            {
                "channel": 425,
                "count": 1
            },
            {
                "channel": 427,
                "count": 2
            },
            {
                "channel": 431,
                "count": 1
            },
            {
                "channel": 434,
                "count": 1
            },
            {
                "channel": 435,
                "count": 1
            },
            {
                "channel": 437,
                "count": 1
            },
            {
                "channel": 440,
                "count": 1
            },
            {
                "channel": 441,
                "count": 1
            },
            {
                "channel": 442,
                "count": 1
            },
            {
                "channel": 446,
                "count": 1
            },
            {
                "channel": 451,
                "count": 2
            },
            {
                "channel": 452,
                "count": 1
            },
            {
                "channel": 454,
                "count": 1
            },
            {
                "channel": 455,
                "count": 2
            },
            {
                "channel": 456,
                "count": 1
            },
            {
                "channel": 458,
                "count": 1
            },
            {
                "channel": 459,
                "count": 1
            },
            {
                "channel": 462,
                "count": 1
            },
            {
                "channel": 464,
                "count": 1
            },
            {
                "channel": 465,
                "count": 1
            },
            {
                "channel": 469,
                "count": 1
            },
            {
                "channel": 471,
                "count": 1
            },
            {
                "channel": 473,
                "count": 2
            },
            {
                "channel": 479,
                "count": 1
            },
            {
                "channel": 480,
                "count": 1
            },
            {
                "channel": 482,
                "count": 1
            },
            {
                "channel": 488,
                "count": 1
            },
            {
                "channel": 489,
                "count": 2
            },
            {
                "channel": 490,
                "count": 1
            },
            {
                "channel": 492,
                "count": 2
            },
            {
                "channel": 497,
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
                "count": 2
            },
            {
                "channel": 501,
                "count": 2
            },
            {
                "channel": 502,
                "count": 1
            },
            {
                "channel": 505,
                "count": 3
            },
            {
                "channel": 507,
                "count": 1
            },
            {
                "channel": 510,
                "count": 1
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
            "msg_id": "6bc29aba-fb87-499a-b260-c4b6bc734739",
            "operating_system": "Windows 10.0",
            "protocol_group_id": "SMKJ406",
            "protocol_run_id": "63866416-19b2-4da1-8d8f-ef3db8523d01",
            "protocols_version": "4.0.5",
            "run_id": "82dc462fc1d07e69c1507ae16e46fb64f9ab6005",
            "sample_id": "LIB-SMKJ406-1-A-1",
            "time_stamp": "2020-04-28T12:15:07Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto",
            "version": "3.3.2"
        }
    }
]