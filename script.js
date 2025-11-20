// Vocabulary data dengan v1, v2, v3, arti Indonesia, contoh soal, dan contoh kalimat
const vocabularyData = [
    {
        id: 1,
        v1: "go",
        v2: "went",
        v3: "gone",
        meaning: "pergi",
        type: "irregular",
        category: "sehari-hari",
        examples: [
            {
                sentence: "I go to school every day.",
                translation: "Saya pergi ke sekolah setiap hari."
            },
            {
                sentence: "She went to the market yesterday.",
                translation: "Dia pergi ke pasar kemarin."
            },
            {
                sentence: "They have gone to Bali.",
                translation: "Mereka telah pergi ke Bali."
            }
        ],
        quiz: {
            question: "Choose the correct form: I ___ to the library yesterday.",
            options: ["go", "went", "gone", "going"],
            correct: 1
        }
    },
    {
        id: 2,
        v1: "eat",
        v2: "ate",
        v3: "eaten",
        meaning: "makan",
        type: "irregular",
        category: "makanan",
        examples: [
            {
                sentence: "I eat breakfast at 7 AM.",
                translation: "Saya makan sarapan jam 7 pagi."
            },
            {
                sentence: "We ate pizza for dinner.",
                translation: "Kami makan pizza untuk makan malam."
            },
            {
                sentence: "Have you eaten yet?",
                translation: "Apakah kamu sudah makan?"
            }
        ],
        quiz: {
            question: "Complete: She has ___ all the cookies.",
            options: ["eat", "ate", "eaten", "eating"],
            correct: 2
        }
    },
    {
        id: 3,
        v1: "see",
        v2: "saw",
        v3: "seen",
        meaning: "melihat",
        type: "irregular",
        category: "sehari-hari",
        examples: [
            {
                sentence: "I see a beautiful bird.",
                translation: "Saya melihat burung yang cantik."
            },
            {
                sentence: "He saw a movie last night.",
                translation: "Dia menonton film tadi malam."
            },
            {
                sentence: "Have you seen this film?",
                translation: "Apakah kamu sudah menonton film ini?"
            }
        ],
        quiz: {
            question: "Which is correct? I ___ him at the party.",
            options: ["see", "saw", "seen", "seeing"],
            correct: 1
        }
    },
    {
        id: 4,
        v1: "take",
        v2: "took",
        v3: "taken",
        meaning: "mengambil",
        type: "irregular",
        category: "sehari-hari",
        examples: [
            {
                sentence: "Please take this book.",
                translation: "Tolong ambil buku ini."
            },
            {
                sentence: "She took a photo of the sunset.",
                translation: "Dia mengambil foto matahari terbenam."
            },
            {
                sentence: "The money has been taken.",
                translation: "Uangnya telah diambil."
            }
        ],
        quiz: {
            question: "Fill in the blank: They ___ a taxi to the airport.",
            options: ["take", "took", "taken", "taking"],
            correct: 1
        }
    },
    {
        id: 5,
        v1: "come",
        v2: "came",
        v3: "come",
        meaning: "datang",
        type: "irregular",
        category: "sehari-hari",
        examples: [
            {
                sentence: "Come here, please.",
                translation: "Datang ke sini, tolong."
            },
            {
                sentence: "He came to my house yesterday.",
                translation: "Dia datang ke rumah saya kemarin."
            },
            {
                sentence: "They have come to visit us.",
                translation: "Mereka telah datang untuk mengunjungi kami."
            }
        ],
        quiz: {
            question: "Choose: My friend ___ to see me last week.",
            options: ["come", "came", "come", "coming"],
            correct: 1
        }
    },
    {
        id: 6,
        v1: "get",
        v2: "got",
        v3: "gotten",
        meaning: "mendapatkan",
        type: "irregular",
        category: "sehari-hari",
        examples: [
            {
                sentence: "I get up early every morning.",
                translation: "Saya bangun pagi setiap pagi."
            },
            {
                sentence: "She got a new job.",
                translation: "Dia mendapat pekerjaan baru."
            },
            {
                sentence: "Have you gotten the message?",
                translation: "Apakah kamu sudah mendapat pesannya?"
            }
        ],
        quiz: {
            question: "Complete: I ___ a letter from my friend.",
            options: ["get", "got", "gotten", "getting"],
            correct: 1
        }
    },
    {
        id: 7,
        v1: "make",
        v2: "made",
        v3: "made",
        meaning: "membuat",
        type: "irregular",
        category: "sehari-hari",
        examples: [
            {
                sentence: "I make coffee every morning.",
                translation: "Saya membuat kopi setiap pagi."
            },
            {
                sentence: "She made a cake for the party.",
                translation: "Dia membuat kue untuk pesta."
            },
            {
                sentence: "This table was made by my father.",
                translation: "Meja ini dibuat oleh ayah saya."
            }
        ],
        quiz: {
            question: "Which form? They ___ a decision yesterday.",
            options: ["make", "made", "made", "making"],
            correct: 1
        }
    },
    {
        id: 8,
        v1: "know",
        v2: "knew",
        v3: "known",
        meaning: "tahu, mengetahui",
        type: "irregular",
        category: "sehari-hari",
        examples: [
            {
                sentence: "I know the answer.",
                translation: "Saya tahu jawabannya."
            },
            {
                sentence: "We knew each other in college.",
                translation: "Kami saling mengenal di perguruan tinggi."
            },
            {
                sentence: "Have you known him for long?",
                translation: "Apakah kamu sudah mengenalnya lama?"
            }
        ],
        quiz: {
            question: "Fill in: I ___ him since childhood.",
            options: ["know", "knew", "known", "knowing"],
            correct: 2
        }
    },
    {
        id: 9,
        v1: "think",
        v2: "thought",
        v3: "thought",
        meaning: "berpikir",
        type: "irregular",
        category: "perasaan",
        examples: [
            {
                sentence: "I think it's a good idea.",
                translation: "Saya pikir itu ide yang bagus."
            },
            {
                sentence: "She thought about the problem.",
                translation: "Dia memikirkan masalahnya."
            },
            {
                sentence: "Have you thought about it?",
                translation: "Apakah kamu sudah memikirkannya?"
            }
        ],
        quiz: {
            question: "Complete: I ___ about you yesterday.",
            options: ["think", "thought", "thought", "thinking"],
            correct: 1
        }
    },
    {
        id: 10,
        v1: "give",
        v2: "gave",
        v3: "given",
        meaning: "memberi",
        type: "irregular",
        category: "sehari-hari",
        examples: [
            {
                sentence: "Please give me a pen.",
                translation: "Tolong beri saya pulpen."
            },
            {
                sentence: "He gave her a present.",
                translation: "Dia memberinya hadiah."
            },
            {
                sentence: "I have given my best effort.",
                translation: "Saya telah memberikan usaha terbaik."
            }
        ],
        quiz: {
            question: "Choose: She ___ me a book last week.",
            options: ["give", "gave", "given", "giving"],
            correct: 1
        }
    },
    {
        id: 11,
        v1: "find",
        v2: "found",
        v3: "found",
        meaning: "menemukan",
        type: "irregular",
        category: "sehari-hari",
        examples: [
            {
                sentence: "I can't find my keys.",
                translation: "Saya tidak bisa menemukan kunci saya."
            },
            {
                sentence: "They found a treasure.",
                translation: "Mereka menemukan harta karun."
            },
            {
                sentence: "Have you found your wallet?",
                translation: "Apakah kamu sudah menemukan dompetmu?"
            }
        ],
        quiz: {
            question: "Which is correct? I ___ my phone yesterday.",
            options: ["find", "found", "found", "finding"],
            correct: 1
        }
    },
    {
        id: 12,
        v1: "tell",
        v2: "told",
        v3: "told",
        meaning: "memberitahu",
        type: "irregular",
        category: "sehari-hari",
        examples: [
            {
                sentence: "Tell me the truth.",
                translation: "Katakan yang sebenarnya."
            },
            {
                sentence: "He told me a story.",
                translation: "Dia menceritakan sebuah cerita kepada saya."
            },
            {
                sentence: "I have told you many times.",
                translation: "Saya sudah memberitahumu berkali-kali."
            }
        ],
        quiz: {
            question: "Fill in: She ___ me about the meeting.",
            options: ["tell", "told", "told", "telling"],
            correct: 1
        }
    },
    {
        id: 13,
        v1: "work",
        v2: "worked",
        v3: "worked",
        meaning: "bekerja",
        type: "common",
        category: "bisnis",
        examples: [
            {
                sentence: "I work in an office.",
                translation: "Saya bekerja di kantor."
            },
            {
                sentence: "She worked hard yesterday.",
                translation: "Dia bekerja keras kemarin."
            },
            {
                sentence: "Have you worked here before?",
                translation: "Apakah kamu pernah bekerja di sini sebelumnya?"
            }
        ],
        quiz: {
            question: "Complete: They ___ together last year.",
            options: ["work", "worked", "worked", "working"],
            correct: 1
        }
    },
    {
        id: 14,
        v1: "call",
        v2: "called",
        v3: "called",
        meaning: "memanggil, menelepon",
        type: "common",
        category: "sehari-hari",
        examples: [
            {
                sentence: "Call me tomorrow.",
                translation: "Telepon saya besok."
            },
            {
                sentence: "I called you yesterday.",
                translation: "Saya meneleponmu kemarin."
            },
            {
                sentence: "Have you called your mother?",
                translation: "Apakah kamu sudah menelepon ibumu?"
            }
        ],
        quiz: {
            question: "Choose: I ___ him this morning.",
            options: ["call", "called", "called", "calling"],
            correct: 1
        }
    },
    {
        id: 15,
        v1: "try",
        v2: "tried",
        v3: "tried",
        meaning: "mencoba",
        type: "common",
        category: "sehari-hari",
        examples: [
            {
                sentence: "Try this cake, it's delicious.",
                translation: "Coba kue ini, enak sekali."
            },
            {
                sentence: "We tried our best.",
                translation: "Kami mencoba yang terbaik."
            },
            {
                sentence: "Have you tried this restaurant?",
                translation: "Apakah kamu sudah mencoba restoran ini?"
            }
        ],
        quiz: {
            question: "Fill in: She ___ to help me.",
            options: ["try", "tried", "tried", "trying"],
            correct: 1
        }
    },
    {
        id: 16,
        v1: "ask",
        v2: "asked",
        v3: "asked",
        meaning: "bertanya, meminta",
        type: "common",
        category: "sehari-hari",
        examples: [
            {
                sentence: "Ask me anything.",
                translation: "Tanyakan apa saja kepada saya."
            },
            {
                sentence: "He asked for help.",
                translation: "Dia meminta bantuan."
            },
            {
                sentence: "Have you asked the teacher?",
                translation: "Apakah kamu sudah bertanya kepada guru?"
            }
        ],
        quiz: {
            question: "Which form? I ___ him a question.",
            options: ["ask", "asked", "asked", "asking"],
            correct: 1
        }
    },
    {
        id: 17,
        v1: "need",
        v2: "needed",
        v3: "needed",
        meaning: "membutuhkan",
        type: "common",
        category: "sehari-hari",
        examples: [
            {
                sentence: "I need some help.",
                translation: "Saya membutuhkan bantuan."
            },
            {
                sentence: "She needed more time.",
                translation: "Dia membutuhkan lebih banyak waktu."
            },
            {
                sentence: "Have you needed anything?",
                translation: "Apakah kamu membutuhkan sesuatu?"
            }
        ],
        quiz: {
            question: "Complete: We ___ more information.",
            options: ["need", "needed", "needed", "needing"],
            correct: 0
        }
    },
    {
        id: 18,
        v1: "want",
        v2: "wanted",
        v3: "wanted",
        meaning: "ingin",
        type: "common",
        category: "sehari-hari",
        examples: [
            {
                sentence: "I want to learn English.",
                translation: "Saya ingin belajar bahasa Inggris."
            },
            {
                sentence: "They wanted to go home.",
                translation: "Mereka ingin pulang."
            },
            {
                sentence: "Have you wanted this for long?",
                translation: "Apakah kamu sudah menginginkan ini lama?"
            }
        ],
        quiz: {
            question: "Choose: She ___ to be a doctor.",
            options: ["want", "wanted", "wanted", "wanting"],
            correct: 0
        }
    },
    {
        id: 19,
        v1: "use",
        v2: "used",
        v3: "used",
        meaning: "menggunakan",
        type: "common",
        category: "teknologi",
        examples: [
            {
                sentence: "I use my phone every day.",
                translation: "Saya menggunakan ponsel saya setiap hari."
            },
            {
                sentence: "He used a computer.",
                translation: "Dia menggunakan komputer."
            },
            {
                sentence: "Have you used this app before?",
                translation: "Apakah kamu pernah menggunakan aplikasi ini sebelumnya?"
            }
        ],
        quiz: {
            question: "Fill in: We ___ this method last year.",
            options: ["use", "used", "used", "using"],
            correct: 1
        }
    },
    {
        id: 20,
        v1: "help",
        v2: "helped",
        v3: "helped",
        meaning: "membantu",
        type: "common",
        category: "sehari-hari",
        examples: [
            {
                sentence: "Can you help me?",
                translation: "Bisakah kamu membantu saya?"
            },
            {
                sentence: "She helped her friend.",
                translation: "Dia membantu temannya."
            },
            {
                sentence: "Have you helped them?",
                translation: "Apakah kamu sudah membantu mereka?"
            }
        ],
        quiz: {
            question: "Which is correct? I ___ him with homework.",
            options: ["help", "helped", "helped", "helping"],
            correct: 1
        }
    },
    // BISNIS
    {
        id: 21,
        v1: "manage",
        v2: "managed",
        v3: "managed",
        meaning: "mengelola, mengatur",
        type: "common",
        category: "bisnis",
        examples: [
            { sentence: "She manages a team of 20 people.", translation: "Dia mengelola tim yang terdiri dari 20 orang." },
            { sentence: "He managed the project successfully.", translation: "Dia berhasil mengelola proyek tersebut." },
            { sentence: "The company has been managed well.", translation: "Perusahaan telah dikelola dengan baik." }
        ],
        quiz: { question: "Complete: They ___ the company for 10 years.", options: ["manage", "managed", "managed", "managing"], correct: 1 }
    },
    {
        id: 22,
        v1: "invest",
        v2: "invested",
        v3: "invested",
        meaning: "berinvestasi",
        type: "common",
        category: "bisnis",
        examples: [
            { sentence: "I want to invest in stocks.", translation: "Saya ingin berinvestasi di saham." },
            { sentence: "They invested millions in the startup.", translation: "Mereka menginvestasikan jutaan di startup." },
            { sentence: "Have you invested in cryptocurrency?", translation: "Apakah kamu sudah berinvestasi di cryptocurrency?" }
        ],
        quiz: { question: "Fill in: We ___ in real estate last year.", options: ["invest", "invested", "invested", "investing"], correct: 1 }
    },
    {
        id: 23,
        v1: "negotiate",
        v2: "negotiated",
        v3: "negotiated",
        meaning: "bernegosiasi",
        type: "common",
        category: "bisnis",
        examples: [
            { sentence: "Let's negotiate the price.", translation: "Mari kita negosiasi harganya." },
            { sentence: "They negotiated a better deal.", translation: "Mereka menegosiasikan kesepakatan yang lebih baik." },
            { sentence: "The contract has been negotiated.", translation: "Kontrak telah dinegosiasikan." }
        ],
        quiz: { question: "Which form? We ___ the terms yesterday.", options: ["negotiate", "negotiated", "negotiated", "negotiating"], correct: 1 }
    },
    {
        id: 24,
        v1: "hire",
        v2: "hired",
        v3: "hired",
        meaning: "mempekerjakan",
        type: "common",
        category: "bisnis",
        examples: [
            { sentence: "We need to hire more staff.", translation: "Kita perlu mempekerjakan lebih banyak staf." },
            { sentence: "They hired a new manager.", translation: "Mereka mempekerjakan manajer baru." },
            { sentence: "She has been hired for the position.", translation: "Dia telah dipekerjakan untuk posisi tersebut." }
        ],
        quiz: { question: "Complete: The company ___ 50 employees.", options: ["hire", "hired", "hired", "hiring"], correct: 1 }
    },
    {
        id: 25,
        v1: "sell",
        v2: "sold",
        v3: "sold",
        meaning: "menjual",
        type: "irregular",
        category: "bisnis",
        examples: [
            { sentence: "I sell products online.", translation: "Saya menjual produk secara online." },
            { sentence: "They sold their house.", translation: "Mereka menjual rumah mereka." },
            { sentence: "The car has been sold.", translation: "Mobilnya telah dijual." }
        ],
        quiz: { question: "Fill in: He ___ his business last month.", options: ["sell", "sold", "sold", "selling"], correct: 1 }
    },
    {
        id: 26,
        v1: "buy",
        v2: "bought",
        v3: "bought",
        meaning: "membeli",
        type: "irregular",
        category: "bisnis",
        examples: [
            { sentence: "I buy groceries every week.", translation: "Saya membeli bahan makanan setiap minggu." },
            { sentence: "She bought a new laptop.", translation: "Dia membeli laptop baru." },
            { sentence: "Have you bought the tickets?", translation: "Apakah kamu sudah membeli tiketnya?" }
        ],
        quiz: { question: "Choose: We ___ shares yesterday.", options: ["buy", "bought", "bought", "buying"], correct: 1 }
    },
    {
        id: 27,
        v1: "meet",
        v2: "met",
        v3: "met",
        meaning: "bertemu",
        type: "irregular",
        category: "bisnis",
        examples: [
            { sentence: "Let's meet at the office.", translation: "Mari kita bertemu di kantor." },
            { sentence: "I met the client yesterday.", translation: "Saya bertemu klien kemarin." },
            { sentence: "Have you met the new CEO?", translation: "Apakah kamu sudah bertemu CEO baru?" }
        ],
        quiz: { question: "Complete: They ___ with investors last week.", options: ["meet", "met", "met", "meeting"], correct: 1 }
    },
    {
        id: 28,
        v1: "present",
        v2: "presented",
        v3: "presented",
        meaning: "mempresentasikan",
        type: "common",
        category: "bisnis",
        examples: [
            { sentence: "I will present the proposal.", translation: "Saya akan mempresentasikan proposal." },
            { sentence: "She presented the annual report.", translation: "Dia mempresentasikan laporan tahunan." },
            { sentence: "The idea has been presented to the board.", translation: "Ide tersebut telah dipresentasikan ke dewan." }
        ],
        quiz: { question: "Fill in: He ___ the project plan yesterday.", options: ["present", "presented", "presented", "presenting"], correct: 1 }
    },
    // SLANG
    {
        id: 29,
        v1: "chill",
        v2: "chilled",
        v3: "chilled",
        meaning: "santai, nongkrong",
        type: "common",
        category: "slang",
        examples: [
            { sentence: "Let's just chill at home.", translation: "Mari kita santai di rumah saja." },
            { sentence: "We chilled at the cafe yesterday.", translation: "Kami nongkrong di kafe kemarin." },
            { sentence: "Have you chilled with friends lately?", translation: "Apakah kamu sudah nongkrong dengan teman-teman akhir-akhir ini?" }
        ],
        quiz: { question: "Complete: They ___ at the park.", options: ["chill", "chilled", "chilled", "chilling"], correct: 1 }
    },
    {
        id: 30,
        v1: "hang",
        v2: "hung",
        v3: "hung",
        meaning: "nongkrong, bergaul",
        type: "irregular",
        category: "slang",
        examples: [
            { sentence: "Let's hang out tonight.", translation: "Mari kita nongkrong malam ini." },
            { sentence: "We hung out at the mall.", translation: "Kami nongkrong di mall." },
            { sentence: "Have you hung out with them?", translation: "Apakah kamu sudah nongkrong dengan mereka?" }
        ],
        quiz: { question: "Fill in: I ___ out with friends last weekend.", options: ["hang", "hung", "hung", "hanging"], correct: 1 }
    },
    {
        id: 31,
        v1: "bail",
        v2: "bailed",
        v3: "bailed",
        meaning: "batal, cabut",
        type: "common",
        category: "slang",
        examples: [
            { sentence: "Don't bail on me!", translation: "Jangan batal!" },
            { sentence: "He bailed on the party.", translation: "Dia batal datang ke pesta." },
            { sentence: "She has bailed on us again.", translation: "Dia sudah batal lagi." }
        ],
        quiz: { question: "Complete: They ___ on the meeting.", options: ["bail", "bailed", "bailed", "bailing"], correct: 1 }
    },
    {
        id: 32,
        v1: "crush",
        v2: "crushed",
        v3: "crushed",
        meaning: "naksir, menyukai",
        type: "common",
        category: "slang",
        examples: [
            { sentence: "I have a crush on her.", translation: "Saya naksir dia." },
            { sentence: "He crushed on his classmate.", translation: "Dia naksir teman sekelasnya." },
            { sentence: "She has crushed on him for months.", translation: "Dia sudah naksir dia selama berbulan-bulan." }
        ],
        quiz: { question: "Fill in: They ___ on each other.", options: ["crush", "crushed", "crushed", "crushing"], correct: 1 }
    },
    // AKADEMIK
    {
        id: 33,
        v1: "study",
        v2: "studied",
        v3: "studied",
        meaning: "belajar",
        type: "common",
        category: "akademik",
        examples: [
            { sentence: "I study English every day.", translation: "Saya belajar bahasa Inggris setiap hari." },
            { sentence: "She studied hard for the exam.", translation: "Dia belajar keras untuk ujian." },
            { sentence: "Have you studied the material?", translation: "Apakah kamu sudah mempelajari materinya?" }
        ],
        quiz: { question: "Complete: We ___ together last night.", options: ["study", "studied", "studied", "studying"], correct: 1 }
    },
    {
        id: 34,
        v1: "research",
        v2: "researched",
        v3: "researched",
        meaning: "meneliti",
        type: "common",
        category: "akademik",
        examples: [
            { sentence: "Scientists research new treatments.", translation: "Ilmuwan meneliti perawatan baru." },
            { sentence: "They researched the topic thoroughly.", translation: "Mereka meneliti topik tersebut dengan teliti." },
            { sentence: "The theory has been researched extensively.", translation: "Teori tersebut telah diteliti secara ekstensif." }
        ],
        quiz: { question: "Fill in: She ___ the subject for years.", options: ["research", "researched", "researched", "researching"], correct: 1 }
    },
    {
        id: 35,
        v1: "analyze",
        v2: "analyzed",
        v3: "analyzed",
        meaning: "menganalisis",
        type: "common",
        category: "akademik",
        examples: [
            { sentence: "Let's analyze the data.", translation: "Mari kita analisis datanya." },
            { sentence: "They analyzed the results carefully.", translation: "Mereka menganalisis hasilnya dengan hati-hati." },
            { sentence: "The problem has been analyzed.", translation: "Masalahnya telah dianalisis." }
        ],
        quiz: { question: "Complete: We ___ the findings yesterday.", options: ["analyze", "analyzed", "analyzed", "analyzing"], correct: 1 }
    },
    {
        id: 36,
        v1: "write",
        v2: "wrote",
        v3: "written",
        meaning: "menulis",
        type: "irregular",
        category: "akademik",
        examples: [
            { sentence: "I write essays for school.", translation: "Saya menulis esai untuk sekolah." },
            { sentence: "She wrote a research paper.", translation: "Dia menulis makalah penelitian." },
            { sentence: "Have you written the report?", translation: "Apakah kamu sudah menulis laporannya?" }
        ],
        quiz: { question: "Fill in: He ___ a thesis last year.", options: ["write", "wrote", "written", "writing"], correct: 1 }
    },
    {
        id: 37,
        v1: "read",
        v2: "read",
        v3: "read",
        meaning: "membaca",
        type: "irregular",
        category: "akademik",
        examples: [
            { sentence: "I read books every night.", translation: "Saya membaca buku setiap malam." },
            { sentence: "She read the entire novel.", translation: "Dia membaca seluruh novel." },
            { sentence: "Have you read this article?", translation: "Apakah kamu sudah membaca artikel ini?" }
        ],
        quiz: { question: "Complete: They ___ the textbook yesterday.", options: ["read", "read", "read", "reading"], correct: 1 }
    },
    // TEKNOLOGI
    {
        id: 38,
        v1: "download",
        v2: "downloaded",
        v3: "downloaded",
        meaning: "mengunduh",
        type: "common",
        category: "teknologi",
        examples: [
            { sentence: "I download apps from the store.", translation: "Saya mengunduh aplikasi dari toko." },
            { sentence: "She downloaded the software.", translation: "Dia mengunduh perangkat lunaknya." },
            { sentence: "Have you downloaded the update?", translation: "Apakah kamu sudah mengunduh pembaruannya?" }
        ],
        quiz: { question: "Fill in: We ___ the file yesterday.", options: ["download", "downloaded", "downloaded", "downloading"], correct: 1 }
    },
    {
        id: 39,
        v1: "upload",
        v2: "uploaded",
        v3: "uploaded",
        meaning: "mengunggah",
        type: "common",
        category: "teknologi",
        examples: [
            { sentence: "I upload photos to the cloud.", translation: "Saya mengunggah foto ke cloud." },
            { sentence: "They uploaded the video.", translation: "Mereka mengunggah videonya." },
            { sentence: "The document has been uploaded.", translation: "Dokumennya telah diunggah." }
        ],
        quiz: { question: "Complete: She ___ the files last night.", options: ["upload", "uploaded", "uploaded", "uploading"], correct: 1 }
    },
    {
        id: 40,
        v1: "code",
        v2: "coded",
        v3: "coded",
        meaning: "membuat kode program",
        type: "common",
        category: "teknologi",
        examples: [
            { sentence: "I code in Python.", translation: "Saya membuat kode dengan Python." },
            { sentence: "She coded the application.", translation: "Dia membuat kode aplikasinya." },
            { sentence: "The program has been coded.", translation: "Programnya telah dibuat kodenya." }
        ],
        quiz: { question: "Fill in: They ___ the website together.", options: ["code", "coded", "coded", "coding"], correct: 1 }
    },
    {
        id: 41,
        v1: "stream",
        v2: "streamed",
        v3: "streamed",
        meaning: "menonton streaming",
        type: "common",
        category: "teknologi",
        examples: [
            { sentence: "I stream movies on Netflix.", translation: "Saya menonton film di Netflix." },
            { sentence: "We streamed the concert live.", translation: "Kami menonton konsernya secara live." },
            { sentence: "Have you streamed this series?", translation: "Apakah kamu sudah menonton serial ini?" }
        ],
        quiz: { question: "Complete: They ___ the game yesterday.", options: ["stream", "streamed", "streamed", "streaming"], correct: 1 }
    },
    {
        id: 42,
        v1: "click",
        v2: "clicked",
        v3: "clicked",
        meaning: "mengklik",
        type: "common",
        category: "teknologi",
        examples: [
            { sentence: "Click the button to continue.", translation: "Klik tombolnya untuk melanjutkan." },
            { sentence: "She clicked on the link.", translation: "Dia mengklik tautannya." },
            { sentence: "The button has been clicked.", translation: "Tombolnya telah diklik." }
        ],
        quiz: { question: "Fill in: I ___ the icon.", options: ["click", "clicked", "clicked", "clicking"], correct: 1 }
    },
    // PERASAAN
    {
        id: 43,
        v1: "feel",
        v2: "felt",
        v3: "felt",
        meaning: "merasa",
        type: "irregular",
        category: "perasaan",
        examples: [
            { sentence: "I feel happy today.", translation: "Saya merasa bahagia hari ini." },
            { sentence: "She felt sad yesterday.", translation: "Dia merasa sedih kemarin." },
            { sentence: "Have you felt better?", translation: "Apakah kamu sudah merasa lebih baik?" }
        ],
        quiz: { question: "Complete: They ___ excited.", options: ["feel", "felt", "felt", "feeling"], correct: 0 }
    },
    {
        id: 44,
        v1: "love",
        v2: "loved",
        v3: "loved",
        meaning: "mencintai",
        type: "common",
        category: "perasaan",
        examples: [
            { sentence: "I love my family.", translation: "Saya mencintai keluarga saya." },
            { sentence: "She loved the movie.", translation: "Dia menyukai filmnya." },
            { sentence: "Have you loved someone?", translation: "Apakah kamu pernah mencintai seseorang?" }
        ],
        quiz: { question: "Fill in: We ___ each other.", options: ["love", "loved", "loved", "loving"], correct: 0 }
    },
    {
        id: 45,
        v1: "hate",
        v2: "hated",
        v3: "hated",
        meaning: "membenci",
        type: "common",
        category: "perasaan",
        examples: [
            { sentence: "I hate waiting.", translation: "Saya benci menunggu." },
            { sentence: "They hated the food.", translation: "Mereka membenci makanannya." },
            { sentence: "She has hated that place.", translation: "Dia sudah membenci tempat itu." }
        ],
        quiz: { question: "Complete: He ___ being late.", options: ["hate", "hated", "hated", "hating"], correct: 0 }
    },
    {
        id: 46,
        v1: "worry",
        v2: "worried",
        v3: "worried",
        meaning: "khawatir",
        type: "common",
        category: "perasaan",
        examples: [
            { sentence: "Don't worry about it.", translation: "Jangan khawatir tentang itu." },
            { sentence: "She worried about the exam.", translation: "Dia khawatir tentang ujiannya." },
            { sentence: "Have you worried about this?", translation: "Apakah kamu sudah khawatir tentang ini?" }
        ],
        quiz: { question: "Fill in: I ___ about you.", options: ["worry", "worried", "worried", "worrying"], correct: 0 }
    },
    {
        id: 47,
        v1: "enjoy",
        v2: "enjoyed",
        v3: "enjoyed",
        meaning: "menikmati",
        type: "common",
        category: "perasaan",
        examples: [
            { sentence: "I enjoy reading books.", translation: "Saya menikmati membaca buku." },
            { sentence: "They enjoyed the party.", translation: "Mereka menikmati pestanya." },
            { sentence: "Have you enjoyed the show?", translation: "Apakah kamu sudah menikmati pertunjukannya?" }
        ],
        quiz: { question: "Complete: We ___ the concert.", options: ["enjoy", "enjoyed", "enjoyed", "enjoying"], correct: 1 }
    },
    // PERJALANAN
    {
        id: 48,
        v1: "travel",
        v2: "travelled",
        v3: "travelled",
        meaning: "bepergian",
        type: "common",
        category: "perjalanan",
        examples: [
            { sentence: "I travel to different countries.", translation: "Saya bepergian ke berbagai negara." },
            { sentence: "They travelled to Japan last year.", translation: "Mereka bepergian ke Jepang tahun lalu." },
            { sentence: "Have you travelled abroad?", translation: "Apakah kamu sudah bepergian ke luar negeri?" }
        ],
        quiz: { question: "Fill in: She ___ around Europe.", options: ["travel", "travelled", "travelled", "travelling"], correct: 1 }
    },
    {
        id: 49,
        v1: "visit",
        v2: "visited",
        v3: "visited",
        meaning: "mengunjungi",
        type: "common",
        category: "perjalanan",
        examples: [
            { sentence: "I visit my grandparents often.", translation: "Saya sering mengunjungi kakek nenek saya." },
            { sentence: "We visited Paris last summer.", translation: "Kami mengunjungi Paris musim panas lalu." },
            { sentence: "Have you visited Indonesia?", translation: "Apakah kamu sudah mengunjungi Indonesia?" }
        ],
        quiz: { question: "Complete: They ___ the museum yesterday.", options: ["visit", "visited", "visited", "visiting"], correct: 1 }
    },
    {
        id: 50,
        v1: "book",
        v2: "booked",
        v3: "booked",
        meaning: "memesan",
        type: "common",
        category: "perjalanan",
        examples: [
            { sentence: "I book hotels online.", translation: "Saya memesan hotel secara online." },
            { sentence: "She booked a flight ticket.", translation: "Dia memesan tiket pesawat." },
            { sentence: "The room has been booked.", translation: "Kamarnya telah dipesan." }
        ],
        quiz: { question: "Fill in: We ___ the tickets last week.", options: ["book", "booked", "booked", "booking"], correct: 1 }
    },
    {
        id: 51,
        v1: "pack",
        v2: "packed",
        v3: "packed",
        meaning: "mengemas",
        type: "common",
        category: "perjalanan",
        examples: [
            { sentence: "I pack my suitcase tonight.", translation: "Saya mengemas koper saya malam ini." },
            { sentence: "She packed her bags yesterday.", translation: "Dia mengemas tasnya kemarin." },
            { sentence: "Have you packed everything?", translation: "Apakah kamu sudah mengemas semuanya?" }
        ],
        quiz: { question: "Complete: They ___ their luggage.", options: ["pack", "packed", "packed", "packing"], correct: 1 }
    },
    // MAKANAN
    {
        id: 52,
        v1: "cook",
        v2: "cooked",
        v3: "cooked",
        meaning: "memasak",
        type: "common",
        category: "makanan",
        examples: [
            { sentence: "I cook dinner every night.", translation: "Saya memasak makan malam setiap malam." },
            { sentence: "She cooked a delicious meal.", translation: "Dia memasak makanan yang lezat." },
            { sentence: "The food has been cooked.", translation: "Makanannya telah dimasak." }
        ],
        quiz: { question: "Fill in: We ___ pasta yesterday.", options: ["cook", "cooked", "cooked", "cooking"], correct: 1 }
    },
    {
        id: 53,
        v1: "taste",
        v2: "tasted",
        v3: "tasted",
        meaning: "mencicipi",
        type: "common",
        category: "makanan",
        examples: [
            { sentence: "Taste this soup, it's delicious.", translation: "Cicipi sup ini, enak sekali." },
            { sentence: "She tasted the wine.", translation: "Dia mencicipi anggurnya." },
            { sentence: "Have you tasted this dish?", translation: "Apakah kamu sudah mencicipi hidangan ini?" }
        ],
        quiz: { question: "Complete: I ___ the cake.", options: ["taste", "tasted", "tasted", "tasting"], correct: 1 }
    },
    {
        id: 54,
        v1: "order",
        v2: "ordered",
        v3: "ordered",
        meaning: "memesan",
        type: "common",
        category: "makanan",
        examples: [
            { sentence: "I order pizza for delivery.", translation: "Saya memesan pizza untuk diantar." },
            { sentence: "They ordered Chinese food.", translation: "Mereka memesan makanan Cina." },
            { sentence: "The meal has been ordered.", translation: "Makanannya telah dipesan." }
        ],
        quiz: { question: "Fill in: We ___ sushi last night.", options: ["order", "ordered", "ordered", "ordering"], correct: 1 }
    },
    {
        id: 55,
        v1: "drink",
        v2: "drank",
        v3: "drunk",
        meaning: "minum",
        type: "irregular",
        category: "makanan",
        examples: [
            { sentence: "I drink coffee every morning.", translation: "Saya minum kopi setiap pagi." },
            { sentence: "She drank a glass of water.", translation: "Dia minum segelas air." },
            { sentence: "Have you drunk enough water?", translation: "Apakah kamu sudah minum air yang cukup?" }
        ],
        quiz: { question: "Complete: They ___ tea together.", options: ["drink", "drank", "drunk", "drinking"], correct: 1 }
    },
    // OLAHRAGA
    {
        id: 56,
        v1: "play",
        v2: "played",
        v3: "played",
        meaning: "bermain",
        type: "common",
        category: "olahraga",
        examples: [
            { sentence: "I play football every weekend.", translation: "Saya bermain sepak bola setiap akhir pekan." },
            { sentence: "They played basketball yesterday.", translation: "Mereka bermain basket kemarin." },
            { sentence: "Have you played tennis before?", translation: "Apakah kamu pernah bermain tenis sebelumnya?" }
        ],
        quiz: { question: "Fill in: We ___ volleyball last week.", options: ["play", "played", "played", "playing"], correct: 1 }
    },
    {
        id: 57,
        v1: "run",
        v2: "ran",
        v3: "run",
        meaning: "berlari",
        type: "irregular",
        category: "olahraga",
        examples: [
            { sentence: "I run in the park every morning.", translation: "Saya berlari di taman setiap pagi." },
            { sentence: "She ran a marathon.", translation: "Dia berlari maraton." },
            { sentence: "Have you run 5 kilometers?", translation: "Apakah kamu sudah berlari 5 kilometer?" }
        ],
        quiz: { question: "Complete: They ___ 10km yesterday.", options: ["run", "ran", "run", "running"], correct: 1 }
    },
    {
        id: 58,
        v1: "swim",
        v2: "swam",
        v3: "swum",
        meaning: "berenang",
        type: "irregular",
        category: "olahraga",
        examples: [
            { sentence: "I swim at the pool.", translation: "Saya berenang di kolam renang." },
            { sentence: "They swam in the ocean.", translation: "Mereka berenang di laut." },
            { sentence: "Have you swum here before?", translation: "Apakah kamu pernah berenang di sini sebelumnya?" }
        ],
        quiz: { question: "Fill in: She ___ across the lake.", options: ["swim", "swam", "swum", "swimming"], correct: 1 }
    },
    {
        id: 59,
        v1: "jump",
        v2: "jumped",
        v3: "jumped",
        meaning: "melompat",
        type: "common",
        category: "olahraga",
        examples: [
            { sentence: "I jump rope for exercise.", translation: "Saya lompat tali untuk olahraga." },
            { sentence: "He jumped over the fence.", translation: "Dia melompati pagar." },
            { sentence: "The athlete has jumped 2 meters.", translation: "Atlet tersebut telah melompat 2 meter." }
        ],
        quiz: { question: "Complete: They ___ high.", options: ["jump", "jumped", "jumped", "jumping"], correct: 1 }
    },
    {
        id: 60,
        v1: "win",
        v2: "won",
        v3: "won",
        meaning: "menang",
        type: "irregular",
        category: "olahraga",
        examples: [
            { sentence: "I want to win the game.", translation: "Saya ingin menang permainannya." },
            { sentence: "They won the championship.", translation: "Mereka memenangkan kejuaraan." },
            { sentence: "Have you won any medals?", translation: "Apakah kamu sudah memenangkan medali?" }
        ],
        quiz: { question: "Fill in: She ___ the race.", options: ["win", "won", "won", "winning"], correct: 1 }
    },
    // KESEHATAN
    {
        id: 61,
        v1: "exercise",
        v2: "exercised",
        v3: "exercised",
        meaning: "berolahraga",
        type: "common",
        category: "kesehatan",
        examples: [
            { sentence: "I exercise three times a week.", translation: "Saya berolahraga tiga kali seminggu." },
            { sentence: "She exercised at the gym.", translation: "Dia berolahraga di gym." },
            { sentence: "Have you exercised today?", translation: "Apakah kamu sudah berolahraga hari ini?" }
        ],
        quiz: { question: "Complete: We ___ yesterday morning.", options: ["exercise", "exercised", "exercised", "exercising"], correct: 1 }
    },
    {
        id: 62,
        v1: "sleep",
        v2: "slept",
        v3: "slept",
        meaning: "tidur",
        type: "irregular",
        category: "kesehatan",
        examples: [
            { sentence: "I sleep 8 hours every night.", translation: "Saya tidur 8 jam setiap malam." },
            { sentence: "She slept well last night.", translation: "Dia tidur nyenyak tadi malam." },
            { sentence: "Have you slept enough?", translation: "Apakah kamu sudah tidur cukup?" }
        ],
        quiz: { question: "Fill in: They ___ early yesterday.", options: ["sleep", "slept", "slept", "sleeping"], correct: 1 }
    },
    {
        id: 63,
        v1: "rest",
        v2: "rested",
        v3: "rested",
        meaning: "beristirahat",
        type: "common",
        category: "kesehatan",
        examples: [
            { sentence: "I rest after work.", translation: "Saya beristirahat setelah bekerja." },
            { sentence: "She rested for an hour.", translation: "Dia beristirahat selama satu jam." },
            { sentence: "Have you rested enough?", translation: "Apakah kamu sudah beristirahat cukup?" }
        ],
        quiz: { question: "Complete: We ___ at home.", options: ["rest", "rested", "rested", "resting"], correct: 1 }
    },
    {
        id: 64,
        v1: "heal",
        v2: "healed",
        v3: "healed",
        meaning: "sembuh",
        type: "common",
        category: "kesehatan",
        examples: [
            { sentence: "The wound will heal soon.", translation: "Lukanya akan sembuh segera." },
            { sentence: "The injury healed completely.", translation: "Cederanya sembuh sepenuhnya." },
            { sentence: "Has the cut healed?", translation: "Apakah luka sayatnya sudah sembuh?" }
        ],
        quiz: { question: "Fill in: The bone ___ properly.", options: ["heal", "healed", "healed", "healing"], correct: 1 }
    },
    {
        id: 65,
        v1: "cure",
        v2: "cured",
        v3: "cured",
        meaning: "menyembuhkan",
        type: "common",
        category: "kesehatan",
        examples: [
            { sentence: "Doctors cure diseases.", translation: "Dokter menyembuhkan penyakit." },
            { sentence: "The medicine cured him.", translation: "Obatnya menyembuhkannya." },
            { sentence: "The disease has been cured.", translation: "Penyakitnya telah disembuhkan." }
        ],
        quiz: { question: "Complete: They ___ the patient.", options: ["cure", "cured", "cured", "curing"], correct: 1 }
    },
    // SEHARI-HARI (tambahan)
    {
        id: 66,
        v1: "speak",
        v2: "spoke",
        v3: "spoken",
        meaning: "berbicara",
        type: "irregular",
        category: "sehari-hari",
        examples: [
            { sentence: "I speak English fluently.", translation: "Saya berbicara bahasa Inggris dengan lancar." },
            { sentence: "She spoke to the manager.", translation: "Dia berbicara dengan manajer." },
            { sentence: "Have you spoken with him?", translation: "Apakah kamu sudah berbicara dengannya?" }
        ],
        quiz: { question: "Fill in: We ___ about the project.", options: ["speak", "spoke", "spoken", "speaking"], correct: 1 }
    },
    {
        id: 67,
        v1: "listen",
        v2: "listened",
        v3: "listened",
        meaning: "mendengarkan",
        type: "common",
        category: "sehari-hari",
        examples: [
            { sentence: "I listen to music every day.", translation: "Saya mendengarkan musik setiap hari." },
            { sentence: "They listened to the lecture.", translation: "Mereka mendengarkan kuliahnya." },
            { sentence: "Have you listened to this song?", translation: "Apakah kamu sudah mendengarkan lagu ini?" }
        ],
        quiz: { question: "Complete: She ___ carefully.", options: ["listen", "listened", "listened", "listening"], correct: 1 }
    },
    {
        id: 68,
        v1: "watch",
        v2: "watched",
        v3: "watched",
        meaning: "menonton",
        type: "common",
        category: "sehari-hari",
        examples: [
            { sentence: "I watch TV in the evening.", translation: "Saya menonton TV di malam hari." },
            { sentence: "We watched a movie yesterday.", translation: "Kami menonton film kemarin." },
            { sentence: "Have you watched this series?", translation: "Apakah kamu sudah menonton serial ini?" }
        ],
        quiz: { question: "Fill in: They ___ the game.", options: ["watch", "watched", "watched", "watching"], correct: 1 }
    },
    {
        id: 69,
        v1: "clean",
        v2: "cleaned",
        v3: "cleaned",
        meaning: "membersihkan",
        type: "common",
        category: "sehari-hari",
        examples: [
            { sentence: "I clean my room every week.", translation: "Saya membersihkan kamar saya setiap minggu." },
            { sentence: "She cleaned the house.", translation: "Dia membersihkan rumahnya." },
            { sentence: "The room has been cleaned.", translation: "Kamarnya telah dibersihkan." }
        ],
        quiz: { question: "Complete: We ___ the kitchen.", options: ["clean", "cleaned", "cleaned", "cleaning"], correct: 1 }
    },
    {
        id: 70,
        v1: "wash",
        v2: "washed",
        v3: "washed",
        meaning: "mencuci",
        type: "common",
        category: "sehari-hari",
        examples: [
            { sentence: "I wash my hands before eating.", translation: "Saya mencuci tangan sebelum makan." },
            { sentence: "She washed the dishes.", translation: "Dia mencuci piringnya." },
            { sentence: "The clothes have been washed.", translation: "Pakaiannya telah dicuci." }
        ],
        quiz: { question: "Fill in: They ___ the car.", options: ["wash", "washed", "washed", "washing"], correct: 1 }
    }
];

