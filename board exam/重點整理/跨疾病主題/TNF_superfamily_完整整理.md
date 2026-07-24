# TNF Superfamily 完整整理

## 一、命名系統：TNFSF / TNFRSF

TNF superfamily 採統一命名法：**配體**為 TNFSF（TNF Superfamily member），**受體**為 TNFRSF（TNF Receptor Superfamily member）。

| Systemic Name | Common Name | 主要受體 | 主要功能／臨床重點 |
|---|---|---|---|
| TNFSF1A | TNF-α (cachectin) | TNFR1 (p55/CD120a), TNFR2 (p75/CD120b) | 發炎、內皮活化；RA/PsA/AS 治療標靶 |
| TNFSF1B | TNF-β (LT-α, lymphotoxin-α) | TNFR1, TNFR2, LTβR | 殺傷作用、內皮活化、淋巴結發育 |
| TNFSF3 | LTβ | LTβR / HVEM | 與 LTα 形成 LTα1β2 三聚體，淋巴結/Peyer's patch 發育 |
| TNFSF4 | OX40 Ligand | OX40 (CD134) | T 細胞共同刺激、記憶 T 細胞存活 |
| TNFSF5 | CD40 Ligand (CD40L, CD154) | CD40 | B 細胞活化、class switching；缺陷→Hyper-IgM syndrome |
| TNFSF6 | Fas Ligand (FasL) | Fas (CD95) | 誘導細胞凋亡；缺陷→ALPS |
| TNFSF7 | CD27 Ligand | CD27 | 刺激 T 細胞增生 |
| TNFSF8 | CD30 Ligand | CD30 | 刺激 T/B 細胞增生 |
| TNFSF9 | 4-1BB Ligand | 4-1BB (CDw137) | 共同刺激 T/B 細胞 |
| TNFSF10 | TRAIL (Apo-2L) | DR4, DR5, DcR1, DcR2, OPG | 誘導活化 T 細胞、腫瘤細胞、病毒感染細胞凋亡 |
| TNFSF11 | TRANCE / RANKL (OPGL) | RANK / OPG（誘餌受體） | 刺激蝕骨細胞分化與骨吸收；denosumab 標靶 |
| TNFSF12 | TWEAK (Apo-3L) | Fn14 (TWEAKR) | 血管新生 |
| TNFSF13 | APRIL | TACI, BCMA | B 細胞增生、IgA class switching |
| TNFSF13B | BAFF (BLyS, CD257) | TACI, BCMA, BR3 | B 細胞存活/增生；belimumab 標靶（SLE） |
| TNFSF14 | LIGHT | HVEM, LTβR | T 細胞共刺激 |
| TNFSF15 | TL1A / VEGI | DR3 | 促發炎，與 IBD、SpA 相關 |
| TNFSF18 | GITR Ligand | GITR | 調控 Treg 功能 |

（出處：Janeway *Immunobiology* 10th ed. Appendix III；Kelly's *Textbook of Rheumatology* Ch029）

---

## 二、TNF-α 的結構與 TNFR1/TNFR2 訊息傳遞

**合成與釋放**：

- TNF-α 先以 26 kDa 的**跨膜前驅蛋白**（transmembrane TNF, tmTNF）表現在細胞膜上
- 由 **TACE（TNF-α converting enzyme，即 ADAM17，CD156b）**這個 metalloproteinase 切割，釋出 17 kDa 的可溶性 TNF（soluble TNF, sTNF）
- sTNF 三個分子聚合成有活性的 **homotrimer**
- tmTNF 與 sTNF 都有生物活性：**tmTNF 負責細胞對細胞的局部訊息傳遞，sTNF 可作用於遠端**——這是不同 TNF 抑制劑藥理差異的關鍵

**兩種受體，訊息傳遞路徑不同**：

