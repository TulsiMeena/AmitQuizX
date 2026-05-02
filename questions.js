const questions = [
    // GK (General Knowledge)
    {
        question: "Which is the largest organ in the human body?",
        options: ["Liver", "Heart", "Skin", "Brain"],
        answer: 2,
        category: "gk"
    },
    {
        question: "Who is known as the 'Iron Man of India'?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Subhash Chandra Bose"],
        answer: 2,
        category: "gk"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Yen", "Won", "Baht"],
        answer: 1,
        category: "gk"
    },
    {
        question: "Which is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        answer: 1,
        category: "gk"
    },
    {
        question: "In which year did India get independence?",
        options: ["1942", "1945", "1947", "1950"],
        answer: 2,
        category: "gk"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        answer: 1,
        category: "gk"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: 1,
        category: "gk"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "London", "Rome", "Paris"],
        answer: 3,
        category: "gk"
    },
    {
        question: "Which is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3,
        category: "gk"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        answer: 1,
        category: "gk"
    },
    {
        question: "What is the tallest building in the world?",
        options: ["Shanghai Tower", "Burj Khalifa", "Empire State Building", "Abraj Al Bait"],
        answer: 1,
        category: "gk"
    },
    {
        question: "Which animal is known as the 'Ship of the Desert'?",
        options: ["Horse", "Elephant", "Camel", "Donkey"],
        answer: 2,
        category: "gk"
    },
    {
        question: "How many colors are there in a rainbow?",
        options: ["5", "6", "7", "8"],
        answer: 2,
        category: "gk"
    },
    {
        question: "Which is the smallest country in the world?",
        options: ["Monaco", "Maldives", "Vatican City", "San Marino"],
        answer: 2,
        category: "gk"
    },
    {
        question: "Who is the current Prime Minister of India? (As of 2023)",
        options: ["Amit Shah", "Narendra Modi", "Rahul Gandhi", "Draupadi Murmu"],
        answer: 1,
        category: "gk"
    },
    {
        question: "Which bird can fly backwards?",
        options: ["Eagle", "Hummingbird", "Parrot", "Owl"],
        answer: 1,
        category: "gk"
    },
    {
        question: "What is the national animal of India?",
        options: ["Lion", "Tiger", "Elephant", "Leopard"],
        answer: 1,
        category: "gk"
    },
    {
        question: "Which is the largest continent?",
        options: ["Africa", "Europe", "North America", "Asia"],
        answer: 3,
        category: "gk"
    },
    {
        question: "Who discovered zero?",
        options: ["Aryabhatta", "Newton", "Einstein", "Pythagoras"],
        answer: 0,
        category: "gk"
    },
    {
        question: "What is the capital of USA?",
        options: ["New York", "Los Angeles", "Washington D.C.", "Chicago"],
        answer: 2,
        category: "gk"
    },
    {
        question: "Which gas do humans breathe out?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: 2,
        category: "gk"
    },
    {
        question: "How many legs does a spider have?",
        options: ["6", "8", "10", "12"],
        answer: 1,
        category: "gk"
    },
    {
        question: "Which is the fastest land animal?",
        options: ["Lion", "Tiger", "Cheetah", "Leopard"],
        answer: 2,
        category: "gk"
    },
    {
        question: "Which country is famous for its pyramids?",
        options: ["Greece", "Italy", "Egypt", "China"],
        answer: 2,
        category: "gk"
    },
    {
        question: "Who invented the light bulb?",
        options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Albert Einstein"],
        answer: 1,
        category: "gk"
    },

    // Science
    {
        question: "What is the chemical symbol for Water?",
        options: ["O2", "CO2", "H2O", "NaCl"],
        answer: 2,
        category: "science"
    },
    {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        answer: 2,
        category: "science"
    },
    {
        question: "What is the center of an atom called?",
        options: ["Proton", "Neutron", "Electron", "Nucleus"],
        answer: 3,
        category: "science"
    },
    {
        question: "Which vitamin is obtained from sunlight?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        answer: 3,
        category: "science"
    },
    {
        question: "What is the boiling point of water at sea level?",
        options: ["50°C", "80°C", "100°C", "120°C"],
        answer: 2,
        category: "science"
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mars", "Mercury"],
        answer: 3,
        category: "science"
    },
    {
        question: "What is the study of plants called?",
        options: ["Zoology", "Botany", "Geology", "Astronomy"],
        answer: 1,
        category: "science"
    },
    {
        question: "Which part of the plant conducts photosynthesis?",
        options: ["Root", "Stem", "Leaf", "Flower"],
        answer: 2,
        category: "science"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Graphite"],
        answer: 2,
        category: "science"
    },
    {
        question: "Which instrument is used to measure atmospheric pressure?",
        options: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
        answer: 1,
        category: "science"
    },
    {
        question: "What is the power house of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Cytoplasm"],
        answer: 2,
        category: "science"
    },
    {
        question: "Which metal is liquid at room temperature?",
        options: ["Iron", "Mercury", "Silver", "Aluminum"],
        answer: 1,
        category: "science"
    },
    {
        question: "What is the chemical symbol for Gold?",
        options: ["Ag", "Au", "Fe", "Cu"],
        answer: 1,
        category: "science"
    },
    {
        question: "How many planets are in our solar system?",
        options: ["7", "8", "9", "10"],
        answer: 1,
        category: "science"
    },
    {
        question: "What is the speed of light approximately?",
        options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"],
        answer: 0,
        category: "science"
    },
    {
        question: "Which acid is found in lemons?",
        options: ["Acetic acid", "Citric acid", "Lactic acid", "Hydrochloric acid"],
        answer: 1,
        category: "science"
    },
    {
        question: "What is the main gas in the Sun?",
        options: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
        answer: 1,
        category: "science"
    },
    {
        question: "What does DNA stand for?",
        options: ["Deoxyribonucleic Acid", "Diribonucleic Acid", "Deoxyribose Acid", "Deoxynucleic Acid"],
        answer: 0,
        category: "science"
    },
    {
        question: "Which force pulls everything towards the Earth?",
        options: ["Magnetic force", "Frictional force", "Gravitational force", "Electrostatic force"],
        answer: 2,
        category: "science"
    },
    {
        question: "What is the SI unit of force?",
        options: ["Joule", "Watt", "Newton", "Pascal"],
        answer: 2,
        category: "science"
    },
    {
        question: "Which organ filters blood in the human body?",
        options: ["Heart", "Lungs", "Kidneys", "Stomach"],
        answer: 2,
        category: "science"
    },
    {
        question: "What is the common name for Sodium Chloride?",
        options: ["Sugar", "Salt", "Baking Soda", "Vinegar"],
        answer: 1,
        category: "science"
    },
    {
        question: "Which planet has the most moons?",
        options: ["Mars", "Jupiter", "Saturn", "Neptune"],
        answer: 2,
        category: "science"
    },
    {
        question: "What is the process of water changing into vapor?",
        options: ["Condensation", "Evaporation", "Freezing", "Melting"],
        answer: 1,
        category: "science"
    },
    {
        question: "Which blood group is known as the universal donor?",
        options: ["A+", "B+", "AB+", "O-"],
        answer: 3,
        category: "science"
    },

    // History
    {
        question: "Who was the first President of India?",
        options: ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Zakir Husain", "V.V. Giri"],
        answer: 0,
        category: "history"
    },
    {
        question: "Who was the first Emperor of the Maurya Empire?",
        options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Dasharatha"],
        answer: 1,
        category: "history"
    },
    {
        question: "The Second World War ended in which year?",
        options: ["1943", "1944", "1945", "1946"],
        answer: 2,
        category: "history"
    },
    {
        question: "Who discovered America in 1492?",
        options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "James Cook"],
        answer: 1,
        category: "history"
    },
    {
        question: "The French Revolution started in which year?",
        options: ["1776", "1789", "1804", "1815"],
        answer: 1,
        category: "history"
    },
    {
        question: "Who was known as the 'Lady with the Lamp'?",
        options: ["Mother Teresa", "Florence Nightingale", "Sarojini Naidu", "Annie Besant"],
        answer: 1,
        category: "history"
    },
    {
        question: "Which Mughal Emperor built the Taj Mahal?",
        options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
        answer: 2,
        category: "history"
    },
    {
        question: "Who was the first woman Prime Minister of India?",
        options: ["Pratibha Patil", "Indira Gandhi", "Sushma Swaraj", "Sarojini Naidu"],
        answer: 1,
        category: "history"
    },
    {
        question: "The Battle of Waterloo was fought in which year?",
        options: ["1805", "1812", "1815", "1821"],
        answer: 2,
        category: "history"
    },
    {
        question: "Who was the first man to step on the Moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
        answer: 1,
        category: "history"
    },
    {
        question: "Which civilization is known for the Great Wall?",
        options: ["Indian", "Egyptian", "Roman", "Chinese"],
        answer: 3,
        category: "history"
    },
    {
        question: "Who was the leader of the Nazi Party in Germany?",
        options: ["Benito Mussolini", "Adolf Hitler", "Joseph Stalin", "Winston Churchill"],
        answer: 1,
        category: "history"
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1910", "1912", "1914", "1916"],
        answer: 1,
        category: "history"
    },
    {
        question: "Who was the founder of the Mughal Empire in India?",
        options: ["Humayun", "Akbar", "Babur", "Sher Shah Suri"],
        answer: 2,
        category: "history"
    },
    {
        question: "The Magna Carta was signed in which year?",
        options: ["1066", "1215", "1492", "1776"],
        answer: 1,
        category: "history"
    },
    {
        question: "Who wrote the Indian National Anthem?",
        options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Mahatma Gandhi", "Subhash Chandra Bose"],
        answer: 1,
        category: "history"
    },
    {
        question: "Which movement was started by Mahatma Gandhi in 1942?",
        options: ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Khilafat Movement"],
        answer: 2,
        category: "history"
    },
    {
        question: "Who was the first Governor-General of independent India?",
        options: ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "Dr. Rajendra Prasad"],
        answer: 0,
        category: "history"
    },
    {
        question: "The Renaissance started in which country?",
        options: ["France", "Germany", "Italy", "England"],
        answer: 2,
        category: "history"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Mother Teresa", "Marie Curie", "Jane Addams", "Alva Myrdal"],
        answer: 1,
        category: "history"
    },
    {
        question: "Which US President signed the Emancipation Proclamation?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "Theodore Roosevelt"],
        answer: 2,
        category: "history"
    },
    {
        question: "The Industrial Revolution first began in which country?",
        options: ["USA", "France", "Germany", "Great Britain"],
        answer: 3,
        category: "history"
    },
    {
        question: "Who was the Greek god of the sea?",
        options: ["Zeus", "Poseidon", "Hades", "Apollo"],
        answer: 1,
        category: "history"
    },
    {
        question: "Which queen ruled England for 63 years (1837-1901)?",
        options: ["Queen Elizabeth I", "Queen Victoria", "Queen Mary", "Queen Anne"],
        answer: 1,
        category: "history"
    },
    {
        question: "Who was the architect of the Indian Constitution?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Sardar Patel"],
        answer: 2,
        category: "history"
    },

    // Geography
    {
        question: "Which is the largest desert in the world?",
        options: ["Sahara", "Gobi", "Kalahari", "Antarctic Desert"],
        answer: 3,
        category: "geography"
    },
    {
        question: "Which country has the largest population in the world? (As of 2023)",
        options: ["China", "India", "USA", "Indonesia"],
        answer: 1,
        category: "geography"
    },
    {
        question: "Mount Everest is located in which mountain range?",
        options: ["Andes", "Rockies", "Himalayas", "Alps"],
        answer: 2,
        category: "geography"
    },
    {
        question: "Which is the smallest continent by land area?",
        options: ["Europe", "Antarctica", "Australia", "South America"],
        answer: 2,
        category: "geography"
    },
    {
        question: "Which river is known as the 'Sorrow of China'?",
        options: ["Yangtze", "Yellow River", "Mekong", "Pearl River"],
        answer: 1,
        category: "geography"
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: 1,
        category: "geography"
    },
    {
        question: "Which is the largest state in India by area?",
        options: ["Maharashtra", "Madhya Pradesh", "Rajasthan", "Uttar Pradesh"],
        answer: 2,
        category: "geography"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        answer: 2,
        category: "geography"
    },
    {
        question: "Which ocean is S-shaped?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: 1,
        category: "geography"
    },
    {
        question: "Which is the highest waterfall in the world?",
        options: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"],
        answer: 2,
        category: "geography"
    },
    {
        question: "Which line divides the Earth into Northern and Southern Hemispheres?",
        options: ["Prime Meridian", "Tropic of Cancer", "Tropic of Capricorn", "Equator"],
        answer: 3,
        category: "geography"
    },
    {
        question: "Which is the largest island in the world?",
        options: ["Iceland", "Greenland", "Madagascar", "New Guinea"],
        answer: 1,
        category: "geography"
    },
    {
        question: "In which country is the Great Barrier Reef located?",
        options: ["Brazil", "Australia", "Indonesia", "Philippines"],
        answer: 1,
        category: "geography"
    },
    {
        question: "Which is the coldest place on Earth?",
        options: ["North Pole", "Greenland", "Antarctica", "Siberia"],
        answer: 2,
        category: "geography"
    },
    {
        question: "Which city is known as the 'City of Seven Hills'?",
        options: ["Rome", "Athens", "Paris", "London"],
        answer: 0,
        category: "geography"
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        answer: 3,
        category: "geography"
    },
    {
        question: "Which country is both in Europe and Asia?",
        options: ["Russia", "Egypt", "Panama", "Australia"],
        answer: 0,
        category: "geography"
    },
    {
        question: "Which is the deepest ocean trench in the world?",
        options: ["Tonga Trench", "Java Trench", "Mariana Trench", "Puerto Rico Trench"],
        answer: 2,
        category: "geography"
    },
    {
        question: "Which is the largest lake in the world (by surface area)?",
        options: ["Lake Superior", "Caspian Sea", "Lake Victoria", "Lake Michigan"],
        answer: 1,
        category: "geography"
    },
    {
        question: "Which state is known as the 'God's Own Country' in India?",
        options: ["Karnataka", "Tamil Nadu", "Kerala", "Goa"],
        answer: 2,
        category: "geography"
    },
    {
        question: "Which is the most populous city in the world?",
        options: ["Shanghai", "New York", "Tokyo", "Delhi"],
        answer: 2,
        category: "geography"
    },
    {
        question: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        answer: 2,
        category: "geography"
    },
    {
        question: "Which country is known as the 'Land of Thousand Lakes'?",
        options: ["Norway", "Sweden", "Finland", "Canada"],
        answer: 2,
        category: "geography"
    },
    {
        question: "Which mountain range separates Europe and Asia?",
        options: ["Alps", "Himalayas", "Andes", "Ural Mountains"],
        answer: 3,
        category: "geography"
    },
    {
        question: "Which is the largest bay in the world?",
        options: ["Hudson Bay", "Bay of Bengal", "Baffin Bay", "Bay of Biscay"],
        answer: 1,
        category: "geography"
    },

    // More GK
    {
        question: "Who is the 'Missile Man of India'?",
        options: ["Homi J. Bhabha", "Vikram Sarabhai", "A.P.J. Abdul Kalam", "C.V. Raman"],
        answer: 2,
        category: "gk"
    },
    {
        question: "Which is the smallest bone in the human body?",
        options: ["Femur", "Stapes", "Tibia", "Fibula"],
        answer: 1,
        category: "gk"
    },
    {
        question: "What is the full form of ISRO?",
        options: ["Indian Space Research Organization", "International Space Research Organization", "Indian Solar Research Organization", "Indian Science Research Organization"],
        answer: 0,
        category: "gk"
    },
    {
        question: "In which city is the Golden Temple located?",
        options: ["Chandigarh", "Amritsar", "Ludhiana", "Jalandhar"],
        answer: 1,
        category: "gk"
    },
    {
        question: "Who was the first Indian woman to go to space?",
        options: ["Sunita Williams", "Kalpana Chawla", "P.T. Usha", "Bachendri Pal"],
        answer: 1,
        category: "gk"
    },
    {
        question: "Which game is Sachin Tendulkar associated with?",
        options: ["Hockey", "Football", "Cricket", "Tennis"],
        answer: 2,
        category: "gk"
    }
];
