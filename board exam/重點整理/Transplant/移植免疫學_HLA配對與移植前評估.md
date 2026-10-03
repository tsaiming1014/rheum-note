# 移植免疫學 — HLA 命名、Mismatch 計算與移植前評估

> 來源：Janeway's Immunobiology 10th ed. Ch15（15-19～15-26）、WHO Nomenclature Committee for Factors of the HLA System（2010 起採冒號分隔命名）、2025 ACR / EULAR LN guideline（移植段落）、歷屆免專考題。

## 一、HLA 基本觀念

| | Class I | Class II |
|---|---|---|
| 基因 | HLA-A、HLA-B、HLA-C | HLA-DR、HLA-DQ、HLA-DP |
| 表現細胞 | 所有有核細胞；RBC 幾乎不表現；**血小板雖然無核，但帶有相當量的 class I**（所以輸血小板會致敏、造成 refractoriness） | 專職 APC（DC、macrophage、B cell）、thymic epithelium；**人類血管內皮細胞平時就表現**（與小鼠不同），發炎時表現量上升；**活化的人類 T cell** 也會表現 |
| 呈現給 | CD8+ T cell | CD4+ T cell |
| Crossmatch 對應 | T cell 與 B cell 都有 | **只有 B cell**（靜止的 T cell 不表現） |

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
- **Homozygous 的 locus**（或分型只驗到一種抗原）：捐者在該 locus **最多只貢獻 1 個 mismatch**。
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
| **輸血** | 血小板帶 class I；白血球（B cell、monocyte）帶 class I 與 class II。**Leukoreduction 能降低但無法完全避免**致敏 |
| **先前的移植** | 前一個移植物的 HLA，尤其是移植失敗、停藥之後 |

**SLE／LN 病人特別容易有**：多為女性、常有懷孕史，又常因貧血或手術而輸血。

**為什麼最重要：**

- 如果病人的 anti-HLA antibody 剛好能辨識**這一位捐者的 HLA**，就叫做 **DSA（donor-specific antibody）**。
- 移植後，DSA 會馬上結合移植腎的**血管內皮**（內皮細胞表現 HLA），活化補體和凝血 → **hyperacute rejection**，幾分鐘到幾小時內移植腎就壞死。
- 量比較少時，則造成 **antibody-mediated rejection（AMR）**：microvascular inflammation（glomerulitis、peritubular capillaritis）加上 DSA，C4d 常是陽性。**C4d-negative AMR** 也存在（Banff 2013 起，MVI 加上 DSA 即可診斷）。AMR 是移植腎長期失功的主因。
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
| **ABO blood type** | 依輸血相容原則 | ABO 抗體會和**血管內皮**反應 → hyperacute rejection。**Rh 不需要配對**（Rh 只在 RBC，不表現在內皮）。**A2 subtype** 的內皮 A 抗原表現量低，**A2 → O/B 受者**在 anti-A titer 低時可以移植。ABO-incompatible 移植要追蹤 **anti-A/B isoagglutinin titer**，以 plasmapheresis、rituximab 等 desensitization 降到目標值 |
| **HLA typing** | **受者與捐者**都要做 DNA-based 分型（PCR-SSO、PCR-SSP、NGS），範圍 A、B、C、DRB1、DQA1/DQB1、DPA1/DPB1 | 計算 A-B-DR mismatch。近年重視 **DQ mismatch** 與 **eplet mismatch**（HLAMatchmaker），和 de novo DSA 相關 |
| **Single antigen bead（Luminex SAB）** | 每顆 bead 上只有一種 HLA allele → 找出抗體**針對哪些 HLA**，強度以 **MFI** 表示（半定量，cutoff 依各中心而定） | 定義 **unacceptable antigens**、判斷是否為 **DSA**、做 virtual crossmatch。判讀陷阱：**prozone effect**（補體 C1 干擾使 MFI 假性偏低，用 EDTA、DTT、熱處理或稀釋血清解決）、**denatured antigen** 假陽性。**C1q assay** 可判斷抗體能否結合補體 |
| **PRA／cPRA**（panel reactive antibody） | 傳統 PRA 是受者血清對淋巴球 panel 的反應比例。現行的 **cPRA** 由 SAB 定義出的 unacceptable antigens，搭配族群 HLA 頻率**計算**而來 | cPRA 80% 代表**捐者族群中有 80% 帶有受者的 unacceptable antigen**（預期 crossmatch 陽性）。**≥80% 為 highly sensitized**，≥98% 為 very highly sensitized（分配時優先）。等待期間要**定期重測**（例如每 3 個月），**致敏事件後要追加檢測**（輸血、懷孕、移植物失敗），並參考 **peak serum** |
| **Crossmatch** | 病人血清加上**這位捐者**的淋巴球，實際上會不會起反應（CDC、flow cytometry、virtual，見第五節）。同時做 **autologous crossmatch**（病人血清加病人自己的淋巴球） | 最後一關。**T cell CDC crossmatch 陽性（IgG、auto-XM 陰性）傳統上是移植禁忌**。**SLE 病人常有 lymphocytotoxic autoantibody** → auto-XM 陽性時，allo-XM 陽性不一定是 DSA |
| **Non-HLA 抗體**（選擇性） | Anti-AT1R、anti-ETAR、anti-MICA | 沒有 HLA-DSA 卻發生 AMR 時要考慮。PRA 和 SAB 都測不到 |
| **Baseline DSA** | 移植前的抗體譜 | 作為移植後監測 **de novo DSA** 的基準 |

