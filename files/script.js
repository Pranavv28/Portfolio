/* ==========================================================================
   PRANAV LAKHE — PORTFOLIO RUNTIME ENGINE
   Features: Lenis Smooth Scroll, GSAP ScrollTrigger, Interactive Neural Canvas,
   Scroll-Driven Word Illumination, Custom Cursor Physics, Command Terminal,
   Spotlight Card Math, and Toast Notifications.
   ========================================================================== */

gsap.registerPlugin(ScrollTrigger);

/* ==========================================================================
   1. LENIS SMOOTH SCROLL INTEGRATION
   ========================================================================== */
let lenis = null;
if (typeof Lenis !== 'undefined') {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.8,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

/* ==========================================================================
   2. PRELOADER & ASSET BOOT SEQUENCE
   ========================================================================== */
const preloader = document.getElementById('preloader');
const preloaderFill = document.getElementById('preloaderFill');
const preloaderCounter = document.getElementById('preloaderCounter');
const preloaderLog = document.getElementById('preloaderLog');

let loadProgress = 0;
const bootLogs = [
  'INITIALIZING SYSTEM CORE...',
  'MOUNTING NEURAL TOPOLOGIES...',
  'CALCULATING AGENT MEMORY...',
  'CONNECTING TELEMETRY STREAMS...',
  'READY // PRANAV LAKHE'
];

const preloaderInterval = setInterval(() => {
  loadProgress += Math.floor(Math.random() * 15) + 8;
  if (loadProgress > 100) loadProgress = 100;

  if (preloaderFill) preloaderFill.style.width = loadProgress + '%';
  if (preloaderCounter) preloaderCounter.textContent = (loadProgress < 10 ? '0' : '') + loadProgress + '%';

  const logIdx = Math.min(Math.floor((loadProgress / 100) * bootLogs.length), bootLogs.length - 1);
  if (preloaderLog) preloaderLog.textContent = bootLogs[logIdx];

  if (loadProgress >= 100) {
    clearInterval(preloaderInterval);
    setTimeout(() => {
      if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
          triggerHeroEntrance();
        }, 600);
      }
    }, 300);
  }
}, 70);

/* ==========================================================================
   3. SCROLL PROGRESS BAR & STICKY NAVBAR
   ========================================================================== */
const progressBar = document.getElementById('progressBar');
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const navToggle = document.getElementById('navToggle');
const navAnchors = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
  if (progressBar) progressBar.style.width = pct + '%';

  if (navbar) {
    navbar.classList.toggle('scrolled', scrollY > 40);
  }

  // Active section indicator
  let currentSecId = '';
  sections.forEach((sec) => {
    const top = sec.offsetTop - 140;
    if (scrollY >= top) currentSecId = sec.getAttribute('id');
  });

  navAnchors.forEach((a) => {
    const href = a.getAttribute('href');
    if (href === '#' + currentSecId) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
});

/* Mobile Drawer */
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==========================================================================
   4. DYNAMIC THEME SYSTEM & FULL-VIEWPORT LIVE BACKGROUND ENGINE
   ========================================================================== */

// Theme Palettes Registry
const THEME_PRESETS = {
  emerald: {
    key: 'emerald',
    name: 'Emerald',
    label: 'Emerald 🟢',
    accentRgb: [0, 245, 160],
    secRgb: [0, 210, 255],
    accentHex: '#00f5a0',
    secHex: '#00d2ff'
  },
  violet: {
    key: 'violet',
    name: 'Violet',
    label: 'Violet 💜',
    accentRgb: [168, 85, 247],
    secRgb: [236, 72, 153],
    accentHex: '#a855f7',
    secHex: '#ec4899'
  },
  solar: {
    key: 'solar',
    name: 'Solar',
    label: 'Solar 🟡',
    accentRgb: [245, 158, 11],
    secRgb: [249, 115, 22],
    accentHex: '#f59e0b',
    secHex: '#f97316'
  },
  cyan: {
    key: 'cyan',
    name: 'Cyan',
    label: 'Cyan ⚡',
    accentRgb: [0, 240, 255],
    secRgb: [139, 92, 246],
    accentHex: '#00f0ff',
    secHex: '#8b5cf6'
  }
};

const THEME_KEYS = ['emerald', 'violet', 'solar', 'cyan'];
let currentThemeKey = localStorage.getItem('pl-portfolio-theme') || 'emerald';
if (!THEME_PRESETS[currentThemeKey]) currentThemeKey = 'emerald';

function getActiveTheme() {
  return THEME_PRESETS[currentThemeKey] || THEME_PRESETS.emerald;
}

function applyTheme(themeKey, notify = false) {
  if (!THEME_PRESETS[themeKey]) themeKey = 'emerald';
  currentThemeKey = themeKey;
  localStorage.setItem('pl-portfolio-theme', themeKey);

  if (themeKey === 'emerald') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', themeKey);
  }

  const theme = THEME_PRESETS[themeKey];
  const themeLabel = document.getElementById('currentThemeLabel');
  if (themeLabel) themeLabel.textContent = theme.name;

  // Sync floating dock swatches
  document.querySelectorAll('.dock-swatch').forEach((swatch) => {
    const isCurrent = swatch.getAttribute('data-theme-pick') === themeKey;
    swatch.classList.toggle('active', isCurrent);
    swatch.setAttribute('aria-checked', isCurrent ? 'true' : 'false');
  });

  if (notify && typeof showToast === 'function') {
    showToast(`Activated ${theme.name} Theme!`, '🎨');
  }
}

function cycleTheme(notify = true) {
  const currentIndex = THEME_KEYS.indexOf(currentThemeKey);
  const nextIndex = (currentIndex + 1) % THEME_KEYS.length;
  applyTheme(THEME_KEYS[nextIndex], notify);
}

// Initial theme application
applyTheme(currentThemeKey, false);

const themeToggleBtn = document.getElementById('themeToggleBtn');
themeToggleBtn?.addEventListener('click', () => {
  cycleTheme(true);
});

