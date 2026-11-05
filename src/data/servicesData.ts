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
      'Rigid and flexible docking runs with genetic algorithms (AutoDock Vina, Glide, Gold)',
      'Pose clustering, RMSD cluster analysis, and 2D/3D interaction mapping'
    ],
    deliverables: [
      'PDBQT/PDB docked complexes ready for visualization',
      'Binding energy ranking table (kcal/mol)',
      'High-resolution publication-quality 2D/3D interaction diagrams (PyMOL/Discovery Studio)',
      'Detailed tabular analysis of hydrogen bonds, Pi-Pi stacking, and hydrophobic contacts'
    ],
    toolsUsed: ['AutoDock Vina', 'Discovery Studio', 'PyMOL', 'AutoDockTools', 'Chimera'],
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
    toolsUsed: ['SwissADME', 'pkCSM', 'PreADMET', 'Molinspiration'],
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
    description: 'In silico safety assessment assessing acute oral toxicity (LD50), organ toxicity (hepatotoxicity, nephrotoxicity), and toxicological endpoints (Ames mutagenicity, carcinogenicity, cardiotoxicity / hERG inhibition).',
    methodology: [
      'Quantitative structural alert screening for toxicophores',
      'ProTox-III toxicological class prediction (Class I to VI) and LD50 in mg/kg',
      'Organ toxicity modeling: Hepatotoxicity, Immunotoxicity, Mutagenicity, Cytotoxicity',
      'Nuclear receptor signaling pathway disruption screening (AhR, AR, ER, PPAR-gamma)',
      'Stress response pathway activation checks (ATAD5, ARE, HSE, MMP, p53)'
    ],
    deliverables: [
      'Toxicity classification certificate & summary sheet',
      'Organ toxicity risk matrix with probability confidence scores',
      'Toxicological safety compliance report formatted for publication'
    ],
    toolsUsed: ['ProTox-III', 'pkCSM Tox', 'ToxTree', 'OSIRIS Property Explorer'],
    sampleMetrics: [
      { label: 'Predicted LD50', value: '2500 mg/kg (Class V)' },
      { label: 'Ames Mutagenicity', value: 'Non-mutagenic' },
      { label: 'hERG Inhibition', value: 'Low Risk' }
    ],
    iconName: 'ShieldAlert'
  },
  {
    id: 'md-simulations',
    orderNumber: '04',
    title: 'MD Simulations',
    tagline: 'Atomic-scale nanosecond-to-microsecond molecular dynamics & trajectory analysis',
    category: 'in-silico',
    description: 'High-performance GPU-accelerated molecular dynamics simulations of apo-proteins and protein-ligand complexes in explicit solvent, assessing thermodynamic stability, conformational transitions, and MM-PBSA binding energies.',
    methodology: [
      'System preparation: CHARMM36m / AMBER14SB force field assignment and ligand topology (CGenFF / GAFF2)',
      'Solvation in TIP3P water box with neutralizing Na+/Cl- counter-ions at 0.15 M physiological strength',
      'Steepest descent energy minimization followed by NVT and NPT equilibration (300 K, 1 bar)',
      'Production run: 50 ns to 500 ns with 2 fs time step using LINCS/SHAKE algorithm on NVIDIA GPUs',
      'Post-simulation trajectory analysis: RMSD, RMSF, Radius of Gyration (Rg), SASA, PCA, and MM-PBSA/GBSA binding free energy calculation'
    ],
    deliverables: [
      'Raw trajectory files (.xtc, .trr) and coordinate files (.gro, .pdb)',
      'High-resolution publication plots: Backbone RMSD, Residue RMSF, Rg, SASA, H-bond persistence',
      'MM-PBSA / MM-GBSA energy decomposition table (van der Waals, electrostatic, polar, non-polar)',
      'Simulation movie animation (.mp4 / .gif) and complete Materials & Methods draft'
    ],
    toolsUsed: ['GROMACS 2024', 'NAMD', 'VMD', 'Grace/XMGrace', 'gmx_MMPBSA'],
    sampleMetrics: [
      { label: 'Mean RMSD', value: '0.18 ± 0.02 nm' },
      { label: 'Trajectory Length', value: '100 ns Standard' },
      { label: 'MM-PBSA ΔG', value: '-38.4 kcal/mol' }
    ],
    iconName: 'Cpu'
  },
  {
    id: 'qsar-study',
    orderNumber: '05',
    title: 'QSAR Study',
    tagline: '2D Quantitative Structure-Activity Relationship modeling & descriptor correlation',
    category: 'in-silico',
    description: 'Statistical correlation between chemical molecular descriptors (topological, constitutional, electronic) and biological activity data (IC50, EC50, pIC50) using MLR, PLS, and machine learning models.',
    methodology: [
      'Chemical dataset curation and standardization (curated IC50 conversion to pIC50)',
      'High-dimensional descriptor calculation (PaDEL, Mordred: 1D & 2D descriptors)',
      'Feature selection: Objective & subjective reduction, genetic algorithms (GA), stepwise forward-backward',
      'Model construction using Multiple Linear Regression (MLR) and Partial Least Squares (PLS)',
      'Rigorous internal and external validation: $R^2$, adjusted $R^2$, cross-validated $Q^2$, Tropsha criteria, Y-randomization'
    ],
    deliverables: [
      'Linear regression model mathematical equation with regression coefficients',
      'Validation metrics matrix table ($R^2 > 0.8$, $Q^2 > 0.6$, $cR^2_p > 0.5$)',
      'Williams plot depicting the Applicability Domain (AD) and leverage warnings',
      'OECD Principle-compliant validation report for high-impact journal submission'
    ],
    toolsUsed: ['PaDEL-Descriptor', 'Mordred', 'Q-SARINS', 'R / Python Scikit-learn'],
    sampleMetrics: [
      { label: 'Regression R²', value: '0.884' },
      { label: 'Cross-validated Q²', value: '0.742' },
      { label: 'Applicability Domain', value: '100% Inside Bounds' }
    ],
    iconName: 'LineChart'
  },
  {
    id: '3d-qsar',
    orderNumber: '06',
    title: '3D QSAR',
    tagline: 'CoMFA & CoMSIA spatial field contour analysis for lead optimization',
    category: 'in-silico',
    description: 'Three-dimensional field-based QSAR mapping steric (Lennard-Jones) and electrostatic (Coulombic) interaction energies to identify structural regions requiring bulk or polar modification.',
    methodology: [
      'Conformational search and bioactive conformer identification',
      'Template-based and receptor-guided molecular alignment in 3D grid lattice',
      'CoMFA (Comparative Molecular Field Analysis) steric & electrostatic potential generation',
      'CoMSIA (Comparative Molecular Similarity Indices Analysis) hydrophobic and H-bond donor/acceptor fields',
      'Partial Least Squares (PLS) analysis with Leave-One-Out (LOO) cross-validation and 3D contour generation'
    ],
    deliverables: [
      '3D isocontour maps highlighting favorable & unfavorable steric/electrostatic zones',
      'PLS statistical validation parameters ($q^2$, $r^2$, standard error of estimate, F-statistic)',
      'Lead compound optimization roadmap for organic/medicinal chemistry synthesis',
      'Color-coded PyMOL 3D sessions (.pse) with aligned molecule overlay'
    ],
    toolsUsed: ['Open3DQSAR', 'Sybyl CoMFA', 'Discovery Studio', 'PyMOL'],
    sampleMetrics: [
      { label: 'CoMFA q²', value: '0.689' },
      { label: 'CoMSIA r²', value: '0.912' },
      { label: 'Field Breakdown', value: '55% Steric / 45% Electro' }
    ],
    iconName: 'Boxes'
  },
  {
    id: 'pharmacophore-modeling',
    orderNumber: '07',
    title: 'Pharmacophore Modeling',
    tagline: 'Ligand-based & structure-based spatial chemical feature hypothesis',
    category: 'in-silico',
    description: 'Identification of 3D spatial arrangements of essential chemical features (H-bond donors/acceptors, hydrophobic centers, aromatic rings, positive/negative ionizable groups) vital for target receptor inhibition.',
    methodology: [
      'Ligand-based hypothesis generation using HypoGen / HipHop algorithms from active training sets',
      'Structure-based pharmacophore extraction directly from target receptor binding cavities',
      'Feature mapping with distance and angle constraints',
      'Pharmacophore model validation via decoy set screening, Güner-Henry (GH) scoring, and ROC analysis',
      'Virtual screening of commercial databases (ZINC, Maybridge, ChemBridge) against validated hypothesis'
    ],
    deliverables: [
      '3D pharmacophore hypothesis coordinates and spatial feature spheres',
      'Receiver Operating Characteristic (ROC) curve and Area Under Curve (AUC > 0.85)',
      'Hit list of screened drug-like leads ranked by fit score',
      'Interactive 3D pharmacophore visualization files'
    ],
    toolsUsed: ['LigandScout', 'Discovery Studio', 'Phase (Schrödinger)', 'Pharmit'],
    sampleMetrics: [
      { label: 'AUC / ROC Score', value: '0.93' },
      { label: 'GH Quality Score', value: '0.78' },
      { label: 'Key Features', value: '2 HBA, 1 HBD, 2 HYD' }
    ],
    iconName: 'Layers'
  },
  {
    id: 'in-silico-vaccine-design',
    orderNumber: '08',
    title: 'In Silico Vaccine Design',
    tagline: 'Reverse vaccinology, multi-epitope construct design, & immunoinformatics',
    category: 'in-silico',
    description: 'Computational design of multi-epitope subunit peptide vaccines against viral and bacterial pathogens, integrating cytotoxic T-cell, helper T-cell, and linear B-cell epitopes with adjuvant and linkers.',
    methodology: [
      'Pathogen proteome retrieval and virulence/antigenicity screening (VaxiJen v2.0)',
      'MHC-I (CTL) and MHC-II (HTL) epitope prediction via NetMHCpan and IEDB tools',
      'B-cell epitope mapping (ABCpred, BepiPred-2.0) and allergenicity screening (AllerTOP v2.0)',
      'Construct engineering: Joining selected epitopes with EAAAK, GPGP, AAY linkers and beta-defensin adjuvant',
      'Physicochemical property profiling, 3D structure modeling (AlphaFold/ColabFold), refinement & validation (Ramachandran plot)',
      'Molecular docking with immune receptors (TLR4/TLR2) followed by in silico immune simulation (C-ImmSim)'
    ],
    deliverables: [
      'Engineered vaccine construct primary sequence and annotated schematic diagram',
      'Validated 3D model with >90% residues in Ramachandran favored regions',
      'TLR-receptor docking complex files and interaction energy tables',
      'C-ImmSim in silico immune response graphs (IgG, IgM, Cytokines, Interferon-gamma titers)',
      'Codon adaptation (CAI index > 0.85) and in silico restriction cloning into pET28a(+) vector'
    ],
    toolsUsed: ['IEDB', 'NetMHCpan', 'VaxiJen', 'AlphaFold', 'C-ImmSim', 'JCat', 'SnapGene'],
    sampleMetrics: [
      { label: 'Antigenicity Score', value: '0.742 (VaxiJen)' },
      { label: 'Ramachandran Favored', value: '94.2%' },
      { label: 'Codon CAI Value', value: '0.92' }
    ],
    iconName: 'Dna'
  },
  {
    id: 'bioinformatics',
    orderNumber: '09',
    title: 'Bioinformatics',
    tagline: 'Computational genomics, NGS data analysis, & evolutionary phylogenetics',
    category: 'in-silico',
    description: 'High-throughput bioinformatic pipelines covering next-generation sequencing (RNA-seq, whole-genome sequencing), metagenomics, phylogenetic reconstruction, and functional gene ontology enrichment.',
    methodology: [
      'Raw read quality control (FastQC, Trimmomatic) and reference genome alignment (HISAT2, BWA-MEM)',
      'Differential gene expression analysis (DESeq2, edgeR) with Volcano and MA plots',
      'Gene Ontology (GO) and KEGG pathway enrichment analysis (clusterProfiler, DAVID)',
      'Multiple sequence alignment (Clustal Omega, MUSCLE) and maximum likelihood phylogenetic tree reconstruction (IQ-TREE, MEGA)',
      'Protein tertiary structure homology modeling and active site conservation scoring'
    ],
    deliverables: [
      'Comprehensive QC reports and trimmed sequence datasets',
      'Differentially expressed genes (DEG) tables with adjusted p-values and log2 fold changes',
      'Interactive pathway enrichment bubble charts and heatmap figures',
      'Bootstrapped phylogenetic tree visualization files (.nwk, .treefile) ready for publication'
    ],
    toolsUsed: ['FastQC', 'DESeq2', 'MEGA 11', 'IQ-TREE', 'Bioconductor / R', 'Galaxy'],
    sampleMetrics: [
      { label: 'Sequence Read Quality', value: 'Q30 > 92%' },
      { label: 'Significantly DEGs', value: '148 Genes' },
      { label: 'Bootstrap Support', value: '1000 Replicates' }
    ],
    iconName: 'Network'
  },
  // Academic & Publication Consulting Additions
  {
    id: 'manuscript-preparation',
    orderNumber: '10',
    title: 'Manuscript Preparation Guidance',
    tagline: 'Scientific writing, high-resolution visual curation, & formatting for Q1/Q2 journals',
    category: 'academic-publishing',
    description: 'Expert structural and technical drafting guidance for research articles, review papers, and book chapters. We assist scholars in presenting complex computational methodologies with clarity, scientific rigor, and academic elegance.',
    methodology: [
      'Structuring according to IMRaD standards (Introduction, Methods, Results, and Discussion)',
      'Deep technical drafting of in silico methodology to guarantee experimental reproducibility',
      'Scientific graphic design: 300+ DPI chemical structure drawing (ChemDraw) and Graphical Abstract design',
      'Table organization, reference styling (EndNote, Mendeley, Zotero), and supplementary data compilation'
    ],
    deliverables: [
      'Thoroughly edited manuscript document (.docx) with tracked changes and academic comments',
      'Publication-grade 300 DPI figures, multi-panel charts, and graphical abstract (.tiff, .png, .ai)',
      'Supplementary Information (SI) dossier formatted to journal guidelines',
      'Cover letter drafted for the Editor-in-Chief highlighting paper novelty and scope'
    ],
    toolsUsed: ['ChemDraw', 'EndNote', 'Zotero', 'OriginPro', 'Adobe Illustrator'],
    sampleMetrics: [
      { label: 'Figure Resolution', value: '300-600 DPI' },
      { label: 'Average Turnaround', value: '5-7 Days' },
      { label: 'Journal Tier', value: 'SCI / Scopus Q1' }
    ],
    iconName: 'FileText'
  },
  {
    id: 'publication-guidance',
    orderNumber: '11',
    title: 'Publication Guidance',
    tagline: 'End-to-end peer review navigation, rebuttal drafting, & editorial correspondence',
    category: 'academic-publishing',
    description: 'Comprehensive strategic mentorship navigating international peer-review cycles. From initial submission portal management to point-by-point rebuttal drafting for demanding reviewers.',
    methodology: [
      'Pre-submission technical audit checking compliance with journal specific author guidelines',
      'Analysis of editor decision letters (Major Revision, Minor Revision)',
      'Point-by-point rebuttal letter formulation addressing reviewer critiques with experimental and in silico evidence',
      'Tracked changes integration and highlighted revised manuscript preparation'
    ],
    deliverables: [
      'Polished Response-to-Reviewers document with persuasive, respectful academic rebuttals',
      'Revised manuscript highlighting all additions, modifications, and clarifications',
      'Editorial query correspondence assistance throughout the production proof cycle'
    ],
    toolsUsed: ['Grammarly Academic', 'Academic Editor Suite', 'Overleaf / LaTeX'],
    sampleMetrics: [
      { label: 'Rebuttal Success Rate', value: '94%' },
      { label: 'Reviewer Query Closure', value: '100% Addressed' },
      { label: 'Editorial Support', value: 'Full Revision Cycle' }
    ],
    iconName: 'Award'
  },
  {
    id: 'plagiarism-checking',
    orderNumber: '12',
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
      'Ethically revised manuscript document with similarity index brought under 10% (single source <1%) and 0% AI detection',
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
    orderNumber: '13',
    title: 'Journal Selection',
    tagline: 'Strategic matching with SCI, SCIE, Scopus, & PubMed indexed journals',
    category: 'academic-publishing',
    description: 'Tailored journal identification based on manuscript scope, methodology novelty, target impact factor, publishing speed, open-access requirements, and APC budget.',
    methodology: [
      'Title, abstract, and keyword semantic matching across international scientific databases',
      'Verification of journal indexing in Web of Science Master Journal List, Clarivate JCR, and Scopus',
      'Analysis of average time to first decision, acceptance rate, and publication turnaround',
      'Screening against predatory publishers and hijacked journal warning lists (Beall\'s List / UGC-CARE)'
    ],
    deliverables: [
      'Curated shortlist of 3 to 5 indexed journals (Q1/Q2/Q3) with exact Impact Factors and CiteScores',
      'Comparison matrix: Review speed, acceptance rate, Article Processing Charge (APC) details, and scope alignment',
      'Submission roadmap with specific rationale explaining why your manuscript fits each selected journal'
    ],
    toolsUsed: ['Clarivate JCR', 'Scopus SciVal', 'Elsevier JournalFinder', 'Springer Nature Suggester'],
    sampleMetrics: [
      { label: 'Target Indexing', value: 'SCI / SCIE / Scopus' },
      { label: 'Recommended Options', value: '3-5 Vetted Journals' },
      { label: 'Predatory Check', value: '100% Verified Safe' }
    ],
    iconName: 'Search'
  }
];

