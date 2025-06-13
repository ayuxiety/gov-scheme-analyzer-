

// Sample government schemes data
const governmentSchemes = [
    {
        id: 1,
        name: "Pradhan Mantri Jan Dhan Yojana",
        description: "Financial inclusion program ensuring access to financial services",
        category: "social",
        eligibility: (user) => user.income < 100000,
        region: ["all"],
        minAge: 18,
        maxAge: 100,
        incomeMax: 100000,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
    },
    {
        id: 2,
        name: "Pradhan Mantri Kisan Samman Nidhi",
        description: "Income support scheme for farmers",
        category: "agriculture",
        eligibility: (user) => user.occupation === "farmer" && user.income < 200000,
        region: ["all"],
        minAge: 18,
        maxAge: 100,
        incomeMax: 200000,
        occupation: ["farmer"],
        gender: ["all"],
        disability: false
    },
    {
        id: 3,
        name: "National Scholarship for Higher Education",
        description: "Scholarship for students pursuing higher education",
        category: "education",
        eligibility: (user) => user.occupation === "student" && user.income < 300000,
        region: ["all"],
        minAge: 17,
        maxAge: 25,
        incomeMax: 300000,
        occupation: ["student"],
        gender: ["all"],
        disability: false
    },
    {
        id: 4,
        name: "Ayushman Bharat Yojana",
        description: "Health insurance for low-income families",
        category: "health",
        eligibility: (user) => user.income < 500000,
        region: ["all"],
        minAge: 0,
        maxAge: 100,
        incomeMax: 500000,
        occupation: ["all"],
        gender: ["all"],
        disability: false
    },
    {
        id: 5,
        name: "Pradhan Mantri Rozgar Yojana",
        description: "Employment generation program for unemployed youth",
        category: "employment",
        eligibility: (user) => user.occupation === "unemployed" && user.age >= 18 && user.age <= 35,
        region: ["all"],
        minAge: 18,
        maxAge: 35,
        incomeMax: 200000,
        occupation: ["unemployed"],
        gender: ["all"],
        disability: false
    },
    {
        id: 6,
        name: "Divyangjan Swavalamban Yojana",
        description: "Support scheme for persons with disabilities",
        category: "social",
        eligibility: (user) => user.disability === "yes",
        region: ["all"],
        minAge: 0,
        maxAge: 100,
        incomeMax: 1000000,
        occupation: ["all"],
        gender: ["all"],
        disability: true
    },
    {
        id: 7,
        name: "North East Rural Livelihood Project",
        description: "Livelihood enhancement in Northeast region",
        category: "employment",
        eligibility: (user) => user.region === "northeast" && user.income < 300000,
        region: ["northeast"],
        minAge: 18,
        maxAge: 60,
        incomeMax: 300000,
        occupation: ["unemployed", "self-employed"],
        gender: ["all"],
        disability: false
    },
    {
        id: 8,
        name: "Beti Bachao Beti Padhao",
        description: "Scheme for welfare and education of girl children",
        category: "education",
        eligibility: (user) => user.gender === "female" && user.age <= 18,
        region: ["all"],
        minAge: 0,
        maxAge: 18,
        incomeMax: 1000000,
        occupation: ["student"],
        gender: ["female"],
        disability: false
    },
    {
        id: 9,
        name: "Pradhan Mantri Ujjwala Yojana",
        description: "LPG connection scheme for women from below poverty line families",
        category: "social",
        eligibility: (user) => user.gender === "female" && user.income < 100000,
        region: ["all"],
        minAge: 18,
        maxAge: 100,
        incomeMax: 100000,
        occupation: ["all"],
        gender: ["female"],
        disability: false
    },
    {
        id: 10,
        name: "Atal Pension Yojana",
        description: "Pension scheme focused on unorganized sector workers",
        category: "social",
        eligibility: (user) => user.age >= 18 && user.age <= 40 && user.income < 150000,
        region: ["all"],
        minAge: 18,
        maxAge: 40,
        incomeMax: 150000,
        occupation: ["unemployed", "self-employed"],
        gender: ["all"],
        disability: false
    },
    {
        id: 11,
        name: "Pradhan Mantri Awas Yojana",
        description: "Housing for all by 2022 scheme",
        category: "social",
        eligibility: (user) => user.income < 180000,
        region: ["all"],
        minAge: 21,
        maxAge: 70,
        incomeMax: 180000,
        occupation: ["all"],
        gender: ["all"],
        disability: false
    },
    {
        id: 12,
        name: "National Rural Livelihood Mission",
        description: "Poverty reduction program through self-employment",
        category: "employment",
        eligibility: (user) => user.income < 100000 && (user.region === "east" || user.region === "northeast"),
        region: ["east", "northeast"],
        minAge: 18,
        maxAge: 60,
        incomeMax: 100000,
        occupation: ["unemployed", "self-employed"],
        gender: ["all"],
        disability: false
    },
    {
        id: 13,
        name: "Kisan Credit Card Scheme",
        description: "Credit access for farmers with simplified procedures",
        category: "agriculture",
        eligibility: (user) => user.occupation === "farmer",
        region: ["all"],
        minAge: 18,
        maxAge: 75,
        incomeMax: 300000,
        occupation: ["farmer"],
        gender: ["all"],
        disability: false
    },
    {
        id: 14,
        name: "Pradhan Mantri Suraksha Bima Yojana",
        description: "Accidental insurance scheme for all bank account holders",
        category: "health",
        eligibility: (user) => user.age >= 18 && user.age <= 70,
        region: ["all"],
        minAge: 18,
        maxAge: 70,
        incomeMax: 1000000,
        occupation: ["all"],
        gender: ["all"],
        disability: false
    },
    {
        id: 15,
        name: "Stand Up India Scheme",
        description: "Promotes entrepreneurship among women and SC/ST communities",
        category: "employment",
        eligibility: (user) => user.gender === "female" && user.age >= 18,
        region: ["all"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 250000,
        occupation: ["self-employed"],
        gender: ["female"],
        disability: false
    },
    {
        id: 16,
        name: "National Health Protection Scheme",
        description: "Health insurance coverage of ₹5 lakh per family per year",
        category: "health",
        eligibility: (user) => user.income < 100000,
        region: ["all"],
        minAge: 0,
        maxAge: 100,
        incomeMax: 100000,
        occupation: ["all"],
        gender: ["all"],
        disability: false
    },
    {
        id: 17,
        name: "Pradhan Mantri Mudra Yojana",
        description: "Funding for non-corporate small business sector",
        category: "employment",
        eligibility: (user) => user.occupation === "self-employed" && user.age >= 18,
        region: ["all"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 300000,
        occupation: ["self-employed"],
        gender: ["all"],
        disability: false
    },
    {
        id: 18,
        name: "Digital India Land Records Modernization Programme",
        description: "Computerization of land records for transparent transactions",
        category: "agriculture",
        eligibility: (user) => user.occupation === "farmer" || user.region === "rural",
        region: ["all"],
        minAge: 18,
        maxAge: 100,
        incomeMax: 500000,
        occupation: ["farmer", "self-employed"],
        gender: ["all"],
        disability: false
    },
    {
        id: 19,
        name: "Pradhan Mantri Gramin Digital Saksharta Abhiyan",
        description: "Digital literacy program for rural households",
        category: "education",
        eligibility: (user) => user.age >= 14 && user.income < 150000 && (user.region === "rural" || user.region === "central"),
        region: ["central", "east", "west"],
        minAge: 14,
        maxAge: 60,
        incomeMax: 150000,
        occupation: ["all"],
        gender: ["all"],
        disability: false
    },
    {
        id: 20,
        name: "Swachh Bharat Mission - Gramin",
        description: "Rural cleanliness and sanitation program",
        category: "social",
        eligibility: (user) => user.region === "rural" && user.income < 200000,
        region: ["north", "south", "east", "west", "central", "northeast"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 200000,
        occupation: ["all"],
        gender: ["all"],
        disability: false
    },
    {
        id: 21,
        name: "National Apprenticeship Promotion Scheme",
        description: "Promoting apprenticeship training in the country",
        category: "education",
        eligibility: (user) => user.age >= 16 && user.age <= 24 && user.occupation === "student",
        region: ["all"],
        minAge: 16,
        maxAge: 24,
        incomeMax: 200000,
        occupation: ["student"],
        gender: ["all"],
        disability: false
    },
    {
        id: 22,
        name: "Rashtriya Krishi Vikas Yojana",
        description: "Development of agriculture and allied sectors",
        category: "agriculture",
        eligibility: (user) => user.occupation === "farmer" && user.income < 300000,
        region: ["all"],
        minAge: 18,
        maxAge: 70,
        incomeMax: 300000,
        occupation: ["farmer"],
        gender: ["all"],
        disability: false
    },
    {
        id: 23,
        name: "Pradhan Mantri Kaushal Vikas Yojana",
        description: "Skill development program for Indian youth",
        category: "education",
        eligibility: (user) => user.age >= 15 && user.age <= 35 && (user.occupation === "student" || user.occupation === "unemployed"),
        region: ["all"],
        minAge: 15,
        maxAge: 35,
        incomeMax: 250000,
        occupation: ["student", "unemployed"],
        gender: ["all"],
        disability: false
    },
    {
        id: 24,
        name: "Integrated Child Development Services",
        description: "Nutrition and health program for children and pregnant women",
        category: "health",
        eligibility: (user) => (user.gender === "female" && user.age >= 18 && user.age <= 45) || (user.age >= 0 && user.age <= 6),
        region: ["all"],
        minAge: 0,
        maxAge: 45,
        incomeMax: 100000,
        occupation: ["all"],
        gender: ["all"],
        disability: false
    },
    {
        id: 25,
        name: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana",
        description: "Rural youth employment scheme through skill development",
        category: "employment",
        eligibility: (user) => user.age >= 15 && user.age <= 35 && user.region === "rural" && user.income < 150000,
        region: ["north", "east", "central", "northeast"],
        minAge: 15,
        maxAge: 35,
        incomeMax: 150000,
        occupation: ["unemployed"],
        gender: ["all"],
        disability: false
    },
    {
        id: 26,
        name: "Pradhan Mantri Fasal Bima Yojana",
        description: "Crop insurance scheme for farmers",
        category: "agriculture",
        eligibility: (user) => user.occupation === "farmer",
        region: ["all"],
        minAge: 18,
        maxAge: 75,
        incomeMax: 300000,
        occupation: ["farmer"],
        gender: ["all"],
        disability: false
    },
    {
        id: 27,
        name: "National Social Assistance Programme",
        description: "Assistance for elderly, widows and disabled persons",
        category: "social",
        eligibility: (user) => (user.age >= 60 && user.income < 100000) || (user.disability === "yes" && user.income < 150000),
        region: ["all"],
        minAge: 0,
        maxAge: 100,
        incomeMax: 150000,
        occupation: ["all"],
        gender: ["all"],
        disability: true
    },
    {
        id: 28,
        name: "Mahatma Gandhi National Rural Employment Guarantee Act",
        description: "Guarantees 100 days of wage employment per rural household",
        category: "employment",
        eligibility: (user) => user.region === "rural" && user.income < 100000,
        region: ["north", "south", "east", "west", "central", "northeast"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 100000,
        occupation: ["unemployed", "self-employed"],
        gender: ["all"],
        disability: false
    },
    {
        id: 29,
        name: "Ladki bahin Yojna",
        description: "Provides wage employment and empowerment support for rural unemployed women.",
        category: "employment",
        eligibility: (user) => user.region === "rural" && user.income < 100000 && user.gender === "female" && user.occupation === "unemployed",
        region: ["north", "south", "east", "west", "central", "northeast"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 100000,
        occupation: ["unemployed"],
        gender: ["female"],
        disability: null // or true/false based on your scheme policy
    },
    {
        id: 30,
        name: "Jal Jeevan Mission",
        description: "Ensures potable tap water supply to every rural household by 2024",
        category: "social welfare",
        eligibility: (user) => user.region === "rural",
        region: ["north", "south", "east", "west", "central", "northeast"],
        minAge: 18,
        maxAge: 100,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: null // or true/false based on your scheme policy
    },
    {
        id: 32,
        name: "Sarva Shiksha Abhiyan",
        description: "Universalization of elementary education for children aged 6 to 14 years.",
        category: "education",
        eligibility: (user) => user.age >= 6 && user.age <= 14,
        region: ["north", "south", "east", "west", "central", "northeast"],
        minAge: 6,
        maxAge: 14,
        incomeMax: 0,
        occupation: ["student"],
        gender: ["all"],
        disability: false,
    }
    ,
    {
        id: 33,
        name: "Pradhan Mantri Matru Vandana Yojana",
        description: "Maternity benefit programme providing cash incentive of ₹5,000 to pregnant and lactating women",
        category: "health",
        eligibility: (user) => user.gender === "female" && user.age >= 19 && user.age <= 35 && user.income < 250000,
        region: ["all"],
        minAge: 19,
        maxAge: 35,
        incomeMax: 250000,
        occupation: ["all"],
        gender: ["female"],
        disability: false,
        link: "https://wcd.nic.in/maternity-benefits-programme"
    },
    {
        id: 34,
        name: "National Nutrition Mission (Poshan Abhiyaan)",
        description: "Convergence mission to reduce stunting, undernutrition, anemia and low birth weight in children",
        category: "health",
        eligibility: (user) => user.age <= 6 || (user.gender === "female" && user.age >= 15 && user.age <= 49),
        region: ["all"],
        minAge: 0,
        maxAge: 49,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://poshanabhiyaan.gov.in/"
    },
    {
        id: 35,
        name: "Mahila Shakti Kendra",
        description: "Community-based centres for women’s empowerment through training and awareness",
        category: "social welfare",
        eligibility: (user) => user.gender === "female" && user.age >= 18,
        region: ["all"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["female"],
        disability: false,
        link: "https://wcd.nic.in/mahila-shakti-kendra-scheme"
    },
    {
        id: 36,
        name: "National Livestock Mission",
        description: "Support for feed and fodder development as well as livestock health and productivity",
        category: "agriculture",
        eligibility: (user) => user.occupation === "farmer" && user.region === "rural",
        region: ["all"],
        minAge: 18,
        maxAge: 75,
        incomeMax: 0,
        occupation: ["farmer"],
        gender: ["all"],
        disability: false,
        link: "https://nlm.icar.gov.in/"
    },
    {
        id: 37,
        name: "Pradhan Mantri Matsya Sampada Yojana",
        description: "Modernization of fisheries sector for enhanced fish production and productivity",
        category: "agriculture",
        eligibility: (user) => user.occupation === "farmer" || user.occupation === "fisherman",
        region: ["all"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 0,
        occupation: ["farmer", "fisherman"],
        gender: ["all"],
        disability: false,
        link: "https://pmmsy.dof.gov.in/"
    },
    {
        id: 38,
        name: "Pradhan Mantri Jeevan Jyoti Bima Yojana",
        description: "Life insurance scheme offering accidental death cover of ₹2 lakh for just ₹12 per annum",
        category: "social welfare",
        eligibility: (user) => user.age >= 18 && user.age <= 50,
        region: ["all"],
        minAge: 18,
        maxAge: 50,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://pfrda.org.in/"
    },
    {
        id: 39,
        name: "National Means-cum-Merit Scholarship Scheme",
        description: "Scholarship of ₹12,000 per annum for meritorious students from low-income families",
        category: "education",
        eligibility: (user) => user.occupation === "student" && user.income < 150000 && user.age >= 10 && user.age <= 18,
        region: ["all"],
        minAge: 10,
        maxAge: 18,
        incomeMax: 150000,
        occupation: ["student"],
        gender: ["all"],
        disability: false,
        link: "https://scholarships.gov.in/"
    },
    {
        id: 40,
        name: "Padhe Bharat Badhe Bharat",
        description: "Programme to improve foundational literacy and numeracy in elementary schools",
        category: "education",
        eligibility: (user) => user.occupation === "student" && user.age >= 6 && user.age <= 14,
        region: ["all"],
        minAge: 6,
        maxAge: 14,
        incomeMax: 0,
        occupation: ["student"],
        gender: ["all"],
        disability: false,
        link: "https://www.education.gov.in/"
    },
    {
        id: 41,
        name: "One District One Product",
        description: "Promotes specialized products of each district by providing training and marketing support",
        category: "employment",
        eligibility: (user) => user.occupation === "self-employed" || user.occupation === "entrepreneur",
        region: ["all"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 0,
        occupation: ["self-employed", "entrepreneur"],
        gender: ["all"],
        disability: false,
        link: "https://salarpuria.com/"
    },
    {
        id: 42,
        name: "Deendayal Antyodaya Yojana – National Urban Livelihoods Mission",
        description: "Provides skill training and credit support to urban poor for sustainable livelihood",
        category: "employment",
        eligibility: (user) => user.region !== "rural" && user.age >= 18,
        region: ["all"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://pmner.gov.in/"
    }

    ,
    {
        id: 43,
        name: "National Tuberculosis Elimination Programme",
        description: "Provides free diagnostics and treatment for TB patients",
        category: "health",
        eligibility: (user) => user.age >= 0,
        region: ["all"],
        minAge: 0,
        maxAge: 100,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://tbcindia.gov.in/"
    },
    {
        id: 44,
        name: "Rashtriya Bal Swasthya Karyakram",
        description: "Child health screening and early intervention services",
        category: "health",
        eligibility: (user) => user.age >= 0 && user.age <= 18,
        region: ["all"],
        minAge: 0,
        maxAge: 18,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://nhm.gov.in/"
    },
    {
        id: 45,
        name: "National Mental Health Programme",
        description: "Community-based mental health care services",
        category: "health",
        eligibility: (user) => user.age >= 12,
        region: ["all"],
        minAge: 12,
        maxAge: 100,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://mentalhealth.gov.in/"
    },
    {
        id: 46,
        name: "Jan Aushadhi Pariyojana",
        description: "Provides quality generic medicines at affordable prices",
        category: "health",
        eligibility: (user) => user.age >= 0,
        region: ["all"],
        minAge: 0,
        maxAge: 100,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://janaushadhi.gov.in/"
    },
    {
        id: 47,
        name: "Pradhan Mantri Swasthya Suraksha Yojana",
        description: "Upgrades healthcare institutions to national standards",
        category: "health",
        eligibility: (user) => user.age >= 0,
        region: ["all"],
        minAge: 0,
        maxAge: 100,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://pmssy.gov.in/"
    },
    {
        id: 48,
        name: "National AIDS Control Programme",
        description: "Prevention and control of HIV/AIDS through treatment and awareness",
        category: "health",
        eligibility: (user) => user.age >= 15,
        region: ["all"],
        minAge: 15,
        maxAge: 100,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://naco.gov.in/"
    },
    {
        id: 49,
        name: "Mid-Day Meal Scheme",
        description: "Provides free lunches to students in government schools",
        category: "education",
        eligibility: (user) => user.occupation === "student" && user.age >= 6 && user.age <= 14,
        region: ["all"],
        minAge: 6,
        maxAge: 14,
        incomeMax: 0,
        occupation: ["student"],
        gender: ["all"],
        disability: false,
        link: "https://mdm.nic.in/"
    },
    {
        id: 50,
        name: "National Scheme for Incentive to Girls for Secondary Education",
        description: "Annual incentive of ₹500 to girls enrolled in secondary school",
        category: "education",
        eligibility: (user) => user.gender === "female" && user.age >= 11 && user.age <= 14,
        region: ["all"],
        minAge: 11,
        maxAge: 14,
        incomeMax: 0,
        occupation: ["student"],
        gender: ["female"],
        disability: false,
        link: "https://education.gov.in/"
    },
    {
        id: 51,
        name: "National Means-cum-Merit Scholarship",
        description: "Scholarship to high-performing students from low-income families",
        category: "education",
        eligibility: (user) => user.occupation === "student" && user.income < 100000,
        region: ["all"],
        minAge: 10,
        maxAge: 18,
        incomeMax: 100000,
        occupation: ["student"],
        gender: ["all"],
        disability: false,
        link: "https://scholarships.gov.in/"
    },
    {
        id: 52,
        name: "Rashtriya Uchchatar Shiksha Abhiyan",
        description: "Improves access and equity in higher education",
        category: "education",
        eligibility: (user) => user.occupation === "student" && user.age >= 18,
        region: ["all"],
        minAge: 18,
        maxAge: 30,
        incomeMax: 0,
        occupation: ["student"],
        gender: ["all"],
        disability: false,
        link: "https://rusa.nic.in/"
    },
    {
        id: 53,
        name: "Saksham Scholarship",
        description: "Scholarship for girls pursuing technical education",
        category: "education",
        eligibility: (user) => user.gender === "female" && user.occupation === "student" && user.age >= 18,
        region: ["all"],
        minAge: 18,
        maxAge: 25,
        incomeMax: 0,
        occupation: ["student"],
        gender: ["female"],
        disability: false,
        link: "https://scholarships.gov.in/"
    },
    {
        id: 54,
        name: "National Apprenticeship Promotion Scheme",
        description: "Provides stipend support to apprentices in formal sector",
        category: "education",
        eligibility: (user) => user.age >= 18 && user.age <= 24 && user.occupation === "student",
        region: ["all"],
        minAge: 18,
        maxAge: 24,
        incomeMax: 0,
        occupation: ["student"],
        gender: ["all"],
        disability: false,
        link: "https://apprenticeshipindia.gov.in/"
    },
    {
        id: 55,
        name: "Samagra Shiksha",
        description: "Integrated scheme for school education from pre-school to senior secondary",
        category: "education",
        eligibility: (user) => user.occupation === "student" && user.age <= 18,
        region: ["all"],
        minAge: 3,
        maxAge: 18,
        incomeMax: 0,
        occupation: ["student"],
        gender: ["all"],
        disability: false,
        link: "https://samagra.education.gov.in/"
    },
    {
        id: 56,
        name: "Skill India Mission",
        description: "Provides skilling and certification for youth",
        category: "employment",
        eligibility: (user) => user.age >= 18 && user.age <= 35,
        region: ["all"],
        minAge: 18,
        maxAge: 35,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://msde.gov.in/"
    },
    {
        id: 57,
        name: "Pradhan Mantri Kaushal Vikas Yojana",
        description: "Short-term skill training for Indian youth",
        category: "employment",
        eligibility: (user) => user.age >= 15 && user.age <= 35,
        region: ["all"],
        minAge: 15,
        maxAge: 35,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://pmkvyofficial.org/"
    },
    {
        id: 58,
        name: "Prime Minister's Employment Generation Programme",
        description: "Generates employment through credit-linked subsidy",
        category: "employment",
        eligibility: (user) => user.occupation === "entrepreneur" && user.age >= 18,
        region: ["all"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 0,
        occupation: ["entrepreneur"],
        gender: ["all"],
        disability: false,
        link: "https://www.kviconline.gov.in/"
    },
    {
        id: 59,
        name: "National Urban Livelihoods Mission",
        description: "Supports skill development and self-employment for urban poor",
        category: "employment",
        eligibility: (user) => user.region !== "rural" && user.age >= 18,
        region: ["all"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://nulm.gov.in/"
    },
    {
        id: 60,
        name: "Mahatma Gandhi National Rural Employment Guarantee Act",
        description: "Guarantees 100 days of wage employment in rural areas",
        category: "employment",
        eligibility: (user) => user.region === "rural" && user.age >= 18,
        region: ["all"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://nrega.nic.in/"
    },
    {
        id: 61,
        name: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana",
        description: "Skill training and placement for rural youth",
        category: "employment",
        eligibility: (user) => user.region === "rural" && user.age >= 15 && user.age <= 35,
        region: ["all"],
        minAge: 15,
        maxAge: 35,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://ddugky.gov.in/"
    },
    {
        id: 62,
        name: "Stand Up India",
        description: "Facilitates bank loans for women & SC/ST entrepreneurs",
        category: "employment",
        eligibility: (user) => (user.gender === "female" || user.caste === "SC" || user.caste === "ST") && user.age >= 18,
        region: ["all"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 0,
        occupation: ["entrepreneur"],
        gender: ["all"],
        disability: false,
        link: "https://standupmitra.in/"
    },
    {
        id: 63,
        name: "Pradhan Mantri Rojgar Protsahan Yojana",
        description: "Incentivizes employers to generate new employment",
        category: "employment",
        eligibility: (user) => user.occupation === "employed",
        region: ["all"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 0,
        occupation: ["employed"],
        gender: ["all"],
        disability: false,
        link: "https://www.ncs.gov.in/"
    },
    {
        id: 64,
        name: "National Fisheries Development Board Scheme",
        description: "Development and management of fisheries",
        category: "agriculture",
        eligibility: (user) => user.occupation === "fisherman",
        region: ["all"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 0,
        occupation: ["fisherman"],
        gender: ["all"],
        disability: false,
        link: "https://nfdb.gov.in/"
    },
    {
        id: 65,
        name: "Paramparagat Krishi Vikas Yojana",
        description: "Promotes organic farming through cluster approach",
        category: "agriculture",
        eligibility: (user) => user.occupation === "farmer",
        region: ["all"],
        minAge: 18,
        maxAge: 70,
        incomeMax: 0,
        occupation: ["farmer"],
        gender: ["all"],
        disability: false,
        link: "https://pkrishi.nic.in/"
    },
    {
        id: 66,
        name: "Soil Health Card Scheme",
        description: "Provides soil health cards to farmers every two years",
        category: "agriculture",
        eligibility: (user) => user.occupation === "farmer",
        region: ["all"],
        minAge: 18,
        maxAge: 75,
        incomeMax: 0,
        occupation: ["farmer"],
        gender: ["all"],
        disability: false,
        link: "https://soilhealth.dac.gov.in/"
    },
    {
        id: 67,
        name: "Pradhan Mantri Fasal Bima Yojana",
        description: "Crop insurance against natural calamities",
        category: "agriculture",
        eligibility: (user) => user.occupation === "farmer",
        region: ["all"],
        minAge: 18,
        maxAge: 75,
        incomeMax: 0,
        occupation: ["farmer"],
        gender: ["all"],
        disability: false,
        link: "https://pmfby.gov.in/"
    },
    {
        id: 68,
        name: "National Food Security Mission",
        description: "Enhances production of rice, wheat, pulses and coarse cereals",
        category: "agriculture",
        eligibility: (user) => user.occupation === "farmer",
        region: ["all"],
        minAge: 18,
        maxAge: 70,
        incomeMax: 0,
        occupation: ["farmer"],
        gender: ["all"],
        disability: false,
        link: "https://nfsm.gov.in/"
    },
    {
        id: 69,
        name: "Mission Fingerling",
        description: "Supports fish seed production to boost aquaculture",
        category: "agriculture",
        eligibility: (user) => user.occupation === "fisherman",
        region: ["all"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 0,
        occupation: ["fisherman"],
        gender: ["all"],
        disability: false,
        link: "https://nfdb.gov.in/"
    },
    {
        id: 70,
        name: "Pradhan Mantri Kisan Samman Nidhi",
        description: "Direct income support of ₹6,000 per year to small farmers",
        category: "agriculture",
        eligibility: (user) => user.occupation === "farmer" && user.income < 200000,
        region: ["all"],
        minAge: 18,
        maxAge: 70,
        incomeMax: 200000,
        occupation: ["farmer"],
        gender: ["all"],
        disability: false,
        link: "https://pmkisan.gov.in/"
    },
    {
        id: 71,
        name: "Pradhan Mantri Awaas Yojana – Gramin",
        description: "Subsidized housing for rural poor",
        category: "social welfare",
        eligibility: (user) => user.region === "rural" && user.income < 180000,
        region: ["all"],
        minAge: 18,
        maxAge: 70,
        incomeMax: 180000,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://pmayg.nic.in/"
    },
    {
        id: 72,
        name: "National Social Assistance Programme",
        description: "Pensions for elderly, widows and disabled in poverty",
        category: "social welfare",
        eligibility: (user) => (user.age >= 60 && user.income < 100000) || (user.disability === true && user.income < 150000),
        region: ["all"],
        minAge: 0,
        maxAge: 100,
        incomeMax: 150000,
        occupation: ["all"],
        gender: ["all"],
        disability: true,
        link: "https://nsap.nic.in/"
    },
    {
        id: 73,
        name: "Pradhan Mantri Ujjwala Yojana",
        description: "Free LPG connections to women from BPL households",
        category: "social welfare",
        eligibility: (user) => user.gender === "female" && user.income < 100000,
        region: ["all"],
        minAge: 18,
        maxAge: 70,
        incomeMax: 100000,
        occupation: ["all"],
        gender: ["female"],
        disability: false,
        link: "https://pmuy.gov.in/"
    },
    {
        id: 74,
        name: "Beti Bachao Beti Padhao",
        description: "Promotes survival, protection and education of girl child",
        category: "social welfare",
        eligibility: (user) => user.gender === "female" && user.age <= 18,
        region: ["all"],
        minAge: 0,
        maxAge: 18,
        incomeMax: 0,
        occupation: ["student"],
        gender: ["female"],
        disability: false,
        link: "https://betibachao.gov.in/"
    },
    {
        id: 75,
        name: "Sukanya Samriddhi Yojana",
        description: "Small deposit savings scheme for girl child",
        category: "social welfare",
        eligibility: (user) => user.gender === "female" && user.age <= 10,
        region: ["all"],
        minAge: 0,
        maxAge: 10,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["female"],
        disability: false,
        link: "https://www.nsdl.co.in/"
    },
    {
        id: 76,
        name: "Pradhan Mantri Jeevan Jyoti Bima Yojana",
        description: "Life insurance cover at ₹2 lakh on accidental death",
        category: "social welfare",
        eligibility: (user) => user.age >= 18 && user.age <= 50,
        region: ["all"],
        minAge: 18,
        maxAge: 50,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://pfrda.org.in/"
    },
    {
        id: 77,
        name: "Pradhan Mantri Suraksha Bima Yojana",
        description: "Accident insurance cover at ₹2 lakh for ₹12 per annum",
        category: "social welfare",
        eligibility: (user) => user.age >= 18 && user.age <= 70,
        region: ["all"],
        minAge: 18,
        maxAge: 70,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://pfrda.org.in/"
    },
    {
        id: 78,
        name: "Deen Dayal Upadhyaya Antyodaya Yojana",
        description: "Supports urban poor through skill training and micro-enterprise",
        category: "social welfare",
        eligibility: (user) => user.region !== "rural" && user.age >= 18,
        region: ["all"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://pmner.gov.in/"
    },
    {
        id: 79,
        name: "National Social Assistance Programme",
        description: "Provides social assistance to marginalized groups",
        category: "social welfare",
        eligibility: (user) => user.income < 100000,
        region: ["all"],
        minAge: 0,
        maxAge: 100,
        incomeMax: 100000,
        occupation: ["all"],
        gender: ["all"],
        disability: true,
        link: "https://nsap.nic.in/"
    },
    {
        id: 80,
        name: "Pradhan Mantri Mudra Yojana",
        description: "Provides loans up to ₹10 lakh to non-corporate small business",
        category: "employment",
        eligibility: (user) => user.occupation === "entrepreneur" && user.age >= 18,
        region: ["all"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 0,
        occupation: ["entrepreneur"],
        gender: ["all"],
        disability: false,
        link: "https://mudra.gov.in/"
    },
    {
        id: 81,
        name: "Atal Pension Yojana",
        description: "Pension scheme for unorganized sector workers",
        category: "social welfare",
        eligibility: (user) => user.age >= 18 && user.age <= 40,
        region: ["all"],
        minAge: 18,
        maxAge: 40,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://pfrda.org.in/"
    },
    {
        id: 82,
        name: "Pradhan Mantri Shram Yogi Maan-Dhan",
        description: "Pension for unorganized sector workers at ₹3,000/month",
        category: "social welfare",
        eligibility: (user) => user.age >= 18 && user.age <= 40,
        region: ["all"],
        minAge: 18,
        maxAge: 40,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://maandhan.in/"
    },
    {
        id: 83,
        name: "PM Kisan Samman Nidhi Yojana",
        description: "Income support to small and marginal farmers",
        category: "agriculture",
        eligibility: (user) => user.occupation === "farmer" && user.income < 200000,
        region: ["all"],
        minAge: 18,
        maxAge: 60,
        incomeMax: 200000,
        occupation: ["farmer"],
        gender: ["all"],
        disability: false,
        link: "https://pmkisan.gov.in/"
    },
    {
        id: 84,
        name: "Pradhan Mantri Matsya Sampada Yojana",
        description: "Development of fisheries sector through investment support",
        category: "agriculture",
        eligibility: (user) => user.occupation === "fisherman",
        region: ["all"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 0,
        occupation: ["fisherman"],
        gender: ["all"],
        disability: false,
        link: "https://pmmsy.dof.gov.in/"
    },
    {
        id: 85,
        name: "National Beekeeping and Honey Mission",
        description: "Promotes beekeeping for livelihood diversification",
        category: "agriculture",
        eligibility: (user) => user.occupation === "farmer",
        region: ["all"],
        minAge: 18,
        maxAge: 70,
        incomeMax: 0,
        occupation: ["farmer"],
        gender: ["all"],
        disability: false,
        link: "https://nrcpithoragarh.org/"
    },
    {
        id: 86,
        name: "National Livestock Mission",
        description: "Enhances livestock productivity and health services",
        category: "agriculture",
        eligibility: (user) => user.occupation === "farmer",
        region: ["all"],
        minAge: 18,
        maxAge: 75,
        incomeMax: 0,
        occupation: ["farmer"],
        gender: ["all"],
        disability: false,
        link: "https://nlm.icar.gov.in/"
    },
    {
        id: 87,
        name: "Pradhan Mantri Fasal Bima Yojana",
        description: "Ensures crop insurance for farmers against calamities",
        category: "agriculture",
        eligibility: (user) => user.occupation === "farmer",
        region: ["all"],
        minAge: 18,
        maxAge: 75,
        incomeMax: 0,
        occupation: ["farmer"],
        gender: ["all"],
        disability: false,
        link: "https://pmfby.gov.in/"
    },
    {
        id: 88,
        name: "Prime Minister’s Employment Generation Programme",
        description: "Generates employment through credit-linked subsidy",
        category: "employment",
        eligibility: (user) => user.occupation === "entrepreneur" && user.age >= 18,
        region: ["all"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 0,
        occupation: ["entrepreneur"],
        gender: ["all"],
        disability: false,
        link: "https://www.kviconline.gov.in/"
    },
    {
        id: 89,
        name: "Aajeevika – National Rural Livelihood Mission",
        description: "Poverty alleviation through self-help group formation",
        category: "social welfare",
        eligibility: (user) => user.region === "rural" && user.age >= 18,
        region: ["all"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://nrlm.gov.in/"
    },
    {
        id: 90,
        name: "National Social Security Programme",
        description: "Provides social security schemes for unorganized workers",
        category: "social welfare",
        eligibility: (user) => user.occupation !== undefined && user.age >= 18,
        region: ["all"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://msme.gov.in/"
    },
    {
        id: 91,
        name: "PM SVANidhi Scheme",
        description: "Micro-credit facility for street vendors",
        category: "employment",
        eligibility: (user) => user.occupation === "street_vendor",
        region: ["all"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 0,
        occupation: ["street_vendor"],
        gender: ["all"],
        disability: false,
        link: "https://pmsvanidhi.mohua.gov.in/"
    },
    {
        id: 92,
        name: "National Programme for Organic Production",
        description: "Certification and support for organic producers",
        category: "agriculture",
        eligibility: (user) => user.occupation === "farmer",
        region: ["all"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 0,
        occupation: ["farmer"],
        gender: ["all"],
        disability: false,
        link: "https://apeda.gov.in/"
    }
    ,

    {
        id: 93,
        name: "National AYUSH Mission",
        description: "Promotes AYUSH systems of medicine through infrastructure support and training",
        category: "health",
        eligibility: (user) => user.age >= 0,
        region: ["all"],
        minAge: 0,
        maxAge: 100,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://namayush.gov.in/"
    },
    {
        id: 94,
        name: "National Programme for Control of Blindness",
        description: "Free diagnosis and treatment for cataract and other eye diseases",
        category: "health",
        eligibility: (user) => user.age >= 0,
        region: ["all"],
        minAge: 0,
        maxAge: 100,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://npcb.nic.in/"
    },
    {
        id: 95,
        name: "National Leprosy Eradication Programme",
        description: "Provides free diagnosis and multidrug therapy for leprosy patients",
        category: "health",
        eligibility: (user) => user.age >= 0,
        region: ["all"],
        minAge: 0,
        maxAge: 100,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://nlep.nic.in/"
    },
    {
        id: 96,
        name: "NPCDCS (Cancer, Diabetes, CVD & Stroke)",
        description: "Screening, prevention and treatment services for non-communicable diseases",
        category: "health",
        eligibility: (user) => user.age >= 30,
        region: ["all"],
        minAge: 30,
        maxAge: 100,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://dohfw.gov.in/"
    },
    {
        id: 97,
        name: "National Urban Health Mission",
        description: "Primary healthcare and outreach services for urban poor",
        category: "health",
        eligibility: (user) => user.region !== "rural",
        region: ["all"],
        minAge: 0,
        maxAge: 100,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://nhm.gov.in/"
    },
    {
        id: 98,
        name: "Unified District Information System for Education (UDISE)",
        description: "Collects data on school performance and infrastructure to improve elementary education",
        category: "education",
        eligibility: (user) => user.occupation === "student" && user.age >= 6 && user.age <= 14,
        region: ["all"],
        minAge: 6,
        maxAge: 14,
        incomeMax: 0,
        occupation: ["student"],
        gender: ["all"],
        disability: false,
        link: "https://udiseplus.gov.in/"
    },
    {
        id: 99,
        name: "National Digital Literacy Mission",
        description: "Basic IT literacy training for rural households",
        category: "education",
        eligibility: (user) => user.region === "rural" && user.age >= 14,
        region: ["all"],
        minAge: 14,
        maxAge: 60,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://ndlm.in/"
    },
    {
        id: 100,
        name: "Mahatma Gandhi National Fellowship",
        description: "Two-year fellowship to strengthen local governance in aspirational districts",
        category: "education",
        eligibility: (user) => user.age >= 21 && user.age <= 35 && user.occupation === "student",
        region: ["all"],
        minAge: 21,
        maxAge: 35,
        incomeMax: 0,
        occupation: ["student"],
        gender: ["all"],
        disability: false,
        link: "https://niti.gov.in/"
    },
    {
        id: 101,
        name: "Pradhan Mantri Vaya Vandana Yojana",
        description: "Pension scheme offering 8% annual return for senior citizens",
        category: "social welfare",
        eligibility: (user) => user.age >= 60,
        region: ["all"],
        minAge: 60,
        maxAge: 100,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://pfrda.org.in/"
    },
    {
        id: 102,
        name: "Dr. Ambedkar Post Matric Scholarship for SC",
        description: "Scholarship for SC students pursuing higher studies",
        category: "education",
        eligibility: (user) => user.caste === "SC" && user.occupation === "student",
        region: ["all"],
        minAge: 17,
        maxAge: 30,
        incomeMax: 0,
        occupation: ["student"],
        gender: ["all"],
        disability: false,
        link: "https://scholarships.gov.in/"
    },
    {
        id: 103,
        name: "Post Matric Scholarship for OBC",
        description: "Financial assistance for OBC students in higher education",
        category: "education",
        eligibility: (user) => user.caste === "OBC" && user.occupation === "student",
        region: ["all"],
        minAge: 17,
        maxAge: 30,
        incomeMax: 0,
        occupation: ["student"],
        gender: ["all"],
        disability: false,
        link: "https://scholarships.gov.in/"
    },
    {
        id: 104,
        name: "Pradhan Mantri Kisan Maandhan Yojana",
        description: "Pension scheme for small and marginal farmers at ₹3,000 per month",
        category: "social welfare",
        eligibility: (user) => user.occupation === "farmer" && user.age >= 18 && user.age <= 40,
        region: ["all"],
        minAge: 18,
        maxAge: 40,
        incomeMax: 0,
        occupation: ["farmer"],
        gender: ["all"],
        disability: false,
        link: "https://maandhan.in/"
    },
    {
        id: 105,
        name: "National Child Labour Project",
        description: "Rehabilitation and education support for child labourers",
        category: "education",
        eligibility: (user) => user.age >= 5 && user.age <= 14 && user.occupation === "child labourer",
        region: ["all"],
        minAge: 5,
        maxAge: 14,
        incomeMax: 0,
        occupation: ["child labourer"],
        gender: ["all"],
        disability: false,
        link: "https://clc.gov.in/"
    },
    {
        id: 106,
        name: "ICDS Supplementary Nutrition Programme",
        description: "Provides hot meals and nutrition to pregnant women and children",
        category: "health",
        eligibility: (user) => (user.gender === "female" && user.age >= 18 && user.age <= 45) || (user.age >= 0 && user.age <= 6),
        region: ["all"],
        minAge: 0,
        maxAge: 45,
        incomeMax: 0,
        occupation: ["all"],
        gender: ["all"],
        disability: false,
        link: "https://icds-wcd.nic.in/"
    },
    {
        id: 107,
        name: "National Bamboo Mission",
        description: "Promotes bamboo cultivation and processing for rural livelihoods",
        category: "agriculture",
        eligibility: (user) => user.occupation === "farmer",
        region: ["all"],
        minAge: 18,
        maxAge: 70,
        incomeMax: 0,
        occupation: ["farmer"],
        gender: ["all"],
        disability: false,
        link: "https://nationalbambooMission.nic.in/"
    },
    {
        id: 108,
        name: "Mission for Integrated Development of Horticulture",
        description: "Provides subsidies and support for horticulture crops",
        category: "agriculture",
        eligibility: (user) => user.occupation === "farmer",
        region: ["all"],
        minAge: 18,
        maxAge: 70,
        incomeMax: 0,
        occupation: ["farmer"],
        gender: ["all"],
        disability: false,
        link: "https://midh.gov.in/"
    },
    {
        id: 109,
        name: "National Scheme on Welfare of Fishermen",
        description: "Provides social security and support services to fishermen",
        category: "social welfare",
        eligibility: (user) => user.occupation === "fisherman",
        region: ["all"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 0,
        occupation: ["fisherman"],
        gender: ["all"],
        disability: false,
        link: "https://nfdb.gov.in/"
    },
    {
        id: 110,
        name: "Pradhan Mantri Matsya Sampada Yojana",
        description: "Fishery sector modernization for increased production",
        category: "agriculture",
        eligibility: (user) => user.occupation === "fisherman",
        region: ["all"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 0,
        occupation: ["fisherman"],
        gender: ["all"],
        disability: false,
        link: "https://pmmsy.dof.gov.in/"
    },
    {
        id: 111,
        name: "National Beekeeping and Honey Mission",
        description: "Promotes beekeeping as an ancillary enterprise for farmers",
        category: "agriculture",
        eligibility: (user) => user.occupation === "farmer",
        region: ["all"],
        minAge: 18,
        maxAge: 70,
        incomeMax: 0,
        occupation: ["farmer"],
        gender: ["all"],
        disability: false,
        link: "https://nrcpithoragarh.org/"
    },
    {
        id: 112,
        name: "National Fisheries Development Board Scheme",
        description: "Enhances fisheries productivity through training and support",
        category: "agriculture",
        eligibility: (user) => user.occupation === "fisherman",
        region: ["all"],
        minAge: 18,
        maxAge: 65,
        incomeMax: 0,
        occupation: ["fisherman"],
        gender: ["all"],
        disability: false,
        link: "https://nfdb.gov.in/"
    }



];

// DOM elements
const eligibilityForm = document.getElementById('eligibilityForm');
const inputResult = document.getElementById('inputResult');
const resultSection = document.getElementById('resultSection');
const schemeResults = document.getElementById('schemeResults');
const allSchemes = document.getElementById('allSchemes');
const eligibleCount = document.getElementById('eligibleCount');
const filterCategory = document.getElementById('filterCategory');
const filterRegion = document.getElementById('filterRegion');
const tabs = document.querySelectorAll('.tab');

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    renderAllSchemes();

    // Tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            if (tab.dataset.tab === 'results') {
                document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Filter event listeners
    filterCategory.addEventListener('change', renderAllSchemes);
    filterRegion.addEventListener('change', renderAllSchemes);
});

// Form submission
eligibilityForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get user input
    const userData = {
        age: parseInt(document.getElementById('age').value),
        income: parseInt(document.getElementById('income').value),
        region: document.getElementById('region').value,
        occupation: document.getElementById('occupation').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        disability: document.getElementById('disability').value
    };

    // Check eligibility
    const eligibleSchemes = checkEligibility(userData);

    // Display results
    displayResults(eligibleSchemes, userData);

    // Show result section
    resultSection.style.display = 'block';
    inputResult.style.display = 'none';

    // Scroll to results
    resultSection.scrollIntoView({ behavior: 'smooth' });
});

// Reset form
eligibilityForm.addEventListener('reset', function () {
    resultSection.style.display = 'none';
    inputResult.style.display = 'block';
});

// Check eligibility function
function checkEligibility(user) {
    return governmentSchemes.filter(scheme => {
        // Basic eligibility checks
        if (user.age < scheme.minAge || user.age > scheme.maxAge) return false;
        if (user.income > scheme.incomeMax) return false;
        if (!scheme.region.includes("all") && !scheme.region.includes(user.region)) return false;
        if (!scheme.occupation.includes("all") && !scheme.occupation.includes(user.occupation)) return false;
        if (!scheme.gender.includes("all") && !scheme.gender.includes(user.gender)) return false;
        if (scheme.disability && user.disability === "no") return false;

        // Run custom eligibility function if exists
        if (scheme.eligibility && typeof scheme.eligibility === 'function') {
            return scheme.eligibility(user);
        }

        return true;
    });
}

// Display results function
function displayResults(schemes, user) {
    eligibleCount.textContent = schemes.length;
    schemeResults.innerHTML = '';

    if (schemes.length === 0) {
        schemeResults.innerHTML = `
                    <div class="result-card">
                        <h3>No Schemes Found</h3>
                        <p>Based on your profile, we couldn't find any government schemes you're currently eligible for.</p>
                        <p>Please check back later or contact your local government office for more information.</p>
                    </div>
                `;
        return;
    }

    schemes.forEach(scheme => {
        const schemeElement = document.createElement('div');
        schemeElement.className = 'scheme-item';
        schemeElement.innerHTML = `
                    <div class="scheme-header">
                        <div class="scheme-name">${scheme.name}</div>
                        <div class="scheme-category">${scheme.category.charAt(0).toUpperCase() + scheme.category.slice(1)}</div>
                    </div>
                    <div class="scheme-details">${scheme.description}</div>
                    <div><strong>Eligibility:</strong> Age ${scheme.minAge}-${scheme.maxAge}, Income < ₹${scheme.incomeMax.toLocaleString()}</div>
                    <div class="eligibility-tag eligible">You are eligible</div>
                `;
        schemeResults.appendChild(schemeElement);
    });
}

// Render all schemes with filtering
function renderAllSchemes() {
    const categoryFilter = filterCategory.value;
    const regionFilter = filterRegion.value;

    const filteredSchemes = governmentSchemes.filter(scheme => {
        if (categoryFilter !== 'all' && scheme.category !== categoryFilter) return false;
        if (regionFilter !== 'all' && !scheme.region.includes(regionFilter)) return false;
        return true;
    });

    allSchemes.innerHTML = '';

    filteredSchemes.forEach(scheme => {
        const schemeElement = document.createElement('div');
        schemeElement.className = 'scheme-item';
        schemeElement.innerHTML = `
                    <div class="scheme-header">
                        <div class="scheme-name">${scheme.name}</div>
                        <div class="scheme-category">${scheme.category.charAt(0).toUpperCase() + scheme.category.slice(1)}</div>
                    </div>
                    <div class="scheme-details">${scheme.description}</div>
                    <div><strong>Eligibility:</strong> Age ${scheme.minAge}-${scheme.maxAge}, Income < ₹${scheme.incomeMax.toLocaleString()}</div>
                    <div><strong>Region:</strong> ${scheme.region.map(r => r.charAt(0).toUpperCase() + r.slice(1)).join(', ')}</div>
                `;
        allSchemes.appendChild(schemeElement);
    });
}


// Get the search input element
const searchSchemesInput = document.getElementById('searchSchemes');

// Store the last search query to avoid unnecessary re-renders
let lastSearchQuery = "";

// Enhance renderAllSchemes to accept a search query
function renderAllSchemes(searchQuery = "") {
    const categoryFilter = filterCategory.value;
    const regionFilter = filterRegion.value;

    // Normalize search query
    const query = searchQuery.trim().toLowerCase();

    const filteredSchemes = governmentSchemes.filter(scheme => {
        // Category filter
        if (categoryFilter !== 'all' && scheme.category !== categoryFilter) return false;
        // Region filter
        if (regionFilter !== 'all' && !scheme.region.includes(regionFilter)) return false;
        // Search filter
        if (query) {
            // Search in name and description
            const name = scheme.name.toLowerCase();
            const description = scheme.description.toLowerCase();
            if (!name.includes(query) && !description.includes(query)) return false;
        }
        return true;
    });

    allSchemes.innerHTML = '';

    if (filteredSchemes.length === 0) {
        allSchemes.innerHTML = `<div class="no-results">No schemes found matching your criteria.</div>`;
        return;
    }

    filteredSchemes.forEach(scheme => {
        const schemeElement = document.createElement('div');
        schemeElement.className = 'scheme-item';
        schemeElement.innerHTML = `
                    <div class="scheme-header">
                        <div class="scheme-name">${scheme.name}</div>
                        <div class="scheme-category">${scheme.category.charAt(0).toUpperCase() + scheme.category.slice(1)}</div>
                    </div>
                    <div class="scheme-details">${scheme.description}</div>
                    <div><strong>Eligibility:</strong> Age ${scheme.minAge}-${scheme.maxAge}, Income < ₹${scheme.incomeMax.toLocaleString()}</div>
                    <div><strong>Region:</strong> ${scheme.region.map(r => r.charAt(0).toUpperCase() + r.slice(1)).join(', ')}</div>
                `;
        allSchemes.appendChild(schemeElement);
    });
}

// Listen for input in the search box and re-render the schemes list
searchSchemesInput.addEventListener('input', function () {
    const query = this.value;
    lastSearchQuery = query;
    renderAllSchemes(query);
});

// Also update search results when filters change
filterCategory.addEventListener('change', function () {
    renderAllSchemes(lastSearchQuery);
});
filterRegion.addEventListener('change', function () {
    renderAllSchemes(lastSearchQuery);
});

// Initial render with no search query
renderAllSchemes();



// ranking logic

function rankSchemes(user, schemes, weights) {
    return schemes
        .filter(s => s.eligibility(user))
        .map(scheme => {
            // compute 0–1 scores:
            const R = scheme.region.includes(user.region) ? 1 : 0;
            const O = scheme.occupation.includes("all") || scheme.occupation.includes(user.occupation) ? 1 : 0;
            const G = scheme.gender.includes("all") || scheme.gender.includes(user.gender) ? 1 : 0;
            const D = !scheme.disability || (scheme.disability && user.disability) ? 1 : 0;
            const mid = (scheme.minAge + scheme.maxAge) / 2;
            const A = Math.max(1 - Math.abs(user.age - mid) / ((scheme.maxAge - scheme.minAge) / 2), 0);
            const I = scheme.incomeMax > 0
                ? Math.max(1 - user.income / scheme.incomeMax, 0)
                : 1;

            // weighted sum:
            const S =
                weights.region * R +
                weights.occupation * O +
                weights.gender * G +
                weights.disability * D +
                weights.age * A +
                weights.income * I;

            return { scheme, score: S };
        })
        // sort descending by score
        .sort((a, b) => b.score - a.score)
        .map(x => x.scheme);
}

// example weights (you choose these):
const weights = {
    region: 3,
    occupation: 2,
    gender: 1,
    disability: 1,
    age: 1,
    income: 1
};

// use it:
const bestFirst = rankSchemes(currentUser, governmentSchemes, weights);
console.log(bestFirst);
