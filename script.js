// Viti aktual automatik
const yearEl = document.getElementById('y');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Animacionet gjatë scroll-it (Reveal)
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.rv').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 80 + 'ms';
  io.observe(el);
});

// Fjalori Shqip
const D = {
  "Services": "Shërbimet",
  "Admin panels": "Panele administrimi",
  "Process": "Procesi",
  "Contact": "Kontakti",
  "Start a project": "Nis një projekt",
  "Now booking new projects": "Po pranojmë projekte të reja",
  "Your Business.": "Biznesi yt.",
  "Built to Grow.": "I krijuar për t'u rritur.",
  "Modern websites and custom admin panels designed to help your business stand out, work smarter, and grow online.": "Website moderne dhe panele administrimi të personalizuara, që biznesi yt të dallohet, të funksionojë më mirë dhe të rritet online.",
  "Start Your Project →": "Nis projektin tënd →",
  "Explore Our Services": "Eksploro shërbimet tona",
  "Custom-built": "Ndërtuar sipas kërkesës",
  "Designed for your business": "Projektuar për biznesin tënd",
  "Responsive on every screen": "Përshtatet me çdo ekran",
  "Available when you need them": "Të disponueshme kur të duhen",
  "Demo data": "Të dhëna demonstrimi",
  "Illustrative dashboard preview · Demo data": "Pamje ilustruese e panelit · Të dhëna demonstrimi",
  "Websites that": "Faqe interneti që ",
  "stop the scroll.": "tërheqin vëmendjen.",
  "Fabi Sites and Codes designs and builds bold, lightning-fast websites and custom admin panels, so your business looks unforgettable and runs effortlessly.": "Fabi Sites and Codes projekton dhe ndërton faqe interneti të guximshme, shumë të shpejta dhe panele administrimi të personalizuara, që biznesi juaj të duket i paharrueshëm dhe të funksionojë pa mundim.",
  "Get a free quote →": "Merr një ofertë falas →",
  "See what we build": "Shiko çfarë ndërtojmë",
  "100%": "100%",
  "Custom-coded, no templates": "Kod i personalizuar, pa shabllone",
  "Mobile-first": "Fillimisht për celular",
  "Perfect on every screen": "I përsosur në çdo ekran",
  "Admin included": "Admin i përfshirë",
  "Manage it yourself": "Menaxhoje vetë",
  "Orders": "Porosi",
  "Visitors": "Vizitorë",
  "Growth": "Rritje",
  "New order #2041": "Porosi e re #2041",
  "Paid": "Paguar",
  "Product updated": "Produkt i përditësuar",
  "Live": "Live",
  "New message": "Mesazh i ri",
  "Unread": "Pa lexuar",
  "Web Design": "Dizajn Web",
  "Admin Panels": "Panele Admin",
  "E-commerce": "Dyqane Online",
  "Branding": "Branding",
  "SEO": "SEO",
  "Web Apps": "Aplikacione Web",
  "What we do": "Çfarë bëjmë",
  "Everything your business needs online.": "Gjithçka që i duhet biznesit tuaj online.",
  "From the first sketch to launch day, one studio handles design, code and the tools you'll use every day.": "Nga skica e parë deri në ditën e nisjes, një studio i trajton dizajnin, kodin dhe mjetet që do të përdorni çdo ditë.",
  "Custom website design": "Dizajn i personalizuar i faqes",
  "Original, conversion-focused design shaped around your brand, never a recycled template. Every pixel earns its place.": "Dizajn origjinal, i fokusuar te konvertimi, i krijuar sipas markës suaj, kurrë një shabllon i ripërdorur. Çdo piksel ka vendin e vet.",
  "Landing pages & business sites": "Faqe zbarkimi dhe faqe biznesi",
  "Portfolios & personal brands": "Portfolio dhe marka personale",
  "Animations and micro-interactions": "Animacione dhe mikro-ndërveprime",
  "Responsive on phone, tablet, desktop": "Responsive në celular, tablet, kompjuter",
  "Admin panels & dashboards": "Panele administrimi dhe dashboard-e",
  "Secure back-offices to manage products, orders, content and customers, without touching code.": "Panele të sigurta për të menaxhuar produktet, porositë, përmbajtjen dhe klientët, pa prekur kod.",
  "E-commerce stores": "Dyqane online",
  "Storefronts with catalogues, carts and checkout built to turn visitors into buyers.": "Dyqane me katalogë, shporta dhe pagesë, ndërtuar që vizitorët t'i kthejnë në blerës.",
  "Speed & performance": "Shpejtësi dhe performancë",
  "Lean code that loads instantly and ranks better.": "Kod i lehtë që ngarkohet menjëherë dhe renditet më mirë.",
  "SEO-ready": "I gatshëm për SEO",
  "Clean structure and metadata so people can find you.": "Strukturë e pastër dhe metadata që njerëzit t'ju gjejnë.",
  "Care & updates": "Kujdes dhe përditësime",
  "Hosting help, fixes and improvements after launch.": "Ndihmë me hostimin, rregullime dhe përmirësime pas nisjes.",
  "Run your business from one clean screen.": "Drejtoni biznesin nga një ekran i pastër.",
  "Edit prices, publish content, track orders and manage users from a fast, secure panel designed for real people, not developers.": "Ndryshoni çmimet, publikoni përmbajtje, ndiqni porositë dhe menaxhoni përdoruesit nga një panel i shpejtë dhe i sigurt, i krijuar për njerëz, jo për programues.",
  "✓ Role-based access & secure login": "✓ Qasje sipas roleve dhe hyrje e sigurt",
  "✓ Products, orders, customers & media": "✓ Produkte, porosi, klientë dhe media",
  "✓ Live stats and exportable reports": "✓ Statistika live dhe raporte të eksportueshme",
  "✓ Works great on mobile too": "✓ Funksionon shkëlqyer edhe në celular",
  "Full control": "Kontroll i plotë",
  "Update your site anytime, no developer needed.": "Përditësoni faqen kurdo, pa nevojën e një programuesi.",
  "Built to scale": "Ndërtuar për t'u rritur",
  "Grows with your catalogue and customers.": "Rritet bashkë me katalogun dhe klientët tuaj.",
  "How we work": "Si punojmë",
  "A simple process, a standout result.": "Një proces i thjeshtë, një rezultat që spikat.",
  "Discover": "Zbulojmë",
  "We learn your goals, audience and competitors, studying the best sites worldwide for ideas.": "Mësojmë objektivat, audiencën dhe konkurrentët tuaj, duke studiuar faqet më të mira në botë për ide.",
  "Design": "Dizajnojmë",
  "You see a bold, on-brand concept before a single line of code ships.": "Ju shihni një koncept të guximshëm, sipas markës suaj, para se të shkruhet një rresht kodi.",
  "Build": "Ndërtojmë",
  "Hand-coded, tested and tuned for speed on every device.": "Kod i shkruar me dorë, i testuar dhe i optimizuar për shpejtësi në çdo pajisje.",
  "Launch": "Nisim",
  "We go live, train you on the admin panel and stay close for support.": "Publikojmë, ju trajnojmë për panelin e administrimit dhe qëndrojmë pranë për mbështetje.",
  "Let's talk": "Të bisedojmë",
  "Ready for a website people remember?": "Gati për një faqe që njerëzit e mbajnë mend?",
  "Tell us about your project and we'll reply with ideas and a clear quote.": "Na tregoni për projektin tuaj dhe do t'ju përgjigjemi me ide dhe një ofertë të qartë.",
  "Email": "Email",
  "Phone": "Telefon",
  "Your name": "Emri juaj",
  "Your email": "Email-i juaj",
  "Estimated budget (optional)": "Buxheti i përafërt (opsionale)",
  "Under €150": "Nën 150 €",
  "€150–€400": "150–400 €",
  "€400–€800": "400–800 €",
  "€800+": "800 € e lart",
  "Not sure yet": "Nuk jam i sigurt ende",
  "When do you need it? (optional)": "Kur të duhet projekti? (opsionale)",
  "As soon as possible": "Sa më shpejt të jetë e mundur",
  "Within 2–4 weeks": "Brenda 2–4 javësh",
  "Within 1–3 months": "Brenda 1–3 muajsh",
  "I'm just exploring": "Po shqyrtoj mundësitë",
  "Prefer WhatsApp? Chat with us ↗": "Preferon WhatsApp? Na shkruaj ↗",
  "Tell us about your project…": "Na tregoni për projektin tuaj…",
  "Send message →": "Dërgo mesazhin →",
  "Fabi Sites and Codes. All rights reserved.": "Fabi Sites and Codes. Të gjitha të drejtat e rezervuara.",
  "Websites · Admin panels · Design": "Faqe interneti · Panele administrimi · Dizajn",
  "Sending…": "Po dërgohet…",
  "Thank you! Your message was sent. We will reply soon.": "Faleminderit! Mesazhi u dërgua. Do t'ju përgjigjemi së shpejti.",
  "Something went wrong. Please email us directly.": "Diçka shkoi keq. Ju lutemi na shkruani drejtpërdrejt me email.",
  "Selected work": "Projektet tona",
  "Real projects.": "Projekte reale.",
  "Thoughtfully built.": "Të ndërtuara me kujdes.",
  "A look at projects created for real clients — each with its own purpose, style and digital experience.": "Një vështrim mbi projekte të krijuara për klientë realë — secili me qëllimin, stilin dhe përvojën e vet digjitale.",
  "CLIENT PROJECT · 01": "PROJEKT PËR KLIENT · 01",
  "CLIENT PROJECT · 02": "PROJEKT PËR KLIENT · 02",
  "A bold digital presence for a DJ, built to showcase the brand and connect the energy of live events with an online audience.": "Një prezencë digjitale moderne për një DJ, e krijuar për të prezantuar markën dhe për të lidhur energjinë e eventeve me audiencën online.",
  "A promotional website concept designed to help businesses present their services clearly and build a stronger online presence.": "Një faqe promovuese e krijuar për t'i ndihmuar bizneset të prezantojnë qartë shërbimet dhe të forcojnë prezencën online.",
  "Portfolio": "Portofol",
  "Brand Identity": "Identitet marke",
  "Responsive Web": "Web responsive",
  "Business Website": "Faqe biznesi",
  "Explore live website": "Shiko faqen live",
  "Have an idea of your own?": "Ke një ide tënden?",
  "Let's build it together": "Ta ndërtojmë së bashku"
};

