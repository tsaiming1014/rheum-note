# 移植免疫學 — HLA 命名、Mismatch 計算與移植前評估

> 來源：Janeway's Immunobiology 10th ed. Ch15（15-19～15-26）、WHO Nomenclature Committee for Factors of the HLA System（2010 起採冒號分隔命名）、2025 ACR / EULAR LN guideline（移植段落）、歷屆免專考題。

## 一、HLA 基本觀念

| | Class I | Class II |
|---|---|---|
| 基因 | HLA-A、HLA-B、HLA-C | HLA-DR、HLA-DQ、HLA-DP |
| 表現細胞 | 所有有核細胞（RBC 幾乎不表現、血小板低量表現） | 專職 APC（DC、macrophage、B cell）；發炎時內皮細胞也會表現 |
| 呈現給 | CD8+ T cell | CD4+ T cell |
| Crossmatch 對應 | T cell 與 B cell 都有 | **只有 B cell**（T cell 靜止時不表現） |

- HLA 基因位於 **chromosome 6p21.3**，以 **haplotype 整組遺傳**（共顯性表現）。
- 兄弟姊妹之間：**25% HLA-identical、50% haploidentical、25% 完全不相同**。
- 父母與子女之間一定是 **haploidentical**（共享一個 haplotype）。
- **HLA-identical sibling 移植仍然會排斥**（因為 minor histocompatibility antigen 不同），所以除了同卵雙胞胎以外，所有 solid organ 移植都需要長期免疫抑制。

## 二、HLA 命名法（Nomenclature）

以 **HLA-A\*02:101:01:02N** 為例：

| 部分 | 意義 |
|---|---|
| **HLA** | 前綴，代表 HLA 基因區域 |
| **A** | 基因座（gene locus） |
| **\*** | 星號代表以 **DNA 分子分型**命名（血清學命名沒有星號，例如 HLA-A2、HLA-B27） |
| **02**（Field 1） | **Allele group**：通常對應血清學抗原（A\*02 ≈ A2） |
| **101**（Field 2） | **Specific HLA protein**：編碼區有**非同義（non-synonymous）突變** → 胺基酸序列不同 → 蛋白質不同；依發現順序編號 |
| **01**（Field 3） | 編碼區內的**同義（synonymous）DNA 替換**：DNA 不同，但胺基酸序列相同 |
| **02**（Field 4） | **非編碼區**（intron、5'/3' UTR）的差異 |
| **N**（字尾） | **Null allele**：該 allele 不表現蛋白質 |

其他表現量字尾：

| 字尾 | 意義 |
|---|---|
| **N** | Null，不表現 |
| **L** | Low，細胞表面表現量低 |
| **S** | Secreted，只以可溶性分子分泌、不在細胞表面 |
| **C** | Cytoplasm，只存在細胞質內 |
| **A** | Aberrant，表現與否不確定 |
| **Q** | Questionable，表現可能受影響 |

**解析度（resolution）：**

- **Low resolution（Field 1，舊稱 2-digit）**：A\*02，約等於血清學的 A2。
- **High resolution（Field 2，舊稱 4-digit）**：A\*02:01，已定義到蛋白質層次。**對移植配對來說，Field 2 就是有意義的解析度**。
- Field 3、Field 4 的差異**不改變蛋白質**，一般不影響免疫原性。**例外是 null allele**：若分型沒有辨識出 N，會誤以為病人表現該抗原，進而影響配對判讀。

**Antigen-level match 與 allele-level match 的差別：** A\*02:01 與 A\*02:06 在血清學上都是 A2，屬於 antigen-level match，但在 allele 層次是 mismatch。這個差異在 **HSCT 很重要**，solid organ 移植相對較不敏感。

**風濕科常見的寫法：** HLA-B\*27:05、HLA-DRB1\*04:01（shared epitope）。Class II 以「基因＋鏈」命名，例如 DRB1、DQA1、DQB1。

## 三、HLA Mismatch 計算

### 計算原則（Solid organ transplant）