let currentCategory = "all";
let currentType = "all";
let currentLevel = "all";
let currentQuiz = null;
let currentPage = 1;
const itemsPerPage = 12; // 12 items per page

// Category colors mapping
const categoryColors = {
    'sehari-hari': '#6366f1', 'perasaan': '#f59e0b', 'keluarga': '#ec4899', 'teman': '#8b5cf6',
    'bisnis': '#8b5cf6', 'marketing': '#a855f7', 'keuangan': '#06b6d4', 'hr': '#10b981', 'sales': '#f59e0b',
    'akademik': '#06b6d4', 'sains': '#3b82f6', 'matematika': '#6366f1', 'sejarah': '#ef4444', 'literatur': '#ec4899',
    'teknologi': '#10b981', 'programming': '#14b8a6', 'ai': '#06b6d4', 'cybersecurity': '#ef4444',
    'makanan': '#ef4444', 'fashion': '#ec4899', 'kecantikan': '#f59e0b', 'hobi': '#84cc16', 'musik': '#8b5cf6', 'film': '#6366f1',
    'kesehatan': '#84cc16', 'olahraga': '#14b8a6', 'fitness': '#10b981', 'medis': '#06b6d4',
    'perjalanan': '#3b82f6', 'hotel': '#6366f1', 'transportasi': '#06b6d4',
    'slang': '#ec4899', 'formal': '#8b5cf6', 'hukum': '#6366f1', 'politik': '#ef4444', 'lingkungan': '#10b981'
};

