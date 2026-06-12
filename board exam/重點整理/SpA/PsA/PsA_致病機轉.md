# PsA 致病機轉

---

## 口試版摘要

### 開場
PsA 的致病機轉可以從三個層面理解：**遺傳易感性、環境觸發、免疫病理**，三者透過 **IL-23/IL-17 axis** 整合在一起。

### 遺傳
遺傳上有個重要概念：皮膚病的 MHC 關聯靠近 **HLA-C**，關節炎靠近 **HLA-B**——兩者分離，暗示皮膚和關節有不同的致病機轉。非 MHC 的基因中，**TRAF3IP2**（Act1，IL-17 下游訊號）和 **IL23R** 直接指向核心路徑。

### 環境
環境觸發中最重要的是**腸道 dysbiosis**——菌叢失衡破壞腸道上皮屏障，刺激 IL-23 分泌，活化的 IL-23R⁺ innate cells 循環至 enthesis 和滑膜引發炎症。動物模型的支持很直接：HLA-B27 transgenic rats 在無菌環境下不發病。另外 enthesis 的**機械壓力**也是重要觸發因子。

### IL-23 → IL-17 核心軸
IL-23 是 upstream master regulator，透過 **JAK2/TYK2 → STAT3** 路徑誘導 **RORγt** 上調，驅動 IL-17 和 IL-22 產生。

它的作用對象不只是 Th17——**γδ T cells、ILC3、MAIT cells** 等 innate-like cells 都大量表現 IL-23R，在 enthesis 尤其重要。

IL-17 下游走 **Act1 → TRAF6 → NFκB + MAPK**，作用在 keratinocyte、fibroblast、synoviocyte 等**結構細胞**上，和 TNF 有顯著 **synergy**。

### 關鍵概念：IL-23-Independent Pathway
IL-23 是 **initiator**，但一旦 entheseal cells 被 primed，IL-17 的持續產生就由 **IL-1β 和 IL-18** 維持，不再需要 IL-23。

這直接解釋了為什麼 **IL-23p19 抑制劑**對皮膚效果卓越，但對關節不如 **IL-17 抑制劑**——皮膚端依賴 IL-23，關節端已進入 IL-23-independent 迴路。這個臨床 discordance 本身就是這個概念最好的證據。

### 組織病理
滑膜的特徵是**顯著的血管新生**，轉錄組分析顯示滑膜以 **TNF 和血管新生路徑**為主，而皮膚以 **Th17/IL-17** 為主——這個差異解釋了不同治療的療效分歧。

骨頭的特色是**侵蝕和新骨生成並存**：侵蝕靠 **RANKL/OPG 失衡 → osteoclast 活化**，TNF 是主要驅動力；新骨靠 **Wnt + BMP pathway** 在 enthesis 驅動 osteoblast 分化，造成 periostitis 和 ankylosis。

### 收束
PsA 可以理解為：遺傳體質 + 環境觸發 → IL-23 啟動 entheseal innate cells → IL-17/TNF synergy 造成多部位損傷。皮膚和關節雖共享上游機制，但下游 cytokine landscape 分歧，加上 IL-23-independent pathway 的存在，使關節端炎症具有相對自主性。

### 記憶骨架
```
遺傳：HLA-C（皮膚）vs. HLA-B（關節）分離 + TRAF3IP2、IL23R
環境：腸道 dysbiosis → IL-23↑ → innate cells 遷移到 enthesis
核心軸：IL-23（JAK2/TYK2→STAT3→RORγt）→ IL-17（Act1→TRAF6→NFκB）
重要概念：IL-23 initiator，IL-1β/IL-18 maintainer → IL-23i vs IL-17i 療效差異
組織：皮膚=Th17，滑膜=TNF+血管新生，骨頭=RANKL（侵蝕）+Wnt/BMP（新骨）
```

---

## 完整機轉

### 一、遺傳因素

#### HLA 關聯
- **HLA-C\*06**：psoriasis 主要基因（~60% psoriasis 帶有，但只 ~29% PsA）
  - 早發、嚴重皮膚病；皮膚先發病，距離關節症狀 >10 年；關節表現較輕、penetrance 低
