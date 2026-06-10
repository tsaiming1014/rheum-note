# SLE 致病機轉整理（Kelly Ch80-81）

---

## 一、總覽架構

```
遺傳易感性 + 環境觸發
        ↓
自體核酸（DNA/RNA）異常累積
        ↓
先天免疫活化（TLR → IFN-I 大量產生）
        ↓
適應性免疫失調（T cell / B cell）
        ↓
自體抗體 + 免疫複合體形成
        ↓
組織沉積 → 補體活化 → 器官損傷
（腎、皮膚、CNS、血管…）
```

---

## 二、遺傳因素

### 遺傳貢獻概況

| 比較對象 | 相對風險 (RR) |
|----------|--------------|
| 同卵雙胞胎 | 316× |
| 手足 | 24× |
| 一般人 | 1× |
| 遺傳佔比 | ~44% |

### 重要致病基因分類

| 機轉類別 | 代表基因 | 說明 |
|---------|---------|------|
| **DNA 損傷/修復** | ATG5, RAD51B, DRAM1 | 影響自體核酸清除 |
| **吞噬功能/碎片清除** | C1q, C2, C4, FCGR2A, ITGAM | 補體缺乏 → 凋亡碎片堆積 |
| **TLR 路徑 / IFN-I 誘導** | TLR7, IRF5, IRF7, IRAK1, TNIP1 | 核酸感測 → IFN-α 過量 |
| **細胞質核酸感測** | IFIH1 (MDA5), IKBKE, IRF8 | 胞質 dsRNA/DNA 感測 |
| **IFN-I 反應** | STAT4, TYK2, SOCS1 | IFN 訊號下游 |
| **T/B 細胞活化閾值** | PTPN22, BLK, BANK1, LYN, TNFAIP3 | 降低淋巴球活化門檻 |
| **MHC** | HLA-DRB1\*03:01（歐洲），HLA-DRB1\*15:03（非裔）| 抗原呈現 |
| **器官損傷易感** | APOL1（腎臟，非裔）, HAS2, PDGFRA | 目標器官脆弱性 |

### 單基因（Monogenic）SLE 關鍵概念

- C1q 缺乏 → **最強的 SLE 風險**（凋亡碎片清除障礙 + 減少對 pDC 的 IFN 抑制）
- **Interferonopathy** 家族：TREX1, SAMHD1, RNASEH2A/B/C, ADAR1, STING 突變 → 胞質核酸堆積 → 持續 IFN-I

---

## 三、女性好發原因（9:1）

```
女性好發 SLE ← 多重機轉共同作用

1. 荷爾蒙：estrogen 促進 pDC 活化；prolactin 上升
2. X 染色體劑量效應
   - TLR7 位於 X 染色體，部分逃脫 X 染色體不活化（XCI escape）
   - 女性可雙對偶基因表現 TLR7 → 更強的 IFN-I 反應
   - Klinefelter (47,XXY) 男性：SLE 風險升高 14 倍
3. X 染色體相關基因：TLR7、TASL、IRAK1 均位於 X 染色體
4. 排卵相關的 DNA 去甲基化 → retroelement 表現 → 核酸免疫刺激
```

---

## 四、環境觸發因子

| 觸發因子 | 代表 | 致病機轉 |
|---------|------|---------|
| **紫外線（UV-B）** | 日曬 | DNA 斷裂、細胞凋亡、IFN-stimulated gene 誘導 |
| **病毒** | EBV | EBERs 誘導 IFN-I；EBNA2 活化 SLE 相關基因位點；分子擬態 |
| **藥物** | Procainamide, Hydralazine | 抑制 DNA 甲基化（DNMT1↓）→ 免疫基因去抑制 |
| **吸菸** | 菸草 | 肺部發炎 → 蛋白質修飾 + anti-dsDNA |
| **微生物組** | Ruminococcus gnavus | 腸道細菌易位 → anti-DNA Ab、IFN signature |
| **矽塵** | 結晶矽 | 佐劑效應 |
| **荷爾蒙** | OCP、HRT | 改變 estrogen/androgen 平衡 |
| **睡眠不足** | <7小時 | 促進 SLE 前期轉化 |

---

## 五、先天免疫活化——IFN-I 核心軸

### 核酸感測路徑（示意）