| | TNFR1 (p55, CD120a) | TNFR2 (p75, CD120b) |
|---|---|---|
| 表現分布 | 幾乎所有細胞恆定表現 | 主要在免疫細胞、內皮細胞誘導性表現 |
| 胞內構造 | 含 **death domain** | 不含 death domain |
| 主要下游 | 經 TRADD → 分岔為 (1) FADD/caspase-8 → 細胞凋亡 或 (2) TRAF2/RIP1 → canonical NF-κB 活化 | 直接結合 TRAF1/2/3 → 也可活化 NF-κB，並參與 non-canonical NF-κB pathway |
| 主要效應 | 發炎介質釋放（誘導 IL-1、IL-6、GM-CSF）、細胞凋亡 | 組織修復、T 細胞（尤其 Treg）調控 |

（出處：Kelly Ch063 Anti-cytokine Biologics）

---

## 三、TNF Superfamily 訊息傳遞的核心邏輯

這套 superfamily 的統一邏輯是：**同一套受體幾何結構（配體-受體三聚體結合）搭配不同的胞內模組，重複使用來調控完全不同的生理功能**。可以拆成兩層開關理解。

### 3.1 第一層開關：胞內尾巴有沒有 death domain

| 受體類型 | 代表成員 | 胞內結構 | 預設走向 |
|---|---|---|---|
| 含 death domain | Fas (CD95)、TNFR1 | 死亡結構域，可招募 FADD | 可誘導細胞凋亡（也可轉向 NF-κB，視情境） |
| 不含 death domain | CD40、OX40、4-1BB、RANK、BAFF-R、LTβR……（家族多數成員） | 直接招募 TRAF 蛋白 | NF-κB 活化 → 細胞存活/活化，不走凋亡 |

這解釋了為什麼 **FasL-Fas 這條軸專職做「清除」**（活化誘導細胞死亡 AICD、周邊耐受），而 **CD40L-CD40、RANKL-RANK、BAFF-BAFF-R 這些軸專職做「活化/存活/分化」**——同一套配體-受體幾何結構，靠胞內尾巴這個結構差異就分岔成完全相反的生理功能。

**Fas 誘導凋亡的詳細機轉（extrinsic apoptosis pathway）**：

FasL 結合 Fas → 受體三聚化 → death domain 招募 **FADD**（Fas-associated via death domain）→ FADD 的 death effector domain（DED）招募 **pro-caspase 8**（或 pro-caspase 10）→ 形成 **DISC（death-inducing signaling complex）**→ caspase-8 自我切割活化 → 活化下游執行 caspase（caspase-3）→ 活化 I-CAD 等核酸酶切割 DNA → 細胞凋亡。

📖 對應圖：Janeway *Immunobiology* 10th ed., **Fig. 9.45**（Ch09, section 9-21）。

### 3.2 「Canonical」一詞的意義

"Canonical" 字面意思是「正典的、標準的、經典的」，字源來自宗教用語 canon（教規、正典經文），被科學界借用後，泛指「該領域最早被發現、最具代表性、教科書預設會先講的那個版本」，並沒有「比較重要」或「唯一正確」的意思。相對地，之後才發現、機制不同、只在部分受體才用的路徑，稱為 **non-canonical（非經典）**或 alternative pathway。這個命名邏輯在生物學中很常見，例如 Wnt signaling 也有 canonical（β-catenin 依賴）與 non-canonical（不依賴 β-catenin）之分。

### 3.3 第二層開關（給沒有 death domain 的受體）：canonical 還是 non-canonical NF-κB

這兩條路徑用同一個轉錄因子 NF-κB，但啟動機制、速度、使用的受體完全不同：

