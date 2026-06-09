# SLE 病生理機轉：DAMP 與 PAMP 的角色

> 參考：Kelly's Textbook of Rheumatology

---

## 核心概念

SLE 的本質是**對自身核抗原失去耐受性（loss of self-tolerance）**，導致持續性的自體免疫反應。

---

## DAMP vs PAMP 定義與來源

| 類型 | 全名 | 來源 | 在 SLE 的主要例子 |
|------|------|------|------------------|
| **DAMP** | Damage-Associated Molecular Pattern | 內源性（自身受損或凋亡細胞） | dsDNA、ssRNA、組蛋白、HMGB1、S100蛋白、NETs |
| **PAMP** | Pathogen-Associated Molecular Pattern | 外源性（微生物） | 細菌LPS、病毒核酸（EBV等） |

> SLE 中 **DAMP 是主角**；PAMP 扮演觸發/放大角色（如感染誘發 flare）

---

## 完整病生理路徑（概覽）

```
凋亡細胞清除障礙
        ↓
核物質外漏（DNA/RNA/Chromatin）← DAMP 釋放
        ↓
TLR7 / TLR9 活化（內體型PRR）
        ↓
pDC → 大量 Type I IFN（IFN-α/β）產生  ← 「IFN signature」
        ↓
全身免疫放大：DC成熟 + B/T細胞活化
        ↓
自體抗體產生（anti-dsDNA, anti-Sm, anti-RNP）
        ↓
免疫複合體形成 → 沉積 → 補體活化 → 器官損傷
```

---

## Step-by-Step 詳細說明

### 1. 凋亡細胞清除障礙（Defective Apoptotic Clearance）

這是 SLE 的**上游根本問題**：

- **C1q 缺乏** → 補體媒介的凋亡細胞清除減少
- **DNase I 活性下降** → 細胞外 DNA 積聚
- **巨噬細胞吞噬功能異常** → 凋亡小體堆積

結果：大量細胞核物質暴露在細胞外環境 → 成為 **DAMP 來源**

---

### 2. DAMP 活化先天免疫（Innate Immune Activation）

核物質中的 DNA/RNA 是強烈的 DAMP，透過**模式辨識受器（PRR）**觸發發炎：

| PRR | 識別的 DAMP/PAMP | 細胞 | 效應 |
|-----|------------------|------|------|
| TLR9（endosomal） | CpG dsDNA | pDC、B cell | IFN-α、IL-12 |
| TLR7（endosomal） | ssRNA | pDC、B cell | IFN-α、IL-6 |
| TLR4 | LPS（PAMP）/ HMGB1（DAMP） | 巨噬細胞 | TNF、IL-1β |
| cGAS-STING | 細胞質 dsDNA | 多種細胞 | Type I IFN |

---

### 3. NETs（嗜中性球胞外陷阱）── 關鍵 DAMP 放大器

NETosis 是 SLE 中極重要的機制：

```
活化的嗜中性球（低密度顆粒球 LDG）
        ↓
NETosis → 釋放 DNA + 組蛋白 + LL37（cathelicidin）
        ↓
形成免疫原性 DNA 複合體（強效 DAMP）
        ↓
pDC 的 TLR9/TLR7 活化 → 大量 IFN-α
```

> SLE 患者的 **DNase I 無法有效清除 NETs**，形成惡性循環

---

### 4. Type I IFN 放大迴路（IFN Signature）

**IFN-α 是 SLE 病理的核心細胞激素：**

- 促進 DC 成熟與抗原呈現
- 使自體反應性 B 細胞和 T 細胞免於凋亡
- 上調 MHC、共刺激分子
- 打破周邊耐受性

> ~75% SLE 患者有 **type I IFN 基因特徵（interferon gene signature）**

---

### 5. B 細胞活化與自體抗體產生

**雙受器模型（Dual Receptor Engagement）是 Kelly's 強調的重點：**

```
DNA/RNA 免疫複合體
    ↙              ↘
BCR（自體抗原識別）   →  細胞內化
                          ↓
                     Endosomal TLR7/TLR9 活化
                          ↓
                  B 細胞完全活化（T cell independent）
                          ↓
              分化為漿細胞 → 自體抗體分泌
```

---

### 6. PAMP 的角色：觸發與分子模擬

雖然 DAMP 是主導，PAMP 透過以下機制參與：

- **EBV（Epstein-Barr Virus）**：EBNA-1 與 Sm 抗原有序列相似性（分子模擬）
- **感染誘發 flare**：PAMPs 活化 TLR4/TLR7，放大已存在的自體免疫
- **腸道微生物群**：菌叢失衡（dysbiosis）提供持續性 TLR4 刺激

---

## 整合視角（Kelly's 框架）

```
遺傳因素（HLA-DR2/DR3, C1q缺陷, IRF5多型性）
            +
環境誘發（PAMP：EBV/紫外線/藥物）
            ↓
凋亡清除障礙 → DAMP 累積（核酸、HMGB1、NETs）
            ↓
PRR 活化（TLR7/9, cGAS-STING）
            ↓
Type I IFN 大量分泌
            ↓
T/B 細胞耐受性崩潰
            ↓
自體抗體 + 免疫複合體
            ↓
補體活化 + FcγR 媒介發炎
            ↓
腎臟、皮膚、關節、CNS 損傷
```

---

## 臨床意義與治療靶點

| 機制 | 臨床/治療意義 |
|------|--------------|
| Type I IFN 過多 | Anifrolumab（anti-IFNAR）靶向治療 |
| TLR7/9 活化 | Hydroxychloroquine 阻斷 endosomal TLR |
| BLyS/BAFF 升高（B細胞存活） | Belimumab 靶向 |
| T cell 共刺激 | Abatacept（CTLA4-Ig）研究中 |
| NETs 清除障礙 | DNase I 相關治療研究 |

---

*建立日期：2026-05-16*