```
【外源/自體核酸來源】
凋亡細胞碎片、NETs、粒線體 DNA、EBV RNA

         ↓（與自體抗體形成免疫複合體）

    ┌──────────────────────────┐    ┌──────────────────────────┐
    │  Endosomal TLR 路徑      │    │  Cytosolic 感測路徑       │
    │  TLR7（ssRNA）            │    │  RIG-I / MDA5（dsRNA）   │
    │  TLR9（dsDNA/CpG）        │    │  cGAS（DNA）→ cGAMP      │
    │  ↓ MyD88→IRAK4→IRAK1     │    │  → STING → TBK1          │
    │  → TRAF6/3 → IRF5/IRF7  │    │  → IRF3                  │
    └────────────┬─────────────┘    └──────────┬───────────────┘
                 ↓                              ↓
            IFN-α（pDC 為主要產生細胞）      IFN-β
                        ↓
              IFN Signature（全血細胞廣泛表現）
                        ↓
           免疫細胞活化↑、B cell 分化↑、血管損傷
```

### 核心產生細胞

| 細胞 | 角色 |
|------|------|
| **pDC（漿細胞樣 DC）** | 最主要的 IFN-α 產生者；TLR7/9 活化 |
| 單核球（M1 macrophage） | IFN-stimulated gene 強表現；與疾病活性相關 |
| Neutrophil（低密度顆粒球）| NETosis → 核酸釋放 → pDC IFN-I 誘導 |
| 角質細胞 | 皮膚產生 IFN-κ → 皮膚型 lupus |
| 血小板 | CD40L 活化 pDC |

### NETs（Neutrophil Extracellular Traps）

- **NETosis** = 中性球將 DNA + 組蛋白 + HMGB1 + LL37 + 彈性蛋白酶擠出細胞外
- 效果：
  - 誘導 pDC 產生 IFN-I
  - 提供自體抗原（Sm、DNA、histones）
  - 促進血管損傷 + 血栓形成

---

## 六、適應性免疫失調

### T cell 異常

| 異常 | 說明 |
|------|------|
| IL-2 分泌↓ | → Treg 生成↓ → 免疫耐受障礙 |
| CD40L (CD154) 持續高表現 | → 提供 B cell 過度 help |
| TCR ζ chain → Fc receptor γ chain | → TCR 訊號改變，活化閾值降低 |
| mTOR 活化、粒線體超極化 | → T 細胞代謝異常 |
| Tfh / Tph 細胞↑ | → 驅動 B cell 分化（Tph 表現高 PD-1，在 SLE 早期出現）|
| Th17↑ / Treg↓ | → 促發炎 |
| DNA 低甲基化 | → IFN-stimulated gene 的 epigenetic 去抑制 |

### B cell 異常

| 類別 | 說明 |
|------|------|
| **Age-associated B cells (ABCs)** | T-bet+/IRF5+ B cell，TLR7 訊號依賴；可分化為 plasmablast 或 plasma cell |
| **Plasmablast（短效）** | 分泌 **anti-dsDNA Ab**；隨疾病活性波動；對 belimumab 有反應 |
| **Long-lived plasma cells（長效）** | 分泌 **anti-Sm、anti-Ro**；骨髓利基保護；對一般免疫抑制劑抵抗；CAR-T 可能有效 |
| 驅動因子 | BLyS↑（belimumab 目標）、IL-10↑、IL-21↑ |
| 活化異常 | LYN↓、FCGR2B（抑制性 FcR）表現↓ → 閾值降低 |
| 耐受機制缺損 | PTPN22 變異 → 自體反應 B cell 無法被反選擇 |

---

## 七、自體抗體

### 常見自體抗體頻率與意義

| 抗體 | 頻率 | 特異性 | 臨床相關 |
|------|------|-------|---------|
| ANA | ~99% | 低 | 篩檢 |
| **Anti-dsDNA** | 70% | **高（SLE 特異）** | 腎炎活性指標 |
| **Anti-Sm** | 38% | **最高（SLE 特異）** | 約在臨床診斷時出現 |
| Anti-RNP | 33% | 中 | 也見於 MCTD |
| Anti-Ro (SSA) | 49% | 中 | 最早出現；新生兒 lupus、皮膚型 lupus |
| Anti-La (SSB) | 35% | 中 | 常與 Ro 共存 |
| Antiphospholipid Ab | 21% | 中 | APS、血栓、流產 |
| Anti-Ribosomal P | 10% | 中 | CNS lupus |

### 抗體出現時序（重要！）

```
先：Anti-Ro（診斷前 >5年）
     ↓
中：Anti-dsDNA（診斷前數年）
     ↓
後：Anti-Sm（約在臨床診斷時）
```
> **Epitope spreading**：抗體特異性隨時間擴展，是自體免疫自我放大的機制

### 自體抗體的致病角色

1. **免疫複合體沉積** → 補體活化 → 組織損傷（腎小球、皮膚）
2. **含核酸的免疫複合體** → FcR 媒介進入 endosome → 活化 TLR7/9 → IFN-I（免疫放大迴路）
3. **Anti-dsDNA + NMDA receptor 交叉反應** → CNS 神經毒性（excitotoxicity）
4. **Antiphospholipid Ab** → 血栓 + 補體活化 + 胎盤損傷

