# Gout 致病機轉完整筆記（Kelly Ch96）

---

## 一、概論：兩步驟致病模型

- Gout = **代謝疾病 + 發炎疾病** 的交集，需兩個過程同時存在：
  1. **尿酸累積（hyperuricemia）** → 達到 MSU 結晶析出閾值
  2. **免疫系統對 MSU 結晶的發炎反應**
- **定義**：血清尿酸 > 6.8 mg/dL = hyperuricemia（以溶解度上限為標準）
- 目前為美國最常見的 inflammatory arthritis

---

## 二、尿酸代謝與生成

### 尿酸生成路徑

```
Ribose-5-P
    ↓ PRPP synthase
PRPP
    ↓ GLN-PRPP amidotransferase（rate-limiting）
Purine biosynthesis → AMP / GMP / IMP
    ↓ catabolism
Hypoxanthine / Xanthine / Guanine
    ↓ Xanthine oxidase（XO）
Uric acid   ← 人類終產物（缺少 uricase）
```

- **Purine salvage**（回收路徑）：HGPRT1 將 hypoxanthine/guanine → IMP/GMP，減少 XO 底物 + 提供 feedback inhibition
- **Fructose** 代謝：消耗 ATP → ADP/AMP 堆積 → 轉化為 uric acid；同時耗盡 Pi，移除 AMP deaminase/5'-nucleotidase 的 feedback inhibition → 尿酸大量生成

### 演化背景
- 人類於 Miocene era 發生 **uricase gene 多次突變 → 失活** → 尿酸成為代謝終產物
- 可能的演化優勢：抗氧化補償（取代 ascorbic acid）、維持血壓（低鹽環境）、神經刺激效應

---

## 三、高尿酸血症的成因

### 分類總覽

| 類別 | 機轉 | 代表疾病/原因 |
|------|------|--------------|
| **Overproduction** | 細胞代謝增加 / 酶異常 | Lesch-Nyhan syndrome（HGPRT1 完全缺乏）、Kelley-Seegmiller syndrome（HGPRT1 部分缺乏）、PRPP synthetase hyperactivity |
| **Overproduction（secondary）** | 細胞快速分裂/崩解 | 血液腫瘤（白血病、淋巴瘤）、tumor lysis syndrome、溶血性貧血、psoriasis |
| **Underexcretion（primary）** | 腎小管轉運子缺陷 | ABCG2 loss-of-function（最多佔白人痛風 10%）、URAT1 gain-of-function |
| **Underexcretion（secondary）** | 腎功能↓ / 藥物 / 代謝 | CKD、利尿劑（thiazide/loop）、low-dose aspirin、cyclosporine、lactic acidosis、ketoacidosis |
| **Mixed** | 兩者皆有 | MI、心衰竭、敗血症 |

### 腎臟尿酸處理機轉

**近端小管 – 再吸收（促進高尿酸）：**

- **URAT1**（SLC22A12）：最重要；以 Cl⁻/有機酸（lactate, pyrazinoate）為 counterion 將尿酸從管腔移入細胞
- OAT4（SLC22A11）
- OAT10（SLC22A13）：以 lactate, nicotinate 為 counterion
- GLUT9（SLC2A9）：將尿酸從細胞移至間質（basolateral）

**近端小管 – 分泌（促進排泄）：**

- ABCG2（apical，ATP-dependent）：腸道亦有 → loss-of-function → 腸道 + 腎臟雙重排泄障礙
- NPT1、NPT4（Na⁺ cotransporter）
- MRP4（ABCC4，ATP-dependent）
- OAT1、OAT3（basolateral）

### 常見升高尿酸的藥物

| 藥物 | 機轉 |
|------|------|
| Thiazide/Loop diuretics | 容積缺乏 → ↑ reabsorption；直接抑制 NPT4、MRP4 |
| Low-dose aspirin | 競爭 URAT1/OAT10 分泌 |
| Nicotinic acid | OAT10 counterion → 促進再吸收 |
| Pyrazinamide（TB藥） | pyrazinoate → 促 URAT1/OAT10 再吸收 |
| Cyclosporine | 腎小管間質損傷 + 減少分泌 |
| Beta-blockers | 腎灌流↓ |

---

## 四、MSU 結晶形成：從高尿酸到痛風

