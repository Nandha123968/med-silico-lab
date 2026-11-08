// Software logos
import quantumEspressoLogo from '../assets/images/software_logos/quantum_espresso.png';
import gaussianLogo from '../assets/images/software_logos/gaussian.png';
import vestaLogo from '../assets/images/software_logos/vesta.png';
import gromacsLogo from '../assets/images/software_logos/gromacs.png';
import originproLogo from '../assets/images/software_logos/originpro.png';
import topspinLogo from '../assets/images/software_logos/topspin.png';
import orcaLogo from '../assets/images/software_logos/orca.png';
import mnovaLogo from '../assets/images/software_logos/mnova.png';
import pymolLogo from '../assets/images/software_logos/pymol.png';
import buraiLogo from '../assets/images/software_logos/burai.png';
import mendeleyLogo from '../assets/images/software_logos/mendeley.png';
import openBabelLogo from '../assets/images/software_logos/open_babel.png';
import mglToolsLogo from '../assets/images/software_logos/mgl_tools.png';
import autodockLogo from '../assets/images/software_logos/autodock.png';
import autodockVinaLogo from '../assets/images/software_logos/autodock_vina.png';
import ucsfChimeraLogo from '../assets/images/software_logos/ucsf_chimera.png';
import pyrxLogo from '../assets/images/software_logos/pyrx.png';
import dockamonLogo from '../assets/images/software_logos/dockamon.png';
import mzdockLogo from '../assets/images/software_logos/mzdock.png';
import avogadroLogo from '../assets/images/software_logos/avogadro.png';
import imagejLogo from '../assets/images/software_logos/imagej.png';
import vmdLogo from '../assets/images/software_logos/vmd.png';
import namdLogo from '../assets/images/software_logos/namd.png';
import gsasIiLogo from '../assets/images/software_logos/gsas_ii.png';
import fullprofLogo from '../assets/images/software_logos/fullprof.png';
import janaLogo from '../assets/images/software_logos/jana.png';
import cp2kLogo from '../assets/images/software_logos/cp2k.png';
import chemsketchLogo from '../assets/images/software_logos/chemsketch.png';
import lammpsLogo from '../assets/images/software_logos/lammps.png';
import abinitLogo from '../assets/images/software_logos/abinit.png';
import gamessLogo from '../assets/images/software_logos/gamess.png';
import openchromeLogo from '../assets/images/software_logos/openchrome.png';
import modellerLogo from '../assets/images/software_logos/modeller.png';
import zoteroLogo from '../assets/images/software_logos/zotero.png';
import blenderLogo from '../assets/images/software_logos/blender.png';
import inkscapeLogo from '../assets/images/software_logos/inkscape.png';
import labplotLogo from '../assets/images/software_logos/labplot.png';
import molviewLogo from '../assets/images/software_logos/molview.png';
import spectragryphLogo from '../assets/images/software_logos/spectragryph.png';
import clusproLogo from '../assets/images/software_logos/cluspro.png';
import swissModelLogo from '../assets/images/software_logos/swiss_model.png';
import swissadmeLogo from '../assets/images/software_logos/swissadme.png';
import admetlabLogo from '../assets/images/software_logos/admetlab.png';
import protoxLogo from '../assets/images/software_logos/protox.png';
import stoptoxLogo from '../assets/images/software_logos/stoptox.png';
import qsarianLogo from '../assets/images/software_logos/qsarian.png';
import padelLogo from '../assets/images/software_logos/padel.png';
import ranqsarLogo from '../assets/images/software_logos/ranqsar.png';
import dtcQsarLogo from '../assets/images/software_logos/dtc_qsar.png';
import chemmasterLogo from '../assets/images/software_logos/chemmaster.png';
import qsar3dLogo from '../assets/images/software_logos/3d_qsar.png';
import pharmitLogo from '../assets/images/software_logos/pharmit.png';
import zincpharmerLogo from '../assets/images/software_logos/zincpharmer.png';
import cytoscapeLogo from '../assets/images/software_logos/cytoscape.png';
import stringDbLogo from '../assets/images/software_logos/string_db.png';
import genecardsLogo from '../assets/images/software_logos/genecards.png';
import nmrdbLogo from '../assets/images/software_logos/nmrdb.png';
import halalFtirLogo from '../assets/images/software_logos/halal_ftir.png';
import ftirLabLogo from '../assets/images/software_logos/ftir_lab.png';
import irSolutionLogo from '../assets/images/software_logos/ir_solution.png';
import metlabLogo from '../assets/images/software_logos/metlab.png';
import matlabLogo from '../assets/images/software_logos/matlab.png';
import seamdockLogo from '../assets/images/software_logos/seamdock.png';
import hdockLogo from '../assets/images/software_logos/hdock.png';
import ortep3Logo from '../assets/images/software_logos/ortep3.png';
import mercuryLogo from '../assets/images/software_logos/mercury.png';
import olex2Logo from '../assets/images/software_logos/olex2.png';
import shelxleLogo from '../assets/images/software_logos/shelxle.png';
import bioviaDiscoveryStudioLogo from '../assets/images/software_logos/biovia_discovery_studio.png';

