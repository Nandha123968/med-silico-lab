// Software logos
import quantumEspressoLogo from '../assets/images/software_logos/quantum_espresso.png';
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
  // Row 1
  { id: 'quantum-espresso', name: 'Quantum Espresso', logo: quantumEspressoLogo, url: 'https://www.quantum-espresso.org/' },
  { id: 'vesta', name: 'VESTA', logo: vestaLogo, url: 'https://jp-minerals.org/vesta/en/' },
  { id: 'gromacs', name: 'GROMACS', logo: gromacsLogo, url: 'https://www.gromacs.org/' },
  { id: 'originpro', name: 'OriginPro', logo: originproLogo, url: 'https://www.originlab.com/' },
  { id: 'topspin', name: 'TopSpin', logo: topspinLogo, url: 'https://www.bruker.com/en/products-and-solutions/mr/nmr-software/topspin.html' },
  { id: 'orca', name: 'ORCA', logo: orcaLogo, url: 'https://www.orcasoftware.de/' },

  // Row 2
  { id: 'mnova', name: 'MNova', logo: mnovaLogo, url: 'https://mestrelab.com/software/mnova/' },
  { id: 'pymol', name: 'PyMOL', logo: pymolLogo, url: 'https://pymol.org/' },
  { id: 'burai', name: 'BURAI', logo: buraiLogo, url: 'https://nisweb.nis-ei.eng.hokudai.ac.jp/~kuno/burai/' },
  { id: 'mendeley', name: 'Mendeley', logo: mendeleyLogo, url: 'https://www.mendeley.com/' },
  { id: 'open-babel', name: 'Open Babel', logo: openBabelLogo, url: 'https://openbabel.org/' },
  { id: 'mgl-tools', name: 'MGL Tools', logo: mglToolsLogo, url: 'https://ccsb.scripps.edu/mgltools/' },
  { id: 'autodock', name: 'AutoDock', logo: autodockLogo, url: 'https://autodock.scripps.edu/' },

  // Row 3
  { id: 'autodock-vina', name: 'AutoDock Vina', logo: autodockVinaLogo, url: 'https://vina.scripps.edu/' },
  { id: 'ucsf-chimera', name: 'UCSF Chimera', logo: ucsfChimeraLogo, url: 'https://www.cgl.ucsf.edu/chimera/' },
  { id: 'pyrx', name: 'PyRx', logo: pyrxLogo, url: 'https://pyrx.sourceforge.io/' },
  { id: 'avogadro', name: 'Avogadro', logo: avogadroLogo, url: 'https://avogadro.cc/' },
  { id: 'imagej', name: 'Image J', logo: imagejLogo, url: 'https://imagej.net/' },
  { id: 'vmd', name: 'VMD', logo: vmdLogo, url: 'https://www.ks.uiuc.edu/Research/vmd/' },
  { id: 'namd', name: 'NAMD', logo: namdLogo, url: 'https://www.ks.uiuc.edu/Research/namd/' },

  // Row 4
  { id: 'gsas-ii', name: 'GSAS-II', logo: gsasIiLogo, url: 'https://subversion.xray.aps.anl.gov/trac/pyGSAS' },
  { id: 'fullprof', name: 'FullProf', logo: fullprofLogo, url: 'https://www.ill.eu/sites/fullprof/' },
  { id: 'jana', name: 'JANA', logo: janaLogo, url: 'http://jana.fzu.cz/' },
  { id: 'cp2k', name: 'CP2K', logo: cp2kLogo, url: 'https://www.cp2k.org/' },
  { id: 'chemsketch', name: 'ChemSketch', logo: chemsketchLogo, url: 'https://www.acdlabs.com/products/chemsketch/' },
  { id: 'lammps', name: 'LAMMPS', logo: lammpsLogo, url: 'https://www.lammps.org/' },
  { id: 'abinit', name: 'ABINIT', logo: abinitLogo, url: 'https://www.abinit.org/' },

  // Row 5
  { id: 'gamess', name: 'GAMESS', logo: gamessLogo, url: 'https://www.msg.chem.iastate.edu/gamess/' },
  { id: 'openchrome', name: 'OpenChrome', logo: openchromeLogo, url: 'https://openchrom.net/' },
  { id: 'modeller', name: 'MODELLER', logo: modellerLogo, url: 'https://salilab.org/modeller/' },
  { id: 'zotero', name: 'Zotero', logo: zoteroLogo, url: 'https://www.zotero.org/' },
  { id: 'blender', name: 'Blender', logo: blenderLogo, url: 'https://www.blender.org/' },
  { id: 'inkscape', name: 'Inkscape', logo: inkscapeLogo, url: 'https://inkscape.org/' },
  { id: 'labplot', name: 'LabPlot', logo: labplotLogo, url: 'https://labplot.kde.org/' },

  // Row 6
  { id: 'molview', name: 'MolView', logo: molviewLogo, url: 'https://molview.org/' },
  { id: 'spectragryph', name: 'Spectragryph', logo: spectragryphLogo, url: 'https://www.effemm2.de/spectragryph/' },
  { id: 'cluspro', name: 'ClusPro', logo: clusproLogo, url: 'https://cluspro.bu.edu/' },
  { id: 'swiss-model', name: 'SWISS-MODEL', logo: swissModelLogo, url: 'https://swissmodel.expasy.org/' },
  { id: 'swissadme', name: 'SwissADME', logo: swissadmeLogo, url: 'http://www.swissadme.ch/' },
  { id: 'ortep-3', name: 'ORTEP-3', logo: ortep3Logo, url: 'https://www.chem.gla.ac.uk/~louis/software/ortep3/' },

  // Row 7 (Page 2)
  { id: 'mercury', name: 'Mercury', logo: mercuryLogo, url: 'https://www.ccdc.cam.ac.uk/solutions/software/mercury/' },
  { id: 'olex2', name: 'Olex2', logo: olex2Logo, url: 'https://www.olexsys.org/olex2/' },
  { id: 'shelxle', name: 'ShelXle', logo: shelxleLogo, url: 'https://shelxle.org/' },
  { id: 'biovia-discovery-studio', name: 'Biovia Discovery Studio', logo: bioviaDiscoveryStudioLogo, url: 'https://www.3ds.com/products/biovia/discovery-studio' },
];

