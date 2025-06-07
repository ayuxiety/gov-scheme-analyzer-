

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
const languageSelector = document.getElementById('language');

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

// Multilingual support - placeholder for actual implementation
languageSelector.addEventListener('change', function () {
    alert(`Language changed to ${this.options[this.selectedIndex].text}. Actual multilingual implementation would require translation files.`);
});