// Floating dock swatch buttons
document.querySelectorAll('.dock-swatch').forEach((swatch) => {
  swatch.addEventListener('click', () => {
    const pick = swatch.getAttribute('data-theme-pick');
    if (pick) applyTheme(pick, true);
  });
});

/* --------------------------------------------------------------------------
   4A. GLOBAL VIEWPORT LIVE BACKGROUND CANVAS
   -------------------------------------------------------------------------- */
const globalBgCanvas = document.getElementById('liveBackgroundCanvas');
if (globalBgCanvas) {
  const gCtx = globalBgCanvas.getContext('2d');
  let gWidth = (globalBgCanvas.width = window.innerWidth);
  let gHeight = (globalBgCanvas.height = window.innerHeight);

  const resizeGlobalCanvas = () => {
    gWidth = globalBgCanvas.width = window.innerWidth;
    gHeight = globalBgCanvas.height = window.innerHeight;
  };
  window.addEventListener('resize', resizeGlobalCanvas);

  const globalMouse = { x: gWidth / 2, y: gHeight / 2, active: false };
  window.addEventListener('mousemove', (e) => {
    globalMouse.x = e.clientX;
    globalMouse.y = e.clientY;
    globalMouse.active = true;
  });

  // Background floating celestial particles
  const numGlobalParticles = Math.min(Math.floor((gWidth * gHeight) / 22000), 52);
  const globalParticles = [];
  for (let i = 0; i < numGlobalParticles; i++) {
    globalParticles.push({
      x: Math.random() * gWidth,
      y: Math.random() * gHeight,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.8 + 0.8,
      phase: Math.random() * Math.PI * 2,
      isSecondary: Math.random() > 0.65
    });
  }

  // 3 Harmonic Aurora Nebula Blobs that drift smoothly
  const auroraOrbs = [
    { x: gWidth * 0.25, y: gHeight * 0.35, vx: 0.18, vy: 0.12, r: 380, phase: 0 },
    { x: gWidth * 0.75, y: gHeight * 0.65, vx: -0.15, vy: -0.2, r: 420, phase: 2 },
    { x: gWidth * 0.5, y: gHeight * 0.85, vx: 0.12, vy: -0.16, r: 350, phase: 4 }
  ];

  let frameTime = 0;
  let isPageVisible = !document.hidden;
  document.addEventListener('visibilitychange', () => {
    isPageVisible = !document.hidden;
  });

  function renderGlobalLiveBg() {
    if (!isPageVisible) {
      requestAnimationFrame(renderGlobalLiveBg);
      return;
    }
    frameTime += 0.008;
    gCtx.clearRect(0, 0, gWidth, gHeight);

    const theme = getActiveTheme();
    const [ar, ag, ab] = theme.accentRgb;
    const [sr, sg, sb] = theme.secRgb;

    // 1. Draw Living Aurora Gradient Orbs
    for (let i = 0; i < auroraOrbs.length; i++) {
      const orb = auroraOrbs[i];
      orb.x += orb.vx + Math.sin(frameTime + orb.phase) * 0.35;
      orb.y += orb.vy + Math.cos(frameTime + orb.phase) * 0.35;

      if (orb.x < -100) orb.x = gWidth + 100;
      if (orb.x > gWidth + 100) orb.x = -100;
      if (orb.y < -100) orb.y = gHeight + 100;
      if (orb.y > gHeight + 100) orb.y = -100;

      const grad = gCtx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
      const isSec = i === 1;
      const rColor = isSec ? sr : ar;
      const gColor = isSec ? sg : ag;
      const bColor = isSec ? sb : ab;
      const pulseAlpha = 0.07 + Math.sin(frameTime * 1.5 + orb.phase) * 0.025;

      grad.addColorStop(0, `rgba(${rColor}, ${gColor}, ${bColor}, ${pulseAlpha})`);
      grad.addColorStop(0.5, `rgba(${rColor}, ${gColor}, ${bColor}, ${pulseAlpha * 0.4})`);
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      gCtx.fillStyle = grad;
      gCtx.beginPath();
      gCtx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
      gCtx.fill();
    }

    // 2. Mouse Glow Aura
    if (globalMouse.active) {
      const mGrad = gCtx.createRadialGradient(
        globalMouse.x, globalMouse.y, 0,
        globalMouse.x, globalMouse.y, 220
      );
      mGrad.addColorStop(0, `rgba(${ar}, ${ag}, ${ab}, 0.08)`);
      mGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      gCtx.fillStyle = mGrad;
      gCtx.beginPath();
      gCtx.arc(globalMouse.x, globalMouse.y, 220, 0, Math.PI * 2);
      gCtx.fill();
    }

    // 3. Connect close celestial particles
    for (let i = 0; i < globalParticles.length; i++) {
      const p1 = globalParticles[i];
      p1.x += p1.vx;
      p1.y += p1.vy;

      if (p1.x < 0) p1.x = gWidth;
      if (p1.x > gWidth) p1.x = 0;
      if (p1.y < 0) p1.y = gHeight;
      if (p1.y > gHeight) p1.y = 0;

      for (let j = i + 1; j < globalParticles.length; j++) {
        const p2 = globalParticles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          const lineAlpha = (1 - dist / 110) * 0.14;
          gCtx.beginPath();
          gCtx.moveTo(p1.x, p1.y);
          gCtx.lineTo(p2.x, p2.y);
          gCtx.strokeStyle = `rgba(${ar}, ${ag}, ${ab}, ${lineAlpha})`;
          gCtx.lineWidth = 0.65;
          gCtx.stroke();
        }
      }

      // Cursor Gravitational Interaction
      if (globalMouse.active) {
        const mdx = globalMouse.x - p1.x;
        const mdy = globalMouse.y - p1.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 140) {
          const force = (1 - mdist / 140) * 0.4;
          p1.x += (mdx / mdist) * force;
          p1.y += (mdy / mdist) * force;
        }
      }

      // Draw particle dot
      const pAlpha = 0.4 + Math.sin(frameTime * 2 + p1.phase) * 0.3;
      const [pr, pg, pb] = p1.isSecondary ? [sr, sg, sb] : [ar, ag, ab];
      gCtx.beginPath();
      gCtx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
      gCtx.fillStyle = `rgba(${pr}, ${pg}, ${pb}, ${pAlpha})`;
      gCtx.fill();
    }

    requestAnimationFrame(renderGlobalLiveBg);
  }
  renderGlobalLiveBg();
}