// Study manual images
import manualWslUbuntu from '../assets/images/manuals/manual_wsl_ubuntu.jpg';
import manualGromacsInstall from '../assets/images/manuals/manual_gromacs_install.jpg';
import manualXmgrace from '../assets/images/manuals/manual_xmgrace.jpg';
import manualMdSimulation from '../assets/images/manuals/manual_md_simulation.jpg';

export interface SoftwareToolItem {
  id: string;
  name: string;
  logo: string;
  url: string;
  category?: string;
}

export const FULL_SOFTWARE_CATALOG: SoftwareToolItem[] = [
  // 1. Molecular Docking Tools
  { id: 'autodock-vina', name: 'AutoDock Vina', logo: autodockVinaLogo, url: 'https://vina.scripps.edu/', category: 'Molecular Docking' },
  { id: 'pyrx', name: 'PyRx', logo: pyrxLogo, url: 'https://pyrx.sourceforge.io/', category: 'Molecular Docking' },
  { id: 'dockamon-pro', name: 'Dockamon Pro', logo: dockamonLogo, url: 'https://crescent-silico.com/', category: 'Molecular Docking' },
  { id: 'mzdock', name: 'MzDock', logo: mzdockLogo, url: 'https://sourceforge.net/projects/mzdock/', category: 'Molecular Docking' },
  { id: 'mgl-tools', name: 'MGL-Tools', logo: mglToolsLogo, url: 'https://sannerlab.github.io/software/mgltools/download.html', category: 'Molecular Docking' },
  { id: 'seamdock', name: 'SeamDock', logo: seamdockLogo, url: 'https://bioserv.rpbs.univ-paris-diderot.fr/services/SeamDock/', category: 'Molecular Docking' },
  { id: 'hdock', name: 'HDOCK', logo: hdockLogo, url: 'http://hdock.phys.hust.edu.cn/', category: 'Molecular Docking' },

  // 2. ADME & Toxicity Prediction Tools
  { id: 'swissadme', name: 'SwissADMET', logo: swissadmeLogo, url: 'http://www.swissadme.ch/', category: 'ADME Prediction' },
  { id: 'admetlab', name: 'ADMETLab 3.0', logo: admetlabLogo, url: 'https://admetlab3.scbdd.com/', category: 'ADME Prediction' },
  { id: 'protox-ii', name: 'ProTox II', logo: protoxLogo, url: 'https://tox-new.charite.de/protox_II/', category: 'Toxicity Prediction' },
  { id: 'stoptox', name: 'StopToX', logo: stoptoxLogo, url: 'https://stoptox.mml.unc.edu/', category: 'Toxicity Prediction' },

  // 3. 2D & 3D/4D QSAR Tools
  { id: 'qsarian', name: 'QSARIAN', logo: qsarianLogo, url: 'https://qsarian.com/', category: 'QSAR Study' },
  { id: 'padel', name: 'PaDEL', logo: padelLogo, url: 'https://www.yapcwsoft.com/dd/padeldescriptor/', category: 'QSAR Study' },
  { id: 'ranqsar', name: 'RANQSAR', logo: ranqsarLogo, url: 'https://zenodo.org/records/18779245', category: 'QSAR Study' },
  { id: 'dtc-qsar', name: 'DTC-QSAR', logo: dtcQsarLogo, url: 'https://dtc-lab.net/', category: 'QSAR Study' },
  { id: 'chem-master', name: 'Chem-Master', logo: chemmasterLogo, url: 'https://crescent-silico.com/pages/chemmaster', category: '3D/4D QSAR' },
  { id: '3d-qsar', name: '3D-QSAR', logo: qsar3dLogo, url: 'http://open3dqsar.sourceforge.net/', category: '3D/4D QSAR' },

  // 4. Pharmacophore Modeling Tools
  { id: 'pharmit', name: 'Pharmit', logo: pharmitLogo, url: 'https://pharmit.csb.pitt.edu/', category: 'Pharmacophore Modeling' },
  { id: 'zincpharmer', name: 'ZINCPharmer', logo: zincpharmerLogo, url: 'http://zincpharmer.csb.pitt.edu/', category: 'Pharmacophore Modeling' },

  // 5. Network Pharmacology Tools
  { id: 'cytoscape', name: 'CytoScape', logo: cytoscapeLogo, url: 'https://cytoscape.org/', category: 'Network Pharmacology' },
  { id: 'string-12', name: 'STRING 12.0', logo: stringDbLogo, url: 'https://string-db.org/', category: 'Network Pharmacology' },
  { id: 'genecards', name: 'GeneCards', logo: genecardsLogo, url: 'https://www.genecards.org/', category: 'Network Pharmacology' },

  // 6. Spectral & Analytical Characterization (NMR, FT-IR, LC-MS)
  { id: 'mestreonova', name: 'MestReoNova', logo: mnovaLogo, url: 'https://mestrelab.com/software/mnova/', category: 'NMR / LC-MS' },
  { id: 'nmrdb', name: 'NMRDB', logo: nmrdbLogo, url: 'https://www.nmrdb.org/', category: 'NMR Characterization' },
  { id: 'ftir-lab', name: 'FTIR Lab', logo: ftirLabLogo, url: 'https://doi.org/10.5281/zenodo.21909294', category: 'FT-IR Characterization' },
  { id: 'halal-ftir', name: 'Halal FT-IR', logo: halalFtirLogo, url: 'https://ftir.halalchem.org/', category: 'FT-IR Characterization' },
  { id: 'ir-solution', name: 'IR Solution', logo: irSolutionLogo, url: 'https://www.shimadzu.com/an/service-support/software/irsolution.html', category: 'FT-IR Characterization' },
  { id: 'matlab', name: 'MATLAB', logo: matlabLogo, url: 'https://www.mathworks.com/products/matlab.html', category: 'Data Analysis & Modeling' },
  { id: 'metlab', name: 'MetLab', logo: metlabLogo, url: 'https://www.metaboanalyst.ca/', category: 'LC-MS Analysis' },

  // 7. Quantum Chemistry & DFT Calculation
  { id: 'quantum-espresso', name: 'Quantum ESPRESSO', logo: quantumEspressoLogo, url: 'https://www.quantum-espresso.org/', category: 'DFT Calculation' },
  { id: 'dft-gaussian', name: 'DFT Gaussian', logo: gaussianLogo, url: 'https://gaussian.com/', category: 'DFT Calculation' },

  // 8. Molecular Dynamics & Visualization Suite
  { id: 'gromacs', name: 'GROMACS', logo: gromacsLogo, url: 'https://www.gromacs.org/', category: 'MD Simulations' },
  { id: 'pymol', name: 'PyMOL', logo: pymolLogo, url: 'https://pymol.org/', category: 'Molecular Modeling' },
  { id: 'vmd', name: 'VMD', logo: vmdLogo, url: 'https://www.ks.uiuc.edu/Research/vmd/', category: 'Visualization' },
  { id: 'ucsf-chimera', name: 'UCSF Chimera', logo: ucsfChimeraLogo, url: 'https://www.cgl.ucsf.edu/chimera/', category: 'Molecular Modeling' },
  { id: 'vesta', name: 'VESTA', logo: vestaLogo, url: 'https://jp-minerals.org/vesta/en/', category: 'Crystallography' },
  { id: 'orca', name: 'ORCA', logo: orcaLogo, url: 'https://www.orcasoftware.de/', category: 'Quantum Chemistry' },
  { id: 'originpro', name: 'OriginPro', logo: originproLogo, url: 'https://www.originlab.com/', category: 'Data Analysis' },
  { id: 'topspin', name: 'TopSpin', logo: topspinLogo, url: 'https://www.bruker.com/en/products-and-solutions/mr/nmr-software/topspin.html', category: 'NMR Spectroscopy' },
  { id: 'chemsketch', name: 'ChemSketch', logo: chemsketchLogo, url: 'https://www.acdlabs.com/products/chemsketch/', category: 'Chemical Drawing' },
  { id: 'open-babel', name: 'Open Babel', logo: openBabelLogo, url: 'https://openbabel.org/', category: 'Cheminformatics' },
  { id: 'avogadro', name: 'Avogadro', logo: avogadroLogo, url: 'https://avogadro.cc/', category: 'Molecular Modeling' },
  { id: 'mercury', name: 'Mercury', logo: mercuryLogo, url: 'https://www.ccdc.cam.ac.uk/solutions/software/mercury/', category: 'Crystallography' },
  { id: 'olex2', name: 'Olex2', logo: olex2Logo, url: 'https://www.olexsys.org/olex2/', category: 'Crystallography' },
  { id: 'shelxle', name: 'ShelXle', logo: shelxleLogo, url: 'https://shelxle.org/', category: 'Crystallography' },
  { id: 'biovia-discovery-studio', name: 'Biovia Discovery Studio', logo: bioviaDiscoveryStudioLogo, url: 'https://www.3ds.com/products/biovia/discovery-studio', category: 'CADD Modeling' },
  { id: 'zotero', name: 'Zotero', logo: zoteroLogo, url: 'https://www.zotero.org/', category: 'Reference Management' },
  { id: 'mendeley', name: 'Mendeley', logo: mendeleyLogo, url: 'https://www.mendeley.com/', category: 'Reference Management' },
];

