# Biologic 藥物：Target 選擇、代謝機轉與抗體工程設計

> 來源：2025 風專口試考古題延伸整理（賴政宏老師）
> 參考資料：Kelly's Textbook of Rheumatology；Stone et al. 2024, *J Allergy Clin Immunol*「Engineering therapeutic monoclonal antibodies」
> 延伸閱讀：藥物劑量/副作用/藥價等臨床實用資訊見 [Biologics 大全](Biologics%20大全.md)，本篇聚焦在「為什麼這樣設計」的機轉邏輯。

---

## 一、Cytokine vs Receptor Targeting：為什麼有的藥打 cytokine、有的打 receptor

選擇打 cytokine 還是 receptor，取決於該系統的 ligand-receptor 配對關係。

**原則一：一對多（多個 ligand 共用一個 receptor）→ 打 receptor 較有效率**

Anifrolumab：anti-type I IFN receptor（IFNAR1），而非個別 IFN 分子。Type I IFN 家族龐大（IFN-α 有 13 種以上 subtype，另有 IFN-β、IFN-ε、IFN-κ、IFN-ω），全部共用 IFNAR1/IFNAR2 receptor complex。打 receptor 可一次阻斷所有 subtype 的訊息傳遞，比逐一中和每個 cytokine 更完整。FDA 2021 核准用於中重度 SLE（TULIP 系列試驗）。

**原則二：Receptor 有 membrane-bound 與 soluble 兩種形式 → 打 receptor 可同時擋兩條路**

Tocilizumab / Sarilumab：anti-IL-6 receptor（IL-6R），而非 IL-6 本身（anti-IL-6 cytokine 的藥是 siltuximab）。IL-6 訊息傳遞有兩種模式：

- Classic signaling：IL-6 結合 membrane-bound IL-6R（肝細胞、白血球，急性期反應相關）
- Trans-signaling：IL-6 先結合 soluble IL-6R (sIL-6R)，複合體再活化幾乎所有細胞都有的 gp130（與慢性發炎、關節破壞較相關）

Tocilizumab 同時中和 membrane-bound 和 soluble 兩種 IL-6R，等於同時擋掉 classic 和 trans-signaling，因此打 IL-6R 比單純中和 IL-6 更能針對發炎反應的全貌。

**原則三：一個 cytokine 對應多個 receptor，且各 receptor 下游效果不同 → 打 cytokine 通常較全面**

Adalimumab：anti-TNF-α，中和 soluble 和 membrane-bound TNF。TNF 有兩個 receptor：TNFR1（p55，主導促發炎/凋亡）、TNFR2（p75，較偏免疫調節/組織修復/Treg）。目前沒有廣泛使用的 TNFR1-selective 藥物，anti-TNF mAb 直接中和 cytokine，等於同時阻斷兩條路徑。

對照：Etanercept 是 soluble TNFR2-Fc fusion protein（decoy receptor），同時中和 TNF-α 和 lymphotoxin-α，這也是 etanercept 在 uveitis、IBD 效果不如 adalimumab 的原因之一（缺乏誘導 membrane TNF reverse signaling 的能力）。

一句話總結：多 ligand 共用一個 receptor（打 receptor，如 anifrolumab）；receptor 本身有 soluble/membrane 兩型（打 receptor 可同時擋兩條路，如 tocilizumab）；一個 cytokine 對應多個功能不同的 receptor（打 cytokine 才能同時擋所有下游訊息，如 adalimumab）。

---

## 二、Biologic 在體內的代謝機轉

Biologic 是蛋白質大分子（IgG ~150 kDa），不經肝臟 CYP450 代謝，也不經腎絲球過濾（分子量遠超過腎絲球過濾閾值 ~60 kDa），因此肝腎功能不全通常不需調整劑量（與 JAKi 不同，JAKi 主要經肝臟 CYP3A4 代謝）。

**1. 非特異性蛋白質分解代謝（proteolytic catabolism）— target-independent clearance**

全身網狀內皮系統/單核吞噬細胞系統（尤其血管內皮細胞）透過 pinocytosis 胞飲 IgG，進入 lysosome 分解成胺基酸回收利用。這是不飽和、劑量無關的基礎清除途徑。

**2. FcRn（neonatal Fc receptor）回收機制 — 決定半衰期的關鍵**

IgG 被 pinocytosis 攝入 endosome 後，在酸性環境（pH ~6）下 Fc 區與 FcRn 結合，被送回細胞膜外釋放回循環，避免進入 lysosome 分解，這是完整 IgG 分子半衰期能長達 2-3 週的主因。FcRn 也負責把 IgG 送過黏膜上皮屏障。

若藥物沒有 Fc 區（如 certolizumab pegol，PEG 化的 Fab' 片段）就無法透過 FcRn 回收，需靠 PEG 化延長半衰期；此設計也讓 certolizumab 不會主動通過胎盤，是懷孕族群選藥的重要考量。

