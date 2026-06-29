# PsA 致病機轉

---

## 口試版摘要

### 開場
PsA 的致病機轉可從三個層面理解：**遺傳易感、環境觸發、免疫病理**，三者透過 **IL-23/IL-17 axis** 整合。核心病灶是 **enthesis（附著點）**。

### 易感與觸發
遺傳上一個關鍵概念：**皮膚病的 MHC 關聯靠近 HLA-C，關節病靠近 HLA-B**——兩者分離，暗示皮膚與關節有不同致病機轉。非 MHC 基因中最重要的是 **IL23R** 和 **TRAF3IP2（Act1，IL-17 下游）**，直接指向核心路徑。環境觸發中最重要的是**腸道 dysbiosis**（破壞屏障 → IL-23↑ → IL-23R⁺ innate cells 遷移至 enthesis）與 **enthesis 機械壓力**。動物模型很直接：HLA-B27 transgenic rats 無菌環境下不發病。

### 核心軸：IL-23 → IL-17（+ TNF）
IL-23 是上游 master regulator，誘導 **RORγt** → 驅動 IL-17、IL-22。作用對象不只 Th17——**γδ T、ILC3、MAIT** 等 innate-like cells 都表現 IL-23R，在 enthesis 尤其重要。IL-17 作用在 keratinocyte、synoviocyte、osteoblast 等**結構細胞**，與 **TNF 顯著 synergy**，最終透過招募 **neutrophil** 放大發炎。

### 三組織病理（一句話框架）
**皮膚 = Th17/IL-17 為主；滑膜 = TNF + 血管新生為主；骨 = 侵蝕（RANKL）與新骨生成（Wnt/BMP）並存。**

### 記憶骨架
```
遺傳：HLA-C（皮膚）vs. HLA-B（關節）分離 + IL23R、TRAF3IP2
環境：腸道 dysbiosis + 機械壓力 → IL-23↑ → innate cells 到 enthesis
核心軸：IL-23 →（RORγt）→ IL-17 ＋ TNF synergy → 招募 neutrophil
三組織：皮膚=Th17 ／ 滑膜=TNF+血管新生 ／ 骨=RANKL（侵蝕）+Wnt/BMP（新骨）
```

---

## 完整機轉

### 一、遺傳與環境

#### HLA：皮膚與關節分離（核心概念）
- **HLA-C\*06**：psoriasis 主要基因；早發、嚴重皮膚病、皮膚常先於關節 >10 年
- **HLA-B 區域（B\*27、B\*08、B\*38/39）**：關節炎的主要遺傳驅動
  - **B\*27** → sacroiliitis、enthesitis、dactylitis；皮膚與關節幾乎同時
- 結論：**皮膚病 MHC 靠近 HLA-C；關節病 MHC 靠近 HLA-B**

#### 關鍵非 MHC 基因（記三個就好）
| 基因 | 功能 | 意義 |
|------|------|------|
| **IL23R** | IL-23 receptor | PsA/AS/IBD 共同風險，直指核心軸 |
| **TRAF3IP2（Act1）** | IL-17 下游訊號中介 | PsA + psoriasis |
| **TNFAIP3（A20）** | NFκB 負調控 | 缺失小鼠 → axial arthritis、enthesitis、DIP erosion |

#### 環境誘因
- **腸道 dysbiosis**（最重要）→ 屏障破壞 → IL-23↑ → IL-23R⁺ innate cells 遷移至 enthesis/滑膜
- **機械壓力 / deep Koebner**：enthesis 受力觸發發炎
- 其他：鏈球菌感染（兒童 guttate）、肥胖
- 動物模型：HLA-B27 transgenic rats **無菌環境不發病**

---

### 二、核心免疫軸：IL-23 → IL-17

![PsA 致病機轉整合模型](../../images/IL-17%20PsA.webp)
*圖：PsA 同心圓模型。外圈 Inducers（DC、dysbiosis、機械、代謝）；中圈 Enhancers（Th17、γδ T、ILC3、MAIT 等產 IL-17 細胞）；內圈 Effectors（Macrophage/TNF、Neutrophil）。（Schett et al., Nat Rev Rheumatol 2022）*

- **IL-23**（p19 + p40，來自 macrophage/DC）→ JAK2/TYK2 → **STAT3** → 誘導 **RORγt** → 驅動 **IL-17A/F、IL-22**
- IL-23 的反應細胞不只 Th17：**γδ T、ILC3、MAIT、LTi、mast cell、neutrophil** 都表現 IL-23R（enthesis 尤以 innate-like cells 為主）
- **IL-17** → 經 **Act1（TRAF3IP2）→ TRAF6 → NFκB/MAPK** 作用於結構細胞
- **IL-17 × TNF synergy**：兩者同時活化 NFκB，效果遠超單獨刺激

| IL-17A 靶細胞 | 效應 |
|--------------|------|
| Keratinocyte | 增生↑、抗菌肽（β-defensin、S100A7）↑ → 牛皮癬斑塊 |
| Fibroblast / Synoviocyte | IL-6↑、IL-8↑、MMP↑ → 招募 neutrophil |
| Osteoblast | RANKL↑ → osteoclast → 骨侵蝕 |
| Entheseal 間充質細胞 | Wnt/BMP → osteoblast 分化 → 新骨 |