---

## 八、器官損傷機轉

---

### 🔴 腎臟——Lupus Nephritis（LN）

#### 8-1. 流行病學重點

| 數據 | 說明 |
|------|------|
| 病理切片有腎損傷 | ~90% SLE 患者 |
| 臨床上出現 nephritis | ~50% SLE 患者 |
| 多發於 | 診斷後前 5 年內 |
| Class IV 腎炎 15 年 ESKD 風險 | **44%** |
| Class V 腎炎 15 年 ESKD 風險 | 20% |
| 非裔/拉丁裔 | 預後顯著較差（遺傳 + 社經因素）|

---

#### 8-2. 腎損傷類型總覽

```
┌─────────────────────────────────────────────┐
│           SLE 腎臟受累類型                   │
├──────────────────────┬──────────────────────┤
│  1. 免疫複合體性 GN   │  最常見；IC 沉積 +   │
│                      │  發炎細胞浸潤         │
├──────────────────────┼──────────────────────┤
│  2. Lupus            │  Podocyte foot process│
│     Podocytopathy    │  effacement；無 IC 沉 │
│                      │  積；無增殖           │
├──────────────────────┼──────────────────────┤
│  3. 腎小管間質疾病    │  見於 66% 切片；炎   │
│                      │  性浸潤 + 纖維化；    │
│                      │  強烈預測長期腎預後差 │
├──────────────────────┼──────────────────────┤
│  4. 血管病變          │  見下表              │
└──────────────────────┴──────────────────────┘
```

#### 腎臟血管病變分類

| 類型 | 特徵 | 相關 |
|------|------|------|
| Lupus vasculopathy | IgG + 補體含血栓，無發炎 | SLE 本身 |
| TMA（血栓性微血管病）| 纖維蛋白血栓；腎小球/細動脈內 | aPL 抗體（APS nephropathy）；24% LN 患者 |
| 真性血管炎 | 白血球浸潤 + 纖維蛋白性壞死 | 少見 |
| 非特異性硬化血管病變 | 纖維性內膜增厚 | 與腎存活率下降相關 |

> 一項 341 例 LN 研究中，**82%** 有腎血管病變，其中血管 IC 沉積最多（74%）

---

#### 8-3. Lupus Nephritis 致病機轉（由上游到下游）

```
【Step 1】自體核酸 + 抗體 → 核酸含量免疫複合體（IC）形成
                    ↓
【Step 2】IC 沉積於腎小球（不同部位 → 不同 Class）

  位置：                         對應 Class：
  ├── 系膜（Mesangium）       →  Class I / II
  ├── 內皮下（Subendothelial）→  Class III / IV  ← 發炎最強
  └── 上皮下（Subepithelial） →  Class V（膜性）
                    ↓
【Step 3】IC 啟動補體系統（Classical Pathway）

  C1q → C4 → C2 → C3 convertase
              → C3a（過敏毒素、肥大細胞活化）
              → C5a（趨化因子：招募中性球 + 單核球）
              → MAC（C5b-9）：細胞膜穿孔
                    ↓
【Step 4】發炎細胞浸潤腎臟

  ├── 巡邏型單核球（Patrolling monocytes）
  │     ← TLR 活化後遊走至腎臟
  │     → 釋放 BLyS、IL-12、TNF
  │     → 加重發炎、促進硬化（sclerosis）
  ├── T cell（間質浸潤）→ 直接傷害腎小管
  ├── B cell（間質浸潤）→ 局部 IC 形成
  └── 中性球 → 釋放酶 + ROS → 組織破壞
                    ↓
【Step 5】Podocyte 損傷 → 蛋白尿
  Anti-dsDNA、Anti-Ro/La 等 Ab 直接作用
  IC 沉積 → 足細胞 slit diaphragm 破壞
                    ↓
【Step 6】慢性化：纖維化 + 硬化
  急性炎症 → 腎小管轉錄組的彈性決定是否進展
  TGF-β、PDGF → 間質纖維化
  →→→ Class VI（>90% 球性硬化）
```

---

#### 8-4. ISN/RPS 組織分類（重要！）

| Class | 名稱 | 組織特徵 | IC 位置 | 臨床表現 | 預後 |
|-------|------|---------|---------|---------|------|
| **I** | Minimal Mesangial | LM 正常 | 系膜（IF/EM）| 無症狀 | 極佳 |
| **II** | Mesangial Proliferative | 系膜細胞↑ | 系膜 | 輕微血尿/蛋白尿 | 佳 |
| **III** | Focal（<50% 腎絲球）| 內皮下增生；局灶 | 內皮下 | 血尿 + 蛋白尿 | 中 |
| **IV** | Diffuse（≥50% 腎絲球）| 彌漫增生；**wire loop**；新月體 | 內皮下（廣泛）| 腎炎症候群 + 腎功能惡化 | **最差** |
| **V** | Membranous | 上皮下 IC；毛細管壁增厚 | 上皮下 | 腎病症候群（大量蛋白尿）| 中 |
| **VI** | Advanced Sclerotic | >90% 全球性硬化 | — | 腎功能衰竭 | 最差（ESKD）|

