import posterNetworkPharmacology from '../assets/images/workshops/poster_network_pharmacology.jpg';
import posterQsarModelDev from '../assets/images/workshops/poster_qsar_model_dev.jpg';
import posterAdmet3dQsar from '../assets/images/workshops/poster_admet_3d_qsar.jpg';
import posterPharmacophoreDocking from '../assets/images/workshops/poster_pharmacophore_docking.jpg';

export interface ServiceItem {
  id: string;
  orderNumber: string;
  title: string;
  tagline: string;
  category: 'in-silico' | 'academic-publishing';
  description: string;
  methodology: string[];
  deliverables: string[];
  toolsUsed: string[];
  sampleMetrics: { label: string; value: string }[];
  iconName: string;
}

export const ORDERED_SERVICES: ServiceItem[] = [
  {
    id: 'molecular-docking',
    orderNumber: '01',
    title: 'Molecular Docking',
    tagline: 'High-throughput receptor-ligand interaction profiling & binding affinity evaluation',
    category: 'in-silico',
    description: 'Structure-based in silico screening evaluating binding poses, interaction residues, hydrogen bond networks, and binding free energies (kcal/mol) between targets and small molecules.',
    methodology: [
      'Target protein preparation (PDB refinement, water stripping, hydrogen atom addition, Kollman charges)',
      'Ligand 3D conformation energy minimization (MMFF94/OPLS force fields)',
      'Grid box definition (active site pocket coordinates and grid spacing)',
      'Rigid and flexible docking runs with genetic algorithms (AutoDock Vina, PyRx, Dockamon Pro, MzDock)',
      'Pose clustering, RMSD cluster analysis, and 2D/3D interaction mapping'
    ],
    deliverables: [
      'PDBQT/PDB docked complexes ready for visualization',
      'Binding energy ranking table (kcal/mol)',
      'High-resolution publication-quality 2D/3D interaction diagrams (PyMOL/Discovery Studio)',
      'Detailed tabular analysis of hydrogen bonds, Pi-Pi stacking, and hydrophobic contacts'
    ],
    toolsUsed: ['AutoDock Vina', 'PyRx', 'Dockamon Pro', 'MzDock'],
    sampleMetrics: [
      { label: 'Binding Score', value: '-9.4 kcal/mol' },
      { label: 'H-Bonds Identified', value: '4 key bonds' },
      { label: 'RMSD Cluster', value: '< 1.2 Å' }
    ],
    iconName: 'Atom'
  },
  {
    id: 'adme-prediction',
    orderNumber: '02',
    title: 'ADME Prediction',
    tagline: 'Pharmacokinetic profiling & drug-likeness evaluation',
    category: 'in-silico',
    description: 'Comprehensive computational evaluation of Absorption, Distribution, Metabolism, and Excretion parameters following Lipinski Rule of 5, Veber, and Egan filters.',
    methodology: [
      'SMILES canonical representation & validation',
      'Physicochemical property computation (MW, LogP, TPSA, HBD, HBA, rotatable bonds)',
      'Gastrointestinal absorption & Blood-Brain Barrier (BBB) permeability prediction (BOILED-Egg model)',
      'Cytochrome P450 (CYP1A2, CYP2C19, CYP2C9, CYP2D6, CYP3A4) substrate & inhibition assessment',
      'Skin permeation (Log Kp) and synthetic accessibility scoring'
    ],
    deliverables: [
      'Complete ADME property spreadsheet (CSV/Excel format)',
      'Radar plot chart of drug-likeness and bioavailability profile',
      'BOILED-Egg graphic diagram for BBB and GI permeation',
      'Comprehensive summary report tailored for journal manuscript submission'
    ],
    toolsUsed: ['SwissADMET', 'ADMETLab 3.0'],
    sampleMetrics: [
      { label: 'GI Absorption', value: 'High (>90%)' },
      { label: 'BBB Permeant', value: 'Non-permeant (Safe)' },
      { label: 'Lipinski Violations', value: '0 (Fully Compliant)' }
    ],
    iconName: 'Activity'
  },
  {
    id: 'toxicity-prediction',
    orderNumber: '03',
    title: 'Toxicity Prediction',
    tagline: 'Computational toxicology, mutagenicity, & organ-specific safety profiling',
    category: 'in-silico',
    description: 'In silico safety assessment evaluating acute oral toxicity (LD50), organ toxicity (hepatotoxicity, nephrotoxicity), and toxicological endpoints (Ames mutagenicity, carcinogenicity, cardiotoxicity / hERG inhibition).',
    methodology: [
      'Quantitative structural alert screening for toxicophores',
      'ProTox II toxicological class prediction (Class I to VI) and LD50 in mg/kg',
      'StopToX automated acute and organ-specific endpoint evaluation',
      'Organ toxicity modeling: Hepatotoxicity, Immunotoxicity, Mutagenicity, Cytotoxicity',
      'Nuclear receptor signaling pathway disruption screening (AhR, AR, ER, PPAR-gamma)'
    ],
    deliverables: [
      'Toxicity classification certificate & summary sheet',
      'Organ toxicity risk matrix with probability confidence scores',
      'Toxicological safety compliance report formatted for publication'
    ],
    toolsUsed: ['ProTox II', 'StopToX'],
    sampleMetrics: [
      { label: 'Predicted LD50', value: '2500 mg/kg (Class V)' },
      { label: 'Ames Mutagenicity', value: 'Non-mutagenic' },
      { label: 'hERG Inhibition', value: 'Low Risk' }
    ],
    iconName: 'ShieldAlert'
  },
  {
    id: 'qsar-study',
    orderNumber: '04',
    title: 'QSAR Study',
    tagline: '2D Quantitative Structure-Activity Relationship modeling & descriptor correlation',
    category: 'in-silico',
    description: 'Statistical correlation between chemical molecular descriptors (topological, constitutional, electronic) and biological activity data (IC50, EC50, pIC50) using MLR, PLS, and machine learning models.',
    methodology: [
      'Chemical dataset curation and standardization (curated IC50 conversion to pIC50)',
      'High-dimensional descriptor calculation (PaDEL, Mordred: 1D & 2D descriptors)',
      'Feature selection: Objective & subjective reduction, genetic algorithms (GA), stepwise forward-backward',
      'Model construction using Multiple Linear Regression (MLR) and Partial Least Squares (PLS)',
      'Rigorous internal and external validation: R^2, cross-validated Q^2, Tropsha criteria, Y-randomization'
    ],
    deliverables: [
      'Linear regression model mathematical equation with regression coefficients',
      'Validation metrics matrix table (R^2 > 0.8, Q^2 > 0.6, cR^2_p > 0.5)',
      'Williams plot depicting the Applicability Domain (AD) and leverage warnings',
      'OECD Principle-compliant validation report for high-impact journal submission'
    ],
    toolsUsed: ['QSARIAN', 'PaDEL', 'RANQSAR', 'DTC-QSAR'],
    sampleMetrics: [
      { label: 'Regression R²', value: '0.884' },
      { label: 'Cross-validated Q²', value: '0.742' },
      { label: 'Applicability Domain', value: '100% Inside Bounds' }
    ],
    iconName: 'LineChart'
  },
  {
    id: '3d-qsar',
    orderNumber: '05',
    title: '3D/4D QSAR',
    tagline: 'Spatial field contour analysis, pharmacophore alignment, & lead optimization',
    category: 'in-silico',
    description: 'Three-dimensional and four-dimensional field-based QSAR mapping steric (Lennard-Jones) and electrostatic (Coulombic) interaction energies to identify structural regions requiring bulk or polar modification.',
    methodology: [
      'Conformational search and bioactive conformer identification',
      'Template-based and receptor-guided molecular alignment in 3D grid lattice',
      'Comparative Molecular Field Analysis steric & electrostatic potential generation',
      'Hydrophobic and H-bond donor/acceptor field index calculation',
      'Partial Least Squares (PLS) analysis with Leave-One-Out (LOO) cross-validation and 3D contour generation'
    ],
    deliverables: [
      '3D isocontour maps highlighting favorable & unfavorable steric/electrostatic zones',
      'PLS statistical validation parameters (q^2, r^2, standard error of estimate, F-statistic)',
      'Lead compound optimization roadmap for organic/medicinal chemistry synthesis',
      'Color-coded 3D sessions with aligned molecule overlay'
    ],
    toolsUsed: ['Dockamon Pro', 'Chem-Master', '3D-QSAR'],
    sampleMetrics: [
      { label: 'CoMFA q²', value: '0.689' },
      { label: 'CoMSIA r²', value: '0.912' },
      { label: 'Field Breakdown', value: '55% Steric / 45% Electro' }
    ],
    iconName: 'Boxes'
  },
  {
    id: 'pharmacophore-modeling',
    orderNumber: '06',
    title: 'Pharmacophore Modeling',
    tagline: 'Ligand-based & structure-based spatial chemical feature hypothesis',
    category: 'in-silico',
    description: 'Identification of 3D spatial arrangements of essential chemical features (H-bond donors/acceptors, hydrophobic centers, aromatic rings, positive/negative ionizable groups) vital for target receptor inhibition.',
    methodology: [
      'Ligand-based hypothesis generation from active training sets',
      'Structure-based pharmacophore extraction directly from target receptor binding cavities',
      'Feature mapping with distance and angle constraints',
      'Pharmacophore model validation via decoy set screening and ROC analysis',
      'Virtual screening of commercial databases against validated hypothesis'
    ],
    deliverables: [
      '3D pharmacophore hypothesis coordinates and spatial feature spheres',
      'Receiver Operating Characteristic (ROC) curve and Area Under Curve (AUC > 0.85)',
      'Hit list of screened drug-like leads ranked by fit score',
      'Interactive 3D pharmacophore visualization files'
    ],
    toolsUsed: ['Dockamon Pro', 'Pharmit', 'ZINCPharmer'],
    sampleMetrics: [
      { label: 'AUC / ROC Score', value: '0.93' },
      { label: 'GH Quality Score', value: '0.78' },
      { label: 'Key Features', value: '2 HBA, 1 HBD, 2 HYD' }
    ],
    iconName: 'Layers'
  },
  {
    id: 'network-pharmacology',
    orderNumber: '07',
    title: 'Network Pharmacology',
    tagline: 'Target identification, PPI interactome networks, & disease-pathway mapping',
    category: 'in-silico',
    description: 'Systematic network-based exploration connecting multi-component herbal/synthetic drug candidates to multi-target regulatory signaling pathways and clinical disease phenotypes.',
    methodology: [
      'Compound-target identification and validation via GeneCards, OMIM, and SwissTargetPrediction',
      'Protein-Protein Interaction (PPI) network assembly using STRING 12.0 at high-confidence thresholds (score >= 0.7)',
      'Topological network analysis in Cytoscape (Degree, Betweenness Centrality, Closeness Centrality)',
      'Gene Ontology (GO) biological processes and KEGG pathway enrichment clustering',
      'Compound-Target-Pathway-Disease (C-T-P-D) bipartite network layout visualization'
    ],
    deliverables: [
      'Publication-grade Cytoscape network diagrams (.cys, .png 600 DPI)',
      'Hub target ranking table based on CytoHubba / MCC topological algorithms',
      'KEGG pathway enrichment bubble plots and GO classification charts',
      'Detailed narrative report linking key therapeutic targets to pathophysiological mechanisms'
    ],
    toolsUsed: ['Cytoscape', 'STRING 12.0', 'GeneCards'],
    sampleMetrics: [
      { label: 'Hub Targets Identified', value: '10 Core Targets' },
      { label: 'PPI Confidence', value: 'Score ≥ 0.70' },
      { label: 'Enriched Pathways', value: 'Top 20 Signaling' }
    ],
    iconName: 'Network'
  },
  {
    id: 'nmr-characterization',
    orderNumber: '08',
    title: 'NMR Characterization',
    tagline: '1H/13C NMR spectrum assignment, multiplet deconvolution, & structure elucidation',
    category: 'in-silico',
    description: 'Comprehensive computational NMR spectral processing, chemical shift assignment (1H, 13C, 2D COSY/HSQC/HMBC), multiplet peak deconvolution, and structural validation against predicted chemical environments.',
    methodology: [
      'Raw FID data processing, phase correction, baseline flattening, and solvent calibration',
      '1D 1H and 13C chemical shift peak picking and integration',
      'Multiplet analysis: coupling constant (J-coupling in Hz) extraction and splitting pattern assignment',
      'Comparison with quantum mechanical / empirical database chemical shifts using NMRDB',
      '2D correlation mapping (COSY, HSQC, HMBC, NOESY) to unambiguously confirm molecular connectivity'
    ],
    deliverables: [
      'Fully labeled, publication-ready 1H and 13C NMR spectra (PDF/TIFF 600 DPI)',
      'Comprehensive NMR tabular assignment table matching journal manuscript submission standards',
      'Proton coupling constant (J in Hz) analysis table and proton integration breakdown',
      'Processed MestReNova session files (.mnova) with assigned peak tables'
    ],
    toolsUsed: ['MestReNova', 'NMRDB'],
    sampleMetrics: [
      { label: 'Peak Assignment', value: '100% Unambiguous' },
      { label: 'J-Coupling Precision', value: '± 0.1 Hz' },
      { label: 'Formatting', value: 'ACS / RSC Standard' }
    ],
    iconName: 'Activity'
  },
  {
    id: 'ftir-characterization',
    orderNumber: '09',
    title: 'FT-IR Characterization',
    tagline: 'Vibrational spectroscopy, functional group identification, & spectral deconvolution',
    category: 'in-silico',
    description: 'Computational processing and vibrational band deconvolution of Fourier-Transform Infrared (FT-IR) spectra (4000 to 400 cm⁻¹), identifying diagnostic functional groups, hydrogen-bonding shifts, and compliance verification.',
    methodology: [
      'Raw absorbance/transmittance spectral smoothing, ATR correction, and baseline correction',
      'Second-derivative peak search and Gaussian/Lorentzian curve deconvolution for overlapping bands',
      'Diagnostic band assignment: O-H, N-H, C=O, C=C, C-H stretching, and fingerprint region analysis',
      'Comparison against verified spectroscopic libraries and Halal FT-IR compliance databases',
      'Multi-sample spectral overlay and principal component analysis (PCA) for batch comparability'
    ],
    deliverables: [
      'High-resolution labeled FT-IR spectra with assigned vibrational wavenumbers (cm⁻¹)',
      'Tabular summary of identified functional groups and corresponding vibrational modes',
      'Spectral deconvolution profiles for hydrogen-bonded / carbonyl region clusters',
      'Complete Materials & Methods and Results & Discussion draft formatted for publication'
    ],
    toolsUsed: ['Halal FT-IR', 'IR Solution'],
    sampleMetrics: [
      { label: 'Spectral Range', value: '4000 - 400 cm⁻¹' },
      { label: 'Band Resolution', value: '2 cm⁻¹' },
      { label: 'Functional Groups', value: 'Fully Assigned' }
    ],
    iconName: 'Cpu'
  },
  {
    id: 'lcms-analysis',
    orderNumber: '10',
    title: 'LC-MS Analysis',
    tagline: 'Chromatographic peak integration, mass spectral fragmentation, & metabolite profiling',
    category: 'in-silico',
    description: 'High-resolution Liquid Chromatography-Mass Spectrometry (LC-MS/MS) data deconvolution, retention time alignment, molecular ion identification ([M+H]⁺, [M-H]⁻), fragmentation pattern annotation, and metabolomic quantification.',
    methodology: [
      'Total Ion Chromatogram (TIC) and Extracted Ion Chromatogram (EIC) peak integration',
      'High-resolution m/z accurate mass calculation and isotopic distribution matching (tolerance < 5 ppm)',
      'MS/MS fragment ion annotation using in silico fragmentation libraries and MestReNova MS modules',
      'Metabolomics profiling, multivariate PCA/OPLS-DA score plots, and volcano plot analysis via MetLab',
      'Compound identification based on accurate mass, MS/MS fragmentation, and retention time library matching'
    ],
    deliverables: [
      'TIC and EIC chromatographic profile figures annotated with retention times and compound names',
      'High-resolution MS and MS/MS fragmentation spectra with chemical structure fragment assignments',
      'Quantitative metabolite profiling spreadsheet with retention times, exact mass, and peak areas',
      'Complete analytical chemistry summary dossier compliant with international publication criteria'
    ],
    toolsUsed: ['MestReNova', 'MetLab'],
    sampleMetrics: [
      { label: 'Mass Accuracy', value: '< 3 ppm error' },
      { label: 'Peak Identification', value: 'MS/MS Verified' },
      { label: 'Turnaround', value: '3-5 Days' }
    ],
    iconName: 'Dna'
  },
  {
    id: 'dft-calculation',
    orderNumber: '11',
    title: 'DFT Calculation',
    tagline: 'Quantum mechanical geometry optimization, HOMO-LUMO gap, & MEP electrostatic mapping',
    category: 'in-silico',
    description: 'First-principles Density Functional Theory (DFT) quantum chemical calculations evaluating ground-state equilibrium geometries, electronic structure, frontier molecular orbitals (HOMO/LUMO), global reactivity descriptors, and molecular electrostatic potential (MEP) surfaces.',
    methodology: [
      'Ground-state molecular geometry optimization using B3LYP, PBE0, or CAM-B3LYP functionals with 6-311++G(d,p) / def2-TZVP basis sets',
      'Harmonic vibrational frequency analysis to verify true local minima without imaginary frequencies',
      'Frontier molecular orbital computation: HOMO and LUMO energy levels, energy band gap (ΔE_gap = E_LUMO - E_HOMO)',
      'Global chemical reactivity descriptors: Ionization potential (I), Electron affinity (A), Electronegativity (χ), Chemical hardness (η), Softness (S), Electrophilicity index (ω)',
      'Molecular Electrostatic Potential (MEP) 3D surface mapping identifying electrophilic (blue) and nucleophilic (red) reactive sites'
    ],
    deliverables: [
      'Optimized Cartesian coordinates (.xyz, .pdb) and convergence energy logs',
      'Publication-grade 3D HOMO and LUMO orbital density plots (PyMOL/GaussView/Quantum ESPRESSO)',
      'High-resolution 3D MEP electrostatic surface maps with color-scale potential bars',
      'Comprehensive table of global reactivity descriptors and Mulliken / NBO atomic charges'
    ],
    toolsUsed: ['Quantum ESPRESSO', 'DFT Gaussian'],
    sampleMetrics: [
      { label: 'Functional / Basis', value: 'B3LYP / 6-311++G(d,p)' },
      { label: 'HOMO-LUMO Gap', value: 'Calculated in eV' },
      { label: 'MEP Potential', value: '-0.05 to +0.05 a.u.' }
    ],
    iconName: 'Atom'
  },
  {
    id: 'md-simulations',
    orderNumber: '12',
    title: 'MD Simulations',
    tagline: 'Atomic-scale nanosecond-to-microsecond molecular dynamics & trajectory analysis',
    category: 'in-silico',
    description: 'High-performance GPU-accelerated molecular dynamics simulations of apo-proteins and protein-ligand complexes in explicit solvent, assessing thermodynamic stability, conformational transitions, and MM-PBSA binding energies.',
    methodology: [
      'System preparation: CHARMM36m / AMBER14SB force field assignment and ligand topology',
      'Solvation in TIP3P water box with neutralizing Na+/Cl- counter-ions at 0.15 M physiological strength',
      'Steepest descent energy minimization followed by NVT and NPT equilibration (300 K, 1 bar)',
      'Production run: 50 ns to 500 ns with 2 fs time step on NVIDIA GPUs',
      'Post-simulation trajectory analysis: RMSD, RMSF, Radius of Gyration (Rg), SASA, and MM-PBSA binding free energy'
    ],
    deliverables: [
      'Raw trajectory files (.xtc, .trr) and coordinate files (.gro, .pdb)',
      'High-resolution publication plots: Backbone RMSD, Residue RMSF, Rg, SASA, H-bond persistence',
      'MM-PBSA energy decomposition table (van der Waals, electrostatic, polar, non-polar)',
      'Simulation movie animation (.mp4) and complete Materials & Methods draft'
    ],
    toolsUsed: ['GROMACS 2024', 'NAMD', 'VMD', 'Grace/XMGrace'],
    sampleMetrics: [
      { label: 'Mean RMSD', value: '0.18 ± 0.02 nm' },
      { label: 'Trajectory Length', value: '100 ns Standard' },
      { label: 'MM-PBSA ΔG', value: '-38.4 kcal/mol' }
    ],
    iconName: 'Cpu'
  },
  {
    id: 'in-silico-vaccine-design',
    orderNumber: '13',
    title: 'In Silico Vaccine Design',
    tagline: 'Reverse vaccinology, multi-epitope construct design, & immunoinformatics',
    category: 'in-silico',
    description: 'Computational design of multi-epitope subunit peptide vaccines against viral and bacterial pathogens, integrating cytotoxic T-cell, helper T-cell, and linear B-cell epitopes with adjuvant and linkers.',
    methodology: [
      'Pathogen proteome retrieval and virulence/antigenicity screening',
      'MHC-I (CTL) and MHC-II (HTL) epitope prediction',
      'B-cell epitope mapping and allergenicity screening',
      'Construct engineering: Joining selected epitopes with linkers and adjuvant',
      'Physicochemical property profiling and 3D structure modeling'
    ],
    deliverables: [
      'Engineered vaccine construct primary sequence and annotated schematic diagram',
      'Validated 3D model with >90% residues in Ramachandran favored regions',
      'TLR-receptor docking complex files and interaction energy tables',
      'In silico immune response simulation graphs'
    ],
    toolsUsed: ['IEDB', 'NetMHCpan', 'VaxiJen', 'AlphaFold'],
    sampleMetrics: [
      { label: 'Antigenicity Score', value: '0.742' },
      { label: 'Ramachandran Favored', value: '94.2%' },
      { label: 'Codon CAI Value', value: '0.92' }
    ],
    iconName: 'Dna'
  },
  {
    id: 'bioinformatics',
    orderNumber: '14',
    title: 'Bioinformatics',
    tagline: 'Computational genomics, NGS data analysis, & evolutionary phylogenetics',
    category: 'in-silico',
    description: 'High-throughput bioinformatic pipelines covering next-generation sequencing (RNA-seq, whole-genome sequencing), metagenomics, phylogenetic reconstruction, and functional gene ontology enrichment.',
    methodology: [
      'Raw read quality control and reference genome alignment',
      'Differential gene expression analysis with Volcano and MA plots',
      'Gene Ontology (GO) and KEGG pathway enrichment analysis',
      'Multiple sequence alignment and maximum likelihood phylogenetic tree reconstruction'
    ],
    deliverables: [
      'Comprehensive QC reports and trimmed sequence datasets',
      'Differentially expressed genes (DEG) tables with adjusted p-values and log2 fold changes',
      'Interactive pathway enrichment bubble charts and heatmap figures',
      'Bootstrapped phylogenetic tree visualization files ready for publication'
    ],
    toolsUsed: ['FastQC', 'DESeq2', 'MEGA 11', 'IQ-TREE'],
    sampleMetrics: [
      { label: 'Sequence Read Quality', value: 'Q30 > 92%' },
      { label: 'Significantly DEGs', value: '148 Genes' },
      { label: 'Bootstrap Support', value: '1000 Replicates' }
    ],
    iconName: 'Network'
  },
  {
    id: 'manuscript-preparation',
    orderNumber: '15',
    title: 'Manuscript Preparation Guidance',
    tagline: 'Scientific writing, high-resolution visual curation, & formatting for Q1/Q2 journals',
    category: 'academic-publishing',
    description: 'Expert structural and technical drafting guidance for research articles, review papers, and book chapters. We assist scholars in presenting complex computational methodologies with clarity, scientific rigor, and academic elegance.',
    methodology: [
      'Structuring according to IMRaD standards (Introduction, Methods, Results, and Discussion)',
      'Deep technical drafting of in silico methodology to guarantee experimental reproducibility',
      'Scientific graphic design: 300+ DPI chemical structure drawing and Graphical Abstract design',
      'Table organization, reference styling, and supplementary data compilation'
    ],
    deliverables: [
      'Thoroughly edited manuscript document (.docx) with tracked changes and academic comments',
      'Publication-grade 300 DPI figures, multi-panel charts, and graphical abstract',
      'Supplementary Information (SI) dossier formatted to journal guidelines',
      'Cover letter drafted for the Editor-in-Chief highlighting paper novelty and scope'
    ],
    toolsUsed: ['ChemDraw', 'EndNote', 'Zotero', 'OriginPro'],
    sampleMetrics: [
      { label: 'Figure Resolution', value: '300-600 DPI' },
      { label: 'Average Turnaround', value: '5-7 Days' },
      { label: 'Journal Tier', value: 'SCI / Scopus Q1' }
    ],
    iconName: 'FileText'
  },
  {
    id: 'publication-guidance',
    orderNumber: '16',
    title: 'Publication Guidance',
    tagline: 'End-to-end peer review navigation, reviewer response guidance, & editorial correspondence',
    category: 'academic-publishing',
    description: 'Comprehensive strategic mentorship navigating international peer-review cycles. Assisting scholars with technical query deconstruction, supplementary simulation evidence, and academic response package structuring.',
    methodology: [
      'Pre-submission technical audit checking compliance with journal specific author guidelines',
      'Analysis of editor decision letters (Major Revision, Minor Revision)',
      'Scientific response formulation addressing reviewer critiques with experimental and in silico evidence',
      'Tracked changes integration and highlighted revised manuscript preparation'
    ],
    deliverables: [
      'Structured Response-to-Reviewers consultation document addressing scientific queries',
      'Revised manuscript highlighting all additions, modifications, and clarifications',
      'Editorial query correspondence assistance throughout the production proof cycle'
    ],
    toolsUsed: ['Grammarly Academic', 'Academic Editor Suite', 'Overleaf / LaTeX'],
    sampleMetrics: [
      { label: 'Revision Success Rate', value: '94%' },
      { label: 'Reviewer Query Closure', value: '100% Addressed' },
      { label: 'Editorial Support', value: 'Full Revision Cycle' }
    ],
    iconName: 'Award'
  },
  {
    id: 'plagiarism-checking',
    orderNumber: '17',
    title: 'Plagiarism & AI Detection Checking & Paraphrasing',
    tagline: 'Official iThenticate / Turnitin similarity analysis & Turnitin AI detection audit (0% AI score)',
    category: 'academic-publishing',
    description: 'Certified academic integrity inspection utilizing official publisher-standard Turnitin and iThenticate algorithms. Includes comprehensive Turnitin AI detection reports and expert scientific paraphrasing to ensure similarity indices strictly below 10% and 0% flagged AI score.',
    methodology: [
      'Document scanning on authentic iThenticate and Turnitin academic repositories with anti-repository protection',
      'Turnitin AI writing detection analysis ensuring 0% robotic or AI content flags',
      'Exclusion of standard bibliography, quotes, and small matches according to target journal guidelines',
      'In-depth similarity and AI report generation pinpointing duplicated sentences and source matches',
      'Expert scientific paraphrasing and restructuring of problematic sections without altering technical meaning'
    ],
    deliverables: [
      'Original full-color highlighted similarity and Turnitin AI detection reports (PDF)',
      'Ethically revised manuscript document with similarity index brought under 10% and 0% AI detection',
      'Academic integrity certificate for institutional thesis / dissertation and journal submission'
    ],
    toolsUsed: ['iThenticate', 'Turnitin Similarity', 'Turnitin AI Detection', 'Crossref'],
    sampleMetrics: [
      { label: 'Target Similarity', value: '< 10% Overall' },
      { label: 'AI Writing Score', value: '0% (Verified Human)' },
      { label: 'Turnaround Time', value: '< 24 Hours' }
    ],
    iconName: 'CheckCircle'
  },
  {
    id: 'journal-selection',
    orderNumber: '18',
    title: 'Journal Selection',
    tagline: 'Strategic matching with SCI, SCIE, Scopus, & PubMed indexed journals',
    category: 'academic-publishing',
    description: 'Tailored journal identification based on manuscript scope, methodology novelty, target impact factor, publishing speed, open-access requirements, and APC budget.',
    methodology: [
      'Title, abstract, and keyword semantic matching across international scientific databases',
      'Verification of journal indexing in Web of Science Master Journal List, Clarivate JCR, and Scopus',
      'Analysis of average time to first decision, acceptance rate, and publication turnaround'
    ],
    deliverables: [
      'Personalized dossier of 3-5 high-probability target journals with exact Clarivate Impact Factors',
      'Detailed comparison of editorial turnaround speeds, publication models, and APC fees',
      'Author guidelines checklist custom-extracted for the top-priority journal recommendation'
    ],
    toolsUsed: ['Clarivate Master Journal List', 'Scopus Preview', 'DOAJ', 'PubMed'],
    sampleMetrics: [
      { label: 'Target Indexing', value: 'SCI / Scopus Q1-Q2' },
      { label: 'Acceptance Rate', value: 'Strategic Fit' },
      { label: 'Matching Precision', value: '98% Alignment' }
    ],
    iconName: 'Search'
  }
];

