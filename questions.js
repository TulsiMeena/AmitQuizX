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
                    explanation_en: "The skin is the largest organ of the body, covering about 2 square meters.",
                    explanation_hi: "त्वचा शरीर का सबसे बड़ा अंग है, जो लगभग 2 वर्ग मीटर को कवर करती है।",
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
                    explanation_en: "Sardar Patel is called the Iron Man of India for his role in integrating princely states.",
                    explanation_hi: "रियासतों के एकीकरण में उनकी भूमिका के लिए सरदार पटेल को भारत का लौह पुरुष कहा जाता है।",
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
                    explanation_en: "The Yen is the official currency of Japan and the third most traded currency.",
                    explanation_hi: "येन जापान की आधिकारिक मुद्रा है और तीसरी सबसे अधिक कारोबार वाली मुद्रा है।",
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
                    explanation_en: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna.",
                    explanation_hi: "ताजमहल यमुना नदी के दाहिने किनारे पर एक हाथीदांत-सफेद संगमरमर का मकबरा है।",
                    difficulty: "easy",
                    img: "https://images.unsplash.com/photo-1564507592333-c60657eea023?auto=format&fit=crop&w=400&q=80"
                },
                {
                    q_en: "Which planet is known as the 'Red Planet'?",
                    q_hi: "किस ग्रह को 'लाल ग्रह' के रूप में जाना जाता है?",
                    options_en: ["Venus", "Mars", "Jupiter", "Saturn"],
                    options_hi: ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
                    answer: 1,
                    hint_en: "It is the fourth planet from the Sun.",
                    hint_hi: "यह सूर्य से चौथा ग्रह है।",
                    explanation_en: "Mars is known as the Red Planet because of iron oxide on its surface.",
                    explanation_hi: "सतह पर आयरन ऑक्साइड के कारण मंगल को लाल ग्रह कहा जाता है।",
                    difficulty: "easy"
                },
                {
                    q_en: "Who wrote the Indian National Anthem?",
                    q_hi: "भारत का राष्ट्रगान किसने लिखा था?",
                    options_en: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Mahatma Gandhi"],
                    options_hi: ["बंकिम चंद्र चटर्जी", "रवींद्रनाथ टैगोर", "सरोजिनी नायडू", "महात्मा गांधी"],
                    answer: 1,
                    hint_en: "He was the first Asian to win a Nobel Prize.",
                    hint_hi: "वे नोबेल पुरस्कार जीतने वाले पहले एशियाई थे।",
                    explanation_en: "Rabindranath Tagore wrote 'Jana Gana Mana' in 1911.",
                    explanation_hi: "रवींद्रनाथ टैगोर ने 1911 में 'जन गण मन' लिखा था।",
                    difficulty: "medium"
                },
                {
                    q_en: "Which is the smallest country in the world?",
                    q_hi: "दुनिया का सबसे छोटा देश कौन सा है?",
                    options_en: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
                    options_hi: ["मोनाको", "वेटिकन सिटी", "सैन मैरिनो", "लिकटेंस्टीन"],
                    answer: 1,
                    hint_en: "It is located within the city of Rome.",
                    hint_hi: "यह रोम शहर के भीतर स्थित है।",
                    explanation_en: "Vatican City is the smallest country by both area and population.",
                    explanation_hi: "क्षेत्रफल और जनसंख्या दोनों के मामले में वेटिकन सिटी सबसे छोटा देश है।",
                    difficulty: "medium"
                },
                {
                    q_en: "What is the capital of France?",
                    q_hi: "फ्रांस की राजधानी क्या है?",
                    options_en: ["Berlin", "London", "Madrid", "Paris"],
                    options_hi: ["बर्लिन", "लंदन", "मैड्रिड", "पेरिस"],
                    answer: 3,
                    hint_en: "Known as the City of Light.",
                    hint_hi: "प्रकाश के शहर के रूप में जाना जाता है।",
                    explanation_en: "Paris is the capital and most populous city of France.",
                    explanation_hi: "पेरिस फ्रांस की राजधानी और सबसे अधिक आबादी वाला शहर है।",
                    difficulty: "easy"
                },
                {
                    q_en: "Which is the longest river in the world?",
                    q_hi: "दुनिया की सबसे लंबी नदी कौन सी है?",
                    options_en: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                    options_hi: ["अमेज़न", "नील", "यांग्त्ज़ी", "मिसिसिपी"],
                    answer: 1,
                    hint_en: "It flows through northeastern Africa.",
                    hint_hi: "यह उत्तर-पूर्वी अफ्रीका से होकर बहती है।",
                    explanation_en: "The Nile is traditionally considered the longest river in the world.",
                    explanation_hi: "नील नदी को पारंपरिक रूप से दुनिया की सबसे लंबी नदी माना जाता है।",
                    difficulty: "medium"
                },
                {
                    q_en: "Who invented the telephone?",
                    q_hi: "टेलीफोन का आविष्कार किसने किया था?",
                    options_en: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Albert Einstein"],
                    options_hi: ["थॉमस एडिसन", "निकोला टेस्ला", "अलेक्जेंडर ग्राहम बेल", "अल्बर्ट आइंस्टीन"],
                    answer: 2,
                    hint_en: "His last name rhymes with the sound a phone makes.",
                    hint_hi: "उनका उपनाम फोन की आवाज से मिलता-जुलता है।",
                    explanation_en: "Alexander Graham Bell is credited with patenting the first practical telephone.",
                    explanation_hi: "अलेक्जेंडर ग्राहम बेल को पहले व्यावहारिक टेलीफोन के पेटेंट का श्रेय दिया जाता है।",
                    difficulty: "easy"
                },
                {
                    q_en: "Which is the tallest building in the world?",
                    q_hi: "दुनिया की सबसे ऊंची इमारत कौन सी है?",
                    options_en: ["Shanghai Tower", "Burj Khalifa", "Abraj Al-Bait Clock Tower", "Ping An Finance Center"],
                    options_hi: ["शंघाई टॉवर", "बुर्ज खलीफा", "अबराज अल-बैत क्लॉक टॉवर", "पिंग एन फाइनेंस सेंटर"],
                    answer: 1,
                    hint_en: "It is located in Dubai.",
                    hint_hi: "यह दुबई में स्थित है।",
                    explanation_en: "Burj Khalifa in Dubai stands at 828 meters.",
                    explanation_hi: "दुबई में बुर्ज खलीफा 828 मीटर ऊंचा है।",
                    difficulty: "easy"
                },
                {
                    q_en: "Who was the first man to walk on the moon?",
                    q_hi: "चंद्रमा पर चलने वाला पहला व्यक्ति कौन था?",
                    options_en: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
                    options_hi: ["बज़ एल्ड्रिन", "नील आर्मस्ट्रांग", "यूरी गागरिन", "माइकल कोलिन्स"],
                    answer: 1,
                    hint_en: "He said, 'That's one small step for man...'",
                    hint_hi: "उन्होंने कहा था, 'यह मनुष्य के लिए एक छोटा कदम है...'।",
                    explanation_en: "Neil Armstrong walked on the moon during the Apollo 11 mission in 1969.",
                    explanation_hi: "नील आर्मस्ट्रांग ने 1969 में अपोलो 11 मिशन के दौरान चंद्रमा पर चहलकदमी की थी।",
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
                    explanation_en: "H2O stands for two Hydrogen atoms and one Oxygen atom.",
                    explanation_hi: "H2O का अर्थ है दो हाइड्रोजन परमाणु और एक ऑक्सीजन परमाणु।",
                    difficulty: "easy"
                },
                {
                    q_en: "Which gas do plants absorb from the atmosphere for photosynthesis?",
                    q_hi: "प्रकाश संश्लेषण के लिए पौधे वायुमंडल से कौन सी गैस अवशोषित करते हैं?",
                    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
                    answer: 1,
                    hint_en: "It is the gas humans breathe out.",
                    hint_hi: "यह वह गैस है जिसे मनुष्य बाहर छोड़ते हैं।",
                    explanation_en: "Plants use Carbon Dioxide and sunlight to produce food.",
                    explanation_hi: "पौधे भोजन बनाने के लिए कार्बन डाइऑक्साइड और सूर्य के प्रकाश का उपयोग करते हैं।",
                    difficulty: "easy"
                },
                {
                    q_en: "What is the power house of the cell?",
                    q_hi: "कोशिका का पावर हाउस किसे कहा जाता है?",
                    options_en: ["Nucleus", "Ribosome", "Mitochondria", "Cytoplasm"],
                    options_hi: ["नाभिक", "राइबोसोम", "माइटोकॉन्ड्रिया", "साइटोप्लाज्म"],
                    answer: 2,
                    hint_en: "It generates energy for the cell.",
                    hint_hi: "यह कोशिका के लिए ऊर्जा उत्पन्न करता है।",
                    explanation_en: "Mitochondria are responsible for creating ATP, the cell's energy currency.",
                    explanation_hi: "माइटोकॉन्ड्रिया एटीपी बनाने के लिए जिम्मेदार हैं, जो कोशिका की ऊर्जा मुद्रा है।",
                    difficulty: "medium"
                },
                {
                    q_en: "Which planet is closest to the Sun?",
                    q_hi: "सूर्य के सबसे निकट कौन सा ग्रह है?",
                    options_en: ["Venus", "Mars", "Mercury", "Earth"],
                    options_hi: ["शुक्र", "मंगल", "बुध", "पृथ्वी"],
                    answer: 2,
                    hint_en: "It's the smallest planet in the solar system.",
                    hint_hi: "यह सौरमंडल का सबसे छोटा ग्रह है।",
                    explanation_en: "Mercury is the closest planet to the Sun and has the shortest orbital period.",
                    explanation_hi: "बुध सूर्य के सबसे निकट का ग्रह है और इसकी कक्षीय अवधि सबसे कम है।",
                    difficulty: "easy"
                },
                {
                    q_en: "What is the hardest natural substance on Earth?",
                    q_hi: "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
                    options_en: ["Gold", "Iron", "Diamond", "Platinum"],
                    options_hi: ["सोना", "लोहा", "हीरा", "प्लैटिनम"],
                    answer: 2,
                    hint_en: "It is commonly used in jewelry.",
                    hint_hi: "इसका उपयोग आमतौर पर गहनों में किया जाता है।",
                    explanation_en: "Diamond is the hardest known natural material on Earth.",
                    explanation_hi: "हीरा पृथ्वी पर ज्ञात सबसे कठोर प्राकृतिक पदार्थ है।",
                    difficulty: "medium"
                },
                {
                    q_en: "Which part of the human body produces insulin?",
                    q_hi: "मानव शरीर का कौन सा हिस्सा इंसुलिन पैदा करता है?",
                    options_en: ["Liver", "Pancreas", "Kidney", "Stomach"],
                    options_hi: ["यकृत", "अग्न्याशय", "गुर्दा", "पेट"],
                    answer: 1,
                    hint_en: "Located behind the stomach.",
                    hint_hi: "पेट के पीछे स्थित है।",
                    explanation_en: "The pancreas produces insulin to regulate blood sugar levels.",
                    explanation_hi: "अग्न्याशय रक्त शर्करा के स्तर को नियंत्रित करने के लिए इंसुलिन का उत्पादन करता है।",
                    difficulty: "medium"
                },
                {
                    q_en: "What is the speed of light?",
                    q_hi: "प्रकाश की गति क्या है?",
                    options_en: ["300,000 km/s", "150,000 km/s", "1,000,000 km/s", "500,000 km/s"],
                    options_hi: ["300,000 km/s", "150,000 km/s", "1,000,000 km/s", "500,000 km/s"],
                    answer: 0,
                    hint_en: "It's approximately 3 * 10^8 meters per second.",
                    hint_hi: "यह लगभग 3 * 10^8 मीटर प्रति सेकंड है।",
                    explanation_en: "Light travels at approximately 299,792 kilometers per second in a vacuum.",
                    explanation_hi: "निर्वात में प्रकाश लगभग 299,792 किलोमीटर प्रति सेकंड की गति से चलता है।",
                    difficulty: "hard"
                },
                {
                    q_en: "Who proposed the Theory of Relativity?",
                    q_hi: "सापेक्षता का सिद्धांत किसने प्रस्तावित किया था?",
                    options_en: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
                    options_hi: ["आईजैक न्यूटन", "अल्बर्ट आइंस्टीन", "स्टीफन हॉकिंग", "गैलीलियो गैलीली"],
                    answer: 1,
                    hint_en: "Famous for E=mc^2.",
                    hint_hi: "E=mc^2 के लिए प्रसिद्ध है।",
                    explanation_en: "Albert Einstein developed the special and general theories of relativity.",
                    explanation_hi: "अल्बर्ट आइंस्टीन ने सापेक्षता के विशेष और सामान्य सिद्धांतों को विकसित किया।",
                    difficulty: "medium"
                },
                {
                    q_en: "What is the boiling point of water at sea level?",
                    q_hi: "समुद्र तल पर पानी का क्वथनांक क्या है?",
                    options_en: ["90°C", "100°C", "110°C", "120°C"],
                    options_hi: ["90°C", "100°C", "110°C", "120°C"],
                    answer: 1,
                    hint_en: "It's exactly 100 on the Celsius scale.",
                    hint_hi: "सेल्सियस पैमाने पर यह ठीक 100 है।",
                    explanation_en: "At standard atmospheric pressure, water boils at 100°C.",
                    explanation_hi: "मानक वायुमंडलीय दबाव पर, पानी 100°C पर उबलता है।",
                    difficulty: "easy"
                },
                {
                    q_en: "Which element has the atomic number 1?",
                    q_hi: "किस तत्व की परमाणु संख्या 1 है?",
                    options_en: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
                    options_hi: ["हीलियम", "ऑक्सीजन", "हाइड्रोजन", "कार्बन"],
                    answer: 2,
                    hint_en: "It is the most abundant element in the universe.",
                    hint_hi: "यह ब्रह्मांड में सबसे प्रचुर मात्रा में पाया जाने वाला तत्व है।",
                    explanation_en: "Hydrogen is the first element on the periodic table with one proton.",
                    explanation_hi: "हाइड्रोजन आवर्त सारणी का पहला तत्व है जिसमें एक प्रोटॉन होता है।",
                    difficulty: "medium"
                },
                {
                    q_en: "Which gas is most abundant in the Earth's atmosphere?",
                    q_hi: "पृथ्वी के वायुमंडल में कौन सी गैस सबसे प्रचुर मात्रा में है?",
                    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "आर्गन"],
                    answer: 2,
                    hint_en: "It makes up about 78% of the air.",
                    hint_hi: "यह हवा का लगभग 78% हिस्सा बनाता है।",
                    explanation_en: "Nitrogen is the most abundant gas, followed by Oxygen (21%).",
                    explanation_hi: "नाइट्रोजन सबसे प्रचुर मात्रा में पाई जाने वाली गैस है, उसके बाद ऑक्सीजन (21%) का स्थान है।",
                    difficulty: "medium"
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
                    explanation_en: "Dr. Rajendra Prasad was the first President of India from 1950 to 1962.",
                    explanation_hi: "डॉ. राजेंद्र प्रसाद 1950 से 1962 तक भारत के पहले राष्ट्रपति थे।",
                    difficulty: "medium"
                },
                {
                    q_en: "In which year did the First World War begin?",
                    q_hi: "प्रथम विश्व युद्ध किस वर्ष शुरू हुआ था?",
                    options_en: ["1912", "1914", "1918", "1939"],
                    options_hi: ["1912", "1914", "1918", "1939"],
                    answer: 1,
                    hint_en: "It started in the early 20th century.",
                    hint_hi: "यह 20वीं सदी की शुरुआत में शुरू हुआ था।",
                    explanation_en: "World War I lasted from 1914 to 1918.",
                    explanation_hi: "प्रथम विश्व युद्ध 1914 से 1918 तक चला था।",
                    difficulty: "medium"
                },
                {
                    q_en: "Who was the founder of the Mughal Empire in India?",
                    q_hi: "भारत में मुगल साम्राज्य का संस्थापक कौन था?",
                    options_en: ["Akbar", "Humayun", "Babur", "Shah Jahan"],
                    options_hi: ["अकबर", "हुमायूँ", "बाबर", "शाहजहाँ"],
                    answer: 2,
                    hint_en: "He won the First Battle of Panipat.",
                    hint_hi: "उन्होंने पानीपत की पहली लड़ाई जीती थी।",
                    explanation_en: "Babur founded the Mughal Empire after defeating Ibrahim Lodi in 1526.",
                    explanation_hi: "बाबर ने 1526 में इब्राहिम लोदी को हराकर मुगल साम्राज्य की स्थापना की थी।",
                    difficulty: "medium"
                },
                {
                    q_en: "Which Indian freedom fighter is known as 'Netaji'?",
                    q_hi: "किस भारतीय स्वतंत्रता सेनानी को 'नेताजी' के नाम से जाना जाता है?",
                    options_en: ["Bhagat Singh", "Subhash Chandra Bose", "Lala Lajpat Rai", "Chandra Shekhar Azad"],
                    options_hi: ["भगत सिंह", "सुभाष चंद्र बोस", "लाला लाजपत राय", "चंद्रशेखर आजाद"],
                    answer: 1,
                    hint_en: "He formed the Indian National Army (INA).",
                    hint_hi: "उन्होंने भारतीय राष्ट्रीय सेना (INA) का गठन किया था।",
                    explanation_en: "Subhash Chandra Bose was given the title Netaji by Indian soldiers in Germany.",
                    explanation_hi: "सुभाष चंद्र बोस को जर्मनी में भारतीय सैनिकों द्वारा नेताजी की उपाधि दी गई थी।",
                    difficulty: "easy"
                },
                {
                    q_en: "In which year did India get independence from British rule?",
                    q_hi: "भारत को ब्रिटिश शासन से स्वतंत्रता किस वर्ष मिली?",
                    options_en: ["1942", "1945", "1947", "1950"],
                    options_hi: ["1942", "1945", "1947", "1950"],
                    answer: 2,
                    hint_en: "It's celebrated every August 15th.",
                    hint_hi: "यह हर 15 अगस्त को मनाया जाता है।",
                    explanation_en: "India became independent on August 15, 1947.",
                    explanation_hi: "भारत 15 अगस्त 1947 को स्वतंत्र हुआ।",
                    difficulty: "easy"
                },
                {
                    q_en: "Who was the first woman Prime Minister of India?",
                    q_hi: "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
                    options_en: ["Pratibha Patil", "Indira Gandhi", "Sushma Swaraj", "Sarojini Naidu"],
                    options_hi: ["प्रतिभा पाटिल", "इंदिरा गांधी", "सुषमा स्वराज", "सरोजिनी नायडू"],
                    answer: 1,
                    hint_en: "She was the daughter of Jawaharlal Nehru.",
                    hint_hi: "वह जवाहरलाल नेहरू की बेटी थीं।",
                    explanation_en: "Indira Gandhi served as Prime Minister from 1966 to 1977 and again from 1980 to 1984.",
                    explanation_hi: "इंदिरा गांधी ने 1966 से 1977 तक और फिर 1980 से 1984 तक प्रधानमंत्री के रूप में कार्य किया।",
                    difficulty: "easy"
                },
                {
                    q_en: "The Quit India Movement was started in which year?",
                    q_hi: "भारत छोड़ो आंदोलन किस वर्ष शुरू किया गया था?",
                    options_en: ["1930", "1942", "1919", "1947"],
                    options_hi: ["1930", "1942", "1919", "1947"],
                    answer: 1,
                    hint_en: "Launched by Mahatma Gandhi during WWII.",
                    hint_hi: "द्वितीय विश्व युद्ध के दौरान महात्मा गांधी द्वारा शुरू किया गया।",
                    explanation_en: "The Quit India Movement was launched on August 8, 1942.",
                    explanation_hi: "भारत छोड़ो आंदोलन 8 अगस्त 1942 को शुरू किया गया था।",
                    difficulty: "medium"
                },
                {
                    q_en: "Who was the first Governor-General of independent India?",
                    q_hi: "स्वतंत्र भारत के पहले गवर्नर-जनरल कौन थे?",
                    options_en: ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "Dr. Rajendra Prasad"],
                    options_hi: ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "जवाहरलाल नेहरू", "डॉ. राजेंद्र प्रसाद"],
                    answer: 0,
                    hint_en: "He was a British statesman.",
                    hint_hi: "वे एक ब्रिटिश राजनेता थे।",
                    explanation_en: "Lord Mountbatten was the last Viceroy and first Governor-General of independent India.",
                    explanation_hi: "लॉर्ड माउंटबेटन अंतिम वायसराय और स्वतंत्र भारत के पहले गवर्नर-जनरल थे।",
                    difficulty: "hard"
                },
                {
                    q_en: "Which emperor built the Sanchi Stupa?",
                    q_hi: "सांची स्तूप का निर्माण किस सम्राट ने करवाया था?",
                    options_en: ["Chandragupta Maurya", "Ashoka", "Kanishka", "Samudragupta"],
                    options_hi: ["चंद्रगुप्त मौर्य", "अशोक", "कनिष्क", "समुद्रगुप्त"],
                    answer: 1,
                    hint_en: "Known for spreading Buddhism.",
                    hint_hi: "बौद्ध धर्म के प्रसार के लिए जाने जाते हैं।",
                    explanation_en: "Emperor Ashoka the Great commissioned the Sanchi Stupa in the 3rd century BCE.",
                    explanation_hi: "सम्राट अशोक महान ने तीसरी शताब्दी ईसा पूर्व में सांची स्तूप का निर्माण करवाया था।",
                    difficulty: "medium"
                },
                {
                    q_en: "Who was the teacher of Alexander the Great?",
                    q_hi: "सिकंदर महान का शिक्षक कौन था?",
                    options_en: ["Socrates", "Plato", "Aristotle", "Pythagoras"],
                    options_hi: ["सुकरात", "प्लेटो", "अरस्तू", "पाइथागोरस"],
                    answer: 2,
                    hint_en: "A famous Greek philosopher.",
                    hint_hi: "एक प्रसिद्ध यूनानी दार्शनिक।",
                    explanation_en: "Aristotle was hired by Philip II of Macedon to tutor Alexander.",
                    explanation_hi: "मैसेडोन के फिलिप द्वितीय ने सिकंदर को ट्यूशन देने के लिए अरस्तू को काम पर रखा था।",
                    difficulty: "hard"
                },
                {
                    q_en: "Who was the first woman to win a Nobel Prize?",
                    q_hi: "नोबेल पुरस्कार जीतने वाली पहली महिला कौन थीं?",
                    options_en: ["Marie Curie", "Mother Teresa", "Jane Addams", "Alva Myrdal"],
                    options_hi: ["मैरी क्यूरी", "मदर टेरेसा", "जेन एडम्स", "अल्वा मायर्डल"],
                    answer: 0,
                    hint_en: "She won it for her work on radioactivity.",
                    hint_hi: "उन्होंने रेडियोधर्मिता पर अपने काम के लिए इसे जीता था।",
                    explanation_en: "Marie Curie was the first woman to win a Nobel Prize and the only person to win in two different sciences.",
                    explanation_hi: "मैरी क्यूरी नोबेल पुरस्कार जीतने वाली पहली महिला थीं और दो अलग-अलग विज्ञानों में जीतने वाली एकमात्र व्यक्ति थीं।",
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
                    options_hi: ["सहारा", "गोबी", "कालाहारी", "अंटार्टिक रेगिस्तान"],
                    answer: 3,
                    hint_en: "It's not a hot desert.",
                    hint_hi: "यह गर्म रेगिस्तान नहीं है।",
                    explanation_en: "Antarctica is technically a desert because it receives very little precipitation.",
                    explanation_hi: "अंटार्कटिका तकनीकी रूप से एक रेगिस्तान है क्योंकि वहां बहुत कम वर्षा होती है।",
                    difficulty: "hard"
                },
                {
                    q_en: "Mount Everest is located in which mountain range?",
                    q_hi: "माउंट एवरेस्ट किस पर्वत श्रृंखला में स्थित है?",
                    options_en: ["Andes", "Alps", "Himalayas", "Rockies"],
                    options_hi: ["एंडिस", "आल्प्स", "हिमालय", "रॉकीज"],
                    answer: 2,
                    hint_en: "It is the highest mountain range in the world.",
                    hint_hi: "यह दुनिया की सबसे ऊंची पर्वत श्रृंखला है।",
                    explanation_en: "The Himalayas contain the world's highest peaks, including Everest.",
                    explanation_hi: "हिमालय में एवरेस्ट सहित दुनिया की सबसे ऊंची चोटियाँ हैं।",
                    difficulty: "easy"
                },
                {
                    q_en: "Which is the largest ocean in the world?",
                    q_hi: "दुनिया का सबसे बड़ा महासागर कौन सा है?",
                    options_en: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                    options_hi: ["अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर", "प्रशांत महासागर"],
                    answer: 3,
                    hint_en: "It covers more than one-third of the Earth's surface.",
                    hint_hi: "यह पृथ्वी की सतह के एक तिहाई से अधिक हिस्से को कवर करता है।",
                    explanation_en: "The Pacific Ocean is the largest and deepest of Earth's oceanic divisions.",
                    explanation_hi: "प्रशांत महासागर पृथ्वी के महासागरीय विभाजनों में सबसे बड़ा और गहरा है।",
                    difficulty: "easy"
                },
                {
                    q_en: "Which country is known as the 'Land of the Rising Sun'?",
                    q_hi: "किस देश को 'उगते सूरज की भूमि' के रूप में जाना जाता है?",
                    options_en: ["China", "Japan", "South Korea", "Thailand"],
                    options_hi: ["चीन", "जापान", "दक्षिण कोरिया", "थाईलैंड"],
                    answer: 1,
                    hint_en: "It's an island nation in East Asia.",
                    hint_hi: "यह पूर्वी एशिया का एक द्वीप देश है।",
                    explanation_en: "Japan is called Nihon in Japanese, which literally means 'sun origin'.",
                    explanation_hi: "जापान को जापानी में निहोन कहा जाता है, जिसका शाब्दिक अर्थ है 'सूर्य की उत्पत्ति' ।",
                    difficulty: "easy"
                },
                {
                    q_en: "Which is the largest continent in the world?",
                    q_hi: "दुनिया का सबसे बड़ा महाद्वीप कौन सा है?",
                    options_en: ["Africa", "North America", "Asia", "Europe"],
                    options_hi: ["अफ्रीका", "उत्तरी अमेरिका", "एशिया", "यूरोप"],
                    answer: 2,
                    hint_en: "It includes countries like India and China.",
                    hint_hi: "इसमें भारत और चीन जैसे देश शामिल हैं।",
                    explanation_en: "Asia is the largest continent in both area and population.",
                    explanation_hi: "एशिया क्षेत्रफल और जनसंख्या दोनों में सबसे बड़ा महाद्वीप है।",
                    difficulty: "easy"
                },
                {
                    q_en: "Which river is known as the 'Life Line of India'?",
                    q_hi: "किस नदी को 'भारत की जीवन रेखा' के रूप में जाना जाता है?",
                    options_en: ["Yamuna", "Ganga", "Brahmaputra", "Godavari"],
                    options_hi: ["यमुना", "गंगा", "ब्रह्मपुत्र", "गोदावरी"],
                    answer: 1,
                    hint_en: "It is the most sacred river for Hindus.",
                    hint_hi: "यह हिंदुओं के लिए सबसे पवित्र नदी है।",
                    explanation_en: "The Ganges (Ganga) is the longest river in India and is considered holy.",
                    explanation_hi: "गंगा भारत की सबसे लंबी नदी है और इसे पवित्र माना जाता है।",
                    difficulty: "easy"
                },
                {
                    q_en: "The equator passes through which of these continents?",
                    q_hi: "भूमध्य रेखा इनमें से किस महाद्वीप से होकर गुजरती है?",
                    options_en: ["Europe", "North America", "Africa", "Antarctica"],
                    options_hi: ["यूरोप", "उत्तरी अमेरिका", "अफ्रीका", "अंटार्कटिका"],
                    answer: 2,
                    hint_en: "This continent is home to the Nile river.",
                    hint_hi: "यह महाद्वीप नील नदी का घर है।",
                    explanation_en: "The Equator passes through Africa, South America, and Asia.",
                    explanation_hi: "भूमध्य रेखा अफ्रीका, दक्षिण अमेरिका और एशिया से होकर गुजरती है।",
                    difficulty: "medium"
                },
                {
                    q_en: "Which city is known as the 'Pink City' of India?",
                    q_hi: "भारत के किस शहर को 'गुलाबी शहर' के रूप में जाना जाता है?",
                    options_en: ["Jodhpur", "Udaipur", "Jaipur", "Bikaner"],
                    options_hi: ["जोधपुर", "उदयपुर", "जयपुर", "बीकानेर"],
                    answer: 2,
                    hint_en: "It's the capital of Rajasthan.",
                    hint_hi: "यह राजस्थान की राजधानी है।",
                    explanation_en: "Jaipur was painted pink to welcome Prince Albert in 1876.",
                    explanation_hi: "1876 में प्रिंस अल्बर्ट के स्वागत के लिए जयपुर को गुलाबी रंग से रंगा गया था।",
                    difficulty: "easy"
                },
                {
                    q_en: "Which is the highest waterfall in the world?",
                    q_hi: "दुनिया का सबसे ऊंचा जलप्रपात कौन सा है?",
                    options_en: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"],
                    options_hi: ["नियाग्रा जलप्रपात", "विक्टोरिया जलप्रपात", "एंजेल जलप्रपात", "इगुआज़ु जलप्रपात"],
                    answer: 2,
                    hint_en: "It is located in Venezuela.",
                    hint_hi: "यह वेनेजुएला में स्थित है।",
                    explanation_en: "Angel Falls in Venezuela is the world's highest uninterrupted waterfall.",
                    explanation_hi: "वेनेजुएला में एंजेल जलप्रपात दुनिया का सबसे ऊंचा निर्बाध जलप्रपात है।",
                    difficulty: "medium"
                },
                {
                    q_en: "Which country has the most volcanoes?",
                    q_hi: "किस देश में सबसे अधिक ज्वालामुखी हैं?",
                    options_en: ["Japan", "Iceland", "Indonesia", "USA"],
                    options_hi: ["जापान", "आइसलैंड", "इंडोनेशिया", "यूएसए"],
                    answer: 2,
                    hint_en: "It is an archipelago in Southeast Asia.",
                    hint_hi: "यह दक्षिण पूर्व एशिया में एक द्वीपसमूह है।",
                    explanation_en: "Indonesia has the highest number of active volcanoes in the world.",
                    explanation_hi: "इंडोनेशिया में दुनिया में सबसे अधिक सक्रिय ज्वालामुखी हैं।",
                    difficulty: "hard"
                },
                {
                    q_en: "Which is the smallest continent by land area?",
                    q_hi: "भूमि क्षेत्रफल के हिसाब से सबसे छोटा महाद्वीप कौन सा है?",
                    options_en: ["Europe", "Antarctica", "Australia", "South America"],
                    options_hi: ["यूरोप", "अंटार्कटिका", "ऑस्ट्रेलिया", "दक्षिण अमेरिका"],
                    answer: 2,
                    hint_en: "It is also known as the island continent.",
                    hint_hi: "इसे द्वीप महाद्वीप के रूप में भी जाना जाता है।",
                    explanation_en: "Australia is the smallest continent and also a country.",
                    explanation_hi: "ऑस्ट्रेलिया सबसे छोटा महाद्वीप है और एक देश भी है।",
                    difficulty: "easy"
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
                    explanation_en: `Explanation for ${quizData[cat].title_en} Question ${i}. This is a detailed fact about the correct answer.`,
                    explanation_hi: `${quizData[cat].title_hi} प्रश्न ${i} का विवरण। यह सही उत्तर के बारे में एक विस्तृत तथ्य है।`,
                    difficulty: diff
                });
            }
        }
    }
}

populateMockQuestions();