- 傳統上看 **HLA-A、B、DR** 三個 locus，每個 locus 有 2 個抗原，最多 **6 個 mismatch**，常寫成 **A-B-DR 格式**（例如「1-1-0 MM」）。
- **從受者的角度計算（host-versus-graft 方向）**：數「**捐者有、但受者沒有**」的抗原數。受者自己已有的抗原，不會被當成外來抗原。
- **Homozygous 的 locus**（分型只驗到一種抗原）**只算一次**。
- 所以 **A 捐給 B 和 B 捐給 A 的 mismatch 數可能不同**，關鍵就在 homozygosity。

### 例題

| | HLA-A | HLA-B | HLA-DR |
|---|---|---|---|
| 病人 X | A1, A2 | B8, B44 | DR3, DR4 |
| 病人 Y | A1, A3 | B8（homozygous） | DR3（homozygous） |

- **X 捐給 Y**（數 X 有、Y 沒有的）：A2、B44、DR4 → **3 mismatches**（1-1-1）
- **Y 捐給 X**（數 Y 有、X 沒有的）：A3 → **1 mismatch**（1-0-0）

→ 這就是考題「互捐時 mismatch 分別為 3 和 1」的原理：**X 是 heterozygous，抗原比較多；Y 是 homozygous，抗原比較少。** 抗原多的人捐給抗原少的人，mismatch 就多。

（註：原考題未記錄兩位病人的實際 HLA 型別，此例題為重現「3/1」原理自行設計。）

### HSCT 的計算不同

- HSCT 要看**雙向**：**GVH 方向**（受者有、捐者沒有 → 捐者 T cell 攻擊受者）與 **HvG 方向**（捐者有、受者沒有 → 排斥／graft failure）。
- 需要 **allele-level（high resolution）** 配對，常用 **8/8（A、B、C、DRB1）或 10/10（再加 DQB1）**。

### 各 locus 的重要性（腎移植）

**HLA-DR > HLA-B > HLA-A**。DR mismatch 的影響在移植後前 6 個月最明顯，DQ mismatch 與 DQ-DSA 則和慢性 AMR 相關（詳見 [2022 免專第 90 題](../考試準備/免專歷屆考題/2022免專筆試解答.md)）。

## 四、LN 病人腎移植前評估

> **最重要的是 anti-HLA antibody（特別是 DSA）**。預先存在的 DSA 會造成 hyperacute rejection 或 AMR。

### Anti-HLA antibody 是什麼

**Anti-HLA antibody** 是病人體內針對「**別人的 HLA 分子**」產生的抗體，屬於一種 **alloantibody**（同種異體抗體）。正常情況下，身體不會對自己的 HLA 產生抗體，必須接觸到別人的 HLA 才會被「致敏（sensitized）」。

**致敏來源（sensitizing events）：**

| 致敏事件 | 機轉 |
|---|---|
| **懷孕** | 胎兒帶有父方 HLA，胎兒細胞進入母體循環 → 母親產生抗父方 HLA 的抗體；**懷孕次數越多越容易致敏** |
| **輸血** | 血品中的白血球、血小板帶有捐血者的 HLA（主要是 class I） |
| **先前的移植** | 前一個移植物的 HLA，尤其是移植失敗、停藥之後 |

**SLE／LN 病人特別容易有**：多為女性、常有懷孕史，又常因貧血或手術而輸血。

**為什麼最重要：**

- 如果病人的 anti-HLA antibody 剛好能辨識**這一位捐者的 HLA**，就叫做 **DSA（donor-specific antibody）**。
- 移植後，DSA 會馬上結合移植腎的**血管內皮**（內皮細胞表現 HLA），活化補體和凝血 → **hyperacute rejection**，幾分鐘到幾小時內移植腎就壞死。
- 量比較少時，則造成 **antibody-mediated rejection（AMR）**：C4d+、微血管發炎，是移植腎長期失功的主因。
- 這些抗體**在移植前就已經存在**，免疫抑制劑來不及阻止，所以一定要在移植**前**先找出來，避開這位捐者，或先做 desensitization。
- 移植後也可能產生 **de novo DSA**：HLA mismatch 越多（尤其是 DR、DQ），或藥物順從性不佳時越容易出現。

