# ANCA 致病機轉

## 簡化版：給初學者的故事

**ANCA（Anti-Neutrophil Cytoplasmic Antibody）** 是一種攻擊自己中性球的自體抗體。它不直接破壞血管，而是把中性球逼瘋，讓中性球在血管壁裡暴走——這就是整個致病機轉的核心。

### Step 1：武器藏在背包裡

中性球裡面有很多武器，裝在顆粒裡。其中最重要的兩個是：

- **MPO（myeloperoxidase）**：能製造強力氧化物
- **PR3（proteinase 3）**：蛋白酶，能切割組織

平常這些武器都鎖在顆粒裡，不會跑出來。

### Step 2：奸細出現（ANCA 的產生）

由於遺傳背景加上環境刺激，免疫系統失去耐受，開始產生**攻擊 MPO 或 PR3 的抗體**，這就是 ANCA。

- 攻擊 PR3 的 → **PR3-ANCA（c-ANCA）**，主要見於 GPA
- 攻擊 MPO 的 → **MPO-ANCA（p-ANCA）**，主要見於 MPA

### Step 3：背包先打開（Priming）

ANCA 單獨存在還不夠——**它需要一個前提：中性球先被致敏（priming）。**

發炎環境中（感染、環境暴露），TNF-α、G-CSF、LPS、C5a 等訊號刺激中性球，讓 MPO 和 PR3 從顆粒轉位到**細胞膜表面**。背包打開了，武器露出來了，ANCA 才能找到靶。

> **重點**：沒有 priming，ANCA 什麼事都不會發生。這也解釋了為什麼 AAV 常在感染後復發。

### Step 4：拉引信（ANCA 活化中性球）

ANCA 同時抓住兩個把手：

- **Fab 端**→ 結合細胞表面的 MPO 或 PR3
- **Fc 端**→ 勾住中性球的 FcγR 受體

雙重結合觸發訊號，中性球完全活化，發動三波攻擊：

| 攻擊 | 說人話 |
|------|--------|
| **Respiratory burst** | NADPH oxidase 活化，製造大量 ROS（HOCl 等）燒血管壁 |
| **Degranulation** | MPO、PR3、elastase 全倒在血管壁上直接腐蝕 |
| **Frustrated phagocytosis** | 中性球黏死在血管壁上，吞不了東西，把武器直接朝血管壁噴 |

### Step 5：火越燒越大（C5a 與 NETs）

- 補體被活化 → 產生 **C5a** → 再去致敏更多中性球 → 正回饋，越炸越多
- 中性球射出 **NETs**（中性球胞外陷阱）：DNA 像漁網射出去，掛滿 MPO 和 PR3，繼續傷害血管，還讓免疫細胞吃進去後產生**更多 ANCA** → 惡性循環

### 結果：Pauci-immune Necrotizing Vasculitis

血管壁出現**纖維素樣壞死**，但幾乎沒有免疫複合體沉積。這就是 AAV 的組織病理特徵——**pauci-immune（寡免疫）**，和 SLE 腎炎（免疫複合體大量沉積）完全不同。

---

## 複雜版：進階機轉詳解

### 一、組織病理基礎

三種 AAV（GPA、MPA、EGPA）皆呈現 **leukocytoclastic vasculitis**：

- 小動脈、微血管、小靜脈的 **fibrinoid necrosis**
- 中性球浸潤組織後死亡，留下核碎片（leukoclasis）
- 少量 IgG 和補體沉積，但**免疫複合體不是主要致病機制**（pauci-immune）

### 二、靶抗原與疾病的對應

| 抗原 | ANCA 類型 | 螢光型態 | 主要疾病 |
|------|-----------|----------|----------|
| Proteinase 3（PR3） | PR3-ANCA | c-ANCA | GPA |
| Myeloperoxidase（MPO） | MPO-ANCA | p-ANCA | MPA |

MPO 和 PR3 正常儲存於**嗜苯胺藍顆粒（azurophilic / primary granules）**，這兩者也是 NETs 的重要組成成分。

### 三、Priming 的分子機制

致敏訊號包括 TNF-α、G-CSF、LPS、C5a，這些刺激引發顆粒胞吐（exocytosis），使 MPO/PR3 轉位至細胞膜表面，同時：

- **FcγRIIIb（CD16）表現上調**，使中性球對 ANCA 更敏感
- **β2 integrin（Mac-1, CD11b/CD18）部分活化**，增加對內皮的黏附性
- **Low-density granulocytes（LDGs）**：此類低密度中性球亞群在 AAV 患者增加，已處於 primed 狀態，特別容易形成 NETs，且其轉錄特徵與疾病嚴重度和 rituximab/cyclophosphamide 治療反應不良相關

### 四、ANCA 活化中性球的分子訊號

ANCA（IgG）的雙重結合：

1. **Fab 端**結合細胞表面 MPO 或 PR3（抗原特異性）
2. **Fc 端**與 **FcγRIIIb（CD16）** 結合，觸發 inside-out signaling

胞內訊號串聯：
```
FcγR 交叉連結
      ↓
PI3K → Rac2 → p38 MAPK 活化
      ↓
NADPH oxidase 組裝（p47phox、p67phox 移位至膜）
      ↓
Respiratory burst + 顆粒胞吐
```

β2 integrin（Mac-1）的活化：inside-out signaling 使 Mac-1 構形改變，親和力大增，中性球與內皮 ICAM-1 緊密結合 → **frustrated phagocytosis**（挫敗吞噬）→ 毒性物質被定向釋放到血管壁。