/* --------------------------------------------------------------------------
   4B. HERO FOREGROUND NEURAL CONSTELLATION CANVAS
   -------------------------------------------------------------------------- */
const canvas = document.getElementById('neuralCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let width = (canvas.width = canvas.offsetWidth);
  let height = (canvas.height = canvas.offsetHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  });

  const mouse = { x: width / 2, y: height / 2, active: false };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });

  const numNodes = Math.min(Math.floor((width * height) / 14000), 75);
  const nodes = [];

  for (let i = 0; i < numNodes; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2 + 1,
      isSecondary: Math.random() > 0.4
    });
  }

  function renderNeuralCanvas() {
    ctx.clearRect(0, 0, width, height);
    const theme = getActiveTheme();
    const [ar, ag, ab] = theme.accentRgb;
    const [sr, sg, sb] = theme.secRgb;

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;

      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;

      // Draw node point
      const [nr, ng, nb] = n.isSecondary ? [sr, sg, sb] : [ar, ag, ab];
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${nr}, ${ng}, ${nb}, 0.85)`;
      ctx.fill();

      // Connect to neighbors
      for (let j = i + 1; j < nodes.length; j++) {
        const n2 = nodes[j];
        const dx = n.x - n2.x;
        const dy = n.y - n2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(n2.x, n2.y);
          const alpha = (1 - dist / 130) * 0.25;
          ctx.strokeStyle = `rgba(${ar}, ${ag}, ${ab}, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Gravitate toward mouse
      if (mouse.active) {
        const mdx = mouse.x - n.x;
        const mdy = mouse.y - n.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 180) {
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          const mAlpha = (1 - mdist / 180) * 0.35;
          ctx.strokeStyle = `rgba(${ar}, ${ag}, ${ab}, ${mAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(renderNeuralCanvas);
  }
  renderNeuralCanvas();
}

/* ==========================================================================
   5. TEXT SCRAMBLER & HERO ENTRANCE SEQUENCE
   ========================================================================== */
function scrambleText(el, targetText, duration = 1100) {
  const chars = '!<>-_\\/[]{}=+*^?#010101PRANAVLAKHE';
  const steps = 24;
  let step = 0;
  const interval = duration / steps;

  const timer = setInterval(() => {
    let result = '';
    for (let i = 0; i < targetText.length; i++) {
      if (targetText[i] === ' ') {
        result += ' ';
        continue;
      }
      if (step / steps > i / targetText.length) {
        result += targetText[i];
      } else {
        result += chars[Math.floor(Math.random() * chars.length)];
      }
    }
    el.textContent = result;
    step++;
    if (step > steps) {
      clearInterval(timer);
      el.textContent = targetText;
    }
  }, interval);
}

function triggerHeroEntrance() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.fromTo('.hero-telemetry-pill', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.7 })
    .fromTo('.hero-kicker', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
    .fromTo('.hero-headline', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8 }, '-=0.3')
    .fromTo('.hero-lead', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
    .fromTo('.hero-actions-row', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5');

  // Trigger scrambler
  document.querySelectorAll('.reveal-line').forEach((line, idx) => {
    const text = line.getAttribute('data-scramble') || line.textContent.trim();
    setTimeout(() => scrambleText(line, text, 1000), idx * 250);
  });
}

/* ==========================================================================
   6. SCROLL-DRIVEN WORD ILLUMINATION (SECTION 01: ABOUT ME)
   ========================================================================== */
function initWordIllumination() {
  const textContainer = document.getElementById('aboutIlluminatedText');
  if (!textContainer) return;

  const paragraphs = textContainer.querySelectorAll('.illuminated-paragraph');
  const allWordSpans = [];

  paragraphs.forEach((p) => {
    const rawText = p.innerText.trim();
    const words = rawText.split(/\s+/);
    p.innerHTML = '';

    words.forEach((word) => {
      const span = document.createElement('span');
      span.className = 'word-span';
      span.textContent = word + ' ';

      // Highlight keywords
      const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
      if (['Pranav', 'Lakhe', 'Artificial', 'Intelligence', 'Computer', 'Vision', 'Agentic', 'AI', 'Symbiosis', 'Nagpur', 'GATE', 'CSE'].includes(cleanWord)) {
        span.classList.add('highlight');
      } else if (['SIH', '2026', 'Sashastra', 'Seema', 'Bal', 'SSB', 'multi-agent', 'research', 'production-minded'].includes(cleanWord)) {
        span.classList.add('highlight-sec');
      }

      p.appendChild(span);
      allWordSpans.push(span);
    });
  });

  // ScrollTrigger to progressively illuminate words as user scrolls through the section
  ScrollTrigger.create({
    trigger: '#about',
    start: 'top 75%',
    end: 'bottom 70%',
    scrub: 0.5,
    onUpdate: (self) => {
      const progress = self.progress;
      const totalWords = allWordSpans.length;
      const illuminatedCount = Math.floor(progress * totalWords * 1.15);

      allWordSpans.forEach((span, index) => {
        if (index <= illuminatedCount) {
          span.classList.add('illuminated');
        } else {
          span.classList.remove('illuminated');
        }
      });
    }
  });
}
initWordIllumination();

/* ==========================================================================
   7. STAT COUNTERS & GENERAL SCROLL REVEAL
   ========================================================================== */
gsap.utils.toArray('.reveal-up').forEach((el) => {
  gsap.fromTo(el,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%'
      }
    }
  );
});

// Stat Numbers
document.querySelectorAll('.stat-num').forEach((el) => {
  const target = parseInt(el.getAttribute('data-count'), 10);
  ScrollTrigger.create({
    trigger: el,
    start: 'top 92%',
    once: true,
    onEnter: () => {
      const obj = { count: 0 };
      gsap.to(obj, {
        count: target,
        duration: 1.4,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = Math.floor(obj.count);
        }
      });
    }
  });
});

/* ==========================================================================
   8. LIQUID SPOTLIGHT CARD TRACKER (MOUSE COORDINATES)
   ========================================================================== */
document.querySelectorAll('.liquid-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

/* ==========================================================================
   9. DYNAMIC CUSTOM CURSOR PHYSICS & CONTEXT BADGE
   ========================================================================== */
const customCursor = document.getElementById('customCursor');
const cursorBadge = document.getElementById('cursorBadge');

if (customCursor && window.matchMedia('(pointer: fine)').matches) {
  const dot = customCursor.querySelector('.cursor-dot');
  const ring = customCursor.querySelector('.cursor-ring');
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function renderCursorRing() {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    if (cursorBadge) {
      cursorBadge.style.left = ringX + 'px';
      cursorBadge.style.top = ringY + 'px';
    }
    requestAnimationFrame(renderCursorRing);
  }
  renderCursorRing();

  // Hover detection
  document.querySelectorAll('a, button, .liquid-card, .filter-tab, .term-chip, .contact-tile').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      customCursor.classList.add('is-hover');
      const badgeText = el.getAttribute('data-cursor');
      if (badgeText && cursorBadge) {
        cursorBadge.textContent = badgeText;
        customCursor.classList.add('has-badge');
      }
    });

    el.addEventListener('mouseleave', () => {
      customCursor.classList.remove('is-hover');
      customCursor.classList.remove('has-badge');
    });
  });
}

/* ==========================================================================
   10. SEMESTER CGPA TRACKER
   ========================================================================== */
const cgpaData = [
  { sem: 'Sem I', gpa: 7.19 },
  { sem: 'Sem II', gpa: 7.24 },
  { sem: 'Sem III', gpa: 7.90 },
  { sem: 'Sem IV', gpa: 7.40 },
  { sem: 'Sem V', gpa: null } // ongoing
];

const cgpaFills = document.querySelectorAll('.cgpa-fill');
const cgpaVals = document.querySelectorAll('.cgpa-value');

cgpaData.forEach((d, i) => {
  if (cgpaFills[i]) {
    if (d.gpa !== null) {
      const pct = (d.gpa / 10) * 100;
      cgpaFills[i].setAttribute('data-target-width', pct);
      if (cgpaVals[i]) cgpaVals[i].textContent = d.gpa.toFixed(2);
    } else {
      cgpaFills[i].setAttribute('data-target-width', 0);
      if (cgpaVals[i]) cgpaVals[i].textContent = 'Ongoing';
    }
  }
});

ScrollTrigger.create({
  trigger: '.cgpa-bars-container',
  start: 'top 85%',
  once: true,
  onEnter: () => {
    cgpaFills.forEach((fill) => {
      const targetW = fill.getAttribute('data-target-width');
      if (targetW && targetW !== '0') {
        fill.style.width = targetW + '%';
      }
    });
  }
});

/* ==========================================================================
   11. FEATURED CASES FILTERING & INTERACTIVE MODAL
   ========================================================================== */
const filterTabs = document.querySelectorAll('.filter-tab');
const caseCards = document.querySelectorAll('.case-card');

filterTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    filterTabs.forEach((t) => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    const filter = tab.getAttribute('data-filter');
    caseCards.forEach((card) => {
      const cat = card.getAttribute('data-category');
      const show = filter === 'all' || cat === filter;
      if (show) {
        card.style.display = 'flex';
        gsap.fromTo(card, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35 });
      } else {
        card.style.display = 'none';
      }
    });
  });
});

/* Project Modal Engine */
const projectsData = [
  {
    id: 0,
    title: 'Multi-Agent AI Coding Assistant (ACEx)',
    category: 'Research Paper · Multi-Agent Systems',
    status: 'In Preparation (Lit Review)',
    subtitle: 'Collaborative autonomous LLM agents specialized in code synthesis, peer review, and verification.',
    problem: 'Standard monolithic code completion often suffers from hallucinations, subtle syntax flaws, and absence of test verification. Single-prompt interfaces cannot validate their own output objectively.',
    architecture: 'Cyclic multi-agent architecture featuring role specialization: A Planner decomposes user prompts into formal execution tasks; a Synthesizer writes implementations; a Static Reviewer inspects code for vulnerabilities; and an Automated Tester executes test fixtures. Persistent vector memory ensures cross-file context retention.',
    tags: ['Multi-Agent Systems', 'LangChain', 'Python', 'Vector DB', 'LLM Prompt Engineering', 'Static Analysis'],
    github: 'https://github.com/Pranavv28'
  },
  {
    id: 1,
    title: 'Health Report Summarizer — Agentic AI & Automation',
    category: 'Course Project · Flexi-Credit Agentic AI',
    status: 'Production Tested',
    subtitle: 'Automated diagnostic report parsing, biomarker analysis, and structured patient summarization.',
    problem: 'Clinical lab tests and discharge summaries are laden with medical jargon and dense tables, leaving patients confused and consuming physician consult time explaining standard lab values.',
    architecture: 'High-speed OCR ingestion paired with clinical Named Entity Recognition (NER). Biomarkers are verified against validated clinical ranges. An agent synthesizes empathetic, jargon-free explanations alongside precautionary disclaimers and recommended physician follow-ups.',
    tags: ['Agentic AI', 'Clinical NLP', 'Document OCR', 'FastAPI', 'Python', 'Medical Guardrails'],
    github: 'https://github.com/Pranavv28/Health-Report-Summarizer-AI-Application'
  },
  {
    id: 2,
    title: 'SIH26187 — AI Video Surveillance for Borders',
    category: 'Smart India Hackathon 2026 · Computer Vision',
    status: 'SSB Problem Prototype',
    subtitle: 'Real-time perimeter intrusion analytics developed under Sashastra Seema Bal (SSB) challenge.',
    problem: 'Harsh border geography, fog, and thermal fluctuation produce rampant false alarms in conventional radar/sensor loops, creating severe alert fatigue for border security personnel.',
    architecture: 'Dual-feed pipeline fusing visual and long-wave infrared thermal streams. Hardware-accelerated YOLO performs high-precision multi-class human and vehicle detection, while DeepSORT tracks trajectory vectors across occlusions to trigger real-time tripwire alarms.',
    tags: ['Computer Vision', 'YOLO v8', 'DeepSORT', 'OpenCV', 'Edge Inference', 'Real-time Analytics'],
    github: 'https://github.com/Pranavv28/Confluence-AI'
  },
  {
    id: 3,
    title: 'SHREEDHA — Healthcare Institutional ROI Dashboard',
    category: 'Hackathon Project · Financial Analytics',
    status: 'Deployed Prototype',
    subtitle: 'Smart hospital accounts billing and departmental capital return analytics dashboard.',
    problem: 'Fragmented hospital ERP software leads to unbilled consumable leakage, suboptimal bed allocation, and delayed capital expenditure audits across specialized surgical departments.',
    architecture: 'Normalized analytics engine calculating real-time procedure margins, departmental machine utilization rates, and bed occupancy forecasts. Features a reactive dashboard with exportable financial reports.',
    tags: ['Healthcare Analytics', 'Financial Modeling', 'SQL', 'Data Visualization', 'JavaScript', 'Full-Stack'],
    github: 'https://github.com/Pranavv28/smart-hospital-financial-intelligence'
  },
  {
    id: 4,
    title: 'Memory-Powered Code Review Agent',
    category: 'Autonomous Agent · Vector Memory',
    status: 'Open Source (GitHub)',
    subtitle: 'Context-aware autonomous code reviewer with persistent vector memory and architectural rules.',
    problem: 'Standard automated linters and basic LLM prompts lack institutional memory across codebases, repeatedly flagging trivial formatting while missing architectural drift, anti-patterns, and cross-PR consistency.',
    architecture: 'An agentic workflow built with LangChain and vector embeddings that stores project architectural principles and past PR discussions in a persistent vector index. Performs multi-stage syntax and AST verification, compares diffs against repository guidelines, and generates structured, constructive code review comments.',
    tags: ['LangChain', 'Vector Embeddings', 'ChromaDB', 'AST Analysis', 'Python', 'Code Review', 'LLM Agent'],
    github: 'https://github.com/Pranavv28/Memory-Powered-Code-Review-Agent'
  },
  {
    id: 5,
    title: 'MARL for Autonomous Traffic Flow',
    category: 'Multi-Agent Reinforcement Learning',
    status: 'Research Simulation',
    subtitle: 'Cooperative multi-agent reinforcement learning optimizing urban traffic intersections and throughput.',
    problem: 'Static traffic signaling and single-agent optimization fail in dynamic urban transit networks, causing cumulative gridlocks, excessive carbon idle emissions, and emergency corridor delays.',
    architecture: 'Decentralized Partially Observable Markov Decision Process (Dec-POMDP) framework where intersection controllers act as cooperative reinforcement learning agents. Utilizes Deep Q-Networks (DQN) and PPO to dynamically adjust signal phases based on queue lengths, vehicular velocities, and upstream arrival predictions.',
    tags: ['Multi-Agent RL', 'PyTorch', 'Deep Q-Networks', 'Simulation', 'Traffic Modeling', 'Python', 'Autonomous Systems'],
    github: 'https://github.com/Pranavv28/MARL-for-Autonomous-Traffic-Flow'
  }
];

const projectModal = document.getElementById('projectModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalDismissBtn = document.getElementById('modalDismissBtn');

function openProjectModal(id) {
  const p = projectsData[id];
  if (!p || !projectModal) return;

  document.getElementById('modalTag').textContent = p.category;
  document.getElementById('modalStatus').textContent = p.status;
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalSubtitle').textContent = p.subtitle;
  document.getElementById('modalProblem').textContent = p.problem;
  document.getElementById('modalArchitecture').textContent = p.architecture;

  const tagsBox = document.getElementById('modalTechTags');
  tagsBox.innerHTML = p.tags.map((t) => `<span>${t}</span>`).join('');
  document.getElementById('modalRepoBtn').href = p.github;

  projectModal.classList.add('open');
  projectModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.classList.remove('open');
  projectModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.project-link-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const id = parseInt(btn.getAttribute('data-open-modal'), 10);
    openProjectModal(id);
  });
});

modalCloseBtn?.addEventListener('click', closeProjectModal);
modalDismissBtn?.addEventListener('click', closeProjectModal);
projectModal?.addEventListener('click', (e) => {
  if (e.target === projectModal) closeProjectModal();
});

/* ==========================================================================
   12. CERTIFICATES & CREDENTIALS SYSTEM (INTERNSHIPS AT TOP)
   ========================================================================== */
const certificatesData = [
  {
    id: 0,
    title: 'Emerging Technologies Internship (Agentic AI, Cyber Security & Quantum Computing)',
    type: '🏆 Industry Internship',
    category: 'internship',
    issuer: 'Edunet Foundation × AICTE × IBM SkillsBuild',
    date: '15 May 2026 – 12 June 2026',
    desc: 'Successfully completed a rigorous 4-week industry internship. Developed an industry-relevant project in Artificial Intelligence and Cloud Computing leveraging IBM SkillsBuild, IBM Cloud, and IBM BOB.',
    credentialId: 'STU ID: STU6995ccb089af01771424944 | Internship ID: INTERNSHIP_177549002069d3d3e4f3903',
    preview: 'certificates/previews/edunet-ibm-internship.png',
    docUrl: 'certificates/PRANAV LAKHE.pdf',
    verifyUrl: ''
  },
  {
    id: 1,
    title: 'Artificial Intelligence & Machine Learning (AI/ML) Internship',
    type: '🏆 Industry Internship',
    category: 'internship',
    issuer: 'Maincrafts Technology (MSME Govt. of India)',
    date: '20 May 2026 – 20 June 2026',
    desc: 'Demonstrated dedication and technical excellence in machine learning pipeline engineering, data preprocessing, and model evaluation benchmarks.',
    credentialId: 'Intern ID: MT3954 | MSME Reg: UDYAM-UP-75-0096043',
    preview: 'certificates/previews/maincrafts-internship.jpg',
    docUrl: 'certificates/Maincrafts Certificate of Internship-38_page-0001.jpg',
    verifyUrl: 'http://www.maincrafts.com'
  },
  {
    id: 2,
    title: 'Red Hat System Administration I (RH124 - RHA) - Ver. 10',
    type: 'Systems & Linux',
    category: 'systems',
    issuer: 'Red Hat',
    date: '2026',
    desc: 'Core system administration competencies across Linux environments: managing storage, processes, network access, security policies, and automation.',
    credentialId: 'Credly Badge: 990411b5-d6e2-46e5-8585-704d48728e31',
    preview: 'certificates/previews/redhat-system-admin.png',
    docUrl: 'certificates/132_SIT-NG_24070521248_Sem4_25-26.pdf',
    verifyUrl: 'https://www.credly.com/badges/990411b5-d6e2-46e5-8585-704d48728e31'
  },
  {
    id: 3,
    title: 'Introduction to System Security',
    type: 'Cybersecurity',
    category: 'systems',
    issuer: 'Vodafone Idea Foundation × Connecting Dreams Foundation (VOIS)',
    date: '28 March 2026',
    desc: 'Completed specialized coursework on system security fundamentals, defensive protocols, risk mitigation, and enterprise IT infrastructure hardening.',
    credentialId: 'Certificate ID: VFLMS26_148979',
    preview: 'certificates/previews/vois-system-security.png',
    docUrl: 'certificates/Certificate.pdf',
    verifyUrl: ''
  },
  {
    id: 4,
    title: 'Data Structures and Algorithms using Python - Part 1',
    type: 'Algorithms & Core CS',
    category: 'systems',
    issuer: 'Infosys Springboard (Wingspan)',
    date: '27 October 2025',
    desc: 'Foundational algorithmic problem solving in Python, covering time/space complexity analysis, recursion, sorting, and linear data structures.',
    credentialId: 'Wingspan Authenticated Record',
    preview: 'certificates/previews/infosys-dsa-python.png',
    docUrl: 'certificates/132_SIT-NG_24070521248_Sem3_25-26.pdf',
    verifyUrl: 'https://verify.onwingspan.com'
  },
  {
    id: 5,
    title: 'NEXUS HYBRID — Virtual Hackathon Participation',
    type: 'Hackathon Competition',
    category: 'hackathon',
    issuer: 'Ramgarh Engineering College & Chandigarh University (Devnovate)',
    date: '05–06 June 2026',
    desc: 'Certificate of Participation for actively building in the national NEXUS HYBRID Hackathon, demonstrating problem-solving, rapid prototyping, and software engineering.',
    credentialId: 'Graduate No: 700116e5-fd69-454d-87c8-0b2fc11885a5',
    preview: 'certificates/previews/nexus-hackathon.png',
    docUrl: 'certificates/700116e5-fd69-454d-87c8-0b2fc11885a5.pdf',
    verifyUrl: ''
  }
];

let currentCertIdx = 0;
const certLightboxModal = document.getElementById('certLightboxModal');
const certLightboxCloseBtn = document.getElementById('certLightboxCloseBtn');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxType = document.getElementById('lightboxType');
const lightboxDate = document.getElementById('lightboxDate');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxIssuer = document.getElementById('lightboxIssuer');
const lightboxDesc = document.getElementById('lightboxDesc');
const lightboxId = document.getElementById('lightboxId');
const lightboxDocBtn = document.getElementById('lightboxDocBtn');
const lightboxVerifyBtn = document.getElementById('lightboxVerifyBtn');
const certCounter = document.getElementById('certCounter');
const certPrevBtn = document.getElementById('certPrevBtn');
const certNextBtn = document.getElementById('certNextBtn');

function openCertLightbox(idx) {
  if (idx < 0) idx = certificatesData.length - 1;
  if (idx >= certificatesData.length) idx = 0;
  currentCertIdx = idx;

  const c = certificatesData[currentCertIdx];
  if (!c || !certLightboxModal) return;

  if (lightboxImg) {
    lightboxImg.src = c.preview;
    lightboxImg.alt = c.title;
  }
  if (lightboxType) lightboxType.textContent = c.type;
  if (lightboxDate) lightboxDate.textContent = c.date;
  if (lightboxTitle) lightboxTitle.textContent = c.title;
  if (lightboxIssuer) lightboxIssuer.textContent = c.issuer;
  if (lightboxDesc) lightboxDesc.textContent = c.desc;
  if (lightboxId) lightboxId.textContent = c.credentialId;
  if (lightboxDocBtn) lightboxDocBtn.href = c.docUrl;

  if (lightboxVerifyBtn) {
    if (c.verifyUrl) {
      lightboxVerifyBtn.href = c.verifyUrl;
      lightboxVerifyBtn.style.display = 'inline-flex';
    } else {
      lightboxVerifyBtn.style.display = 'none';
    }
  }

  if (certCounter) certCounter.textContent = `${currentCertIdx + 1} / ${certificatesData.length}`;

  certLightboxModal.classList.add('open');
  certLightboxModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCertLightbox() {
  if (!certLightboxModal) return;
  certLightboxModal.classList.remove('open');
  certLightboxModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

certLightboxCloseBtn?.addEventListener('click', closeCertLightbox);
certLightboxModal?.addEventListener('click', (e) => {
  if (e.target === certLightboxModal) closeCertLightbox();
});

certPrevBtn?.addEventListener('click', () => openCertLightbox(currentCertIdx - 1));
certNextBtn?.addEventListener('click', () => openCertLightbox(currentCertIdx + 1));

// Trigger buttons on cards
document.querySelectorAll('.btn-cert-open').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const id = parseInt(btn.getAttribute('data-cert-modal'), 10);
    openCertLightbox(id);
  });
});

document.querySelectorAll('.cert-preview-box').forEach((box) => {
  box.addEventListener('click', () => {
    const card = box.closest('.cert-card');
    if (card) {
      const id = parseInt(card.getAttribute('data-cert-id'), 10);
      openCertLightbox(id);
    }
  });
});

// Certificate Filters
const certTabs = document.querySelectorAll('.cert-tab');
const certCards = document.querySelectorAll('.cert-card');

certTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    certTabs.forEach((t) => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    const filter = tab.getAttribute('data-cert-filter');
    certCards.forEach((card) => {
      const type = card.getAttribute('data-cert-type');
      const show = filter === 'all' || type === filter;
      if (show) {
        card.style.display = 'flex';
        gsap.fromTo(card, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35 });
      } else {
        card.style.display = 'none';
      }
    });
  });
});

/* ==========================================================================
   13. TOAST ENGINE & 1-CLICK CLIPBOARD COPY
   ========================================================================== */
function showToast(message, icon = '⚡') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s forwards';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

document.querySelectorAll('.copyable').forEach((card) => {
  card.addEventListener('click', () => {
    const text = card.getAttribute('data-copy');
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Copied ${text} to clipboard!`, '📋');
    }).catch(() => {
      showToast(`Contact: ${text}`, '📋');
    });
  });
});

