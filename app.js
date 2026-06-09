/* =========================================================
   APP LOGIC - Home, Modul, Belajar & Quiz (multi modul)
   ========================================================= */

const screens = {
  home: document.getElementById("home"),
  module: document.getElementById("module")
};

let currentModuleIndex = 0;

/* ---------- HELPERS ---------- */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================================================
   HOME PAGE
   ========================================================= */
const moduleGrid = document.getElementById("moduleGrid");

function renderHome() {
  moduleGrid.innerHTML = "";
  MODULES.forEach((m, idx) => {
    const card = document.createElement("div");
    card.className = `module-card c-${m.theme}`;
    card.innerHTML = `
      <span class="m-icon">${m.icon}</span>
      <h3>${m.title}</h3>
      <p>${m.subtitle}</p>
      <div class="m-foot">
        <span class="pill ${m.ready ? "ready" : "soon"}">${m.ready ? "✓ Siap" : "Segera"}</span>
        <span class="m-go">Buka →</span>
      </div>
    `;
    card.addEventListener("click", () => openModule(idx));
    moduleGrid.appendChild(card);
  });
}

/* =========================================================
   MODULE PAGE
   ========================================================= */
const moduleTitle = document.getElementById("moduleTitle");
const moduleSub = document.getElementById("moduleSub");
const toc = document.getElementById("toc");
const materiContent = document.getElementById("materiContent");
const tocToggle = document.getElementById("tocToggle");
const moduleNav = document.getElementById("moduleNav");
const quizIntroDesc = document.getElementById("quizIntroDesc");

function openModule(idx) {
  currentModuleIndex = idx;
  const m = MODULES[idx];

  // tema warna
  document.body.className = `theme-${m.theme}`;

  moduleTitle.textContent = m.title;
  moduleSub.textContent = m.subtitle;

  renderMateri(m);
  setupQuizIntro(m);
  renderModuleNav(idx);

  // reset ke mode belajar
  setMode("belajar");
  resetQuizUI();

  showScreen("module");
}

/* ---------- MODE SWITCH ---------- */
const modeButtons = document.querySelectorAll(".mode-btn");
const views = document.querySelectorAll(".view");

function setMode(mode) {
  modeButtons.forEach(b => b.classList.toggle("active", b.dataset.mode === mode));
  views.forEach(v => v.classList.toggle("active", v.id === mode));
}

modeButtons.forEach(btn => {
  btn.addEventListener("click", () => setMode(btn.dataset.mode));
});

document.getElementById("homeBtn").addEventListener("click", () => showScreen("home"));

/* ---------- MATERI + TOC ---------- */
function renderMateri(m) {
  let tocHtml = "<h3>Daftar Isi</h3>";
  let contentHtml = "";
  m.materi.forEach(item => {
    tocHtml += `<a href="#${item.id}" data-target="${item.id}">${item.title}</a>`;
    // bungkus tabel agar bisa scroll di HP
    const wrapped = item.html.replace(/<table class="tbl">/g, '<div class="table-scroll"><table class="tbl">')
                             .replace(/<\/table>/g, '</table></div>');
    contentHtml += `<div class="card" id="${item.id}"><h2>${item.title}</h2>${wrapped}</div>`;
  });
  toc.innerHTML = tocHtml;
  materiContent.innerHTML = contentHtml;
  toc.classList.remove("open");

  toc.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      const target = document.getElementById(a.dataset.target);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      toc.classList.remove("open"); // tutup TOC di HP setelah klik
    });
  });

  setupScrollSpy(m);
}

tocToggle.addEventListener("click", () => toc.classList.toggle("open"));

function setupScrollSpy(m) {
  const links = toc.querySelectorAll("a");
  const sections = m.materi.map(item => document.getElementById(item.id));
  if (window._spy) window._spy.disconnect();
  window._spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.toggle("active", l.dataset.target === entry.target.id));
      }
    });
  }, { rootMargin: "-30% 0px -60% 0px" });
  sections.forEach(s => s && window._spy.observe(s));
}

