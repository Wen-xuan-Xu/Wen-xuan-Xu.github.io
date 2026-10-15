---
title: "Which Tokens Should SFT Actually Learn? A Token-Trimming Perspective on Mathematical Reasoning"
date: 2026-09-09 00:00:00 +0000
selected: false
pub: "arXiv preprint"
pub_date: "2026"
abstract: >-
  Supervised fine-tuning (SFT) applies a uniform cross-entropy loss to all target tokens, even though different tokens provide unequal learning signals for mathematical reasoning. We propose Trimmed Logit-Gap SFT (TrimSFT), a simple token-level reweighting method that scales the SFT loss according to the logit gap between the gold token and its strongest competitor, trimming supervision away from both already-mastered and weakly-supported tokens. Across six base models from the Llama, Qwen, and DeepMath families and five mathematical reasoning benchmarks, TrimSFT achieves the best average performance on five of six models, with gains of up to +26.9 points over SFT on MATH500.
authors:
  - Yaning Jia
  - Chunhui Zhang
  - Wenxuan Xu
  - Xingjian Diao
  - Xiaoyuan Wang
  - Soroush Vosoughi
links:
  Paper: https://arxiv.org/abs/2609.09707
---