let currentLang = 'sq';
const titleOrig = document.title;
const metaDesc = document.querySelector('meta[name="description"]');
const metaDescOrig = metaDesc ? metaDesc.content : '';
const statusMsg = document.getElementById('st');

function say(key) {
  if (!statusMsg) return;
  statusMsg.dataset.k = key;
  statusMsg.textContent = currentLang === 'sq' && D[key] ? D[key] : key;
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Përkthimi i opsioneve të select-it me data attributes
  document.querySelectorAll('select option[data-en], select option[data-sq]').forEach((opt) => {
    if (lang === 'sq') {
      opt.textContent = opt.getAttribute('data-sq') || opt.getAttribute('data-en') || opt.textContent;
    } else {
      opt.textContent = opt.getAttribute('data-en') || opt.getAttribute('data-sq') || opt.textContent;
    }
  });

  // Përkthimi i tekstit në faqe
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  const nodes = [];
  while (node = walker.nextNode()) {
    const parentTag = node.parentNode.tagName;
    if (parentTag !== 'SCRIPT' && parentTag !== 'STYLE' && node.parentNode.id !== 'st') {
      nodes.push(node);
    }
  }

  nodes.forEach((n) => {
    if (n.__orig === undefined) n.__orig = n.nodeValue;
    const trimmed = n.__orig.trim();
    if (D[trimmed]) {
      if (lang === 'sq') {
        n.nodeValue = n.__orig.replace(trimmed, D[trimmed]);
      } else {
        n.nodeValue = n.__orig;
      }
    }
  });

  // Përkthimi i Placeholders
  document.querySelectorAll('[placeholder]').forEach((el) => {
    if (!el.dataset.p) el.dataset.p = el.placeholder;
    el.placeholder = lang === 'sq' && D[el.dataset.p] ? D[el.dataset.p] : el.dataset.p;
  });

  // Titulli dhe Meta Description
  document.title = lang === 'sq' 
    ? 'Fabi Sites and Codes — Faqe interneti dhe panele administrimi që spikasin' 
    : titleOrig;

  if (metaDesc) {
    metaDesc.content = lang === 'sq' 
      ? 'Dizajn, zhvillim faqesh interneti dhe panele administrimi sipas porosisë. Fabi Sites and Codes ndërton faqe të shpejta e tërheqëse që sjellin klientë.' 
      : metaDescOrig;
  }

  const langBtn = document.getElementById('lg');
  if (langBtn) langBtn.textContent = lang === 'sq' ? 'EN' : 'SQ';

  if (statusMsg && statusMsg.dataset.k) {
    say(statusMsg.dataset.k);
  }

  try {
    localStorage.setItem('site_lang', lang);
  } catch (e) {}
}