| | Canonical pathway | Non-canonical pathway |
|---|---|---|
| 誰在用 | TLR/MyD88、TNFR1、IL-1R | CD40、OX40、4-1BB、RANK、LTβR、BAFF-R 等多數 TNFRSF |
| 關鍵酵素 | IKKβ + IKKγ(NEMO) | NIK + IKKα |
| 上游機轉 | TRAF6（K63-linked polyubiquitin scaffold）→ TAK1 → IKKβ 磷酸化 IκB | TRAF2/3 + cIAP → 降解 TRAF3 → 釋放 NIK → NIK 活化 IKKα |
| NF-κB 釋放方式 | IκB 被磷酸化後直接降解，讓「現成」的 p50/p65 二聚體瞬間進核 | p100 前驅蛋白被 IKKα 切割成 p52，與 RelB 重新組成新二聚體進核 |
| 動力學 | 快（IκB 降解是現成庫存的釋放） | 慢（需重新合成/加工 p100→p52） |
| 生理意義 | 快速發炎反應（TLR 偵測病原體、TNFR1 急性發炎） | 較緩慢、延續型的共同刺激訊號，用於維持 T/B 細胞存活擴增、淋巴器官結構發育、蝕骨細胞分化 |

**Non-canonical pathway 詳細機轉（以 CD40 為例）**：CD40 未活化前，TRAF 分子與 cIAP（另一種 ubiquitin ligase）及 NIK 形成複合體，此時 TRAF 促使 NIK 持續被降解，維持路徑關閉。CD40 被 CD40L 結合活化後，此複合體被招募到 CD40 胞內端：**TRAF2 對 cIAP 做 K63-linked ubiquitination**，活化的 cIAP 再對 **TRAF3 做 K48-linked ubiquitination**（標記降解）→ TRAF3 被降解 → 原本被壓制的 **NIK 被釋放** → NIK 磷酸化並活化 **IKKα** → IKKα 磷酸化 NF-κB 前驅蛋白 **p100**，誘導其切割成活性 **p52** 亞單位 → p52 與 **RelB** 結合形成活性 NF-κB 轉錄因子進核。

📖 對應圖：

- Janeway **Fig. 3.14**（Ch03, section 3-7）：畫的是 TLR/MyD88 觸發的 canonical pathway，下游機器（TRAF6 → TAK1 → IKKβ/NEMO → IκB 降解 → p50/p65 進核）跟 TNFR1 走的 canonical NF-κB 路徑是同一套零件，可作為 canonical pathway 的視覺範本。**注意**：Janeway 並未針對 TNFR1 的 canonical NF-κB 路徑單獨畫圖，此圖是機轉類比而非 TNFR1 專屬圖。
- Janeway **Fig. 7.33**（Ch07, section 7-24）：專門畫 CD40 的 non-canonical pathway 詳細機轉（如上段文字所述）。
- Janeway **Fig. 9.28**（Ch09, section 9-11）：把 OX40、4-1BB、CD27、CD30 等一整群 TNFRSF 共同刺激分子畫在一起，標題為「multiple members of the TNF–TNFR superfamily can activate the non-canonical NFκB pathway」，是最貼近整體邏輯的總覽圖。

### 3.4 這套邏輯如何導出精準治療

因為每個 TNFRSF 成員各自對應不同的 TRAF 組合與下游 NF-κB 模式，阻斷單一配體-受體對，理論上只會切斷它專屬的下游功能，不會波及整個 NF-κB 系統：

- 擋 TNF-α/TNFR1,2 → 只影響急性發炎（canonical 快反應）
- 擋 RANKL/RANK（denosumab）→ 只影響蝕骨細胞分化，對滑膜發炎本身影響有限
- 擋 BAFF（belimumab）→ 只影響 B 細胞存活選汰，不影響 T 細胞或蝕骨細胞
- 擋 CD40L/CD40 → 只影響 T-B 協同活化這一步

這是同一套受體結構「模組化」帶來的臨床好處：藥物設計可以精準卡在某一個配體-受體節點，不必動到整個下游共用的 NF-κB 機器。

---

## 四、臨床上最重要的四個 TNF Superfamily 軸

### 4.1 RANKL / RANK / OPG — 蝕骨細胞分化軸

**分子與受體**：

