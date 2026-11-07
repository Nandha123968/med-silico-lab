export interface WordPressThemeConfig {
  themeName: string;
  themeUri: string;
  author: string;
  description: string;
  version: string;
  primaryColor: string;
  secondaryColor: string;
}

export const DEFAULT_WP_CONFIG: WordPressThemeConfig = {
  themeName: 'Med-Silico Lab Academic Theme',
  themeUri: 'https://medsilicolab.com',
  author: 'Med-Silico Lab Computational Biology & Research Consulting',
  description: 'A professional academic WordPress theme custom-engineered for in silico drug discovery laboratories, computational chemistry, bioinformatics, and scientific publication consulting.',
  version: '1.0.0',
  primaryColor: '#0284c7', // cyan/sky
  secondaryColor: '#4f46e5', // indigo
};

export function generateWordPressTemplates(config: WordPressThemeConfig = DEFAULT_WP_CONFIG) {
  const styleCss = `/*
Theme Name: ${config.themeName}
Theme URI: ${config.themeUri}
Author: ${config.author}
Author URI: ${config.themeUri}
Description: ${config.description}
Version: ${config.version}
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: med-silico-lab
Tags: scientific, research, computational-biology, bioinformatics, academic, drug-discovery, responsive-layout
*/

/* Academic Theme Core Variables */
:root {
  --primary-color: ${config.primaryColor};
  --secondary-color: ${config.secondaryColor};
  --text-main: #0f172a;
  --text-muted: #64748b;
  --bg-slate: #f8fafc;
  --border-hairline: #e2e8f0;
}

body {
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: var(--text-main);
  background-color: var(--bg-slate);
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

.site-header {
  background: #ffffff;
  border-bottom: 1px solid var(--border-hairline);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
}

.service-card {
  background: #ffffff;
  border: 1px solid var(--border-hairline);
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.2s ease;
}

.service-card:hover {
  border-color: var(--primary-color);
  box-shadow: 0 4px 20px -2px rgba(2, 132, 199, 0.12);
}
`;

  const functionsPhp = `<?php
/**
 * ${config.themeName} functions and definitions
 *
 * @package Med_Silico_Lab
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

function med_silico_lab_setup() {
    // Add default title tag support
    add_theme_support( 'title-tag' );

    // Enable post thumbnails
    add_theme_support( 'post-thumbnails' );

    // Add support for custom logo
    add_theme_support( 'custom-logo', array(
        'height'      => 80,
        'width'       => 280,
        'flex-height' => true,
        'flex-width'  => true,
    ) );

    // Register primary navigation menu
    register_nav_menus( array(
        'primary-menu' => esc_html__( 'Primary Academic Navigation', 'med-silico-lab' ),
        'footer-menu'  => esc_html__( 'Footer Quick Links', 'med-silico-lab' ),
    ) );
}
add_action( 'after_setup_theme', 'med_silico_lab_setup' );

function med_silico_lab_scripts() {
    // Enqueue Google Fonts
    wp_enqueue_style( 'med-silico-fonts', 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap', array(), null );

    // Enqueue Tailwind stylesheet from CDN for fast styling
    wp_enqueue_script( 'tailwind-cdn', 'https://cdn.tailwindcss.com', array(), null, false );

    // Enqueue main style.css
    wp_enqueue_style( 'med-silico-style', get_stylesheet_uri(), array(), '${config.version}' );
}
add_action( 'wp_enqueue_scripts', 'med_silico_lab_scripts' );

// Register Custom Post Types for Workshops and Services
function med_silico_register_cpts() {
    register_post_type( 'ms_service', array(
        'labels' => array(
            'name'          => __( 'Services', 'med-silico-lab' ),
            'singular_name' => __( 'Service', 'med-silico-lab' ),
        ),
        'public'      => true,
        'has_archive' => true,
        'supports'    => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
        'menu_icon'   => 'dashicons-beaker',
    ) );

    register_post_type( 'ms_workshop', array(
        'labels' => array(
            'name'          => __( 'Workshops', 'med-silico-lab' ),
            'singular_name' => __( 'Workshop', 'med-silico-lab' ),
        ),
        'public'      => true,
        'has_archive' => true,
        'supports'    => array( 'title', 'editor', 'thumbnail', 'custom-fields' ),
        'menu_icon'   => 'dashicons-welcome-learn-more',
    ) );
}
add_action( 'init', 'med_silico_register_cpts' );
`;

  const headerPhp = `<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class( 'bg-slate-50 text-slate-900 font-sans' ); ?>>
<?php wp_body_open(); ?>

<header class="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        <!-- Brand Wordmark / Custom Logo -->
        <div class="flex items-center gap-3">
            <?php 
            if ( has_custom_logo() ) {
                the_custom_logo();
            } else {
                echo '<a href="' . esc_url( home_url( '/' ) ) . '" class="text-xl font-bold tracking-tight text-slate-900 hover:text-cyan-700 transition flex items-center gap-2">';
                echo '<span class="w-8 h-8 rounded bg-cyan-800 text-white flex items-center justify-center font-mono font-bold text-sm">MS</span>';
                echo '<span>Med-Silico Lab</span>';
                echo '</a>';
            }
            ?>
        </div>

        <!-- Navigation Links -->
        <nav class="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="hover:text-cyan-700 transition">Home</a>
            <a href="<?php echo esc_url( home_url( '/about/' ) ); ?>" class="hover:text-cyan-700 transition">About Us</a>
            <a href="<?php echo esc_url( home_url( '/services/' ) ); ?>" class="hover:text-cyan-700 transition">Our Services</a>
            <a href="<?php echo esc_url( home_url( '/publication-consulting/' ) ); ?>" class="hover:text-cyan-700 transition">Publication Consulting</a>
            <a href="<?php echo esc_url( home_url( '/workshops/' ) ); ?>" class="hover:text-cyan-700 transition">Workshops</a>
            <a href="<?php echo esc_url( home_url( '/resources/' ) ); ?>" class="hover:text-cyan-700 transition">Resources</a>
            <a href="<?php echo esc_url( home_url( '/testimonials/' ) ); ?>" class="hover:text-cyan-700 transition">Testimonials</a>
            <a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="hover:text-cyan-700 transition">Contact & Openings</a>
        </nav>

        <!-- CTA Action -->
        <div class="flex items-center gap-3">
            <a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-cyan-700 rounded hover:bg-cyan-800 transition">
                Consultation Enquiry
            </a>
        </div>
    </div>
</header>
`;

  const footerPhp = `<?php
/**
 * The template for displaying the footer
 *
 * @package Med_Silico_Lab
 */
?>
<footer class="bg-slate-950 text-slate-300 border-t border-slate-800 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div class="md:col-span-2">
            <div class="flex items-center gap-2 mb-4">
                <span class="w-8 h-8 rounded bg-cyan-600 text-white flex items-center justify-center font-mono font-bold text-sm">MS</span>
                <span class="text-xl font-bold text-white tracking-tight">Med-Silico Lab</span>
            </div>
            <p class="text-slate-400 text-sm max-w-md leading-relaxed mb-6 font-serif">
                Pioneering in silico drug discovery, molecular dynamics simulations, QSAR modeling, and high-impact manuscript publication consulting for biomedical researchers and academic institutions worldwide.
            </p>
            <div class="text-xs font-mono text-slate-500">
                Registered Research Consulting Hub · In Silico Bio-Computing · Phone: +91 8310468262
            </div>
        </div>

        <div>
            <h4 class="text-sm font-semibold uppercase tracking-wider text-white mb-4">In Silico Services</h4>
            <ul class="space-y-2 text-sm text-slate-400">
                <li><a href="<?php echo esc_url( home_url( '/services/#docking' ) ); ?>" class="hover:text-white transition">Molecular Docking</a></li>
                <li><a href="<?php echo esc_url( home_url( '/services/#adme' ) ); ?>" class="hover:text-white transition">ADME & Toxicity</a></li>
                <li><a href="<?php echo esc_url( home_url( '/services/#md' ) ); ?>" class="hover:text-white transition">MD Simulations</a></li>
                <li><a href="<?php echo esc_url( home_url( '/services/#qsar' ) ); ?>" class="hover:text-white transition">2D & 3D QSAR</a></li>
                <li><a href="<?php echo esc_url( home_url( '/services/#vaccine' ) ); ?>" class="hover:text-white transition">In Silico Vaccine Design</a></li>
            </ul>
        </div>

        <div>
            <h4 class="text-sm font-semibold uppercase tracking-wider text-white mb-4">Publication Guidance</h4>
            <ul class="space-y-2 text-sm text-slate-400">
                <li><a href="<?php echo esc_url( home_url( '/publication-consulting/' ) ); ?>" class="hover:text-white transition">Manuscript Preparation</a></li>
                <li><a href="<?php echo esc_url( home_url( '/publication-consulting/' ) ); ?>" class="hover:text-white transition">Publication Mentorship</a></li>
                <li><a href="<?php echo esc_url( home_url( '/publication-consulting/' ) ); ?>" class="hover:text-white transition">Plagiarism Inspection</a></li>
                <li><a href="<?php echo esc_url( home_url( '/publication-consulting/' ) ); ?>" class="hover:text-white transition">SCI Journal Selection</a></li>
                <li><a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="hover:text-white transition">Call for Facilitators</a></li>
            </ul>
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-900 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4 font-serif">
        <div>© <?php echo date('Y'); ?> Med-Silico Lab. All Rights Reserved. Desk: +91 8310468262</div>
        <div class="flex items-center gap-6">
            <a href="#" class="hover:text-slate-400">Research Ethics</a>
            <a href="#" class="hover:text-slate-400">Data Confidentiality</a>
            <a href="#" class="hover:text-slate-400">Terms of Consultation</a>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
`;

  const frontPagePhp = `<?php
/**
 * Template Name: Front Page
 *
 * @package Med_Silico_Lab
 */

get_header(); ?>

<!-- Academic Hero Section -->
<section class="relative bg-slate-950 text-white overflow-hidden py-24 border-b border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
                Empirical Rigor · High-Performance In Silico Discovery
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                Accelerate In Silico Drug Discovery with Med-Silico Lab
            </h1>
            <p class="text-lg text-slate-300 leading-relaxed mb-8">
                End-to-end computational biology, molecular dynamics simulations, QSAR modeling, and high-impact SCI manuscript publication consulting tailored for global biomedical researchers.
            </p>
            <div class="flex flex-wrap items-center gap-4">
                <a href="<?php echo esc_url( home_url( '/services/' ) ); ?>" class="px-6 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm rounded shadow-sm transition">
                    Explore Research Services
                </a>
                <a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm rounded transition">
                    Book In Silico Consultation
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Core Services List -->
<section class="py-20 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
            <h2 class="text-3xl font-bold text-slate-900 tracking-tight">Our Services & Solutions</h2>
            <p class="mt-4 text-slate-600 text-sm">
                Structured computational drug discovery services and publication guidance following international academic standards.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Molecular Docking -->
            <div class="service-card">
                <span class="text-xs font-mono text-cyan-700 font-bold">IN SILICO</span>
                <h3 class="text-lg font-bold text-slate-900 mt-2 mb-2">Molecular Docking</h3>
                <p class="text-sm text-slate-600">Receptor-ligand binding pose prediction, affinity calculation (kcal/mol), and active site interaction profiling.</p>
            </div>
            <!-- ADME Prediction -->
            <div class="service-card">
                <span class="text-xs font-mono text-cyan-700 font-bold">PHARMACOKINETICS</span>
                <h3 class="text-lg font-bold text-slate-900 mt-2 mb-2">ADME Prediction</h3>
                <p class="text-sm text-slate-600">Absorption, distribution, metabolism, and excretion analysis with Lipinski Rule of 5 and BOILED-Egg evaluation.</p>
            </div>
            <!-- Toxicity Prediction -->
            <div class="service-card">
                <span class="text-xs font-mono text-cyan-700 font-bold">TOXICOLOGY</span>
                <h3 class="text-lg font-bold text-slate-900 mt-2 mb-2">Toxicity Prediction</h3>
                <p class="text-sm text-slate-600">ProTox-III organ toxicity, LD50 classification, Ames mutagenicity, and cardiotoxicity screening.</p>
            </div>
            <!-- MD Simulations -->
            <div class="service-card">
                <span class="text-xs font-mono text-cyan-700 font-bold">MOLECULAR DYNAMICS</span>
                <h3 class="text-lg font-bold text-slate-900 mt-2 mb-2">MD Simulations</h3>
                <p class="text-sm text-slate-600">GPU-accelerated GROMACS 50ns-500ns trajectories, RMSD, RMSF, Rg, SASA, and MM-PBSA binding free energy.</p>
            </div>
            <!-- QSAR Study -->
            <div class="service-card">
                <span class="text-xs font-mono text-cyan-700 font-bold">STATISTICAL MODELING</span>
                <h3 class="text-lg font-bold text-slate-900 mt-2 mb-2">QSAR Study</h3>
                <p class="text-sm text-slate-600">2D descriptor calculation, MLR/PLS regression modeling, internal/external cross-validation, and applicability domain.</p>
            </div>
            <!-- 3D QSAR -->
            <div class="service-card">
                <span class="text-xs font-mono text-cyan-700 font-bold">SPATIAL FIELDS</span>
                <h3 class="text-lg font-bold text-slate-900 mt-2 mb-2">3D QSAR</h3>
                <p class="text-sm text-slate-600">CoMFA and CoMSIA 3D steric and electrostatic isocontour maps for guided medicinal chemistry lead optimization.</p>
            </div>
            <!-- Pharmacophore Modeling -->
            <div class="service-card">
                <span class="text-xs font-mono text-cyan-700 font-bold">VIRTUAL SCREENING</span>
                <h3 class="text-lg font-bold text-slate-900 mt-2 mb-2">Pharmacophore Modeling</h3>
                <p class="text-sm text-slate-600">Spatial chemical feature generation (HBA, HBD, HYD, ARO) and large-scale virtual screening against ZINC databases.</p>
            </div>
            <!-- In Silico Vaccine Design -->
            <div class="service-card">
                <span class="text-xs font-mono text-cyan-700 font-bold">IMMUNOINFORMATICS</span>
                <h3 class="text-lg font-bold text-slate-900 mt-2 mb-2">In Silico Vaccine Design</h3>
                <p class="text-sm text-slate-600">Multi-epitope construct engineering, CTL/HTL/B-cell mapping, AlphaFold 3D modeling, and C-ImmSim simulation.</p>
            </div>
            <!-- Bioinformatics -->
            <div class="service-card">
                <span class="text-xs font-mono text-cyan-700 font-bold">GENOMICS</span>
                <h3 class="text-lg font-bold text-slate-900 mt-2 mb-2">Bioinformatics</h3>
                <p class="text-sm text-slate-600">RNA-seq differential gene expression, Gene Ontology enrichment, phylogenetics, and metagenomics pipelines.</p>
            </div>
            <!-- Manuscript Preparation -->
            <div class="service-card border-indigo-200 bg-indigo-50/30">
                <span class="text-xs font-mono text-indigo-700 font-bold">PUBLICATION GUIDANCE</span>
                <h3 class="text-lg font-bold text-slate-900 mt-2 mb-2">Manuscript Preparation Guidance</h3>
                <p class="text-sm text-slate-600">Technical drafting, 300+ DPI ChemDraw structure rendering, Graphical Abstract curation, and IMRaD structuring.</p>
            </div>
            <!-- Publication Guidance -->
            <div class="service-card border-indigo-200 bg-indigo-50/30">
                <span class="text-xs font-mono text-indigo-700 font-bold">EDITORIAL SUPPORT</span>
                <h3 class="text-lg font-bold text-slate-900 mt-2 mb-2">Publication Guidance</h3>
                <p class="text-sm text-slate-600">Reviewer critique resolution, technical query deconstruction, supplementary simulation data, and submission support.</p>
            </div>
            <!-- Plagiarism Checking -->
            <div class="service-card border-indigo-200 bg-indigo-50/30">
                <span class="text-xs font-mono text-indigo-700 font-bold">INTEGRITY AUDIT</span>
                <h3 class="text-lg font-bold text-slate-900 mt-2 mb-2">Plagiarism Checking & Paraphrasing</h3>
                <p class="text-sm text-slate-600">Certified iThenticate/Turnitin similarity analysis with ethical scientific paraphrasing guaranteeing <10% index.</p>
            </div>
            <!-- Journal Selection -->
            <div class="service-card border-indigo-200 bg-indigo-50/30">
                <span class="text-xs font-mono text-indigo-700 font-bold">STRATEGIC MATCH</span>
                <h3 class="text-lg font-bold text-slate-900 mt-2 mb-2">Journal Selection</h3>
                <p class="text-sm text-slate-600">Vetted shortlisting of 3-5 SCI/Scopus Q1/Q2 journals matched to study scope, turnaround speed, and APC budget.</p>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
`;

  const pageServicesPhp = `<?php
/**
 * Template Name: Our Services Page
 *
 * @package Med_Silico_Lab
 */

get_header(); ?>

<div class="bg-slate-900 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold tracking-tight text-white">Our Services & Solutions</h1>
        <p class="text-slate-300 mt-2 max-w-2xl">High-throughput in silico drug discovery, biophysical modeling, and academic publishing mentorship for global research scholars.</p>
    </div>
</div>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <?php
    $services_query = new WP_Query( array(
        'post_type'      => 'ms_service',
        'posts_per_page' => -1,
        'orderby'        => 'menu_order',
        'order'          => 'ASC',
    ) );

    if ( $services_query->have_posts() ) :
        echo '<div class="grid grid-cols-1 md:grid-cols-2 gap-8">';
        while ( $services_query->have_posts() ) : $services_query->the_post();
            ?>
            <article class="bg-white border border-slate-200 rounded-lg p-6 hover:border-cyan-600 transition">
                <h2 class="text-xl font-bold text-slate-900 mb-2"><?php the_title(); ?></h2>
                <div class="text-slate-600 text-sm leading-relaxed mb-4"><?php the_excerpt(); ?></div>
                <a href="<?php the_permalink(); ?>" class="text-xs font-semibold text-cyan-700 hover:text-cyan-800 uppercase tracking-wider">View Full Methodology & Deliverables →</a>
            </article>
            <?php
        endwhile;
        echo '</div>';
        wp_reset_postdata();
    endif;
    ?>
</div>

<?php get_footer(); ?>
`;

  return {
    'style.css': styleCss,
    'functions.php': functionsPhp,
    'header.php': headerPhp,
    'footer.php': footerPhp,
    'front-page.php': frontPagePhp,
    'page-services.php': pageServicesPhp,
    'index.php': `<?php
/**
 * Main Template File
 *
 * @package Med_Silico_Lab
 */

get_header(); ?>

<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <?php
    if ( have_posts() ) :
        while ( have_posts() ) : the_post();
            the_content();
        endwhile;
    else :
        echo '<p>No content found.</p>';
    endif;
    ?>
</main>

<?php get_footer(); ?>
`
  };
}

export async function createWordPressZip(config: WordPressThemeConfig = DEFAULT_WP_CONFIG): Promise<Blob> {
  const { default: JSZip } = await import('jszip');
  const zip = new JSZip();
  const templates = generateWordPressTemplates(config);
  
  const themeFolder = zip.folder('med-silico-lab-theme');
  if (themeFolder) {
    for (const [filename, content] of Object.entries(templates)) {
      themeFolder.file(filename, content);
    }
    // Add readme.txt
    themeFolder.file('README.txt', `Med-Silico Lab WordPress Theme
==================================================
How to Install:
1. Log in to your WordPress Admin Dashboard (wp-admin).
2. Go to Appearance > Themes > Add New > Upload Theme.
3. Choose this zip file and click "Install Now".
4. Click "Activate" after installation.
5. Create pages for Home, About Us, Services, Workshops, Resources, Testimonials, and Contact.
`);
  }

  return await zip.generateAsync({ type: 'blob' });
}
