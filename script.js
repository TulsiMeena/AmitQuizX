// DOM Elements
const homeSection = document.getElementById('home-section');
const quizSection = document.getElementById('quiz-section');
const resultSection = document.getElementById('result-section');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const submitEarlyBtn = document.getElementById('submit-early-btn');
const shareBtn = document.getElementById('share-btn');
const themeToggle = document.getElementById('theme-toggle');

const categoryBtns = document.querySelectorAll('.category-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionCountText = document.getElementById('question-count');
const categoryLabel = document.getElementById('category-label');
const currentScoreText = document.getElementById('current-score');
const progressBar = document.getElementById('progress-bar');
const timerText = document.getElementById('timer-text');

const finalScoreText = document.getElementById('final-score');
const totalQuestionsText = document.getElementById('total-questions');
const percentageText = document.getElementById('percentage');
const performanceMsg = document.getElementById('performance-msg');

// Quiz State
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;
let selectedCategory = 'all';

// Initialize
function init() {
    // Category Selection
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedCategory = btn.getAttribute('data-category');
        });
    });

    // Start Quiz
    startBtn.addEventListener('click', startQuiz);

    // Next Question
    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    });

    // Submit Early
    submitEarlyBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to submit the quiz now?")) {
            showResults();
        }
    });

    // Share Result
    shareBtn.addEventListener('click', shareResult);

    // Restart Quiz
    restartBtn.addEventListener('click', () => {
        resultSection.classList.remove('active');
        homeSection.classList.add('active');
        resetQuiz();
    });

    // Theme Toggle
    themeToggle.addEventListener('click', () => {
        const body = document.body;
        const icon = themeToggle.querySelector('i');

        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            icon.classList.replace('fa-sun', 'fa-moon');
        } else {
            body.setAttribute('data-theme', 'dark');
            icon.classList.replace('fa-moon', 'fa-sun');
        }
    });
}

function startQuiz() {
    // Filter questions by category
    if (selectedCategory === 'all') {
        currentQuestions = [...questions];
    } else {
        currentQuestions = questions.filter(q => q.category === selectedCategory);
    }

    // Shuffle questions
    shuffleArray(currentQuestions);

    // Take max 50 questions for a session
    currentQuestions = currentQuestions.slice(0, 50);

    resetQuiz();
    homeSection.classList.remove('active');
    quizSection.classList.add('active');
    showQuestion();
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    currentScoreText.textContent = score;
    clearInterval(timer);
}

function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];

    // Update UI
    questionText.textContent = question.question;
    questionCountText.textContent = `Question ${currentQuestionIndex + 1}/${currentQuestions.length}`;
    categoryLabel.textContent = `Category: ${question.category}`;

    // Progress Bar
    const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Clear previous options
    optionsContainer.innerHTML = '';

    // Render options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.innerHTML = `
            <span>${option}</span>
            <i class="fas"></i>
        `;
        optionElement.addEventListener('click', () => selectOption(index, optionElement));
        optionsContainer.appendChild(optionElement);
    });

    // Reset Next Button
    nextBtn.disabled = true;

    // Start Timer
    startTimer();
}

function selectOption(index, element) {
    clearInterval(timer);
    const question = currentQuestions[currentQuestionIndex];
    const allOptions = optionsContainer.querySelectorAll('.option');

    // Disable all options
    allOptions.forEach(opt => opt.classList.add('disabled'));

    if (index === question.answer) {
        // Correct
        element.classList.add('correct');
        element.querySelector('i').classList.add('fa-check-circle');
        score++;
        currentScoreText.textContent = score;
        // playSound('correct'); // Optional
    } else {
        // Wrong
        element.classList.add('wrong');
        element.querySelector('i').classList.add('fa-times-circle');

        // Show correct answer
        allOptions[question.answer].classList.add('correct');
        allOptions[question.answer].querySelector('i').classList.add('fa-check-circle');
        // playSound('wrong'); // Optional
    }

    nextBtn.disabled = false;
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 15;
    timerText.textContent = `${timeLeft}s`;
    document.querySelector('.timer').classList.remove('warning');

    timer = setInterval(() => {
        timeLeft--;
        timerText.textContent = `${timeLeft}s`;

        if (timeLeft <= 5) {
            document.querySelector('.timer').classList.add('warning');
        }

        if (timeLeft <= 0) {
            clearInterval(timer);
            autoHandleTimeout();
        }
    }, 1000);
}

function autoHandleTimeout() {
    const question = currentQuestions[currentQuestionIndex];
    const allOptions = optionsContainer.querySelectorAll('.option');

    allOptions.forEach(opt => opt.classList.add('disabled'));

    // Show correct answer
    allOptions[question.answer].classList.add('correct');
    allOptions[question.answer].querySelector('i').classList.add('fa-check-circle');

    nextBtn.disabled = false;
}

function showResults() {
    quizSection.classList.remove('active');
    resultSection.classList.add('active');
    clearInterval(timer);

    // If submitted early, total is the current number of questions seen
    // But usually people want to know how many they got right out of the total potential questions
    // User said "number betaye seccor bhi betaye % bhi"
    // I'll show score out of total questions in the set (50)

    const total = currentQuestions.length;
    const percentage = (score / total) * 100;

    finalScoreText.textContent = score;
    totalQuestionsText.textContent = total;
    percentageText.textContent = `${Math.round(percentage)}%`;

    if (percentage >= 80) {
        performanceMsg.textContent = "Excellent! You're a genius!";
    } else if (percentage >= 50) {
        performanceMsg.textContent = "Good job! Keep it up!";
    } else {
        performanceMsg.textContent = "Keep practicing, you'll get better!";
    }
}

function shareResult() {
    const total = currentQuestions.length;
    const percentage = Math.round((score / total) * 100);
    const text = `I scored ${score}/${total} (${percentage}%) on AmitQuizX! Can you beat my score? 🏆`;
    const url = window.location.href;

    if (navigator.share) {
        navigator.share({
            title: 'AmitQuizX Result',
            text: text,
            url: url
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback to WhatsApp
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + " " + url)}`;
        window.open(whatsappUrl, '_blank');
    }
}

// Utility: Shuffle Array (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);
