# Systemic Sclerosis (SSc) 致病機轉完整筆記

---

## ⚠️ 核心概念：三大病理過程

SSc 的致病機轉由**三個核心病理過程**組成，三者相互驅動、形成惡性循環：

```
        血管病變（Vasculopathy）
              ↕
  免疫失調 ←————————→ 纖維化
（Immune dysregulation）  （Fibrosis）
```

> **時間序列**：血管病變最早 → 免疫失調隨之 → 纖維化為最終共同路徑

---

## 一、病因（Etiology）

### 遺傳因素
- 第一等親罹患 SSc 的相對風險為 **13 倍**
- 但同卵雙胞胎疾病一致率僅 **4.7%** → 遺傳貢獻有限，環境與表觀遺傳更重要
- 同卵雙胞胎 **ANA 陽性一致率高達 90%** → 免疫傾向有基因基礎

### 主要易感基因

| 基因 | 位置 | 相關抗體/亞型 | 機轉 |
|------|------|--------------|------|
| **HLA** | 6p | 各亞型 | 抗原呈現 |
| PTPN22 | 1p | Topo I (+) | T/B 細胞活化 |
| IRF5 | 7q | dcSSc | Type I IFN 轉錄 |
| STAT4 | 2q | lcSSc, ACA | IL-12/23 訊號 |
| TNFAIP3 | 6q | dcSSc, ILD, PAH | NF-κB 調節 |
| BANK1 | 4q | ACA | B 細胞訊號 |
| NLRP1 | 17p | dcSSc, 肺纖維化 | Inflammasome, IL-1β |

### 環境誘發因子
- **感染**：CMV（UL83/UL94 與 Topo-I 交叉反應）、EBV、Parvovirus B19
- **職業暴露**：矽塵（風險↑15倍）、polyvinyl chloride、有機溶劑
- **藥物**：Bleomycin（標準動物模型誘導劑）
- **腸道菌相失調（Dysbiosis）**：Faecalibacterium ↓、Fusobacterium ↑

### 表觀遺傳（Epigenetics）
- DNA methylation：anti-fibrotic 基因（PARP1、Fli-1、KLF5）啟動子被沉默
- Histone modification：EZH2↑（H3K27me3）、HDAC↑ → fibroblast 持續活化
- MicroRNA：
  - **miR-21 ↑** → 抑制 Smad7（anti-fibrotic）→ 促纖維化
  - **miR-29 ↓** → 正常抑制膠原基因，在 SSc 被壓制

---

## 二、血管病變（Vasculopathy）——最早期事件

### 起始損傷的可能原因
- 病毒（CMV、EBV）
- 細胞毒性因子
- 自體抗體（anti-endothelial cell antibody）
- 活性氧（ROS）

### ⚠️ 內皮細胞損傷後的連鎖反應

```
EC 損傷
  ├─ EC apoptosis
  └─ 存活 EC → Activated phenotype
        ├─ VCAM-1、E-selectin ↑ → 白血球浸潤
        ├─ NO、PGI₂、prostacyclin ↓（vasodilators）
        ├─ ET-1 ↑（vasoconstrictor + 促纖維化）
        └─ EMT（Endothelial-Mesenchymal Transition）
              → 失去 CD31，獲得 α-SMA → Myofibroblast
```

### ⚠️ 血小板活化的角色
活化血小板釋出：**PDGF、TGFβ、CXCL-4（PF4）、HMGB1、serotonin**
→ 促進凝血、血管收縮、直接刺激 fibroblast 活化

### 血管修復失敗的機制
- 缺氧 → HIF-1α → VEGF ↑，但同時 VEGF 被 **alternative splicing** 為 **anti-angiogenic isoform（VEGF₁₆₅b）**
- 循環中 **EPC（endothelial progenitor cell）↓** → 血管修復不足
- 最終：毛細血管稀疏（rarefaction）→ 慢性組織缺氧

### 缺氧的後果
- HIF-1α ↑ → 刺激 ECM 基因（膠原、lysyl oxidase）
- 直接誘導 epithelial/endothelial → myofibroblast 分化
- 組織缺氧濃度在 SSc 患者明顯低於正常（23.7 vs 33.6 mmHg）

---

## 三、免疫失調（Immune Dysregulation）

### 核心迴路

```
細胞損傷 / DAMPs / 核酸碎片
        ↓ TLR7/9
      pDC 活化
        ↓
   Type I IFN 大量分泌
    ┌──────┴──────┐
  T cell Th2    B cell 活化
  polarization  → Autoantibodies
    ↓              ↓
 IL-4, IL-13    免疫複合物
    ↓              ↓
  TGFβ ↑      再次刺激 pDC ← 正向回饋
    ↓
 Fibroblast 活化 → 纖維化
```

### T 細胞異常

