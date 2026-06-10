# IL-17A 與 IL-17F 機轉差異與 Bimekizumab

## 三句話版本

1. **濃度與部位**：IL-17F 在皮膚濃度遠高於 IL-17A（~30倍），關節則相反；反映兩者的疾病域分工。
2. **功能角色**：IL-17A 驅動急性炎症（效力強），IL-17F 維持慢性炎症持續（chronification）；非冗餘，缺一不可。
3. **補償性上調**：單獨抑制 IL-17A 後，IL-2/STAT5 訊號會**補償性上調 IL-17F**，加上 innate cells（MAIT、γδT、ILC3）持續以 IL-23-independent 方式產生 IL-17F——這是只打 IL-17A 會出現 therapeutic escape 的核心原因。

---

## 一、IL-17F 與 IL-17A 的差異

### 基本結構
- 兩者有 **50% 序列同源性**，都能形成 A/A、F/F、A/F 三種二聚體形式
- 同樣透過 **IL-17RA / IL-17RC** 異二聚體 receptor 發訊，下游走 **Act1 → TRAF6 → NFκB + MAPK**

### Receptor 結合親和力（關鍵差異）
| | IL-17RA | IL-17RC |
|--|---------|---------|
| **IL-17A** | 高親和力 | 中等 |
| **IL-17F** | **100 倍低於 IL-17A** | **與 IL-17A 相當（≥40 倍高於其對 IL-17RA）** |

→ IL-17F 主要透過 **IL-17RC** 發揮作用，偏好 RC 高度表現的組織（皮膚）

### 組織分布與濃度
| | 皮膚 | 滑膜/滑液 |
|--|------|-----------|
| 濃度關係 | **IL-17F 高出 IL-17A 約 30 倍**（psoriatic lesion） | IL-17A 蛋白高出 IL-17F **37.4 倍** |
| mRNA 比 | IL-17F 2.7× > IL-17A | IL-17A 17.3× > IL-17F |

→ **皮膚是 IL-17F 的主戰場；關節以 IL-17A 為主**

### 功能角色分工
- **IL-17A**：效力更強，驅動**急性炎症**，關節骨侵蝕的主要 effector
- **IL-17F**：效力較弱，但驅動**慢性炎症的持續（chronification）**；較高 IL-17F 表現與**更強的細胞增殖**相關
- 兩者功能**非冗餘（non-redundant）**，各自貢獻獨立的炎症路徑

---

## 二、調控機制差異：STAT5/IL-2 的相反效應

> Cole et al., JACI 2023

**STAT5 / IL-2 訊號對 IL-17A 和 IL-17F 具有相反的調控方向：**
- IL-2 → STAT5 活化 → **IL-17A 下調、IL-17F 上調**
- Methylprednisolone 等抗炎藥物也可改變兩者的平衡

**臨床意涵：**
- 免疫調節劑可能在降低 IL-17A 的同時**意外放大 IL-17F**
- 單獨抑制 IL-17A 後，IL-17F 可能透過此機轉補償性上升 → **therapeutic escape 的分子基礎**

---

## 三、IL-23-Independent 的 IL-17F 產生

IL-17F 的 IL-23 獨立性甚至比 IL-17A 更強，由 innate/innate-like cells 主導：

| 細胞 | 驅動訊號（不需 IL-23） | 訊號路徑 |
|------|----------------------|---------|
| **MAIT cells** | IL-12 + IL-18 協同 | IL-12→STAT4；IL-18→NFκB |
| **γδ T cells** | IL-7 或 IL-12 + IL-18 | — |
| **ILC3** | IL-1β + IL-2 | — |
| **NKT17 cells** | TGF-β + IL-1β | — |

**分子機轉：** innate cells 中 **TYK2 和 STAT3 表現量低** → IL-23 無法有效傳訊 → 但 IL-12/IL-18 走不同路徑，可繞過此限制

→ 直接解釋 **anti-IL-23（risankizumab）在 axSpA 無效** 的原因——關節端的 IL-17F 根本不依賴 IL-23

---

## 四、為什麼需要雙重抑制？

### Therapeutic escape 機轉
```
只阻斷 IL-17A
    ↓
IL-17F 持續活化 synoviocyte / keratinocyte
    +
IL-2/STAT5 → IL-17F 補償性上升
    +
innate cells（MAIT、γδT、ILC3）持續產生 IL-17F（IL-23-independent）
    ↓
部分反應 / 二次失效
```

### Bimekizumab 的優勢
1. 同時阻斷 **A/A、F/F、A/F** 三種二聚體形式
2. 阻斷 **IL-24 autocrine feedback loop**（IL-17 → IL-24 → 自體放大炎症）
3. 體外研究：dual inhibition 對 **fibroblast 活化的抑制程度 > 單獨抑制 IL-17A**
4. 完整覆蓋皮膚（IL-17F 主導）和關節（IL-17A 主導）兩個疾病域

---

## 五、Bimekizumab 臨床試驗數據

### PsA（BE OPTIMAL / BE COMPLETE）
| 指標 | 結果（Week 16） |
|------|----------------|
| ACR50 | ~44%（vs adalimumab 46%） |
| PASI90（合併乾癬） | **>70%** |
| PASI100（完全清除） | **>50%** |
| MDA（最小疾病活動度） | 優於安慰劑 |
| 結構進展抑制 | Week 16 即可見 |
| 療效持久性 | 維持至 **3 年**（Phase II 數據） |

### axSpA
| 指標 | 結果 |
|------|------|
| nr-axSpA ASAS40 | 47.7% |
| r-axSpA（AS）ASAS40 | 44.8% |
| Enthesitis、dactylitis | 顯著改善 |

### 安全性
- 常見：鼻咽炎、上呼吸道感染、**口腔念珠菌感染**（IL-17 雙重抑制削弱抗黴菌功能）
- **不增加 IBD 風險**
- 整體安全性與 IL-17A 單一抑制劑相當

---

## 六、整合機轉總圖

```
IL-23（initiator）← 腸道 dysbiosis、DC
    ↓
Th17 → IL-17A（急性炎症，關節、骨侵蝕）
       IL-17F（慢性維持，皮膚增生）
               ↑ STAT5/IL-2 可上調
               ↑ IL-23-independent
IL-12/IL-18 → MAIT、γδT → IL-17A + IL-17F（持續）
IL-1β/IL-2  → ILC3 ────────────────────↗

單獨阻斷 IL-17A → IL-17F escape（STAT5 補償 + innate production）
雙重阻斷（Bimekizumab）→ 皮膚 + 關節全面抑制
```

---

## 參考文獻

- [PMC10299014 — Pathogenic Role of IL-17F in PsA/SpA](https://pmc.ncbi.nlm.nih.gov/articles/PMC10299014/)
- [PMC10437113 — IL-23-independent IL-17F production](https://pmc.ncbi.nlm.nih.gov/articles/PMC10437113/)
- [PMC12869329 — Dual Inhibition of IL-17A/F in PsA and axSpA](https://pmc.ncbi.nlm.nih.gov/articles/PMC12869329/)
- Cole et al. — Differential Regulation of IL-17A and IL-17F via STAT5. [JACI 2023](https://doi.org/10.1016/j.jaci.2023.03.035)
- BE COMPLETE — Merola et al. [Lancet 2023](https://doi.org/10.1016/S0140-6736(22)02303-0)
- BE OPTIMAL — McInnes et al. [Lancet 2023](https://doi.org/10.1016/S0140-6736(22)02302-9)