- **HLA-B 區域**（B\*27、B\*08、B\*38、B\*39）：關節炎的主要遺傳驅動
  - **B\*27**：symmetric sacroiliitis、enthesitis、dactylitis；皮膚與關節幾乎同時發病；約 1/3 患者關節先於皮膚
  - **B\*08**：asymmetric sacroiliitis、joint fusion、deformities
  - **MICA-A9** polymorphism（與 HLA-B\*57:01、B\*38:01 連鎖不平衡）→ 增加多關節病變風險
- 結論：**皮膚病的 MHC 關聯靠近 HLA-C；關節病的 MHC 關聯靠近 HLA-B**

#### 非 MHC 基因
| 基因 | 功能 | 意義 |
|------|------|------|
| **TRAF3IP2**（Act1） | IL-17 下游訊號中介，與 NFκB family 互動 | PsA + psoriasis 風險 |
| **IL23R** | IL-23 receptor | PsA、AS、IBD 共同風險 |
| **IL12B**（p40） | IL-12/IL-23 共用 subunit | Psoriasis + PsA |
| **JAK2、TYK2** | IL-23 訊號下游激酶 | AS/SpA 風險 |
| **TNFAIP3**（A20） | NFκB 負調控因子 | PsA 風險；A20 缺失小鼠 → axial arthritis、enthesitis、DIP erosions |
| **PTPN22** | T cell receptor 訊號調控 | PsA 風險 |
| **REL locus**（c-Rel） | NFκB 轉錄因子 | PsA 全基因組顯著關聯 |
| **TNF-308 A allele** | 高 TNF 產量 | 早期 PsA 中與骨侵蝕進展相關 |

---

### 二、環境誘因

#### 微生物與腸道軸
- **腸道/皮膚菌叢失衡（dysbiosis）** → 破壞上皮屏障 → 活化 IL-23 產生的 resident immune cells
- **IL-23R⁺ mucosal innate cells** 活化後離開腸道，遷移至 **enthesis 和滑膜** → 引發炎症
- 動物模型：HLA-B27 transgenic rats 在無菌環境下不發病；暴露特定微生物後出現 IL-23/IL-17 驅動的 SpA-like 疾病
- 多項人類研究確認腸道菌叢組成在 psoriatic disease 中有改變

#### 其他環境因素
| 因素 | 說明 |
|------|------|
| **Koebner 現象** | 皮膚外傷 → 牛皮癬；「deep Koebner」→ 機械壓力觸發關節炎症 |
| **鏈球菌感染** | 兒童 guttate psoriasis 的已知觸發因子（superantigen 機轉） |
| **肥胖** | 增加 psoriasis → PsA 進展風險 |
| **吸菸** | 一般族群增加風險；但在已有 psoriasis 的患者中部分研究顯示反向關聯，機轉未明 |

---

### 三、免疫病理

![PsA 致病機轉整合模型](../../images/IL-17%20PsA.webp)
*圖：PsA 機轉同心圓模型。最外圈為 Inducers（MHC-I/DC、腸道 dysbiosis、機械發炎、代謝/肥胖）；中圈為 Enhancers（Th17、γδ T、ILC3、MAIT 等產 IL-17 的細胞）；內圈為 Effectors（Macrophage/TNF、Neutrophil），TNFAIP3/CARD14 基因影響標示於此。（From Schett et al., Nat Rev Rheumatol 2022）*


#### 皮膚
- **DC（樹突細胞）**：主要產生 TNF、IL-12、IL-23
- IL-23 → naive CD4⁺ T 分化為 **Th17**
- Th17 → **IL-17A + TNF** 協同 → keratinocyte 增生 + anti-microbial peptides（β-defensin、S100A7）分泌 → 牛皮癬斑塊
- **CD8⁺ T cells** 為表皮主要 T cell
- 轉錄組分析：皮膚以 **Th17 訊號為主**