/* ==========================================================================
   13B. AUTOMATED MAIL DISPATCH ENGINE (DIRECT TO PRANAVLAKHE1@GMAIL.COM)
   ========================================================================== */
const automatedContactForm = document.getElementById('automatedContactForm');
const dispatchMailBtn = document.getElementById('dispatchMailBtn');
const dispatchBtnText = document.getElementById('dispatchBtnText');
const dispatchFeedback = document.getElementById('dispatchFeedback');
const gmailComposeBtn = document.getElementById('gmailComposeBtn');

automatedContactForm?.addEventListener('submit', async (e) => {
  const name = document.getElementById('senderName')?.value.trim();
  const email = document.getElementById('senderEmail')?.value.trim();
  const subject = document.getElementById('mailSubject')?.value.trim() || 'Inquiry';
  const message = document.getElementById('senderMessage')?.value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    showToast('Please fill out all required fields.', '⚠️');
    return;
  }

  const hiddenSubject = document.getElementById('hiddenSubject');
  if (hiddenSubject) {
    hiddenSubject.value = `[Portfolio Dispatch] ${subject} from ${name}`;
  }

  // If running locally from file://, FormSubmit rejects AJAX. Allow native form submit in new tab.
  const isLocalFile = window.location.protocol === 'file:';
  if (isLocalFile) {
    showToast('Opening FormSubmit dispatch tab...', '✉️');
    if (dispatchFeedback) {
      dispatchFeedback.style.display = 'block';
      dispatchFeedback.className = 'dispatch-feedback info';
      dispatchFeedback.innerHTML = `⏳ <strong>Dispatching via FormSubmit...</strong><br>Note: If this is the first time using FormSubmit, check <strong>pranavlakhe1@gmail.com</strong> (including Spam/Updates) to click the 1-time activation link! You can also click <strong>Open in Gmail</strong> to send directly.`;
    }
    return; // allow native submit
  }

  e.preventDefault();

  // Set loading state
  if (dispatchMailBtn) dispatchMailBtn.disabled = true;
  if (dispatchBtnText) dispatchBtnText.textContent = 'Dispatching to Inbox... ⏳';
  if (dispatchFeedback) {
    dispatchFeedback.style.display = 'none';
    dispatchFeedback.className = 'dispatch-feedback';
  }

  try {
    const response = await fetch('https://formsubmit.co/ajax/pranavlakhe1@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        _subject: `[Portfolio Dispatch] ${subject} from ${name}`,
        message: message,
        _template: 'table'
      })
    });

    const data = await response.json();

    if (response.ok && (data.success === 'true' || data.success === true)) {
      if (dispatchFeedback) {
        dispatchFeedback.style.display = 'block';
        dispatchFeedback.className = 'dispatch-feedback success';
        dispatchFeedback.innerHTML = `✓ <strong>Message dispatched successfully!</strong> Delivered directly to <strong>pranavlakhe1@gmail.com</strong>.`;
      }
      showToast("Email delivered to Pranav's inbox! 🚀", '✉️');
      automatedContactForm.reset();
    } else {
      throw new Error(data.message || 'FormSubmit requires confirmation or returned error');
    }
  } catch (err) {
    console.warn('FormSubmit AJAX fallback:', err);
    // Fallback: Submit natively in a new tab
    automatedContactForm.submit();
    if (dispatchFeedback) {
      dispatchFeedback.style.display = 'block';
      dispatchFeedback.className = 'dispatch-feedback info';
      dispatchFeedback.innerHTML = `⏳ <strong>Form submission redirected to FormSubmit.</strong><br>Check <strong>pranavlakhe1@gmail.com</strong> to confirm the 1-time activation if prompted, or use <strong>Open in Gmail</strong>.`;
    }
    showToast('Submitting via FormSubmit gateway...', '✉️');
  } finally {
    if (dispatchMailBtn) dispatchMailBtn.disabled = false;
    if (dispatchBtnText) dispatchBtnText.textContent = 'Send Mail Automatically';
  }
});

