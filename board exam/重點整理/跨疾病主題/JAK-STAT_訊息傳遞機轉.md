# JAK-STAT 訊息傳遞機轉：故事版整理

## 一、大前提：受體自己不會「開門」

Cytokine 受體本身沒有酵素活性，它只是一根穿膜的「棍子」，外面接 cytokine，裡面什麼都不會做。真正負責「轉動門鎖」的，是掛在受體細胞質尾巴內側的 **JAK**。幾乎所有 cytokine 受體都是**兩條鏈組成**，需要兩支 JAK 同時轉動、交叉磷酸化對方，門才會開，**STAT**（signal transducer and activator of transcription）才進得去、被磷酸化、雙聚化、轉位進核調控基因表現。

這句話是整個故事最重要的鑰匙：

> **JAK 的身分不是由 cytokine 決定的，而是由「這條受體鏈本身」決定的。**

也就是說，你不需要背幾十種 cytokine，只需要認得幾條「共用鏈」，JAK 配對就自動跟著跑出來。

JAK 共四型：**JAK1、JAK2、JAK3、TYK2**。其中 JAK3 是「稀客」，只跟 JAK1 搭檔，只活躍在造血細胞；TYK2 也是「稀客」，只出現在 IFN 與 IL-12/23 相關的家族；**JAK1 幾乎哪裡都在**（唯一缺席的是純 JAK2 homodimer 那組）。

## 二、五大家族總覽

| 家族 | 代表 Cytokine | JAK 組合 | 主要 STAT | 核心任務 |
|---|---|---|---|---|
| Common γ chain | IL-2, 4, 7, 9, 15, 21 | JAK1 + JAK3 | STAT5（IL-4另走STAT6） | 淋巴球增生、存活、分化 |
| Hormone-like | EPO, TPO, GH, GM-CSF, IL-3, IL-5 | JAK2 + JAK2（homodimer） | STAT5 | 血球生產線（紅血球、血小板、骨髓） |
| Interferon | IFN-α/β（Type I）／IFN-γ（Type II） | JAK1+TYK2／JAK1+JAK2 | STAT1 | 抗病毒、巨噬細胞活化 |
| IL-12/23 | IL-12, IL-23 | JAK2 + TYK2 | STAT4（IL-12）／STAT3（IL-23為主） | Th1 分化 ／ Th17 維持擴增 |
| IL-6（gp130） | IL-6, IL-11（+LIF, OSM, IL-27, IL-35） | JAK1（+JAK2/TYK2備援） | STAT3 | 急性期反應、Th17分化、血小板生成 |
| IL-10（IL-10Rβ） | IL-10, 19, 20, 22, 24, 26 | JAK1+TYK2 | STAT3 | 抗發炎（IL-10）／上皮細胞增生修復（IL-19/20/22） |

三個代表性的「一句話錨點」，可以用來反推整張表：

1. 「SCID 是誰的錯？JAK3。JAK3 只跟誰混？JAK1。」→ 推出 γc 家族 = JAK1+JAK3。
2. 「哪個 JAK 突變會讓骨髓長瘋？JAK2。JAK2 自己就能配對。」→ 推出 hormone-like 家族 = JAK2+JAK2。
3. 「TYK2 只認兩種老闆：抗病毒的（找 JAK1），乾癬的（找 JAK2）。」→ 推出兩組 TYK2 家族。

## 三、家族一：Common γ Chain（IL-2, 4, 7, 9, 15, 21）

這六個 cytokine 表面上毫不相干（有的管 T 細胞增生、有的管 Th2、有的管 NK 細胞），但其實**它們的受體都共用同一條 common γ chain (γc)**：各自有專屬的第一條鏈（決定「識別」哪個 cytokine，配 JAK1），第二條鏈永遠是同一條 γc（規定只能配 JAK3）。所以這整群不管是誰，一律都是 **JAK1 + JAK3**。

**前因後果**：因為六個 cytokine 共用同一條 γc 鏈 → 只要 γc 或 JAK3 壞掉，六個訊號同時斷電 → 這就是為什麼 **JAK3 或 γc 基因缺陷會造成 SCID**（T 細胞、NK 細胞、B 細胞功能全滅，因為它們的成熟訊號全部走這條共用線路）。這也是為什麼 tofacitinib（JAK1/3 為主要功能性選擇）會讓 NK 細胞下降——因為 NK 細胞存活仰賴 IL-15，而 IL-15 正是走這條 γc 路線。

