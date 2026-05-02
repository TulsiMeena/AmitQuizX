// UI Strings
const translations = {
    en: {
        nav_home: "Home", nav_about: "About Us", nav_contact: "Contact Us", nav_help: "Help & Support", nav_privacy: "Privacy Policy",
        nav_leaderboard: "Leaderboard", nav_daily: "Daily Challenge", nav_stats: "Statistics", nav_profile: "Profile",
        hero_badge: "Quiz Platform 2024",
        hero_title: "Expand Your <br><span class='highlight'>Knowledge</span>",
        hero_desc: "Challenge yourself with over 100+ questions. Track progress and share success!",
        select_section: "Select a Section to Start (50 Questions Each)",
        result_title: "Quiz Completed!", result_score: "Your Score", result_perc: "Percentage",
        btn_restart: "Restart Quiz", btn_share: "Send Result", btn_cert: "Download Certificate", btn_review: "Review Answers", btn_logout: "Logout",
        pwa_msg: "Install AmitQuizX for a better experience!",
        section_label: "Section", diff_all: "All", diff_easy: "Easy", diff_medium: "Medium", diff_hard: "Hard",
        ll_skip: "Skip", ll_hint: "Hint", name_placeholder: "Enter your name for certificate",
        lb_rank: "Rank", lb_name: "Name", lb_score: "Score", lb_date: "Date",
        review_title: "Review Answers", stats_total: "Total Quizzes", stats_total_score: "Total Score", stats_levels: "Levels Unlocked", stats_avg: "Avg Score",
        ob_welcome: "Welcome to AmitQuizX",
        ob_desc: "AmitQuizX is an advanced GK Quiz platform designed to challenge your mind and expand your horizons. Explore roadmaps and lifelines.",
        feat_bilingual: "Bilingual (EN/HI) Support", feat_offline: "PWA & Offline Play", feat_cert: "Digital Certificates",
        ob_verify_title: "Check your Email",
        ob_verify_desc: "We've sent a verification link to your email address. Please click the link to verify your account.",
        ob_name_title: "Last Step!",
        ob_name_desc: "What should we call you on your certificates and leaderboard?",
        auth_login_title: "Welcome Back", auth_signup_title: "Create Account",
        auth_err_invalid: "Invalid username or password", auth_err_exists: "Username already exists",
        auth_err_verify: "Please verify your email first",
        cat_gk: "General Knowledge", cat_gk_desc: "Facts from around the world",
        cat_science: "Science", cat_science_desc: "Explore physics, bio & chem",
        cat_history: "History", cat_history_desc: "Journey through past events",
        cat_geography: "Geography", cat_geography_desc: "Continents and landmarks"
    },
    hi: {
        nav_home: "मुख्य पृष्ठ", nav_about: "हमारे बारे में", nav_contact: "संपर्क करें", nav_help: "सहायता", nav_privacy: "गोपनीयता नीति",
        nav_leaderboard: "लीडरबोर्ड", nav_daily: "दैनिक चुनौती", nav_stats: "आँकड़े", nav_profile: "प्रोफ़ाइल",
        hero_badge: "क्विज़ प्लेटफॉर्म 2024",
        hero_title: "अपना <br><span class='highlight'>ज्ञान</span> बढ़ाएं",
        hero_desc: "100+ से अधिक प्रश्नों के साथ स्वयं को चुनौती दें। अपनी प्रगति को ट्रैक करें!",
        select_section: "शुरू करने के लिए एक अनुभाग चुनें (प्रत्येक 50 प्रश्न)",
        result_title: "क्विज़ पूरा हुआ!", result_score: "आपका स्कोर", result_perc: "प्रतिशत",
        btn_restart: "फिर से शुरू करें", btn_share: "रिजल्ट भेजें", btn_cert: "प्रमाण पत्र डाउनलोड करें", btn_review: "जवाबों की समीक्षा", btn_logout: "लॉगआउट",
        pwa_msg: "बेहतर अनुभव के लिए AmitQuizX इंस्टॉल करें!",
        section_label: "अनुभाग", diff_all: "सब", diff_easy: "आसान", diff_medium: "मध्यम", diff_hard: "कठिन",
        ll_skip: "छोड़ें", ll_hint: "संकेत", name_placeholder: "सर्टिफिकेट के लिए अपना नाम डालें",
        lb_rank: "रैंक", lb_name: "नाम", lb_score: "स्कोर", lb_date: "तारीख",
        review_title: "जवाबों की समीक्षा", stats_total: "कुल क्विज़", stats_total_score: "कुल स्कोर", stats_levels: "लेवल अनलॉक", stats_avg: "औसत स्कोर",
        ob_welcome: "AmitQuizX में आपका स्वागत है",
        ob_desc: "AmitQuizX एक उन्नत GK क्विज़ प्लेटफ़ॉर्म है जिसे आपके दिमाग को चुनौती देने और आपके क्षितिज का विस्तार करने के लिए डिज़ाइन किया गया है।",
        feat_bilingual: "द्विभाषी (EN/HI) सहायता", feat_offline: "PWA और ऑफलाइन खेल", feat_cert: "डिजिटल प्रमाण पत्र",
        ob_verify_title: "अपना ईमेल जांचें",
        ob_verify_desc: "हमने आपके ईमेल पते पर एक सत्यापन लिंक भेजा है। कृपया अपना खाता सत्यापित करने के लिए लिंक पर क्लिक करें।",
        ob_name_title: "अंतिम चरण!",
        ob_name_desc: "प्रमाण पत्र और लीडरबोर्ड पर हमें आपको क्या पुकारना चाहिए?",
        auth_login_title: "वापसी पर स्वागत है", auth_signup_title: "खाता बनाएं",
        auth_err_invalid: "गलत यूजरनेम या पासवर्ड", auth_err_exists: "यूजरनेम पहले से मौजूद है",
        auth_err_verify: "कृपया पहले अपना ईमेल सत्यापित करें",
        cat_gk: "सामान्य ज्ञान", cat_gk_desc: "दुनिया भर के तथ्य",
        cat_science: "विज्ञान", cat_science_desc: "भौतिक, जीव और रसायन विज्ञान",
        cat_history: "इतिहास", cat_history_desc: "बीते घटनाओं की यात्रा",
        cat_geography: "भूगोल", cat_geography_desc: "महाद्वीप और स्थलचिह्न"
    }
};