- RANKL（TNFSF11，又稱 OPGL、TRANCE）主要以膜結合型表現於：**骨細胞（osteocyte，目前認為是最主要來源）**、成骨細胞、活化 T 細胞、RA 滑膜纖維母細胞（FLS）
- RANK 表現在蝕骨前驅細胞（單核球系）與成熟蝕骨細胞上
- OPG（osteoprotegerin）是可溶性**誘餌受體（decoy receptor）**，搶先結合 RANKL，阻止其與 RANK 結合，是體內天然煞車機制

**訊息傳遞與細胞分化**：蝕骨細胞分化需要兩個訊號同時存在：

1. M-CSF（骨基質細胞分泌）→ 使單核球前驅細胞增生、存活
2. RANKL 結合 RANK → 活化 NF-κB 與 NFATc1，驅動前驅細胞融合成多核的成熟蝕骨細胞

成熟蝕骨細胞具有 **ruffled border**（高度摺疊細胞膜），分泌酸性環境與蛋白酶（如組織蛋白酶K）進行骨吸收，形成 **Howship lacunae**。病理上用 **TRAP（tartrate-resistant acid phosphatase）**染色標記蝕骨細胞。

**RA 中的病理角色**：

- RA 滑膜 pannus 侵犯骨骼時，局部巨噬細胞（源自 CX3CR1+Ly6C-F4/80+ 族群，受 FOXM1 調控）分化成蝕骨前驅細胞
- 活化 T 細胞與 FLS 大量表現 RANKL，使**滑膜液中 RANKL/OPG 比值在 RA 顯著高於 OA 或痛風**，對應 RA 較具破壞性的骨侵蝕特徵
- IL-17 是蝕骨細胞生成的重要促進者（動物實驗中 anti-IL-17 有明顯保骨效果）
- ACPA（anti-citrullinated protein antibody）本身就能直接誘發骨流失，解釋 ACPA 陽性但臨床仍健康者也可能出現 periarticular osteopenia
- 動物實驗：給予 OPG（阻斷 RANKL）可**抑制骨破壞，但對關節發炎本身幾乎無效**——**RANKL-RANK 軸主要負責「骨侵蝕」這條下游路徑，與「滑膜發炎」是相對獨立的兩件事**

**臨床藥物**：**Denosumab**（抗 RANKL 單株抗體，模擬 OPG 效果）。RA 臨床試驗證實可減少骨侵蝕，但對疾病活動度/發炎改善有限，需與 DMARD/生物製劑合併控制發炎；也用於一般骨質疏鬆症治療。

**記憶點**：M-CSF + RANKL → 蝕骨分化；OPG = 誘餌受體；denosumab = 抗 RANKL；RANKL 主管骨破壞、不太管發炎本身。

（出處：Kelly Ch004 Development and Biology of Bone；Ch071 Pathogenesis of RA）

### 4.2 BAFF、APRIL / TACI、BCMA、BAFF-R — B 細胞存活軸

**分子背景**：2 個配體、3 個受體的多對多關係：

| 配體 | 結合受體 |
|---|---|
| BAFF（B cell Activating Factor，又稱 BLyS） | BAFF-R、TACI、BCMA（三個都能結合） |
| APRIL（A PRoliferation-Inducing Ligand） | 只結合 TACI、BCMA（不結合 BAFF-R） |

**三個受體在 B 細胞發育不同階段表現、功能不同**：

- **BAFF-R**：從 T2（transitional stage 2）B 細胞開始表現，缺乏於 pro-B/pre-B。BAFF 結合 BAFF-R 提供未成熟 B 細胞存活與活化訊號，決定 B 細胞能否通過 transitional stage、正式進入周邊 B 細胞庫的關鍵檢查點
- **TACI**：在邊緣區（marginal zone, MZ）B 細胞與記憶 B 細胞高度表現，增強 T 細胞非依賴性（T-independent）B 細胞反應
- **BCMA**：主要表現在漿母細胞（plasmablast）與漿細胞，對漿細胞存活至關重要