## 四、家族二：Hormone-Like（EPO, TPO, GH, GM-CSF, IL-3, IL-5）

這群完全不一樣，它們的受體**只有一條鏈，自己跟自己配對（homodimer）**，而這條鏈只認 JAK2，所以是 **JAK2 + JAK2**，走 STAT5。這群的共同任務很好記：全部都是「血球生產線」——紅血球（EPO）、血小板（TPO）、骨髓細胞（GM-CSF、IL-3、IL-5）。

**前因後果**：這也是為什麼 JAK2 突變（V617F）會造成 polycythemia vera、essential thrombocythemia 這些骨髓增生性疾病——因為 JAK2 一旦持續活化，整條「血球生產線」失控暴走。反過來說，理論上抑制 JAK2 應該要造成貧血，但臨床上（baricitinib 對 JAK2 的抑制力其實最強）貧血並不常見，這點值得注意，是預期外的落差。

## 五、家族三：Interferon——分兩派

- **Type I IFN（IFN-α/β）**：走 **JAK1 + TYK2**，STAT1/STAT2 形成 ISGF3 複合體，任務是抗病毒，讓每顆受感染細胞進入「抗病毒戒備狀態」（誘導 ISG，抑制病毒複製機器），是**急性、當下**的細胞內在防禦。
- **Type II IFN（IFN-γ）**：走 **JAK1 + JAK2**，STAT1，任務是活化巨噬細胞、驅動 Th1。

這裡的邏輯是：**TYK2 幾乎等於「type I IFN 的代言人」**，只要看到 IFN-α/β 或 IL-12/23，你就知道 TYK2 一定在場。這也是為什麼 deucravacitinib（TYK2 selective）主要影響的是抗病毒與 Th1/Th17 這條線，而不去動 JAK2 的血球生產線或 JAK3 的淋巴球生存線——這是它安全性比 pan-JAK 藥物好、沒有黑框警語的結構性原因。

## 六、家族四：IL-12/23

### 共用零件

先看分子結構：IL-12 = p35 + **p40**（異二聚體）；IL-23 = p19 + **p40**（異二聚體）。兩個 cytokine **共用同一條 p40 鏈**，只是搭配的另一半不同（p35 vs p19）。

受體端也是同樣邏輯：IL-12 受體 = IL-12Rβ1 + IL-12Rβ2；IL-23 受體 = IL-12Rβ1 + IL-23R。兩個受體**共用 IL-12Rβ1 這條鏈**，只是另一半不同（IL-12Rβ2 vs IL-23R）。

**前因後果**：正因為兩者共用 p40／IL-12Rβ1 這個零件，藥物設計上才會有「一次打兩個」跟「只打一個」的分別——這也是為什麼會有 ustekinumab（抗 p40，同時擋 IL-12 和 IL-23）跟 guselkumab/risankizumab/tildrakizumab（抗 p19，只擋 IL-23）這兩種完全不同策略的乾癬藥物。

### JAK 配對

延續「JAK 身分由鏈決定」的原則：**IL-12Rβ1**（兩個受體共用的那條）→ 固定配 **TYK2**；**IL-12Rβ2**（IL-12 專屬）→ 配 **JAK2**；**IL-23R**（IL-23 專屬）→ 配 **JAK2**。所以不管是 IL-12 還是 IL-23，配對出來都是 **JAK2 + TYK2**。

### STAT 才是真正把 IL-12 和 IL-23「分家」的角色

雖然 JAK 一樣，但下游徵召的 STAT 主力不同，導致兩個 cytokine 的生物效應完全不同方向：

| | IL-12 | IL-23 |
|---|---|---|
| 主要 STAT | **STAT4** | **STAT3**（為主，也有部分STAT4） |
| 驅動的細胞分化 | naive CD4 T cell → Th1 | 維持、擴增已分化的 memory Th17 |
| 下游效應 cytokine | IFN-γ | IL-17、IL-22（GM-CSF等） |
| 對 NK 細胞的作用 | 直接活化 NK cell（"NK-cell stimulatory factor"） | — |

