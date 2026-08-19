# B Cell Activation 完整整理

> 來源：Janeway's Immunobiology 10th ed, Ch10 (The Humoral Immune Response) Section 10-1～10-9、10-14；Ch7 (Lymphocyte Receptor Signaling) Section 7-7～7-20

## 一、總覽：Two-signal Model

B cell 活化跟 T cell 一樣需要兩個訊號：

- **Signal 1**：抗原直接結合 **BCR**，觸發胞內訊號傳導（見下方第四節）；訊號可被 co-receptor complex（**CD19/CD21/CD81**）放大——CD21 (CR2) 結合附著在病原體表面的補體片段 **C3d/C3dg**，拉近 CD19，促使 CD19 磷酸化並招募 PI3-kinase
- **Signal 2**：來源決定抗原分類
  - **Thymus-dependent (TD) antigen**：來自 helper T cell（CD40L–CD40）
  - **Thymus-independent (TI) antigen**：直接來自微生物成分活化 TLR（如 LPS）

只有 protein antigen 需要 T cell help；缺乏 T cell 的個體無法對 protein antigen 產生抗體反應。

## 二、TD 抗原活化路徑（主軸）

### 2.1 Linked Recognition

B cell 要獲得 T cell help，須把抗原胜肽以 MHC class II 呈現給抗原專一性 CD4 T cell（未來分化成 Tfh）看。**T cell 辨識的胜肽必須與 B cell BCR 辨識的抗原表位物理上連結在同一分子複合體**（例如同一顆病毒的不同蛋白），B cell 才能同時 uptake、處理、呈現給正確的 T cell。

BCR 專一性的 B cell 呈現該抗原胜肽的效率，比不相關 BCR 的 B cell 高 **10,000 倍**。此原理也是 hapten-carrier effect 與 *H. influenzae* type b 疫苗設計的基礎。

### 2.2 B/T Cell 向 Follicle 邊界遷移

Naive B/T cell specificity 相同又剛好相遇的機率極低（<1/10⁸），需要精密趨化激素導航：

| 階段 | 受體 | 配體 | 位置 |
|---|---|---|---|
| Naive T cell | CCR7 | CCL19/CCL21 | T-cell zone |
| Naive B cell | CXCR5 | CXCL13（FDC 分泌） | Primary follicle |
| B cell 遇抗原後 | 誘導 CCR7 + EBI2 | CCL21 / 7α,25-HC | 往 T-B border 移動 |
| 活化 T cell | 誘導 CXCR5 + EBI2 | CXCL13 / 7α,25-HC | 同樣往 T-B border 移動 |

抗原經由 subcapsular sinus macrophages（表面 CR1/CR2 捕捉 opsonized 抗原但不完全降解）與 follicular dendritic cell (FDC) 呈現。Follicle 中的 **BAFF**（經 BAFF-R → non-canonical NFκB → Bcl-XL）提供 B cell 存活訊號；BAFF 另兩個受體 TACI、BCMA 也參與，BCMA 主要表現在 plasma cell。

### 2.3 T-B Border 交互作用與 Tfh 分化

- **B cell 提供給 T cell**：B7.2(CD86)–CD28、ICOSL–ICOS → 促使 T cell 完成 Tfh 分化（誘導 Bcl-6、c-Maf）
- **T cell 提供給 B cell**：CD40L–CD40（存活、增殖，活化 canonical + non-canonical NFκB，誘導 **Mcl-1**）、**IL-21**（活化 STAT3，促進增殖分化）、後期 IL-4、IFN-γ、IL-6、TGF-β（影響 isotype switching）
- 兩者靠 **SLAM family（SLAM/CD150、CD84、Ly108）+ SAP** 維持長時間接觸——SAP 基因缺陷即為 **XLP (X-linked lymphoproliferative syndrome)**

B cell 若 1–2 天內未遇到對的 Tfh，會變成 anergic，壽命從 ~40 天縮短到 ~5 天。

