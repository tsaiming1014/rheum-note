# PAH 右心導管(RHC)數值判讀

## 一、血液動力學診斷標準(ESC/ERS 2022)

| 參數 | 標準 |
|---|---|
| mPAP (mean PA pressure) | > 20 mmHg(舊標準 25 mmHg，新版下修) |
| PAWP (pulmonary artery wedge pressure) | ≤ 15 mmHg |
| PVR (pulmonary vascular resistance) | > 2 Wood units |

三者同時符合 → **Pre-capillary PH**(PAH 屬於此類，Group 1)

### 分類邏輯

- mPAP > 20, PAWP ≤ 15, PVR > 2 → **Pre-capillary**(PAH, CTEPH, lung disease-PH)
- mPAP > 20, PAWP > 15, PVR ≤ 2 → **Isolated post-capillary**(左心疾病)
- mPAP > 20, PAWP > 15, PVR > 2 → **Combined pre- + post-capillary**(Cpc-PH)

## 二、其他重要數值

- **CO/CI(cardiac output/index)**：評估右心代償狀態，CI < 2.0-2.2 L/min/m² 預後差
- **RAP(right atrial pressure)**：> 14 mmHg 是不良預後指標之一(REVEAL/COMPERA risk score 常用)
- **SvO2(mixed venous saturation)**：< 60% 反映心輸出不足
- **Vasoreactivity test**(急性血管擴張反應測試，用 NO 或 adenosine/epoprostenol)：mPAP 下降 ≥10 mmHg 且絕對值 <40 mmHg，CO 不變或上升 → positive responder，適合 CCB 治療(僅少數 IPAH 患者適用)

## 三、實際測量操作要點

### mPAP 取平均

- 是連續呼吸週期間的 **time-averaged mean**(通常機器會自動積分計算)，而非單純把 3 次讀數加總除以 3
- 理想上應在 **end-expiration**(呼吸容積影響最小的時間點)測量，並取多個心跳週期(通常 3-5 個)的平均值
- 自主呼吸病人因胸內壓變化會使數值上下擺動，end-expiratory 測量可減少此干擾

### PCWP 取其低值

這是實務上的經驗法則，原因是**誤差方向不對稱**——PCWP 測量常見的技術性誤差幾乎都會讓數值「偏高」而非偏低：

- Catheter 位置不良、over-wedge(卡進太小的血管分支，反映局部而非左心房壓力)
- 未確實達到真正 wedge 位置，trace 仍混有 PA pressure 波形殘留
- 呼吸造成胸內壓變化疊加

也就是說，「偏高的讀數比較可能是錯的」，所以臨床上多次測量若數值分散，寧可信較低者。**但前提是每次測量的 waveform 都要確認品質**(clear a-wave/v-wave, plateau，而非 PA-like 波形殘留)才能這樣取。

### 實務建議

- 確認每次 wedge trace 波形品質(不是每次都可信，要看 waveform)
- 都在 end-expiration 讀值
- mPAP：機器積分平均或多心跳週期平均
- PCWP：波形品質皆佳的情況下，取較低值較保守也較符合真實左心房壓力

### PVR 測量與計算

**基本公式**

PVR (Wood units, WU) = (mPAP − PAWP) / CO

換算：1 Wood unit = 80 dynes·s·cm⁻⁵

**CO(心輸出量)測量方式的選擇會直接影響 PVR 準確度**

- **Thermodilution(熱稀釋法)**：臨床最常用，快速方便，但在下列情況會失準（通常會低估 CO，進而高估 PVR）：
  - 嚴重三尖瓣逆流(significant TR)——indicator 會提早循環回右心，稀釋曲線失真
  - 心房顫動或其他心律不整——心跳週期不規則導致重複測量變異大
  - Intracardiac shunt(如 ASD/VSD)——稀釋曲線因分流而異常
- **Direct Fick method**：CO = VO2 / [(動脈血氧含量 − 混合靜脈血氧含量) × 10]，需要實際量測耗氧量(VO2)，準確度較高，是上述情況(嚴重TR、AFib、shunt)的建議替代方案
- **Assumed Fick**：以年齡、性別、體表面積估算 VO2 取代實測值，操作簡便但誤差較大，不建議用於診斷邊緣值(borderline)的個案

**與 PVR 相關的其他衍生指標**

| 指標 | 公式 | 臨床意義 |
|---|---|---|
| TPG (transpulmonary gradient) | mPAP − PAWP | PVR 公式的分子，未校正 CO，單獨使用診斷力較弱 |
| DPG (diastolic pressure gradient) | Diastolic PAP − PAWP | 用於區分 post-capillary PH 中是否合併肺血管本身病變；DPG ≥ 7 mmHg 提示合併 pre-capillary 成分(即便 PVR 未達2 WU) |

### PVR 數值判讀與風險分級

診斷切點(PVR > 2 WU，合併 mPAP > 20 mmHg、PAWP ≤ 15 mmHg)見本篇第一節。除診斷外，PVR 也是 ESC/ERS 2022 三分層風險評估表的參數之一，用於嚴重度分級與預後判斷：

| PVR | 風險分層 |
|---|---|
| < 4 WU | Low risk |
| 4–8 WU | Intermediate risk |
| > 8 WU | High risk |

- PVR 越高代表肺血管重塑(remodeling)程度越嚴重、right ventricle afterload 越重，與預後成反比，也是 REVEAL Lite 2 / COMPERA 2.0 risk score 常納入的變項之一
- **動態追蹤**：治療後 PVR 下降是治療反應良好的指標之一，常與 CI 上升、RAP 下降一起解讀
- Vasoreactivity test 陽性者(見第二節)通常合併 PVR 相對較低、CI 較好，是 CCB 治療候選

**CTD-PAH 臨床應用提醒**

SLE-PAH 等 CTD-PAH 病人常合併心律不整或瓣膜疾病(見本篇第四節)，若同時有 AFib 或明顯 TR，thermodilution CO 可能不可靠，此時 PVR 判讀應優先考慮以 direct Fick 法重新計算，避免因高估 PVR 而誤判疾病嚴重度或治療反應。

## 四、CTD-PAH(尤其 SLE)臨床應用重點

CTD-PAH 常見 **Cpc-PH 混合型**，因為可能合併 diastolic dysfunction 或 valvular disease，判讀時要特別注意 PAWP 是否確實可靠(建議量測 end-expiratory，必要時做 fluid challenge 或 exercise RHC 排除 occult diastolic dysfunction)。

---

待補充項目(可後續加入)：
- REVEAL Lite 2 / COMPERA 2.0 risk stratification 完整表格
- Catheter whip 造成 systolic PA pressure 假性升高的判讀重點(SLE-PAH 合併心律不整時易誤判)
