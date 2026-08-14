# ILC（Innate Lymphoid Cells）先天淋巴細胞總整理

> 出處：Janeway's Immunobiology 10th ed — Ch.3 §3-23（ILC 分類與 NK cell 基礎）、Ch.11 §11-2～11-3（ILC 在感染各階段的角色與 immune module 整合，Fig. 11.3/11.5）、Ch.12 §12-6（腸道 ILC3 補充）

## 0. 一句話看懂整個 ILC 系統

ILC 是沒有 antigen receptor 的「先天版 CD4 T helper 細胞」，與 Th 各亞群一一對應（ILC1↔Th1、ILC2↔Th2、ILC3↔Th17）。它們在出生前就進駐 barrier tissue（腸道、皮膚、肺），感染發生後最初幾小時內就被 innate sensor cell 產生的 cytokine 活化，搶在 adaptive immunity 成熟（需數天到數週）之前先發動第一波防禦，幫忙「buy time」。

## 1. 發育起源與分布

- 來自 common lymphoid progenitor (CLP)，與 B/T cell 同源；表現轉錄因子 **Id2**（inhibitor of DNA binding 2）→ 抑制 B/T 細胞分化路徑，是所有 ILC 發育所必需
- 缺乏 T/B cell antigen receptor 及其 co-receptor 複合體，但表現 common γ-chain cytokine receptor
- 主要分布：dermis、liver、small intestine、adipose tissue、lung——以 barrier tissue 為主，出生前後即定居，終生 largely **nonmotile**（tissue-resident，這是與可循環的 T cell 最大的差異）
- 分化樹（Fig. 11.5）：CLP → common ILC precursor (CILCP) → 分岔為
  - **NK cell precursor (NKP)** → NK cell（cytotoxic module）
  - **common helper-like ILC precursor (CHILP)** → ILC1 / ILC2 / ILC3（helper-like module）
  - 類比 T cell 從 double-positive thymocyte 分岔出 CD4/CD8 lineage

## 2. 三大 helper ILC 亞群總表 🔴

| 亞群 | 誘導 cytokine | 效應分子 | 對應 Th 亞群 | 主要功能／對抗病原 | Master TF |
|---|---|---|---|---|---|
| ILC1 | IL-12, IL-18 | IFN-γ | Th1 | 胞內病原（病毒、胞內菌）— 活化巨噬細胞 | Tbet |
| ILC2 | IL-25, IL-33, TSLP | IL-5, IL-13, amphiregulin（人類 ILC2 可有少量 IL-4） | Th2 | 蠕蟲驅除（weep-and-sweep）、組織修復 | GATA3 |
| ILC3（含 LTi） | IL-1β, IL-23 | IL-17, IL-22 | Th17 | 胞外菌／黴菌，維持上皮屏障 | RORγt（+AHR） |

NK cell 另列（屬 **cytotoxic module**，不算 helper ILC）：由 IL-12、IL-18、type I IFN 誘導，效應分子為 IFN-γ + perforin + granzyme，直接毒殺胞內病原感染的細胞。

## 3. NK cell vs ILC1 — 最常考的鑑別 🔴

| | NK cell | ILC1 |
|---|---|---|
| 細胞毒性顆粒（perforin/granzyme） | 有 | 無 |
| 分布 | 血液＋脾臟為主，會循環（mobile） | Barrier tissue 常駐，血/脾少見（stationary） |
| 發育所需 cytokine | IL-15 | IL-7 |
| 關鍵轉錄因子 | Id2, Nfil3（不需 PLZF） | Id2, Nfil3, **PLZF** |
| 功能類比 | 類似 CD8 CTL | 類似 Th1 |
| Mouse marker | CD49b⁺ | CD49a⁺（例如 liver ILC1） |
| 作用機轉 | 直接殺傷（perforin/granzyme、TRAIL、Fc receptor 介導的 ADCC） | 分泌 IFN-γ 活化巨噬細胞，**不直接殺傷** |

- ILC3 可轉分化成 ILC1-like 細胞（失去 RORγt、轉而表現 Tbet）——腸道黏膜中大部分 ILC1 其實源自 ILC3 的轉分化，類似 Th17→Th1 plasticity。

## 4. ILC2 activation 細節