export interface DatabaseItem {
  id: string;
  name: string;
  fullName: string;
  url: string;
}

export const FULL_DATABASES_LIST: DatabaseItem[] = [
  // Row 1
  { id: 'csd', name: 'CSD', fullName: 'Cambridge Structural Database', url: 'https://www.ccdc.cam.ac.uk/structures/' },
  { id: 'icsd', name: 'ICSD', fullName: 'Inorganic Crystal Structure Database', url: 'https://icsd.fiz-karlsruhe.de/' },
  { id: 'icdd', name: 'ICDD', fullName: 'International Centre for Diffraction Data', url: 'https://www.icdd.com/' },
  { id: '2d-hub', name: '2D-Hub', fullName: '2D Materials Repository & Hub', url: 'https://www.2dmatpedia.org/' },
  { id: 'materials-project', name: 'Materials Project', fullName: 'Materials Project Database', url: 'https://materialsproject.org/' },
  { id: 'pdb', name: 'PDB', fullName: 'RCSB Protein Data Bank', url: 'https://www.rcsb.org/' },
  { id: 'pubchem', name: 'PubChem', fullName: 'NCBI Open Chemistry Database', url: 'https://pubchem.ncbi.nlm.nih.gov/' },
  { id: 'uniprot', name: 'UniProt', fullName: 'Universal Protein Resource', url: 'https://www.uniprot.org/' },
  { id: 'sdbs', name: 'SDBS', fullName: 'Spectral Database for Organic Compounds', url: 'https://sdbs.db.aist.go.jp/' },

  // Row 2
  { id: 'rruff', name: 'RRUFF', fullName: 'RRUFF Mineral & Raman Database', url: 'https://rruff.info/' },
  { id: 'bmrb', name: 'BMRB', fullName: 'Biological Magnetic Resonance Data Bank', url: 'https://bmrb.io/' },
  { id: 'massbank', name: 'MassBank', fullName: 'High Resolution Mass Spectral Database', url: 'https://massbank.eu/' },
  { id: 'hmdb', name: 'HMDB', fullName: 'Human Metabolome Database', url: 'https://hmdb.ca/' },
  { id: 'gnps', name: 'GNPS', fullName: 'Global Natural Products Social Molecular Networking', url: 'https://gnps.ucsd.edu/' },
  { id: 'photochemcad', name: 'PhotochemCAD', fullName: 'Photochemical & Spectral Database', url: 'https://photochemcad.com/' },
  { id: 'pride', name: 'PRIDE', fullName: 'PRIDE Proteomics Identifications Database', url: 'https://www.ebi.ac.uk/pride/' },
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