**Anti-HLA antibody 與 SLE 自體抗體的比較：**

| | Anti-HLA antibody | SLE 自體抗體（anti-dsDNA 等） |
|---|---|---|
| 攻擊對象 | **別人**的 HLA（alloantigen） | **自己**的抗原（autoantigen） |
| 產生原因 | 接觸外來 HLA（懷孕、輸血、移植） | 自體免疫耐受失調 |
| 臨床意義 | 移植排斥、TRALI、血小板輸注無效（refractoriness） | 疾病診斷與活性評估 |

同樣的抗體在其他情境也會出問題：

- 女性捐血者血漿中的 anti-HLA／anti-HNA 抗體 → **TRALI**。
- 反覆輸血小板的病人 → 抗體破壞輸入的血小板 → **血小板輸注無效**。

### 免疫學評估

| 項目 | 內容 | 重點 |
|---|---|---|
| **ABO blood type** | 依輸血相容原則 | ABO 抗體會和**血管內皮**反應 → hyperacute rejection；ABO-incompatible 移植需要 desensitization。**Rh 不需要配對**（Rh 是 RBC 抗原，不表現在內皮） |
| **HLA typing** | DNA-based（PCR-SSO、PCR-SSP、NGS）分型 A、B、C、DR、DQ、DP | 用來計算 mismatch |
| **PRA／cPRA**（panel reactive antibody） | 受者血清會和**多少比例的一般族群** HLA 起反應 | 例如 cPRA 80% 代表 80% 的潛在捐者都不相容 → highly sensitized，很難等到腎 |
| **Single antigen bead（Luminex）** | 偵測抗體**針對哪些 HLA**、強度多少（**MFI**，cutoff 依各中心而定） | 判斷對某位捐者是不是 **DSA**，並用來做 virtual crossmatch |
| **Crossmatch** | 病人血清加上**這位捐者**的淋巴球，實際上會不會起反應（CDC、flow cytometry、virtual，見第五節） | 最後一關；**T cell CDC crossmatch 陽性傳統上是移植禁忌** |

### 感染評估

| 項目 | 重點 |
|---|---|
| **CMV IgG**（捐者與受者） | **D+/R− 風險最高** → 移植後給 valganciclovir prophylaxis |
| **EBV** | **D+/R−** → PTLD（post-transplant lymphoproliferative disorder）風險增加 |
| **HIV** | 必驗 |
| **HBV**（HBsAg、anti-HBc、anti-HBs）、**HCV** | 免疫抑制後可能 reactivation |
| **TB（IGRA）**、VZV、syphilis | 視情況篩檢與治療 |
| **疫苗** | **活性疫苗必須在移植前接種完成**（移植後禁用） |

### SLE／LN 特有評估

| 項目 | 重點 |
|---|---|
| **疾病活性** | **ACR**：不要求特定靜止月數，沒有其他主要器官侵犯即可移植；**EULAR**：要求**腎外疾病 clinically inactive ≥6 個月**（兩個指引明顯分歧） |
| **血清學** | 不需要 anti-dsDNA、補體完全正常 |
| **aPL／APS 篩檢**（LAC、aCL、anti-β2GPI） | aPL 陽性 → **移植腎血栓、graft loss** 風險 → 圍手術期抗凝血計畫 |
| **Preemptive 移植** | eGFR 接近 15 時考慮，與較佳的 10 年腎存活相關 |
| **LN 在移植腎復發** | 約 **10%**，多為輕度 mesangial 病灶 |

詳細的 ACR／EULAR 比較見 [SLE_Lupus_Nephritis_治療](../SLE/SLE_Lupus_Nephritis_治療.md)。

## 五、Crossmatch 種類

| 檢查 | 方法 | 意義 |
|---|---|---|
| **CDC crossmatch** | 受者血清 ＋ 捐者淋巴球 ＋ 補體 → 細胞死亡為陽性 | 只偵測**會活化補體**的高量抗體；**T cell CDC 陽性傳統上是絕對禁忌** |
| **Flow cytometry crossmatch（FCXM）** | 用流式細胞儀偵測受者抗體與捐者 T cell（CD3）、B cell（CD19/CD20）的結合 | **敏感度高於 CDC**，可偵測不活化補體的低量抗體 |
| **Virtual crossmatch** | 用受者抗體專一性（SAB）對照捐者 HLA 分型推算 | 縮短冷缺血時間，常用於屍腎分配 |