| T 細胞亞型 | SSc 中的變化 | 臨床意義 |
|-----------|------------|---------|
| **Th2** | ↑（IL-4, IL-13, IL-5） | 直接促膠原合成、TGFβ↑ |
| Th1 | ↓（IFNγ↓） | IFNγ 有 anti-fibrotic 作用，缺乏加重纖維化 |
| Th17 | ↑（IL-17） | 角色仍在研究中 |
| **Treg** | 數量↑但功能缺損 | 失去抑制自體免疫的能力；TGFβ/IL-10 分泌↓ |

### B 細胞異常
- Naive B cell ↑、CD19 過度表現
- BAFF（B cell activating factor）↑ → 效應 B 細胞存活
- B 細胞直接分泌 **TGFβ、IL-6** → 促纖維化
- 相關基因：BANK1、BLK、CSK、PTPN22

### 巨噬細胞
- 以 **M2（alternately activated）** 為主
- 分泌 CCL18、TGFβ → 促進纖維化

### Type I IFN Signature
- 與 SLE 類似，pDC 為主要來源
- 存在於血液中，即使早期疾病即可偵測

---

## 四、纖維化（Fibrosis）——最終共同路徑

### 核心細胞：Myofibroblast
**來源：**

- 正常 fibroblast → TGFβ 刺激轉分化
- 內皮細胞（EMT）
- 血管壁周細胞（Pericyte，表現 CD248）
- 循環中的纖維細胞前驅（fibrocyte）

### TGFβ 的核心地位
**分泌來源：** platelet、macrophage、Th2 T cell、myofibroblast（自分泌）

**下游效應：**

- ↑ type I、III 膠原合成
- ↑ 膠原交聯酶（LOXL2、PLOD2）→ 基質更僵硬
- ↓ MMP（減少 ECM 降解）
- 活化 Wnt/β-catenin、JAK/STAT、YAP/TAZ、Hedgehog、NOTCH 訊號路徑
- 誘導 IL-11（autocrine, ERK-dependent）→ 進一步促纖維化

### 重要輔助促纖維化媒介

| 媒介 | 來源 | 作用 |
|------|------|------|
| CTGF/CCN2 | Fibroblast | TGFβ 下游，促膠原合成；血清濃度與皮膚/肺纖維化相關 |
| PDGF | 血小板、macrophage | Fibroblast mitogen；抗 PDGFR 抗體 → ROS → myofibroblast |
| IL-4 / IL-13 | Th2, mast cell | 促膠原合成、TGFβ↑、TIMP↑ |
| IL-6 | Macrophage, B cell | 促 Th2 極化、膠原合成；血清濃度與皮膚嚴重度相關 |
| ET-1 | 內皮細胞 | 血管收縮 + SMC 增生 + fibroblast 活化 |

---

## 五、各器官纖維化與受損的深入機轉

### 皮膚（Skin）

**核心機轉：**

- 早期：Th2 cytokine（IL-4, IL-13）+ TGFβ → fibroblast 活化 → dermis 膨脹
- 真皮層 perivascular mononuclear cell infiltrate（CD4+ T cells, macrophage）
- **α-SMA+ myofibroblast ↑** → 膠原異常堆積（type I, III）
- 膠原交聯酶（LOXL2、PLOD2）↑ → collagen cross-linking ↑ → 皮膚更硬

**進展特徵：**

- 皮膚附屬器（毛囊、汗腺、皮脂腺）被纖維組織取代消失
- 真皮內白色脂肪層消失
- 晚期：dermis acellular，膠原束密集、hyalinized
- 表皮 rete pegs 消失，類似老化改變

**分子層面：**

- Single-cell RNA seq：myofibroblast 來自 **SFRP2/DPP4+ fibroblast subset**（另表現 SFRP4、FNDC1）
- Anti-fibrotic 轉錄因子（Fli-1、KLF5、PARP1）被 **promoter methylation 沉默**
- **miR-21 ↑** → 抑制 Smad7 → TGFβ 訊號去煞車

---

### 肺臟（Lung）——最主要死亡原因（合計 60% SSc 死亡）

#### A. 間質性肺病（ILD）

**機轉：**

- 初期：alveolar wall 的 lymphocyte、plasma cell、macrophage 浸潤 → **alveolitis**
- TGFβ、IL-4、IL-6、IL-13 → 肺泡 myofibroblast 活化 → 肺間質膠原沉積
- Hypoxia → HIF-1α → 進一步促 ECM 基因表現
- 慢性胃食道逆流 → microaspiration → 可能加重 ILD

**病理型態：**

- 主要：**NSIP（Nonspecific Interstitial Pneumonia）**——均勻分布
- 少數：UIP 型——scattered fibroblastic foci，預後較差
- 最終：honeycombing、traction bronchiectasis

**高風險族群：** dcSSc、Anti-Scl-70 陽性、非裔美國人、HLA-DRB1\*11 / HLA-DPB\*1301