/* ---------- MODULE NAV (prev / next tanpa ke home) ---------- */
function renderModuleNav(idx) {
  moduleNav.innerHTML = "";
  const prev = MODULES[idx - 1];
  const next = MODULES[idx + 1];

  if (prev) {
    const b = document.createElement("button");
    b.className = "nav-card prev";
    b.innerHTML = `<div class="nav-label">← Sebelumnya</div><div class="nav-title">${prev.title}</div>`;
    b.addEventListener("click", () => openModule(idx - 1));
    moduleNav.appendChild(b);
  }
  if (next) {
    const b = document.createElement("button");
    b.className = "nav-card next";
    b.innerHTML = `<div class="nav-label">Selanjutnya →</div><div class="nav-title">${next.title}</div>`;
    b.addEventListener("click", () => openModule(idx + 1));
    moduleNav.appendChild(b);
  }
}

/* =========================================================
   QUIZ
   ========================================================= */
const quizCategory = document.getElementById("quizCategory");
const startQuiz = document.getElementById("startQuiz");
const quizIntro = document.getElementById("quizIntro");
const quizArea = document.getElementById("quizArea");
const quizResult = document.getElementById("quizResult");
const questionCard = document.getElementById("questionCard");
const nextBtn = document.getElementById("nextBtn");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const fxOverlay = document.getElementById("fxOverlay");

let session = { questions: [], current: 0, score: 0, answers: [] };

function setupQuizIntro(m) {
  // populate kategori berdasarkan soal yang ada di modul
  quizCategory.innerHTML = "";
  if (!m.quiz || m.quiz.length === 0) {
    quizIntroDesc.textContent = "Soal untuk modul ini belum tersedia. Akan ditambahkan nanti.";
    startQuiz.disabled = true;
    const opt = document.createElement("option");
    opt.textContent = "Belum ada soal";
    quizCategory.appendChild(opt);
    quizCategory.disabled = true;
    return;
  }
  startQuiz.disabled = false;
  quizCategory.disabled = false;
  quizIntroDesc.textContent = `Tersedia ${m.quiz.length} soal. Pilih jawaban yang benar untuk setiap pertanyaan.`;

  // kategori yang benar-benar ada di modul ini
  const catsInModule = new Set(m.quiz.map(q => q.cat));
  Object.entries(CATEGORIES).forEach(([key, label]) => {
    if (key !== "all" && !catsInModule.has(key)) return;
    const count = key === "all" ? m.quiz.length : m.quiz.filter(q => q.cat === key).length;
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = `${label} (${count} soal)`;
    quizCategory.appendChild(opt);
  });
}

function resetQuizUI() {
  quizIntro.classList.remove("hidden");
  quizArea.classList.add("hidden");
  quizResult.classList.add("hidden");
}

startQuiz.addEventListener("click", () => {
  const m = MODULES[currentModuleIndex];
  const cat = quizCategory.value;
  let pool = cat === "all" ? m.quiz : m.quiz.filter(q => q.cat === cat);
  session.questions = shuffle(pool);
  session.current = 0;
  session.score = 0;
  session.answers = [];

  quizIntro.classList.add("hidden");
  quizResult.classList.add("hidden");
  quizArea.classList.remove("hidden");
  renderQuestion();
});

function renderQuestion() {
  const q = session.questions[session.current];
  const total = session.questions.length;
  progressFill.style.width = `${(session.current / total) * 100}%`;
  progressText.textContent = `Soal ${session.current + 1} / ${total}`;

  const optionData = q.options.map((text, idx) => ({ text, correct: idx === q.answer }));
  const shuffled = shuffle(optionData);

  let html = `<div class="qnum">Pertanyaan ${session.current + 1}</div>
    <div class="qtext">${q.q}</div>
    <div class="options">`;
  shuffled.forEach(o => {
    html += `<button class="option" data-correct="${o.correct}"><span>${o.text}</span><span class="opt-mark"></span></button>`;
  });
  html += `</div><div class="explain" id="explain"></div>`;
  questionCard.innerHTML = html;

  // animasi pergantian soal
  questionCard.classList.remove("swap-in");
  void questionCard.offsetWidth; // reflow agar animasi ulang
  questionCard.classList.add("swap-in");

  nextBtn.disabled = true;
  nextBtn.textContent = session.current === total - 1 ? "Lihat Hasil" : "Lanjut →";

  const optionBtns = questionCard.querySelectorAll(".option");
  optionBtns.forEach(btn => {
    btn.addEventListener("click", () => handleAnswer(btn, optionBtns, q));
  });
}