---

### 三、IL-17–Neutrophil 軸 — Innate 與 Adaptive 的橋樑 ⭐

#### 1. 為什麼 IL-17 與 neutrophil 密不可分
IL-17 軸是**先天與後天免疫的交會點**，neutrophil 是它最下游的終端效應細胞：

- 上游 producers 橫跨兩系統：adaptive 的 **Th17、Tc17** ＋ innate-like 的 **γδ T、ILC3、MAIT**
- IL-17 的本職是抗胞外菌，手段就是**招募並活化 neutrophil**

#### 2. 招募與放大迴路
```
IL-17A（+ TNF）→ 結構細胞分泌
  CXCL1/2/8(IL-8)、G-CSF/GM-CSF、S100A8/9
        ↓
  neutrophil 募集至表皮/滑膜/enthesis → ROS、proteases、NETs
        ↓
  【正回饋】NETs → 刺激 IL-23 → 再驅動上游 IL-17
```

> 💡 adaptive/innate-like 細胞產生 IL-17 → 招來 innate 的 neutrophil → neutrophil 回饋 IL-23，形成 **IL-23/IL-17/neutrophil 自我放大迴路**，是 PsA 慢性發炎的細胞基礎。

#### 3. 皮膚特徵性病理（hallmark）
Kelly 原文：乾癬皮膚以**表皮增生、真皮乳突層單核球、角質層內 neutrophils** 為特徵。兩個經典名詞：

| 病理特徵 | 位置 | 說明 |
|---------|------|------|
| **Munro microabscess** | 角質層（stratum corneum） | plaque psoriasis 的病理 hallmark |
| **Kogoj 海綿狀膿疱** | 棘層上層（Malpighian layer） | 常見於 pustular psoriasis |

![乾癬皮膚病理一](../../images/PsO%20pathology.png)

![乾癬皮膚病理二](../../images/PsO%20pathology%202.png)

- **Auspitz sign**：刮除鱗屑後點狀出血（真皮乳突血管擴張變薄）
- **無菌性膿疱**：膿疱型乾癬肉眼可見膿疱，內含大量 neutrophil 但**培養無菌** → 免疫驅動而非感染

#### 4. 膿疱型乾癬與 IL-36 軸（考點）
- **GPP（泛發性膿疱型乾癬）**：neutrophil 主導最劇烈表型，以 **IL-36/IL-1 軸**為核心（非典型 IL-23/IL-17）
- **IL-36RN 突變** → IL-36 過度活化 → 強力招募 neutrophil
- 對應新藥 **Spesolimab（anti–IL-36R）**——「neutrophil 表型 → IL-36 靶點」

#### 5. 治療意涵
- **IL-17 抑制劑（secukinumab、ixekizumab）**：直接切斷「IL-17 → 趨化因子 → neutrophil」，對皮膚起效快
- 共同邏輯：**降低 neutrophil 募集＝臨床改善的最終共同途徑**

> 💎 **口試金句：** "IL-17 與 neutrophil 密不可分，因為 IL-17 本職就是抗胞外菌、手段就是招募 neutrophil。在 PsA，這條軸串起 adaptive 的 Th17/Tc17 與 innate 的 γδT/ILC3 作為產生端，以 neutrophil 為終端效應器，再經 NETs 回饋 IL-23 放大。皮膚印記是角質層的 **Munro microabscess** 與棘層的 **Kogoj pustule**；極端表型是 IL-36 主導的 GPP，對應 spesolimab。"

---

### 四、三組織病理

| 組織 | 主要訊號 | 重點 |
|------|---------|------|
| **皮膚** | Th17 / IL-17、IL-22 | DC 產 IL-23 → Th17 → keratinocyte 增生；CD8⁺ T 為表皮主要 T cell |
| **滑膜** | TNF + 血管新生 | **血管新生比 RA 更顯著**；vs RA：lining 增生少、E-selectin 低；**neutrophil↑、CD163⁺ macrophage↑、vascularity↑ → 區分 SpA 與 RA** |
| **Enthesis** | PGE2、IL-17A、IL-22 | 核心病灶；無臨床關節炎前即可見、為 PsA 進展預測因子；IL-23R⁺ resident cells 被 primed 後**不需 Th17 即可發炎** |
| **骨** | RANKL（侵蝕）＋ Wnt/BMP（新骨） | 侵蝕（pencil-in-cup）與新骨生成（periostitis、enthesophyte、ankylosis）**並存**；TNF 驅動 osteoclast，TNFi 可降 osteoclast precursors |

---

### 六、PsO → PsA 疾病進程與高風險因子

```
遺傳易感 + 環境誘因
   → Pre-clinical：IL-23/IL-17/TNF 異常活化（皮膚、腸道、enthesis）
   → Subclinical：影像可見 enthesitis（US/MRI）
   → Prodromal：arthralgia、fatigue
   → 臨床 PsA：synovitis、enthesitis、dactylitis、axial disease
```

**PsO → PsA 高風險因子**：

- 一等親有 PsA（RR >30）
- HLA-B\*27
- 嚴重乾癬（PASI >20）
- Nail、scalp、inverse psoriasis
- 肥胖、uveitis