### 感染評估

| 項目 | 重點 |
|---|---|
| **CMV IgG**（捐者與受者） | **D+/R− 風險最高** → 移植後給 valganciclovir prophylaxis |
| **EBV** | **D+/R−** → PTLD（post-transplant lymphoproliferative disorder）風險增加 |
| **HIV** | 必驗 |
| **HBV**（HBsAg、anti-HBc、anti-HBs）、**HCV** | 免疫抑制後可能 reactivation |
| **TB（IGRA）**、VZV、syphilis | 視情況篩檢與治療 |
| **疫苗** | **活性疫苗（MMR、VZV live）必須在移植至少 4 週前接種完成**，移植後禁用。非活性疫苗（含 recombinant zoster vaccine）也盡量在移植前完成，免疫反應較好 |

### SLE／LN 特有評估

| 項目 | 重點 |
|---|---|
| **疾病活性** | **ACR**：不要求特定靜止月數，沒有其他主要器官侵犯即可移植；**EULAR**：要求**腎外疾病 clinically inactive ≥6 個月**（兩個指引明顯分歧） |
| **血清學** | 不需要 anti-dsDNA、補體完全正常 |
| **aPL／APS 篩檢**（LAC、aCL、anti-β2GPI） | aPL 陽性 → **移植腎血栓、graft loss** 風險 → 圍手術期抗凝血計畫 |
| **Preemptive 移植** | eGFR 接近 15 時考慮，與較佳的 10 年腎存活相關 |
| **LN 在移植腎復發** | **臨床**復發約 **10%**，多為輕度 mesangial 病灶。**Protocol biopsy 的組織學復發**可達 30–50%，但很少因此導致 graft loss |

詳細的 ACR／EULAR 比較見 [SLE_Lupus_Nephritis_治療](../SLE/SLE_Lupus_Nephritis_治療.md)。

## 五、Crossmatch 種類

| 檢查 | 方法 | 意義 |
|---|---|---|
| **CDC crossmatch** | 受者血清 ＋ 捐者淋巴球 ＋ 補體 → 細胞死亡為陽性 | 只偵測**會活化補體**的高量抗體；**T cell CDC 陽性傳統上是絕對禁忌** |
| **Flow cytometry crossmatch（FCXM）** | 用流式細胞儀偵測受者抗體與捐者 T cell（CD3）、B cell（CD19/CD20）的結合 | **敏感度高於 CDC**，可偵測不活化補體的低量抗體 |
| **Virtual crossmatch** | 用受者抗體專一性（SAB）對照捐者 HLA 分型推算 | 縮短冷缺血時間，常用於屍腎分配 |

