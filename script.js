// UI Strings for Internationalization
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About Us",
        nav_contact: "Contact Us",
        nav_help: "Help & Support",
        nav_privacy: "Privacy Policy",
        nav_leaderboard: "Leaderboard",
        nav_daily: "Daily Challenge",
        nav_stats: "Statistics",
        hero_badge: "Quiz Platform 2024",
        hero_title: "Expand Your <br><span class='highlight'>Knowledge</span>",
        hero_desc: "Challenge yourself with over 100+ questions across multiple categories. Track your progress and share your success!",
        cat_gk: "General Knowledge",
        cat_gk_desc: "Facts from around the world",
        cat_science: "Science",
        cat_science_desc: "Explore physics, bio & chem",
        cat_history: "History",
        cat_history_desc: "Journey through past events",
        cat_geography: "Geography",
        cat_geography_desc: "Continents and landmarks",
        select_section: "Select a Section to Start (50 Questions Each)",
        result_title: "Quiz Completed!",
        result_score: "Your Score",
        result_perc: "Percentage",
        btn_restart: "Restart Quiz",
        btn_share: "Send Result",
        btn_cert: "Download Certificate",
        btn_review: "Review Answers",
        pwa_msg: "Install AmitQuizX for a better experience!",
        section_label: "Section",
        diff_all: "All",
        diff_easy: "Easy",
        diff_medium: "Medium",
        diff_hard: "Hard",
        ll_skip: "Skip",
        ll_hint: "Hint",
        name_placeholder: "Enter your name for certificate",
        lb_rank: "Rank",
        lb_name: "Name",
        lb_score: "Score",
        lb_date: "Date",
        review_title: "Review Answers",
        stats_total: "Total Quizzes",
        stats_avg: "Avg Score"
    },
    hi: {
        nav_home: "मुख्य पृष्ठ",
        nav_about: "हमारे बारे में",
        nav_contact: "संपर्क करें",
        nav_help: "सहायता",
        nav_privacy: "गोपनीयता नीति",
        nav_leaderboard: "लीडरबोर्ड",
        nav_daily: "दैनिक चुनौती",
        nav_stats: "आँकड़े",
        hero_badge: "क्विज़ प्लेटफॉर्म 2024",
        hero_title: "अपना <br><span class='highlight'>ज्ञान</span> बढ़ाएं",
        hero_desc: "विभिन्न श्रेणियों में 100+ से अधिक प्रश्नों के साथ स्वयं को चुनौती दें। अपनी प्रगति को ट्रैक करें और अपनी सफलता साझा करें!",
        cat_gk: "सामान्य ज्ञान",
        cat_gk_desc: "दुनिया भर के तथ्य",
        cat_science: "विज्ञान",
        cat_science_desc: "भौतिक, जीव और रसायन विज्ञान",
        cat_history: "इतिहास",
        cat_history_desc: "बीते घटनाओं की यात्रा",
        cat_geography: "भूगोल",
        cat_geography_desc: "महाद्वीप और स्थलचिह्न",
        select_section: "शुरू करने के लिए एक अनुभाग चुनें (प्रत्येक 50 प्रश्न)",
        result_title: "क्विज़ पूरा हुआ!",
        result_score: "आपका स्कोर",
        result_perc: "प्रतिशत",
        btn_restart: "फिर से शुरू करें",
        btn_share: "रिजल्ट भेजें",
        btn_cert: "प्रमाण पत्र डाउनलोड करें",
        btn_review: "जवाबों की समीक्षा",
        pwa_msg: "बेहतर अनुभव के लिए AmitQuizX इंस्टॉल करें!",
        section_label: "अनुभाग",
        diff_all: "सब",
        diff_easy: "आसान",
        diff_medium: "मध्यम",
        diff_hard: "कठिन",
        ll_skip: "छोड़ें",
        ll_hint: "संकेत",
        name_placeholder: "सर्टिफिकेट के लिए अपना नाम डालें",
        lb_rank: "रैंक",
        lb_name: "नाम",
        lb_score: "स्कोर",
        lb_date: "तारीख",
        review_title: "जवाबों की समीक्षा",
        stats_total: "कुल क्विज़",
        stats_avg: "औसत स्कोर"
    }
};

