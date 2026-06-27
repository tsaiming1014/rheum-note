# IL-17A 與 IL-17F 機轉差異與 Bimekizumab

![IL-17 家族成員與其治療標的](../../images/IL17%20target.png)

## 三句話版本

1. **濃度與部位**：IL-17F 在皮膚濃度遠高於 IL-17A（~30倍），關節則相反；反映兩者的疾病域分工。
2. **功能角色**：IL-17A 驅動急性炎症（效力強），IL-17F 維持慢性炎症持續（chronification）；非冗餘，缺一不可。
3. **兩條 therapeutic escape**：單抑 IL-17A 後，(i) IL-2/STAT5 補償性上調 IL-17F；(ii) IL-24 autocrine loop 斷裂，解除對 IL-17F/GM-CSF 的壓制；再加上 innate cells（MAIT、γδT、ILC3）以 IL-23-independent 方式持續產生 IL-17F——這是只打 IL-17A 會二次失效的核心原因。

---

## IL-17 家族總覽（背景知識）

IL-17 家族共 6 個成員，但真正促發炎、與風濕病最相關的是 **IL-17A 與 IL-17F**（本筆記主軸）；其餘成員角色差異很大。

| 成員 | 受體 | 主要來源 | 功能大概 |
|------|------|---------|---------|
| **IL-17A** | IL-17RA/RC | Th17、Tc17、γδT、ILC3、MAIT、NKT | 最強效促發炎；抗胞外菌/黴菌；驅動自體免疫（PsO、PsA、axSpA） |
| **IL-17F** | IL-17RA/RC、RC/RC | 同 IL-17A | 與 A 高度重疊但效力較弱；黏膜防禦；慢性發炎維持 |
| **IL-17B** | IL-17RB | 上皮、軟骨、神經 | **功能仍不明確**；可能促發炎、與某些腫瘤相關 |
| **IL-17C** | IL-17RA/RE | 上皮細胞 | 上皮**自分泌**式宿主防禦（抗菌）；參與 psoriasis、IBD，角色類似 IL-17A |
| **IL-17D** | **受體未明** | 較廣泛 | 研究最少；可能調節免疫監視、抗病毒/抗腫瘤 |
| **IL-17E（= IL-25）** | IL-17RA/RB | 上皮、mast cell、嗜酸性球 | **方向相反**——驅動 **Th2 反應**（誘導 IL-4/5/13），與過敏、氣喘、寄生蟲防禦相關，且**會抑制 Th17 分化** |

重點：

- **IL-17A / IL-17F** 是促發炎主角 → secukinumab、ixekizumab、bimekizumab 的標的。
- **IL-17C** 角色最像 A/F（上皮防禦 + 促自體免疫）。
- **IL-17E（IL-25）是異類**——屬 Th2/過敏軸，方向與 IL-17A 相反，甚至壓制 Th17；IL-17B、D 研究少、功能未定。

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

補充：IL-17F 還可走 **IL-17RC : IL-17RC homodimer**，繞過 IL-17RA。由於 IL-17RC 缺乏 **CBAD domain**，無法招募 A20 等抑制性夥伴 → 訊號失控、難被內生機制關閉。

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

補充：兩者表現有**時序差異**——IL-17A 在 T 細胞活化後**快速**出現、不靠持續刺激維持；IL-17F 則**逐漸累積、後期更高**。對應「IL-17A 主炎症啟動、IL-17F 主慢性化」的分工。

---

## 二、調控機制差異：STAT5/IL-2 的相反效應

**STAT5 / IL-2 訊號對 IL-17A 和 IL-17F 具有相反的調控方向：**

- IL-2 → STAT5 活化 → **IL-17A 下調、IL-17F 上調**
- Methylprednisolone 等抗炎藥物也可改變兩者的平衡

**臨床意涵：**

- 免疫調節劑可能在降低 IL-17A 的同時**意外放大 IL-17F**
- 單獨抑制 IL-17A 後，IL-17F 可能透過此機轉補償性上升 → **therapeutic escape 的分子基礎（之一）**

---

## 三、IL-24 autocrine loop（Figure 2）

Th17 細胞具有一條 **由 IL-17A 自身觸發的 autocrine 負回饋迴路**，平時把 IL-17F、GM-CSF 壓制著。這是「為什麼單抑 IL-17A 會放出 IL-17F」的第二條、且更直接的分子機轉。

![IL-17A blockade 解除 IL-24 抑制、放大 IL-17F 與 GM-CSF](../../images/IL17A%20blockade%20increase%20IL17F%20GMCSF%20expression.png)

**(A) 正常 autocrine 負回饋：**

```
IL-17A → IL-17RA/IL-17RC → NF-κB → 分泌 IL-24
                                       ↓（autocrine）
IL-24 → 抑制 NF-κB → 壓制 IL-17F、GM-CSF
```

→ IL-17A 透過 IL-24 自我「踩剎車」，維持 IL-17F / GM-CSF 在低檔。

**(B) 單獨阻斷 IL-17A 的後果（escape route）：**

```
擋掉 IL-17A → autocrine loop 斷裂 → IL-24 抑制解除
            → NF-κB 重新放行 → IL-17F、GM-CSF 反而上升
```

**臨床意涵：** 這直接解釋 secukinumab / ixekizumab（單抑 IL-17A）長期療效的侷限——你擋掉 IL-17A，卻**解放了 IL-17F 與 GM-CSF**。Bimekizumab 同時擋 IL-17A + IL-17F，把這條逃脫路徑一併堵住。

