# Axial SpA（AS）致病機轉 — 完整整理與口試攻略
*參考：Kelly's Textbook of Rheumatology, 12th edition, Chapter 76*

---

## 【口試開場架構】

> "AS 的致病機轉可以從**三個層面**來談：遺傳背景、核心免疫發炎軸、以及最終的結構破壞。"

---

## 一、遺傳因素（Genetic Factors）

### HLA-B27
- AS 患者 **HLA-B27 陽性率 85–95%**（一般白種人群約 8%）
- HLA-B27 陽性者發展成 AS 的機率約 **1–3%**（Kelly KEY POINTS）
- HLA-B27 陽性的一等親中，約 **10%** 有 AS 的跡象或症狀
- HLA-B27 本身不足以致病，需要其他遺傳與環境因素共同作用
- 與 IBD 或乾癬合併的 AS，HLA-B27 陽性率較低（約 **60%**）

### 非 HLA 基因（Non-HLA Genes）— 超過 110 個 non-MHC loci

| 基因 | 功能相關 |
|------|---------|
| **ERAP1、ERAP2、NPEPPS** | Aminopeptidase；修剪 MHC class I 胜肽 |
| **IL23R、IL12B、JAK2、TYK2** | IL-23 訊號路徑 |
| **RUNX3、TBX21、EOMES、IL7R** | 淋巴球發育與活化 |
| **CARD9、GPR35、GPR37、GPR65** | 先天免疫、菌叢感知 |

> 💡 **ERAP1 考點：** ERAP1 的 AS 相關 SNP 只在 **HLA-B27 陽性**患者中顯著，是人類疾病中第一個被複製驗證的 **gene-gene interaction（epistatic interaction）**，指向異常胜肽呈現為關鍵機轉。

---

## 二、HLA-B27 的致病假說

Kelly 原文指出：「儘管研究超過 40 年，HLA-B27 在 AS 中的確切角色仍不清楚。」以下三個模型各有支持與限制：

### 假說一：致關節肽假說（Arthritogenic Peptide Hypothesis）
- HLA-B27 異常呈現自體胜肽給 CD8+ T 細胞 → 自體免疫攻擊關節
- **限制：** B27-transgenic rat 研究顯示此模型不佳，疾病發生不依賴 CD8+ T 細胞
- **新證據支持：** TCR 定序研究發現 AS 患者 CD8+ T 細胞中，TCRβ 的 CDR3 區段有特定 motif 大量擴增（37/37 AS 案例），且在反應性關節炎患者中也有發現，強化了腸道微生物與基因易感宿主交互作用的理論

### 假說二：ER Stress / UPR 假說
- HLA-B27 重鏈在內質網 **組裝速度慢** → ER stress → UPR → IL-23 分泌（主要來自巨噬細胞）
- **限制：** 此支持最強來自 B27-transgenic rat；在 AS 患者滑膜有部分證據，但**循環血球中幾乎無 ER stress 的證據**

```
HLA-B27 slow assembly in ER
        ↓
   ER stress → UPR
        ↓
 巨噬細胞 IL-23 分泌↑（主要在動物模型）
```

### 假說三：重鏈同型二聚體（Heavy-chain Homodimer）
- β2-microglobulin 解離後，游離重鏈形成 homodimer
- KIR3DL2+ CD4+ T 細胞辨識後分泌 IL-17
- **限制：** HLA-B27 各亞型形成 homodimer 的能力與 AS 的關聯性**不相關**，Kelly 認為此假說**不太可能**是主要機轉

> 💡 **口試一句話：** "三個假說各有限制；ER stress 假說在動物模型最受支持，但在人類的直接證據仍不足；最新的 TCRβ CDR3 定序研究則重新燃起對致關節肽假說的興趣。"

---

## 三、IL-23 訊號路徑（核心發炎軸）⭐⭐

- IL-23 透過 IL-23R（+ IL-12RB1）訊號傳遞，驅動 **IL-17 和 IL-22 分泌細胞**的發展
- IL-23 在 AS 患者滑液及末段迴腸中**明顯升高**

### 參與 IL-23 反應的細胞（非傳統路徑）⭐
Kelly 強調：CD4+ T 細胞並非 IL-23 反應的主角，以下「非典型」細胞更重要：