> Class IV-S vs IV-G：
>
>
> - IV-S = 各腎絲球中 <50% 小葉受累（segmental）
> - IV-G = 各腎絲球中 ≥50% 小葉受累（global）

---

#### 8-5. 免疫螢光（IF）：「Full House」pattern

```
在 lupus nephritis 的免疫螢光中同時看到：

  IgG ✓
  IgM ✓   ← 全部陽性 = "Full House"
  IgA ✓
  C3  ✓
  C1q ✓

沿腎絲球基底膜（GBM）、系膜、腎小管基底膜呈顆粒狀
→ 高度提示 lupus nephritis（vs 其他 GN）
```

> 電子顯微鏡可見：**Tubuloreticular inclusions**（內皮細胞內，與 IFN-α 高度相關）

---

#### 8-6. 與 Anti-DNA 抗體的特殊關係

- anti-dsDNA 抗體從 lupus 腎臟中被洗脫（eluted）→ 直接致病證據
- 部分 anti-dsDNA Ab 也與 **NMDA receptor** 交叉反應（→ 亦可作用於 CNS）
- IC 中含核酸 → 進入系膜細胞 endosome → 活化 TLR9 → **腎局部 IFN-I 產生** → 放大腎臟炎症

---

#### 8-7. 腎小管間質病變（Tubulointerstitial Disease）

- 見於 **66%** 的 LN 切片
- 特徵：炎性浸潤 + 腎小管損傷 + 間質纖維化
- 腎小管轉錄組（renal tubule transcriptome）健全度 → **決定急性 vs 慢性 nephritis 走向**
- 是預測**長期腎臟預後最強的組織學指標**之一

---

#### 8-8. 腎臟預後不良的因子

| 因素 | 說明 |
|------|------|
| 種族 | 非裔、拉丁裔 > 亞裔、白人 |
| APOL1 基因型 | 非裔相關，ESKD 風險↑ |
| TMA 合併存在 | 蛋白尿更高、腎功能更差 |
| 間質纖維化 | 強烈預測腎功能喪失 |
| Class 轉換 | 15~50% 患者發生；自發或治療後 |
| 持續低度蛋白尿 | 仍可能有活動性炎症（切片往往不一致）|

---

### 其他器官

| 器官 | 機轉 | 特色 |
|------|------|------|
| **皮膚** | UV → DNA 斷裂 + 角質細胞凋亡 → 自體抗原暴露；角質細胞產生 IFN-κ → 招募炎症細胞；IC 沉積於真皮表皮交界（lupus band test） | 皮膚型 lupus 中 anti-Ro 最相關 |
| **CNS** | ① Anti-dsDNA / anti-NMDAR 交叉反應 → excitotoxicity；② 細胞激素（IFN-I, IL-6）→ 神經毒性；③ aPL Ab + TMA → 微梗塞；④ 血管炎（少見）| NPSLE 機轉多元 |
| **心臟（Libman-Sacks 心內膜炎）** | IC + aPL Ab → 補體活化 → 無菌性疣狀贅生物（通常在二尖瓣）；不發燒（vs 感染性心內膜炎）| 栓塞風險 |
| **血管（早發動脈硬化）** | IFN-I → 內皮修復功能↓（EPCs 受損）；C3a/C5a → 黏附分子上調（E-selectin、VCAM-1、ICAM-1）；NETs → 氧化壓力 + 血栓；脾臟同心圓硬化（"onion skinning"）| 心血管疾病是 SLE 主要死因之一 |

---

## 九、治療靶點對應

| 靶點 | 藥物 | 機轉 |
|------|------|------|
| IFN-I receptor（IFNAR） | **Anifrolumab**（已核准 2021）| 阻斷 IFN-I 訊號 |
| BLyS | **Belimumab**（已核准 2011）| 抑制 B cell 存活 |
| TLR7 路徑（IRAK4） | IRAK4 抑制劑（臨床試驗中）| 阻斷先天免疫活化 |
| JAK-STAT（IFN 下游） | JAK1/TYK2 抑制劑 | 減弱 IFN 效應 |
| pDC 耗竭 | anti-BDCA2、anti-ILT7 | 去除 IFN-I 主要來源 |
| Long-lived plasma cells | Anti-CD38、CAR-T（anti-BCMA）| 清除長效抗體分泌細胞 |
| RNA-含量 IC | RNase-Fc fusion | 分解刺激性 RNA |