export interface WorkshopItem {
  id: string;
  title: string;
  tagline?: string;
  organizer: string;
  organizerRole?: string;
  speaker: string;
  speakerRole: string;
  dateStr: string;
  duration?: string;
  timings: string;
  platform: string;
  category: string;
  topics: string[];
  feeStudentsInr: number;
  feeFacultyInr: number;
  capacity?: string;
  certificate: string;
  registrationUrl: string;
  registrationType: 'google-form' | 'whatsapp';
  contactPhone?: string;
  posterImg: string;
  instructor: string;
  instructorRole: string;
  feeInr: number;
  feeUsd: number;
  mode: string;
  brochurePdf: string;
  isUpcoming: boolean;
}

export const WORKSHOPS_DATA: WorkshopItem[] = [
  {
    id: 'ws-pharmacophore-docking-2026',
    title: 'Webinar on Pharmacophore Modeling and Molecular Docking for Publication',
    tagline: 'Learn. Apply. Publish. — Learn today, Publish tomorrow!',
    organizer: 'The Scientific Circle',
    organizerRole: 'Head: Mahalakshmi Suresha Biradar',
    speaker: 'Shankar Thapa',
    speakerRole: 'Medicinal Chemistry and Computational Drug Design Researcher',
    instructor: 'Shankar Thapa',
    instructorRole: 'Guest Speaker & CADD Researcher',
    dateStr: '5th & 6th Sep 2026',
    duration: '2 Days',
    timings: '6:00 PM - 7:30 PM IST',
    platform: 'Google Meet',
    category: 'Pharmacophore Modeling & Docking',
    topics: [
      'Expert Guidance in Pharmacophore Modeling & Virtual Screening',
      'Molecular Docking for High-Impact Publication (Dockamon Pro 1.2)',
      'Practical Approach to Receptor-Ligand Interactions',
      'Publication-Focused Analysis & Manuscript Structuring',
      'Verified E-Certificate Provided upon completion'
    ],
    feeStudentsInr: 300,
    feeFacultyInr: 350,
    feeInr: 300,
    feeUsd: 10,
    capacity: 'Early: ₹300 (Deadline: 30 Aug 2026) | Late: ₹350 (Deadline: 4 Sep 2026)',
    certificate: 'Official Verified E-Certificate Provided',
    registrationUrl: 'https://wa.me/918310468262?text=Hi%2C%20I%20would%20like%20to%20register%20for%20the%20Webinar%20on%20Pharmacophore%20Modeling%20and%20Molecular%20Docking%20for%20Publication',
    registrationType: 'whatsapp',
    contactPhone: '+91 8310468262',
    posterImg: posterPharmacophoreDocking,
    mode: 'Google Meet Live Interactive',
    brochurePdf: 'brochure_pharmacophore_docking_2026.pdf',
    isUpcoming: false
  },
  {
    id: 'ws-network-pharmacology',
    title: 'Webinar on Network Pharmacology & Molecular Docking',
    tagline: 'Multi-target pharmacology, protein-protein interactomes & docking validation',
    organizer: 'The Scientific Circle',
    organizerRole: 'Organizer: Ms. Mahalakshmi S Biradar',
    speaker: 'Mr. Shankar Thapa',
    speakerRole: 'Speaker & Computational Drug Discovery Researcher',
    instructor: 'Mr. Shankar Thapa',
    instructorRole: 'Lead Speaker',
    dateStr: '28 & 29 June 2025',
    duration: '2 Days',
    timings: '6:00 PM - 8:00 PM IST',
    platform: 'Google Meet',
    category: 'Network Pharmacology & Docking',
    topics: [
      'Basics of network pharmacology & multi-target mechanisms',
      'Software installation & setup workflow',
      'Key tools: GeneCards, STRING DB, and Cytoscape network visualization',
      'Introduction to Molecular Docking principles',
      'Docking tools: AutoDock and Discovery Studio',
      'Ligand and Protein Preparation protocols',
      'Interpreting Docking Results (Binding Score & RMSD)'
    ],
    feeStudentsInr: 400,
    feeFacultyInr: 500,
    feeInr: 400,
    feeUsd: 12,
    capacity: 'Limited to 40 Participants Only',
    certificate: 'E-Certificate for All Participants',
    registrationUrl: 'https://forms.gle/vEsKa7x1sRz9vNvu6',
    registrationType: 'google-form',
    contactPhone: '+91 8310468262',
    posterImg: posterNetworkPharmacology,
    mode: 'Google Meet Live Training',
    brochurePdf: 'brochure_network_pharmacology.pdf',
    isUpcoming: false
  },
  {
    id: 'ws-qsar-model-dev',
    title: 'Hands-on Training on QSAR Model Development and Validation in Drug Design',
    tagline: 'Completely free QSAR experience with ChemMaster v1.2 & free web tools',
    organizer: 'The Scientific Circle',
    organizerRole: 'Head: Mahalakshmi S Biradar',
    speaker: 'Shankar Thapa',
    speakerRole: 'Researcher: Medicinal Chemistry and CADD',
    instructor: 'Shankar Thapa',
    instructorRole: 'CADD Research Trainer',
    dateStr: '08 November 2025',
    duration: '1 Day Intensive',
    timings: '06:00 PM IST',
    platform: 'Google Meet',
    category: 'QSAR & ChemMaster',
    topics: [
      'Web server and free open tools for QSAR',
      'Step-by-step model development & statistical validation (Q², R²)',
      'Result interpretation & manuscript writing for journals',
      'Demonstration using ChemMaster v1.2 software',
      'Completely free QSAR experience without expensive commercial suites'
    ],
    feeStudentsInr: 250,
    feeFacultyInr: 300,
    feeInr: 250,
    feeUsd: 8,
    capacity: 'Limited to 20 Participants Only',
    certificate: 'E-Certificate for All Participants',
    registrationUrl: 'https://forms.gle/qqYFGR7rC2S8KdKT6',
    registrationType: 'google-form',
    contactPhone: '+91 8310468262',
    posterImg: posterQsarModelDev,
    mode: 'Google Meet Live Hands-on',
    brochurePdf: 'brochure_qsar_chem_master.pdf',
    isUpcoming: false
  },
  {
    id: 'ws-admet-3d-qsar',
    title: 'Hands-on Training for ADMET Prediction and 3D QSAR Analysis',
    tagline: 'Integration of QSAR and ADMET in lead optimization without software installation',
    organizer: 'The Scientific Circle',
    organizerRole: 'Head: Ms. Mahalakshmi S Biradar',
    speaker: 'Mr. Shankar Thapa',
    speakerRole: 'Speaker & CADD Researcher',
    instructor: 'Mr. Shankar Thapa',
    instructorRole: 'CADD Specialist',
    dateStr: '4 & 5 October 2025',
    duration: '2 Days',
    timings: '6:00 PM - 8:00 PM IST',
    platform: 'Google Meet',
    category: 'ADMET & 3D QSAR',
    topics: [
      'Fundamentals of ADMET & drug-likeness criteria',
      'Computational tools and online web servers for ADMET prediction',
      'Integration of QSAR and ADMET in lead optimization',
      'Basics of 3D-QSAR (CoMFA & CoMSIA methodology)',
      'Hands-on practical training without local software installation'
    ],
    feeStudentsInr: 350,
    feeFacultyInr: 450,
    feeInr: 350,
    feeUsd: 10,
    capacity: 'Limited to 40 Participants Only',
    certificate: 'E-Certificate for All Participants',
    registrationUrl: 'https://forms.gle/vEsKa7x1sRz9vNvu6',
    registrationType: 'google-form',
    contactPhone: '+91 8310468262',
    posterImg: posterAdmet3dQsar,
    mode: 'Google Meet Live Workshop',
    brochurePdf: 'brochure_admet_3d_qsar.pdf',
    isUpcoming: false
  }
];