- 尿酸在生理 pH 7.4 下幾乎以 **urate** 形式存在（98%）
- 濃度 > **6.8 mg/dL** 超過溶解度 → 析出 **needle-shaped MSU crystals**
- **好發第一蹠趾關節（MTP1）**原因：
  - 溫度低（末梢）→ 尿酸溶解度更低
  - 循環末端 → 相對酸性 → 促進析出
- **軟骨沉積→脫落觸發 flare**（crystal shedding model）：
  - 創傷或 urate-lowering therapy 啟動 → 原先沉積在軟骨的晶體脫落 → 進入關節腔 → 急性炎症
  - 說明為何 ULT 初期反而可能誘發 flare

### 結晶形成的調節因素

- pH↓、溫度↓ → 更易析出
- **Lubricin**（滑液細胞產物）：抑制 MSU 結晶形成；缺乏時即便無 hyperuricemia 亦可能發病
- **IgG/IgM 抗體**：協助 MSU monomer 堆疊 → 促進結晶成核

---

## 五、急性 Gout Flare 的發炎機轉

### 整體流程

```
MSU crystals 進入關節腔
    ↓
① Complement 活化（alternative + classical pathway）→ C5a（chemoattractant）
② Synovial macrophage 活化（Signal 1 + Signal 2）→ IL-1β, TNF, IL-6, IL-8
③ Synovial fibroblast、mast cell 活化 → 輔助早期發炎
    ↓
Vascular endothelium 活化 → adhesion molecule（selectin, ICAM）↑
Neutrophil 從血液遷移 → 進入關節腔
    ↓
④ Neutrophil 吞噬 MSU → 自我放大發炎循環（IL-8, LTB4, ROS, protease）
```

![Fig 96.15 尿酸結晶誘發急性發炎初期](../images/Fig%2096.15.png)

*Fig. 96.15（Kelly Ch96）— 尿酸結晶誘發的急性發炎初期。自發性析出或既有晶體庫釋放的「新鮮」MSU 結晶 → ① 直接活化補體（產生 C5a、膜攻擊複合體）② 活化滑膜常駐細胞（macrophage、fibroblast、mast cell）→ 釋放 IL-1、組織胺等介質 → 活化血管內皮（上調黏附分子）→ 嗜中性球大量湧入並被晶體進一步活化，形成放大循環。*

### NLRP3 Inflammasome 雙訊號模型（核心！）

![Fig 96.14 MSU 活化 NLRP3 inflammasome 雙訊號模型](../images/Fig%2096.14.png)

*Fig. 96.14（Kelly Ch96）— MSU 結晶活化 NLRP3 inflammasome 的雙訊號模型。**Signal 1**：MSU → TLR2/4 → MyD88 → NF-κB → 合成 pro-IL-1β 與 inactive gasdermin D。**Signal 2**：MSU 被吞噬 → phagolysosome 破裂、K⁺ 外流、NADPH oxidase → ROS → 組裝 NLRP3 inflammasome → caspase-1 切割 pro-IL-1β 成 active IL-1β 並分泌；同時活化 gasdermin D 形成膜孔 → IL-1β 釋出 + pyroptosis。*

| | Signal 1 | Signal 2 |
|---|---|---|
| **觸發** | MSU 晶體 → TLR2 / TLR4 活化 → MyD88 → NF-κB | MSU 晶體被吞噬 → phagolysosome 破裂 |
| **作用** | 合成 **pro-IL-1β**、pro-IL-18、pro-IL-33、inactive gasdermin D | 活化 NLRP3 inflammasome |
| **下游** | 提供 inflammasome 作用的底物 | Caspase-1 切割 pro-IL-1β → **active IL-1β** |

**NLRP3 活化機轉（Signal 2 細節）：**

- 吞噬後 phagolysosome 破裂 → MSU 晶體進入 cytosol
- **K⁺ efflux**（低 K⁺ 直接活化 NLRP3）
- **NADPH oxidase 活化 → ROS 生成**
- Cathepsin B 從破裂的 lysosome 釋出
- 三條路徑可能協同作用

**NLRP3 Inflammasome 組成：**

- NLRP3（sensor）+ ASC（adaptor）+ Caspase-1（protease）
- Caspase-1 同時活化 **gasdermin D** → 穿孔 → IL-1β 分泌 + **pyroptosis**

**IL-1β 的中心角色：**