// Level mapping
const levelMapping = {
    'beginner': ['go', 'eat', 'see', 'take', 'come', 'get', 'make', 'know', 'think', 'give', 'find', 'tell', 'work', 'call', 'try', 'ask', 'need', 'want', 'use', 'help'],
    'intermediate': ['manage', 'invest', 'negotiate', 'analyze', 'research', 'develop', 'create', 'design', 'implement', 'evaluate', 'improve', 'optimize', 'organize', 'coordinate', 'supervise', 'train', 'guide', 'lead', 'direct', 'execute'],
    'advanced': ['synthesize', 'elucidate', 'institutionalize', 'systematize', 'methodize', 'standardize', 'commercialize', 'monetize', 'capitalize', 'leverage', 'differentiate', 'distinguish', 'comprehend', 'apprehend', 'comprehend', 'apprehend', 'comprehend', 'apprehend', 'comprehend', 'apprehend']
};

// Verb forms database untuk irregular verbs
const irregularVerbs = {
    'go': { v2: 'went', v3: 'gone' },
    'eat': { v2: 'ate', v3: 'eaten' },
    'see': { v2: 'saw', v3: 'seen' },
    'take': { v2: 'took', v3: 'taken' },
    'come': { v2: 'came', v3: 'come' },
    'get': { v2: 'got', v3: 'gotten' },
    'make': { v2: 'made', v3: 'made' },
    'know': { v2: 'knew', v3: 'known' },
    'think': { v2: 'thought', v3: 'thought' },
    'give': { v2: 'gave', v3: 'given' },
    'find': { v2: 'found', v3: 'found' },
    'tell': { v2: 'told', v3: 'told' },
    'buy': { v2: 'bought', v3: 'bought' },
    'sell': { v2: 'sold', v3: 'sold' },
    'meet': { v2: 'met', v3: 'met' },
    'write': { v2: 'wrote', v3: 'written' },
    'read': { v2: 'read', v3: 'read' },
    'speak': { v2: 'spoke', v3: 'spoken' },
    'feel': { v2: 'felt', v3: 'felt' },
    'run': { v2: 'ran', v3: 'run' },
    'swim': { v2: 'swam', v3: 'swum' },
    'win': { v2: 'won', v3: 'won' },
    'sleep': { v2: 'slept', v3: 'slept' },
    'drink': { v2: 'drank', v3: 'drunk' },
    'hang': { v2: 'hung', v3: 'hung' }
};