export const SOFTWARE_TOOLS = [
  { name: 'AutoDock Vina', desc: 'Molecular docking and virtual screening software with high speed and precision scoring function.', category: 'Docking', url: 'https://vina.scripps.edu', logoColor: '#16a34a', abbr: 'ADV' },
  { name: 'GROMACS', desc: 'High-performance molecular dynamics simulation package optimized for GPU acceleration and biomolecules.', category: 'MD Simulation', url: 'https://www.gromacs.org', logoColor: '#2563eb', abbr: 'GMX' },
  { name: 'PyMOL', desc: 'Industry-standard 3D molecular visualization system for rendering high-resolution publication figures.', category: 'Visualization', url: 'https://pymol.org', logoColor: '#7c3aed', abbr: 'PYM' },
  { name: 'Discovery Studio', desc: 'Comprehensive molecular modeling suite for 2D/3D interaction analysis and receptor-ligand mapping.', category: 'Modeling', url: 'https://www.3ds.com/products/biovia/discovery-studio', logoColor: '#dc2626', abbr: 'DS' },
  { name: 'SwissADME', desc: 'Online computational pharmacokinetic tool for drug-likeness, BOILED-Egg, and bioavailability scoring.', category: 'ADMET', url: 'http://www.swissadme.ch', logoColor: '#ea580c', abbr: 'ADM' },
  { name: 'ProTox-III', desc: 'Predictive toxicology platform estimating LD50, organ toxicities, and toxicological pathways in silico.', category: 'Toxicology', url: 'https://tox.charite.de/protox3', logoColor: '#be123c', abbr: 'PTX' },
  { name: 'PaDEL-Descriptor', desc: 'Calculation software generating 1D, 2D, and 3D molecular descriptors and fingerprints for QSAR.', category: 'QSAR', url: 'http://www.yapcwsoft.com/dd/padeldescriptor/', logoColor: '#0891b2', abbr: 'PDE' },
  { name: 'Open3DQSAR', desc: 'Open-source software for high-throughput 3D QSAR model generation and CoMFA field visualization.', category: '3D QSAR', url: 'https://open3dqsar.sourceforge.net', logoColor: '#059669', abbr: '3DQ' },
  { name: 'NAMD', desc: 'Scalable parallel molecular dynamics code designed for high-performance simulation of large biomolecular systems.', category: 'MD Simulation', url: 'https://www.ks.uiuc.edu/Research/namd/', logoColor: '#1d4ed8', abbr: 'NMD' },
  { name: 'ORCA / Gaussian', desc: 'Ab initio and density functional theory (DFT) quantum chemistry computational software.', category: 'Quantum', url: 'https://www.orcasoftware.de', logoColor: '#1e3a8a', abbr: 'QCH' },
  { name: 'VMD', desc: 'Visual Molecular Dynamics viewer for analyzing trajectories and creating molecular animation sequences.', category: 'Visualization', url: 'https://www.ks.uiuc.edu/Research/vmd/', logoColor: '#6d28d9', abbr: 'VMD' },
  { name: 'SnapGene / JCat', desc: 'Molecular biology suite for in silico cloning, restriction digestion, and codon optimization.', category: 'Vaccine / Cloning', url: 'https://www.snapgene.com', logoColor: '#b45309', abbr: 'SNP' }
];