**記憶錨點**：IL-12 是「Th1 的起手式」（STAT4），IL-23 是「Th17 的續命丹」（STAT3）——它不太負責「從零分化出」Th17，而是讓已經存在的 Th17 記憶細胞繼續存活、擴增、持續分泌 IL-17。

### 接回臨床——這條路徑為什麼是「乾癬那組」

乾癬皮膚病灶裡持續活化的是 memory Th17，而不是新生的 Th1，所以**臨床證據上，只抗 IL-23（p19）的藥物效果通常不輸、甚至優於同時抗 IL-12+IL-23（p40）的藥物**——這間接說明 IL-23/STAT3/Th17 這條線才是乾癬真正的驅動力，IL-12/STAT4/Th1 可能不是必要的治療標靶。

Deucravacitinib（TYK2 selective inhibitor）之所以對乾癬、PsA 有效，就是因為它擋住了 IL-12 和 IL-23 共用的 TYK2 這個節點——一次打斷兩者的訊號，但因為它是 allosteric 抑制（結合 regulatory domain，不是 ATP binding site），且完全不動 JAK1/JAK2/JAK3，所以不會影響 hormone-like 血球生產線或 IL-15/γc 淋巴球監控線，這也是它安全性比 pan-JAK 藥物好、沒有黑框警語的結構性原因。

## 七、家族五：IL-6 家族——其實是兩個家族＋一個 STAT 陷阱

### 結構上是兩個不同家族，各自共用一條鏈

**家族 A：gp130 家族（IL-6, IL-11，還有 LIF、OSM、IL-27、IL-35）**——受體共用 **gp130（CD130）**：IL-6 受體 = IL-6Rα (CD126) + gp130；IL-11 受體 = IL-11Rα + gp130。

**家族 B：IL-10 家族（IL-10, 19, 20, 22, 24, 26）**——受體共用另一條鏈 **IL-10Rβ（CRF2-4）**：IL-10 受體 = IL-10Rα + IL-10Rβ；IL-19 受體 = IL-20Rα + IL-10Rβ；IL-20 受體 = IL-20Rα（或 IL-22Rα）+ IL-10Rβ；IL-22 受體 = IL-22Rα + IL-10Rβ。

這兩家族結構上完全不同（一個用 gp130，一個用 IL-10Rβ），**但因為訊號輸出（JAK1 為主 + STAT3 為主）長得很像，臨床上才被歸在同一組討論。**

### JAK 配對

gp130 → 主要配 **JAK1**，也可以配 JAK2 或 TYK2 當備援；IL-10Rβ（共用鏈）→ 固定配 **TYK2**；各自專屬的 alpha 鏈 → 主要配 **JAK1**。不管走哪一半，**JAK1 都在場**。

### STAT3 是這整組的「統一簽名」——但這裡有個陷阱

這組幾乎全部主要用 **STAT3**（IL-12/23 是 STAT4 vs STAT3 分家，這裡則是全員 STAT3）。陷阱在於：

> **同一個 STAT3，在 IL-6 是促發炎、在 IL-10 卻是抗發炎。**

STAT3 被哪個受體徵召不能直接推斷「發炎 vs 抗發炎」，因為 STAT3 磷酸化後進到細胞核，實際結合哪些基因、產生什麼效果，還要看**細胞當下的染色質環境和共同轉錄因子**——IL-6 在 T 細胞裡跟其他訊號（如 TGF-β）合作驅動 Th17 分化，屬於促發炎；IL-10 在巨噬細胞裡則是抑制發炎基因的表現。**同一把鑰匙，開的是不同房間的門。**

### 兩個家族的功能分工

| | gp130 家族（IL-6, IL-11） | IL-10 家族（IL-10, 19, 20, 22, 24, 26） |
|---|---|---|
| 主要作用細胞 | 肝細胞、免疫細胞（T/B cell） | **主要是上皮細胞**（角質細胞、腸道上皮） |
| 代表功能 | IL-6：急性期蛋白（CRP）、發燒、Th17分化、B細胞分化；IL-11：血小板生成 | IL-10：抑制巨噬細胞功能（抗發炎）；IL-19/20/22：驅動**角質細胞增生**、抗菌胜肽產生、上皮屏障修復 |
| 代表疾病關聯 | RA（IL-6 是 tocilizumab 標靶） | **乾癬**（IL-22 是造成表皮增厚的主要推手，IL-17 負責發炎浸潤） |