export interface DatabaseItem {
  id: string;
  name: string;
  fullName: string;
  url: string;
}

export const FULL_DATABASES_LIST: DatabaseItem[] = [
  // Primary Databases directly supporting In Silico Services
  { id: 'pdb', name: 'PDB', fullName: 'RCSB Protein Data Bank', url: 'https://www.rcsb.org/' },
  { id: 'pubchem', name: 'PubChem', fullName: 'NCBI Open Chemistry Database', url: 'https://pubchem.ncbi.nlm.nih.gov/' },
  { id: 'uniprot', name: 'UniProt', fullName: 'Universal Protein Resource', url: 'https://www.uniprot.org/' },
  { id: 'string-db', name: 'STRING 12.0', fullName: 'Protein-Protein Interaction Networks', url: 'https://string-db.org/' },
  { id: 'genecards', name: 'GeneCards', fullName: 'Human Genes, Targets & Disease Database', url: 'https://www.genecards.org/' },
  { id: 'nmrdb', name: 'NMRDB', fullName: 'NMR Spectral Prediction & Reference Database', url: 'https://www.nmrdb.org/' },
  { id: 'admetlab', name: 'ADMETlab 3.0', fullName: 'Systematic ADMET Informatics Platform', url: 'https://admetlab3.scbdd.com/' },
  { id: 'protox-db', name: 'ProTox II', fullName: 'Charité Toxicological Prediction Database', url: 'https://tox-new.charite.de/protox_II/' },
  { id: 'chembl', name: 'ChEMBL', fullName: 'EMBL-EBI Bioactive Drug Discovery Database', url: 'https://www.ebi.ac.uk/chembl/' },
  { id: 'drugbank', name: 'DrugBank', fullName: 'Comprehensive Clinical Drug & Target Database', url: 'https://go.drugbank.com/' },
  { id: 'zinc20', name: 'ZINC20', fullName: 'Commercially Available Virtual Screening Database', url: 'https://zinc20.docking.org/' },
  { id: 'swisstarget', name: 'SwissTarget', fullName: 'SwissTargetPrediction Bioactive Ligand Database', url: 'http://www.swisstargetprediction.ch/' },
  { id: 'csd', name: 'CSD', fullName: 'Cambridge Structural Database (CCDC)', url: 'https://www.ccdc.cam.ac.uk/structures/' },
  { id: 'sdbs', name: 'SDBS', fullName: 'Spectral Database for Organic Compounds (NMR/IR/MS)', url: 'https://sdbs.db.aist.go.jp/' },
  { id: 'icsd', name: 'ICSD', fullName: 'Inorganic Crystal Structure Database', url: 'https://icsd.fiz-karlsruhe.de/' },
  { id: 'materials-project', name: 'Materials Project', fullName: 'Open Quantum Mechanical DFT Database', url: 'https://materialsproject.org/' },
  { id: 'bmrb', name: 'BMRB', fullName: 'Biological Magnetic Resonance Data Bank', url: 'https://bmrb.io/' },
  { id: 'hmdb', name: 'HMDB', fullName: 'Human Metabolome Database for LC-MS', url: 'https://hmdb.ca/' },
  { id: 'seamdock-server', name: 'SeamDock Server', fullName: 'RPBS Structural Docking & Virtual Screening Service', url: 'https://bioserv.rpbs.univ-paris-diderot.fr/services/SeamDock/' },
  { id: 'hdock-server', name: 'HDOCK Server', fullName: 'HUST Hybrid Macromolecular & Protein-Protein Docking Server', url: 'http://hdock.phys.hust.edu.cn/' },
];