### 五、Respiratory Burst 的氧化破壞鏈

```
NADPH → NADPH oxidase → O₂⁻（superoxide）
                              ↓（SOD）
                             H₂O₂
                              ↓（MPO + Cl⁻）
                             HOCl（次氯酸）← 強力氧化破壞血管壁蛋白
```

PR3 亦具有促炎功能：切割 membrane-bound TNF-α 和 IL-1β 的前驅蛋白，釋出活性形式，放大局部炎症。

### 六、NETs 的雙重角色

**直接損傷面：**

- NETs 含 MPO、PR3、elastase，直接腐蝕血管壁
- NETs 促進 tissue factor 表現 → 活化凝血因子和血小板 → **促血栓形成**（AAV 靜脈血栓風險增加的機制之一）

**自我放大面（ANCA 生成的惡性循環）：**
```
NETs 射出 MPO/PR3（+DNA 複合體）
        ↓
被 myeloid dendritic cells 攝取、呈現
        ↓
B cell 活化 → 產生更多 ANCA
        ↓
更多中性球被活化 → 更多 NETs
```

臨床證據：AAV 患者血清中 **MPO-DNA 複合體（NET remnants）** 和 calprotectin 升高，且與疾病活性及中性球計數正相關；腎臟和血管血栓的免疫染色中可見 NET 結構。

### 七、補體 C5a 的放大迴路

**Mouse model 關鍵證據（Kelly Ch.90）**：

- 將 anti-MPO 抗體轉移至正常小鼠 → 產生 pauci-immune GN
- 若無 **C5a receptor（C5aR）** → GN 不發生
- 結論：C5a/C5aR 軸是 ANCA 致病的**必要條件**，而非單純附屬角色

放大迴路：
```
中性球活化 → 替代補體途徑活化 → C5a 生成
                                        ↓
                        C5aR on 中性球：進一步 priming + 活化
                        C5aR on 內皮細胞：促進 ICAM-1 表現
                        C5a chemotaxis：招募更多中性球到炎症部位
                                        ↓
                              正回饋，炎症放大
```

**治療應用**：**Avacopan**（口服 C5aR 拮抗劑）在 ADVOCATE trial 中達到非劣效於 prednisone 的緩解率，可作為 steroid-sparing 策略。

### 八、T 細胞的角色

T 細胞參與兩個層面：

1. **協助 ANCA 產生**：高親和力 IgG 的產生需要 CD4⁺ T cell 的 germinal center 反應
2. **GPA 的肉芽腫形成（GPA 特有）**：
   - CD4⁺ T cells 大量聚集於 necrotizing granulomatous lesions
   - 活化巨噬細胞 → 形成上皮樣細胞和巨細胞
   - 局部招募更多中性球
   - T cell 亞群改變：Th1、Th2、Th17 及 Regulatory T cells 在不同疾病期和組織部位有不同表現

EGPA 特殊性：**Th2 和 Th17 反應**均參與，驅動嗜酸球活化（IL-5）和組織浸潤。

### 九、動物模型的意義與限制

| 模型 | 結果 | 意義 |
|------|------|------|
| Anti-MPO Ab 轉移至正常小鼠 | Pauci-immune GN，C5aR 依賴 | **直接證明** MPO-ANCA 致病性 |
| Spleen cells 轉移至 SCID 小鼠 | 更嚴重 GN + 全身性血管炎 | T cell 免疫可能有額外貢獻 |
| PR3 小鼠模型 | 極難成功 | PR3 在人鼠之間結構差異大 |
| Humanized 小鼠 + human anti-PR3 Ab | 產生血管炎 | 支持 PR3-ANCA 致病性，問題在物種差異而非抗體無效 |

### 十、完整機轉總覽

```
遺傳風險（HLA-DP, SERPINA1...）+ 環境暴露（矽塵、S. aureus）
                        ↓
           B cell 自體耐受破壞 → ANCA 產生
                        ↓
    炎症刺激（TNF, G-CSF, LPS, C5a）→ Neutrophil Priming
                        ↓
           MPO/PR3 轉位至細胞膜表面
                        ↓
     ANCA Fab（結合MPO/PR3）+ Fc（結合FcγRIIIb）
                        ↓
        PI3K/Rac2/p38 MAPK 訊號串聯
              ┌─────────────────────────┐
              ↓                         ↓
    NADPH oxidase 活化            顆粒胞吐（Degranulation）
    O₂⁻ → H₂O₂ → HOCl（MPO）     MPO、PR3、elastase 釋出
              └────────────┬────────────┘
                           ↓
           Mac-1 上調 → 緊貼內皮 → Frustrated phagocytosis
                           ↓
                      NETs 形成
              ┌────────────┴────────────┐
              ↓                         ↓
        直接血管損傷               ANCA 惡性循環放大

        + 促血栓                  （DC → B cell → 更多ANCA）
              └────────────┬────────────┘
                           ↓
            補體 C5a 正回饋放大（← Avacopan 阻斷點）
                           ↓
         Pauci-immune Necrotizing Vasculitis
         → 腎臟（GN）、肺（alveolar hemorrhage）
         → 耳鼻喉（GPA）等器官損傷
```

---

*資料來源：Kelley's Textbook of Rheumatology, 11th ed., Ch. 90（ANCA-Associated Vasculitis）& Ch. 11（Neutrophils）*