**T cell 與 B cell crossmatch 的判讀：**

- **T cell 陽性** → 通常代表 **anti-class I DSA**（T cell 只表現 class I）。
- **只有 B cell 陽性** → 代表 **anti-class II DSA**，或低量 class I 抗體、non-HLA 抗體；也要考慮 **rituximab 干擾**、autoantibody 造成的偽陽性。

**假陽性來源與處理：**

| 原因 | 處理 |
|---|---|
| **Autoantibody**（SLE 常見） | 同時做 autologous crossmatch |
| **IgM 抗體**（多為 autoantibody，臨床意義低） | 血清加 **DTT** 去除 IgM |
| **Rituximab**（B cell FCXM） | 捐者細胞先以 **pronase** 處理，移除 CD20 與 Fc receptor |
| **ATG** | 參考用藥前的血清 |

**現況：** 陽性 crossmatch 已不再是絕對禁忌，可用 **IVIG、plasmapheresis、rituximab** 做 desensitization（Janeway 15-22）；**imlifidase**（IgG-degrading enzyme of *Streptococcus pyogenes*，可在數小時內切斷 IgG）已在歐盟核准用於 highly sensitized 受者。

## 六、Allorecognition 機轉

| 路徑 | 機轉 | 臨床角色 |
|---|---|---|
| **Direct** | 受者 T cell **直接辨識捐者 APC（passenger leukocytes）上完整的捐者 MHC** | **Acute rejection 的主力**，alloreactive T cell 的頻率很高。只有 direct 路徑產生的 CTL 能直接殺死移植物細胞 |
| **Semi-direct** | 受者 DC 經由 **exosome 或細胞接觸（trogocytosis）取得完整的捐者 MHC**（cross-dressing），再呈現給受者 T cell | passenger leukocytes 耗盡後，仍能維持類似 direct 的辨識 |
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
| 腎 | **Transplant glomerulopathy**（GBM double contour，chronic AMR 的特徵）、chronic allograft arteriopathy（transplant vasculopathy，intimal fibrosis）、**IFTA**（interstitial fibrosis／tubular atrophy）。「chronic allograft nephropathy」這個名詞已經不用了 |
| 心 | **Cardiac allograft vasculopathy**（同心圓狀內膜增厚 → 缺血） |
| 肝 | **Vanishing bile duct syndrome** |
| 肺 | **Bronchiolitis obliterans**（chronic lung allograft dysfunction，CLAD） |
| CNI 毒性 | **Arteriolar hyalinosis**（nodular），和排斥造成的血管病變不同 |

**其他造成慢性失功的原因：** ischemia–reperfusion injury、免疫抑制後的病毒感染（CMV、BK virus）、**原發疾病復發**（例如 LN）。

相關考題：[2025 免專第 68 題](../考試準備/免專歷屆考題/2025免專筆試解答.md)（C4d+、DSA+ → AMR）、[2024 免專](../考試準備/免專歷屆考題/2024免專筆試解答.md)（肝臟不容易發生 hyperacute rejection）。

## 八、移植免疫抑制劑（作用位置）

