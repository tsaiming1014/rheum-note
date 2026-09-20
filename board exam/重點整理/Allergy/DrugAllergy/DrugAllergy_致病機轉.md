# Drug Allergy：致病機轉與分類

## 一、ADR 整體分類（Type A vs Type B）

WHO 定義 ADR：治療劑量下發生的非預期、非所欲之藥物反應。

| | Type A（可預期） | Type B（不可預期） |
|---|---|---|
| 比例 | 約 80% | 約 20% |
| 特性 | 劑量相關、與藥理作用有關 | 與藥理作用無關、只發生於易感族群 |
| 次分類 | overdosage、side effect、secondary effect、drug interaction | drug intolerance、**drug allergy**（免疫機轉）、nonallergic reaction with immunologic manifestation |

- **Drug intolerance**：低劑量甚至次治療劑量就出現正常藥理作用的不良反應，不涉及代謝/排除/生體可用率異常。
- **Nonallergic reaction with immunologic manifestation**：肥大細胞/嗜鹼性球直接被活化釋放介質，並非由 drug-specific IgE 觸發，**不具免疫記憶性**（過去稱 pseudoallergic/anaphylactoid，現已不建議使用此詞）。
- 過敏性 ADR 僅佔所有 ADR 的 **6–10%**。
- 例外注意：部分 Type B 反應其實可預測——如 abacavir 與 HLA-B\*57:01 高度相關、G6PD deficiency 患者使用氧化性藥物易致溶血性貧血。

**流行病學數字（考點）**：住院病人 ADR 發生率 15.1%，其中嚴重 ADR 6.7%，致死 0.32%（推估美國每年約 106,000 人因 ADR 死亡，為死因排行第 4–6 位）；門診病人 ADR 約 25%（其中 13% 為嚴重）。

---

## 二、藥物活化免疫系統的三大分子模型

大多數藥物是小分子，本身不具免疫原性，需透過以下機轉活化 T 細胞：

| 模型 | 機轉 | 是否需 antigen processing | 代表例子 |
|---|---|---|---|
| **Hapten/prohapten model** | 藥物（或代謝物）與蛋白質**共價結合**形成 hapten-carrier complex，形成新表位 | 需要（若在 ER 內結合）或不需要（若在細胞表面結合） | Penicillin（beta-lactam ring 不穩定，自發降解與 lysine 殘基結合形成 penicilloyl 表位） |
| **p-i model**（pharmacologic interaction） | 藥物**非共價**直接結合 TCR 及/或 HLA 分子，數秒內即可活化 T 細胞 | 不需要 | 可解釋為何首次用藥數天內就出現 T 細胞媒介的藥物過敏 |
| **Altered peptide repertoire model** | 藥物非共價結合於 HLA 抗原結合溝，改變其對內生性 peptide 的選擇偏好，呈現出被視為外來抗原的新 peptide | 不需要 | **Abacavir–HLA-B\*57:01**（最佳實證：結晶結構已解出，abacavir 深入結合溝，使 C 端胺基酸偏好由環狀疏水性轉為脂肪族疏水性 Ile/Leu/Val） |

其他互補（非互斥）假說：

- **Danger hypothesis**：藥物或其代謝物可能如同 TLR ligand 般活化 dendritic cell 的 costimulatory molecule（CD86、CD40），abacavir 已知可活化 NLRP3 inflammasome。
- **Heterologous immunity model**：需同時具備 HLA risk allele **加上**對某常見病原（如 human herpesvirus）已存在的 cross-reactive memory T cell，可解釋為何帶有風險 allele 者僅少數會真正發病。

---

## 三、改良版 Gell and Coombs 分類

![Revised Gell and Coombs classification of drug reactions](../../images/Fig%2077.3.png)

> Fig. 77.3 Revised classification of drug hypersensitivity reactions. Type 1–3 為 antibody-dependent 反應（仍需 T helper cell 參與），Type 4a–4d 為純 T 細胞依賴反應，依主要效應細胞、發炎部位與細胞激素分泌模式區分。(Adapted from Pichler WJ. Delayed drug hypersensitivity reactions. Ann Intern Med 2003;139(8):683-693.)

補充重點（圖中未特別強調處）：

- **Type 4b**（Th2／IL-4, IL-5, IL-13）與 **Type 4c**（cytotoxic T cell／granulysin, perforin, granzyme B）常同時存在——**DRESS 目前認為是 4b+4c 混合反應**，CD4+ 與 CD8+ T cell 皆參與並產生 IFN-γ、TNF-α。
- **Type 4c** 主導 **SJS/TEN**。
- **Type 4d**（T cell 分泌 CXCL8、GM-CSF 招募嗜中性球）主導 **AGEP**。

---

## 四、HLA 與嚴重藥物過敏

![HLA associations with serious drug allergy syndromes and implications for translation](../../images/Table%2077.2.png)

> Table 77.2 Human Leukocyte Antigen Associations with Serious Drug Allergy Syndromes and Implications for Translation.

重點記憶（藥物–allele 配對）：**Abacavir–B\*57:01**、**Allopurinol–B\*58:01**（SJS/TEN、DRESS/DIHS）、**Carbamazepine–B\*15:02**（SJS/TEN，東南亞）／**A\*31:01**（DRESS，歐洲）、**Dapsone–B\*13:01**（DRESS）、**Flucloxacillin–B\*57:01**（藥物性肝損傷）、**Nevirapine–C\*04:01**（DRESS）、**Methimazole/carbimazole–B\*38:02**。

