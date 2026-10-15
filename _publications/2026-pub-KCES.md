---
title: "Kernel-Complexity Edge Sanitization for Training-Free Defense against Structural Graph Attacks"
date: 2026-09-08 00:00:00 +0000
selected: true
pub: "ACM International Conference on Information and Knowledge Management (CIKM)"
pub_date: "2026"
abstract: >-
  Graph Neural Networks remain highly vulnerable to adversarial attacks that perturb graph structure. We propose Kernel-Complexity Edge Sanitization (KCES), a training-free and model-agnostic defense built on Graph Kernel Complexity (GKC), a metric derived from the graph Gram matrix that appears in a generalization upper bound on GNN test error. KCES scores each edge by its induced change in GKC and prunes high-score edges, which are enriched with adversarial perturbations. It runs as a lightweight preprocessing step, outperforms robust baselines across attack settings, and scales to large graphs.
cover: /assets/images/covers/KCES.png
authors:
  - Yaning Jia
  - Shenyang Deng
  - Yaoqing Yang
  - Chiyu Ma
  - Wenxuan Xu
  - Soroush Vosoughi
links:
  Paper: https://arxiv.org/abs/2609.09698
  Code: https://github.com/karpning/KCScore
---
