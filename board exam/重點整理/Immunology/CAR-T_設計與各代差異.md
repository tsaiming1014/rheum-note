# CAR-T 設計與各代 CAR 差異

> 對應題庫：2026免疫講習班第13、14題

## 1. CAR 基本結構

Chimeric Antigen Receptor（嵌合抗原受體）是人工設計的融合蛋白，由外而內包含：

- **胞外辨識域**：scFv（single-chain variable fragment，來自單株抗體的可變區），負責辨識腫瘤表面抗原，**不需經過HLA呈現**（這是CAR-T相對於TCR-T最大的優勢，可辨識完整蛋白質表面抗原，不受HLA型別限制）
- **鉸鏈區與跨膜區（hinge/transmembrane domain）**
- **胞內訊息域**：決定活化訊號強度與細胞命運

![CAR-T development](../images/CAR-T%20development.png)

## 2. 各代 CAR 差異（核心考點）

| 世代 | 胞內組成 | 訊號 | 特色 |
|---|---|---|---|
| **第一代** | scFv + CD3zeta | 僅訊號一（活化） | T細胞活化但增殖/存活能力弱，臨床效果有限 |
| **第二代** | scFv + CD28**或**4-1BB + CD3zeta | 訊號一＋訊號二（共刺激） | 目前臨床主流（如tisagenlecleucel用4-1BB、axicabtagene用CD28），大幅提升增殖與持續力 |
| **第三代** | scFv + CD28**＋**4-1BB + CD3zeta | 訊號一＋雙重共刺激 | 理論上活性更強，但臨床證據尚未明確優於第二代 |
| **第四代（TRUCK）** | 第二/三代基礎上再加入誘導性cytokine（如IL-12）分泌基因 | 額外分泌cytokine | 增強腫瘤微環境重塑能力，尤其用於實體瘤，但也可能加重全身性副作用 |

**CD28 vs. 4-1BB 共刺激域的差異**：CD28訊號活化快、效應強但T細胞較快耗竭；4-1BB訊號活化較慢但可延長T細胞存續時間、降低耗竭速度，兩者是臨床設計CAR-T時的重要取捨。

## 3. CAR-T 相關設計策略的分類（第14題相關）

CAR-T最主要的副作用是**CRS（cytokine release syndrome，細胞激素釋放症候群）**與**ICANS（immune effector cell-associated neurotoxicity syndrome，神經毒性）**。CAR-T的設計改良大致可分成兩個不同方向，**目的不同，不該混為一談**：

**(A) 真正用於「緩解/控制副作用」的安全機制**

| 設計 | 機轉 | 目的 |
|---|---|---|
| **iCaspase9（誘導性Caspase9）安全開關** | 給予二聚化藥物（如AP1903/rimiducid）後誘導CAR-T細胞快速凋亡 | CRS/神經毒性發生時可迅速「關閉」治療，屬於**自殺基因（suicide gene）**策略，是本題唯一真正以「降低副作用」為設計目的的選項 |
| （同類延伸，非本題選項）truncated EGFR/CD20 tag | 表現可被cetuximab/rituximab辨識的標記，用藥物即可清除CAR-T細胞 | 同樣屬於安全開關概念 |

**(B) 提升專一性或效果、但目的不是「降低副作用」的設計**

| 設計 | 機轉 | 實際目的 |
|---|---|---|
| **Syn-Notch / Bispecific（雙特異性）** | 需同時辨識兩種抗原才活化 | 提高腫瘤專一性、**間接**降低on-target/off-tumor毒性，但主要目的是「精準辨識」而非「副作用發生後的控制」 |
| **NKG2D CAR** | 以NKG2D天然受體取代scFv，辨識多種腫瘤壓力配體（如MICA/MICB、ULBP） | **拓寬辨識範圍、增強效果**，與副作用緩解無關 |
| **TRUCK** | 額外分泌cytokine強化抗腫瘤能力 | **增強效果**，反而可能**加重**全身性發炎反應，與副作用緩解方向相反 |

> 第14題問的是「可**緩解**CAR-T副作用之CAR設計」，四個選項中只有 **iCaspase9** 是以「發生副作用時能主動終止治療」為設計目的，其餘三者都是「提升辨識度/效果」的設計，不屬於同一類別，故答案為 **A) iCaspase9**。

## 4. 速記

- CAR-T 辨識腫瘤抗原**不需HLA呈現**，這是與TCR-T最根本的差異
- 世代差異＝**共刺激域數量**（0→1→2個），第四代加cytokine payload
- CRS/ICANS是CAR-T最主要副作用，**iCaspase9安全開關**是經典的緩解設計
- Syn-Notch/雙特異性提升專一性；NKG2D CAR拓寬辨識範圍；TRUCK增強效果但可能加重副作用