### 2.4 活化後兩條分化路徑

1. **Primary focus（extrafollicular）**：往 medullary cords（LN）或 red pulp（spleen）遷移，快速分化成 **plasmablast**，分泌 IgM 為主（也可不經 GC 直接 class switch），約感染後第 5 天出現，短暫早期反應
2. **Germinal center (GC)**：與 Tfh 一起移入 follicle 內部，形成 dark zone（**centroblast**，CXCR4⁺，快速分裂）與 light zone（**centrocyte**，CXCR5⁺，FDC 密集區）

### 2.5 Germinal Center 內的親和力成熟

- **AID (activation-induced cytidine deaminase)** 在 centroblast 引入 somatic hypermutation（突變率 ~10⁻³/bp/cell division，遠高於一般 DNA 的 10⁻¹⁰）
- Centrocyte 移到 light zone 後，靠 BCR 與 FDC 上抗原免疫複合體的結合能力，競爭性決定能否呈現足夠胜肽給 Tfh → 高親和力者獲得 CD40L + IL-21 存活訊號，低親和力者凋亡（tingible body macrophage 清除）
- 通過選擇的 centrocyte 重新表現 CXCR4 回到 dark zone 繼續突變分裂——即 **cyclic reentry model**
- **AID 缺陷 = hyper-IgM type 2**（無法 SHM 也無法 class switch）

## 三、TI 抗原活化路徑（對照補充）

| | TD | TI-1 | TI-2 |
|---|---|---|---|
| 機轉 | BCR + T cell help (CD40L, IL-21) | BCR 專一性 + TLR（高劑量時 polyclonal） | 高度重複性 epitope 大量 cross-link BCR |
| 代表抗原 | 病毒蛋白、diphtheria toxin | LPS、bacterial DNA | 莢膜多醣、Ficoll |
| 嬰兒可產生反應 | Yes | Yes | No（marginal zone B cell 未成熟） |
| Affinity maturation / memory | 有 | 無 | 通常無 |

- **TI-1**：即 B-cell mitogen，可直接誘發任何 specificity 的 B cell 增殖（polyclonal activation）；低濃度時才變成專一性反應
- **TI-2**：主要由 **marginal zone B cell**、**B-1 B cell** 負責，靠 dendritic cell 分泌 BAFF 增強並促成部分 class switching；epitope 密度太高或太低都會使反應失敗（過高導致 anergy）

## 四、BCR 胞內訊號傳導（Ch7, Section 7-20）

### 4.1 受體結構

- **抗原辨識鏈**：Ig 重鏈 + 輕鏈（胞內段短，不能傳訊）
- **訊號傳導鏈**：**Igα (CD79a) / Igβ (CD79b)**，胞內段含 **ITAM**

### 4.2 近端訊號：Src kinase → Syk

1. 靜止態：**Fyn、Blk、Lyn**（Src family）已鬆散結合在未磷酸化的 Igα/Igβ ITAM
2. 抗原結合、BCR clustering 後，這些 kinase 活化，磷酸化 Igα/Igβ ITAM 酪胺酸
3. **Syk**（B cell 版的 ZAP-70，B cell 不表現 ZAP-70）透過 SH2 domain 結合已磷酸化的 **Igβ ITAM**
4. Cluster 內鄰近的 Syk 分子彼此 **transphosphorylation** 而完全活化——Syk 只要結合磷酸化 ITAM 就活化，不需要像 ZAP-70 那樣額外磷酸化

### 4.3 Co-receptor 放大訊號：CD19/CD21/CD81

- **CD21 (CR2)** 結合補體片段 **C3dg**；CD19 因此被 BCR 相關 Src kinase 磷酸化，招募 **PI3-kinase**，放大訊號
- CD81 (TAPA-1) 功能書中未明（as yet unknown）
- 部分 CD19 以單體存在，無補體標記也能增強 BCR 訊號

### 4.4 Scaffold：SLP-65 (BLNK)