| 階段 | 藥物 | 機轉 |
|---|---|---|
| **Induction（T cell depletion）** | Rabbit ATG（Thymoglobulin）、alemtuzumab（anti-CD52） | 移植前清除 T cell 與其他白血球 |
| **Induction（non-depleting）** | Basiliximab | Anti-CD25（IL-2R α chain），阻斷 IL-2 訊號 |
| **Maintenance** | Tacrolimus、cyclosporine | Calcineurin inhibitor → 阻止 NFAT 進入細胞核 |
| | MMF／MPA | 抑制 **IMPDH** → 阻斷 de novo guanosine 合成。淋巴球缺少 salvage pathway，所以 **T cell 與 B cell** 的增殖都被抑制 |
| | Azathioprine | Purine analog（6-MP），抑制 DNA 合成 |
| | Sirolimus、everolimus | mTOR inhibitor → 阻斷 IL-2 訊號下游，讓細胞停在 G1→S |
| | Belatacept | **高親和力 CTLA-4-Ig**（abatacept 改 2 個胺基酸）結合 B7（CD80/86）→ 阻斷 CD28 co-stimulation。**EBV 血清陰性者禁用**（PTLD 風險，特別是 CNS PTLD） |
| | Glucocorticoid | 廣泛抗發炎 |
| **AMR 治療／desensitization** | Plasmapheresis、IVIG、rituximab、**imlifidase** | 移除、抑制或切斷 DSA，清除 B cell |

## 九、HSCT 與 GVHD

- **Acute GVHD**：捐者移植物中的成熟 T cell 攻擊受者組織，主要侵犯**皮膚、腸道、肝臟**（皮疹、腹瀉、膽汁鬱積）。
- **Chronic GVHD**：臨床**很像自體免疫病**，包括 **scleroderma-like** 皮膚硬化、**sicca**（像 Sjögren）、**fasciitis**、myositis、bronchiolitis obliterans、口腔 lichenoid 病灶。機轉牽涉胸腺受損、Treg 不足、B cell 異常與纖維化。這部分是風濕科考點。
- **HSCT 的 HLA 配對比 solid organ 更重要**。HLA 配對好的情況下，GVHD 主要由 minor H antigen 不相容引起，所以仍然都需要免疫抑制。
- **GVL（graft-versus-leukemia）效應**：同一群捐者 T cell 會清除殘存的白血病細胞。**T cell depletion** 可以降低 GVHD，但**復發率會上升**，也會增加感染（這正好證明 GVL 效應存在）。
- **Mixed lymphocyte reaction（MLR）**：用來偵測 alloreactive T cell，但無法精準定量。
- **Treg** 可以延緩或預防 GVHD（low-dose IL-2 擴增 Treg）。

### Haploidentical HSCT 與 PTCy

**Haplo 的本質：** 捐者和受者共享一條遺傳自同一祖先的 haplotype（identical by descent）。

- **共享的那一條**：來自同一條染色體，**每個 Field 都完全相同**，不需要另外配對。
- **另一條**：來自不同的 haplotype，**大多不相同**（偶爾有 allele 剛好一樣），整體最多 **5/10 mismatch**。
- 所以 haplo 不是「放寬 Field 2 的配對標準」，而是**直接接受半邊 mismatch，再用 PTCy 處理後果**。
- Field 2（allele-level）配對真正的難題在**非親屬捐者**：兩人都是 A\*02，可能一個是 A\*02:01、一個是 A\*02:06，所以骨髓資料庫需要 high-resolution 分型。

**PTCy（post-transplant cyclophosphamide）的機轉：**

- 移植後第 3、4 天給高劑量 cyclophosphamide。
- **被受者 HLA 活化、正在快速增殖的 alloreactive T cell** 被選擇性殺死。
- **Treg 相對被保留**；**造血幹細胞表現高量 ALDH**（aldehyde dehydrogenase），可代謝 cyclophosphamide 而存活。
- 結果：HLA mismatch 造成的 GVHD 風險被大幅抵銷。PTCy 目前也延伸用於 matched／mismatched unrelated donor（例如 BMT CTN 1703、ACCESS trial），HSCT 對「完美配對」的依賴已明顯下降。

**Haplo 仍然要驗 anti-HLA antibody：**

- 受者若有針對捐者 mismatch haplotype 的 **DSA → graft failure 風險明顯上升** → 改選其他親屬，或先做 desensitization。
- DSA 最常見於**經產婦**（懷孕致敏）。
- 其他 haplo 捐者選擇因素：捐者年輕、男性優先、CMV serostatus。

### Solid organ 與 HSCT 的配對需求比較