**免疫耐受失敗的機轉**：正常情況下，自體反應性的未成熟 B 細胞在 BAFF 量有限時會被「排除」（清除或無能化），因為必須與其他 B 細胞競爭有限的 BAFF 存活訊號。當 **BAFF 過量**時（動物實驗：BAFF 過度表現的小鼠），此競爭性淘汰機制被破壞，**原本該被清除的自體反應性 B 細胞也能存活下來**——這是 BAFF 與自體免疫疾病連結的核心機轉。

**與疾病的關聯**：

- SLE、RA、Sjögren's disease：血清 BAFF 濃度上升，與疾病活動度、自體抗體產生相關
- **Belimumab**（抗 BAFF 單株抗體）：核准用於 SLE（含 lupus nephritis），機轉是降低 BAFF 濃度、恢復自體反應性 B 細胞的正常淘汰
- **Telitacicept**（TACI-Ig 融合蛋白，同時阻斷 BAFF 與 APRIL）：部分亞洲地區已用於 SLE，機轉比 belimumab 更廣
- **反向缺陷**：BAFF-R 或 TACI 基因缺陷（*TNFRSF13C*、*TNFRSF13B*）是 **CVID（common variable immunodeficiency）**已知致病基因之一，造成 B 細胞內在性的免疫球蛋白缺乏——與自體免疫過度活化剛好呈現同一軸「量不足→免疫缺陷、量過多→自體免疫」的雙向性

**記憶點**：BAFF 結合三受體、APRIL 只結合 TACI/BCMA；BAFF-R 決定未成熟 B 細胞存活的「選汰關卡」；belimumab 標靶 BAFF、用於 SLE；TACI/BAFF-R 基因缺陷 → CVID。

（出處：Kelly Ch013 B Cells；Janeway Ch13 Failures of Host Defense Mechanisms）

### 4.3 CD40L / CD40 — T-B 細胞協同刺激軸

**分子與角色**：

- CD40L（TNFSF5，即 CD154）表現在活化的 CD4 T 細胞，尤其是 T follicular helper（Tfh）細胞上
- CD40 表現在典型抗原呈現細胞：B 細胞、樹突細胞（DC）、巨噬細胞
- CD40 胞內尾巴**不含 death domain**，直接連結下游 TRAF 蛋白

**訊息傳遞的下游效果**：CD40L-CD40 交互作用是 T 細胞依賴性體液免疫反應的核心第二訊號，缺一不可：

1. **對 B 細胞**：活化的 Tfh 細胞經 CD40L 刺激 B 細胞 CD40 → 驅動生發中心（germinal center）形成、**重鏈類別轉換（class switch recombination, CSR）**、體細胞高突變（somatic hypermutation）
2. **對樹突細胞/巨噬細胞**：CD40 訊號是這些細胞完全活化所需，包括提升 IL-12 分泌（進而促進 Th1 分化與 NK/T 細胞產生 IFN-γ）、提升共同刺激分子表現以活化初始 T 細胞

**基因缺陷 → X-linked Hyper-IgM syndrome**：

- 最常見病因：*CD40LG* 基因突變（X-linked），導致 CD40L 功能缺失
- 結果：Tfh 細胞無法活化初始 B 細胞進入生發中心 → 無法進行 class switching（IgG、IgA、IgE 全部低下）→ **代償性 IgM 升高**
- 因 CD40 訊號同時影響 DC/巨噬細胞活化，屬於 **combined immunodeficiency（CID）**，不只是抗體缺陷：
  - 對胞外化膿菌（需 class-switched 抗體清除）易感染
  - 對胞內病原體（如分枝桿菌）也易感染，因巨噬細胞/DC 活化不足
  - 特別容易感染 ***Pneumocystis jirovecii***（正常需活化巨噬細胞清除）
- 少數病例是 *CD40* 本身缺陷（體染色體隱性），臨床表現型幾乎相同

**臨床/風濕科相關性**：CD40-CD40L 路徑也是 SLE 等自體免疫疾病中 T-B 協同活化過度的重要機轉之一。過去曾嘗試開發 anti-CD40L（如 ruplizumab）治療 SLE，但因血栓併發症（CD40L 也表現在活化血小板上）而終止；目前新一代 anti-CD40（如 dapirolizumab pegol、iscalimab）仍在 SLE、Sjögren's disease 等疾病中臨床試驗中。