// Helper function untuk menentukan level berdasarkan verb
function determineLevel(verb) {
    const verbLower = verb.toLowerCase();
    if (levelMapping.beginner.some(v => verbLower === v)) {
        return 'beginner';
    } else if (levelMapping.intermediate.some(v => verbLower === v || verbLower.includes(v))) {
        return 'intermediate';
    } else if (levelMapping.advanced.some(v => verbLower === v || verbLower.includes(v))) {
        return 'advanced';
    }
    // Default berdasarkan kompleksitas kata
    if (verb.length <= 4) return 'beginner';
    if (verb.length <= 7) return 'intermediate';
    return 'advanced';
}

// Helper function untuk mendapatkan verb forms
function getVerbForms(verb) {
    const lowerVerb = verb.toLowerCase();
    if (irregularVerbs[lowerVerb]) {
        return {
            v1: lowerVerb,
            v2: irregularVerbs[lowerVerb].v2,
            v3: irregularVerbs[lowerVerb].v3,
            type: 'irregular'
        };
    } else {
        // Regular verb
        let v2;
        if (lowerVerb.endsWith('e')) {
            v2 = lowerVerb + 'd';
        } else if (lowerVerb.match(/[^aeiou]y$/)) {
            v2 = lowerVerb.slice(0, -1) + 'ied';
        } else if (lowerVerb.match(/[aeiou][^aeiou]$/)) {
            v2 = lowerVerb + lowerVerb.slice(-1) + 'ed';
        } else {
            v2 = lowerVerb + 'ed';
        }
        return {
            v1: lowerVerb,
            v2: v2,
            v3: v2,
            type: 'common'
        };
    }
}