gmailComposeBtn?.addEventListener('click', () => {
  const name = document.getElementById('senderName')?.value.trim() || 'Visitor';
  const email = document.getElementById('senderEmail')?.value.trim() || '';
  const subject = document.getElementById('mailSubject')?.value.trim() || 'Portfolio Inquiry';
  const message = document.getElementById('senderMessage')?.value.trim() || '';

  const bodyText = message ? `Hi Pranav,\n\n${message}\n\nBest regards,\n${name}${email ? ` (${email})` : ''}` : `Hi Pranav,\n\nI came across your portfolio and wanted to reach out regarding...`;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=pranavlakhe1@gmail.com&su=${encodeURIComponent(`[Portfolio] ${subject} from ${name}`)}&body=${encodeURIComponent(bodyText)}`;
  window.open(gmailUrl, '_blank');
  showToast('Launching Google Mail composer...', '✉️');
});

document.getElementById('resumeBtn')?.addEventListener('click', () => {
  showToast('Downloading Pranav Lakhe Resume PDF...', '📄');
});

/* ==========================================================================
   14. LIVE NAGPUR (IST) CLOCK
   ========================================================================== */
function updateNagpurClock() {
  const clockEl = document.getElementById('liveNagpurClock');
  if (!clockEl) return;
  const now = new Date();
  const options = {
    timeZone: 'Asia/Kolkata',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  clockEl.textContent = now.toLocaleTimeString('en-US', options) + ' IST';
}
setInterval(updateNagpurClock, 1000);
updateNagpurClock();

/* ==========================================================================
   15. DEVELOPER COMMAND PALETTE TERMINAL (Ctrl + K)
   ========================================================================== */
const terminalModal = document.getElementById('terminalModal');
const cmdTriggerBtn = document.getElementById('cmdTriggerBtn');
const heroCmdBtn = document.getElementById('heroCmdBtn');
const terminalCloseBtn = document.getElementById('terminalCloseBtn');
const termCloseDot = document.getElementById('termCloseDot');
const terminalForm = document.getElementById('terminalForm');
const terminalInput = document.getElementById('terminalInput');
const terminalOutput = document.getElementById('terminalOutput');

function openTerminal() {
  if (!terminalModal) return;
  terminalModal.classList.add('open');
  terminalModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  setTimeout(() => terminalInput?.focus(), 120);
}

function closeTerminal() {
  if (!terminalModal) return;
  terminalModal.classList.remove('open');
  terminalModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

cmdTriggerBtn?.addEventListener('click', openTerminal);
heroCmdBtn?.addEventListener('click', openTerminal);
terminalCloseBtn?.addEventListener('click', closeTerminal);
termCloseDot?.addEventListener('click', closeTerminal);

terminalModal?.addEventListener('click', (e) => {
  if (e.target === terminalModal) closeTerminal();
});

// Keyboard listener
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    if (terminalModal?.classList.contains('open')) {
      closeTerminal();
    } else {
      closeProjectModal();
      openTerminal();
    }
  } else if (e.key === 'Escape') {
    closeTerminal();
    closeProjectModal();
    closeCertLightbox();
  } else if (e.key === 'ArrowLeft' && certLightboxModal?.classList.contains('open')) {
    openCertLightbox(currentCertIdx - 1);
  } else if (e.key === 'ArrowRight' && certLightboxModal?.classList.contains('open')) {
    openCertLightbox(currentCertIdx + 1);
  }
});

function executeTerminalCmd(raw) {
  const cmd = raw.trim().toLowerCase();
  if (!cmd) return;

  const userRow = document.createElement('div');
  userRow.className = 't-line';
  userRow.innerHTML = `<span class="terminal-prompt">❯</span> <span class="t-cmd">${raw}</span>`;
  terminalOutput.appendChild(userRow);

  const resRow = document.createElement('div');
  resRow.className = 't-line';

  switch (cmd) {
    case 'help':
      resRow.innerHTML = `
        <div style="color:var(--accent);">Available System Commands:</div>
        <div>• <span class="t-cmd">projects</span> — Jump to Featured Works</div>
        <div>• <span class="t-cmd">skills</span> — View Bento Skills Matrix</div>
        <div>• <span class="t-cmd">certificates</span> — View Verified Credentials &amp; Internships</div>
        <div>• <span class="t-cmd">about</span> — Read developer background</div>
        <div>• <span class="t-cmd">contact</span> — Copy email &amp; jump to contact</div>
        <div>• <span class="t-cmd">theme</span> — Cycle theme palette (Emerald / Violet / Solar / Cyan)</div>
        <div>• <span class="t-cmd">clear</span> — Clear terminal output</div>
        <div>• <span class="t-cmd">exit</span> — Close terminal modal</div>
      `;
      break;

    case 'certificates':
    case 'internships':
    case 'credentials':
      resRow.className += ' t-success';
      resRow.textContent = 'Navigating to Verified Credentials & Internships...';
      closeTerminal();
      document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' });
      break;

    case 'projects':
    case 'works':
      resRow.className += ' t-success';
      resRow.textContent = 'Navigating to Selected Works...';
      closeTerminal();
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      break;

    case 'skills':
      resRow.className += ' t-success';
      resRow.textContent = 'Navigating to Technical Skills Matrix...';
      closeTerminal();
      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      break;

    case 'about':
      resRow.innerHTML = `<strong>Pranav Lakhe</strong> — B.Tech Computer Science &amp; IT student at Symbiosis Institute of Technology, Nagpur (Batch 2028). Specialized in Agentic AI pipelines, edge computer vision, and high-performance software engineering.`;
      break;

    case 'contact':
      resRow.className += ' t-success';
      resRow.textContent = 'Copied pranavlakhe1@gmail.com to clipboard! Navigating...';
      navigator.clipboard.writeText('pranavlakhe1@gmail.com');
      showToast('Copied email to clipboard! 📬', '✉️');
      closeTerminal();
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      break;

    case 'theme':
      cycleTheme(false);
      const activeTh = getActiveTheme();
      resRow.style.color = activeTh.accentHex;
      resRow.textContent = `Theme palette switched: ${activeTh.name} is now active! 🎨`;
      showToast(`Switched to ${activeTh.name} Theme!`, '🎨');
      break;

    case 'clear':
      terminalOutput.innerHTML = '';
      return;

    case 'exit':
    case 'quit':
    case 'close':
      closeTerminal();
      return;

    default:
      resRow.className += ' t-warn';
      resRow.textContent = `Unknown command: "${raw}". Type "help" for a list of commands.`;
      break;
  }

  terminalOutput.appendChild(resRow);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

terminalForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const val = terminalInput.value;
  terminalInput.value = '';
  executeTerminalCmd(val);
});

document.querySelectorAll('.term-chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    const cmd = chip.getAttribute('data-cmd');
    if (cmd) executeTerminalCmd(cmd);
  });
});