**3. Target-mediated drug disposition (TMDD) — 標靶媒介清除，具飽和性**

藥物與目標抗原結合後，複合體可能被 internalize 並降解，此路徑可飽和：低劑量時佔比高，高劑量時飽和、清除轉為以非特異性 catabolism 為主，造成非線性藥動學（nonlinear PK）。Tocilizumab、sarilumab 都呈現這種雙相（biphasic）藥動學特性。

**4. 免疫原性（anti-drug antibody, ADA）加速清除**

ADA 形成免疫複合體，被 RES 加速清除，降低藥效、縮短半衰期。這是部分 anti-TNF（infliximab、adalimumab）需合併 methotrexate 抑制免疫原性的理由。

---

## 三、單株抗體設計考量總覽

除了 target 選擇（cytokine vs receptor），設計治療性單株抗體還要考慮：

**1. IgG subclass 選擇 → 決定要不要殺死目標細胞**

| Subclass | FcγR 結合 | C1q/補體結合 | 特性 |
|---|---|---|---|
| IgG1 | 強 | 結合 | 最常用工程骨幹，效應功能強 |
| IgG2 | 弱 | 不結合 | 對抗細菌莢膜多醣抗原為主，較不發炎 |
| IgG3 | 最強 | 結合 | hinge 長、彈性大，效應功能最強，但少用於治療藥物 |
| IgG4 | 弱 | 不結合 | 最不發炎，但有 Fab-arm exchange 問題（hinge disulfide bond 較不穩定，兩個 half-molecule 之間可互換，形成功能上單價、但雙特異性的抗體，需額外突變如 S228P 防止） |

設計邏輯：想「殺掉」帶有目標抗原的細胞（depleting antibody）選 IgG1；只想「阻斷」訊號不想殺細胞（blocking antibody）選 IgG4 或讓 IgG1 的 Fc 效應功能失活。

對照案例：Rituximab 是 depleting chimeric mAb，設計目的是靠 ADCC/CDC 殺 B 細胞；Abatacept（CTLA-4Ig fusion protein）則刻意修飾降低細胞毒性，因為只想阻斷 costimulation，不想連帶殺死 antigen-presenting cell。

**2. 抗體結構來源 → 決定免疫原性**

Chimeric（infliximab、rituximab：~25% 小鼠序列，免疫原性較高）→ Humanized（CDR 移植到人類骨架）→ Fully human（adalimumab、golimumab，phage display 或 transgenic mice，免疫原性最低）→ Fusion protein（etanercept、abatacept：receptor/CTLA-4 + Fc）。

**3. Fc engineering（分子工程微調半衰期與效應功能）**

降低/消除效應功能（做成純阻斷劑）：

- LALA-PG mutation（L234A/L235A/P329G）：消除補體結合、silence ADCC
- K322A：阻止 C1q 結合、減少補體活化，降低注射部位疼痛
- 實例：teplizumab（anti-CD3，延緩 type 1 糖尿病）

增強效應功能（做成更強的殺手）：

- S239D/A330L/I332E（"3M"）：增強 ADCC
- G236A：增強 ADCP + ADCC
- Afucosylation（去岩藻醣化）：只增加對 FcγRIII 親和力 → 增加巨噬細胞吞噬與 ADCC。實例：benralizumab（anti-IL-5Rα）、obinutuzumab（見案例二）
- 實例：margetuximab（anti-HER2，同時增強 FcγRIII + 降低 FcγRIIb）

延長半衰期（調整 FcRn 結合力）：

- YTE mutation（M252Y/S254T/T256E）：FcRn 親和力增加 10 倍，半衰期可達 100 天。實例：tixagevimab/cilgavimab
- M428L/N434S 或 H433K/N434F：半衰期延長超過 2 倍

**4. 抗體格式**：完整 IgG（有 Fc，半衰期長，會通過胎盤）vs Fab + PEG 化（certolizumab pegol，無 Fc，不通過胎盤）vs bispecific antibody（同時結合兩個標靶）。

**5. FcγR 受體家族框架**：Activating receptors（FcγRI、FcγRIIa、FcγRIII，透過 ITAM 傳訊活化細胞）vs 唯一的抑制型 FcγRIIb（透過 ITIM 傳訊抑制其他 FcR 訊號，是控制過敏反應的煞車機制）。大多數 FcγR 為低親和力，需多價免疫複合體交聯才活化；僅 FcγRI 為高親和力可結合單體 IgG。

**6. 抗體命名規則演進**：因工程化抗體太多樣，未來新藥不再全用 "-mab" 字尾，改用 -tug（單特異性、Fc 未修飾）、-bart（單特異性、Fc 工程改造）、-mig（雙/多特異性）、-ment（抗體片段）。

---

## 四、案例分析：同標靶、不同 Fc 工程策略

**案例一：Rituximab vs Obinutuzumab（anti-CD20，同標靶不同 glycoengineering）**