**監測指標：**

- **DLCO 最早下降**（比 FVC 早）
- **FVC 下降 >10%** = 疾病活動指標，預後不良
- HRCT：ground-glass → reticular pattern → honeycombing

#### B. 肺動脈高壓（PAH）

**機轉（獨立於 ILD 的血管病變）：**

- ET-1 ↑ → 血管收縮 + smooth muscle cell 增生
- NO ↓、Prostacyclin ↓ → 失去 vasodilation
- **Neointima formation** → 管腔閉塞 → 肺血管阻力↑
- BMPR2 訊號缺陷（TGFβ family）→ 肺血管異常增殖

**PAH 與 ILD 的關係：**

- PAH 可單獨存在（lcSSc + ACA 多見，常在病程 >10 年後）
- 或繼發於慢性低氧（ILD → 缺氧性血管收縮）
- 兩者並存時預後最差（3 年存活率 46% vs PAH alone 64%）

---

### 消化道（GI）——幾乎所有患者皆有

#### 食道（最常見，90% 患者）

**機轉：特別之處——主要不是纖維化造成！**

- **神經功能異常（先於肌肉病變）**：autoantibody 針對 myenteric cholinergic neuron → 神經傳導失調
- 食道平滑肌 **atrophy**（非單純纖維化）
- **缺血假說**：冷刺激下食道血流受損 → 類 Raynaud 現象
- 小動脈 intimal hyperplasia（同全身血管病變）
- 下食道括約肌低張力（LES hypotonia）→ GERD

**後果序列：**
```
GERD → esophagitis → stricture → Barrett's esophagus（↑30倍腺癌風險）
```

#### 胃（GAVE / Watermelon stomach）
- 異常 angiogenesis → 微血管扭曲擴張、A-V malformation
- 胃竇出現縱向血管紅條紋（watermelon stomach）
- 與 **Anti-RNA pol III** 相關
- 可致慢性隱性 GI 出血

#### 小腸 / 大腸

**機轉：**

- 微血管病變 + 神經功能障礙 + 平滑肌萎縮 → 腸道低動力
- 腸道菌相失調（dysbiosis）：Faecalibacterium ↓、Fusobacterium ↑
- 慢性腸道低動力 → **SIBO（小腸細菌過度生長，發生率 30-60%）**

**嚴重併發症：**

- Pseudoobstruction（腸道偽阻塞）
- Pneumatosis cystoides intestinalis（氣體進入腸壁）
- Wide-mouth diverticula（**SSc 特徵性表現**）

---

### 腎臟（Scleroderma Renal Crisis, SRC）

**病理核心：小血管病變主導（非纖維化）**

**機轉連鎖：**
```
慢性腎臟小血管 intimal hyperplasia（onion-skinning）
         ↓
    血管管腔狹窄（even in non-SRC patients）
         ↓
    急性 vasospasm 觸發（誘因：corticosteroid、快速皮膚進展）
         ↓
    腎臟缺血 → RAAS 大量活化 → Renin ↑↑
         ↓
  Angiotensin II ↑ → 惡性高血壓
         ↓
    腎小球缺血塌陷 + 腎小管傷害
         ↓（新發現）
  Complement 系統活化 → 腎內 C4d 沉積
         ↓
  Thrombotic microangiopathy（像 TTP 但 ADAMTS-13 正常）
```

**組織學特徵：**

- 腎臟弓狀動脈 **onion-skinning**（intimal 過度增生）
- 纖維素樣壞死（fibrinoid necrosis）
- 腎小球缺血性收縮（不是 GN）

**高風險抗體：** Anti-RNA pol III（60%）> Anti-U3-RNP > Anti-Scl-70；**ACA 陽性者幾乎不發生 SRC**

**治療核心：**

- ACE inhibitor（captopril）→ 阻斷 RAAS → 降壓保腎
- **不可預防性使用**（pre-SRC 使用 ACEi 反而預後更差）
- 嚴重難治性：Eculizumab（anti-C5，阻斷 complement）

---

### 心臟（Heart）

**機轉：「心肌版 Raynaud's Phenomenon」**

- 心肌小血管同樣發生 vasospasm（冠狀動脈微血管）
- 反覆缺血-再灌注 → 心肌細胞 **Contraction band necrosis（特徵性！）**
- 非炎症性心肌纖維化（interstitial + perivascular）
- 可與心包積液、constrictive pericarditis 並存
- 右心衰竭常繼發於 PAH

---

### 器官受累總整理表

