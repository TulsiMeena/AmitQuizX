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
                    answer: 2
                },
                {
                    q_en: "Who is known as the 'Iron Man of India'?",
                    q_hi: "भारत के 'लौह पुरुष' के रूप में किसे जाना जाता है?",
                    options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Subhash Chandra Bose"],
                    options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार वल्लभभाई पटेल", "सुभाष चंद्र बोस"],
                    answer: 2
                },
                {
                    q_en: "What is the currency of Japan?",
                    q_hi: "जापान की मुद्रा क्या है?",
                    options_en: ["Yuan", "Yen", "Won", "Baht"],
                    options_hi: ["युआन", "येन", "वोन", "बहत"],
                    answer: 1
                },
                {
                    q_en: "Which is the longest river in the world?",
                    q_hi: "विश्व की सबसे लंबी नदी कौन सी है?",
                    options_en: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                    options_hi: ["अमेज़न", "नील", "यांग्त्ज़ी", "मिसिसिपी"],
                    answer: 1
                },
                {
                    q_en: "In which year did India get independence?",
                    q_hi: "भारत को किस वर्ष स्वतंत्रता मिली?",
                    options_en: ["1942", "1945", "1947", "1950"],
                    options_hi: ["1942", "1945", "1947", "1950"],
                    answer: 2
                },
                {
                    q_en: "Who wrote 'Romeo and Juliet'?",
                    q_hi: "'रोमियो और जूलियट' किसने लिखा था?",
                    options_en: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
                    options_hi: ["चार्ल्स डिकेंस", "विलियम शेक्सपियर", "मार्के ट्वेन", "जेन ऑस्टेन"],
                    answer: 1
                },
                {
                    q_en: "Which planet is known as the Red Planet?",
                    q_hi: "किस ग्रह को लाल ग्रह के रूप में जाना जाता है?",
                    options_en: ["Venus", "Mars", "Jupiter", "Saturn"],
                    options_hi: ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
                    answer: 1
                },
                {
                    q_en: "What is the capital of France?",
                    q_hi: "फ्रांस की राजधानी क्या है?",
                    options_en: ["Berlin", "London", "Rome", "Paris"],
                    options_hi: ["बर्लिन", "लंदन", "रोम", "पेरिस"],
                    answer: 3
                },
                {
                    q_en: "Which is the largest ocean on Earth?",
                    q_hi: "पृथ्वी पर सबसे बड़ा महासागर कौन सा है?",
                    options_en: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                    options_hi: ["अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर", "प्रशांत महासागर"],
                    answer: 3
                },
                {
                    q_en: "Who painted the Mona Lisa?",
                    q_hi: "मोना लिसा की पेंटिंग किसने बनाई थी?",
                    options_en: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
                    options_hi: ["विंसेंट वैन गॉग", "लियोनार्डो दा विंची", "पाब्लो पिकासो", "क्लाउड मोनेट"],
                    answer: 1
                }
            ],
            2: [
                {
                    q_en: "What is the tallest building in the world?",
                    q_hi: "दुनिया की सबसे ऊंची इमारत कौन सी है?",
                    options_en: ["Shanghai Tower", "Burj Khalifa", "Empire State Building", "Abraj Al Bait"],
                    options_hi: ["शंघाई टॉवर", "बुर्ज खलीफा", "एम्पायर स्टेट बिल्डिंग", "अबराज अल बैत"],
                    answer: 1
                },
                {
                    q_en: "Which animal is known as the 'Ship of the Desert'?",
                    q_hi: "किस जानवर को 'रेगिस्तान का जहाज' कहा जाता है?",
                    options_en: ["Horse", "Elephant", "Camel", "Donkey"],
                    options_hi: ["घोड़ा", "हाथी", "ऊंट", "गधा"],
                    answer: 2
                },
                {
                    q_en: "How many colors are there in a rainbow?",
                    q_hi: "इंद्रधनुष में कितने रंग होते हैं?",
                    options_en: ["5", "6", "7", "8"],
                    options_hi: ["5", "6", "7", "8"],
                    answer: 2
                },
                {
                    q_en: "Which is the smallest country in the world?",
                    q_hi: "दुनिया का सबसे छोटा देश कौन सा है?",
                    options_en: ["Monaco", "Maldives", "Vatican City", "San Marino"],
                    options_hi: ["मोनाको", "मालदीव", "वेटिकन सिटी", "सैन मैरिनो"],
                    answer: 2
                },
                {
                    q_en: "Who discovered zero?",
                    q_hi: "शून्य की खोज किसने की थी?",
                    options_en: ["Aryabhatta", "Newton", "Einstein", "Pythagoras"],
                    options_hi: ["आर्यभट्ट", "न्यूटन", "आइंस्टीन", "पायथागोरस"],
                    answer: 0
                }
            ],
            3: [], 4: [], 5: [], 6: []
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
                    answer: 2
                },
                {
                    q_en: "Which gas is most abundant in the Earth's atmosphere?",
                    q_hi: "पृथ्वी के वायुमंडल में कौन सी गैस सबसे अधिक मात्रा में है?",
                    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "आर्गन"],
                    answer: 2
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
                    answer: 0
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
                    answer: 3
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: []
        }
    }
};

// Function to populate empty sections with mock data for demonstration
// In a real app, you would fill these with actual questions.
function populateMockQuestions() {
    for (let cat in quizData) {
        for (let sec in quizData[cat].sections) {
            if (quizData[cat].sections[sec].length === 0) {
                for (let i = 1; i <= 50; i++) {
                    quizData[cat].sections[sec].push({
                        q_en: `${quizData[cat].title_en} Question ${i} in Section ${sec}`,
                        q_hi: `${quizData[cat].title_hi} प्रश्न ${i} अनुभाग ${sec} में`,
                        options_en: ["Option A", "Option B", "Option C", "Option D"],
                        options_hi: ["विकल्प ए", "विकल्प बी", "विकल्प सी", "विकल्प डी"],
                        answer: Math.floor(Math.random() * 4)
                    });
                }
            } else if (quizData[cat].sections[sec].length < 50) {
                const existingCount = quizData[cat].sections[sec].length;
                for (let i = existingCount + 1; i <= 50; i++) {
                     quizData[cat].sections[sec].push({
                        q_en: `${quizData[cat].title_en} Question ${i} in Section ${sec}`,
                        q_hi: `${quizData[cat].title_hi} प्रश्न ${i} अनुभाग ${sec} में`,
                        options_en: ["Option A", "Option B", "Option C", "Option D"],
                        options_hi: ["विकल्प ए", "विकल्प बी", "विकल्प सी", "विकल्प डी"],
                        answer: Math.floor(Math.random() * 4)
                    });
                }
            }
        }
    }
}

populateMockQuestions();