| 細胞 | 說明 |
|------|------|
| **γδ T cell** | IL-23R 高度表現；分泌 IL-17 |
| **KIR3DL2+ CD4+ T cell** | 辨識 HLA-B27 homodimer；分泌 IL-17 |
| **Mast cell** | 非典型 IL-23 反應細胞 |
| **Neutrophil** | 非典型 IL-23 反應細胞 |
| **巨噬細胞、樹突細胞、LTi-like cells** | IL-23R 表現；參與調控 |

> 注意：各細胞類型的階層與 IL-23 的主要來源，Kelly 明確指出**目前仍不清楚**。

### 臨床試驗的矛盾結果 ⭐（重要！）

| 靶點 | 藥物 | Kelly 原文結論 |
|------|------|--------------|
| IL-17A | Secukinumab | ✅ Phase III 有效，廣泛使用中 |
| IL-12/23 p40 | Ustekinumab | ⚠️ 未達主要終點，但部分患者有效（HLA-B27 陽性者可能有部分效果） |
| **IL-23 p19** | Guselkumab, Risankizumab | ❌ **在設計良好的研究中顯示無效**，原因目前仍無法解釋 |

> 💡 **口試考點：** IL-23p19 抑制劑在 PsA 和乾癬有效，但在 AS **無效**，這個矛盾結果目前仍 unexplained，是 Kelly 特別點出的爭議點。

---

## 四、腸道—關節軸（Gut-Joint Axis）⭐

- **5–10%** AS 患者發展為 IBD
- 另有 **70%** 呈現亞臨床腸道發炎（ileo-colonoscopy 可見）
- AS 患者有增加的腸道通透性（leaky gut）
- AS 患者的腸道菌叢組成有**獨特的異常**（dysbiosis），在歐洲與東亞族群都已被複製驗證
- 腸道菌叢的異常可能是**致病因素**，也可能是**疾病後果**——目前在人類仍不確定，但動物模型支持菌叢為驅動因素

### 動物模型關鍵證據
- HLA-B27-transgenic rats 在**無菌環境**下，腸道發炎和關節發炎**均減少**
- HLA-B27 本身會影響腸道菌叢（在健康人就有此效果），支持菌叢驅動疾病的模型

```
AS 遺傳背景（HLA-B27）
    ↓
影響腸道菌叢組成
    ↓
菌叢異常 → 腸道通透性增加
    ↓
IL-23 在末段迴腸大量升高
    ↓
腸道-關節軸驅動全身免疫活化
```

---

## 五、結構重塑與骨化（Structural Remodeling and Ankylosis）⭐⭐

### 5-1. 基本概念
- AS 的特色：早期發炎引起骨侵蝕，晚期出現**過度骨化（osteoproliferation）**
- 人類直接組織學證據很少（標本難取得），多數知識來自**影像研究和動物模型**

### 5-2. 發炎與骨化的關係
- **基線 CRP 是目前唯一穩定的放射學進展預測因子**
- TNF 抑制劑雖不能完全阻止骨化，但**確實能顯著減緩骨化進展**，在達到臨床緩解的患者中尤其明顯

### 5-3. Wnt 路徑與 DKK-1（Kelly 原文的謹慎立場）⭐

Kelly 原文的表述非常謹慎：

> "It had been **postulated** that TNF inhibition releases Wnt pathway-driven bone formation as it reduces expression of the Wnt inhibitor DKK1. **However**, this would be expected to lead to **accelerated ankylosis** in TNF inhibitor-treated patients, when in fact **the converse appears to be the case**. This may reflect the suppressive effect of TNF inhibition on disease activity in **early stages** of inflammation **prior to** activation of bone-forming pathways."

**重點解讀：**

- 曾有人假設：anti-TNF → DKK-1 降低 → Wnt 反彈 → 骨化加速
- 但臨床上觀察到的是 **anti-TNF 反而減緩骨化**
- Kelly 的解釋：anti-TNF 在骨化路徑被活化**之前**就已壓制早期發炎，所以整體效果是延緩骨化

```
Anti-TNF 治療
    ↓
壓制早期發炎（在骨化路徑活化前介入）
    ↓
整體效果：減緩骨化進展
（DKK-1/Wnt 反彈的不利影響被早期發炎抑制所抵銷）
```

### 5-4. IL-17 在骨化中的雙重角色 ⭐
- IL-17A 和 IL-12/23p40 在 AS 患者的血清和滑液中升高
- IL-17A 調控 **JAK2** 的表現（JAK2 在 AS 骨組織中高度表現）→ 促進成骨細胞活性
- IL-17A 表現的 **γδ T cell** 可促進間質幹細胞分化為成骨細胞
- IL-17A 增強 **RANKL** 和 metalloproteinases 的表現 → 骨侵蝕