export const SCIENTIFIC_DATABASES = [
  { name: 'RCSB PDB', desc: 'Worldwide repository of 3D macromolecular structures of proteins, nucleic acids, and complex assemblies.', url: 'https://www.rcsb.org', logoColor: '#1d4ed8', abbr: 'PDB' },
  { name: 'PubChem', desc: 'World largest open chemistry database maintained by NCBI containing over 115 million chemical substances.', url: 'https://pubchem.ncbi.nlm.nih.gov', logoColor: '#059669', abbr: 'PCH' },
  { name: 'UniProt', desc: 'Universal Protein Resource providing comprehensive, high-quality, freely accessible protein sequence and functional annotation.', url: 'https://www.uniprot.org', logoColor: '#dc2626', abbr: 'UNP' },
  { name: 'ChEMBL', desc: 'Bioactive drug-like small molecules with quantitative bioactivity assay data against therapeutic targets.', url: 'https://www.ebi.ac.uk/chembl', logoColor: '#ea580c', abbr: 'CBL' },
  { name: 'DrugBank', desc: 'Comprehensive molecular information resource detailing drug targets, mechanisms of action, and interactions.', url: 'https://go.drugbank.com', logoColor: '#7c3aed', abbr: 'DRB' },
  { name: 'AlphaFold DB', desc: 'Open access database of over 200 million highly accurate protein structure predictions created by DeepMind.', url: 'https://alphafold.ebi.ac.uk', logoColor: '#0891b2', abbr: 'AFP' },
  { name: 'ZINC20', desc: 'Curated collection of over 230 million commercially available chemicals for virtual screening and docking.', url: 'https://zinc20.docking.org', logoColor: '#1e3a8a', abbr: 'ZNC' },
  { name: 'IEDB', desc: 'Immune Epitope Database cataloging experimental antibody and T cell epitopes across human and model organisms.', url: 'https://www.iedb.org', logoColor: '#be123c', abbr: 'IED' }
];