| 器官 | 主要機轉 | 特徵性病理 | 相關抗體 |
|------|---------|-----------|---------|
| **皮膚** | TGFβ → myofibroblast + miR-21↑ | Dermis 纖維化、附屬器消失 | Anti-Scl-70（dcSSc）|
| **肺 ILD** | TGFβ + Th2 → alveolitis | NSIP > UIP | Anti-Scl-70、Anti-Th/To |
| **肺 PAH** | ET-1↑、NO↓ → neointima | 肺動脈 intimal proliferation | ACA（晚期）、Anti-U3-RNP |
| **食道** | 神經病變 > 平滑肌萎縮 > 缺血 | 蠕動消失、LES 低張 | 無特異 |
| **胃（GAVE）** | 異常血管新生 | Watermelon stomach | Anti-RNA pol III |
| **腸道** | 神經 + 血管 + 肌肉萎縮 | Wide-mouth diverticula | 無特異 |
| **腎臟（SRC）** | Vasospasm + RAAS + Complement | Onion-skinning | Anti-RNA pol III（60%）|
| **心臟** | 微血管 vasospasm → 缺血再灌注 | Contraction band necrosis | 無特異 |

---

## 六、自體抗體：Serologic Fingerprint

### 重要特性
- 幾乎所有 SSc 患者均陽性（ANA ~95%）
- 可在臨床症狀出現**數年前**偵測到
- **彼此互斥（mutually exclusive）**
- 反映不同的免疫失調型態與疾病亞型

### 主要抗體一覽表

| 抗體 | 靶抗原 | 盛行率（SSc 中）| 疾病亞型 | 主要器官受累 | 預後 |
|------|--------|:--------------:|---------|------------|------|
| **Anti-Scl-70（Anti-Topo I）** | DNA topoisomerase I | ~25–40% | **dcSSc** | 嚴重 ILD、皮膚、SRC、關節炎、心臟 | 差（尤其非裔） |
| **ACA（Anti-centromere）** | CENP-A/B/C | ~20–40% | **lcSSc** | CREST、晚期 PAH；ILD 少 | 相對良好 |
| **Anti-RNA pol III** | RNA polymerase III | ~15–25% | **dcSSc** | 快速皮膚病變、SRC（25–40%）、GAVE、癌症相關 | 差 |
| Anti-U3-RNP（fibrillarin） | U3-RNP | ~4–8% | dcSSc/lcSSc | PAH、嚴重 GI、SRC；多見於非裔 | 差 |
| Anti-Th/To | Th/To RNP | ~2–5% | **lcSSc** | 嚴重 ILD、PAH | 差 |
| Anti-PM/Scl | PM/Scl complex | ~3–8% | Overlap | Myositis、ILD | 中等 |
| Anti-Ku | Ku protein | ~1–4% | Overlap | 肌肉、關節 | 中等 |
| Anti-U1-RNP | U1-RNP | ~5–10% | Overlap/MCTD | 多發性關節炎、myositis | 中等 |

> 註：ACA 在 lcSSc 中盛行率可達 40–60%；Anti-Scl-70 在 dcSSc 中可達 ~40%；各文獻因族群不同略有差異

### 自體抗體如何參與致病

1. **免疫複合物 → 放大 IFN 迴路**：Autoantibody + 核酸 → IC → pDC TLR7/9 → Type I IFN → 更多 autoantibody（正向回饋）
2. **Anti-PDGFR 抗體（功能性刺激型）**：直接結合 fibroblast PDGFR → ROS → myofibroblast 分化
3. **Anti-endothelial cell 抗體**：誘發 EC apoptosis → 白血球浸潤、血管損傷
4. **Anti-Scl-70 濃度**與皮膚/肺纖維化程度相關，隨疾病活性起伏

### 為何不同抗體對應不同表現？

| 層次 | 解釋 |
|------|------|
| **基因層次** | HLA 基因型決定哪種自體抗原 peptide 被有效呈現 → 決定產生哪種抗體 |
| **免疫型態** | 不同 HLA + 基因背景 → 不同 Th2/IFN 比例、B cell 活化方式 |
| **器官偏好** | 不同免疫失調型態 → 不同器官的血管損傷或纖維化佔主導 |
| **抗體本質** | 自體抗體是免疫失調型態的「serologic fingerprint」，而非單純直接致病原因 |

---

## 七、口試快速回答架構

```
「SSc 致病機轉可用三個核心過程說明：」

① 血管病變（最早）
   → EC 損傷 → ET-1↑、NO↓ → 血管收縮、閉塞、缺氧

② 免疫失調
   → Type I IFN 迴路 + Th2 偏移 → 自體抗體 + TGFβ↑

③ 纖維化（最終共同路徑）
   → TGFβ → Myofibroblast → 膠原過度沉積

「三者形成惡性循環，互相驅動。」
```

**追問自體抗體時：**
> 三個最重要：Anti-Scl-70（dcSSc + ILD）、ACA（lcSSc + 晚期 PAH）、Anti-RNA pol III（dcSSc + SRC）；彼此互斥，反映不同 HLA 基因型與免疫失調型態。