export interface WorkshopItem {
  id: string;
  title: string;
  dateStr: string;
  duration: string;
  timings: string;
  mode: string;
  category: string;
  topics: string[];
  instructor: string;
  instructorRole: string;
  feeInr: number;
  feeUsd: number;
  brochurePdf: string;
  isUpcoming: boolean;
}

export const WORKSHOPS_DATA: WorkshopItem[] = [
  // Upcoming Workshops (2026)
  {
    id: 'ws-docking-2026',
    title: 'Hands-on Training on Molecular Docking: From Theory to Practical',
    dateStr: '9th to 15th March 2026',
    duration: '07 Days',
    timings: '3:00 PM - 5:00 PM IST',
    mode: 'Hybrid (Live Interactive + Recorded Access)',
    category: 'In Silico Drug Discovery',
    topics: [
      'Protein & Ligand Preparation (PDB, SMILES, Energy Minimization)',
      'Grid Box optimization & Active Site Pocket Identification',
      'AutoDock Vina & AutoDock4 Docking Workflows',
      'Blind Docking vs Site-Specific Docking',
      'Discovery Studio & PyMOL 2D/3D Interaction Visualization',
      'Binding Affinity Interpretation for Research Publications'
    ],
    instructor: 'Dr. R. Shivakumar',
    instructorRole: 'Ph.D. (NIT Karnataka), Postdoc (POSTECH, S. Korea)',
    feeInr: 1200,
    feeUsd: 25,
    brochurePdf: 'brochure_molecular_docking_2026.pdf',
    isUpcoming: true
  },
  {
    id: 'ws-md-gromacs-2026',
    title: 'Skill Development Workshop on Molecular Dynamics (MD) Simulations using GROMACS',
    dateStr: '23rd to 29th March 2026',
    duration: '07 Days',
    timings: '6:30 PM - 8:30 PM IST',
    mode: 'Live Hands-On Virtual Laboratory',
    category: 'Biophysical Simulations',
    topics: [
      'GROMACS Installation & Linux Environment Setup via WSL',
      'CHARMM36m Force Field parameterization of Proteins & Ligands',
      'Solvation, Ion Neutralization, NVT and NPT Equilibration',
      '100ns Production Run execution on Cloud GPU Nodes',
      'Trajectory analysis: RMSD, RMSF, Rg, SASA, and H-bonds using XMGrace',
      'MM-PBSA Binding Free Energy calculation using gmx_MMPBSA'
    ],
    instructor: 'Dr. A. Venkatesh',
    instructorRole: 'Senior Computational Biologist & GROMACS Specialist',
    feeInr: 1800,
    feeUsd: 35,
    brochurePdf: 'brochure_md_simulation_2026.pdf',
    isUpcoming: true
  },
  {
    id: 'ws-vaccine-2026',
    title: 'In Silico Vaccine Design & Reverse Vaccinology Workshop',
    dateStr: '3rd to 7th April 2026',
    duration: '05 Days',
    timings: '6:30 PM - 8:30 PM IST',
    mode: 'Virtual Live Training',
    category: 'Immunoinformatics',
    topics: [
      'Pathogen proteome retrieval and virulence antigenicity screening',
      'CTL, HTL, and B-cell epitope prediction using IEDB tools',
      'Multi-epitope construct assembling with linkers and adjuvant',
      'AlphaFold 3D structure prediction and Ramachandran validation',
      'Molecular Docking with Immune Receptors (TLR-4/TLR-2)',
      'In silico Immune Simulation via C-ImmSim and in silico cloning'
    ],
    instructor: 'Dr. Sneha Nair',
    instructorRole: 'Ph.D. Bioinformatics, Vaccine Informatics Researcher',
    feeInr: 1500,
    feeUsd: 30,
    brochurePdf: 'brochure_vaccine_design_2026.pdf',
    isUpcoming: true
  },
  {
    id: 'ws-manuscript-2026',
    title: 'Skill-Oriented Workshop on Academic & Scientific Writing for SCI/Scopus Journals',
    dateStr: '15th to 19th April 2026',
    duration: '05 Days',
    timings: '7:00 PM - 9:00 PM IST',
    mode: 'Interactive Online Masterclass',
    category: 'Academic Publishing',
    topics: [
      'Drafting Title, Abstract, and Keywords for Maximum Citation Impact',
      'IMRaD Structure & Scientific English Writing Polish',
      'ChemDraw & OriginPro for Publication-Quality 300+ DPI Figures',
      'Handling Reviewer Rebuttals & Editor Queries Professionally',
      'Plagiarism Prevention & Journal Selection Matrix'
    ],
    instructor: 'Prof. K. Sundaram',
    instructorRole: 'Associate Editor & Senior Academic Reviewer',
    feeInr: 999,
    feeUsd: 20,
    brochurePdf: 'brochure_scientific_writing_2026.pdf',
    isUpcoming: true
  },
  // Recent / Completed Workshops
  {
    id: 'ws-recent-dft',
    title: 'Hands-on Training on Density Functional Theory (DFT) Calculations using Gaussian & ORCA',
    dateStr: '8th to 14th February 2026',
    duration: '07 Days',
    timings: '6:00 PM - 8:00 PM IST',
    mode: 'Online Training',
    category: 'Quantum Chemistry',
    topics: [
      'Quantum mechanical principles of DFT (B3LYP, PBE0, M06-2X)',
      'Geometry optimization and vibrational frequency calculations',
      'HOMO-LUMO energy gaps, MEP (Molecular Electrostatic Potential)',
      'Spectroscopic analysis (IR, Raman, UV-Vis spectra simulation)'
    ],
    instructor: 'Dr. R. Shivakumar',
    instructorRole: 'Founder & Computational Chemist',
    feeInr: 1500,
    feeUsd: 30,
    brochurePdf: 'brochure_dft_gaussian.pdf',
    isUpcoming: false
  },
  {
    id: 'ws-recent-cadd',
    title: 'Comprehensive Three-Week Certificate Course on Computer-Aided Drug Design (CADD)',
    dateStr: '5th May - 23rd May 2025',
    duration: '21 Days',
    timings: '6:30 PM - 8:30 PM IST',
    mode: 'Intensive Boot Camp',
    category: 'In Silico Drug Discovery',
    topics: [
      'Structure-Based Drug Design (SBDD) and Ligand-Based Drug Design (LBDD)',
      'Molecular Docking (AutoDock Vina, PyRx, Glide)',
      '2D & 3D QSAR modeling with descriptor generation',
      'Pharmacophore generation and virtual database screening',
      'ADMET profiling and lead optimization case studies'
    ],
    instructor: 'Dr. R. Shivakumar & Invited Scientists',
    instructorRole: 'Med-Silico Lab Consortium',
    feeInr: 4500,
    feeUsd: 85,
    brochurePdf: 'brochure_cadd_course.pdf',
    isUpcoming: false
  },
  {
    id: 'ws-recent-qsar',
    title: 'Advanced Training on 2D & 3D QSAR with CoMFA & CoMSIA Modeling',
    dateStr: '4th to 13th August 2025',
    duration: '10 Days',
    timings: '6:30 PM - 8:30 PM IST',
    mode: 'Online Hands-on Workshop',
    category: 'Computational Chemistry',
    topics: [
      'PaDEL and Mordred descriptor computation for 50+ bioactives',
      'MLR and PLS regression modeling with cross-validation Q²',
      '3D lattice field generation and CoMFA steric/electrostatic maps',
      'Williams plot applicability domain verification for journal submission'
    ],
    instructor: 'Dr. P. Deshmukh',
    instructorRole: 'QSAR Research Consultant',
    feeInr: 2200,
    feeUsd: 40,
    brochurePdf: 'brochure_qsar_training.pdf',
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
