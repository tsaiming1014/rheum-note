# Type 2 inflammation 共同機轉與比較（AD、AR、Asthma）

相關筆記：[Asthma 致病機轉](Asthma/Asthma_致病機轉.md)

---

## 一、核心概念

AD（atopic dermatitis）、AR（allergic rhinitis）和 asthma 共用同一條 **type 2 inflammation** 主軸。這是兩個臨床概念的機轉基礎：

- **Atopic march**：同一個人從嬰兒期 AD、food allergy，逐漸發展成 AR、asthma。皮膚屏障破損是過敏原致敏的入口，經皮致敏之後，再於呼吸道表現出來。
- **Unified airway**：上、下呼吸道是同一個黏膜系統。AR 和 asthma 常同時存在，鼻部發炎會影響下呼吸道。

但三個病**依賴的分支不同**：哪個 cytokine 最重要、有沒有 remodeling、有沒有非 T2 型，都不一樣。生物製劑的成功或失敗最能看出這些差異。

---

## 二、共同路徑

**Step 1：上皮受損，釋放 alarmins**

- 誘因：protease 過敏原（Der p 1、Alternaria）、病毒、汙染、搔抓、filaggrin 缺陷。
- 上皮釋放 **TSLP、IL-33、IL-25**。

**Step 2：兩條平行路徑**

| 路徑 | 機轉 | 特點 |
|---|---|---|
| **Innate：ILC2** | Alarmin（IL-33、IL-25）**直接**活化 ILC2，產生 IL-5、IL-13（轉錄因子 GATA3） | 不需要過敏原、不需要 IgE；可以解釋**非過敏性 eosinophilic asthma** |
| **Adaptive：DC → Th2** | TSLP 讓 DC 上調 **OX40L**；DC 帶抗原到淋巴結，在 IL-12 低、IL-4 高的環境下讓 naïve T 分化成 **Th2**（GATA3、STAT6）和 Tfh | 需要過敏原；產生 allergen-specific memory |

**Step 3：效應 cytokines**

| Cytokine | 主要效應 |
|---|---|
| **IL-4** | B cell class switch 成 **IgE**（主要靠 Tfh 的 IL-4/IL-13）；Th2 分化的正回饋 |
| **IL-5** | 骨髓生成 eosinophil，並延長其存活 |
| **IL-13** | 黏液分泌、goblet cell 增生、periostin、平滑肌過度反應；在皮膚則破壞屏障 |

**Step 4：IgE–mast cell 軸**

- IgE 結合到 mast cell／basophil 的 **FcεRI**，讓它們致敏。
- 再次接觸過敏原 → cross-linking → **EAR**（histamine、PGD2、CysLTs）。
- Mast cell 分泌的 cytokine 加上 eos、Th2 的招募 → **LAR**。

**兩個常見誤解**

1. ILC2 **不是**由 DC 誘導的，而是 alarmin 直接活化，和 DC → Th2 路徑平行。
2. IgE **不是** DC 直接產生的。DC 活化 T cell，再由 Th2／Tfh 分泌的 IL-4 讓 B cell 轉換成 IgE。

---

## 三、三個病的差異

| | AD | AR | Asthma |
|---|---|---|---|
| 屏障缺陷 | **Filaggrin** 突變；角質層脂質異常 | 鼻黏膜 tight junction 異常 | 支氣管上皮 tight junction 異常；EMTU 呈「chronic wound」狀態 |
| 最主要的效應 | **IL-4／IL-13**、**IL-31**（癢）；Th22／IL-22（表皮增生）；亞洲人 AD 有較多 Th17 | IgE–mast cell 的 EAR（打噴嚏、流鼻水）；LAR 時 eos 浸潤（鼻塞） | IL-13（黏液、BHR）、**IL-5／eos**；mast cell 浸潤平滑肌 |
| 微生物因素 | **S. aureus** 移生（superantigen、δ-toxin） | — | HRV 加上 IFN-β／λ 反應不足 |
| Remodeling | 苔癬化（lichenification） | 少 | **明顯**：平滑肌增生、lamina reticularis 增厚 |
| 非 T2 型 | 有（Th17、Th22） | 少 | **T2-low**：neutrophilic（NLRP3 inflammasome）、paucigranulocytic |

---

## 四、生物製劑的成敗：看出關鍵環節

| 標靶 | 藥物 | AD | Asthma | AR／CRSwNP |
|---|---|---|---|---|
| IL-4Rα（同時阻斷 IL-4 和 IL-13） | Dupilumab | ✅ | ✅ | ✅ CRSwNP |
| 只阻斷 IL-13 | Tralokinumab、lebrikizumab | ✅ | ❌ phase 3 失敗 | — |
| IL-5／IL-5R | Mepolizumab、benralizumab | ❌ 無效 | ✅ | ✅ CRSwNP |
| IgE | Omalizumab | 效果不一致 | ✅ | ✅ CRSwNP、季節性 AR |
| TSLP | Tezepelumab | ❌ phase 2 未達標 | ✅（T2-high、T2-low 都有效） | ✅ CRSwNP |
| IL-31RA | Nemolizumab | ✅（止癢） | — | — |

**解讀**

- **AD 的核心是 IL-4／IL-13，不是 eosinophil**：anti-IL-5 對 AD 無效，只阻斷 IL-13 就夠了。
- **Asthma 比較依賴 IL-5／eosinophil 和上游的 alarmin**：只阻斷 IL-13 失敗，anti-IL-5 和 anti-TSLP 有效。
- **Dupilumab 三個病都有效**，因為它同時切斷 IL-4 和 IL-13，等於打在共同主幹上。

---

## 五、速記

- **共同主幹**：上皮 alarmin（TSLP／IL-33／IL-25）→ ILC2（innate）＋ DC → Th2（adaptive）→ IL-4／5／13 → IgE–mast cell ＋ eosinophil。
- **皮膚**：靠 IL-4／13 加 IL-31，anti-IL-5 沒用。
- **下呼吸道**：靠 IL-5／eos 加 IL-13，還有 remodeling；anti-IL-13 單獨使用沒用。
- **跨病通吃**：dupilumab（IL-4Rα）。
- **只在 asthma 證實有效、且 T2-low 也有效**：tezepelumab（TSLP）。