export const TESTIMONIALS_DATA = [
  {
    name: 'Debanjali Kundu',
    role: 'Junior Research Fellow',
    institution: 'DRDE-DRDO, India',
    rating: 5,
    service: 'Molecular Docking & MD',
    feedback: 'The workshop on Molecular Docking and MD Simulations was exceptional! The practical demonstration cleared all my doubts regarding active site grid setup and RMSD stability trajectories. Highly recommend Med-Silico Lab for any serious computational research.'
  },
  {
    name: 'Ibtasam Bin Abdul Ghani',
    role: 'Postdoctoral Researcher',
    institution: 'Southwest Jiaotong University, China',
    rating: 5,
    service: 'DFT & Molecular Modeling',
    feedback: 'The methodology training covered every nuanced aspect of DFT and docking calculations. Even for complex organometallic ligands, the step-by-step guidance was remarkably clear and publication-ready.'
  },
  {
    name: 'Dr. Banalata Maji',
    role: 'Postdoctoral Research Associate',
    institution: 'IIT Hyderabad, India',
    rating: 5,
    service: 'Publication Guidance & MD',
    feedback: 'The manuscript guidance team provided meticulous feedback on our GROMACS MM-PBSA discussion. The paper was accepted in a high-impact Elsevier journal with minimal revisions.'
  },
  {
    name: 'Shahul Hameed Valiyapeediyekkal',
    role: 'M.Tech Research Scholar',
    institution: 'NITK Surathkal, India',
    rating: 5,
    service: 'Molecular Dynamics',
    feedback: 'I got to learn completely new workflows for running GROMACS on WSL Ubuntu and generating XMGrace plots. Truly unmatched dedication and scientific mentorship from the instructors.'
  },
  {
    name: 'Dr. Ganeshkumar C.',
    role: 'Assistant Professor',
    institution: 'Amrita Vishwa Vidyapeetham, Chennai',
    rating: 5,
    service: 'In Silico Vaccine Design',
    feedback: 'The immunoinformatics and in silico vaccine construct design was taught with immense patience and real case studies. The syllabus was thoroughly planned and executed.'
  },
  {
    name: 'Nikita Bhure',
    role: 'Biotechnology Scholar',
    institution: 'Dr. D.Y. Patil Biotechnology Institute',
    rating: 5,
    service: 'QSAR & ADMET',
    feedback: 'Very informative and easily understood every complex concept. Sir taught with great dedication and answered every query regarding PaDEL descriptors and Lipinski drug-likeness filters.'
  }
];