**臨床連結一（RA）**：所有 JAK inhibitor 多少都有類似 IL-6 抑制劑的副作用（neutropenia、血脂上升）——因為不管哪個 JAK inhibitor，只要抑制 JAK1，就一定會打到 IL-6/gp130 這條路徑。

**臨床連結二（乾癬）**：乾癬病灶＝**IL-23（維持Th17/Th22記憶細胞）→ IL-17（發炎浸潤）+ IL-22（表皮增生，走IL-10家族受體）**三者合作的結果。IL-12/23 家族與 IL-6/IL-10 家族的故事在此匯流——IL-23 提供驅動 Th17 的上游訊號，IL-22 提供造成皮膚增厚的下游效應分子。

## 八、例外：Type 2 / Th2（IL-4, 5, 13）為什麼分散在不同 JAK 組合

前面幾組的規律是「誰分泌、做什麼、用哪個受體」三者一致；**Th2 這三個 cytokine 是反例**：同一群 Th2 細胞分泌，卻分工到三個完全不同的受體模組。關鍵洞察是：

> **「Type 2 inflammation / Th2」是一個臨床／免疫學的分類（依細胞來源和表現型分類），不是一個受體／JAK 的分類。**

### IL-4：唯一「腳踏兩條船」的 cytokine

- **Type I 受體**（在淋巴球上）：IL-4Rα + **γc** → 走 **JAK1 + JAK3**（跟 IL-2/7/9/15/21 是同一組人馬）
- **Type II 受體**（在組織細胞、上皮、平滑肌、纖維母細胞上）：IL-4Rα + **IL-13Rα1** → 走 **JAK1 + JAK2/TYK2**

IL-13Rα1 也可以作為 γc 的替代夥伴，協助 IL-4 訊號傳遞——這是 IL-4「兩棲」的分子基礎，讓它同時能在淋巴結裡驅動 Th2 分化、B 細胞轉IgE（走 type I），也能在組織裡驅動平滑肌、上皮細胞反應（走 type II）。

### IL-13：只能走 IL-4 的「第二條船」

IL-13 沒有自己專屬的 γc 可以配，**只能走 type II 受體**：IL-4Rα + IL-13Rα1 → **JAK1 + JAK2/TYK2**（跟 IL-4 的 type II 完全共用同一套受體）。因為 IL-13Rα1 在淋巴球上表現很少，IL-13 主要作用於上皮、平滑肌、纖維母細胞——**這解釋了 IL-13 幾乎不太影響 T 細胞本身的分化或增生，卻是氣喘黏液分泌、支氣管平滑肌收縮（AHR）、皮膚纖維化等「組織端效應」的主要推手。**

### IL-5：完全是另一個世界的成員——它其實是「血球生產線」的員工

IL-5 走 IL-5Rα + **βc**（跟 IL-3、GM-CSF 共用的 common beta chain），本質上屬於「hormone-like 家族」，靠 **JAK2 homodimer** 運作，走 **STAT5**。IL-5 的任務跟 IgE、黏液完全無關，它負責**嗜酸性球（eosinophil）的分化、存活、活化**——一個「生長因子」的工作，所以它被歸類到血球生產線那一組，而不是跟 IL-4/IL-13 同一國。

### 三者總表

| | 受體 | JAK | 主要 STAT | 任務 |
|---|---|---|---|---|
| IL-4 | IL-4Rα+γc **或** IL-4Rα+IL-13Rα1 | JAK1+JAK3 **或** JAK1+JAK2/TYK2 | **STAT6** | 驅動Th2分化、IgE class switch（淋巴球端）+組織效應 |
| IL-13 | IL-4Rα+IL-13Rα1（唯一） | JAK1+JAK2/TYK2 | **STAT6** | 組織端效應為主（黏液、平滑肌、纖維化） |
| IL-5 | IL-5Rα+βc | JAK2（homodimer） | **STAT5** | 嗜酸性球生成、存活、活化 |