Obinutuzumab 是 humanized anti-CD20 單株抗體（type II），glycoengineered 增加對效應細胞 FcγRIII 的親和力，B 細胞清除效力比 rituximab 更強。

| | Rituximab | Obinutuzumab |
|---|---|---|
| 結構 | Chimeric | Humanized |
| CD20 結合型別 | Type I（誘導 CD20 進入 lipid raft） | Type II（不誘導 lipid raft） |
| 主要清除機轉 | CDC 為主 | ADCC + 直接誘導凋亡為主（CDC 較弱），afucosylation 加強 ADCC |
| Lupus nephritis 證據 | — | NOBILITY trial（phase 2 RCT, 125 位 LN 病人）：complete renal response 52週 35% vs 23%、104週 41% vs 23%（vs placebo），現進入 phase 3 |

**案例二：Obexelimab（CD19 + FcγRIIb coaggregation）— 第三種 B 細胞標靶策略：non-depleting**

Obexelimab（XmAb5871）是 bifunctional 抗體：Fab 端結合 **CD19**（B 細胞表面、屬於 BCR 共受體複合體，會增強 BCR 訊號），Fc 端經工程改造，對抑制型受體 **FcγRIIb** 有增強的親和力。

當抗體同時結合同一顆 B 細胞上的 CD19 和 FcγRIIb，會產生 coaggregation，讓 FcγRIIb 的 ITIM 胞內段（透過 SHIP-1 磷酸酶）把抑制訊號傳給旁邊的 BCR/CD19 訊號複合體，結果是 B 細胞活化訊號被壓下去——但細胞本身沒有被 ADCC/CDC 殺死。這跟 mast cell/basophil 上 FcεRI 與 FcγRIIb coaggregation 抑制 IgE-mediated activation 是同一套原理，只是換成 CD19 這個 activating receptor。

三種 B 細胞標靶策略比較：

| 藥物 | 標靶 | 機轉 | 結果 |
|---|---|---|---|
| Rituximab | CD20 | Type I，CDC 為主 | Depleting（殺死 B 細胞） |
| Obinutuzumab | CD20 | Type II + afucosylated，ADCC/凋亡為主 | Depleting，效力更強 |
| Obexelimab | CD19 + FcγRIIb coaggregation | ITIM 抑制訊號，無 ADCC/CDC | Non-depleting（B 細胞仍在，但功能被抑制） |

臨床意義：Non-depleting 代表 B 細胞沒被清空，理論上感染風險較低，且訊號抑制較為可逆（停藥後功能恢復較快，不需等待骨髓重新生成 B 細胞）。目前於 IgG4-related disease（phase 2 結果不錯）、SLE、Sjögren's 進行臨床試驗，皆屬於「B 細胞過度活化但不一定需要完全清除」的疾病。

**案例三：Secukinumab vs Ixekizumab（anti-IL-17A，同標靶不同 IgG subclass）**

Secukinumab 是 human IgG1 單株抗體；Ixekizumab 是 humanized IgG4 單株抗體，兩者對 IL-17A 有相同的結合與中和活性，臨床療效也相近（PsA、AxSpA）。

因 IL-17A 是游離 cytokine（非細胞表面抗原），沒有可被 ADCC 清除的目標細胞，IgG1 vs IgG4 對核心藥效影響不大；選 IgG4 的理由通常是降低 Fc-mediated 非特異性發炎/補體活化副作用，或藥廠差異化策略。

**案例四：PD-1 抑制劑（nivolumab、pembrolizumab、cemiplimab）— 真正「功能上必須用 IgG4」的例子**

這三個 PD-1 抑制劑都是刻意設計成 IgG4，以降低 Fc-mediated 效應功能。

PD-1 表現在活化/exhausted T 細胞表面。若用 IgG1（強 ADCC/CDC）會把想要「重新活化」的 T 細胞殺掉，與藥物目的（解除 PD-1 煞車）相反，因此必須選 IgG4。

與 Rituximab 對比：同樣是打細胞表面抗原，rituximab 想清除帶原 B 細胞（選 IgG1），PD-1 抑制劑想保留帶原 T 細胞只解除抑制訊號（選 IgG4）——完全相反的設計邏輯。

臨床關聯：ICI（免疫檢查點抑制劑）解除免疫煞車後常誘發 irAE（immune-related adverse event，如 inflammatory arthritis、myositis、SLE-like disease），是風濕科臨床常見照會來源。

---

## 五、延伸 Review 文章

- Stone, Spiller, Smith. "Engineering therapeutic monoclonal antibodies." *J Allergy Clin Immunol* 2024;153(3). — 本筆記 Fc receptor/抗體工程段落主要來源
- "Considerations for the Design of Antibody-Based Therapeutics." *Journal of Pharmaceutical Sciences.*
- "Antibody engineering to develop new antirheumatic therapies." PMC（風濕科背景）
- "How to select IgG subclasses in developing anti-tumor therapeutic antibodies." PMC（IgG subclass 選擇邏輯，可類比風濕科 depleting vs blocking 設計）