- 主要誘導 cytokine：**TSLP**（thymic stromal lymphopoietin，STAT5 活化）、**IL-33**（alarmin，細胞死亡時釋放）、**IL-25**（主要來自 tuft cell）
- Tuft cell 感應 helminth 代謝物 succinate（及各種 tastant/odorant）→ 分泌 IL-25（也可產生 TSLP、eicosanoid）
- 部分組織（如呼吸道）的 ILC2 activation 還需要 leukotriene（脂質訊息分子）協助
- 效應：**IL-13** → 刺激 goblet cell 產生黏液 + 黏膜平滑肌收縮（"weep-and-sweep" 驅蟲反應），也促進 goblet/tuft cell 分化（正回饋放大 type 2 反應）；**IL-5** → 活化嗜酸性球殺蟲
- 小鼠 ILC2 幾乎不產生 IL-4；人類 ILC2 可產生少量 IL-4。IL-4 的主要補充來源是被 ILC2 的 IL-5/IL-13 活化後的嗜酸性球與嗜鹼性球（間接提供 Th2 分化訊號的可能機轉）

## 5. ILC3（含 LTi）細節

- ILC3 對 IL-1β、IL-23 反應，產生 **IL-17、IL-22**
  - IL-17：促進趨化因子產生，招募嗜中性球
  - IL-22：直接作用上皮細胞，刺激抗菌胜肽（AMP，如 RegIIIγ）產生、增強屏障完整性
- **LTi**（lymphoid tissue inducer）是 ILC3 中最早被發現的亞型，負責 GALT（腸道相關淋巴組織）的發育
- 腸道成熟 ILC3 依 NK receptor 表現分兩型：
  - **NCR⁻**（LTi-like）：人類偏向產生 IL-17
  - **NCR⁺**：人類偏向產生 IL-22
  （小鼠兩者 cytokine 表現重疊較多）
- 發育與功能受 RORγt 及 **AHR**（aryl hydrocarbon receptor，可被十字花科蔬菜代謝物、微菌代謝物活化）共同調控

## 6. ILC 在感染時序中的角色（Ch.11 整合觀念）🔴

- 感染後數分鐘至數小時內，innate sensor cell（DC、巨噬細胞、上皮細胞含 tuft cell）依病原 PAMP 種類產生不同 cytokine 組合 → 活化對應 ILC 亞群
- ILC 效應在感染最初幾小時到幾天內發揮作用，為需要數天至數週才成熟的 adaptive immunity「買時間」
- ILC 本身**不直接**殺菌/驅蟲，而是活化、招募 myelomonocytic effector cell（巨噬細胞、嗜酸性球/嗜鹼性球/肥大細胞、嗜中性球）來執行清除——這點與 Th1/Th2/Th17 的 helper 特性完全平行

**Immune module 整合表：**

| Module | Cytotoxic | Type 1 | Type 2 | Type 3 |
|---|---|---|---|---|
| ILC | NK cell | ILC1 | ILC2 | ILC3 |
| 對應 CD4 Th | （無對應） | Th1 | Th2 | Th17 |
| 相關抗體 isotype | （ADCC） | 調理性 IgG（mouse IgG1/2） | IgE | 調理性 IgG |
| Myelomonocytic effector | — | 巨噬細胞 | 嗜酸性球/嗜鹼性球/肥大細胞 | 嗜中性球 |
| 目標病原 | 胞內病原/腫瘤/受損細胞 | 胞內菌、病毒、寄生蟲 | 蠕蟲（多細胞寄生蟲） | 胞外菌、黴菌 |

- 目前**尚未發現**對應 Tfh、Treg 的 ILC 亞型
- ILC 是否能直接引導 naive CD4 T cell 分化方向（例如透過作用於遷移中的 cDC）目前尚無定論，仍是研究中議題

## 7. 腸道 ILC 補充（Ch.12 §12-6）

- GALT 及 lamina propria 內大量分布 ILC1/2/3；在工業化國家因蠕蟲感染較少見，**ILC3 是腸道黏膜中最主要的族群**
- ILC3（透過 IL-22）對特定胞外菌感染的宿主保護不可或缺
- 除 LTi 促進 GALT 發育外，成熟腸道 ILC3 也可能參與腸道上皮幹細胞的 homeostasis（尚在研究中）

## 8. 常見易混淆點整理 🔴

- **ILC vs 效應 CD4 T cell**：功能/cytokine/master TF 高度平行，但 ILC 不需抗原致敏（無 TCR）、出生前就定居組織、本身不殺傷/驅蟲，只負責活化其他效應細胞
- **NK cell 雖然也是 ILC 的一員**，但屬於 cytotoxic module，發育（IL-15 vs IL-7）、分布（循環 vs 常駐）、功能（直接殺傷 vs 分泌 IFN-γ 活化巨噬細胞）都與 helper ILC（ILC1/2/3）不同，不要混為一談
- ILC1 與 NK cell 都由 IL-12/IL-18 誘導、都產生 IFN-γ，是最常考的鑑別點——關鍵是**有沒有 cytotoxic granule**、**PLZF 需求**、**循環與否**