- → 自分泌/旁分泌 → 二級分泌 TNF、IL-6
- → 血管內皮活化 → 白血球浸潤
- IL-1β 拮抗劑（anakinra、canakinumab）可有效控制痛風 flare

### Neutrophil 的發炎放大

- 被趨化至關節腔後，遇 MSU 晶體：
  - 釋放 **IL-1β、IL-8、LTB4、S100A8/A9、CCL4** → 招募更多嗜中性球
  - **frustrated phagocytosis**（晶體太大無法完全吞）→ 胞外 degranulation → MMP-8、ROS → 組織損傷
  - **NETosis**：釋放 NETs（DNA + neutrophil elastase）→ 早期促發炎；後期：NET scaffold 降解細胞激素 → 協助消炎

---

## 六、急性 Flare 的自我緩解機轉

- **晶體表面蛋白覆蓋**：apolipoprotein B/E 包覆 MSU → 抑制促炎活性
- **ACTH 分泌**：壓力反應 → glucocorticoid + 直接結合 MSH receptor → 抗炎
- **PGD2 / 15d-PGJ2 累積**：活化 PPARγ 和 AMPK → 抑制 IL-1β、IL-6、TNF 分泌
- **M2 巨噬細胞浸潤**：清除凋亡嗜中性球 + MSU 晶體 → 分泌 TGF-β → 抗炎
- **IL-10 上調、resolvin/lipoxin 生成**
- NETs 的雙重角色：早期促炎 → 後期 NE 降解細胞激素 → 消炎；最終由 macrophage 清除 NETs

---

## 七、慢性 Tophaceous Gout

### Tophus 結構（三層）

| 區域 | 組成 | 功能 |
|------|------|------|
| **Central zone** | MSU 晶體核心 | 持續炎症來源 |
| **Corona zone** | Macrophage、多核巨細胞、plasma cells、mast cells | 生物活性區；超音波顯示低回音環 |
| **Fibrovascular zone** | 結締組織、T cells、B cells、遷移中 macrophage | 包裹 + 持續招募免疫細胞 |

### Tophus 造成骨骼破壞機轉

- Macrophage 分泌 **IL-1β、TNF、IL-6、IL-17、MMP-2/9、M-CSF**
  - M-CSF → osteoclast progenitor → **osteoclastogenesis**
  - IL-1β → 抑制 osteoblast 存活
- Tophus T cells → **RANK-L** → osteoclast 活化 → 骨侵蝕
- 軟骨表面 MSU → 軟骨細胞活性↓、降解酶↑ → 軟骨損傷

---

## 八、Soluble Urate 的全身效應（無 gout 症狀亦存在）

| 效應 | 機轉 |
|------|------|
| **高血壓** | 腎微血管損傷 → renin/COX-2↑、NO synthase↓ |
| **腎臟損傷** | 血管平滑肌增生、上皮細胞間質化（EMT）→ renal fibrosis |
| **Trained innate immunity** | 尿酸誘導 macrophage epigenetic 重程式化 → 對 MSU 或其他刺激的發炎反應更強烈 |
| **代謝症候群** | 細胞內尿酸 → 抑制 **AMPK** → 促進脂肪肝、高血脂、胰島素阻抗；同時活化 fructokinase → feed-forward 尿酸生成 |
| **心血管風險** | 動脈硬化促進；Gout flare 後 120 天 MI 風險加倍 |

---

## 九、總整理：Gout 致病關鍵分子

| 分子 | 角色 |
|------|------|
| Xanthine oxidase（XO） | 尿酸生成的最後酶 → allopurinol/febuxostat 靶點 |
| URAT1 | 最重要的腎小管尿酸再吸收轉運子 → probenecid/lesinurad 靶點 |
| ABCG2 | 腎臟＋腸道分泌尿酸 → loss-of-function → hyperuricemia |
| NLRP3 inflammasome | MSU 誘發 IL-1β 的核心機制 |
| IL-1β | 急性 flare 最關鍵細胞激素 |
| Caspase-1 | 切割 pro-IL-1β → active form |
| Gasdermin D | IL-1β 分泌 + pyroptosis |
| LTB4、IL-8（CXCL8） | Neutrophil 招募的關鍵趨化因子 |
| RANKL | Tophus 誘發骨侵蝕的關鍵訊號 |
| TGF-β（M2 macrophage） | Flare 緩解機轉 |
| 15d-PGJ2 / PPARγ | 自發性 flare 緩解 |