#### 滑膜
- 特徵性改變：**血管新生顯著**（tortuous、dilated vessels）→ 比 RA 更突出
- 相較於 RA：lining layer hyperplasia 較少、macrophage 較少、E-selectin 低
- SpA vs. RA 的區別特徵：vascularity↑、neutrophil↑、**CD163⁺ macrophage↑**
- 血管生成因子：**TNF、VEGF、TGF-β、angiopoietins（ANG-1/2）、PDGF**
- 轉錄組分析：滑膜以 **TNF + 血管新生路徑為主**
- T resident memory（Trm）細胞：CXCR6⁺，多功能促發炎介質產生者，留存於組織

#### Enthesis
- Psoriasis 患者在無臨床關節炎前即可有結構性 entheseal 病變，且為 PsA 進展的預測因子
- 炎症媒介：**PGE2、IL-17A、IL-22**
- 活化間充質細胞 → 分化為 **osteoblast** via **Wnt + BMP（BMP-2、BMP-7）** → **periostitis、ankylosis**
- CD8⁺ T cells 在 enthesis 數量較 RA 多（與 PsA-HLA class I 關聯一致）
- **IL-23R⁺ resident cells**（γδ T、ILC3 等）被 IL-23 primed 後可直接誘發炎症，**不需 Th17 cells 參與**

---

### 四、IL-23 訊號

#### 結構與來源
- 異二聚體：**p19**（IL-23 特有）+ **p40**（與 IL-12 共用）
- 主要來源：**Macrophage、DC**、腸道 resident immune cells

#### Receptor 與下游訊號
```
IL-23 → IL-23R（特異）+ IL-12RB1（共用）
               ↓
         JAK2（IL-23R side）
         TYK2（IL-12RB1 side）
               ↓
         STAT3 磷酸化 → 二聚體 → 入核
               ↓
    轉錄：IL-17A、IL-17F、IL-22、RORγt 上調
```
- 負回饋：**SOCS3**（抑制 STAT3 的 JAK 活化）
- IL-23R 表現於：CD4⁺ T（少量）、**γδ T cells、ILC3、macrophage、DC、LTi cells、mast cells、neutrophils**

---

### 五、IL-17 訊號

#### 家族成員
| 成員 | Receptor | 主要來源 |
|------|----------|----------|
| **IL-17A** | IL-17RA / IL-17RC | Th17、CD8⁺ Tc17、γδ T、ILC3、MAIT |
| **IL-17F** | IL-17RA / IL-17RC | 同上，效力較弱 |
| IL-17A/F（異二聚體） | IL-17RA / IL-17RC | — |
| IL-25（IL-17E） | IL-17RB | Th2 cells，誘導 Th2 反應 |

#### Receptor 與下游訊號
```
IL-17A → IL-17RA / IL-17RC
（表現於 keratinocyte、fibroblast、synoviocyte、osteoblast 等結構細胞）
               ↓
         Act1（TRAF3IP2 基因產物）招募
               ↓
         TRAF6 活化
               ↓
    ┌──────────┴──────────┐
NFκB pathway          MAPK pathway（p38、ERK、JNK）
    ↓                          ↓
促炎基因轉錄              mRNA 穩定化
IL-6、IL-8、GM-CSF、      （延長 cytokine mRNA 半衰期）
CXCL1、MMP
```
- **IL-17 × TNF synergy**：兩者同時活化 NFκB，效果遠超單獨刺激

#### IL-17A 效應靶細胞
| 靶細胞 | 效應 |
|--------|------|
| Keratinocyte | 增生↑、anti-microbial peptides 分泌 |
| Fibroblast / Synoviocyte | IL-6↑、IL-8↑、MMP↑ → 中性球招募 |
| Osteoblast | RANKL↑ → osteoclastogenesis → 骨侵蝕 |
| Entheseal mesenchymal cells | Wnt/BMP → osteoblast 分化 → 新骨生成 |

---

### 六、細胞激素總結

#### 皮膚 vs. 滑膜 cytokine 差異
| 部位 | 主要訊號 |
|------|---------|
| 皮膚 | Th17（IL-17、IL-22）為主 |
| 滑膜 | TNF + 血管新生路徑為主 |