// DOM Elements
const pages = document.querySelectorAll('.page-section');
const navItems = document.querySelectorAll('.nav-item');
const sideNav = document.getElementById('side-nav');
const navOverlay = document.getElementById('nav-overlay');
const navOpen = document.getElementById('nav-open');
const navClose = document.getElementById('nav-close');

const langToggle = document.getElementById('lang-toggle');
const langText = document.getElementById('lang-text');
const themeMenuBtn = document.getElementById('theme-menu-btn');
const themeDropdown = document.getElementById('theme-dropdown');
const voiceToggle = document.getElementById('voice-toggle');

const categoryCards = document.querySelectorAll('.category-card');
const sectionGrid = document.getElementById('section-grid');
const categoryTitleDisplay = document.getElementById('category-title-display');
const backBtn = document.querySelector('.back-btn');
const diffBtns = document.querySelectorAll('.diff-btn');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionCountText = document.getElementById('question-count');
const categoryLabel = document.getElementById('category-label');
const difficultyLabel = document.getElementById('difficulty-label');
const currentScoreText = document.getElementById('current-score');
const progressBar = document.getElementById('progress-bar');
const timerText = document.getElementById('timer-text');
const timerPathRemaining = document.getElementById('timer-path-remaining');
const questionImgContainer = document.getElementById('question-img-container');
const questionImg = document.getElementById('question-img');

const lifeline5050 = document.getElementById('lifeline-5050');
const lifelineSkip = document.getElementById('lifeline-skip');
const lifelineHint = document.getElementById('lifeline-hint');
const hintBox = document.getElementById('hint-box');
const hintText = document.getElementById('hint-text');

const finalScoreText = document.getElementById('final-score');
const totalQuestionsText = document.getElementById('total-questions');
const percentageText = document.getElementById('percentage');
const performanceMsg = document.getElementById('performance-msg');
const userNameInput = document.getElementById('user-name');
const downloadCertBtn = document.getElementById('download-cert-btn');
const reviewBtn = document.getElementById('review-btn');
const reviewContainer = document.getElementById('review-container');

const statTotalQuizzes = document.getElementById('stat-total-quizzes');
const statAvgScore = document.getElementById('stat-avg-score');
const leaderboardBody = document.getElementById('leaderboard-body');

const selectedAvatarImg = document.getElementById('selected-avatar');
const avatarGrid = document.getElementById('avatar-grid');

const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');
const nextBtn = document.getElementById('next-btn');
const submitEarlyBtn = document.getElementById('submit-early-btn');

const quizSection = document.getElementById('quiz-section');
const pwaToast = document.getElementById('pwa-toast');
const pwaInstallBtn = document.getElementById('pwa-install-btn');

// Audio
const sndCorrect = document.getElementById('sound-correct');
const sndWrong = document.getElementById('sound-wrong');
const sndClick = document.getElementById('sound-click');
const sndTimer = document.getElementById('sound-timer');

// Quiz State
let currentLanguage = 'en';
let selectedCategory = '';
let selectedSection = 0;
let selectedDifficulty = 'all';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;
let deferredPrompt;
let userChoices = []; // To store user answers for review

// Voice Control
let recognition;
let isVoiceActive = false;