export interface StudyManualItem {
  id: string;
  titleStrip: string;
  image: string;
  summary: string;
  fullGuideTitle: string;
  category: string;
  steps: string[];
}

export const FULL_STUDY_MANUALS: StudyManualItem[] = [
  {
    id: 'wsl-ubuntu',
    titleStrip: 'INSTALLATION OF UBUNTU ON WINDOWS USING WSL',
    image: manualWslUbuntu,
    summary: 'Windows Subsystem for Linux (WSL) provides an efficient way to run a full Linux environment directly within Windows without the need for dual-booting or virtual machines...',
    fullGuideTitle: 'Installation of Ubuntu on Windows using WSL for In Silico Chemistry',
    category: 'System Setup',
    steps: [
      'Open Windows PowerShell as Administrator and execute: wsl --install',
      'Set Ubuntu 22.04 LTS as the default WSL distribution: wsl --set-default Ubuntu-22.04',
      'Update apt repositories: sudo apt update && sudo apt upgrade -y',
      'Install essential compilation packages: sudo apt install build-essential cmake gcc g++ gfortran git curl',
      'Verify NVIDIA CUDA acceleration inside WSL: nvidia-smi'
    ]
  },
  {
    id: 'gromacs-install',
    titleStrip: 'GROMACS Installation on Ubuntu: Complete Step-by-Step Guide',
    image: manualGromacsInstall,
    summary: 'GROMACS is one of the most powerful and widely adopted open-source software packages for Molecular Dynamics simulations of biomolecular systems...',
    fullGuideTitle: 'GROMACS 2024 GPU Installation on Ubuntu: Complete Step-by-Step Guide',
    category: 'Molecular Dynamics',
    steps: [
      'Download the latest GROMACS release tarball from ftp.gromacs.org',
      'Extract archive and navigate to source directory: tar xvf gromacs-2024.tar.gz && cd gromacs-2024',
      'Create build directory: mkdir build && cd build',
      'Configure CMake with CUDA and AVX2 SIMD: cmake .. -DGMX_BUILD_OWN_FFTW=ON -DREGRESSIONTEST_DOWNLOAD=ON -DGMX_GPU=CUDA',
      'Compile with multi-threading: make -j$(nproc)',
      'Run regression tests and install: sudo make install && source /usr/local/gromacs/bin/GMXRC'
    ]
  },
  {
    id: 'xmgrace-ubuntu',
    titleStrip: 'Installing XMGrace on Ubuntu: A Simple Step-by-Step Guide',
    image: manualXmgrace,
    summary: 'Data visualization plays a vital role in computational chemistry and molecular dynamics studies. When working with simulation data, such as RMSD plots, energy profiles...',
    fullGuideTitle: 'Installing & Operating XMGrace on Ubuntu for MD Trajectory Analysis',
    category: 'Data Visualization',
    steps: [
      'Install Grace on Ubuntu via apt: sudo apt install grace',
      'Verify installation by executing: xmgrace',
      'Plot RMSD files generated by GROMACS: xmgrace -nxy rmsd.xvg',
      'Format axis labels, tick intervals, and legend properties for 300 DPI journal publication',
      'Export high-resolution vector plots: File > Print Setup > EPS or PNG at 600 DPI'
    ]
  },
  {
    id: 'md-protein-water',
    titleStrip: 'Molecular Dynamics Simulation of a Protein in Water USING GROMACS',
    image: manualMdSimulation,
    summary: 'Molecular Dynamics (MD) simulation is a powerful computational technique used to study the structural stability, dynamics, and interactions of biomolecules at atomic resolution...',
    fullGuideTitle: 'Molecular Dynamics Simulation of a Protein in Water using GROMACS',
    category: 'MD Protocol',
    steps: [
      'Strip crystal water molecules from target PDB: grep -v HOH 1aki.pdb > 1aki_clean.pdb',
      'Generate topology with CHARMM36m force field: gmx pdb2gmx -f 1aki_clean.pdb -o 1aki_processed.gro -water tip3p',
      'Define cubic periodic box: gmx editconf -f 1aki_processed.gro -o 1aki_newbox.gro -c -d 1.0 -bt cubic',
      'Solvate system with TIP3P water: gmx solvate -cp 1aki_newbox.gro -cs spc216.gro -o 1aki_solv.gro -p topol.top',
      'Neutralize net charge with 0.15M NaCl: gmx genion -s ions.tpr -o 1aki_solv_ions.gro -p topol.top -pname NA -nname CL -neutral',
      'Execute energy minimization followed by NVT (100 ps) and NPT (100 ps) equilibration',
      'Run production MD: gmx mdrun -v -deffnm md_0_100ns'
    ]
  }
];