**記憶點**：CD40L on T cell、CD40 on APC；缺陷 → X-linked Hyper-IgM，IgM 升高、其他 isotype 降低；因同時影響 DC/巨噬細胞活化，屬於 CID 而非單純抗體缺陷；易感染 *Pneumocystis jirovecii*。

（出處：Janeway Ch07 Lymphocyte Receptor Signaling；Ch09 T Cell-Mediated Immunity；Ch13 Failures of Host Defense Mechanisms）

### 4.4 FasL / Fas — 活化誘導細胞死亡（AICD）軸

**分子與訊息傳遞**：

- FasL（TNFSF6）主要表現於活化的細胞毒性 T 細胞、NK 細胞
- Fas（CD95，TNFRSF6）廣泛表現在活化的淋巴球（T、B 細胞）表面，胞內含 **death domain**
- 機轉見上方 3.1 節「Fas 誘導凋亡的詳細機轉」

**生理角色：AICD（activation-induced cell death）**：這是免疫系統收尾（contraction phase）的關鍵機轉。當抗原被清除、免疫反應該結束時，反覆受抗原刺激的活化 T/B 細胞會上調 Fas 表現，並互相透過 FasL-Fas 誘導彼此凋亡，藉此：

1. 限制免疫反應的幅度與時間
2. **清除周邊出現的自體反應性淋巴球**（周邊耐受的重要一環，補足胸腺中央耐受未能完全清除的自體反應性 clone）

**XIAP 與訊號強度的精密調控**：XIAP 正常會抑制 Fas 誘發的 caspase-8/9 活化；若 XIAP 缺陷（**XLP2**, X-linked lymphoproliferative syndrome type 2），會導致細胞對 Fas 誘導凋亡**過度敏感**，反而造成淋巴球過度耗損、EBV 感染控制不良、淋巴增生——顯示這條路徑的訊號強度必須被精密調控，過強過弱都致病。

**基因缺陷 → ALPS（autoimmune lymphoproliferative syndrome, Canale-Smith syndrome）**：

- 多數病例是 **FAS 基因突變**（體染色體顯性遺傳），少數是 FASLG 或下游 caspase-10 缺陷
- 小鼠對應模型：*lpr*（Fas 突變）、*gld*（FasL 突變），皆出現類似 SLE 的自體免疫表現
- 機轉：自體反應性 T、B 細胞無法經 Fas 路徑被清除 → 持續存活並增生
- 臨床表現三要素：
  1. 慢性、非惡性的淋巴增生：全身淋巴結腫大、脾腫大
  2. 周邊血中出現異常大量的 **CD4-CD8- 雙陰性 T 細胞（DNT cells）**——ALPS 相對特異的診斷標記，正常人周邊血中極少見
  3. 自體免疫性血球減少：自體免疫性溶血性貧血、免疫性血小板低下、免疫性嗜中性球低下
- Fas 缺陷也會影響生發中心內清除經體細胞高突變後產生自體反應性 B 細胞的機制，即 Fas 路徑不只管周邊 AICD，也參與生發中心內部的品管

**與其他 TNF 家族死亡受體的關係**：Fas 之外，TNFR1 同樣含 death domain，也能透過類似路徑誘導凋亡（TNF-α/LT-α → TNFR1 → 部分情境下走向凋亡而非 NF-κB 存活訊號），但 TNFR1 的主要生理角色仍以發炎訊號（NF-κB）為主，Fas 才是專職誘導凋亡的受體。

