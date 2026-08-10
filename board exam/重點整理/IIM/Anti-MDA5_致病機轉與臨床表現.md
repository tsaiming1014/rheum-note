# Anti-MDA5 抗體與 Interstitial Lung Disease/Dermatomyositis 的致病機轉

## 1. MDA5 本身是什麼

MDA5（melanoma differentiation-associated protein 5，又稱 IFIH1）不是抗體標的的「無關蛋白」，而是先天免疫系統中 **RIG-I-like receptor 家族的胞漿 dsRNA 感應器**，與 SLE pathogenesis 中討論的 cytosolic sensor 是同一條路徑（見 [單核吞噬系統與DC分型_pDC與SLE干擾素路徑.md](../Immunology/單核吞噬系統與DC分型_pDC與SLE干擾素路徑.md) 第 3-3 節）。

正常功能：

```
病毒 dsRNA（複製中間產物）→ MDA5 偵測 → MAVS（粒線體）
     → TBK1/IKKε → IRF3/IRF7 磷酸化入核 → type I IFN 大量轉錄
```

在 anti-MDA5 疾病中，這個感應器蛋白自己變成了自體抗原。

## 2. 致病機轉的三個環節

### 2-1. 病毒觸發、感應器過度活化

腸病毒、流感等呼吸道/腸胃道病毒感染被認為是誘發因子；COVID-19 感染與（少數案例）疫苗接種後也有 anti-MDA5 myositis 的報告，機轉推測與 ACE2 受體媒介病毒進入肌肉細胞、誘發先天與後天免疫活化有關。病毒感染活化 MDA5-MAVS-IRF3/7 路徑，造成局部與全身**持續性 type I IFN 大量產生**，形成類似 interferonopathy 的狀態——這與 SLE 的「IFN signature」是同一類分子現象，只是誘發源與標的器官不同。

### 2-2. 自體抗原暴露、打破耐受性

病毒感染或組織損傷修復過程中，皮膚、肌肉、肺泡上皮細胞可能**過度表現 MDA5 蛋白**，提供大量自身抗原給免疫系統辨識，進而產生 anti-MDA5 自體抗體。這個「受損/再生組織過度表現目標抗原 → 打破耐受 → 產生特異性自體抗體」的模式，與 anti-Mi-2（UV 誘導再生肌肉表現）、anti-TIF1-γ（腫瘤/再生肌肉交叉反應）遵循類似的典範，是肌肉炎自體抗體致病機轉的共同主軸（見 [IIM_Myositis致病機轉完整解析.md](IIM_Myositis致病機轉完整解析.md) 第四節各 MSA 比較表）。

### 2-3. 持續 type I IFN 驅動血管病變（而非典型肌肉發炎）

與其他 myositis-specific antibody 不同，anti-MDA5 疾病的核心病理不是 T 細胞浸潤破壞肌纖維，而是**廣泛的血管內皮損傷（vasculopathy）**，這解釋了它獨特的臨床表現：

| 表現 | 機轉關聯 |
|---|---|
| **Clinically amyopathic DM (CADM)** | 肌肉症狀往往輕微甚至缺乏，因為主要病理是 innate immune/vasculopathic，不是典型肌纖維發炎壞死 |
| **Palmar papules（inverse Gottron papules）、皮膚潰瘍、指端缺血** | Type I IFN 驅動的皮膚微血管病變/缺血性損傷 |
| **Rapidly progressive ILD (RP-ILD)** | 肺泡上皮/血管的 IFN 驅動損傷，病理常見 diffuse alveolar damage (DAD)；亞洲族群發生率與死亡率特別高，是 anti-MDA5 最致命的表現 |
| **高 ferritin** | 反映巨噬細胞活化，是預後不良（尤其預測 RP-ILD）的重要指標 |

## 3. 與 SLE type I IFN pathway 的對照

| | SLE | Anti-MDA5 疾病 |
|---|---|---|
| 主要感應器 | TLR7/9（pDC, MyD88-IRF7）為主，cGAS-STING/RIG-I-MDA5 為輔 | RIG-I-like receptor（MDA5-MAVS-IRF3/7）本身 |
| 自體抗原來源 | apoptotic debris 中的 nuclear DNA/RNA（Ro/La/Sm/RNP） | 感應器蛋白 MDA5 本身（受損上皮/肌肉過度表現） |
| 標的器官 | 腎臟、皮膚、關節、血液系統 | 肺（RP-ILD）、皮膚（血管病變）、肌肉（常較輕微） |
| 共同主軸 | 持續 type I IFN production → 全身/局部 IFN signature → 免疫放大迴路 | 同左，但收斂在血管內皮損傷而非免疫複合體腎炎 |

## 4. 治療意義

正因機轉核心是 type I IFN 下游訊號放大，**JAK inhibitor（如 tofacitinib）**已被用於治療 anti-MDA5 associated RP-ILD，機轉是阻斷 IFNAR 下游 JAK-STAT 訊號傳遞——與 SLE 使用 anifrolumab（直接阻斷 IFNAR1）的邏輯是同一個「type I IFN 軸」的不同下游阻斷點。

## 參考資料

- *Kelly's Textbook of Rheumatology* Ch086（Inflammatory Diseases of Muscle and Other Myopathies）
- 機轉延續 *Janeway's Immunobiology* 第10版 Ch03 RIG-I/MDA5-MAVS pathway 討論，見 [單核吞噬系統與DC分型_pDC與SLE干擾素路徑.md](../Immunology/單核吞噬系統與DC分型_pDC與SLE干擾素路徑.md)