#### 滑膜 cytokine 細節
- **Th1 profile**：IL-2、IFN-γ 高量
- **IL-1β、TNF**：高濃度；**IL-4、IL-5 缺乏**
- **IL-10**：高度表現於滑膜（但不見於皮膚）
- **IL-18、IL-15**：innate cytokines，methotrexate 可下調
- **IL-17⁺ CD4⁻ T cells（主要是 CD8⁺ Tc17）**：在 PsA 滑液中增加（RA 則無），與疾病活性、骨侵蝕狀態相關

#### JAK-STAT 對照表
| 細胞激素 | JAK | STAT | 功能 |
|----------|-----|------|------|
| IL-23 | JAK2 + TYK2 | STAT3（+STAT4） | Th17 維持、IL-17 誘導 |
| IL-12 | TYK2 + JAK2 | STAT4 | Th1 分化 |
| IL-6 | JAK1 + JAK2 | STAT3 | 急性期反應、Th17 起始分化 |
| IL-22 | JAK1 + TYK2 | STAT3 | 上皮修復、新骨生成 |
| IFN-γ | JAK1 + JAK2 | STAT1 | Th1 effector |

**RORγt**：Th17 的 master transcription factor，由 IL-6 + TGF-β → STAT3 誘導，驅動 IL-17A/F、IL-22 基因表現，是新興藥物標靶。

---

### 七、骨重塑失衡

#### 骨侵蝕
- 滑膜 **RANKL↑ / OPG↓** → osteoclast 活化 → 骨侵蝕（pencil-in-cup deformity）
- 循環中 **osteoclast precursors（DC-STAMP⁺ CD14⁺ monocytes）** 在 PsA 中顯著升高
- TNFi 治療 → osteoclast precursors 顯著下降 → TNF 是 osteoclastogenesis 的核心驅動因子
- **MMP-1、2、3、9** 在滑膜升高 → 軟骨破壞

#### 新骨生成
- **BMP-2、BMP-7** → Smad1/5 磷酸化 → 骨形成
- **TGF-β、VEGF** 協同誘導骨生成
- **Wnt pathway**：Wnt↑ vs. Wnt 拮抗劑 DKK-1 之平衡決定 osteoblast 活性
- 臨床特徵：periostitis、enthesophyte、spur formation、bony ankylosis

---

### 八、IL-23-Independent 的 IL-17 持續路徑

#### 機轉
1. **IL-23 → priming**：活化 enthesis 的 IL-23R⁺ resident cells（γδ T、ILC3、MAIT、CD3⁺CD4⁻CD8⁻ T、Tc17）
2. **Primed 之後**：**IL-1β + IL-18** 足以持續驅動 IL-17/IL-22，**不再需要 IL-23**
3. IL-23 = **Initiator**；IL-1β/IL-18 = **Maintainer**

#### 臨床意涵
| 治療 | 皮膚 | 關節/Enthesitis |
|------|------|----------------|
| IL-23p19 抑制劑（risankizumab） | 卓越（接近完全清除） | 相對有限 |
| IL-17 抑制劑（secukinumab、ixekizumab） | 有效 | 優於 IL-23 抑制劑 |
| IL-12/23 p40 抑制劑（ustekinumab） | 有效 | 中等有效 |

---

### 九、PsO → PsA 疾病進程模型

```
遺傳易感性（HLA-B27、IL23R、TRAF3IP2 等）
+ 環境誘因（dysbiosis、外傷、肥胖、感染）
              ↓
【Pre-clinical phase】
IL-23/IL-17/TNF 異常活化（皮膚、腸道、enthesis）
              ↓
【Subclinical phase】
Biomarker 改變 + 影像可見骨骼變化（US/MRI enthesitis）
              ↓
【Prodromal phase】
Arthralgia、fatigue
              ↓
【臨床 PsA】
Synovitis、enthesitis、dactylitis、asymmetric axial disease
```

**PsO → PsA 的高風險因子**：

- 一等親有 PsA（RR >30）
- HLA-B\*27
- 嚴重乾癬（PASI >20；RR 5.4）
- Nail、scalp、inverse psoriasis
- 肥胖、uveitis、甲狀腺疾病、憂鬱症