// DOM Elements
const mainHeader = document.getElementById('main-header');
const pages = document.querySelectorAll('.page-section');
const onboardingSection = document.getElementById('onboarding-section');
const obCards = document.querySelectorAll('.onboarding-card');

const tabLogin = document.getElementById('tab-login');
const tabSignup = document.getElementById('tab-signup');
const signupEmailGroup = document.getElementById('signup-email-group');
const authSubmitBtn = document.getElementById('auth-submit-btn');
const authTitle = document.getElementById('auth-title');
const authUsernameInput = document.getElementById('auth-username');
const authEmailInput = document.getElementById('auth-email');
const authPasswordInput = document.getElementById('auth-password');
const authErrorText = document.getElementById('auth-error');

const simVerifyBtn = document.getElementById('sim-verify-btn');
const nameSubmitBtn = document.getElementById('name-submit-btn');
const displayNameInput = document.getElementById('display-name-input');

// Side Nav & Global
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

// Quiz & Logic Elements
const categoryCards = document.querySelectorAll('.category-card');
const roadmapPath = document.getElementById('roadmap-path');
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
const profileUsername = document.getElementById('profile-username');
const profileDate = document.getElementById('profile-date');
const profileTotalScore = document.getElementById('profile-total-score');
const profileLevels = document.getElementById('profile-levels');
const profileAvatarImg = document.getElementById('profile-avatar');
const selectedAvatarImg = document.getElementById('selected-avatar');
const avatarGrid = document.getElementById('avatar-grid');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');
const nextBtn = document.getElementById('next-btn');
const submitEarlyBtn = document.getElementById('submit-early-btn');
const logoutBtn = document.getElementById('logout-btn');
const quizSection = document.getElementById('quiz-section');
const pwaToast = document.getElementById('pwa-toast');
const pwaInstallBtn = document.getElementById('pwa-install-btn');

// Audio
const sndCorrect = document.getElementById('sound-correct');
const sndWrong = document.getElementById('sound-wrong');
const sndClick = document.getElementById('sound-click');
const sndTimer = document.getElementById('sound-timer');

// App State
let currentLanguage = 'en';
let currentUser = null;
let isLoginMode = true;
let selectedCategory = '';
let selectedSection = 0;
let selectedDifficulty = 'all';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;
let deferredPrompt;
let userChoices = [];
let recognition;
let isVoiceActive = false;