// Initialization
function init() {
    // Navigation
    navOpen.addEventListener('click', () => { sideNav.classList.add('open'); navOverlay.classList.add('show'); });
    [navClose, navOverlay].forEach(el => el.addEventListener('click', () => { sideNav.classList.remove('open'); navOverlay.classList.remove('show'); }));
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.getAttribute('data-page');
            if (pageId === 'daily-section') startDailyChallenge();
            else if (pageId === 'stats-section') showStats();
            else if (pageId === 'leaderboard-section') loadLeaderboard();
            else showPage(pageId);
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            sideNav.classList.remove('open'); navOverlay.classList.remove('show');
        });
    });

    // Theme Menu
    themeMenuBtn.addEventListener('click', (e) => { e.stopPropagation(); themeDropdown.classList.toggle('show'); });
    document.addEventListener('click', () => themeDropdown.classList.remove('show'));
    document.querySelectorAll('.theme-opt').forEach(opt => {
        opt.addEventListener('click', () => {
            const theme = opt.getAttribute('data-theme');
            document.body.setAttribute('data-theme', theme);
            localStorage.setItem('amitquizx_theme', theme);
            playClick();
        });
    });
    const savedTheme = localStorage.getItem('amitquizx_theme');
    if (savedTheme) document.body.setAttribute('data-theme', savedTheme);

    // Language
    langToggle.addEventListener('click', () => {
        playClick();
        currentLanguage = currentLanguage === 'en' ? 'hi' : 'en';
        langText.textContent = currentLanguage === 'en' ? 'HI' : 'EN';
        updateUI();
        if (quizSection.classList.contains('active')) renderQuestion();
    });

    // Voice Control
    initVoice();
    voiceToggle.addEventListener('click', toggleVoice);

    // Difficulty & Categories
    diffBtns.forEach(btn => btn.addEventListener('click', () => {
        playClick();
        diffBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedDifficulty = btn.getAttribute('data-difficulty');
        showSectionSelection();
    }));
    categoryCards.forEach(card => card.addEventListener('click', () => {
        playClick();
        selectedCategory = card.getAttribute('data-category');
        showSectionSelection();
    }));
    backBtn.addEventListener('click', () => { playClick(); showPage('home-section'); });

    // Avatar
    initAvatarSelector();

    // Quiz Controls
    nextBtn.addEventListener('click', () => {
        playClick();
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) renderQuestion();
        else showResults();
    });
    submitEarlyBtn.addEventListener('click', () => {
        playClick();
        if (confirm(currentLanguage === 'en' ? "Submit quiz?" : "क्विज़ सबमिट करें?")) showResults();
    });

    lifeline5050.addEventListener('click', apply5050);
    lifelineSkip.addEventListener('click', applySkip);
    lifelineHint.addEventListener('click', applyHint);
    reviewBtn.addEventListener('click', () => showPage('review-section'));
    restartBtn.addEventListener('click', () => { playClick(); showPage('home-section'); });
    shareBtn.addEventListener('click', shareResult);
    downloadCertBtn.addEventListener('click', generateCertificate);

    // PWA
    window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferredPrompt = e; pwaToast.classList.add('show'); });
    pwaInstallBtn.addEventListener('click', () => { pwaToast.classList.remove('show'); deferredPrompt.prompt(); });
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');

    updateUI();
}

function showPage(pageId) {
    pages.forEach(page => { page.classList.remove('active'); if (page.id === pageId) page.classList.add('active'); });
    window.scrollTo(0,0);
}

function updateUI() {
    document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = translations[currentLanguage][el.getAttribute('data-i18n')]; });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = translations[currentLanguage][el.getAttribute('data-i18n-placeholder')]; });
}

// Avatar Logic
function initAvatarSelector() {
    selectedAvatarImg.addEventListener('click', (e) => { e.stopPropagation(); avatarGrid.classList.toggle('show'); });
    document.addEventListener('click', () => avatarGrid.classList.remove('show'));
    for (let i = 1; i <= 6; i++) {
        const img = document.createElement('img');
        img.src = `https://api.dicebear.com/7.x/bottts/svg?seed=Amit${i}`;
        img.addEventListener('click', () => {
            selectedAvatarImg.src = img.src;
            localStorage.setItem('amitquizx_avatar', img.src);
            playClick();
        });
        avatarGrid.appendChild(img);
    }
    const savedAvatar = localStorage.getItem('amitquizx_avatar');
    if (savedAvatar) selectedAvatarImg.src = savedAvatar;
}