**統一線索**：IL-4 跟 IL-13 雖然 JAK 配對不完全一樣，但**兩者的第一條鏈永遠是同一條 IL-4Rα**，STAT6 的對接位點就長在 IL-4Rα 的尾巴上——不管走哪個組合，**只要有 IL-4Rα，STAT6 就一定被徵召**。這解釋了 IL-4 跟 IL-13 生物效應高度重疊（都能誘導 IgE、都能讓巨噬細胞轉成 M2）：它們共用的不是 JAK，而是 **IL-4Rα 這條鏈跟 STAT6 這個訊號終點**。IL-5 走完全不同的 STAT5，機轉上跟 IL-4/IL-13 是斷開的，只是因為同樣由 Th2 細胞分泌、同樣參與過敏疾病，臨床上才被放在一起講。

### 臨床payoff：生物製劑為什麼要分這麼細

- **Dupilumab（anti-IL-4Rα）**：直接打掉共用的那條鏈，同時擋掉 IL-4 的兩種受體 + IL-13 的唯一受體——這是它在異位性皮膚炎、氣喘、慢性鼻竇炎都有效的分子基礎，因為它一次掐住 STAT6 這整個輸出端。
- **Tralokinumab / lebrikizumab（anti-IL-13）**：只擋 IL-13，IL-4 還能繼續走 γc-type I 去做淋巴球端的工作——效果比 dupilumab 窄，但對皮膚（組織端效應為主）仍然有效。
- **Mepolizumab / benralizumab（anti-IL-5 / anti-IL-5Rα）**：完全走 STAT5 這條線，跟 IgE、黏液毫無關係，只對嗜酸性球相關疾病（嗜酸性氣喘、EGPA、HES）有效。

**延伸意義**：JAK inhibitor 之所以對 Type 2/過敏性疾病的效果不像對 RA、乾癬那麼乾脆，正是因為 Type 2 軸線分散在三個不同 JAK 模組（JAK1+JAK3、JAK1+JAK2/TYK2、JAK2 homodimer）上，不像 IL-12/23 集中在單一個 TYK2 節點——沒有一顆 JAK inhibitor 能像 dupilumab 一樣「一次掐住」整個 Type 2 軸線。

## 九、延伸應用：為什麼所有 JAK Inhibitor 都增加帶狀疱疹風險

這是把整個機轉故事串回臨床的最佳例子。VZV（水痘帶狀疱疹病毒）感染後不會被清除，而是**潛伏在背根神經節**，靠 VZV-specific CD8 記憶 T 細胞與 NK 細胞長期「站崗巡邏」壓著它不讓它復發。這道防線分成兩層：

- **第一層（急性、當下）**：pDC 產生 type I IFN，走 **JAK1+TYK2+STAT1**，讓周圍細胞進入抗病毒戒備狀態，對付活躍複製的病毒最有效。
- **第二層（長期、慢性）**：VZV 潛伏靠的不是這層，而是 **IL-15** 依賴的 CD8 記憶 T 細胞與 NK 細胞監控——IL-15 走 **JAK1+JAK3+STAT5**，能增強 CD8 memory T-cell 存活，缺乏時會導致 NK 細胞與記憶 CD8 T 細胞數目減少。

帶狀疱疹是**潛伏病毒的重新復發**，考驗的是第二層（IL-15 監控部隊夠不夠），而不是第一層（type I IFN 城牆蓋得好不好）。這也是為什麼年紀越大，帶狀疱疹風險越高——老化本身就會讓 IL-15 依賴的記憶 CD8 T 細胞庫萎縮（immunosenescence），跟藥物造成的機轉是同一件事。

**為什麼「JAK1 selective」藥物（如 upadacitinib、filgotinib）也一樣會增加 HZ 風險？** 因為受體要兩把 JAK 同時轉動才會開門，**擋住任一把，整條訊號就斷了**。IL-15 受體需要 JAK1+JAK3 兩者都動作，「JAK1 selective」藥物雖然對 JAK3 的抑制力比較弱，但只要把 JAK1 這一半擋住，IL-15 訊號照樣傳不下去。**JAK1 是這兩道防線（type I IFN 與 IL-15/CD8/NK 監控）共同的那把鑰匙**，任何有效抑制 JAK1 的藥物，理論上都會同時削弱這兩層對 VZV 的防禦——這正是為什麼帶狀疱疹是「全班共同」的副作用，而不是只有 pan-JAK 藥物才有。