// Initialization
function init() {
    navOpen.addEventListener('click', () => { sideNav.classList.add('open'); navOverlay.classList.add('show'); });
    [navClose, navOverlay].forEach(el => el.addEventListener('click', () => { sideNav.classList.remove('open'); navOverlay.classList.remove('show'); }));
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.getAttribute('data-page');
            if (pageId === 'daily-section') startDailyChallenge();
            else if (pageId === 'stats-section') showStats();
            else if (pageId === 'leaderboard-section') loadLeaderboard();
            else if (pageId === 'profile-section') updateProfileUI();
            showPage(pageId);
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            sideNav.classList.remove('open'); navOverlay.classList.remove('show');
        });
    });

    themeMenuBtn.addEventListener('click', (e) => { e.stopPropagation(); themeDropdown.classList.toggle('show'); });
    document.addEventListener('click', () => themeDropdown.classList.remove('show'));
    document.querySelectorAll('.theme-opt').forEach(opt => opt.addEventListener('click', () => {
        const theme = opt.getAttribute('data-theme'); document.body.setAttribute('data-theme', theme); localStorage.setItem('amitquizx_theme', theme); playClick();
    }));
    const savedTheme = localStorage.getItem('amitquizx_theme');
    if (savedTheme) document.body.setAttribute('data-theme', savedTheme);

    langToggle.addEventListener('click', () => {
        playClick(); currentLanguage = currentLanguage === 'en' ? 'hi' : 'en'; langText.textContent = currentLanguage === 'en' ? 'HI' : 'EN'; updateUI();
        updateAuthTabUI();
        if (quizSection.classList.contains('active')) renderQuestion();
    });

    // Onboarding Events
    document.querySelector('.ob-next-btn').addEventListener('click', () => showObCard('ob-auth'));
    tabLogin.addEventListener('click', () => { isLoginMode = true; updateAuthTabUI(); });
    tabSignup.addEventListener('click', () => { isLoginMode = false; updateAuthTabUI(); });
    authSubmitBtn.addEventListener('click', handleAuth);
    simVerifyBtn.addEventListener('click', handleSimVerify);
    nameSubmitBtn.addEventListener('click', handleNameSubmit);
    logoutBtn.addEventListener('click', handleLogout);

    initVoice();
    voiceToggle.addEventListener('click', toggleVoice);
    diffBtns.forEach(btn => btn.addEventListener('click', () => {
        playClick(); diffBtns.forEach(b => b.classList.remove('active')); btn.classList.add('active');
        selectedDifficulty = btn.getAttribute('data-difficulty'); showSectionSelection();
    }));
    categoryCards.forEach(card => card.addEventListener('click', () => {
        playClick(); selectedCategory = card.getAttribute('data-category'); showSectionSelection();
    }));
    backBtn.addEventListener('click', () => { playClick(); showPage('home-section'); });
    initAvatarSelector();

    nextBtn.addEventListener('click', () => {
        playClick(); currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) renderQuestion(); else showResults();
    });
    submitEarlyBtn.addEventListener('click', () => {
        playClick(); if (confirm(currentLanguage === 'en' ? "Submit quiz?" : "क्विज़ सबमिट करें?")) showResults();
    });
    lifeline5050.addEventListener('click', apply5050);
    lifelineSkip.addEventListener('click', applySkip);
    lifelineHint.addEventListener('click', applyHint);
    reviewBtn.addEventListener('click', () => showPage('review-section'));
    restartBtn.addEventListener('click', () => { playClick(); showPage('home-section'); });
    shareBtn.addEventListener('click', shareResult);
    downloadCertBtn.addEventListener('click', generateCertificate);

    window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferredPrompt = e; pwaToast.classList.add('show'); });
    pwaInstallBtn.addEventListener('click', () => { pwaToast.classList.remove('show'); deferredPrompt.prompt(); });
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');

    checkSession();
    updateUI();
}

