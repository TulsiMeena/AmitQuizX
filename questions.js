const quizData = {
    gk: {
        title_en: "General Knowledge",
        title_hi: "सामान्य ज्ञान",
        sections: {
            1: [
                {
                    q_en: "Which is the largest organ in the human body?",
                    q_hi: "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
                    options_en: ["Liver", "Heart", "Skin", "Brain"],
                    options_hi: ["यकृत", "हृदय", "त्वचा", "मस्तिष्क"],
                    answer: 2,
                    hint_en: "It covers your entire body.",
                    hint_hi: "यह आपके पूरे शरीर को ढकता है।",
                    difficulty: "easy"
                },
                {
                    q_en: "Who is known as the 'Iron Man of India'?",
                    q_hi: "भारत के 'लौह पुरुष' के रूप में किसे जाना जाता है?",
                    options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Subhash Chandra Bose"],
                    options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार वल्लभभाई पटेल", "सुभाष चंद्र बोस"],
                    answer: 2,
                    hint_en: "He was the first Deputy Prime Minister of India.",
                    hint_hi: "वे भारत के पहले उप प्रधानमंत्री थे।",
                    difficulty: "medium"
                },
                {
                    q_en: "What is the currency of Japan?",
                    q_hi: "जापान की मुद्रा क्या है?",
                    options_en: ["Yuan", "Yen", "Won", "Baht"],
                    options_hi: ["युआन", "येन", "वोन", "बहत"],
                    answer: 1,
                    hint_en: "It starts with 'Y'.",
                    hint_hi: "यह 'Y' से शुरू होता है।",
                    difficulty: "easy"
                },
                {
                    q_en: "Identify this famous landmark:",
                    q_hi: "इस प्रसिद्ध स्थल को पहचानें:",
                    options_en: ["Eiffel Tower", "Taj Mahal", "Great Wall of China", "Statue of Liberty"],
                    options_hi: ["एफिल टॉवर", "ताज महल", "चीन की महान दीवार", "स्टैच्यू ऑफ लिबर्टी"],
                    answer: 1,
                    hint_en: "It is located in Agra, India.",
                    hint_hi: "यह आगरा, भारत में स्थित है।",
                    difficulty: "easy",
                    img: "https://images.unsplash.com/photo-1564507592333-c60657eea023?auto=format&fit=crop&w=400&q=80"
                },
                {
                    q_en: "Which is the longest river in the world?",
                    q_hi: "विश्व की सबसे लंबी नदी कौन सी है?",
                    options_en: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                    options_hi: ["अमेज़न", "नील", "यांग्त्ज़ी", "मिसिसिपी"],
                    answer: 1,
                    hint_en: "It is located in Africa.",
                    hint_hi: "यह अफ्रीका में स्थित है।",
                    difficulty: "medium"
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: []
        }
    },
    science: {
        title_en: "Science",
        title_hi: "विज्ञान",
        sections: {
            1: [
                {
                    q_en: "What is the chemical symbol for Water?",
                    q_hi: "पानी का रासायनिक सूत्र क्या है?",
                    options_en: ["O2", "CO2", "H2O", "NaCl"],
                    options_hi: ["O2", "CO2", "H2O", "NaCl"],
                    answer: 2,
                    hint_en: "Two hydrogen atoms and one oxygen atom.",
                    hint_hi: "दो हाइड्रोजन परमाणु और एक ऑक्सीजन परमाणु।",
                    difficulty: "easy"
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: []
        }
    },
    history: {
        title_en: "History",
        title_hi: "इतिहास",
        sections: {
            1: [
                {
                    q_en: "Who was the first President of India?",
                    q_hi: "भारत के पहले राष्ट्रपति कौन थे?",
                    options_en: ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Zakir Husain", "V.V. Giri"],
                    options_hi: ["डॉ. राजेंद्र प्रसाद", "डॉ. एस. राधाकृष्णन", "ज़ाकिर हुसैन", "वी.वी. गिरी"],
                    answer: 0,
                    hint_en: "He was born in Bihar.",
                    hint_hi: "उनका जन्म बिहार में हुआ था।",
                    difficulty: "medium"
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: []
        }
    },
    geography: {
        title_en: "Geography",
        title_hi: "भूगोल",
        sections: {
            1: [
                {
                    q_en: "Which is the largest desert in the world?",
                    q_hi: "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
                    options_en: ["Sahara", "Gobi", "Kalahari", "Antarctic Desert"],
                    options_hi: ["सहारा", "गोबी", "कालाहारी", "अंटार्कटिक रेगिस्तान"],
                    answer: 3,
                    hint_en: "It's not a hot desert.",
                    hint_hi: "यह गर्म रेगिस्तान नहीं है।",
                    difficulty: "hard"
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: []
        }
    }
};

function populateMockQuestions() {
    const difficulties = ["easy", "medium", "hard"];
    for (let cat in quizData) {
        for (let sec in quizData[cat].sections) {
            const existingCount = quizData[cat].sections[sec].length;
            for (let i = existingCount + 1; i <= 50; i++) {
                const diff = difficulties[Math.floor(Math.random() * 3)];
                quizData[cat].sections[sec].push({
                    q_en: `${quizData[cat].title_en} Question ${i} in Section ${sec}`,
                    q_hi: `${quizData[cat].title_hi} प्रश्न ${i} अनुभाग ${sec} में`,
                    options_en: ["Option A", "Option B", "Option C", "Option D"],
                    options_hi: ["विकल्प ए", "विकल्प बी", "विकल्प सी", "विकल्प डी"],
                    answer: Math.floor(Math.random() * 4),
                    hint_en: `Hint for ${quizData[cat].title_en} Q${i}`,
                    hint_hi: `${quizData[cat].title_hi} प्रश्न ${i} के लिए संकेत`,
                    difficulty: diff
                });
            }
        }
    }
}

populateMockQuestions();
