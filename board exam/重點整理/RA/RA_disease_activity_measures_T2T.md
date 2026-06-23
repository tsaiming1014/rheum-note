# RA 疾病活躍度評估工具與 Treat-to-Target 重點整理

> 來源：Kelly's Textbook of Rheumatology, Ch033 & Ch073

---

## 一、各工具計算方式

### DAS28-ESR
**公式（需計算機）：**
> 0.56 × √(TJC28) + 0.28 × √(SJC28) + 0.70 × ln(ESR) + 0.014 × Patient Global (0–100)

- 範圍：0–9.4
- 需要：28 關節計數（tender + swollen）+ ESR + 病人整體評估
- 特色：歷史最悠久，用於 TICORA 等關鍵試驗；有 online calculator

### SDAI
**公式（直接加總）：**
> TJC28 + SJC28 + Patient Global (0–10) + Physician Global (0–10) + CRP (mg/dL)

- 範圍：0.1–86
- 需要：28 關節計數 + 雙方整體評估 + **CRP**
- 特色：計算比 DAS28 簡單（直接加）；remission 比 DAS28 更嚴格

### CDAI
**公式（直接加總，不需 lab）：**
> TJC28 + SJC28 + Patient Global (0–10) + Physician Global (0–10)

- 範圍：0–76
- 需要：28 關節計數 + 雙方整體評估；**不需要 lab**
- 特色：門診可即時計算；研究 tocilizumab 等影響 CRP 的藥物時為首選

### RAPID3
**公式（病人自填）：**
> MDHAQ 功能評估 (0–10) + Pain (0–10) + Patient Global (0–10)

- 範圍：0–30
- 需要：**完全病人自填，不需醫師關節計數，不需 lab**
- 特色：適合候診室填寫、遠距醫療；與其他指標相關性較低，受 fibromyalgia 影響最大

---

## 二、分層閾值對照

| | DAS28 | SDAI | CDAI | RAPID3 |
|---|---|---|---|---|
| **範圍** | 0–9.4 | 0–86 | 0–76 | 0–30 |
| **Remission** | < 2.6 | ≤ 3.3 | ≤ 2.8 | ≤ 3 |
| **Low** | 2.6–3.2 | ≤ 11 | ≤ 10 | ≤ 6 |
| **Moderate** | >3.2–5.1 | >11–26 | >10–22 | 7–12 |
| **High** | > 5.1 | > 26 | > 22 | ≥ 13 |

**嚴格度：** Boolean remission > SDAI ≈ CDAI > DAS28

---

## 三、工具比較總覽

| | DAS28-ESR | SDAI | CDAI | RAPID3 |
|---|---|---|---|---|
| 需要 lab | ESR | CRP | **不需要** | **不需要** |
| 需要關節計數 | 是（醫師） | 是（醫師） | 是（醫師） | **不需要** |
| 可即時計算 | 需等 lab | 需等 lab | **可以** | **可以** |
| 計算難度 | 複雜（公式） | 簡單（加總） | 簡單（加總） | 簡單（加總） |
| 門診實用性 | 中 | 中 | **高** | **最高** |
| 主要缺點 | 需 lab；fibromyalgia/obesity 會影響 | 需 CRP | fibromyalgia 影響 | 相關性較低；費用（EHR） |
| 臨床試驗用途 | ✓ 最常用 | ✓ | ✓ | 較少 |

---

## 四、ACR20/50/70（補充對照）

**性質：Response criterion，不是 disease activity measure**

- 測量「相對於 baseline 的改變」，而非「當下所在位置」
- 無法定義 remission/LDA threshold → **不適合 T2T**
- 主要用途：臨床試驗（FDA 核准藥物用）

**計算：** 同時滿足：

1. TJC 及 SJC 都達到 X% 改善（必要）
2. 以下 5 項中至少 3 項達到 X% 改善：Patient global、Physician global、Pain、HAQ、CRP 或 ESR

---

## 五、Treat-to-Target (T2T) 重點（Kelly Ch073）

### 概念
- T2T 是當代 RA 治療最重要的典範轉移
- **最重要的不是選哪個 DMARD，而是確保病人到達 target**