---

## 四、IL-23-Independent 的 IL-17F 產生

IL-17F 的 IL-23 獨立性甚至比 IL-17A 更強，由 innate/innate-like cells 主導：

| 細胞 | 驅動訊號（不需 IL-23） | 訊號路徑 |
|------|----------------------|---------|
| **MAIT cells** | IL-12 + IL-18 協同 | IL-12→STAT4；IL-18→NFκB |
| **γδ T cells** | IL-7 或 IL-12 + IL-18 | — |
| **ILC3** | IL-1β + IL-2 | — |
| **NKT17 cells** | TGF-β + IL-1β | — |

**分子機轉：** innate cells 中 **TYK2 和 STAT3 表現量低** → IL-23 無法有效傳訊（受體接上但下游打不開）→ 但 IL-12/IL-18 走不同路徑，可繞過此限制

→ 直接解釋 **anti-IL-23（risankizumab）在 axSpA、HS 無效** 的原因——關節端的 IL-17F 根本不依賴 IL-23；IL-23 只負責疾病「啟動」，不負責「維持」。

---

## 五、為什麼需要雙重抑制？

綜合第二~四節，單抑 IL-17A 會經多條 escape 路徑導致 IL-17F 反升而二次失效，故需同時阻斷 IL-17A 與 IL-17F。

### Bimekizumab 的優勢

1. 同時阻斷 **A/A、F/F、A/F** 三種二聚體形式
2. 一併堵住 **IL-24 autocrine escape**（不會因解除 IL-17A 而放大 IL-17F/GM-CSF）
3. 體外研究：dual inhibition 對 **fibroblast 活化的抑制程度 > 單獨抑制 IL-17A**
4. 完整覆蓋皮膚（IL-17F 主導）和關節（IL-17A 主導）兩個疾病域

---

## 六、Bimekizumab 臨床試驗數據

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

## 七、Bimekizumab 與 uveitis 保護

**機轉連結**：acute anterior uveitis（AAU）是 axSpA 最常見的關節外表現，**IL-17A 與 IL-17F 皆參與其病態**，因此 dual IL-17A/F blockade 理論上優於單抑 IL-17A——與本筆記前述機轉一致。

BE MOBILE pooled 分析顯示 **BKZ 對 uveitis 具保護效果**（發生率顯著低於 placebo，有 uveitis 病史的高風險族群差異尤其明顯），長期 EAIR 維持低檔 **1.2/100 PYs**。原文用語為「**may confer protective effects**（可能具保護效果）」，非確定性預防。

![BE MOBILE 1/2 雙盲期 uveitis 發生率：BKZ 顯著低於 placebo](../../images/BMK%20uveitis.png)

對照：ixekizumab（COAST）2.8/100 PYs、placebo 組（certolizumab、etanercept 試驗）7.2～19.3/100 PYs。

---

## 八、整合機轉總圖

```
IL-23（initiator）← 腸道 dysbiosis、DC
    ↓
Th17 → IL-17A（急性炎症，關節、骨侵蝕）
       IL-17F（慢性維持，皮膚增生）
               ↑ STAT5/IL-2 可上調
               ↑ IL-24 autocrine loop 解除後上調
               ↑ IL-23-independent
IL-12/IL-18 → MAIT、γδT → IL-17A + IL-17F（持續）
IL-1β/IL-2  → ILC3 ────────────────────↗

單獨阻斷 IL-17A → IL-17F escape（STAT5 補償 + IL-24 解除 + innate production）
雙重阻斷（Bimekizumab）→ 皮膚 + 關節全面抑制，並降低 uveitis 風險
```

---

## 參考文獻

- Navarro-Compán V, et al. The paradigm of IL-23-independent production of IL-17F and IL-17A and their role in chronic inflammatory diseases. [Front Immunol 2023;14:1191782](https://pmc.ncbi.nlm.nih.gov/articles/PMC10437113/)（Figure 2 來源）
- Brown MA, et al. Low uveitis rates in axSpA treated with bimekizumab（BE MOBILE pooled）. [Ann Rheum Dis 2024;83:1722–1730](https://doi.org/10.1136/ard-2024-225933)
- Cole et al. Differential Regulation of IL-17A and IL-17F via STAT5. [JACI 2023](https://doi.org/10.1016/j.jaci.2023.03.035)
- [PMC10299014 — Pathogenic Role of IL-17F in PsA/SpA](https://pmc.ncbi.nlm.nih.gov/articles/PMC10299014/)
- IL-17 家族總覽表來源：[The IL-17 family in diseases（Nature STTT 2023）](https://www.nature.com/articles/s41392-023-01620-3)、[IL-17 family: cytokines, receptors and signaling（PMC3867811）](https://pmc.ncbi.nlm.nih.gov/articles/PMC3867811/)、[Roles of IL-25（PMC8194343）](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8194343/)
- [PMC12869329 — Dual Inhibition of IL-17A/F in PsA and axSpA](https://pmc.ncbi.nlm.nih.gov/articles/PMC12869329/)
- BE COMPLETE — Merola et al. [Lancet 2023](https://doi.org/10.1016/S0140-6736(22)02303-0)
- BE OPTIMAL — McInnes et al. [Lancet 2023](https://doi.org/10.1016/S0140-6736(22)02302-9)
