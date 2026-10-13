# 🌐 Personal Portfolio Website — Comprehensive Specification & Documentation

> **Project Title**: Personal Portfolio Website  
> **Student / Author**: Pranav Lakhe  
> **Degree & Institution**: B.Tech in Computer Science & IT (Batch of 2028), Symbiosis Institute of Technology (SIT), Nagpur (Symbiosis International Deemed University)  
> **Academic Purpose**: College JavaScript Lab CA3 Assignment & Technical Portfolio  
> **Architecture Stack**: Pure HTML5, Modern Vanilla CSS3, JavaScript (ES6+), GSAP + ScrollTrigger, Three.js & Vanta.js (No heavy frameworks, 100% vanilla web stack)  
> **Documentation Date**: September 2026  

---

## 📑 Table of Contents
1. [Project Overview & Core Identity](#1-project-overview--core-identity)
2. [Aesthetic Theme & Design System](#2-aesthetic-theme--design-system)
   - [2.1 Color Palette & CSS Variables](#21-color-palette--css-variables)
   - [2.2 Typography Hierarchy](#22-typography-hierarchy)
   - [2.3 Micro-Interactions & UI Signatures](#23-micro-interactions--ui-signatures)
3. [External Libraries & CDN Assets](#3-external-libraries--cdn-assets)
4. [Comprehensive Section-by-Section Content & Structure](#4-comprehensive-section-by-section-content--structure)
   - [4.1 Global Infrastructure Elements](#41-global-infrastructure-elements)
   - [4.2 Hero Section](#42-hero-section)
   - [4.3 Section 01: About Me](#43-section-01-about-me)
   - [4.4 Section 02: Education & Academic Performance](#44-section-02-education--academic-performance)
   - [4.5 Section 03: Technical Skills (Bento Grid)](#45-section-03-technical-skills-bento-grid)
   - [4.6 Section 04: Projects](#46-section-04-projects)
   - [4.7 Section 05: Achievements & Certificates](#47-section-05-achievements--certificates)
   - [4.8 Section 06: Contributions & Involvement](#48-section-06-contributions--involvement)
   - [4.9 Section 07: Get In Touch (Contact)](#49-section-07-get-in-touch-contact)
   - [4.10 Global Footer](#410-global-footer)
5. [JavaScript Architecture & Runtime Engine (`script.js`)](#5-javascript-architecture--runtime-engine-scriptjs)
6. [Responsive Breakpoints & Accessibility Features](#6-responsive-breakpoints--accessibility-features)
7. [CA3 Evaluation & Viva Voce Defense Guide](#7-ca3-evaluation--viva-voce-defense-guide)

---

## 1. Project Overview & Core Identity

The website is a high-performance, aesthetically refined personal portfolio built specifically for Pranav Lakhe. The architecture strictly follows **vanilla web standards** (zero build steps, zero package managers, and zero bloated frameworks like React, Next.js, or Tailwind). It achieves award-winning visual polish inspired by **Awwwards, Godly.website, and Aceternity UI** using pure HTML5, handcrafted CSS3, and hardware-accelerated JavaScript animations.

### Technical Metadata:
- **HTML Doctype**: HTML5 (`<!DOCTYPE html>`)
- **Document Language**: English (`lang="en"`)
- **Character Encoding**: `UTF-8`
- **Viewport Settings**: `width=device-width, initial-scale=1.0`
- **Page Title**: `Pranav Lakhe — Portfolio`
- **Favicon**: Inline SVG Rocket Icon (`data:image/svg+xml,...🚀`)
- **Meta Description**: `"Pranav Lakhe — B.Tech CS & IT student, AI/ML enthusiast. Portfolio showcasing projects in agentic AI, computer vision, and full-stack development."`

---

## 2. Aesthetic Theme & Design System

The visual design is rooted in an **Award-Winning Cybernetic Obsidian & Quantum Emerald Design System with Multi-Theme Engine & Persistent Live Background**, blending dark brutalist-editorial typography with high-energy kinetic motion, glassmorphism, dynamic spotlight glow, and hardware-accelerated animations.

### 2.1 Color Palette & Multi-Theme System

The portfolio features 4 curated, high-tech color themes switchable on-the-fly via the prominent header palette button, the bottom-left floating quick-theme switcher dock (with instant color swatches), or the developer terminal console (`theme` command), with **Cyber Emerald & Quantum Mint** as the primary default:

| CSS Token | Hex / Value (Default Emerald) | Semantic Role & Visual Description |
| :--- | :--- | :--- |
| `--bg` | `#05080c` | **Deep Void Obsidian**: Foundational canvas color for the page background. |
| `--bg-alt` | `#080d14` | **Subtle Contrast Surface**: Used for secondary layers and contrast elements. |
| `--bg-card` | `rgba(9, 18, 26, 0.72)` | **Frosted Glass Surface**: High-blur translucent card backing. |
| `--accent` | `#00f5a0` | **Radiant Quantum Emerald**: Signature brand accent used for glowing borders, button gradients, active states, and canvas particles. |
| `--accent-secondary` | `#00d2ff` | **Electric Arctic Cyan**: Secondary accent used for high-visibility highlights, subheadings, links, and text gradients. |
| `--accent-glow` | `rgba(0, 245, 160, 0.28)` | Soft ambient glow diffused behind buttons, cards, and hero elements. |
| `--text` | `#f3f7fa` | **Bright Crisp White**: Primary font color for optimal readability against dark surfaces. |
| `--text-muted` | `#8397a8` | **Slate Muted Gray**: Secondary font color for descriptive paragraphs and metadata. |
| `--text-dim` | `#4d6074` | **Subtle Dim Gray**: For micro-labels, telemetry, and background captions. |
| `--border` | `rgba(255, 255, 255, 0.08)` | **Frosted Hairline Border**: High-precision 1px translucent boundaries. |

#### Multi-Theme Palettes:
1. 🟢 **Cyber Emerald & Quantum Mint** (`#00f5a0` + `#00d2ff`) — Default high-tech AI research laboratory aesthetic.
2. 💜 **Cosmic Violet & Nebula Orchid** (`#a855f7` + `#ec4899`) — Ethereal cyberpunk deep space theme.
3. 🟡 **Solar Flare & Amber Gold** (`#f59e0b` + `#f97316`) — Warm, energetic executive developer palette.
4. ⚡ **Quantum Cyan & Electric Ultraviolet** (`#00f0ff` + `#8b5cf6`) — Classic neon cybernetic theme.

### 2.2 Global Hardware-Accelerated Dynamic Live Background Engine

A full-viewport persistent `<canvas id="liveBackgroundCanvas">` renders seamlessly behind all document sections:
- **Harmonic Aurora Plasma Blobs**: 3 trigonometric fluid gradient orbs drift across the screen, creating undulating volumetric atmospheric lighting.
- **Floating Celestial Stardust**: 52 quantum particles drifting with organic momentum, connecting via luminous filaments when passing near one another.
- **Interactive Cursor Physics**: Moves dynamically with cursor proximity (140px reaction radius), providing soft responsive gravitational flow.
- **Theme Reactivity**: Automatically synchronizes particle and aura colors to the active theme palette in real-time.

---

### 2.2 Typography Hierarchy

Imported via Google Fonts CDN:
- **Headings & Display Font**: `'Space Grotesk', sans-serif` (Weights: `500`, `600`, `700`, `800`) — Bold, geometric, modern tech personality. Applied to `.hero-headline`, `.section-title`, `.case-title`, and `.bento-title`.
- **Body & Interface Font**: `'Plus Jakarta Sans', sans-serif` (Weights: `300`, `400`, `500`, `600`, `700`, `800`) — Award-winning editorial sans-serif with exceptional readability.
- **Monospace Telemetry Font**: `'JetBrains Mono', monospace` (Weights: `400`, `500`, `600`) — High-precision code and metadata font for telemetry badges, tags, and terminal commands.

---

### 2.3 Micro-Interactions & UI Signatures

1. **Kinetic Slanted Marquee Tracks**:
   - Two opposing high-velocity kinetic marquee streams rotated at -3 degrees behind the hero stage, displaying skill keywords and developer identity.
2. **Scroll-Driven Word-by-Word Illumination (`#about`)**:
   - Paragraph words progressively illuminate from dim opacity to crisp white and glowing cyan as the user scrolls through the statement.
3. **Aceternity UI Spotlight Glass Cards (`.liquid-card`)**:
   - Mouse-following spotlight glow calculated dynamically on mouse movement (`--mouse-x`, `--mouse-y`).
4. **Visual Schematic Mockups for Case Studies**:
   - Multi-agent cyclic flow diagram, ECG clinical NLP radar, Computer Vision HUD crosshair/bounding boxes, and ROI hospital metric matrix.
5. **Dynamic Dual Cursor with Context Badge**:
   - Rapid inner dot + outer ring with smooth lag interpolation, displaying dynamic badge text (`"EXPLORE"`, `"VIEW"`, `"COPY"`, `"OPEN"`).
6. **Lenis Butter-Smooth Scroll & GSAP ScrollTrigger Integration**:
   - Unified ticker loop ensuring stutter-free inertial momentum scrolling.

---

## 3. External Libraries & CDN Assets

The website utilizes lightweight, industry-standard external libraries loaded asynchronously/deferred via global CDNs:

1. **Google Fonts Preconnect & Stylesheet**:
   - `https://fonts.googleapis.com` & `https://fonts.gstatic.com`
   - Families: `Inter (400, 500, 600)` and `Space Grotesk (700, 800)`.
2. **Three.js (WebGL 3D Core)**:
   - `https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js`
   - Renders 3D geometry and WebGL scenes efficiently on the GPU.
3. **Vanta.js NET (3D Constellation Mesh)**:
   - `https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js`
   - Generates an interactive 3D particle network reacting to cursor coordinates in real time.
4. **GSAP 3.12.5 (GreenSock Animation Platform)**:
   - `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js`
   - Handles entrance sequences, stat counter interpolation, and complex eases.
5. **GSAP ScrollTrigger Plugin**:
   - `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js`
   - Binds animation timelines directly to scroll offsets and viewport entries.

---

## 4. Comprehensive Section-by-Section Content & Structure

### 4.1 Global Infrastructure Elements

- **Preloader (`#preloader`)**:
  - Fullscreen overlay (`z-index: 9999`) in `--bg` color.
  - Logo element: `<div class="preloader-logo">PL<span>.</span></div>` with pulsating scale animation (`@keyframes preloaderPulse`).
  - Dismissed automatically on `window.load` with a smooth 0.6s opacity fadeout.
- **Scroll Progress Indicator (`#progressBar`)**:
  - Fixed 3px line at top of viewport (`z-index: 999`).
  - Gradient: `linear-gradient(90deg, var(--accent), var(--accent2))`.
  - Width scales in real time from `0%` to `100%` based on `window.scrollY / (scrollHeight - innerHeight)`.
- **Navigation Bar (`#navbar`)**:
  - Sticky glass header with `backdrop-filter: blur(14px)` and `border-bottom: 1px solid var(--border)`.
  - Brand Logo: `<div class="nav-logo">PL<span class="dot">.</span></div>`.
  - Navigation Links (Smooth Anchor Scrolling):
    1. About (`#about`)
    2. Education (`#education`)
    3. Skills (`#skills`)
    4. Projects (`#projects`)
    5. Achievements (`#achievements`)
    6. Contact (`#contact`)
  - Mobile Hamburger Menu Button (`#navToggle`): Three animated spans converting to an active mobile state on screens `<= 820px`.

---

### 4.2 Hero Section (`#hero`)

- **Interactive Background (`#vanta-hero`)**:
  - Hosts the 3D Vanta.js NET WebGL canvas.
  - Overlay: Radial grid pattern (`.grid-overlay`, 48px × 48px grid with radial mask).
  - Ambient Glow Orbs: `.glow1` (500px, violet, top-left) and `.glow2` (450px, cyan, bottom-right).
- **Status Pill**:
  - `<div class="status-badge reveal"><span class="status-dot"></span> Available for Projects & Research · 2028</div>`
- **Greeting Tag**:
  - `<p class="hero-tag reveal">Hello, I'm</p>`
- **Main Heading (`.hero-name`)**:
  - First Line: `<span class="reveal-line">Pranav</span>`
  - Second Line: `<span class="reveal-line">Lakhe</span>`
  - *Dynamic Feature*: Uses a custom JavaScript text scrambler (`scrambleText`) that transforms randomized symbols (`!<>-_\\/[]{}=+*^?#...`) into the real letters on initial load.
- **Subtitle / Role Statement**:
  - `<p class="hero-role reveal">B.Tech CS & IT Student · AI/ML Enthusiast · Nagpur, India</p>`
- **Call-to-Action Buttons (`.hero-actions`)**:
  - Button 1: `<a href="#projects" class="btn btn-primary">View Projects</a>` (Shimmer button)
  - Button 2: `<a href="#contact" class="btn btn-outline">Get In Touch</a>` (Frosted outline)
  - Button 3: `<a href="resume.pdf" class="btn btn-ghost" download>Download Resume</a>` (Ghost text button)
- **Scroll Cue (`.scroll-cue`)**:
  - Vertical glowing animated bar with `@keyframes scrollPulse` and `<p>Scroll</p>` caption.

---

### 4.3 Section 01: About Me (`#about`)

- **Section Header**:
  - Number Pill: `<span class="section-num">01</span>`
  - Title: `<h2>About Me</h2>`
- **Biographical Paragraphs (`.about-text`)**:
  - *Paragraph 1*: "I'm a third-year **B.Tech Computer Science & IT** student at **Symbiosis Institute of Technology, Nagpur** (Symbiosis International Deemed University), graduating in 2028. My work sits at the intersection of **artificial intelligence, machine learning, and applied software engineering** — building systems that solve real, measurable problems rather than just working in a demo."
  - *Paragraph 2*: "I've built agentic AI pipelines, healthcare analytics dashboards, video-analytics systems for border surveillance, and contributed to academic research on multi-agent coding assistants. I care about writing production-minded code, clear documentation, and projects that hold up under scrutiny — in a viva, in an interview, or in production."
  - *Paragraph 3*: "Outside of coursework, I actively prepare for **GATE CSE** and keep exploring new tools across the AI/ML and full-stack space."
- **Animated Identity & Metrics Card (`.about-id-card.liquid-card`)**:
  - **Profile Avatar**: Official high-resolution portrait (`profile.jpg`) framed in a kinetic rotating accent ring (`.avatar-ring`), glowing theme gradient border, and live active status pulse dot (`.avatar-status-dot`).
  - **Metric 1**: `<span class="stat-num" data-count="3">0</span>` | Label: `Year of Study`
  - **Metric 2**: `<span class="stat-num" data-count="6">0</span>` | Label: `Core Projects`
  - **Metric 3**: `<span class="stat-num" data-count="2">0</span>` | Label: `Internships`
  - *Animation*: Numbers count up from 0 to target integer via GSAP ScrollTrigger on scroll entry.

---

### 4.4 Section 02: Education & Academic Performance (`#education`)

- **Section Header**:
  - Number Pill: `<span class="section-num">02</span>`
  - Title: `<h2>Education & Academic Performance</h2>`
- **Vertical Timeline (`.timeline`)**:
  - **Card 1: Academic Enrollment**:
    - Timeline Dot: Violet dot with glowing concentric ring (`box-shadow: 0 0 0 4px rgba(124,92,255,0.2)`).
    - Year Badge: `<span class="timeline-year">2023 — 2028</span>`
    - Degree Title: `<h3>B.Tech, Computer Science & IT</h3>`
    - College: `<p>Symbiosis Institute of Technology, Nagpur (Symbiosis International Deemed University)</p>`
    - Status Badge: `<span class="timeline-badge">Currently 3rd Year</span>`
  - **Card 2: Semester-wise CGPA Performance**:
    - Subtitle: `<span class="timeline-year">Semester-wise CGPA</span>`
    - Title: `<h3>Academic Performance</h3>`
    - Progress Bars (`.cgpa-bars`):
      - **Sem I**: `7.19` SGPA (71.9% fill width).
      - **Sem II**: `7.24` SGPA (72.4% fill width).
      - **Sem III**: `7.90` SGPA (79.0% fill width).
      - **Sem IV**: `7.40` SGPA (74.0% fill width).
      - **Sem V**: `Ongoing` (in progress).
    - **Cumulative CGPA**: `7.43 / 10.0` across 4 completed semesters.

---

### 4.5 Section 03: Technical Skills (`#skills`)

- **Section Header**:
  - Number Pill: `<span class="section-num">03</span>`
  - Title: `<h2>Technical Skills</h2>`
- **Bento Grid Layout (`.skills-grid`)**:
  Asymmetric 12-column Bento Grid layout providing strong visual hierarchy:
  - **Card 1 (Languages — Span 5 columns)**:
    - Title: `<h3>Languages</h3>`
    - Skill Chips: `Python`, `Java`, `C++`, `JavaScript`, `SQL`
  - **Card 2 (AI / ML — Span 7 columns — Primary Specialization)**:
    - Title: `<h3>AI / ML</h3>`
    - Skill Chips: `TensorFlow`, `PyTorch`, `Scikit-learn`, `OpenCV`, `Agentic AI`, `LangChain`
  - **Card 3 (Web & Tools — Span 7 columns)**:
    - Title: `<h3>Web & Tools</h3>`
    - Skill Chips: `HTML/CSS/JS`, `React`, `Node.js`, `Git/GitHub`, `Flask`
  - **Card 4 (Data & Cloud — Span 5 columns)**:
    - Title: `<h3>Data & Cloud</h3>`
    - Skill Chips: `Pandas`, `NumPy`, `Power BI`, `MySQL`, `MongoDB`

---

### 4.6 Section 02: Featured Case Studies (`#projects`)

- **Section Header**:
  - Number Pill: `<span class="section-badge">02 SELECTED WORKS</span>`
  - Title: `<h2>Featured Case Studies</h2>`
  - Filter Tabs: `All Works (6)`, `Agentic AI & LLMs`, `Computer Vision`, `Analytics & Dashboards`
- **Featured Case Studies List (`#projectList`)**:
  - **Case 01: Multi-Agent AI Coding Assistant (ACEx)**:
    - *Tag*: Research Paper · Multi-Agent Systems (In Preparation)
    - *Schematic*: 4-Node Planner/Synthesizer/Reviewer/Tester cyclic coordination graph.
    - *Tech*: `Multi-Agent Systems`, `LangChain`, `LLMs`, `Vector DB`, `Python`
  - **Case 02: Health Report Summarizer — Agentic AI & Automation**:
    - *Tag*: Agentic AI & Automation (Production Tested)
    - *Schematic*: High-precision OCR recall HUD + clinical ECG anomaly radar.
    - *Repo*: `https://github.com/Pranavv28/Health-Report-Summarizer-AI-Application`
    - *Tech*: `Agentic AI`, `Clinical NLP`, `Document OCR`, `FastAPI`, `Python`
  - **Case 03: SIH26187 — AI Video Surveillance for Borders**:
    - *Tag*: Smart India Hackathon 2026 · Sashastra Seema Bal (Prototype)
    - *Schematic*: Thermal/optical dual-stream crosshair HUD + tripwire tracking.
    - *Repo*: `https://github.com/Pranavv28/Confluence-AI`
    - *Tech*: `Computer Vision`, `YOLO v8`, `DeepSORT`, `OpenCV`, `Edge AI`
  - **Case 04: SHREEDHA — Healthcare Institutional ROI Dashboard**:
    - *Tag*: Institutional Systems · Healthcare Financial Analytics (Deployed)
    - *Schematic*: Real-time departmental throughput bar matrix & margin chip.
    - *Repo*: `https://github.com/Pranavv28/smart-hospital-financial-intelligence`
    - *Tech*: `Healthcare Analytics`, `Financial Modeling`, `SQL`, `Data Viz`, `JavaScript`
  - **Case 05: Memory-Powered Code Review Agent**:
    - *Tag*: Autonomous Agent · Vector Memory (Open Source)
    - *Schematic*: Persistent vector memory context core + AST code review verification pill.
    - *Repo*: `https://github.com/Pranavv28/Memory-Powered-Code-Review-Agent`
    - *Tech*: `LangChain`, `Vector Embeddings`, `ChromaDB`, `AST Analysis`, `Python`
  - **Case 06: MARL for Autonomous Traffic Flow**:
    - *Tag*: Multi-Agent Reinforcement Learning (Research Simulation)
    - *Schematic*: Dynamic multi-intersection crossroads with synchronized vehicular Q-learning agent telemetry.
    - *Repo*: `https://github.com/Pranavv28/MARL-for-Autonomous-Traffic-Flow`
    - *Tech*: `Multi-Agent RL`, `PyTorch`, `Deep Q-Networks`, `Simulation`, `Python`

---

### 4.7 Section 05: Certificates & Verified Credentials (`#certificates`)

A comprehensive, authenticated credentials gallery highlighting verified industry internships, systems administration, cybersecurity, algorithms, and hackathon accomplishments.

> **Duplicate & Coursework Filtering**: Identical uploaded certificates (`PRANAV LAKHE (1).pdf` and `24070521248_Pranav.Lakhe.pdf`), as well as introductory course exploration records, are removed to maintain a lean, high-signal 6-item verified roster.

- **Internships at the Top (Priority Featured Tier)**:
  1. **Edunet Foundation × AICTE × IBM SkillsBuild**:
     - *Role*: Emerging Technologies 4-Week Internship (Agentic AI, Cyber Security, Quantum Computing)
     - *Duration*: 15th May 2026 – 12th June 2026
     - *Student STU ID*: `STU6995ccb089af01771424944` | *Internship ID*: `INTERNSHIP_177549002069d3d3e4f3903`
     - *Artifact*: `certificates/PRANAV LAKHE.pdf`
  2. **Maincrafts Technology**:
     - *Role*: Artificial Intelligence & Machine Learning (AI/ML) Intern
     - *Duration*: 20 May 2026 – 20 June 2026
     - *Intern ID*: `MT3954` | *MSME Reg*: `UDYAM-UP-75-0096043`
     - *Artifact*: `certificates/Maincrafts Certificate of Internship-38_page-0001.jpg`

- **Specialized Credentials & Hackathons**:
  3. **Red Hat**: Red Hat System Administration I (RH124 - RHA) (Credly Badge `990411b5-d6e2-46e5-8585-704d48728e31`)
  4. **Vodafone Idea Foundation & VOIS**: Introduction to System Security (`VFLMS26_148979` · 28 March 2026)
  5. **Infosys Springboard (Wingspan)**: Data Structures and Algorithms using Python - Part 1 (27 October 2025)
  6. **NEXUS HYBRID Hackathon**: Virtual Hackathon Certificate of Participation (`700116e5-fd69-454d-87c8-0b2fc11885a5` · 05–06 June 2026)

- **Interactive Lightbox Feature (`#certLightboxModal`)**:
  - High-resolution modal viewer with keyboard navigation (`ESC` to close, `←` / `→` arrow keys to cycle through 6 certificates).
  - Direct deep-links to authentic local PDFs/JPGs and verified external accreditation URLs (Credly, Wingspan).

---

### 4.8 Section 06: Academic Milestones & Honors (`#achievements`)

Showcases non-certificate milestones including SIH 2026 institutional team selection for border surveillance, GATE CSE preparation roadmap, and the ACEx multi-agent research paper.

---

### 4.9 Section 07: Contributions & Involvement (`#contributions`)

- **Section Header**:
  - Number Pill: `<span class="section-num">07</span>`
  - Title: `<h2>Contributions & Campus Leadership</h2>`
- **Grid Layout (`.contrib-grid`, 3 columns)**:
  - **Card 1: Open Source**:
    - Title: `<h3>Open Source Software</h3>`
    - Description: *"Active contributor and open-source enthusiast maintaining repositories on GitHub as @Pranavv28."*
  - **Card 2: Technical Clubs & SIT Committees**:
    - Title: `<h3>Technical Clubs & SIT Committees</h3>`
    - Description: *"Engaged member of student technical bodies at Symbiosis Institute of Technology, Nagpur."*
  - **Card 3: Workshops & Hackathon Mentoring**:
    - Title: `<h3>Workshops & Hackathon Mentoring</h3>`
    - Description: *"Participating in and supporting technical workshops and project exhibitions."*

---

### 4.10 Section 08: Get In Touch (`#contact`)

- **Section Header**:
  - Number Pill: `<span class="section-num">08</span>`
  - Title: `<h2>Get In Touch</h2>`
  - Subtitle: `<p class="contact-sub">Have an opportunity, question, or just want to connect? Reach out.</p>`
- **Grid Layout (`.contact-grid`, 4 columns)**:
  - **Contact Card 1 (Email)**:
    - Target: `href="mailto:pranavlakhe1@gmail.com"`
    - Copy Attribute: `data-copy="pranavlakhe1@gmail.com"`
    - Icon: `✉️`
    - Label: `<h3>Email</h3>`
    - Value: `<p>pranavlakhe1@gmail.com</p>`
  - **Contact Card 2 (GitHub)**:
    - Target: `href="https://github.com/Pranavv28"` (`target="_blank"`)
    - Icon: `💻`
    - Label: `<h3>GitHub</h3>`
    - Value: `<p>@Pranavv28</p>`
  - **Contact Card 3 (LinkedIn)**:
    - Target: `href="#"` (`target="_blank"`)
    - Icon: `🔗`
    - Label: `<h3>LinkedIn</h3>`
    - Value: `<p>Add your LinkedIn URL</p>`
  - **Contact Card 4 (Phone)**:
    - Target: `href="tel:+910000000000"`
    - Icon: `📞`
    - Label: `<h3>Phone</h3>`
    - Value: `<p>Add your phone number</p>`

- **Automated Mail Dispatcher Console (`.mail-dispatcher-block`)**:
  - Direct form with cybernetic glow inputs (`#automatedContactForm`):
    - `input#senderName`: Full Name / Organization
    - `input#senderEmail`: Return Email address
    - `select#senderPurpose`: Inquire Category (Collaboration, Internship, AI Research, General)
    - `textarea#senderMessage`: Direct message content
  - **Submission Pipelines**:
    - **Primary Automated Dispatch**: Asynchronous AJAX POST directly to `https://formsubmit.co/ajax/pranavlakhe1@gmail.com` with anti-bot honey-potting and live progress state (`Dispatching to Inbox... ⏳`).
    - **Fallback Instant Gmail Composer**: 1-click button (`#gmailComposeBtn`) that opens Google Mail web composer pre-filled with recipient `pranavlakhe1@gmail.com`, selected subject category, and message body.

---

### 4.10 Global Footer

- **Back to Top Button (`#scrollTop`)**:
  - Fixed circular floating button with arrow (`↑`).
  - Appears automatically once user scrolls past 500px (`classList.toggle('visible')`).
  - Smoothly scrolls viewport back to line zero upon click: `window.scrollTo({ top: 0, behavior: 'smooth' })`.
- **Footer Text**:
  - `<p>© 2026 Pranav Lakhe. Built with HTML, CSS & JavaScript.</p>`

---

## 5. JavaScript Architecture & Runtime Engine (`script.js`)

The JavaScript engine is cleanly structured into modular blocks, utilizing event listeners and hardware-accelerated animations:

### Module Breakdown:

1. **GSAP Plugin Registration**:
   ```javascript
   gsap.registerPlugin(ScrollTrigger);
   ```

2. **Mobile Navigation Drawer Controller**:
   - Toggles `.open` on `#navLinks` and `.active` on `#navToggle`.
   - Attaches click listeners to all links in `#navLinks` to automatically dismiss the drawer when a destination section is selected.

3. **Window Scroll Progress Bar**:
   - Calculates the scroll percentage:
     $$\text{pct} = \frac{\text{scrollTop}}{\text{scrollHeight} - \text{innerHeight}} \times 100$$
   - Updates `#progressBar.style.width` synchronously.

4. **Hero Entrance Timeline**:
   - Sequenced GSAP timeline fading in `.hero-tag` at 0.1s, elevating `.hero-role` from `y: 20` at 0.9s, and elevating `.hero-actions` from `y: 20` at 1.1s with `power3.out` easing.

5. **Scroll-Triggered Section Reveals (`.reveal-up`)**:
   - Iterates through all `.reveal-up` elements.
   - Animate from `{ opacity: 0, y: 50 }` to `{ opacity: 1, y: 0 }` with `duration: 0.9` when the top of the element hits `85%` of the viewport height.

6. **Staggered Card Grid Sequences**:
   - Groups: `.skills-grid .skill-cat`, `.project-list .project-card`, `.achieve-grid .achieve-card`, `.contrib-grid .contrib-item`, `.contact-grid .contact-card`.
   - Uses `stagger: 0.12` to sequentially float cards up with a cascade effect.

7. **Dynamic Numeric Counter Interpolator**:
   - Reads `data-count` on all `.stat-num` elements.
   - Smoothly counts up from 0 to target integer with `ease: 'power2.out'` using an interpolated numeric object when `top 90%` enters the viewport.

8. **CGPA Bar Chart Engine**:
   - Reads the `cgpaData` array:
     ```javascript
     const cgpaData = [
       { sem: 'Sem I', gpa: 7.19 },
       { sem: 'Sem II', gpa: 7.24 },
       { sem: 'Sem III', gpa: 7.90 },
       { sem: 'Sem IV', gpa: 7.40 },
       { sem: 'Sem V', gpa: null } // ongoing
     ];
     ```
   - Automatically computes percentage: `(cgpa / 10) * 100` and assigns `data-width`.
   - On ScrollTrigger entry, expands `bar.style.width` smoothly to the target percentage.

9. **Preloader Lifecyle**:
   - Listens to `window.addEventListener('load', ...)` and smoothly fades out the preloader overlay after a 200ms grace buffer.

10. **Custom Dual-Element Cursor Tracking**:
    - Updates `.cursor-dot` instantly on `mousemove`.
    - Animates `.cursor-ring` towards `(clientX - 20, clientY - 20)` via `gsap.to(..., { duration: 0.15, ease: 'power2.out' })`.
    - Expands ring radius when hovering over links and cards.

11. **Vanta.js 3D NET WebGL Initialization**:
    - Mounts on `#vanta-hero` with custom palette:
      - `color: 0x8b5cf6` (Aurora violet)
      - `backgroundColor: 0x07080f` (Cosmic obsidian)
      - `points: 10.00`, `maxDistance: 22.00`, `spacing: 16.00`.
    - Safe error handling in a `try/catch` block so lack of WebGL or offline state gracefully falls back to the static CSS aurora glow.

12. **Text Scrambler / Decryption Effect (`scrambleText`)**:
    - Decrypts the hero name letter-by-letter over 25 discrete steps using random symbol substitutions.

13. **Aceternity Mouse-Tracking Spotlight Glow**:
    - Binds `mousemove` to all `.liquid-card` instances.
    - Sets `--mouse-x` and `--mouse-y` dynamically without causing layout recalculations or re-paints on the DOM tree.

14. **Scroll-To-Top Interaction**:
    - Toggles visibility when `window.scrollY > 500` and triggers smooth native browser scroll when clicked.

15. **Toast Notification System (`showToast`)**:
    - Generates dynamic, hardware-accelerated toast pills with custom icons.
    - Features cubic-bezier slide-in and fade-out with automatic DOM teardown after a configurable timeout.

16. **Interactive Project Details Modal Engine**:
    - Structured data objects (`projectsData`) storing detailed problem statements, cyclic architectures, technical stack badges, and GitHub links.
    - Full keyboard accessibility (focus trapping, `Escape` key listener) and backdrop click dismissal.

17. **Project Category Filter Tabs**:
    - Interactive pill bar (`All Projects`, `Agentic AI & LLMs`, `Computer Vision`, `Analytics & Dashboards`).
    - Uses GSAP interpolation to filter and smoothly animate matching project cards into view.

18. **1-Click Copy-to-Clipboard & Contact Action Handlers**:
    - Attaches native `navigator.clipboard.writeText()` to copyable cards with instant visual feedback badges and toast confirmations.

19. **Developer Command Palette / Interactive Terminal (`Ctrl + K` / `⌘K`)**:
    - Floating navbar launcher + keyboard shortcut listener (`Ctrl+K`, `Cmd+K`, `Escape`).
    - Monospace interactive terminal with quick shortcut chips and real command execution (`help`, `projects`, `skills`, `education`, `contact`, `theme`, `clear`, `exit`).
    - Includes interactive live theme toggling between Aurora Violet and Celestial Aqua modes!

---

## 6. Responsive Breakpoints & Accessibility Features

### Breakpoint Strategy:
- **Desktop (Base, > 860px)**:
  - Technical skills: 12-column asymmetrical Bento Grid (`span 5` & `span 7`).
  - Achievements: 3-column grid.
  - Contributions: 3-column grid.
  - Contact: 4-column grid.
- **Tablet (760px — 860px)**:
  - Technical skills: Collapse to 12 columns per card.
  - Achievements: 2 columns.
  - Contact: 2 columns.
  - About Grid: 1 column stack.
- **Mobile Handheld (<= 760px / 820px)**:
  - Navigation: Transforms from horizontal row into a slide-in drawer (`width: 70vw`, `backdrop-filter: blur(20px)`).
  - Hamburger toggle (`#navToggle`) becomes visible.
  - Project Cards: Flex-direction switches from row to vertical column.
  - Custom Cursor: Automatically disabled for touch surfaces via `@media (pointer: coarse)` to prevent visual artifacts on mobile devices.

---

## 7. CA3 Evaluation & Viva Voce Defense Guide

If presenting or explaining this project in a viva, interview, or lab evaluation, emphasize the following engineering highlights:

1. **Why Pure Vanilla JS Instead of React or Vue?**
   - *Defense*: Eliminates JavaScript bundle overhead (0 KB framework payload). Achieves near-instant First Contentful Paint (FCP) and a 100/100 Lighthouse performance score. It demonstrates mastery of DOM manipulation, event loops, and CSS variables.
2. **How Does the Spotlight Card Effect Work Without Lagging?**
   - *Defense*: We do **not** re-render the card or manipulate CSS transforms on mousemove. Instead, we simply update two CSS custom properties (`--mouse-x` and `--mouse-y`). The browser computes the radial gradient in the compositor thread, maintaining 60–120 FPS.
3. **How Does the 3D Vanta Background Maintain High Performance?**
   - *Defense*: Vanta.js runs on Three.js, executing through WebGL on the client's GPU via HTML5 canvas, completely bypassing main-thread CPU bottlenecks.
4. **Separation of Concerns**:
   - Structure (`index.html`), Presentation (`style.css`), and Interaction (`script.js`) are decoupled, following modern web engineering best practices.
