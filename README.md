# 🎬 SenBen: Sensitive Scene Graphs for Explainable Content Moderation

[![arXiv](https://img.shields.io/badge/arXiv-2604.08819-b31b1b.svg)](https://arxiv.org/abs/2604.08819)
[![HF Papers](https://img.shields.io/badge/🤗-Papers-yellow)](https://huggingface.co/papers/2604.08819)
[![Dataset](https://img.shields.io/badge/🤗-Dataset-orange)](https://huggingface.co/datasets/fcakyon/senben)
[![Models](https://img.shields.io/badge/🤗-Models-orange)](https://huggingface.co/fcakyon/senben-q2l-bal)
[![Project page](https://img.shields.io/badge/site-senben.kim-blueviolet)](https://senben.kim)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

CVPR Workshops 2026 paper by [Fatih Cagatay Akyon](https://scholar.google.com/citations?user=RHGyDE0AAAAJ&hl=en) and [Alptekin Temizel](https://blog.metu.edu.tr/atemizel/). 13,999 movie frames annotated with grounded scene graphs for evaluating sensitive content understanding in vision language models, plus a 241M Florence-2 student that beats every evaluated VLM except Gemini on grounded metrics.

## Resources

|                                 |                                                                                                                                                            |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Paper                           | [arXiv 2604.08819](https://arxiv.org/abs/2604.08819) · [PDF](https://arxiv.org/pdf/2604.08819.pdf) · [HF Papers](https://huggingface.co/papers/2604.08819) |
| Project page                    | https://senben.kim                                                                                                                                         |
| Dataset (gated, v1.0)           | https://huggingface.co/datasets/fcakyon/senben                                                                                                             |
| Model: Q2L-bal (high tag F1)    | https://huggingface.co/fcakyon/senben-q2l-bal                                                                                                              |
| Model: Q2L-agg (high SenBen-F1) | https://huggingface.co/fcakyon/senben-q2l-agg                                                                                                              |
| Predictions release             | https://github.com/fcakyon/senben/releases/tag/v1.0-results                                                                                                |

## Predictions and eval metrics (v1.0-results)

Per-frame predictions and machine-readable metrics for every model evaluated in the paper on the SenBen v1.0 test split (2,000 frames). Each tarball extracts to a directory with one JSON per frame plus `_meta.json`, `_summary.json`, and (where applicable) `_tag_metrics.json`.

### Our models (paper Tables 2 + 3 + 4)

| Tarball                                                                                                                   | Params | SenBen-Recall | SenBen-F1 | Tag F1 | Object Recall | Caption Similarity |
| ------------------------------------------------------------------------------------------------------------------------- | -----: | ------------: | --------: | -----: | ------------: | -----------------: |
| [`senben_q2l_agg__v1.tar.gz`](https://github.com/fcakyon/senben/releases/download/v1.0-results/senben_q2l_agg__v1.tar.gz) |   241M |          .449 |      .431 |   .457 |          .409 |               .772 |
| [`senben_q2l_bal__v1.tar.gz`](https://github.com/fcakyon/senben/releases/download/v1.0-results/senben_q2l_bal__v1.tar.gz) |   241M |          .413 |      .428 |   .594 |          .420 |               .771 |

### Frontier vision language models (paper Table 2)

Sorted by SenBen-F1 descending.

| Tarball                                                                                                                                       | Model                      |      Params | SenBen-Recall | SenBen-F1 | Tag F1 | Object Recall | Caption Similarity |
| --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------: | ------------: | --------: | -----: | ------------: | -----------------: |
| [`baseline_gemini3pro__v1.tar.gz`](https://github.com/fcakyon/senben/releases/download/v1.0-results/baseline_gemini3pro__v1.tar.gz)           | Gemini 3 Pro (low reas.)   | proprietary |          .652 |      .647 |   .806 |          .295 |               .642 |
| [`baseline_gemini3flash__v1.tar.gz`](https://github.com/fcakyon/senben/releases/download/v1.0-results/baseline_gemini3flash__v1.tar.gz)       | Gemini 3 Flash (low reas.) | proprietary |          .593 |      .583 |   .784 |          .271 |               .654 |
| [`baseline_claude_opus46__v1.tar.gz`](https://github.com/fcakyon/senben/releases/download/v1.0-results/baseline_claude_opus46__v1.tar.gz)     | Claude Opus 4.6            | proprietary |          .327 |      .404 |   .658 |          .082 |               .598 |
| [`baseline_glm46v_flash__v1.tar.gz`](https://github.com/fcakyon/senben/releases/download/v1.0-results/baseline_glm46v_flash__v1.tar.gz)       | GLM-4.6V (reas.)           |       10.3B |          .291 |      .364 |   .492 |          .123 |               .563 |
| [`baseline_gpt52_thinking__v1.tar.gz`](https://github.com/fcakyon/senben/releases/download/v1.0-results/baseline_gpt52_thinking__v1.tar.gz)   | GPT-5.2 (med. reas.)       | proprietary |          .319 |      .362 |   .608 |          .072 |               .616 |
| [`baseline_qwen3vl_8b__v1.tar.gz`](https://github.com/fcakyon/senben/releases/download/v1.0-results/baseline_qwen3vl_8b__v1.tar.gz)           | Qwen3-VL-8B                |        8.3B |          .286 |      .340 |   .469 |          .104 |               .548 |
| [`baseline_claude_sonnet46__v1.tar.gz`](https://github.com/fcakyon/senben/releases/download/v1.0-results/baseline_claude_sonnet46__v1.tar.gz) | Claude Sonnet 4.6          | proprietary |          .277 |      .339 |   .643 |          .034 |               .590 |
| [`baseline_gpt5_mini__v1.tar.gz`](https://github.com/fcakyon/senben/releases/download/v1.0-results/baseline_gpt5_mini__v1.tar.gz)             | GPT-5-mini (med. reas.)    | proprietary |          .285 |      .330 |   .659 |          .040 |               .605 |
| [`baseline_gpt52__v1.tar.gz`](https://github.com/fcakyon/senben/releases/download/v1.0-results/baseline_gpt52__v1.tar.gz)                     | GPT-5.2                    | proprietary |          .247 |      .304 |   .550 |          .052 |               .583 |

### Commercial safety APIs and classifiers (paper Table 3)

Sorted by Tag F1 descending. F1<sup>safe</sup> is binary safe vs unsafe F1 over the full taxonomy.

| Tarball                                                                                                                                                 | Model                |      Params | Tags supported | Tag F1 | F1<sup>safe</sup> |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ----------: | -------------: | -----: | ----------------: |
| [`baseline_azure_content_safety__v1.tar.gz`](https://github.com/fcakyon/senben/releases/download/v1.0-results/baseline_azure_content_safety__v1.tar.gz) | Azure Content Safety | proprietary |         5 / 16 |   .430 |              .504 |
| [`baseline_openai_moderation__v1.tar.gz`](https://github.com/fcakyon/senben/releases/download/v1.0-results/baseline_openai_moderation__v1.tar.gz)       | OpenAI Moderation    | proprietary |         6 / 16 |   .411 |              .664 |
| [`baseline_llavaguard__v1.tar.gz`](https://github.com/fcakyon/senben/releases/download/v1.0-results/baseline_llavaguard__v1.tar.gz)                     | LlavaGuard 1.2       |        7.0B |         6 / 16 |   .384 |              .583 |
| [`baseline_google_safesearch__v1.tar.gz`](https://github.com/fcakyon/senben/releases/download/v1.0-results/baseline_google_safesearch__v1.tar.gz)       | Google SafeSearch    | proprietary |         8 / 16 |   .341 |              .476 |
| [`baseline_sd_safety_checker__v1.tar.gz`](https://github.com/fcakyon/senben/releases/download/v1.0-results/baseline_sd_safety_checker__v1.tar.gz)       | SD Safety Checker    |        304M |         2 / 16 |   .333 |              .472 |
| [`baseline_nudenet_detector__v1.tar.gz`](https://github.com/fcakyon/senben/releases/download/v1.0-results/baseline_nudenet_detector__v1.tar.gz)         | NudeNet Detector     |       25.9M |         1 / 16 |   .238 |              .238 |
| [`baseline_laion_safety_checker__v1.tar.gz`](https://github.com/fcakyon/senben/releases/download/v1.0-results/baseline_laion_safety_checker__v1.tar.gz) | LAION Safety Checker |        1.0B |         2 / 16 |   .225 |              .357 |
| [`baseline_nudenet_classifier__v1.tar.gz`](https://github.com/fcakyon/senben/releases/download/v1.0-results/baseline_nudenet_classifier__v1.tar.gz)     | NudeNet Classifier   |        8.5M |         1 / 16 |   .117 |              .117 |
| [`baseline_shieldgemma2__v1.tar.gz`](https://github.com/fcakyon/senben/releases/download/v1.0-results/baseline_shieldgemma2__v1.tar.gz)                 | ShieldGemma 2        |        4.0B |         4 / 16 |   .089 |              .161 |

### Machine-readable metrics

[`senben_eval_metrics__v1.json`](https://github.com/fcakyon/senben/releases/download/v1.0-results/senben_eval_metrics__v1.json) contains paper Tables 1 to 5 (system ablation, leave-one-out per-category, VLM baselines, safety classifiers, efficiency) in a single JSON.

## Code

Inference, evaluation, training, and 18 baseline runners are in progress and will land in a follow-up commit. Watch the repo for updates.

## License

Code and trained model weights: MIT (see [`LICENSE`](LICENSE)). The SenBen dataset is gated research only, see the [dataset card](https://huggingface.co/datasets/fcakyon/senben).

## Cite

```bibtex
@inproceedings{akyon2026senben,
  title     = {SenBen: Sensitive Scene Graphs for Explainable Content Moderation},
  author    = {Akyon, Fatih Cagatay and Temizel, Alptekin},
  booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW)},
  year      = {2026},
  url       = {https://arxiv.org/abs/2604.08819}
}
```

`fatih.akyon@metu.edu.tr`
