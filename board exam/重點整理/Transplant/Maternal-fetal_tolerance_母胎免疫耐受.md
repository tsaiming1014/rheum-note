# Maternal–fetal Tolerance — 母體為何不排斥胎兒

> 口試題：「問母親為何會對胎兒不會排斥的可能機轉」

胎兒帶有一半父系 HLA，是一個 **semi-allograft**，但正常懷孕不會被排斥。這不是單一機轉的結果，而是多層機制共同作用。

---

## 1. Trophoblast 的特殊 MHC 表現（最核心考點）

- **Villous syncytiotrophoblast**（直接接觸母血的那一層）：幾乎**不表現 HLA class I 與 class II**，所以 CD8+ 和 CD4+ T cell 都認不出它。
- **Extravillous trophoblast (EVT)**（侵入 decidua 的那一群）：
    - **不表現 HLA-A、HLA-B**，避開最主要的 allogeneic T cell 攻擊目標。
    - 表現 **HLA-C**（唯一具有多型性的一種，可與 uNK 上的 KIR 作用）。
    - 表現非古典的 **HLA-E、HLA-G**（多型性低）：
        - HLA-G 結合 **ILT2 (LILRB1)**、**KIR2DL4**；HLA-E 結合 **CD94/NKG2A**，兩者都送出 NK cell 的抑制訊號。
        - 如果完全不表現 class I，會觸發 "missing-self" 被 NK cell 殺掉；表現 HLA-E/G 剛好避免這件事。

## 2. Uterine NK cell (uNK)

- Decidua 中最多的免疫細胞是 **CD56^bright CD16^−** 的 uNK，細胞毒性很低。
- 主要功能是分泌 VEGF、PlGF、IFN-γ 等，推動 **spiral artery remodeling**，屬於「幫忙」而非攻擊的角色。
- **母方 KIR 與胎兒（父系）HLA-C 的組合**會影響懷孕結局：母方為 KIR AA haplotype、胎兒帶父系 HLA-C2 時，preeclampsia、FGR 風險上升。

## 3. Regulatory T cell (Treg)

- 懷孕時，針對父系抗原的 **Foxp3+ Treg** 會擴增並聚集到 decidua。
- **Peripheral Treg (pTreg)** 的生成需要 Foxp3 基因的 **CNS1** 區域，而 CNS1 是胎盤哺乳類才演化出來的。小鼠缺少 CNS1 時，allogeneic 懷孕會出現胎兒吸收與胎盤發炎。
- 懷孕結束後會留下 **fetal-specific memory Treg**，下一胎時耐受建立得更快。這可以解釋同一伴侶的第二胎 preeclampsia 風險較低。

## 4. 局部免疫抑制分子與代謝機轉

| 機轉 | 重點 |
|---|---|
| **IDO**（indoleamine 2,3-dioxygenase） | Trophoblast 與 decidual macrophage/DC 分解 tryptophan，抑制 T cell 增生。經典實驗（Munn, Science 1998）：給懷孕小鼠 IDO 抑制劑 1-MT，allogeneic 胎兒被排斥，syngeneic 胎兒則不受影響 |
| **Complement regulators** | Trophoblast 大量表現 **CD46 (MCP)、CD55 (DAF)、CD59**；小鼠缺少 Crry 時，胎兒因 complement 攻擊死亡。與 APS 流產機轉相連（aPL 活化 complement，**C5a** 造成 placental injury） |
| **FasL、PD-L1** | Trophoblast 表現這兩種分子，誘導 activated T cell 凋亡或失能 |
| **Cytokines** | TGF-β、IL-10；早期有「Th2 偏移」理論（Th1/Th2 paradigm），現在認為過度簡化，但考試偶爾仍會考 |
| **Hormones** | **Progesterone**（誘導 PIBF、抑制 Th1）、hCG（促進 Treg 聚集） |
| **Galectin-1** | 誘導 effector T cell apoptosis、促進 tolerogenic DC |

## 5. Decidua 在結構上限制 T cell 進入

- **Decidual stromal cell 以 epigenetic 方式（H3K27me3）關閉 Th1 相關 chemokine 基因**（CXCL9、CXCL10 等），effector T cell 很難被招募進 decidua（Nancy et al., Science 2012）。
- Decidual DC **不容易遷移到 draining lymph node**，T cell priming 很有限。
- 胎盤本身也是一道 **anatomic barrier**，把母胎循環大致分開。

## 6. 口試可順帶補充的臨床連結

- **耐受失敗的例子**：preeclampsia（spiral artery remodeling 不良）、recurrent pregnancy loss、APS（complement 活化）、neonatal lupus（母體 anti-Ro/SSA 經 **FcRn** 穿過胎盤）。
- **Fetal microchimerism**：胎兒細胞在母體內可存留數十年，被認為可能與 SSc、PBC 等疾病有關。
- **懷孕對自體免疫病的影響**：RA 在懷孕期間多會改善（與 Treg 增加、HLA disparity 有關），產後容易 flare；SLE 在懷孕期間反而可能 flare。

---

## 速記總表

| 層次 | 機轉 |
|---|---|
| MHC | Syncytiotrophoblast 無 class I/II；EVT 只表現 HLA-C、E、G（無 HLA-A、B） |
| NK | HLA-E/G 抑制 NK；uNK（CD56^bright）負責 spiral artery remodeling |
| T cell | Fetal-specific pTreg（需 Foxp3 CNS1）、memory Treg |
| 代謝/分子 | IDO、FasL、PD-L1、Galectin-1、TGF-β、IL-10 |
| Complement | CD46、CD55、CD59（小鼠 Crry） |
| 荷爾蒙 | Progesterone（PIBF）、hCG |
| 結構 | Decidual chemokine silencing、DC 不遷移、胎盤屏障 |
