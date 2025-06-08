

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
        disability: false
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