// Function untuk translate ke bahasa Indonesia
async function translateToIndonesian(text) {
    try {
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|id`);
        const data = await response.json();
        if (data.responseData && data.responseData.translatedText) {
            return data.responseData.translatedText;
        }
        return text;
    } catch (error) {
        console.error('Translation error:', error);
        return text;
    }
}

// Function untuk fetch dari Free Dictionary API
async function fetchWordFromAPI(word) {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
        if (!response.ok) {
            throw new Error('Word not found');
        }
        const data = await response.json();
        
        if (data && data.length > 0) {
            const wordData = data[0];
            const meanings = wordData.meanings || [];
            
            // Ambil definisi pertama
            let definition = '';
            let examples = [];
            
            if (meanings.length > 0) {
                const firstMeaning = meanings[0];
                if (firstMeaning.definitions && firstMeaning.definitions.length > 0) {
                    definition = firstMeaning.definitions[0].definition;
                    // Ambil contoh kalimat
                    firstMeaning.definitions.forEach(def => {
                        if (def.example) {
                            examples.push(def.example);
                        }
                    });
                }
            }
            
            // Translate definition
            const translatedDefinition = await translateToIndonesian(definition || word);
            
            // Translate examples
            const translatedExamples = [];
            for (let i = 0; i < Math.min(examples.length, 3); i++) {
                const translated = await translateToIndonesian(examples[i]);
                translatedExamples.push({
                    sentence: examples[i],
                    translation: translated
                });
            }
            
            // Jika tidak ada contoh dari API, buat contoh sederhana
            if (translatedExamples.length === 0) {
                translatedExamples.push({
                    sentence: `I ${word} every day.`,
                    translation: await translateToIndonesian(`I ${word} every day.`)
                });
            }
            
            // Get verb forms
            const verbForms = getVerbForms(word);
            
            // Generate quiz
            const quizOptions = [verbForms.v1, verbForms.v2, verbForms.v3, verbForms.v1 + 'ing'];
            const quiz = {
                question: `Complete: I ___ ${word} yesterday.`,
                options: quizOptions,
                correct: 1
            };
            
            // Determine category (simple heuristic)
            let category = 'sehari-hari';
            const wordLower = word.toLowerCase();
            if (wordLower.includes('manage') || wordLower.includes('invest') || wordLower.includes('sell') || wordLower.includes('buy')) {
                category = 'bisnis';
            } else if (wordLower.includes('code') || wordLower.includes('download') || wordLower.includes('upload') || wordLower.includes('click')) {
                category = 'teknologi';
            } else if (wordLower.includes('study') || wordLower.includes('research') || wordLower.includes('analyze')) {
                category = 'akademik';
            } else if (wordLower.includes('cook') || wordLower.includes('eat') || wordLower.includes('drink') || wordLower.includes('taste')) {
                category = 'makanan';
            } else if (wordLower.includes('play') || wordLower.includes('run') || wordLower.includes('swim') || wordLower.includes('jump')) {
                category = 'olahraga';
            } else if (wordLower.includes('feel') || wordLower.includes('love') || wordLower.includes('hate') || wordLower.includes('worry')) {
                category = 'perasaan';
            } else if (wordLower.includes('travel') || wordLower.includes('visit') || wordLower.includes('book') || wordLower.includes('pack')) {
                category = 'perjalanan';
            } else if (wordLower.includes('sleep') || wordLower.includes('rest') || wordLower.includes('heal') || wordLower.includes('cure')) {
                category = 'kesehatan';
            }
            
            const level = determineLevel(word);
            
            return {
                id: vocabularyData.length + 1,
                v1: verbForms.v1,
                v2: verbForms.v2,
                v3: verbForms.v3,
                meaning: translatedDefinition,
                type: verbForms.type,
                category: category,
                level: level,
                examples: translatedExamples,
                quiz: quiz
            };
        }
        throw new Error('No data found');
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

// Function untuk generate bulk vocabulary
async function generateBulkVocabulary() {
    const loadingIndicator = document.getElementById('loadingIndicator');
    const categories = ['sehari-hari', 'perasaan', 'keluarga', 'teman', 'bisnis', 'marketing', 'keuangan', 'hr', 'sales', 'akademik', 'sains', 'matematika', 'sejarah', 'literatur', 'teknologi', 'programming', 'ai', 'cybersecurity', 'makanan', 'fashion', 'kecantikan', 'hobi', 'musik', 'film', 'kesehatan', 'olahraga', 'fitness', 'medis', 'perjalanan', 'hotel', 'transportasi', 'slang', 'formal', 'hukum', 'politik', 'lingkungan'];
    const vocabPerCategory = 100;
    
    // Common verb patterns untuk generate
    const verbPatterns = {
        'sehari-hari': ['do', 'say', 'get', 'make', 'go', 'know', 'think', 'take', 'see', 'come', 'want', 'use', 'find', 'give', 'tell', 'work', 'call', 'try', 'ask', 'need', 'feel', 'become', 'leave', 'put', 'mean', 'keep', 'let', 'begin', 'seem', 'help', 'show', 'hear', 'play', 'run', 'move', 'like', 'live', 'believe', 'bring', 'happen', 'write', 'sit', 'stand', 'lose', 'pay', 'meet', 'include', 'continue', 'set', 'learn', 'change', 'lead', 'understand', 'watch', 'follow', 'stop', 'create', 'speak', 'read', 'spend', 'grow', 'open', 'walk', 'win', 'offer', 'remember', 'love', 'consider', 'appear', 'buy', 'wait', 'serve', 'die', 'send', 'build', 'stay', 'fall', 'cut', 'reach', 'kill', 'raise', 'pass', 'sell', 'decide', 'return', 'explain', 'develop', 'carry', 'break', 'receive', 'agree', 'support', 'hit', 'produce', 'eat', 'cover', 'catch', 'draw', 'choose'],
        'keluarga': ['love', 'care', 'support', 'protect', 'nurture', 'raise', 'teach', 'guide', 'discipline', 'encourage', 'praise', 'scold', 'forgive', 'trust', 'respect', 'honor', 'cherish', 'treasure', 'value', 'appreciate', 'admire', 'adore', 'worship', 'idolize', 'revere', 'venerate', 'honor', 'praise', 'compliment', 'flatter', 'charm', 'captivate', 'enchant', 'bewitch', 'mesmerize', 'hypnotize', 'fascinate', 'intrigue', 'interest', 'attract', 'draw', 'pull', 'lure', 'entice', 'tempt', 'seduce', 'allure'],
        'teman': ['befriend', 'meet', 'greet', 'welcome', 'introduce', 'socialize', 'mingle', 'chat', 'talk', 'converse', 'discuss', 'share', 'exchange', 'communicate', 'connect', 'bond', 'unite', 'join', 'associate', 'accompany', 'follow', 'support', 'help', 'assist', 'aid', 'back', 'endorse', 'approve', 'sanction', 'authorize', 'permit', 'allow', 'enable', 'facilitate'],
        'marketing': ['promote', 'advertise', 'publicize', 'brand', 'position', 'market', 'sell', 'pitch', 'present', 'demonstrate', 'showcase', 'highlight', 'emphasize', 'feature', 'spotlight', 'launch', 'release', 'introduce', 'unveil', 'reveal', 'announce', 'declare', 'proclaim', 'broadcast', 'disseminate', 'spread', 'circulate', 'distribute', 'share', 'post', 'publish', 'upload', 'upload', 'stream', 'live', 'broadcast', 'telecast', 'webcast', 'podcast', 'vlog', 'blog', 'tweet', 'post', 'share', 'like', 'comment', 'reply', 'retweet', 'repost', 'forward', 'send', 'deliver', 'dispatch', 'distribute', 'allocate', 'assign', 'delegate', 'authorize', 'authenticate', 'verify', 'validate', 'confirm', 'approve', 'reject', 'deny', 'block', 'allow', 'permit', 'grant', 'revoke', 'cancel', 'terminate'],
        'keuangan': ['invest', 'save', 'spend', 'budget', 'allocate', 'distribute', 'dispense', 'administer', 'manage', 'handle', 'control', 'regulate', 'govern', 'direct', 'guide', 'lead', 'steer', 'navigate', 'pilot', 'drive', 'operate', 'run', 'execute', 'perform', 'carry', 'out', 'implement', 'apply', 'utilize', 'use', 'employ', 'leverage', 'exploit', 'capitalize', 'maximize', 'optimize', 'enhance', 'improve', 'refine', 'polish', 'perfect', 'complete', 'finish', 'finalize', 'publish', 'deploy', 'release', 'launch', 'rollout'],
        'hr': ['hire', 'recruit', 'interview', 'screen', 'evaluate', 'assess', 'rate', 'rank', 'compare', 'contrast', 'benchmark', 'standardize', 'customize', 'personalize', 'tailor', 'adapt', 'adjust', 'modify', 'refine', 'enhance', 'upgrade', 'update', 'maintain', 'sustain', 'preserve', 'protect', 'secure', 'safeguard', 'insure', 'guarantee', 'warrant', 'promise', 'commit', 'deliver', 'fulfill', 'satisfy', 'exceed', 'surpass', 'outperform', 'outdo', 'outshine', 'excel', 'succeed', 'achieve', 'accomplish', 'attain', 'reach', 'obtain', 'gain', 'earn', 'profit', 'benefit', 'advantage', 'leverage', 'utilize', 'exploit', 'capitalize', 'monetize', 'commercialize'],
        'sales': ['sell', 'pitch', 'present', 'demonstrate', 'showcase', 'highlight', 'emphasize', 'feature', 'spotlight', 'launch', 'release', 'introduce', 'unveil', 'reveal', 'announce', 'declare', 'proclaim', 'broadcast', 'disseminate', 'spread', 'circulate', 'distribute', 'share', 'post', 'publish', 'upload', 'stream', 'live', 'broadcast', 'telecast', 'webcast', 'podcast', 'vlog', 'blog', 'tweet', 'post', 'share', 'like', 'comment', 'reply', 'retweet', 'repost', 'forward', 'send', 'deliver', 'dispatch'],
        'sains': ['research', 'experiment', 'test', 'analyze', 'examine', 'investigate', 'explore', 'discover', 'identify', 'define', 'explain', 'describe', 'discuss', 'argue', 'debate', 'critique', 'evaluate', 'assess', 'compare', 'contrast', 'synthesize', 'summarize', 'paraphrase', 'cite', 'reference', 'quote', 'document', 'record', 'note', 'observe', 'measure', 'calculate', 'compute', 'derive', 'prove', 'demonstrate', 'illustrate', 'exemplify', 'clarify', 'elucidate', 'interpret', 'translate', 'transform', 'convert', 'adapt', 'modify', 'revise', 'edit', 'proofread', 'review', 'revise', 'rewrite', 'redraft', 'rework', 'refine', 'polish', 'perfect', 'complete', 'finish', 'conclude', 'summarize', 'abstract', 'extract', 'distill', 'condense', 'compress', 'expand', 'elaborate', 'develop', 'build', 'construct', 'create', 'formulate', 'devise', 'design', 'plan', 'organize', 'structure', 'arrange', 'order', 'sequence', 'categorize', 'classify', 'group', 'sort', 'rank', 'prioritize', 'hierarchy', 'taxonomy', 'systematize', 'methodize', 'standardize', 'normalize', 'regularize', 'formalize', 'institutionalize'],
        'matematika': ['calculate', 'compute', 'solve', 'derive', 'prove', 'demonstrate', 'illustrate', 'exemplify', 'clarify', 'elucidate', 'interpret', 'translate', 'transform', 'convert', 'adapt', 'modify', 'revise', 'edit', 'proofread', 'review', 'revise', 'rewrite', 'redraft', 'rework', 'refine', 'polish', 'perfect', 'complete', 'finish', 'conclude', 'summarize', 'abstract', 'extract', 'distill', 'condense', 'compress', 'expand', 'elaborate', 'develop', 'build', 'construct', 'create', 'formulate', 'devise', 'design', 'plan', 'organize', 'structure', 'arrange', 'order', 'sequence', 'categorize', 'classify', 'group', 'sort', 'rank', 'prioritize', 'hierarchy', 'taxonomy', 'systematize', 'methodize', 'standardize', 'normalize', 'regularize', 'formalize', 'institutionalize'],
        'sejarah': ['study', 'research', 'analyze', 'examine', 'investigate', 'explore', 'discover', 'identify', 'define', 'explain', 'describe', 'discuss', 'argue', 'debate', 'critique', 'evaluate', 'assess', 'compare', 'contrast', 'synthesize', 'summarize', 'paraphrase', 'cite', 'reference', 'quote', 'document', 'record', 'note', 'observe', 'measure', 'calculate', 'compute', 'derive', 'prove', 'demonstrate', 'illustrate', 'exemplify', 'clarify', 'elucidate', 'interpret', 'translate', 'transform', 'convert', 'adapt', 'modify', 'revise', 'edit', 'proofread', 'review', 'revise', 'rewrite', 'redraft', 'rework', 'refine', 'polish', 'perfect', 'complete', 'finish', 'conclude', 'summarize', 'abstract', 'extract', 'distill', 'condense', 'compress', 'expand', 'elaborate', 'develop', 'build', 'construct', 'create', 'formulate', 'devise', 'design', 'plan', 'organize', 'structure', 'arrange', 'order', 'sequence', 'categorize', 'classify', 'group', 'sort', 'rank', 'prioritize', 'hierarchy', 'taxonomy', 'systematize', 'methodize', 'standardize', 'normalize', 'regularize', 'formalize', 'institutionalize'],
        'literatur': ['write', 'read', 'compose', 'create', 'author', 'publish', 'edit', 'revise', 'rewrite', 'redraft', 'rework', 'refine', 'polish', 'perfect', 'complete', 'finish', 'conclude', 'summarize', 'abstract', 'extract', 'distill', 'condense', 'compress', 'expand', 'elaborate', 'develop', 'build', 'construct', 'formulate', 'devise', 'design', 'plan', 'organize', 'structure', 'arrange', 'order', 'sequence', 'categorize', 'classify', 'group', 'sort', 'rank', 'prioritize', 'hierarchy', 'taxonomy', 'systematize', 'methodize', 'standardize', 'normalize', 'regularize', 'formalize', 'institutionalize'],
        'programming': ['code', 'program', 'develop', 'create', 'build', 'construct', 'design', 'engineer', 'manufacture', 'produce', 'make', 'fabricate', 'assemble', 'install', 'setup', 'configure', 'customize', 'personalize', 'tailor', 'adapt', 'adjust', 'modify', 'refine', 'enhance', 'upgrade', 'update', 'maintain', 'sustain', 'preserve', 'protect', 'secure', 'safeguard', 'insure', 'guarantee', 'warrant', 'promise', 'commit', 'deliver', 'fulfill', 'satisfy', 'exceed', 'surpass', 'outperform', 'outdo', 'outshine', 'excel', 'succeed', 'achieve', 'accomplish', 'attain', 'reach', 'obtain', 'gain', 'earn', 'profit', 'benefit', 'advantage', 'leverage', 'utilize', 'exploit', 'capitalize', 'maximize', 'optimize'],
        'ai': ['train', 'learn', 'predict', 'classify', 'recognize', 'identify', 'detect', 'analyze', 'process', 'compute', 'calculate', 'derive', 'prove', 'demonstrate', 'illustrate', 'exemplify', 'clarify', 'elucidate', 'interpret', 'translate', 'transform', 'convert', 'adapt', 'modify', 'revise', 'edit', 'proofread', 'review', 'revise', 'rewrite', 'redraft', 'rework', 'refine', 'polish', 'perfect', 'complete', 'finish', 'conclude', 'summarize', 'abstract', 'extract', 'distill', 'condense', 'compress', 'expand', 'elaborate', 'develop', 'build', 'construct', 'create', 'formulate', 'devise', 'design', 'plan', 'organize', 'structure', 'arrange', 'order', 'sequence', 'categorize', 'classify', 'group', 'sort', 'rank', 'prioritize', 'hierarchy', 'taxonomy', 'systematize', 'methodize', 'standardize', 'normalize', 'regularize', 'formalize', 'institutionalize'],
        'cybersecurity': ['secure', 'protect', 'defend', 'shield', 'guard', 'watch', 'monitor', 'observe', 'supervise', 'oversee', 'manage', 'control', 'regulate', 'govern', 'direct', 'guide', 'lead', 'steer', 'navigate', 'pilot', 'drive', 'operate', 'run', 'execute', 'perform', 'carry', 'out', 'implement', 'apply', 'utilize', 'use', 'employ', 'leverage', 'exploit', 'capitalize', 'maximize', 'optimize', 'enhance', 'improve', 'refine', 'polish', 'perfect', 'complete', 'finish', 'finalize', 'publish', 'deploy', 'release', 'launch', 'rollout'],
        'fashion': ['design', 'create', 'make', 'produce', 'manufacture', 'fabricate', 'assemble', 'install', 'setup', 'configure', 'customize', 'personalize', 'tailor', 'adapt', 'adjust', 'modify', 'refine', 'enhance', 'upgrade', 'update', 'maintain', 'sustain', 'preserve', 'protect', 'secure', 'safeguard', 'insure', 'guarantee', 'warrant', 'promise', 'commit', 'deliver', 'fulfill', 'satisfy', 'exceed', 'surpass', 'outperform', 'outdo', 'outshine', 'excel', 'succeed', 'achieve', 'accomplish', 'attain', 'reach', 'obtain', 'gain', 'earn', 'profit', 'benefit', 'advantage', 'leverage', 'utilize', 'exploit', 'capitalize', 'maximize', 'optimize'],
        'kecantikan': ['apply', 'use', 'utilize', 'employ', 'leverage', 'exploit', 'capitalize', 'maximize', 'optimize', 'enhance', 'improve', 'refine', 'polish', 'perfect', 'complete', 'finish', 'finalize', 'publish', 'deploy', 'release', 'launch', 'rollout', 'implement', 'integrate', 'merge', 'combine', 'split', 'separate', 'divide', 'partition', 'segment', 'categorize', 'classify', 'tag', 'label', 'mark', 'flag', 'bookmark', 'favorite', 'like', 'share', 'comment', 'reply', 'forward', 'redirect', 'route', 'navigate', 'browse', 'search', 'find', 'locate', 'discover', 'explore', 'investigate', 'examine', 'inspect', 'review', 'audit', 'monitor', 'track', 'log', 'record', 'document', 'archive', 'backup', 'restore', 'recover', 'retrieve', 'fetch', 'pull', 'push', 'sync', 'synchronize'],
        'hobi': ['enjoy', 'practice', 'play', 'engage', 'participate', 'join', 'enter', 'register', 'sign', 'up', 'enroll', 'enlist', 'recruit', 'draft', 'select', 'choose', 'pick', 'elect', 'vote', 'decide', 'determine', 'resolve', 'settle', 'conclude', 'finish', 'complete', 'end', 'terminate', 'stop', 'cease', 'halt', 'pause', 'suspend', 'interrupt', 'disrupt', 'disturb', 'bother', 'annoy', 'irritate', 'exasperate', 'frustrate', 'aggravate', 'provoke', 'incite', 'instigate', 'stir', 'up', 'rouse', 'arouse', 'awaken', 'wake', 'up', 'revive', 'revitalize', 'rejuvenate', 'refresh', 'renew', 'restore'],
        'musik': ['play', 'sing', 'perform', 'compose', 'create', 'write', 'record', 'produce', 'mix', 'master', 'edit', 'arrange', 'orchestrate', 'conduct', 'direct', 'lead', 'guide', 'teach', 'instruct', 'educate', 'train', 'coach', 'mentor', 'practice', 'rehearse', 'perform', 'execute', 'deliver', 'present', 'showcase', 'highlight', 'emphasize', 'feature', 'spotlight', 'launch', 'release', 'introduce', 'unveil', 'reveal', 'announce', 'declare', 'proclaim', 'broadcast', 'disseminate', 'spread', 'circulate', 'distribute', 'share', 'post', 'publish', 'upload', 'stream', 'live', 'broadcast'],
        'film': ['watch', 'view', 'see', 'observe', 'examine', 'study', 'analyze', 'critique', 'review', 'evaluate', 'assess', 'rate', 'rank', 'compare', 'contrast', 'benchmark', 'standardize', 'customize', 'personalize', 'tailor', 'adapt', 'adjust', 'modify', 'refine', 'enhance', 'upgrade', 'update', 'maintain', 'sustain', 'preserve', 'protect', 'secure', 'safeguard', 'insure', 'guarantee', 'warrant', 'promise', 'commit', 'deliver', 'fulfill', 'satisfy', 'exceed', 'surpass', 'outperform', 'outdo', 'outshine', 'excel', 'succeed', 'achieve', 'accomplish', 'attain', 'reach', 'obtain', 'gain', 'earn', 'profit', 'benefit', 'advantage', 'leverage', 'utilize', 'exploit', 'capitalize', 'maximize', 'optimize'],
        'fitness': ['exercise', 'train', 'workout', 'practice', 'drill', 'coach', 'instruct', 'teach', 'educate', 'school', 'tutor', 'mentor', 'guide', 'direct', 'lead', 'conduct', 'manage', 'supervise', 'oversee', 'control', 'regulate', 'govern', 'rule', 'reign', 'dominate', 'command', 'order', 'dictate', 'prescribe', 'ordain', 'decree', 'enact', 'establish', 'institute', 'found', 'create', 'build', 'construct', 'develop', 'design', 'plan', 'organize', 'structure', 'arrange', 'order', 'sequence', 'categorize', 'classify', 'group', 'sort', 'rank', 'prioritize', 'hierarchy', 'taxonomy', 'systematize', 'methodize', 'standardize', 'normalize', 'regularize', 'formalize', 'institutionalize'],
        'medis': ['diagnose', 'treat', 'cure', 'heal', 'examine', 'inspect', 'check', 'test', 'screen', 'scan', 'monitor', 'track', 'log', 'record', 'document', 'archive', 'backup', 'restore', 'recover', 'retrieve', 'fetch', 'pull', 'push', 'sync', 'synchronize', 'async', 'asynchronize', 'queue', 'stack', 'buffer', 'cache', 'store', 'save', 'load', 'unload', 'import', 'export', 'transfer', 'transmit', 'receive', 'send', 'deliver', 'dispatch', 'distribute', 'allocate', 'assign', 'delegate', 'authorize', 'authenticate', 'verify', 'validate', 'confirm', 'approve', 'reject', 'deny', 'block', 'allow', 'permit', 'grant', 'revoke', 'cancel', 'terminate'],
        'hotel': ['book', 'reserve', 'check', 'in', 'check', 'out', 'register', 'sign', 'up', 'enroll', 'enlist', 'recruit', 'draft', 'select', 'choose', 'pick', 'elect', 'vote', 'decide', 'determine', 'resolve', 'settle', 'conclude', 'finish', 'complete', 'end', 'terminate', 'stop', 'cease', 'halt', 'pause', 'suspend', 'interrupt', 'disrupt', 'disturb', 'bother', 'annoy', 'irritate', 'exasperate', 'frustrate', 'aggravate', 'provoke', 'incite', 'instigate', 'stir', 'up', 'rouse', 'arouse', 'awaken', 'wake', 'up', 'revive', 'revitalize', 'rejuvenate', 'refresh', 'renew', 'restore'],
        'transportasi': ['travel', 'move', 'transport', 'transfer', 'transmit', 'receive', 'send', 'deliver', 'dispatch', 'distribute', 'allocate', 'assign', 'delegate', 'authorize', 'authenticate', 'verify', 'validate', 'confirm', 'approve', 'reject', 'deny', 'block', 'allow', 'permit', 'grant', 'revoke', 'cancel', 'terminate', 'end', 'finish', 'complete', 'close', 'open', 'start', 'begin', 'initiate', 'commence', 'launch', 'activate', 'enable', 'disable', 'deactivate', 'suspend', 'resume', 'continue', 'proceed', 'advance', 'progress', 'evolve', 'develop', 'grow', 'expand', 'scale', 'upgrade', 'downgrade', 'update', 'patch', 'fix', 'repair', 'maintain', 'sustain', 'preserve', 'protect', 'secure', 'safeguard', 'defend', 'shield', 'guard', 'watch', 'monitor', 'observe', 'supervise', 'oversee', 'manage', 'control', 'regulate', 'govern', 'direct', 'guide', 'lead', 'steer', 'navigate', 'pilot', 'drive', 'operate', 'run', 'execute', 'perform', 'carry', 'out', 'implement', 'apply', 'utilize', 'use', 'employ', 'leverage', 'exploit', 'capitalize', 'maximize', 'optimize'],
        'formal': ['address', 'greet', 'welcome', 'introduce', 'present', 'announce', 'declare', 'proclaim', 'broadcast', 'disseminate', 'spread', 'circulate', 'distribute', 'share', 'post', 'publish', 'upload', 'stream', 'live', 'broadcast', 'telecast', 'webcast', 'podcast', 'vlog', 'blog', 'tweet', 'post', 'share', 'like', 'comment', 'reply', 'retweet', 'repost', 'forward', 'send', 'deliver', 'dispatch', 'distribute', 'allocate', 'assign', 'delegate', 'authorize', 'authenticate', 'verify', 'validate', 'confirm', 'approve', 'reject', 'deny', 'block', 'allow', 'permit', 'grant', 'revoke', 'cancel', 'terminate'],
        'hukum': ['legislate', 'regulate', 'govern', 'control', 'monitor', 'track', 'log', 'record', 'document', 'archive', 'backup', 'restore', 'recover', 'retrieve', 'fetch', 'pull', 'push', 'sync', 'synchronize', 'async', 'asynchronize', 'queue', 'stack', 'buffer', 'cache', 'store', 'save', 'load', 'unload', 'import', 'export', 'transfer', 'transmit', 'receive', 'send', 'deliver', 'dispatch', 'distribute', 'allocate', 'assign', 'delegate', 'authorize', 'authenticate', 'verify', 'validate', 'confirm', 'approve', 'reject', 'deny', 'block', 'allow', 'permit', 'grant', 'revoke', 'cancel', 'terminate'],
        'politik': ['govern', 'rule', 'reign', 'dominate', 'command', 'order', 'dictate', 'prescribe', 'ordain', 'decree', 'enact', 'establish', 'institute', 'found', 'create', 'build', 'construct', 'develop', 'design', 'plan', 'organize', 'structure', 'arrange', 'order', 'sequence', 'categorize', 'classify', 'group', 'sort', 'rank', 'prioritize', 'hierarchy', 'taxonomy', 'systematize', 'methodize', 'standardize', 'normalize', 'regularize', 'formalize', 'institutionalize'],
        'lingkungan': ['conserve', 'preserve', 'protect', 'safeguard', 'defend', 'shield', 'guard', 'watch', 'monitor', 'observe', 'supervise', 'oversee', 'manage', 'control', 'regulate', 'govern', 'direct', 'guide', 'lead', 'steer', 'navigate', 'pilot', 'drive', 'operate', 'run', 'execute', 'perform', 'carry', 'out', 'implement', 'apply', 'utilize', 'use', 'employ', 'leverage', 'exploit', 'capitalize', 'maximize', 'optimize', 'enhance', 'improve', 'refine', 'polish', 'perfect', 'complete', 'finish', 'finalize', 'publish', 'deploy', 'release', 'launch', 'rollout'],
        'bisnis': ['manage', 'invest', 'negotiate', 'hire', 'sell', 'buy', 'meet', 'present', 'analyze', 'plan', 'organize', 'execute', 'implement', 'evaluate', 'review', 'approve', 'reject', 'propose', 'discuss', 'decide', 'allocate', 'budget', 'forecast', 'report', 'submit', 'process', 'handle', 'coordinate', 'supervise', 'direct', 'lead', 'guide', 'train', 'develop', 'improve', 'optimize', 'maximize', 'minimize', 'reduce', 'increase', 'expand', 'contract', 'merge', 'acquire', 'divest', 'liquidate', 'restructure', 'reorganize', 'outsource', 'insource', 'delegate', 'authorize', 'validate', 'verify', 'audit', 'comply', 'regulate', 'govern', 'control', 'monitor', 'track', 'measure', 'assess', 'evaluate', 'rate', 'rank', 'compare', 'contrast', 'benchmark', 'standardize', 'customize', 'personalize', 'tailor', 'adapt', 'adjust', 'modify', 'refine', 'enhance', 'upgrade', 'update', 'maintain', 'sustain', 'preserve', 'protect', 'secure', 'safeguard', 'insure', 'guarantee', 'warrant', 'promise', 'commit', 'deliver', 'fulfill', 'satisfy', 'exceed', 'surpass', 'outperform', 'outdo', 'outshine', 'excel', 'succeed', 'achieve', 'accomplish', 'attain', 'reach', 'obtain', 'gain', 'earn', 'profit', 'benefit', 'advantage', 'leverage', 'utilize', 'exploit', 'capitalize', 'monetize', 'commercialize', 'market', 'promote', 'advertise', 'publicize', 'brand', 'position', 'differentiate', 'distinguish', 'identify', 'recognize', 'acknowledge', 'appreciate', 'value', 'price', 'cost', 'charge', 'bill', 'invoice', 'quote', 'estimate', 'calculate', 'compute', 'figure', 'determine', 'establish', 'found', 'create', 'build', 'construct', 'develop', 'design', 'engineer', 'manufacture', 'produce', 'make', 'fabricate', 'assemble', 'install', 'setup', 'configure'],
        'slang': ['chill', 'hang', 'bail', 'crush', 'ghost', 'flex', 'slay', 'vibe', 'stan', 'ship', 'simp', 'cap', 'no cap', 'bet', 'fr', 'lowkey', 'highkey', 'sus', 'yeet', 'slaps', 'bop', 'fire', 'lit', 'goat', 'salty', 'shook', 'woke', 'extra', 'basic', 'savage', 'thirsty', 'snatched', 'wig', 'tea', 'spill', 'drag', 'read', 'serve', 'werk', 'yas', 'slay', 'queen', 'king', 'periodt', 'facts', 'no cap', 'cap', 'fr', 'bet', 'lowkey', 'highkey', 'sus', 'yeet', 'slaps', 'bop', 'fire', 'lit', 'goat', 'salty', 'shook', 'woke', 'extra', 'basic', 'savage', 'thirsty', 'snatched', 'wig', 'tea', 'spill', 'drag', 'read', 'serve', 'werk', 'yas', 'slay', 'queen', 'king', 'periodt', 'facts'],
        'akademik': ['study', 'research', 'analyze', 'write', 'read', 'examine', 'investigate', 'explore', 'discover', 'identify', 'define', 'explain', 'describe', 'discuss', 'argue', 'debate', 'critique', 'evaluate', 'assess', 'compare', 'contrast', 'synthesize', 'summarize', 'paraphrase', 'cite', 'reference', 'quote', 'document', 'record', 'note', 'observe', 'measure', 'calculate', 'compute', 'derive', 'prove', 'demonstrate', 'illustrate', 'exemplify', 'clarify', 'elucidate', 'interpret', 'translate', 'transform', 'convert', 'adapt', 'modify', 'revise', 'edit', 'proofread', 'review', 'revise', 'rewrite', 'redraft', 'rework', 'refine', 'polish', 'perfect', 'complete', 'finish', 'conclude', 'summarize', 'abstract', 'extract', 'distill', 'condense', 'compress', 'expand', 'elaborate', 'develop', 'build', 'construct', 'create', 'formulate', 'devise', 'design', 'plan', 'organize', 'structure', 'arrange', 'order', 'sequence', 'categorize', 'classify', 'group', 'sort', 'rank', 'prioritize', 'hierarchy', 'taxonomy', 'systematize', 'methodize', 'standardize', 'normalize', 'regularize', 'formalize', 'institutionalize', 'establish', 'found', 'create', 'build', 'construct', 'develop', 'design', 'plan', 'organize', 'structure', 'arrange', 'order', 'sequence', 'categorize', 'classify', 'group', 'sort', 'rank', 'prioritize', 'hierarchy', 'taxonomy', 'systematize', 'methodize', 'standardize', 'normalize', 'regularize', 'formalize', 'institutionalize'],
        'teknologi': ['download', 'upload', 'code', 'stream', 'click', 'use', 'install', 'update', 'upgrade', 'configure', 'setup', 'connect', 'disconnect', 'link', 'unlink', 'attach', 'detach', 'embed', 'extract', 'compress', 'decompress', 'encrypt', 'decrypt', 'encode', 'decode', 'parse', 'format', 'convert', 'transform', 'translate', 'compile', 'execute', 'run', 'launch', 'start', 'stop', 'pause', 'resume', 'restart', 'reboot', 'shutdown', 'boot', 'load', 'unload', 'import', 'export', 'save', 'delete', 'remove', 'add', 'insert', 'append', 'prepend', 'modify', 'edit', 'update', 'change', 'alter', 'adjust', 'customize', 'personalize', 'tailor', 'adapt', 'optimize', 'enhance', 'improve', 'refine', 'polish', 'perfect', 'complete', 'finish', 'finalize', 'publish', 'deploy', 'release', 'launch', 'rollout', 'implement', 'integrate', 'merge', 'combine', 'split', 'separate', 'divide', 'partition', 'segment', 'categorize', 'classify', 'tag', 'label', 'mark', 'flag', 'bookmark', 'favorite', 'like', 'share', 'comment', 'reply', 'forward', 'redirect', 'route', 'navigate', 'browse', 'search', 'find', 'locate', 'discover', 'explore', 'investigate', 'examine', 'inspect', 'review', 'audit', 'monitor', 'track', 'log', 'record', 'document', 'archive', 'backup', 'restore', 'recover', 'retrieve', 'fetch', 'pull', 'push', 'sync', 'synchronize', 'async', 'asynchronize', 'queue', 'stack', 'buffer', 'cache', 'store', 'save', 'load', 'unload', 'import', 'export', 'transfer', 'transmit', 'receive', 'send', 'deliver', 'dispatch', 'distribute', 'allocate', 'assign', 'delegate', 'authorize', 'authenticate', 'verify', 'validate', 'confirm', 'approve', 'reject', 'deny', 'block', 'allow', 'permit', 'grant', 'revoke', 'cancel', 'terminate', 'end', 'finish', 'complete', 'close', 'open', 'start', 'begin', 'initiate', 'commence', 'launch', 'activate', 'enable', 'disable', 'deactivate', 'suspend', 'resume', 'continue', 'proceed', 'advance', 'progress', 'evolve', 'develop', 'grow', 'expand', 'scale', 'upgrade', 'downgrade', 'update', 'patch', 'fix', 'repair', 'maintain', 'sustain', 'preserve', 'protect', 'secure', 'safeguard', 'defend', 'shield', 'guard', 'watch', 'monitor', 'observe', 'supervise', 'oversee', 'manage', 'control', 'regulate', 'govern', 'direct', 'guide', 'lead', 'steer', 'navigate', 'pilot', 'drive', 'operate', 'run', 'execute', 'perform', 'carry', 'out', 'implement', 'apply', 'utilize', 'use', 'employ', 'leverage', 'exploit', 'capitalize', 'maximize', 'optimize', 'enhance', 'improve', 'refine', 'polish', 'perfect', 'complete', 'finish', 'finalize', 'publish', 'deploy', 'release', 'launch', 'rollout'],
        'perasaan': ['feel', 'love', 'hate', 'worry', 'enjoy', 'like', 'dislike', 'appreciate', 'admire', 'respect', 'honor', 'cherish', 'treasure', 'value', 'prize', 'esteem', 'regard', 'consider', 'think', 'believe', 'trust', 'doubt', 'suspect', 'wonder', 'question', 'worry', 'fear', 'dread', 'panic', 'anxious', 'nervous', 'excited', 'thrilled', 'delighted', 'pleased', 'satisfied', 'content', 'happy', 'joyful', 'glad', 'cheerful', 'merry', 'jolly', 'ecstatic', 'elated', 'euphoric', 'blissful', 'serene', 'calm', 'peaceful', 'tranquil', 'relaxed', 'comfortable', 'cozy', 'snug', 'warm', 'friendly', 'kind', 'gentle', 'tender', 'soft', 'sweet', 'nice', 'pleasant', 'agreeable', 'enjoyable', 'pleasurable', 'delightful', 'wonderful', 'marvelous', 'fantastic', 'fabulous', 'amazing', 'awesome', 'incredible', 'unbelievable', 'extraordinary', 'remarkable', 'outstanding', 'exceptional', 'superb', 'excellent', 'perfect', 'ideal', 'flawless', 'impeccable', 'faultless', 'spotless', 'pristine', 'pure', 'clean', 'fresh', 'new', 'novel', 'original', 'unique', 'special', 'particular', 'specific', 'individual', 'personal', 'private', 'intimate', 'close', 'dear', 'beloved', 'cherished', 'treasured', 'valued', 'prized', 'esteemed', 'respected', 'admired', 'appreciated', 'loved', 'adored', 'worshipped', 'idolized', 'revered', 'venerated', 'honored', 'praised', 'complimented', 'flattered', 'charmed', 'captivated', 'enchanted', 'bewitched', 'mesmerized', 'hypnotized', 'fascinated', 'intrigued', 'interested', 'curious', 'inquisitive', 'nosy', 'prying', 'snooping', 'investigating', 'exploring', 'examining', 'studying', 'analyzing', 'scrutinizing', 'inspecting', 'reviewing', 'checking', 'verifying', 'validating', 'confirming', 'affirming', 'asserting', 'declaring', 'stating', 'claiming', 'maintaining', 'insisting', 'arguing', 'debating', 'discussing', 'talking', 'speaking', 'communicating', 'expressing', 'conveying', 'transmitting', 'sending', 'delivering', 'presenting', 'showing', 'displaying', 'demonstrating', 'illustrating', 'exemplifying', 'representing', 'symbolizing', 'signifying', 'meaning', 'denoting', 'indicating', 'suggesting', 'implying', 'hinting', 'insinuating', 'alluding', 'referring', 'mentioning', 'citing', 'quoting', 'paraphrasing', 'summarizing', 'condensing', 'compressing', 'abbreviating', 'shortening', 'reducing', 'minimizing', 'decreasing', 'lowering', 'diminishing', 'lessening', 'weakening', 'fading', 'waning', 'declining', 'deteriorating', 'degenerating', 'decaying', 'rotting', 'spoiling', 'ruining', 'destroying', 'damaging', 'harming', 'hurting', 'injuring', 'wounding', 'traumatizing', 'devastating', 'crushing', 'shattering', 'breaking', 'splitting', 'cracking', 'fracturing', 'shattering', 'smashing', 'crushing', 'pulverizing', 'grinding', 'pounding', 'beating', 'hitting', 'striking', 'slapping', 'punching', 'kicking', 'pushing', 'pulling', 'dragging', 'tugging', 'yanking', 'jerking', 'twisting', 'turning', 'rotating', 'spinning', 'revolving', 'orbiting', 'circling', 'encircling', 'surrounding', 'encompassing', 'including', 'containing', 'holding', 'grasping', 'gripping', 'clutching', 'clasping', 'embracing', 'hugging', 'cuddling', 'snuggling', 'nestling', 'nuzzling', 'caressing', 'stroking', 'petting', 'patting', 'tapping', 'touching', 'feeling', 'sensing', 'perceiving', 'detecting', 'noticing', 'observing', 'watching', 'viewing', 'seeing', 'looking', 'gazing', 'staring', 'glaring', 'peering', 'peeking', 'glancing', 'glimpsing', 'spotting', 'noticing', 'discovering', 'finding', 'locating', 'identifying', 'recognizing', 'acknowledging', 'admitting', 'confessing', 'revealing', 'disclosing', 'exposing', 'uncovering', 'unveiling', 'unmasking', 'unwrapping', 'unpacking', 'opening', 'unfolding', 'expanding', 'spreading', 'stretching', 'extending', 'elongating', 'lengthening', 'prolonging', 'continuing', 'persisting', 'persevering', 'enduring', 'sustaining', 'maintaining', 'preserving', 'keeping', 'retaining', 'holding', 'grasping', 'gripping', 'clutching', 'clasping', 'embracing', 'hugging', 'cuddling', 'snuggling', 'nestling', 'nuzzling', 'caressing', 'stroking', 'petting', 'patting', 'tapping', 'touching', 'feeling', 'sensing', 'perceiving', 'detecting', 'noticing', 'observing', 'watching', 'viewing', 'seeing', 'looking', 'gazing', 'staring', 'glaring', 'peering', 'peeking', 'glancing', 'glimpsing', 'spotting', 'noticing', 'discovering', 'finding', 'locating', 'identifying', 'recognizing', 'acknowledging', 'admitting', 'confessing', 'revealing', 'disclosing', 'exposing', 'uncovering', 'unveiling', 'unmasking', 'unwrapping', 'unpacking', 'opening', 'unfolding', 'expanding', 'spreading', 'stretching', 'extending', 'elongating', 'lengthening', 'prolonging', 'continuing', 'persisting', 'persevering', 'enduring', 'sustaining', 'maintaining', 'preserving', 'keeping', 'retaining'],
        'perjalanan': ['travel', 'visit', 'book', 'pack', 'unpack', 'depart', 'arrive', 'leave', 'return', 'journey', 'voyage', 'cruise', 'sail', 'fly', 'drive', 'ride', 'walk', 'hike', 'trek', 'explore', 'discover', 'adventure', 'wander', 'roam', 'roam', 'stroll', 'saunter', 'amble', 'meander', 'ramble', 'drift', 'drift', 'float', 'glide', 'soar', 'swoop', 'dive', 'plunge', 'dip', 'submerge', 'emerge', 'surface', 'rise', 'ascend', 'climb', 'scale', 'mount', 'conquer', 'overcome', 'surmount', 'transcend', 'exceed', 'surpass', 'outdo', 'outperform', 'outshine', 'excel', 'succeed', 'achieve', 'accomplish', 'attain', 'reach', 'obtain', 'gain', 'earn', 'win', 'secure', 'acquire', 'get', 'receive', 'collect', 'gather', 'accumulate', 'amass', 'hoard', 'stockpile', 'store', 'save', 'preserve', 'keep', 'retain', 'maintain', 'sustain', 'uphold', 'support', 'back', 'endorse', 'approve', 'sanction', 'authorize', 'permit', 'allow', 'enable', 'facilitate', 'assist', 'help', 'aid', 'support', 'back', 'endorse', 'approve', 'sanction', 'authorize', 'permit', 'allow', 'enable', 'facilitate', 'assist', 'help', 'aid', 'support', 'back', 'endorse', 'approve', 'sanction', 'authorize', 'permit', 'allow', 'enable', 'facilitate', 'assist', 'help', 'aid'],
        'makanan': ['cook', 'taste', 'order', 'drink', 'eat', 'consume', 'devour', 'gobble', 'gulp', 'swallow', 'chew', 'bite', 'nibble', 'peck', 'sample', 'try', 'test', 'taste', 'savor', 'relish', 'enjoy', 'appreciate', 'delight', 'revel', 'indulge', 'treat', 'pamper', 'spoil', 'coddle', 'baby', 'mollycoddle', 'cosset', 'pamper', 'indulge', 'gratify', 'satisfy', 'please', 'delight', 'charm', 'captivate', 'enchant', 'bewitch', 'mesmerize', 'hypnotize', 'fascinate', 'intrigue', 'interest', 'attract', 'draw', 'pull', 'lure', 'entice', 'tempt', 'seduce', 'allure', 'charm', 'captivate', 'enchant', 'bewitch', 'mesmerize', 'hypnotize', 'fascinate', 'intrigue', 'interest', 'attract', 'draw', 'pull', 'lure', 'entice', 'tempt', 'seduce', 'allure'],
        'olahraga': ['play', 'run', 'swim', 'jump', 'win', 'lose', 'compete', 'participate', 'join', 'enter', 'register', 'sign', 'up', 'enroll', 'enlist', 'recruit', 'draft', 'select', 'choose', 'pick', 'elect', 'vote', 'decide', 'determine', 'resolve', 'settle', 'conclude', 'finish', 'complete', 'end', 'terminate', 'stop', 'cease', 'halt', 'pause', 'suspend', 'interrupt', 'disrupt', 'disturb', 'bother', 'annoy', 'irritate', 'exasperate', 'frustrate', 'aggravate', 'provoke', 'incite', 'instigate', 'stir', 'up', 'rouse', 'arouse', 'awaken', 'wake', 'up', 'revive', 'revitalize', 'rejuvenate', 'refresh', 'renew', 'restore', 'restore', 'repair', 'fix', 'mend', 'heal', 'cure', 'treat', 'nurse', 'tend', 'care', 'for', 'look', 'after', 'attend', 'to', 'see', 'to', 'take', 'care', 'of', 'mind', 'watch', 'over', 'guard', 'protect', 'defend', 'shield', 'safeguard', 'secure', 'insure', 'guarantee', 'warrant', 'promise', 'pledge', 'vow', 'swear', 'commit', 'dedicate', 'devote', 'consecrate', 'sanctify', 'bless', 'anoint', 'ordain', 'appoint', 'designate', 'assign', 'allocate', 'allot', 'distribute', 'dispense', 'dispense', 'administer', 'apply', 'use', 'utilize', 'employ', 'exercise', 'practice', 'drill', 'train', 'coach', 'instruct', 'teach', 'educate', 'school', 'tutor', 'mentor', 'guide', 'direct', 'lead', 'conduct', 'manage', 'supervise', 'oversee', 'control', 'regulate', 'govern', 'rule', 'reign', 'dominate', 'command', 'order', 'dictate', 'prescribe', 'ordain', 'decree', 'enact', 'establish', 'institute', 'found', 'create', 'build', 'construct', 'develop', 'design', 'plan', 'organize', 'structure', 'arrange', 'order', 'sequence', 'categorize', 'classify', 'group', 'sort', 'rank', 'prioritize', 'hierarchy', 'taxonomy', 'systematize', 'methodize', 'standardize', 'normalize', 'regularize', 'formalize', 'institutionalize'],
        'kesehatan': ['exercise', 'sleep', 'rest', 'heal', 'cure', 'treat', 'diagnose', 'examine', 'inspect', 'check', 'test', 'screen', 'scan', 'monitor', 'track', 'log', 'record', 'document', 'archive', 'backup', 'restore', 'recover', 'retrieve', 'fetch', 'pull', 'push', 'sync', 'synchronize', 'async', 'asynchronize', 'queue', 'stack', 'buffer', 'cache', 'store', 'save', 'load', 'unload', 'import', 'export', 'transfer', 'transmit', 'receive', 'send', 'deliver', 'dispatch', 'distribute', 'allocate', 'assign', 'delegate', 'authorize', 'authenticate', 'verify', 'validate', 'confirm', 'approve', 'reject', 'deny', 'block', 'allow', 'permit', 'grant', 'revoke', 'cancel', 'terminate', 'end', 'finish', 'complete', 'close', 'open', 'start', 'begin', 'initiate', 'commence', 'launch', 'activate', 'enable', 'disable', 'deactivate', 'suspend', 'resume', 'continue', 'proceed', 'advance', 'progress', 'evolve', 'develop', 'grow', 'expand', 'scale', 'upgrade', 'downgrade', 'update', 'patch', 'fix', 'repair', 'maintain', 'sustain', 'preserve', 'protect', 'secure', 'safeguard', 'defend', 'shield', 'guard', 'watch', 'monitor', 'observe', 'supervise', 'oversee', 'manage', 'control', 'regulate', 'govern', 'direct', 'guide', 'lead', 'steer', 'navigate', 'pilot', 'drive', 'operate', 'run', 'execute', 'perform', 'carry', 'out', 'implement', 'apply', 'utilize', 'use', 'employ', 'leverage', 'exploit', 'capitalize', 'maximize', 'optimize', 'enhance', 'improve', 'refine', 'polish', 'perfect', 'complete', 'finish', 'finalize', 'publish', 'deploy', 'release', 'launch', 'rollout']
    };
    
    let totalGenerated = 0;
    
    for (const category of categories) {
        const existingCount = vocabularyData.filter(v => v.category === category).length;
        const needed = Math.max(0, vocabPerCategory - existingCount);
        
        if (needed === 0) continue;
        
        const patterns = verbPatterns[category] || verbPatterns['sehari-hari'];
        const generated = [];
        
        // Get all existing vocabulary to check duplicates
        const allVocab = getAllVocabulary();
        const existingV1s = new Set(allVocab.map(v => v.v1.toLowerCase()));
        
        for (let i = 0; i < needed; i++) {
            const baseVerb = patterns[i % patterns.length];
            // Create unique verb by adding prefix/suffix
            let verb = baseVerb;
            if (i >= patterns.length) {
                const prefix = ['re', 'un', 'over', 'under', 'out', 'in', 'up', 'down', 'pre', 'post'][Math.floor(i / patterns.length) % 10];
                verb = prefix + baseVerb;
            }
            
            // Skip if already exists or invalid
            if (existingV1s.has(verb.toLowerCase()) || verb.length < 2) {
                continue;
            }
            
            // Mark as used
            existingV1s.add(verb.toLowerCase());
            
            const verbForms = getVerbForms(verb);
            
            // Use simple meaning (avoid too many API calls)
            let meaning = verb; // Fallback
            try {
                meaning = await translateToIndonesian(verb);
            } catch (e) {
                meaning = verb; // Use verb as fallback
            }
            
            // Get unique ID
            const maxId = vocabularyData.length > 0 ? Math.max(...vocabularyData.map(v => v.id || 0)) : 0;
            
            const level = determineLevel(verb);
            
            generated.push({
                id: maxId + generated.length + 1,
                v1: verbForms.v1,
                v2: verbForms.v2,
                v3: verbForms.v3,
                meaning: meaning,
                type: verbForms.type,
                category: category,
                level: level,
                examples: [{
                    sentence: `I ${verb} every day.`,
                    translation: `Saya ${meaning} setiap hari.`
                }],
                quiz: {
                    question: `Complete: I ___ ${verb} yesterday.`,
                    options: [verbForms.v1, verbForms.v2, verbForms.v3, verbForms.v1 + 'ing'],
                    correct: 1
                }
            });
            
            totalGenerated++;
            if (totalGenerated % 100 === 0) {
                if (loadingIndicator) {
                    loadingIndicator.querySelector('span').textContent = `Generated ${totalGenerated} vocabulary...`;
                }
                await new Promise(resolve => setTimeout(resolve, 50));
            }
        }
        
        vocabularyData.push(...generated);
        
        // Update existingV1s for next category
        generated.forEach(v => existingV1s.add(v.v1.toLowerCase()));
    }
    
    return totalGenerated;
}

// Function untuk generate vocabulary per kategori
async function generateCategoryVocabulary(category) {
    const loadingIndicator = document.getElementById('loadingIndicator');
    const vocabPerCategory = 100;
    
    if (!verbPatterns[category]) {
        throw new Error(`Kategori "${category}" tidak ditemukan`);
    }
    
    const existingCount = vocabularyData.filter(v => v.category === category).length;
    const needed = Math.max(0, vocabPerCategory - existingCount);
    
    if (needed === 0) {
        return 0;
    }
    
    const patterns = verbPatterns[category];
    const allVocab = getAllVocabulary();
    const existingV1s = new Set(allVocab.map(v => v.v1.toLowerCase()));
    const generated = [];
    const maxId = vocabularyData.length > 0 ? Math.max(...vocabularyData.map(v => v.id || 0)) : 0;
    
    for (let i = 0; i < needed; i++) {
        const baseVerb = patterns[i % patterns.length];
        let verb = baseVerb;
        if (i >= patterns.length) {
            const prefix = ['re', 'un', 'over', 'under', 'out', 'in', 'up', 'down', 'pre', 'post'][Math.floor(i / patterns.length) % 10];
            verb = prefix + baseVerb;
        }
        
        if (existingV1s.has(verb.toLowerCase()) || verb.length < 2) {
            continue;
        }
        
        existingV1s.add(verb.toLowerCase());
        const verbForms = getVerbForms(verb);
        const level = determineLevel(verb);
        
        let meaning = verb;
        try {
            meaning = await translateToIndonesian(verb);
        } catch (e) {
            meaning = verb;
        }
        
        generated.push({
            id: maxId + generated.length + 1,
            v1: verbForms.v1,
            v2: verbForms.v2,
            v3: verbForms.v3,
            meaning: meaning,
            type: verbForms.type,
            category: category,
            level: level,
            examples: [{
                sentence: `I ${verb} every day.`,
                translation: `Saya ${meaning} setiap hari.`
            }],
            quiz: {
                question: `Complete: I ___ ${verb} yesterday.`,
                options: [verbForms.v1, verbForms.v2, verbForms.v3, verbForms.v1 + 'ing'],
                correct: 1
            }
        });
        
        if (generated.length % 20 === 0 && loadingIndicator) {
            loadingIndicator.querySelector('span').textContent = `Generated ${generated.length} vocabulary untuk ${category}...`;
            await new Promise(resolve => setTimeout(resolve, 50));
        }
    }
    
    vocabularyData.push(...generated);
    return generated.length;
}

// Helper functions untuk localStorage
function getAllVocabulary() {
    const saved = localStorage.getItem('vocabularyData');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            // Merge dengan vocabularyData yang ada, avoid duplicates
            const existingIds = new Set(vocabularyData.map(v => v.id));
            const newItems = parsed.filter(v => !existingIds.has(v.id));
            return [...vocabularyData, ...newItems];
        } catch (e) {
            console.error('Error parsing localStorage:', e);
        }
    }
    return vocabularyData;
}

function saveVocabularyToStorage() {
    try {
        localStorage.setItem('vocabularyData', JSON.stringify(vocabularyData));
    } catch (e) {
        console.error('Error saving to localStorage:', e);
    }
}

function loadVocabularyFromStorage() {
    const saved = localStorage.getItem('vocabularyData');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
                // Merge dengan data yang ada, avoid duplicates by v1
                const existingV1s = new Set(vocabularyData.map(v => v.v1.toLowerCase()));
                const newItems = parsed.filter(v => !existingV1s.has(v.v1.toLowerCase()));
                vocabularyData.push(...newItems);
                
                // Ensure unique IDs
                let maxId = Math.max(...vocabularyData.map(v => v.id || 0), 0);
                vocabularyData.forEach(v => {
                    if (!v.id) {
                        maxId++;
                        v.id = maxId;
                    }
                });
            }
        } catch (e) {
            console.error('Error loading from localStorage:', e);
        }
    }
}

// Function untuk menampilkan pesan
function showMessage(message, type = 'error') {
    const searchSection = document.querySelector('.search-section');
    const existingMessage = searchSection.querySelector('.error-message, .success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'error' ? 'error-message' : 'success-message';
    messageDiv.textContent = message;
    searchSection.insertBefore(messageDiv, searchSection.querySelector('.filter-section'));
    
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Load from localStorage first
    loadVocabularyFromStorage();
    
    // Search functionality
    document.getElementById('searchInput').addEventListener('input', function(e) {
        filterAndSearch(e.target.value);
    });
    
    // API Search button
    document.getElementById('searchApiBtn').addEventListener('click', async function() {
        const searchInput = document.getElementById('searchInput');
        const word = searchInput.value.trim().toLowerCase();
        
        if (!word) {
            showMessage('Masukkan kata yang ingin dicari!', 'error');
            return;
        }
        
        // Check if word already exists (check all data including localStorage)
        const allVocab = getAllVocabulary();
        const existingWord = allVocab.find(v => v.v1.toLowerCase() === word);
        if (existingWord) {
            showMessage('Kata ini sudah ada dalam daftar!', 'error');
            return;
        }
        
        const loadingIndicator = document.getElementById('loadingIndicator');
        const searchBtn = document.getElementById('searchApiBtn');
        
        try {
            loadingIndicator.style.display = 'flex';
            searchBtn.disabled = true;
            
            const newVocab = await fetchWordFromAPI(word);
            
            // Get max ID to ensure unique
            const allVocab = getAllVocabulary();
            const maxId = allVocab.length > 0 ? Math.max(...allVocab.map(v => v.id || 0)) : 0;
            newVocab.id = maxId + 1;
            
            vocabularyData.push(newVocab);
            
            // Save to localStorage
            saveVocabularyToStorage();
            
            showMessage(`Kata "${word}" berhasil ditambahkan!`, 'success');
            filterAndSearch(''); // Refresh display
            searchInput.value = '';
            
            // Scroll to the new word
            setTimeout(() => {
                const newCard = document.querySelector(`[data-vocab-id="${newVocab.id}"]`);
                if (newCard) {
                    newCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    newCard.style.animation = 'pulse 0.5s ease';
                }
            }, 100);
            
        } catch (error) {
            showMessage(`Gagal mengambil data: ${error.message}. Pastikan kata tersebut adalah kata kerja yang valid.`, 'error');
        } finally {
            loadingIndicator.style.display = 'none';
            searchBtn.disabled = false;
        }
    });
    
    // Enter key untuk search API
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('searchApiBtn').click();
        }
    });
    
    // Category dropdown
    const categoryDropdownBtn = document.getElementById('categoryDropdownBtn');
    const categoryDropdown = document.getElementById('categoryDropdown');
    
    categoryDropdownBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        categoryDropdown.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!categoryDropdown.contains(e.target) && !categoryDropdownBtn.contains(e.target)) {
            categoryDropdown.classList.remove('show');
        }
    });
    
    // Category dropdown items
    document.querySelectorAll('#categoryDropdown .dropdown-item').forEach(item => {
        item.addEventListener('click', function() {
            const category = this.dataset.category;
            currentCategory = category;
            
            // Update active state
            document.querySelectorAll('#categoryDropdown .dropdown-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Update button text
            categoryDropdownBtn.textContent = this.textContent + ' ▼';
            
            // Close dropdown
            categoryDropdown.classList.remove('show');
            
            // Apply filter
            filterAndSearch(document.getElementById('searchInput').value);
        });
    });
    
    // Level filter buttons
    document.querySelectorAll('#levelFilters .filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('#levelFilters .filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentLevel = this.dataset.level;
            filterAndSearch(document.getElementById('searchInput').value);
        });
    });
    
    // Generate per kategori button
    document.getElementById('generateCategoryBtn').addEventListener('click', async function() {
        const categorySelect = document.getElementById('generateCategorySelect');
        const selectedCategory = categorySelect.value;
        
        if (selectedCategory === 'all') {
            if (!confirm('Ini akan generate 100 vocabulary per kategori (total ~1,100 vocab). Proses ini mungkin memakan waktu. Lanjutkan?')) {
                return;
            }
            
            const loadingIndicator = document.getElementById('loadingIndicator');
            const generateBtn = document.getElementById('generateBulkBtn');
            
            try {
                loadingIndicator.style.display = 'flex';
                loadingIndicator.querySelector('span').textContent = 'Generating vocabulary...';
                generateBtn.disabled = true;
                
                await generateBulkVocabulary();
                
                saveVocabularyToStorage();
                showMessage('Vocabulary berhasil di-generate!', 'success');
                filterAndSearch('');
            } catch (error) {
                showMessage(`Error: ${error.message}`, 'error');
            } finally {
                loadingIndicator.style.display = 'none';
                loadingIndicator.querySelector('span').textContent = 'Memuat data dari API...';
                generateBtn.disabled = false;
            }
        } else {
            if (!confirm(`Generate 100 vocabulary untuk kategori "${selectedCategory}"?`)) {
                return;
            }
            
            const loadingIndicator = document.getElementById('loadingIndicator');
            const generateBtn = document.getElementById('generateCategoryBtn');
            
            try {
                loadingIndicator.style.display = 'flex';
                loadingIndicator.querySelector('span').textContent = `Generating vocabulary untuk ${selectedCategory}...`;
                generateBtn.disabled = true;
                
                const count = await generateCategoryVocabulary(selectedCategory);
                
                saveVocabularyToStorage();
                showMessage(`${count} vocabulary berhasil di-generate untuk kategori "${selectedCategory}"!`, 'success');
                filterAndSearch('');
            } catch (error) {
                showMessage(`Error: ${error.message}`, 'error');
            } finally {
                loadingIndicator.style.display = 'none';
                loadingIndicator.querySelector('span').textContent = 'Memuat data dari API...';
                generateBtn.disabled = false;
            }
        }
    });
    
    // Bulk generate button
    document.getElementById('generateBulkBtn').addEventListener('click', async function() {
        if (!confirm('Ini akan generate 100 vocabulary per kategori (total ~1,100 vocab). Proses ini mungkin memakan waktu. Lanjutkan?')) {
            return;
        }
        
        const loadingIndicator = document.getElementById('loadingIndicator');
        const generateBtn = document.getElementById('generateBulkBtn');
        
        try {
            loadingIndicator.style.display = 'flex';
            loadingIndicator.querySelector('span').textContent = 'Generating vocabulary...';
            generateBtn.disabled = true;
            
            await generateBulkVocabulary();
            
            // Save to localStorage
            saveVocabularyToStorage();
            
            showMessage('Vocabulary berhasil di-generate!', 'success');
            filterAndSearch(''); // Refresh display
            
        } catch (error) {
            showMessage(`Error: ${error.message}`, 'error');
        } finally {
            loadingIndicator.style.display = 'none';
            loadingIndicator.querySelector('span').textContent = 'Memuat data dari API...';
            generateBtn.disabled = false;
        }
    });
    
    // Category filter buttons
    document.querySelectorAll('#categoryFilters .filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('#categoryFilters .filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            filterAndSearch(document.getElementById('searchInput').value);
        });
    });
    
    // Type filter buttons
    document.querySelectorAll('#typeFilters .filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('#typeFilters .filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentType = this.dataset.type;
            filterAndSearch(document.getElementById('searchInput').value);
        });
    });
    
    // Initial render
    filterAndSearch(''); // Initial render
});

function renderVocabList(data = vocabularyData) {
    const vocabList = document.getElementById('vocabList');
    vocabList.innerHTML = '';
    
    if (data.length === 0) {
        vocabList.innerHTML = '<div class="glass-card" style="text-align: center; color: var(--text-muted);">Tidak ada kata yang ditemukan</div>';
        renderPagination(0);
        updateStats(0, 0);
        return;
    }
    
    // Calculate pagination
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = data.slice(startIndex, endIndex);
    
    // Update stats
    updateStats(paginatedData.length, data.length);
    
    // Render vocabulary cards
    paginatedData.forEach(vocab => {
        const card = document.createElement('div');
        card.className = 'vocab-card';
        card.setAttribute('data-vocab-id', vocab.id);
        const categoryColor = categoryColors[vocab.category] || '#6366f1';
        card.innerHTML = `
            <div class="vocab-header">
                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                    <span class="vocab-word">${vocab.v1}</span>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        <span class="vocab-category" style="background: ${categoryColor}20; color: ${categoryColor}; border: 1px solid ${categoryColor}40; padding: 0.3rem 0.8rem; border-radius: 8px; font-size: 0.75rem; font-weight: 500;">
                            ${vocab.category || 'Umum'}
                        </span>
                        ${vocab.level ? `<span class="vocab-level" style="background: ${vocab.level === 'beginner' ? '#22c55e' : vocab.level === 'intermediate' ? '#f59e0b' : '#ef4444'}20; color: ${vocab.level === 'beginner' ? '#22c55e' : vocab.level === 'intermediate' ? '#f59e0b' : '#ef4444'}; border: 1px solid ${vocab.level === 'beginner' ? '#22c55e' : vocab.level === 'intermediate' ? '#f59e0b' : '#ef4444'}40; padding: 0.3rem 0.8rem; border-radius: 8px; font-size: 0.75rem; font-weight: 500;">
                            ${vocab.level === 'beginner' ? 'Beginner' : vocab.level === 'intermediate' ? 'Intermediate' : 'Advanced'}
                        </span>` : ''}
                        <span class="vocab-type">${vocab.type === 'irregular' ? 'Tidak Beraturan' : 'Beraturan'}</span>
                    </div>
                </div>
            </div>
            <div class="verb-forms">
                <div class="verb-form">
                    <span class="verb-form-label">V1</span>
                    <span class="verb-form-value">${vocab.v1}</span>
                </div>
                <div class="verb-form">
                    <span class="verb-form-label">V2</span>
                    <span class="verb-form-value">${vocab.v2}</span>
                </div>
                <div class="verb-form">
                    <span class="verb-form-label">V3</span>
                    <span class="verb-form-value">${vocab.v3}</span>
                </div>
            </div>
            <div class="meaning">
                <span class="meaning-label">Arti:</span>
                <span class="meaning-text">${vocab.meaning}</span>
            </div>
            <div class="example">
                <span class="example-label">Contoh Kalimat:</span>
                <div class="example-text">${vocab.examples[0].sentence}</div>
                <div class="example-translation">${vocab.examples[0].translation}</div>
            </div>
            <div class="action-buttons">
                <button class="btn btn-quiz" onclick="startQuiz(${vocab.id})">Latihan Soal</button>
                <button class="btn btn-example" onclick="showExamples(${vocab.id})">Lihat Contoh</button>
            </div>
        `;
        vocabList.appendChild(card);
    });
    
    // Render pagination
    renderPagination(data.length);
}

function updateStats(current, total) {
    const statsText = document.getElementById('statsText');
    statsText.textContent = `Menampilkan ${current} dari ${total} vocabulary`;
}

function renderPagination(totalItems) {
    const paginationContainer = document.getElementById('paginationContainer');
    paginationContainer.innerHTML = '';
    
    if (totalItems === 0) {
        return;
    }
    
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    if (totalPages <= 1) {
        return;
    }
    
    const pagination = document.createElement('div');
    pagination.className = 'pagination';
    
    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'pagination-btn';
    prevBtn.textContent = '←';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => changePage(currentPage - 1);
    pagination.appendChild(prevBtn);
    
    // Page numbers
    const maxVisiblePages = 7;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    // First page
    if (startPage > 1) {
        const firstBtn = document.createElement('button');
        firstBtn.className = 'pagination-btn';
        firstBtn.textContent = '1';
        firstBtn.onclick = () => changePage(1);
        pagination.appendChild(firstBtn);
        
        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'pagination-info';
            ellipsis.textContent = '...';
            pagination.appendChild(ellipsis);
        }
    }
    
    // Page number buttons
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = 'pagination-btn';
        if (i === currentPage) {
            pageBtn.classList.add('active');
        }
        pageBtn.textContent = i;
        pageBtn.onclick = () => changePage(i);
        pagination.appendChild(pageBtn);
    }
    
    // Last page
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'pagination-info';
            ellipsis.textContent = '...';
            pagination.appendChild(ellipsis);
        }
        
        const lastBtn = document.createElement('button');
        lastBtn.className = 'pagination-btn';
        lastBtn.textContent = totalPages;
        lastBtn.onclick = () => changePage(totalPages);
        pagination.appendChild(lastBtn);
    }
    
    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'pagination-btn';
    nextBtn.textContent = '→';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => changePage(currentPage + 1);
    pagination.appendChild(nextBtn);
    
    // Page info
    const pageInfo = document.createElement('span');
    pageInfo.className = 'pagination-info';
    pageInfo.textContent = `Halaman ${currentPage} dari ${totalPages}`;
    pagination.appendChild(pageInfo);
    
    paginationContainer.appendChild(pagination);
}

function changePage(page) {
    // Get current filtered data first to validate page number
    const searchTerm = document.getElementById('searchInput').value;
    let filtered = vocabularyData;
    
    // Apply category filter
    if (currentCategory !== 'all') {
        filtered = filtered.filter(vocab => vocab.category === currentCategory);
    }
    
    // Apply level filter
    if (currentLevel !== 'all') {
        filtered = filtered.filter(vocab => vocab.level === currentLevel);
    }
    
    // Apply type filter
    if (currentType !== 'all') {
        filtered = filtered.filter(vocab => vocab.type === currentType);
    }
    
    // Apply search
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(vocab => 
            vocab.v1.toLowerCase().includes(term) ||
            vocab.v2.toLowerCase().includes(term) ||
            vocab.v3.toLowerCase().includes(term) ||
            vocab.meaning.toLowerCase().includes(term)
        );
    }
    
    // Validate page number
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    if (page < 1) page = 1;
    if (page > totalPages && totalPages > 0) page = totalPages;
    
    currentPage = page;
    renderVocabList(filtered);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterAndSearch(searchTerm = '', resetPage = true) {
    // Reset to page 1 when filtering (unless explicitly told not to)
    if (resetPage) {
        currentPage = 1;
    }
    
    let filtered = vocabularyData;
    
    // Apply category filter
    if (currentCategory !== 'all') {
        filtered = filtered.filter(vocab => vocab.category === currentCategory);
    }
    
    // Apply level filter
    if (currentLevel !== 'all') {
        filtered = filtered.filter(vocab => vocab.level === currentLevel);
    }
    
    // Apply type filter
    if (currentType !== 'all') {
        filtered = filtered.filter(vocab => vocab.type === currentType);
    }
    
    // Apply search
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(vocab => 
            vocab.v1.toLowerCase().includes(term) ||
            vocab.v2.toLowerCase().includes(term) ||
            vocab.v3.toLowerCase().includes(term) ||
            vocab.meaning.toLowerCase().includes(term)
        );
    }
    
    renderVocabList(filtered);
}

function startQuiz(vocabId) {
    const vocab = vocabularyData.find(v => v.id === vocabId);
    if (!vocab || !vocab.quiz) return;
    
    currentQuiz = vocab;
    const quizSection = document.getElementById('quizSection');
    const quizContent = document.getElementById('quizContent');
    const overlay = document.getElementById('overlay');
    
    quizContent.innerHTML = `
        <div class="quiz-question">
            <div class="quiz-question-text">${vocab.quiz.question}</div>
            <div class="quiz-options">
                ${vocab.quiz.options.map((option, index) => `
                    <div class="quiz-option" onclick="selectOption(${index})" data-index="${index}">
                        ${option}
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="score" id="quizScore" style="display: none;"></div>
    `;
    
    overlay.style.display = 'block';
    quizSection.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function selectOption(selectedIndex) {
    if (!currentQuiz) return;
    
    const options = document.querySelectorAll('.quiz-option');
    const correctIndex = currentQuiz.quiz.correct;
    const scoreDiv = document.getElementById('quizScore');
    
    options.forEach((option, index) => {
        option.style.pointerEvents = 'none';
        if (index === correctIndex) {
            option.classList.add('correct');
        } else if (index === selectedIndex && index !== correctIndex) {
            option.classList.add('incorrect');
        }
        if (index === selectedIndex) {
            option.classList.add('selected');
        }
    });
    
    const isCorrect = selectedIndex === correctIndex;
    scoreDiv.style.display = 'block';
    scoreDiv.innerHTML = isCorrect 
        ? '<span style="color: #22c55e;">✓ Benar! Bagus sekali!</span>'
        : '<span style="color: #ef4444;">✗ Salah. Jawaban yang benar adalah: ' + currentQuiz.quiz.options[correctIndex] + '</span>';
    
    // Show example sentence
    setTimeout(() => {
        scoreDiv.innerHTML += `<br><br><div style="margin-top: 1rem; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 10px;">
            <strong>Contoh penggunaan:</strong><br>
            ${currentQuiz.examples[0].sentence}<br>
            <em style="color: var(--text-muted);">${currentQuiz.examples[0].translation}</em>
        </div>`;
    }, 1000);
}

function showExamples(vocabId) {
    const vocab = vocabularyData.find(v => v.id === vocabId);
    if (!vocab) return;
    
    const quizSection = document.getElementById('quizSection');
    const quizContent = document.getElementById('quizContent');
    const overlay = document.getElementById('overlay');
    
    quizContent.innerHTML = `
        <h3 style="margin-bottom: 1rem; color: var(--text-primary);">Contoh Kalimat: ${vocab.v1}</h3>
        ${vocab.examples.map((example, index) => `
            <div class="quiz-question" style="margin-bottom: 1rem;">
                <div class="example-text" style="font-size: 1.1rem; margin-bottom: 0.5rem;">
                    ${example.sentence}
                </div>
                <div class="example-translation" style="font-size: 1rem;">
                    ${example.translation}
                </div>
            </div>
        `).join('')}
    `;
    
    overlay.style.display = 'block';
    quizSection.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeQuiz() {
    const quizSection = document.getElementById('quizSection');
    const overlay = document.getElementById('overlay');
    
    quizSection.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentQuiz = null;
}