## 十、延伸應用：為什麼 JAK Inhibitor 會讓血脂變差

這題可以跟 [CV risk 筆記](CV%20risk.md) 裡的「**Lipid Paradox**」概念接起來——JAK inhibitor 讓血脂上升，其實是這個矛盾現象的「逆轉」，而不是憑空製造出新的心血管風險。

### 先回顧 Lipid Paradox：發炎期間血脂是「假性偏低」

RA 活躍期，慢性發炎（TNF/IL-6/IL-1）會**抑制肝臟合成 LDL/TC**，導致 TC、LDL-C 數值偏低，但這個「低」是假象——因為同時 HDL 被發炎轉變成**功能失調、促發炎的 acute phase HDL**，所以低 LDL 不代表低心血管風險，反而對應高 CVD 風險，這就是 paradox 的由來。

### 機轉：IL-6/STAT3 在肝細胞裡做了三件事，壓低了血脂數字

1. **重新分配肝臟合成資源**：IL-6 透過 JAK1+STAT3，讓肝細胞把蛋白質合成機器優先轉去製造急性期蛋白（CRP、fibrinogen、serum amyloid A [SAA]），排擠掉正常的脂蛋白合成與代謝工作。
2. **SAA 取代 ApoA-I，把 HDL 變質**：發炎誘導的 SAA 會嵌入 HDL 顆粒、取代原本的 ApoA-I，變成「acute phase HDL」——這種 HDL 抗動脈粥狀硬化的功能變差，也讓血中測到的 HDL-C 數值偏低。
3. **促進 LDL 受體上調、加速 LDL 從血中清除**：發炎狀態下肝臟 LDL receptor 表現上升，把血中的 LDL 加速拉進肝細胞代謝掉，這也是為什麼活躍發炎時測到的血中 LDL 數值會偏低。

### JAK inhibitor 做的事：把這套「發炎抑制血脂」的機制拆掉

不管是哪一顆 JAK inhibitor，只要有效抑制 **JAK1**（前面故事裡反覆出現的「百搭款」），就一定會打到 IL-6 這條路徑——這正是為什麼 JAK inhibitor 的血脂變化模式跟 IL-6 抑制劑（tocilizumab）相似。當 IL-6/STAT3 訊號被關掉：

- 肝臟不再優先製造急性期蛋白 → 恢復正常的脂蛋白合成
- LDL receptor 的發炎性上調消失 → LDL 不再被加速清除 → **血中 LDL 回升**
- SAA 生成減少 → HDL 顆粒組成恢復正常（不再是 acute phase HDL）→ **血中 HDL 也回升**

所以「血脂變差」的說法其實要修正一下：數字是上升了（TC、HDL、LDL 皆上升約15-20%，約30%病人可見），但這比較像是「發炎解除後，血脂回到這個人原本沒有發炎時該有的基礎值」，而不是藥物憑空製造出新的高血脂。

### 為什麼這個「上升」在臨床上沒有想像中可怕

- **HDL/LDL ratio 大致不變**——因為兩者同步上升，動脈粥狀硬化指數沒有明顯惡化，不是只有「壞的」LDL 單獨上升。
- **臨床試驗中，這些血脂變化跟 MACE 沒有觀察到關聯**——ORAL Surveillance 看到的心血管風險訊號，機轉上並不是由這個血脂上升直接解釋的。
- **臨床處置**：Atorvastatin 已證實對 JAK inhibitor 造成的血脂上升有效，建議治療後 8-12 週監測空腹血脂，必要時加上 statin，而非因此停藥。

---

**資料來源**：Kelly's Textbook of Rheumatology Ch.65（Janus Kinase and Other Intra-cellular Targets）；Janeway's Immunobiology 10th ed（Appendix II/III Cytokines and Their Receptors、Ch16 Manipulation of the Immune Response）；CV risk 筆記（Lipid Paradox）。