// Section Select
function showSectionSelection() {
    const data = quizData[selectedCategory];
    categoryTitleDisplay.textContent = currentLanguage === 'en' ? data.title_en : data.title_hi;
    sectionGrid.innerHTML = '';
    for (let i = 1; i <= 6; i++) {
        const card = document.createElement('div');
        card.classList.add('section-card');
        const qCount = selectedDifficulty === 'all' ? data.sections[i].length : data.sections[i].filter(q => q.difficulty === selectedDifficulty).length;
        card.innerHTML = `<span class="sec-number">${i}</span><p>${translations[currentLanguage].section_label} ${i}</p><small>${qCount} Q</small>`;
        if (qCount > 0) card.addEventListener('click', () => startQuiz(i));
        else { card.style.opacity = '0.5'; card.style.cursor = 'not-allowed'; }
        sectionGrid.appendChild(card);
    }
    showPage('section-select-section');
}

// Daily Challenge
function startDailyChallenge() {
    const dateStr = new Date().toDateString();
    const hash = dateStr.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
    const categories = Object.keys(quizData);
    selectedCategory = categories[Math.abs(hash) % categories.length];
    selectedSection = (Math.abs(hash) % 6) + 1;
    startQuiz(selectedSection, true);
}

// Quiz Engine
function startQuiz(sectionNum, isDaily = false) {
    playClick();
    selectedSection = sectionNum;
    let questions = [...quizData[selectedCategory].sections[sectionNum]];
    if (selectedDifficulty !== 'all') questions = questions.filter(q => q.difficulty === selectedDifficulty);
    if (isDaily) questions = questions.slice(0, 10); // Daily challenge is shorter
    currentQuestions = questions;
    shuffleArray(currentQuestions);
    score = 0; currentQuestionIndex = 0; userChoices = [];
    resetLifelineUI();
    currentScoreText.textContent = score;
    showPage('quiz-section');
    renderQuestion();
}

function renderQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    hintBox.classList.add('hidden');
    questionImgContainer.classList.add('hidden');
    questionText.textContent = currentLanguage === 'en' ? q.q_en : q.q_hi;
    difficultyLabel.textContent = q.difficulty.toUpperCase();
    difficultyLabel.className = `difficulty-tag ${q.difficulty}`;
    if (q.img) { questionImg.src = q.img; questionImgContainer.classList.remove('hidden'); }
    const options = currentLanguage === 'en' ? q.options_en : q.options_hi;
    optionsContainer.innerHTML = '';
    options.forEach((opt, index) => {
        const div = document.createElement('div');
        div.classList.add('option'); div.textContent = opt;
        div.addEventListener('click', () => handleAnswer(index, div));
        optionsContainer.appendChild(div);
    });
    categoryLabel.textContent = currentLanguage === 'en' ? quizData[selectedCategory].title_en : quizData[selectedCategory].title_hi;
    questionCountText.textContent = `${currentQuestionIndex + 1}/${currentQuestions.length}`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`;
    nextBtn.disabled = true;
    startTimer();
}

function handleAnswer(index, el) {
    stopTimerSound(); clearInterval(timer);
    const correctIdx = currentQuestions[currentQuestionIndex].answer;
    const options = optionsContainer.querySelectorAll('.option');
    options.forEach(o => o.classList.add('disabled'));

    userChoices.push({ qIndex: currentQuestionIndex, choice: index, correct: correctIdx });

    if (index === correctIdx) {
        if (el) el.classList.add('correct');
        score++; currentScoreText.textContent = score;
        playCorrect(); triggerVibration([50]);
    } else {
        if (el) el.classList.add('wrong');
        options[correctIdx].classList.add('correct');
        playWrong(); triggerVibration([100, 50, 100]);
    }
    nextBtn.disabled = false;
}

// Lifelines
function apply5050() {
    playClick(); const correctIdx = currentQuestions[currentQuestionIndex].answer;
    const options = Array.from(optionsContainer.querySelectorAll('.option'));
    let removed = 0;
    while (removed < 2) {
        let rand = Math.floor(Math.random() * 4);
        if (rand !== correctIdx && options[rand].style.visibility !== 'hidden') {
            options[rand].style.visibility = 'hidden'; options[rand].classList.add('disabled'); removed++;
        }
    }
    lifeline5050.disabled = true;
}
function applySkip() { playClick(); lifelineSkip.disabled = true; clearInterval(timer); stopTimerSound(); currentQuestionIndex++; if (currentQuestionIndex < currentQuestions.length) renderQuestion(); else showResults(); }
function applyHint() { playClick(); const q = currentQuestions[currentQuestionIndex]; hintText.textContent = currentLanguage === 'en' ? q.hint_en : q.hint_hi; hintBox.classList.remove('hidden'); lifelineHint.disabled = true; }
function resetLifelineUI() { [lifeline5050, lifelineSkip, lifelineHint].forEach(l => l.disabled = false); }

// Timer
function startTimer() {
    clearInterval(timer); timeLeft = 15; updateTimerUI();
    const circularTimer = document.querySelector('.circular-timer');
    circularTimer.classList.remove('warning'); playTimerSound();
    timer = setInterval(() => {
        timeLeft--; updateTimerUI();
        if (timeLeft <= 5) circularTimer.classList.add('warning');
        if (timeLeft <= 0) { clearInterval(timer); stopTimerSound(); handleAnswer(-1, null); }
    }, 1000);
}
function updateTimerUI() { timerText.textContent = timeLeft; timerPathRemaining.setAttribute('stroke-dasharray', `${((timeLeft / 15) * 283).toFixed(0)} 283`); }

// Results & Stats
function showResults() {
    showPage('result-section');
    const total = currentQuestions.length;
    const perc = Math.round((score / total) * 100);
    finalScoreText.textContent = score; totalQuestionsText.textContent = total; percentageText.textContent = `${perc}%`;
    performanceMsg.textContent = perc >= 80 ? "Excellent!" : perc >= 50 ? "Good Job!" : "Keep Practicing!";
    saveScore(score, total);
    buildReview();
}

function buildReview() {
    reviewContainer.innerHTML = '';
    userChoices.forEach(choice => {
        const q = currentQuestions[choice.qIndex];
        const card = document.createElement('div');
        card.className = `review-card ${choice.choice === choice.correct ? 'correct' : 'wrong'}`;
        const options = currentLanguage === 'en' ? q.options_en : q.options_hi;
        card.innerHTML = `
            <div class="review-q">${currentLanguage === 'en' ? q.q_en : q.q_hi}</div>
            <div class="review-ans"><b>Correct:</b> ${options[choice.correct]}</div>
            ${choice.choice !== choice.correct && choice.choice !== -1 ? `<div class="review-ans"><b>Your Answer:</b> ${options[choice.choice]}</div>` : ''}
            <div class="review-exp">${currentLanguage === 'en' ? q.explanation_en : q.explanation_hi}</div>
        `;
        reviewContainer.appendChild(card);
    });
}

function saveScore(s, t) {
    const scores = JSON.parse(localStorage.getItem('amitquizx_scores') || '[]');
    scores.push({ name: userNameInput.value || 'Anonymous', score: s, total: t, date: new Date().toLocaleDateString(), category: selectedCategory });
    localStorage.setItem('amitquizx_scores', JSON.stringify(scores.slice(-50)));
}

function showStats() {
    const scores = JSON.parse(localStorage.getItem('amitquizx_scores') || '[]');
    statTotalQuizzes.textContent = scores.length;
    const avg = scores.length ? Math.round(scores.reduce((a,b)=>a+(b.score/b.total),0)/scores.length*100) : 0;
    statAvgScore.textContent = `${avg}%`;

    showPage('stats-section');

    // Performance Chart
    const ctx = document.getElementById('performanceChart').getContext('2d');
    const catData = { gk:0, science:0, history:0, geography:0 };
    scores.forEach(s => { if(catData[s.category] !== undefined) catData[s.category] += (s.score/s.total); });
    const counts = { gk:0, science:0, history:0, geography:0 };
    scores.forEach(s => { if(counts[s.category] !== undefined) counts[s.category]++; });

    const finalData = Object.keys(catData).map(k => counts[k] ? Math.round(catData[k]/counts[k]*100) : 0);

    if (window.myChart) window.myChart.destroy();
    window.myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['GK', 'Science', 'History', 'Geography'],
            datasets: [{ label: 'Skill Level', data: finalData, backgroundColor: 'rgba(59, 130, 246, 0.2)', borderColor: '#3b82f6', borderWidth: 2 }]
        },
        options: { scales: { r: { beginAtZero: true, max: 100 } } }
    });
}

function loadLeaderboard() {
    const scores = JSON.parse(localStorage.getItem('amitquizx_scores') || '[]').sort((a,b)=>(b.score/b.total)-(a.score/a.total));
    leaderboardBody.innerHTML = '';
    scores.slice(0, 10).forEach((s, idx) => {
        leaderboardBody.innerHTML += `<tr><td>#${idx + 1}</td><td>${s.name}</td><td>${s.score}/${s.total}</td><td>${s.date}</td></tr>`;
    });
    showPage('leaderboard-section');
}