**記憶點**：FasL-Fas → death domain → FADD → caspase-8 → 凋亡；生理角色 = AICD，清除免疫反應尾聲的活化淋巴球與周邊自體反應性細胞；FAS 突變 → ALPS，三聯徵：淋巴增生 + DNT cells 升高 + 自體免疫血球減少；動物模型 *lpr*（Fas）/*gld*（FasL）。

（出處：Janeway Ch09 T Cell-Mediated Immunity；Ch13 Failures of Host Defense Mechanisms；Ch15 Autoimmunity and Transplantation；Kelly Ch021 Immune Tolerance and Autoimmunity）

---

## 五、TNF-α 抑制劑機轉比較（臨床應用）

五個現行 anti-TNF 藥物都能結合 membrane TNF 與 soluble TNF，但結構與結合特異性不同：

| 藥物 | 結構 | 是否結合 LTα (TNFSF1B) | 備註 |
|---|---|---|---|
| **Infliximab** | 嵌合型 (chimeric) IgG1κ 單株抗體（murine Fv + human constant） | 不結合 | 首個 FDA 核准的 anti-TNF mAb；+MTX 可增加 AUC ~25% |
| **Etanercept** | 可溶性 p75 TNF 受體 + IgG1 Fc 融合蛋白（dimeric receptor construct） | **結合** LTα | 唯一能同時阻斷 TNF 與 LTα 與細胞表面 TNF 受體結合的藥物；於 Crohn's disease 無效 |
| **Adalimumab** | 全人類化 IgG1 單株抗體 | 不結合 | 阻斷 p55/TNFR1 與 p75/TNFR2 交互作用；MTX 併用可降低清除率 |
| **Golimumab** | 全人類化 IgG1 單株抗體 | 不結合 | 皮下注射，每月一次 |
| **Certolizumab pegol** | 人源化 Fab' 片段 + PEG 化（無 Fc） | 不結合 | 因無 Fc，不具補體活化/ADCC 效應，也不會誘導細胞凋亡；不透過胎盤（懷孕時相對安全）；但仍對 Crohn's 有效 |

**機轉重點整理**：

- 除 certolizumab（無 Fc）外，其餘四種都可能引發 Fc-mediated 效應（補體依賴性細胞毒殺、ADCC）
- Infliximab、adalimumab、golimumab 經 Fc 與 neonatal Fc receptor（FcRn）結合，影響藥物動力學與胎盤穿透
- 誘導細胞凋亡的能力在不同藥物間不一致：infliximab、etanercept 可誘導 RA 滑膜巨噬細胞凋亡；但 etanercept 對 Crohn's 無效且不誘導凋亡；certolizumab 雖不誘導凋亡卻對 Crohn's 有效——顯示凋亡誘導與臨床療效未必完全對應機轉

（出處：Kelly Ch063 Anti-cytokine Biologics）

---

## 六、Knockout / 基因缺陷表現型總表（考古題常考）

| 分子 | Knockout / 缺陷表現型 |
|---|---|
| TNF-α (p55/TNFR1 KO) | 抵抗敗血性休克，但對 *Listeria* 易感染 |
| LT-α | 淋巴結缺失、抗體減少、IgM 增加 |
| LTβ | 周邊淋巴結、Peyer's patch、脾臟發育缺陷 |
| CD40L | 抗體反應差、無 class switching（Hyper-IgM syndrome） |
| Fas / FasL | 淋巴增生與自體免疫（ALPS） |
| RANKL (OPG-L) | 骨硬化症（osteopetrotic）、發育遲緩、無牙 |
| OPG | 骨質疏鬆 |
| APRIL | IgA class switching 受損 |
| BAFF | B 細胞功能異常 |

（出處：Janeway Appendix III）

---

## 七、總結

TNF superfamily 的核心邏輯是：**同一套受體幾何結構（配體-受體三聚體結合）搭配不同的胞內訊息傳遞模組（death domain 有無、TRAF 組合、canonical/non-canonical NF-κB），在不同配體-受體組合中重複使用，分別調控發炎、細胞凋亡、淋巴器官發育、骨代謝與 B 細胞存活等不同生理功能**。這也是為什麼風濕科用藥能針對其中特定軸（TNF-α、RANKL、BAFF、CD40）做精準治療——阻斷單一節點只會切斷該節點專屬的下游功能，不會波及整個共用的 NF-κB 系統。