const langToggle = document.getElementById('lg');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    applyLanguage(currentLang === 'sq' ? 'en' : 'sq');
  });
}

let savedLang = 'sq';
try {
  savedLang = localStorage.getItem('site_lang') || 'sq';
} catch (e) {}
applyLanguage(savedLang);

// Trajtimi i Formularit
const contactForm = document.getElementById('f');
const formEndpoint = 'https://formspree.io/f/mkjobeyo';

if (contactForm) {
  contactForm.addEventListener('submit', function (ev) {
    ev.preventDefault();
    say('Sending…');

    const formData = new FormData(contactForm);

    fetch(formEndpoint, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then((res) => {
      if (!res.ok) throw new Error('Network error');
      contactForm.reset();
      say('Thank you! Your message was sent. We will reply soon.');
    })
    .catch(() => {
      say('Something went wrong. Please email us directly.');
    });
  });
}

// Menuja Mobile
const menuBtn = document.getElementById('mb');
const menuNav = document.getElementById('mn');

function closeMobileMenu() {
  if (!menuNav || !menuBtn) return;
  menuNav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.textContent = '☰';
}

if (menuBtn && menuNav) {
  menuBtn.addEventListener('click', () => {
    const isOpen = menuNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menuBtn.textContent = isOpen ? '✕' : '☰';
  });

  menuNav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') closeMobileMenu();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMobileMenu();
});

window.matchMedia('(min-width: 901px)').addEventListener('change', (e) => {
  if (e.matches) closeMobileMenu();
});