function showObCard(id) {
    obCards.forEach(c => c.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function updateAuthTabUI() {
    tabLogin.classList.toggle('active', isLoginMode);
    tabSignup.classList.toggle('active', !isLoginMode);
    signupEmailGroup.style.display = isLoginMode ? 'none' : 'block';
    authTitle.textContent = isLoginMode ? translations[currentLanguage].auth_login_title : translations[currentLanguage].auth_signup_title;
}

function handleAuth() {
    const user = authUsernameInput.value.trim();
    const pass = authPasswordInput.value.trim();
    const email = authEmailInput.value.trim();
    if (!user || !pass) return;

    let users = JSON.parse(localStorage.getItem('amitquizx_users') || '{}');

    if (isLoginMode) {
        if (users[user] && users[user].password === pass) {
            if (!users[user].verified) {
                localStorage.setItem('amitquizx_pending_verify', user);
                return showAuthError('auth_err_verify');
            }
            currentUser = user;
            if (!users[user].displayName) return showObCard('ob-name');
            completeAuth(user);
        } else {
            showAuthError('auth_err_invalid');
        }
    } else {
        if (users[user]) return showAuthError('auth_err_exists');
        users[user] = { password: pass, email, signupDate: new Date().toLocaleDateString(), scores: [], avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${user}`, verified: false, displayName: '' };
        localStorage.setItem('amitquizx_users', JSON.stringify(users));
        localStorage.setItem('amitquizx_pending_verify', user);
        showObCard('ob-verify');
    }
}

function showAuthError(key) {
    authErrorText.textContent = translations[currentLanguage][key];
    authErrorText.classList.remove('hidden');
    setTimeout(() => authErrorText.classList.add('hidden'), 3000);
}

function handleSimVerify() {
    const pending = localStorage.getItem('amitquizx_pending_verify');
    if (!pending) return;
    let users = JSON.parse(localStorage.getItem('amitquizx_users') || '{}');
    users[pending].verified = true;
    localStorage.setItem('amitquizx_users', JSON.stringify(users));
    localStorage.removeItem('amitquizx_pending_verify');
    isLoginMode = true;
    updateAuthTabUI();
    showObCard('ob-auth');
    alert(currentLanguage === 'en' ? "Email Verified! You can now login." : "ईमेल सत्यापित! अब आप लॉगिन कर सकते हैं।");
}

function handleNameSubmit() {
    const name = displayNameInput.value.trim();
    if (!name) return;
    let users = JSON.parse(localStorage.getItem('amitquizx_users') || '{}');
    users[currentUser].displayName = name;
    localStorage.setItem('amitquizx_users', JSON.stringify(users));
    completeAuth(currentUser);
}

function completeAuth(user) {
    currentUser = user;
    localStorage.setItem('amitquizx_session', user);
    mainHeader.classList.remove('hidden');
    const userData = JSON.parse(localStorage.getItem('amitquizx_users'))[user];
    userNameInput.value = userData.displayName;
    showPage('home-section');
    onboardingSection.classList.remove('active');
    updateProfileUI();
}

function checkSession() {
    const session = localStorage.getItem('amitquizx_session');
    if (session) {
        completeAuth(session);
    } else {
        showPage('onboarding-section');
        showObCard('ob-intro');
        mainHeader.classList.add('hidden');
    }
}

function handleLogout() {
    localStorage.removeItem('amitquizx_session');
    currentUser = null;
    showPage('onboarding-section');
    showObCard('ob-intro');
    mainHeader.classList.add('hidden');
}

function updateProfileUI() {
    if (!currentUser) return;
    const users = JSON.parse(localStorage.getItem('amitquizx_users') || '{}');
    const user = users[currentUser];
    profileUsername.textContent = user.displayName || currentUser;
    profileDate.textContent = `Joined ${user.signupDate}`;
    profileAvatarImg.src = user.avatar;
    selectedAvatarImg.src = user.avatar;
    profileTotalScore.textContent = user.scores.reduce((a, b) => a + b.score, 0);
    profileLevels.textContent = [...new Set(user.scores.map(s => s.section))].length;
}

function saveScore(s, t) {
    if (!currentUser) return;
    const users = JSON.parse(localStorage.getItem('amitquizx_users') || '{}');
    users[currentUser].scores.push({ score: s, total: t, date: new Date().toLocaleDateString(), category: selectedCategory, section: selectedSection });
    localStorage.setItem('amitquizx_users', JSON.stringify(users));
    const lb = JSON.parse(localStorage.getItem('amitquizx_scores') || '[]');
    lb.push({ name: users[currentUser].displayName, score: s, total: t, date: new Date().toLocaleDateString(), category: selectedCategory });
    localStorage.setItem('amitquizx_scores', JSON.stringify(lb.sort((a,b)=>(b.score/b.total)-(a.score/a.total)).slice(0, 50)));
}

function showStats() {
    if (!currentUser) return;
    const scores = JSON.parse(localStorage.getItem('amitquizx_users'))[currentUser].scores;
    statTotalQuizzes.textContent = scores.length;
    statAvgScore.textContent = `${scores.length ? Math.round(scores.reduce((a,b)=>a+(b.score/b.total),0)/scores.length*100) : 0}%`;
    showPage('stats-section');
    const ctx = document.getElementById('performanceChart').getContext('2d');
    const catData = { gk:0, science:0, history:0, geography:0 }, counts = { gk:0, science:0, history:0, geography:0 };
    scores.forEach(s => { if(catData[s.category] !== undefined) { catData[s.category] += (s.score/s.total); counts[s.category]++; } });
    const finalData = Object.keys(catData).map(k => counts[k] ? Math.round(catData[k]/counts[k]*100) : 0);
    if (window.myChart) window.myChart.destroy();
    window.myChart = new Chart(ctx, { type: 'radar', data: { labels: ['GK', 'Science', 'History', 'Geography'], datasets: [{ label: 'Skill Level', data: finalData, backgroundColor: 'rgba(59, 130, 246, 0.2)', borderColor: '#3b82f6', borderWidth: 2 }] }, options: { scales: { r: { beginAtZero: true, max: 100 } } } });
}

function showSectionSelection() {
    const data = quizData[selectedCategory];
    categoryTitleDisplay.textContent = currentLanguage === 'en' ? data.title_en : data.title_hi;
    roadmapPath.innerHTML = '';
    const userScores = JSON.parse(localStorage.getItem('amitquizx_users'))[currentUser].scores;
    const completed = userScores.filter(s => s.category === selectedCategory).map(s => parseInt(s.section));
    let last = Math.max(0, ...completed);
    for (let i = 1; i <= 6; i++) {
        const node = document.createElement('div'); node.classList.add('roadmap-node');
        const qCount = selectedDifficulty === 'all' ? data.sections[i].length : data.sections[i].filter(q => q.difficulty === selectedDifficulty).length;
        if (completed.includes(i)) { node.classList.add('completed'); node.innerHTML = `<i class="fas fa-check"></i>`; }
        else if (i === last + 1 || i === 1) { node.classList.add('active'); node.innerHTML = `<span class="node-num">${i}</span>`; }
        else { node.classList.add('locked'); node.innerHTML = `<i class="fas fa-lock"></i>`; }
        node.innerHTML += `<span class="node-label">${translations[currentLanguage].section_label} ${i} (${qCount} Q)</span>`;
        if (!node.classList.contains('locked') && qCount > 0) node.addEventListener('click', () => startQuiz(i));
        roadmapPath.appendChild(node);
    }
    showPage('section-select-section');
}

function startDailyChallenge() {
    const hash = new Date().toDateString().split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
    const cats = Object.keys(quizData); selectedCategory = cats[Math.abs(hash) % cats.length];
    startQuiz((Math.abs(hash) % 6) + 1, true);
}

function startQuiz(sec, isDaily = false) {
    playClick(); selectedSection = sec;
    let qs = [...quizData[selectedCategory].sections[sec]];
    if (selectedDifficulty !== 'all') qs = qs.filter(q => q.difficulty === selectedDifficulty);
    if (isDaily) qs = qs.slice(0, 10);
    currentQuestions = qs; shuffleArray(currentQuestions);
    score = 0; currentQuestionIndex = 0; userChoices = [];
    resetLifelineUI(); currentScoreText.textContent = score;
    showPage('quiz-section'); renderQuestion();
}

function renderQuestion() {
    const q = currentQuestions[currentQuestionIndex]; hintBox.classList.add('hidden'); questionImgContainer.classList.add('hidden');
    questionText.textContent = currentLanguage === 'en' ? q.q_en : q.q_hi;
    difficultyLabel.textContent = q.difficulty.toUpperCase(); difficultyLabel.className = `difficulty-tag ${q.difficulty}`;
    if (q.img) { questionImg.src = q.img; questionImgContainer.classList.remove('hidden'); }
    optionsContainer.innerHTML = '';
    const optionLabels = ['A', 'B', 'C', 'D'];
    const options = currentLanguage === 'en' ? q.options_en : q.options_hi;
    options.forEach((opt, idx) => {
        const div = document.createElement('div'); div.classList.add('option');
        div.innerHTML = `<span class="option-label">${optionLabels[idx]}</span><span class="option-text">${opt}</span>`;
        div.addEventListener('click', () => handleAnswer(idx, div));
        optionsContainer.appendChild(div);
    });
    categoryLabel.textContent = currentLanguage === 'en' ? quizData[selectedCategory].title_en : quizData[selectedCategory].title_hi;
    questionCountText.textContent = `${currentQuestionIndex + 1}/${currentQuestions.length}`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`;
    nextBtn.disabled = true; startTimer();
}

function handleAnswer(idx, el) {
    stopTimerSound(); clearInterval(timer);
    const correct = currentQuestions[currentQuestionIndex].answer;
    const opts = optionsContainer.querySelectorAll('.option');
    opts.forEach(o => o.classList.add('disabled'));
    userChoices.push({ qIndex: currentQuestionIndex, choice: idx, correct });
    if (idx === correct) { if (el) el.classList.add('correct'); score++; currentScoreText.textContent = score; playCorrect(); triggerVibration([50]); }
    else { if (el) el.classList.add('wrong'); opts[correct].classList.add('correct'); playWrong(); triggerVibration([100, 50, 100]); }
    nextBtn.disabled = false;
}

function apply5050() {
    playClick(); const correct = currentQuestions[currentQuestionIndex].answer;
    const opts = Array.from(optionsContainer.querySelectorAll('.option'));
    let rem = 0; while (rem < 2) { let r = Math.floor(Math.random() * 4); if (r !== correct && opts[r].style.visibility !== 'hidden') { opts[r].style.visibility = 'hidden'; opts[r].classList.add('disabled'); rem++; } }
    lifeline5050.disabled = true;
}
function applySkip() { playClick(); lifelineSkip.disabled = true; clearInterval(timer); stopTimerSound(); currentQuestionIndex++; if (currentQuestionIndex < currentQuestions.length) renderQuestion(); else showResults(); }
function applyHint() { playClick(); hintText.textContent = currentLanguage === 'en' ? currentQuestions[currentQuestionIndex].hint_en : currentQuestions[currentQuestionIndex].hint_hi; hintBox.classList.remove('hidden'); lifelineHint.disabled = true; }
function resetLifelineUI() { [lifeline5050, lifelineSkip, lifelineHint].forEach(l => l.disabled = false); }
function startTimer() {
    clearInterval(timer); timeLeft = 15; updateTimerUI(); playTimerSound();
    timer = setInterval(() => { timeLeft--; updateTimerUI(); if (timeLeft <= 5) document.querySelector('.circular-timer').classList.add('warning'); if (timeLeft <= 0) { clearInterval(timer); stopTimerSound(); handleAnswer(-1, null); } }, 1000);
}
function updateTimerUI() { timerText.textContent = timeLeft; timerPathRemaining.setAttribute('stroke-dasharray', `${((timeLeft / 15) * 283).toFixed(0)} 283`); }
function showResults() { showPage('result-section'); const total = currentQuestions.length; const perc = Math.round((score / total) * 100); finalScoreText.textContent = score; totalQuestionsText.textContent = total; percentageText.textContent = `${perc}%`; performanceMsg.textContent = perc >= 80 ? "Excellent!" : perc >= 50 ? "Good Job!" : "Keep Practicing!"; saveScore(score, total); buildReview(); }
function buildReview() {
    reviewContainer.innerHTML = '';
    userChoices.forEach(choice => {
        const q = currentQuestions[choice.qIndex]; const card = document.createElement('div'); card.className = `review-card ${choice.choice === choice.correct ? 'correct' : 'wrong'}`;
        const opts = currentLanguage === 'en' ? q.options_en : q.options_hi;
        card.innerHTML = `<div class="review-q">${currentLanguage === 'en' ? q.q_en : q.q_hi}</div><div class="review-ans"><b>Correct:</b> ${opts[choice.correct]}</div>${choice.choice !== choice.correct && choice.choice !== -1 ? `<div class="review-ans"><b>Your Answer:</b> ${opts[choice.choice]}</div>` : ''}<div class="review-exp">${currentLanguage === 'en' ? q.explanation_en : q.explanation_hi}</div>`;
        reviewContainer.appendChild(card);
    });
}
function loadLeaderboard() {
    const scores = JSON.parse(localStorage.getItem('amitquizx_scores') || '[]').sort((a,b)=>(b.score/b.total)-(a.score/a.total));
    leaderboardBody.innerHTML = ''; scores.slice(0, 10).forEach((s, idx) => { leaderboardBody.innerHTML += `<tr><td>#${idx + 1}</td><td>${s.name}</td><td>${s.score}/${s.total}</td><td>${s.date}</td></tr>`; });
    showPage('leaderboard-section');
}
function initVoice() {
    const Rec = window.SpeechRecognition || window.webkitSpeechRecognition; if (!Rec) { voiceToggle.style.display = 'none'; return; }
    recognition = new Rec(); recognition.continuous = true; recognition.lang = 'en-US';
    recognition.onresult = (e) => {
        const t = e.results[e.results.length - 1][0].transcript.toLowerCase();
        if (t.includes("option a") || t === "a" || t === "ए") selectVoice(0);
        if (t.includes("option b") || t === "b" || t === "बी") selectVoice(1);
        if (t.includes("option c") || t === "c" || t === "सी") selectVoice(2);
        if (t.includes("option d") || t === "d" || t === "डी") selectVoice(3);
        if (t.includes("next") || t.includes("अगला")) nextBtn.click();
    };
}
function toggleVoice() { isVoiceActive = !isVoiceActive; if (isVoiceActive) { recognition.start(); voiceToggle.classList.add('active'); voiceToggle.innerHTML = '<i class="fas fa-microphone"></i>'; } else { recognition.stop(); voiceToggle.classList.remove('active'); voiceToggle.innerHTML = '<i class="fas fa-microphone-slash"></i>'; } }
function selectVoice(idx) { const os = optionsContainer.querySelectorAll('.option'); if (os[idx] && !os[idx].classList.contains('disabled')) os[idx].click(); }
function generateCertificate() {
    const userData = JSON.parse(localStorage.getItem('amitquizx_users'))[currentUser];
    const name = userData.displayName;
    document.getElementById('cert-name').textContent = name; document.getElementById('cert-category').textContent = `${quizData[selectedCategory].title_en} Quiz`; document.getElementById('cert-score-text').textContent = `Score: ${score}/${currentQuestions.length}`; document.getElementById('cert-date-text').textContent = `Date: ${new Date().toLocaleDateString()}`;
    const cert = document.getElementById('cert-template'); cert.classList.remove('hidden');
    html2canvas(cert).then(canvas => { const link = document.createElement('a'); link.download = `AmitQuizX_Cert_${name}.png`; link.href = canvas.toDataURL(); link.click(); cert.classList.add('hidden'); });
}
function shareResult() { const t = `I scored ${score}/${currentQuestions.length} on AmitQuizX! 🏆`; if (navigator.share) navigator.share({ title: 'AmitQuizX', text: t, url: window.location.href }); else window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(t + " " + window.location.href)}`); }
function playClick() { sndClick.currentTime = 0; sndClick.play().catch(()=>{}); }
function playCorrect() { sndCorrect.currentTime = 0; sndCorrect.play().catch(()=>{}); }
function playWrong() { sndWrong.currentTime = 0; sndWrong.play().catch(()=>{}); }
function playTimerSound() { sndTimer.currentTime = 0; sndTimer.play().catch(()=>{}); }
function stopTimerSound() { sndTimer.pause(); }
function triggerVibration(p) { if (navigator.vibrate) navigator.vibrate(p); }
function shuffleArray(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } }
function initAvatarSelector() {
    selectedAvatarImg.addEventListener('click', (e) => { e.stopPropagation(); avatarGrid.classList.toggle('show'); });
    document.addEventListener('click', () => avatarGrid.classList.remove('show'));
    for (let i = 1; i <= 6; i++) { const img = document.createElement('img'); img.src = `https://api.dicebear.com/7.x/bottts/svg?seed=${currentUser || 'Amit'}${i}`; img.addEventListener('click', () => { selectedAvatarImg.src = img.src; if (currentUser) { let us = JSON.parse(localStorage.getItem('amitquizx_users')); us[currentUser].avatar = img.src; localStorage.setItem('amitquizx_users', JSON.stringify(us)); updateProfileUI(); } playClick(); }); avatarGrid.appendChild(img); }
}

function showPage(pageId) { pages.forEach(page => { page.classList.remove('active'); if (page.id === pageId) page.classList.add('active'); }); window.scrollTo(0,0); }
function updateUI() { 
    document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = translations[currentLanguage][el.getAttribute('data-i18n')] || el.innerHTML; }); 
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = translations[currentLanguage][el.getAttribute('data-i18n-placeholder')] || el.placeholder; }); 
}

document.addEventListener('DOMContentLoaded', init);