**NNT（篩檢一位需篩測人數以預防一例）取決於**：該地區 HLA risk allele 盛行率 × 藥物毒性盛行率 × HLA allele 之 PPV——同一藥物在不同族群篩檢效益可以天差地遠，例如 carbamazepine-B\*15:02 在東南亞篩檢效益高（NNT 小），在歐洲效益極低（NNT >1000）；flucloxacillin-B\*57:01 因肝損傷本身盛行率極低，NNT 高達 13,819，篩檢效益差。

---

## 五、SJS/TEN 與 DRESS 機轉細節

![SJS/TEN and DRESS pathogenesis](../../images/Fig%2077.4.png)

> Fig. 77.4 (A) SJS/TEN pathogenesis：病灶發生於**表皮**，keratinocyte 作為抗原呈現細胞活化 CD8+ T cell，經 granulysin/perforin/granzyme B 造成 keratinocyte 壞死與表皮剝離。(B) DRESS pathogenesis：病灶發生於**真皮**，CD4+/CD8+ T cell 分泌 TNF-α/IFN-γ，常合併病毒再活化。(Adapted from Peter JG, Lehloenya R, Dlamini S, et al. J Allergy Clin Immunol Pract 2017;5(3):547-563.)

| | SJS/TEN | DRESS |
|---|---|---|
| 發病時間 | 用藥後 4–28 天 | 用藥後 2–8 週 |
| 定義 | 依表皮剝離體表面積：SJS <10%、overlap 10–30%、**TEN >30%** | 發燒＋無標靶樣廣泛皮疹＋顏面水腫＋淋巴結腫大＋嗜酸性球增多／異型淋巴球＋內臟侵犯（肝炎最常見，亦可腎炎、肺炎、腦炎、心肌炎） |
| 死亡率 | TEN 一年死亡率約 **30%** | 約 **10%** |
| 常見致病藥物 | 芳香族抗癲癇藥、allopurinol、sulfa 類抗生素 | 與 SJS/TEN 相似（芳香族抗癲癇藥、allopurinol、sulfa、beta-lactam、nevirapine） |
| 特殊追蹤 | — | 恢復後 2 週以上常見復發（常與類固醇減量、HHV-6/7、CMV、EBV 病毒再活化並存）；建議恢復後**每年追蹤 4 年**（長期併發症包含甲狀腺炎、SLE、Type 1 DM 等自體免疫病） |

鑑別診斷：SJS/TEN 需與 erythema multiforme major 區分（後者常與 HSV、Mycoplasma 感染相關，病灶為典型/不典型 target lesion、分布較局限、預後佳、常復發）。

---

## 六、Nonallergic drug reaction（非過敏性但貌似過敏之反應）

- 機轉：藥物透過 **MRGPRX2**（G-protein coupled receptor，位於人類肥大細胞表面）造成**劑量依賴性、非 IgE 媒介**之肥大細胞活化。
- 常見藥物：**Fluoroquinolone、vancomycin、opioid、neuromuscular blocking agent**。
- 臨床表現通常較典型 IgE 反應輕：angioedema、hives、flushing，偶有支氣管痙攣/低血壓。
- 不具免疫記憶，重複暴露反應不一致，皮膚測試易有偽陽性。

其他重要 nonallergic ADR：Radiocontrast dye 反應（新型 nonionic 顯影劑已大幅降低風險；前驅用藥 prednisone 1mg/kg×3 劑於 13/7/1 小時前＋diphenhydramine 1mg/kg 於 1 小時前，可預防 non-IgE 但不能預防 IgE 反應）；Aspirin/NSAID 之 AERD；Taxane（Cremophor-EL/polysorbate 80 經 complement 活化）之 infusion reaction。

---

## 七、藥物過敏之危險因子

- **Atopy 本身不會增加對藥物產生 IgE 致敏的機率**，但一旦致敏，atopic background 是**嚴重甚至致命 penicillin anaphylaxis** 的重要危險因子。
- **疾病與藥物交互作用（disease-drug interaction）**：
  - EBV 感染時使用 aminopenicillin → delayed rash 風險大增（常被誤標為藥物過敏）
  - HIV（尤其病毒量可測得時）使用 sulfa 類抗生素 → 皮疹風險大增
  - SLE 使用 trimethoprim/sulfamethoxazole → 風險增加（免疫失調相關）
  - Immune checkpoint inhibitor（anti-CTLA-4、anti-PD-1）本身即可誘發皮疹、自體免疫病、器官特異性發炎（肝炎、腸炎、心肌炎）
- **T 細胞媒介反應具劑量依賴性**：腎功能不全病人 allopurinol 活性代謝物 oxypurinol 蓄積 → DRESS/SJS-TEN 風險上升；CYP2B6/CYP2C9 慢代謝基因型 → nevirapine/phenytoin 過敏風險上升。
- **Multiple drug allergy syndrome**：對一種藥物過敏者，對結構不相關的其他藥物過敏風險也較高。
- Penicillin skin test 陽性率隨時間下降：約 **80% 病人 10 年內喪失皮膚測試陽性反應**（但個體差異大、機轉未明）。

---

**出處**：Middleton's Allergy: Principles and Practice, 9th ed., Chapter 77 (Drug Allergy, Solensky & Phillips)。