> IL-17A 同時具有**促骨形成**和**促骨侵蝕**的雙重作用，其最終結果取決於細胞外細胞激素環境和細胞分化階段

- Kelly 特別指出：**IL-17F 可能比 IL-17A 在骨化中扮演更重要的角色**（IL-17F 特異性抑制劑的開發正是為了驗證此假說）

### 5-5. BMP 路徑
- 動物模型研究支持 **Wnt 和 BMP（Bone Morphogenetic Protein）路徑**為主要的骨合成路徑
- 可能是未來減緩骨化的治療靶點
- Kelly 強調：**需要針對發炎誘導骨化的特異性藥物**，以避免廣泛骨質疏鬆的副作用

### 5-6. 脂肪化生（Fat Metaplasia）— 骨化的中間步驟
- MRI 研究顯示：**骨髓脂肪化生（fat metaplasia）是新骨形成的中間步驟**
- 一旦脂肪化生出現，新骨形成便可能發生
- 此細胞分子機轉目前尚未完全釐清

```
發炎（enthesitis、corner inflammation）
        ↓
骨髓水腫（BME）→ 骨侵蝕
        ↓
發炎消退（± 治療）
        ↓
脂肪化生（fat metaplasia）← 中間步驟
        ↓
新骨形成（Wnt/BMP 路徑，動物模型）
        ↓
Syndesmophyte → Bamboo spine
```

### 5-7. NSAID 與骨化的爭議
- 早期研究：慢性 NSAID 使用（尤其在急性期反應物升高的患者）可延緩骨化
  - 機制理論：AS 與 **PTGER4**（PGE 受體）基因變異有關；PGE 在附著點受機械壓力後產生，驅動 IL-23 和骨化
- **但後續設計相近的研究未能複製此結果**，即使在急性期反應物升高的患者中也無法顯示骨化延緩的效果
- Kelly 對 NSAID 延緩骨化的效果持**保留態度**

---

## 六、整合機轉總圖（依 Kelly 原文）

```
遺傳背景（HLA-B27, ERAP1, IL23R 等）
            +
環境因素（腸道菌叢、感染、機械壓力）
            ↓
HLA-B27：slow ER assembly → UPR → IL-23↑（主要在動物模型）
            +
腸道菌叢失衡 → 腸道通透性↑ → IL-23↑（末段迴腸）
            ↓
IL-23 驅動非典型細胞（γδ T、KIR3DL2+ CD4+ T、mast cell）
            ↓
IL-17（A/F）↑ → 發炎 + 骨化雙重作用
            +
TNF 協同放大發炎
            ↓
       Enthesitis（中心病理）
            ↓
骨侵蝕（RANKL↑）＋ 脂肪化生
            ↓
Wnt / BMP 骨化路徑（動物模型證據）
            ↓
Syndesmophyte → Bamboo spine
```

---

## 七、治療靶點（依 Kelly 療效評估）

| 靶點 | 藥物 | Kelly 評估 |
|------|------|-----------|
| TNF | Adalimumab, Etanercept, Infliximab | ✅ 有效；能減緩但不能完全阻止骨化 |
| IL-17A | Secukinumab, Ixekizumab | ✅ Phase III 有效，廣泛使用 |
| IL-17A/F | Bimekizumab | ✅ 雙重阻斷 |
| IL-12/23 p40 | Ustekinumab | ⚠️ 未達主要終點，部分患者可能有效 |
| **IL-23 p19** | Guselkumab, Risankizumab | ❌ **無效**（Kelly 明確指出） |
| JAK | Tofacitinib, Upadacitinib | ✅ 臨床有效 |
| ERAP1/ERAP2 | 仍在研究中 | 🔬 潛在靶點 |

---

## 【口試萬用收尾】

> "整體來說，AS 是在 HLA-B27 等遺傳背景下，由腸道菌叢異常和環境因素觸發，以 **IL-23/IL-17 軸**為核心，以 **enthesitis** 為中心病理，最終走向骨化的慢性免疫發炎疾病。值得注意的是，IL-23p19 抑制劑在 AS 中意外地無效，這與 PsA 不同，原因目前仍不清楚。在骨化機轉上，Wnt 和 BMP 路徑在動物模型中有重要角色，但在人類的確切機轉仍待釐清。"

---

*整理依據：Kelly's Textbook of Rheumatology, 12th edition, Chapter 76 — Axial Spondyloarthritis 原文*
