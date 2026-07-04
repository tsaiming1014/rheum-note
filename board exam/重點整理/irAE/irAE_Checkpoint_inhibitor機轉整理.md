# PD-1/PD-L1、CTLA-4 Checkpoint Inhibitor 與 Abatacept 機轉整理

## 核心概念：兩條路徑都是「T cell 活化的煞車」，藥物設計方向可以完全相反

## 一、CTLA-4 路徑

**生理角色：** CTLA-4 是 T cell 上的**抑制性受體**，與 CD28 競爭結合 APC 上的 **B7 (CD80/CD86)**，且**親和力遠高於 CD28**。CTLA-4 結合 B7 後傳遞**抑制訊號**，是免疫反應的「煞車」，主要作用在 **T cell 活化的早期階段（lymph node）**。

| 藥物 | 作用方式 | 效果 | 臨床用途 |
|---|---|---|---|
| **Ipilimumab**（anti-CTLA-4 單株抗體） | **阻斷 CTLA-4 本身** | 解除煞車 → T cell 活化增強 | **癌症**（melanoma），增強抗腫瘤免疫 |
| **Abatacept**（CTLA4-Ig 融合蛋白） | **模仿 CTLA-4，搶先結合 B7**，阻斷 CD28-B7 共同刺激 | 相當於**放大煞車效果** → T cell 活化受抑制 | **自體免疫疾病**（RA），抑制過度活化的免疫反應 |

**⚠️ 核心對比：Ipilimumab 和 Abatacept 都作用在同一條 CTLA-4/B7 路徑上，但方向完全相反**——Ipilimumab 是「拿掉煞車」（阻斷 CTLA-4 讓 T cell 更活躍，用於癌症）；Abatacept 是「加強煞車」（本身模仿 CTLA-4 去搶 B7，抑制 T cell，用於自體免疫病）。這是這個知識點最好記、也最常被拿來考的對比。

## 二、PD-1/PD-L1 路徑

**生理角色：** PD-1 是**活化 T cell**上的抑制性受體（作用階段較 CTLA-4 晚，主要在**周邊組織/腫瘤微環境**）；PD-L1（及 PD-L2）表現在腫瘤細胞、APC 及其他組織上。PD-1 結合 PD-L1 會讓 T cell 進入「**exhaustion（耗竭）**」狀態，是腫瘤逃避免疫攻擊的重要機轉之一（許多腫瘤會上調 PD-L1 表現）。

| 藥物類別 | 代表藥物 | 阻斷位點 |
|---|---|---|
| Anti-PD-1 | **Nivolumab、Pembrolizumab** | T cell 上的 PD-1 receptor |
| Anti-PD-L1 | **Atezolizumab、Durvalumab、Avelumab** | 腫瘤細胞上的 PD-L1 ligand |

兩類藥物都是阻斷 **PD-1/PD-L1 交互作用**，解除對 T cell 的抑制訊號，讓 T cell 維持活化、繼續攻擊腫瘤。臨床用於 melanoma、NSCLC、腎細胞癌、Hodgkin lymphoma 等多種癌症。

## 三、CTLA-4 vs. PD-1/PD-L1 作用階段與副作用比較

| | CTLA-4 pathway | PD-1/PD-L1 pathway |
|---|---|---|
| 作用階段 | T cell 活化**早期**（lymph node） | T cell 活化**後期**（周邊組織/腫瘤微環境） |
| 代表藥物 | Ipilimumab | Nivolumab、Pembrolizumab（anti-PD-1）；Atezolizumab 等（anti-PD-L1） |
| irAE（免疫相關不良反應） | 整體發生率**較高**，尤其 colitis、hypophysitis | 整體發生率較低，但 **pneumonitis** 相對常見 |

## 四、總結記憶框架

**同一個受體/路徑，可以設計成「拿掉煞車」（癌症用）或「加強煞車」（自體免疫病用）兩種完全相反的藥物：**

- CTLA-4 路徑：Ipilimumab（拿掉煞車）↔ Abatacept（加強煞車）
- PD-1/PD-L1 路徑：目前臨床上只有「拿掉煞車」方向的藥物（癌症用），尚無核准的「加強煞車」方向藥物用於自體免疫病（但這是研發中的方向）

---

> ⚠️ 待補充：irAE 的風濕科臨床表現（arthritis、myositis、sicca-like syndrome 等）、診斷、治療（DMARD 使用時機），可參考 Kelley's Textbook of Rheumatology Ch130 "Autoimmune Complications of Immune Checkpoint Inhibitors for Cancer"。
