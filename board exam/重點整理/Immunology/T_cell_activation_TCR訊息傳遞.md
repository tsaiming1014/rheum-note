# T Cell Activation — TCR 訊息傳遞機轉

**資料來源**：Janeway's Immunobiology 10th ed, Ch.7 *Lymphocyte Receptor Signaling*（section 7-9 ~ 7-19, Fig. 7.30）；Ch.9 *T Cell-Mediated Immunity*（9-14, 9-15，CD4 分化）

## 總覽架構（Janeway Fig. 7.30 五層模型）

Janeway 將 TCR / BCR 訊息傳遞整理成同一套五層架構：

**Tyrosine kinases → Adaptors/scaffold proteins → Phospholipases/lipid kinases → GTPases/Ser-Thr kinases/phosphatases → Transcription factors, cytoskeletal changes, adhesion, metabolism**

## 主幹路徑

```
TCR 結合 peptide:MHC（CD4/CD8 co-receptor 同時結合同一 MHC）
       ↓
① Lck（經 CD4/CD8 招募）磷酸化 CD3/ζ 鏈上的 ITAM
       ↓
② ZAP-70 結合已磷酸化 ITAM，被 Lck 磷酸化活化
       ↓
③ ZAP-70 磷酸化 LAT、SLP-76 → 經 Gads 連結成 LAT:Gads:SLP-76 scaffold
       ↓
④ Scaffold 同時招募活化 4 個平行 module：PLC-γ／PI3K-Akt／ADAP／Vav
       ↓
⑤ PLC-γ module 再分 3 條子路徑，分別導向一個轉錄因子
```

## 六條路徑對照表（依五層架構拆解）

| Fig.7.30 分層 | ① Ca²⁺/NFAT | ② Ras-MAPK/AP-1 | ③ PKC-θ/NFκB | ④ PI3K-Akt | ⑤ ADAP-adhesion | ⑥ Vav-actin |
|---|---|---|---|---|---|---|
| **Tyrosine kinases** | Lck → ZAP-70 | Lck → ZAP-70 | Lck → ZAP-70 | Lck → ZAP-70 | Lck → ZAP-70 | Lck → ZAP-70 |
| **Adaptors/scaffold** | LAT:Gads:SLP-76 | LAT:Gads:SLP-76 | LAT:Gads:SLP-76 | LAT:Gads:SLP-76 | LAT:Gads:SLP-76 | LAT:Gads:SLP-76 |
| **Phospholipases/lipid kinases** | PLC-γ（Itk活化）→IP3 | PLC-γ（Itk活化）→DAG | PLC-γ（Itk活化）→DAG | PI3K → PIP3 | －（直接經磷酸化SLP-76招募） | PI3K→PIP3（協助Vav定位） |
| **GTPases/Ser-Thr kinases/phosphatases** | Ca²⁺→calmodulin→**calcineurin**(phosphatase) | RasGRP→**Ras**(GTPase)→Raf-Mek-Erk | **PKC-θ**(Ser/Thr kinase)→CARMA1-BCL10-MALT1-TRAF6-IKK | **Akt**(Ser/Thr kinase, PDK1磷酸化) | **Rap1**(GTPase，經C3G活化) | **Cdc42**(GTPase)→WASp |
| **最終輸出** | **NFAT** | **AP-1**（Fos+Jun） | **NFκB** | mTOR（代謝/存活） | LFA-1 高親和力態（adhesion） | Actin 聚合（cytoskeleton, immune synapse） |

**重點**：①②③三條共用同一個 **PLC-γ module**（PLC-γ 一次產生 IP3+DAG 兩個 second messenger），彼此是巢狀分支而非各自獨立；④⑤⑥則是與 PLC-γ 平行、互不相關的另外三個 module。NFAT/AP-1/NFκB 三者共同誘導 **IL-2** 基因轉錄。

## 轉錄因子速記表

| 轉錄因子 | 上游關鍵酵素 | 相關藥物/疾病 |
|---|---|---|
| NFAT | Calcineurin（Ca²⁺/calmodulin活化） | Cyclosporin A、Tacrolimus（抑制calcineurin） |
| AP-1 | Ras→Raf→Mek→Erk（MAPK cascade） | — |
| NFκB | PKC-θ→CARMA1→IKK→IκB降解 | IKKγ(NEMO)缺陷 → ectodermal dysplasia + 免疫缺陷 |

## 常見訊息傳遞分子缺陷對應疾病

| 缺陷分子 | 疾病 |
|---|---|
| ZAP-70 | SCID |
| WASp | Wiskott–Aldrich syndrome |
| Btk（B細胞版Tec kinase，PLC-γ活化用） | X-linked agammaglobulinemia |
| Csk（負向調控Lck） | Lck過度活化，胸腺T細胞不需peptide:MHC即自主成熟 |

## CD4 / CD8 / Treg 是否共用此路徑？

是，所有 αβ T cell（含 CD4、CD8、tTreg、pTreg）都用同一套近端訊息路徑，唯一差別是 co-receptor 身分：

- CD4 T cell（含大部分 Treg）：CD4 結合 MHC class II，帶動 Lck
- CD8 T cell：CD8 結合 MHC class I，帶動 Lck

CD4 T cell 各效應亞群（Th1/Th2/Th17/Tfh/pTreg）的**分化命運**則是由疊加在此路徑之上的 cytokine–JAK-STAT 訊號與 TCR/CD28 訊號強度共同決定（非近端路徑本身差異），例如：

| Subset | 決定性cytokine | STAT | Master TF |
|---|---|---|---|
| Th1 | IFN-γ→IL-12 | STAT1→STAT4 | Tbet |
| Th2 | IL-4 | STAT6 | GATA3 |
| Th17 | IL-6+TGF-β | STAT3 | RORγt |
| pTreg | TGF-β+IL-2（無IL-6） | STAT5 | Foxp3 |