// Voice Control Logic
function initVoice() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) { voiceToggle.style.display = 'none'; return; }
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = 'en-US';
    recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
        console.log("Voice:", transcript);
        if (transcript.includes("option a") || transcript.includes("विकल्प ए")) selectOptionVoice(0);
        if (transcript.includes("option b") || transcript.includes("विकल्प बी")) selectOptionVoice(1);
        if (transcript.includes("option c") || transcript.includes("विकल्प सी")) selectOptionVoice(2);
        if (transcript.includes("option d") || transcript.includes("विकल्प डी")) selectOptionVoice(3);
        if (transcript.includes("next") || transcript.includes("अगला")) nextBtn.click();
    };
}
function toggleVoice() {
    isVoiceActive = !isVoiceActive;
    if (isVoiceActive) { recognition.start(); voiceToggle.classList.add('active'); voiceToggle.innerHTML = '<i class="fas fa-microphone"></i>'; }
    else { recognition.stop(); voiceToggle.classList.remove('active'); voiceToggle.innerHTML = '<i class="fas fa-microphone-slash"></i>'; }
}
function selectOptionVoice(idx) {
    const options = optionsContainer.querySelectorAll('.option');
    if (options[idx] && !options[idx].classList.contains('disabled')) options[idx].click();
}

function generateCertificate() {
    const name = userNameInput.value || "Participant";
    document.getElementById('cert-name').textContent = name;
    document.getElementById('cert-category').textContent = `${quizData[selectedCategory].title_en} Quiz`;
    document.getElementById('cert-score-text').textContent = `Score: ${score}/${currentQuestions.length}`;
    document.getElementById('cert-date-text').textContent = `Date: ${new Date().toLocaleDateString()}`;
    const cert = document.getElementById('cert-template');
    cert.classList.remove('hidden');
    html2canvas(cert).then(canvas => {
        const link = document.createElement('a'); link.download = `AmitQuizX_Cert_${name}.png`; link.href = canvas.toDataURL(); link.click();
        cert.classList.add('hidden');
    });
}

function shareResult() {
    const text = `I scored ${score}/${currentQuestions.length} on AmitQuizX! 🏆`;
    if (navigator.share) navigator.share({ title: 'AmitQuizX', text, url: window.location.href });
    else window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + " " + window.location.href)}`);
}

function playClick() { sndClick.currentTime = 0; sndClick.play().catch(()=>{}); }
function playCorrect() { sndCorrect.currentTime = 0; sndCorrect.play().catch(()=>{}); }
function playWrong() { sndWrong.currentTime = 0; sndWrong.play().catch(()=>{}); }
function playTimerSound() { sndTimer.currentTime = 0; sndTimer.play().catch(()=>{}); }
function stopTimerSound() { sndTimer.pause(); }
function triggerVibration(p) { if (navigator.vibrate) navigator.vibrate(p); }
function shuffleArray(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } }

document.addEventListener('DOMContentLoaded', init);
