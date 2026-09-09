# IGRA (Interferon-Gamma Release Assay)

## 原理概論

IGRA 是偵測宿主 T 細胞對 *M. tuberculosis* 特異抗原（ESAT-6、CFP-10，QuantiFERON 另加 TB7.7）反應的檢驗，曾感染或潛伏結核的個體，T 細胞會被這些抗原刺激而分泌 IFN-γ。目前臨床常用兩種平台，偵測方式不同但抗原基礎相同：

- **QuantiFERON-TB Gold（ELISA method）**
- **T-SPOT.TB（ELISPOT method）**

## QuantiFERON-TB Gold test（ELISA method）— 胸腔部

- Whole blood 直接以 *M. tuberculosis* 蛋白抗原刺激（抗原已包被於採血管內，採血後即可培養）。
- 培養後離心取上清液（血清），以 ELISA 定量上清液中 IFN-γ 濃度（吸光值）。

## T-SPOT.TB（ELISPOT method）— 免疫科

- 周邊血以密度梯度離心分離出 PBMC（周邊血單核細胞）。
- 將固定數量的細胞以 *M. tuberculosis* 蛋白抗原刺激 24 小時；有反應的抗原特異性細胞分泌 IFN-γ，結合於 plate 上預先包被的 anti-IFN-γ 抗體。
- 移除細胞後，plate 上的 spot 數目即代表樣本中 IFN-γ+ 細胞（抗原反應性 T 細胞）的數量。

## 兩者比較

| | QuantiFERON | T-SPOT |
|---|---|---|
| 抗原 | ESAT-6, CFP-10, TB7.7 | ESAT-6, CFP-10 |
| 採血管 | 抗原採血管 | Lithium Hepa 綠頭管（一般採血管即可） |
| 檢體處理 | 離心後取血清 | 定量調整細胞濃度（PBMC） |
| 品管數量 | 每批檢體 1 組品管 | 每個檢體 1 組品管 |
| 分析方法 | ELISA 讀取吸光值 | 顯微鏡／放大鏡肉眼判讀（可電腦擷取影像輔助） |

## 設計理念比較

兩者抗原皆為 ESAT-6 與 CFP-10；差異主要在於**操作流程的設計取向**：

- **QuantiFERON**：抗原直接包被於採血管內，可即刻培養，培養後離心取血清即可檢測，整體流程簡單、省人力，儀器判讀（ELISA 吸光值），發報告速度快；品管只需每批 1 組。
- **T-SPOT**：以一般綠頭管採血即可，但需另外分離 PBMC 並調整細胞濃度，確保刺激用的 T 細胞數量足夠，是為了提升準確性而設計；每一檢體都需獨立品管，結果需以顯微鏡或放大鏡人工判讀（可搭配電腦擷取影像），較耗人力與時間。

整體而言，**QuantiFERON 以操作簡便、節省人力、縮短報告時間為優勢；T-SPOT 以精準度為前提**，兩者各有優缺點，實驗室可依醫院量能與需求選擇平台。

## QuantiFERON-TB Gold Plus：結果判讀

| Nil | TB1 − Nil | TB2 − Nil | Mitogen − Nil | 定性結果 | 判讀 |
|---|---|---|---|---|---|
| ≤ 8.0 IU/mL | ≥ 0.35 且 ≥ 25% of Nil | Any | Any | **Positive** | 很可能有 *M. tuberculosis* 感染 |
| ≤ 8.0 IU/mL | Any | ≥ 0.35 IU/mL 且 ≥ 25% of Nil | Any | **Positive** | 很可能有 *M. tuberculosis* 感染 |
| ≤ 8.0 IU/mL | < 0.35 IU/mL 或（≥ 0.35 IU/mL 且 < 25% of Nil） | < 0.35 IU/mL 或（≥ 0.35 IU/mL 且 < 25% of Nil） | ≥ 0.5 IU/mL | **Negative** | 不太可能有 *M. tuberculosis* 感染 |
| ≤ 8.0 IU/mL | < 0.35 IU/mL 或（≥ 0.35 IU/mL 且 < 25% of Nil） | < 0.35 IU/mL 或（≥ 0.35 IU/mL 且 < 25% of Nil） | < 0.5 IU/mL | **Indeterminate** | 無法判定是否感染 *M. tuberculosis* |
| > 8.0 IU/mL | Any | Any | Any | **Indeterminate** | 無法判定是否感染 *M. tuberculosis* |

> Nil：陰性對照管（未加抗原）之背景 IFN-γ 值；TB1／TB2：分別加入不同抗原組合（詳見下方說明）之刺激管扣除 Nil 後的反應值；Mitogen：陽性對照管（用來確認 T 細胞本身有能力反應）扣除 Nil 後的反應值。