活化的 Syk 磷酸化 **SLP-65（BLNK）**，一人身兼 T cell 中 LAT + SLP-76 兩者角色，招募多種 SH2-containing 蛋白形成訊號複合體。

### 4.5 下游三分支（與 TCR 邏輯相同）

由 SLP-65 + PIP₃ 招募 **Btk**（B cell 專屬 Tec kinase，對應 T cell 的 Itk）活化 **PLC-γ**，切割 PIP₂ 產生 DAG 與 IP₃：

- **Ca²⁺ 分支**：IP₃ → ER 釋放 Ca²⁺ → STIM1/ORAI1 → Ca²⁺/calmodulin → calcineurin 去磷酸化 → **NFAT** 入核
- **Ras/MAPK 分支**：DAG → RasGRP → Ras → Raf → Mek → Erk → Elk-1/c-Jun → **AP-1**（Fos:Jun）
- **PKC 分支**：DAG → PKC（isoform 書中未點名，T cell 用 PKC-θ 但其為 T cell/muscle 限定）→ CARMA1/BCL10/MALT1 → TRAF6 → IKK → IκB 降解 → **NFκB**

另外兩條並行分支：

- **PI3K/Akt**：PIP₃ 招募 PDK1、Akt，促進存活（磷酸化 Bad）、代謝上調（glycolysis、Glut1）、活化 mTOR
- **Vav/WASp**：招募 Vav（GEF）活化 Rho family GTPase → WASp → Arp2/3 → actin polymerization，並促進 integrin 高親和力構型

**Btk 缺陷 = X-linked agammaglobulinemia**（B cell 發育與功能完全喪失）。

## 五、BCR vs TCR 訊號傳導對照

| 步驟 | TCR | BCR |
|---|---|---|
| 抗原辨識鏈 | TCRαβ | Ig 重鏈+輕鏈 |
| 訊號傳導鏈（ITAM） | CD3γδε + ζ chain | Igα (CD79a) / Igβ (CD79b) |
| Co-receptor | CD4 / CD8 | CD19/CD21/CD81 |
| Co-receptor 帶的 Src kinase | **Lck**（掛在 CD4/CD8 上，是磷酸化 ITAM 的主要推手） | **Fyn/Blk/Lyn**（本來就結合在 BCR 上，co-receptor 只是加強 PI3K，非磷酸化必要條件） |
| 雙 SH2 kinase | ZAP-70（結合 ITAM 後還需 Lck 額外磷酸化才活化） | Syk（結合已磷酸化 ITAM 即活化，門檻較低） |
| Scaffold | LAT + SLP-76（由 Gads 橋接） | SLP-65 (BLNK)（一肩挑起兩者角色） |
| Tec kinase | Itk | Btk |
| 下游轉錄因子 | NFAT / AP-1 / NFκB | 相同：NFAT / AP-1 / NFκB |
| 活化門檻機制 | Kinetic proofreading / TCR dwell time（結合時間夠長才不可逆活化，1 個 peptide:MHC 即可活化） | Receptor clustering（約需 20 個 BCR 同時 engage） |

## 六、相關疾病整理

| 缺陷分子/機轉 | 疾病 |
|---|---|
| CD40L (CD154) | Hyper-IgM syndrome type 1（喪失所有 switched isotype） |
| AID | Hyper-IgM syndrome type 2（無 SHM、無 class switch） |
| SAP (SLAM-associated protein) | XLP（X-linked lymphoproliferative syndrome，合併 hypergammaglobulinemia、hyper-IgE） |
| ICOS / SAP 缺陷 | GC 反應缺損，class-switched 抗體嚴重下降 |
| Btk | X-linked agammaglobulinemia |
| WASp | Wiskott–Aldrich syndrome（T-B interaction 缺損，對 TI-2 多醣抗原反應差） |
| Marginal zone B cell 發育不全 | 對 TI-2 抗原（莢膜多醣）反應差，好發 encapsulated bacteria 感染 |