function handleAnswer(btn, allBtns, q) {
  const isCorrect = btn.dataset.correct === "true";
  allBtns.forEach(b => {
    b.classList.add("locked");
    b.style.pointerEvents = "none";
    const mark = b.querySelector(".opt-mark");
    if (b.dataset.correct === "true") { b.classList.add("correct"); if (mark) mark.textContent = "✓"; }
  });
  if (!isCorrect) {
    btn.classList.add("wrong");
    const mark = btn.querySelector(".opt-mark");
    if (mark) mark.textContent = "✗";
  } else {
    session.score++;
  }

  session.answers.push({ q: q.q, correct: isCorrect, explain: q.explain });

  // feedback animasi
  showFx(isCorrect);

  const explainEl = document.getElementById("explain");
  explainEl.classList.add(isCorrect ? "ok" : "no");
  explainEl.innerHTML = `<div class="ex-head">${isCorrect ? "✓ Benar!" : "✗ Kurang tepat."}</div><div>${q.explain}</div>`;
  explainEl.classList.add("show");

  nextBtn.disabled = false;
  nextBtn.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* ---------- ANIMASI FEEDBACK ---------- */
function showFx(correct) {
  const emoji = document.createElement("div");
  emoji.className = "fx-emoji";
  emoji.textContent = correct ? "🎉" : "❌";
  fxOverlay.innerHTML = "";
  fxOverlay.appendChild(emoji);
  setTimeout(() => { fxOverlay.innerHTML = ""; }, 900);

  if (correct) launchConfetti();
}

function launchConfetti() {
  const colors = ["#0ea5e9", "#22c55e", "#f97316", "#fb923c", "#4ade80"];
  for (let i = 0; i < 24; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDuration = (0.9 + Math.random() * 0.8) + "s";
    c.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 1800);
  }
}

nextBtn.addEventListener("click", () => {
  session.current++;
  if (session.current < session.questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizArea.classList.add("hidden");
  quizResult.classList.remove("hidden");

  const total = session.questions.length;
  const score = session.score;
  const pct = Math.round((score / total) * 100);
  let cls = "low", msg = "Ayo pelajari lagi materinya di Mode Belajar.";
  if (pct >= 80) { cls = "good"; msg = "Mantap! Kamu sudah siap menghadapi pertanyaan dosen."; launchConfetti(); }
  else if (pct >= 50) { cls = "mid"; msg = "Lumayan, tinggal perkuat beberapa bagian lagi."; }

  let detail = "";
  session.answers.forEach((a, i) => {
    detail += `<div class="result-item ${a.correct ? "ok" : "no"}">
      <div class="ri-q">${i + 1}. ${a.q} ${a.correct ? "✓" : "✗"}</div>
      <div>${a.explain}</div>
    </div>`;
  });

  const hasNext = !!MODULES[currentModuleIndex + 1];
  quizResult.innerHTML = `
    <h2>Hasil Quiz</h2>
    <div class="score-circle ${cls}">${score} / ${total}</div>
    <p><strong>${pct}%</strong> — ${msg}</p>
    <div class="result-detail">${detail}</div>
    <div class="result-btns">
      <button class="primary-btn" id="retryBtn">↻ Coba Lagi</button>
      <button class="ghost-btn" id="toLearnBtn">📖 Ke Mode Belajar</button>
      ${hasNext ? `<button class="ghost-btn" id="toNextBtn">Modul Berikutnya →</button>` : ""}
    </div>
  `;

  document.getElementById("retryBtn").addEventListener("click", () => {
    resetQuizUI();
  });
  document.getElementById("toLearnBtn").addEventListener("click", () => {
    setMode("belajar");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  if (hasNext) {
    document.getElementById("toNextBtn").addEventListener("click", () => openModule(currentModuleIndex + 1));
  }
}

/* =========================================================
   INIT
   ========================================================= */
renderHome();
showScreen("home");