| | 腎移植 | HSCT |
|---|---|---|
| 配對層次 | 傳統以 **antigen level**（約等於 Field 1／血清學）計算 A-B-DR mismatch | 非親屬捐者需 **allele level（Field 2）**，8/8 或 10/10 |
| 可以完全不配嗎？ | 可以：**夫妻、無血緣活體捐贈**成績很好，6/6 mismatch 也常移植 | 以前不行；**現在 haplo ＋ PTCy 可接受半配** |
| 補償 mismatch 的方法 | 長期免疫抑制劑 | PTCy 等 GVHD 預防策略 |
| 真正不能妥協的門檻 | **ABO、DSA、crossmatch** | **DSA**（graft failure） |
| HLA 配對的角色 | 加分（DR 最重要），非必要條件 | 越配越好，但已非絕對必要 |

**重點：** Field 2 是「蛋白質是否相同」的定義層次，這點不變；但臨床上不一定要追求 Field 2 完全配對。**真正不能妥協的是預先存在的 anti-HLA antibody（DSA）**，這也是移植前評估「最重要的是 anti-HLA antibody」而不是「HLA 完全配對」的原因。

## 十、胎兒：天然的 Allograft

胎兒帶有父方 HLA，卻不會被排斥，機轉包括：

- **Villous trophoblast** 不表現 HLA class I 與 II。**Extravillous trophoblast** 只表現 **HLA-C、HLA-E、HLA-G**，**不表現 HLA-A、B**（也就是不表現最容易引起 T cell 反應的多型性分子）。
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
| 移植前評估清單 | ABO（含 A2、titer）、HLA typing、SAB → cPRA／DSA、crossmatch（含 auto-XM）、CMV、EBV、HIV、HBV、HCV、TB、SLE 加驗 aPL（完整故事版見 [腎移植前評估_故事版](腎移植前評估_故事版.md)） |
| Mismatch 如何計算 | 數「捐者有、受者沒有」的抗原；homozygous 只算一次 → 雙向數字可能不同 |
| T cell crossmatch 陽性 | Anti-class I DSA |
| 只有 B cell crossmatch 陽性 | Anti-class II DSA；也要排除 rituximab、autoantibody 造成的假陽性 |
| SLE 病人 crossmatch 陽性要先排除 | **Autoantibody** → 做 autologous crossmatch，加 DTT |
| SAB 的 MFI 假性偏低 | **Prozone effect**（補體 C1 干擾）→ EDTA、DTT 處理 |
| Hyperacute rejection | 預先存在的抗體 → 補體、血栓；肝臟有抵抗性 |
| AMR 的病理 | MVI + DSA；C4d 常陽性，但 **C4d-negative AMR** 也存在 |
| Chronic AMR 的腎臟特徵 | **Transplant glomerulopathy**（GBM double contour） |
| Chronic GVHD 的表現 | Scleroderma-like、sicca、fasciitis、myositis（像自體免疫病） |
| 人類內皮細胞 class II | **平時就表現**（小鼠要發炎才表現） |
| Trophoblast 的 HLA | 只有 HLA-C、E、G，沒有 HLA-A、B |
| CMV 最高風險組合 | **D+/R−** |
| HLA-identical sibling 為何仍會排斥 | Minor H antigen（例如 H-Y） |
| LN 移植前的疾病靜止要求 | EULAR 要求 ≥6 個月；ACR 不要求特定月數 |
| LN 在移植腎復發率 | 臨床約 10%；protocol biopsy 組織學復發可達 30–50% |
| 是否需要配 Rh | 不需要（solid organ） |
| 角膜移植 | 無血管，通常不需要免疫抑制 |
| Haplo HSCT 為何可行 | **PTCy**：殺死增殖中的 alloreactive T cell，保留 Treg 與 HSC（高 ALDH） |
| Haplo 選捐者最重要的免疫學因素 | 受者有無針對捐者的 **DSA**（graft failure） |
| HLA 配對要看到哪一個 Field | Field 2 定義蛋白質；非親屬 HSCT 需 allele level，腎移植多用 antigen level |