**T cell 與 B cell crossmatch 的判讀：**

- **T cell 陽性** → 通常代表 **anti-class I DSA**（T cell 只表現 class I）。
- **只有 B cell 陽性** → 代表 **anti-class II DSA**，或低量 class I 抗體、non-HLA 抗體；也要考慮 **rituximab 干擾**造成的偽陽性。

**現況：** 陽性 crossmatch 已不再是絕對禁忌，可用 **IVIG、plasmapheresis、rituximab** 做 desensitization（Janeway 15-22）。

## 六、Allorecognition 機轉

| 路徑 | 機轉 | 臨床角色 |
|---|---|---|
| **Direct** | 受者 T cell **直接辨識捐者 APC（passenger leukocytes）上的捐者 MHC**；捐者 APC 分泌的 exosome 也可以把捐者 MHC 帶到受者 DC 上 | **Acute rejection 的主力**；alloreactive T cell 的頻率很高。只有 direct 路徑的 CTL 能直接殺死移植物細胞 |
| **Indirect** | **受者 APC** 吞入捐者蛋白，處理後由**受者自己的 MHC** 呈現 | 幫助 **alloantibody（DSA）產生**，並活化 macrophage → 造成**慢性排斥與纖維化** |

**Minor histocompatibility antigen：**

- 由多型性蛋白的胜肽構成，**由 MHC 呈現**。所以即使 HLA 完全相同，仍然會排斥（只是比較慢）。
- **H-Y antigen**：Y 染色體基因（例如 *Smcy*/*KDM5D*）產生的胜肽。**女性會對男性細胞產生反應，男性不會對女性細胞產生反應**（因為兩性都表現 X 染色體基因）。

**First-set 與 second-set rejection（小鼠皮膚移植）：** 第一次移植約 **10–13 天**排斥；以同一捐者再移植約 **6–8 天**排斥（memory T cell，具 MHC 專一性，可藉由 T cell 轉移）。

## 七、排斥反應分類

| 類型 | 時間 | 機轉 | 病理特徵 |
|---|---|---|---|
| **Hyperacute** | 數分鐘–數小時 | **預先存在的抗體**（anti-ABO、anti-HLA class I）結合內皮 → 補體與凝血活化 | 血栓、出血，移植物腫脹、發紫；**肝臟相對有抵抗性** |
| **Acute TCMR** | 數天–數月 | T cell（以 direct allorecognition 為主） | 間質淋巴球浸潤、**tubulitis**；DSA 通常陰性 |
| **Acute／chronic AMR** | 數天–數年 | **DSA** | **Microvascular inflammation（glomerulitis、peritubular capillaritis）、C4d+、DSA+** |
| **Chronic allograft injury** | 數月–數年 | 反覆亞臨床排斥（DSA 或 T cell）＋非免疫因素 | 見下表 |

**不同器官的慢性排斥表現：**

| 器官 | 表現 |
|---|---|
| 腎、心 | **Chronic allograft vasculopathy**（同心圓狀動脈硬化 → 低灌流 → 纖維化、萎縮） |
| 肝 | **Vanishing bile duct syndrome** |
| 肺 | **Bronchiolitis obliterans** |
| CNI 毒性 | **Arteriolar hyalinosis**（和排斥造成的血管病變不同） |

**其他造成慢性失功的原因：** ischemia–reperfusion injury、免疫抑制後的病毒感染（CMV、BK virus）、**原發疾病復發**（例如 LN）。

相關考題：[2025 免專第 68 題](../考試準備/免專歷屆考題/2025免專筆試解答.md)（C4d+、DSA+ → AMR）、[2024 免專](../考試準備/免專歷屆考題/2024免專筆試解答.md)（肝臟不容易發生 hyperacute rejection）。

## 八、移植免疫抑制劑（作用位置）

| 階段 | 藥物 | 機轉 |
|---|---|---|
| **Induction（T cell depletion）** | Rabbit ATG（Thymoglobulin）、alemtuzumab（anti-CD52） | 移植前清除 T cell 與其他白血球 |
| **Induction（non-depleting）** | Basiliximab | Anti-CD25（IL-2R α chain），阻斷 IL-2 訊號 |
| **Maintenance** | Tacrolimus、cyclosporine | Calcineurin inhibitor → 阻止 NFAT 進入細胞核 |
| | MMF／MPA、azathioprine | 抑制活化 T cell 的增殖 |
| | Sirolimus、everolimus | mTOR inhibitor |
| | Belatacept | CTLA-4-Fc，結合 B7 → 阻斷 CD28 co-stimulation（**EBV 血清陰性者禁用**，PTLD 風險） |
| | Glucocorticoid | 廣泛抗發炎 |
| **AMR 治療／desensitization** | Plasmapheresis、IVIG、rituximab | 移除或抑制 DSA、清除 B cell |

## 九、HSCT 與 GVHD

- **GVHD**：捐者移植物中的成熟 T cell 攻擊受者組織，主要侵犯**皮膚、腸道、肝臟**（皮疹、腹瀉、肝功能異常）。
- **HSCT 的 HLA 配對比 solid organ 更重要**。HLA 配對好的情況下，GVHD 主要由 minor H antigen 不相容引起，所以仍然都需要免疫抑制。
- **GVL（graft-versus-leukemia）效應**：同一群捐者 T cell 會清除殘存的白血病細胞。**T cell depletion** 可以降低 GVHD，但**復發率會上升**，也會增加感染（這正好證明 GVL 效應存在）。
- **Mixed lymphocyte reaction（MLR）**：用來偵測 alloreactive T cell，但無法精準定量。
- **Treg** 可以延緩或預防 GVHD（low-dose IL-2 擴增 Treg）。

## 十、胎兒：天然的 Allograft

胎兒帶有父方 HLA，卻不會被排斥，機轉包括：

- **Trophoblast** 不表現 class II，class I 表現量低且種類受限。
- **HLA-G**（非典型、多型性低的 class I）抑制 NK cell 殺傷。
- **IDO** 耗盡 tryptophan，抑制 T cell。
- **TGF-β、IL-10** 誘導 iTreg。
- Decidua 抑制吸引 T cell 的 chemokine 表現。

但**懷孕仍然是 anti-HLA 抗體致敏的重要來源**（經產婦常有抗父方 MHC 的抗體；這也是女性捐血者血漿與 TRALI 相關的原因）。

## 十一、考點速記

| 考點 | 答案 |
|---|---|
| HLA-A\*02:101:01:02N 的各個 field | allele group／specific protein／同義 DNA 替換（編碼區）／非編碼區差異；N = null |
| 移植最重要的配對 locus | **HLA-DR** > B > A |
| 移植前最重要的評估 | **Anti-HLA antibody（DSA）** |
| Anti-HLA antibody 的致敏來源 | 懷孕、輸血、先前的移植 |
| 移植前評估清單 | ABO、HLA typing、PRA／DSA、crossmatch、CMV、EBV、HIV、HBV、HCV、TB |
| Mismatch 如何計算 | 數「捐者有、受者沒有」的抗原；homozygous 只算一次 → 雙向數字可能不同 |
| T cell crossmatch 陽性 | Anti-class I DSA |
| 只有 B cell crossmatch 陽性 | Anti-class II DSA（或 rituximab 干擾） |
| Hyperacute rejection | 預先存在的抗體 → 補體、血栓；肝臟有抵抗性 |
| AMR 的病理 | C4d+、DSA+、microvascular inflammation |
| CMV 最高風險組合 | **D+/R−** |
| HLA-identical sibling 為何仍會排斥 | Minor H antigen（例如 H-Y） |
| LN 移植前的疾病靜止要求 | EULAR 要求 ≥6 個月；ACR 不要求特定月數 |
| LN 在移植腎復發率 | 約 10% |
| 是否需要配 Rh | 不需要（solid organ） |
| 角膜移植 | 無血管，通常不需要免疫抑制 |