### Target 設定
- **首選：Remission**
- **可接受：Low disease activity**（尤其 comorbidities 多、毒性風險高者）
- 原則：**T2T within reason, not at all costs**
- Kelly 明確指出：*"It is not clear that remission should be the treatment goal for all patients with RA"*——許多病人維持 LDA 也有良好預後

### 關鍵試驗

| 試驗 | 重點 |
|---|---|
| **TICORA** | T2T 組（target = DAS ≤2.4，每月追蹤）vs 常規組；T2T 組 ACR70 達 71% vs 18%；且不須使用 biologics |
| **BeSt** | 積極調整治療（T2T 概念）帶來顯著改善，與初始選擇哪種 DMARD 無關 |

### 臨床執行
- **未達 target 時：每月追蹤，按 algorithm escalate**
- **決策時間點：3 個月未明顯改善、或 6 個月仍未達 target → 換藥或升階**
- **穩定在 target 後：可延長至每 3–6 個月追蹤**

### 門診工具選擇建議
- 候診室：**RAPID3**（病人自填，看診前即可得知狀態）
- 看診當下：**CDAI**（不需 lab，即時計算即時決策）
- 有預排抽血 / 要追蹤客觀炎症：**SDAI 或 DAS28**
- **Kelly 原則：定期測量比選哪個工具更重要**

### Remission 的限制
- 許多臨床 remission 的病人，超音波或 MRI 仍有 active synovitis（TEAR trial：所有臨床 remission 病人的腕關節 MRI 均仍有炎症）
- Boolean remission 比 index-based remission 更嚴格，tapering 後復發風險更低

### Boolean Remission 定義（ACR/EULAR）

任一時間點，以下**4 項全部**滿足即為 Boolean remission：

- Tender joint count（TJC）≤ 1
- Swollen joint count（SJC）≤ 1
- CRP ≤ 1 mg/dL
- Patient global assessment（PGA）達標

**Boolean 1.0（2011 原始版）vs 2.0（2022 修訂版）唯一差別在 PGA 閾值：**

| | TJC | SJC | CRP | PGA（0–10 cm VAS） |
|---|---|---|---|---|
| **Boolean 1.0（2011）** | ≤ 1 | ≤ 1 | ≤ 1 mg/dL | **≤ 1 cm** |
| **Boolean 2.0（2022 修訂）** | ≤ 1 | ≤ 1 | ≤ 1 mg/dL | **≤ 2 cm** |

- **為何修訂？** 1.0 的 PGA ≤1 cm 過於嚴格，許多客觀上已無關節炎（TJC/SJC/CRP 都達標）的病人，只因主觀 PGA 稍高（常受疼痛、疲勞、共病影響）就無法被歸為 remission。2.0 把 PGA 放寬到 ≤2 cm，提升與 SDAI/CDAI remission 的一致性，且**不影響長期 X 光與功能預後**。

### 所有 Remission 定義彙整

| 定義 | TJC | SJC | CRP | PGA | 單一閾值 | 嚴格度/備註 |
|---|---|---|---|---|---|---|
| **Boolean 1.0（2011）** | ≤1 | ≤1 | ≤1 mg/dL | ≤1 cm | — | 最嚴格；PGA 太嚴常落榜 |
| **Boolean 2.0（2022）** | ≤1 | ≤1 | ≤1 mg/dL | ≤2 cm | — | 放寬 PGA，目前建議版本 |
| **SDAI remission** | — | — | — | — | **SDAI ≤ 3.3** | index-based，與 Boolean 相近 |
| **CDAI remission** | — | — | — | — | **CDAI ≤ 2.8** | index-based，不需 lab |
| **DAS28 remission** | — | — | — | — | **DAS28 < 2.6** | 最寬鬆；殘餘關節炎多，**不建議**當 T2T target |

**嚴格度：** Boolean 1.0 > Boolean 2.0 ≈ SDAI ≈ CDAI > DAS28

### 減藥（Tapering）條件

| 有利 tapering 的因素 |
|---|
| 達到 deep（Boolean）remission |
| 在 target 維持穩定 ≥6–12 個月 |
| 超音波無 synovitis 及 Power Doppler 訊號 |
| Seronegative RA |
| 減量（降劑量或延長間隔）而非直接停藥 |
| 至少保留一種 DMARD |
