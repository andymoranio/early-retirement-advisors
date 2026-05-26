// Hard-coded advisor data
const advisors = [
  {
    firm_name: 'Ad Astra Financial Planning',
    advisor_name: 'Andy Moran',
    city: 'Los Altos',
    state: 'CA',
    latitude: 37.3852,
    longitude: -122.1141,
    fee_structure: '$9,600/year after $2,500 onboarding fee. $2,250 and $750 project offerings available.',
    website: 'https://adastrafp.com',
  },
/*
  NOTE: Never confirmed
  {
    firm_name: 'Measure Twice Financial',
    advisor_name: 'Cody Garrett',
    city: 'Pearland',
    state: 'TX',
    latitude: 29.563566,
    longitude: -95.286049,
    fee_structure: '$7,650 for a one-time plan with updates after that at $450/hr.',
    website: 'https://measuretwicefinancial.com',
  },
*/
  {
    firm_name: 'Cornerstone Financial Planning',
    advisor_name: 'Dan Huffman',
    city: 'Colorado Springs',
    state: 'CO',
    latitude: 38.833881,
    longitude: -104.821365,
    fee_structure: '3 packages at $5,000/year, $6,000-$12,000/year, and $6,000-$15,000/year.',
    website: 'https://cornerstonefinancialplanning.com',
  },
  {
    firm_name: '7 Saturdays Financial',
    advisor_name: 'Allen Mueller',
    city: 'Wylie',
    state: 'TX',
    latitude: 33.015121,
    longitude: -96.538879,
    fee_structure: '$8,000/year for individuals, $9,600/year for 2+ households.',
    website: 'https://7saturdaysfinancial.com',
  },
  {
    firm_name: 'Downshift Financial',
    advisor_name: 'Edwin Liang',
    city: 'Boulder',
    state: 'CO',
    latitude: 40.0150,
    longitude: -105.2705,
    fee_structure: '$8,000/year.',
    website: 'https://downshiftfinancial.com',
  },
  {
    firm_name: 'Mullaney Financial',
    advisor_name: 'Sean Mullaney',
    city: 'Woodland Hills',
    state: 'CA',
    latitude: 34.1685,
    longitude: -118.6058,
    fee_structure: '$7,000 for a one-time plan.',
    website: 'https://mullaneyfinancial.com',
  },
  {
    firm_name: 'Experience Your Wealth',
    advisor_name: 'Jake Northrup',
    city: 'Bristol',
    state: 'RI',
    latitude: 41.6771,
    longitude: -71.2662,
    fee_structure: 'Starting at $10,000/year after $1,500 upfront fee. Based on percentage of income and net worth.',
    website: 'https://experienceyourwealth.com',
  },
  {
    firm_name: 'North Financial Advisors',
    advisor_name: 'Cady North',
    city: 'San Diego',
    state: 'CA',
    latitude: 32.7157,
    longitude: -117.1611,
    fee_structure: 'Starting at $6,625 for individuals, $10,500 for 2+ households. Based on net worth.',
    website: 'https://northfinancialadvisors.com',
  },
  {
    firm_name: 'Modern Family Finance',
    advisor_name: 'Jennifer Dazols',
    city: 'Oakland',
    state: 'CA',
    latitude: 37.910076,
    longitude: -122.065186,
    fee_structure: 'Based on percentage of assets under management.',
    website: 'https://modernfamilyfinance.com',
  },
  {
    firm_name: 'Elgon Financial Advisors',
    advisor_name: 'Jane Mepham',
    city: 'Austin',
    state: 'TX',
    latitude: 30.2672,
    longitude: -97.7431,
    fee_structure: 'Not listed.',
    website: 'https://elgonfa.com',
  },
  {
    firm_name: 'Next Adventure Financial',
    advisor_name: 'Cody Lachner',
    city: 'Lafayette',
    state: 'IN',
    latitude: 40.4167,
    longitude: -86.8753,
    fee_structure: 'Blended tier based on percentage of assets under management.',
    website: 'https://nextadventurefinancial.com',
  },
  {
    firm_name: 'Ruby Pebble Financial Planning',
    advisor_name: 'Jamie Clark',
    city: 'Seattle',
    state: 'WA',
    latitude: 47.6061,
    longitude: -122.3328,
    fee_structure: 'From $4,000-$10,000/year after one-time plan, which is typically $6,000 for individuals, $7,500 for couples. Based on lifestyle and needs.',
    website: 'https://rubypebblefp.com',
  },
  {
    firm_name: 'DRS Financial Partners',
    advisor_name: 'Stanley Himeno-Okamoto',
    city: 'San Jose',
    state: 'CA',
    latitude: 37.3387,
    longitude: -121.8853,
    fee_structure: 'Starting at $3,600/year after one-time plan, which is typically $4,000 for individuals, $4,800 for couples. Based on complexity. Investment management is a separate fee based on percentage of assets under management. Project-based engagements start at $1,250 @ $320/hour.',
    website: 'https://drsfp.com',
  },
  {
    firm_name: 'Spark Financials',
    advisor_name: 'Danielle Miura',
    city: 'Ripon',
    state: 'CA',
    latitude: 37.7395,
    longitude: -121.1354,
    fee_structure: '1% of assets under management',
    website: 'https://spark-fin.com',
  },
  {
    firm_name: 'Scaled Finance',
    advisor_name: 'Kevin Estes',
    city: 'Renton',
    state: 'WA',
    latitude: 47.4797,
    longitude: -122.2079,
    fee_structure: '$250/hr. Sample engagements: $4,000 small, $6,000 medium, $8,000 large.',
    website: 'https://www.scaledfinance.com',
  },
  {
    firm_name: 'CapitalWe',
    advisor_name: 'Vrishin Subramaniam',
    city: 'Arlington',
    state: 'VA',
    latitude: 38.8816,
    longitude: -77.0910,
    fee_structure: '1% of assets under management or a custom fee based on income and net worth.',
    website: 'https://www.capital-we.com',
  },
  {
    firm_name: 'Citrine Capital',
    advisor_name: 'Kiersten Peshek',
    city: 'Columbus',
    state: 'GA',
    latitude: 32.4610,
    longitude: -84.9877,
    fee_structure: 'Starting at $18,500/year. Based on net worth.',
    website: 'https://www.citrinecapitaladvisors.com',
  },
  {
    firm_name: 'Plan For It, Financial LLC',
    advisor_name: 'Christopher Lazzaro',
    city: 'Salem',
    state: 'MA',
    latitude: 42.5197,
    longitude: -70.8955,
    fee_structure: '$4,800-$8,400/year after $3,500-$7,500 for a one-time plan. $350/hr for hourly financial planning.',
    website: 'https://www.planforitfinancial.com',
  },
  {
    firm_name: 'Nectarine Financial',
    advisor_name: 'Adam Coleman',
    city: 'Charlotte',
    state: 'NC',
    latitude: 35.2271,
    longitude: -80.8431,
    fee_structure: '$3,500-$4,500 for a one-time plan. $400 per hourly session.',
    website: 'https://adamcolemanfinance.com',
  },
  {
    firm_name: 'Bird Spring Financial',
    advisor_name: 'Matteo Hoch',
    city: 'Las Vegas',
    state: 'NV',
    latitude: 36.1716,
    longitude: -115.1391,
    fee_structure: '$525 for Financial Physical.',
    website: 'https://www.birdspringfinancial.com',
  },
  {
    firm_name: 'Beyond Your Hammock',
    advisor_name: 'Eric Roberge',
    city: 'Boston',
    state: 'MA',
    latitude: 42.3601,
    longitude: -71.0589,
    fee_structure: 'Not listed.',
    website: 'https://www.beyondyourhammock.com',
  },
  {
    firm_name: 'Zenith Wealth Partners',
    advisor_name: 'Adrienne Davis',
    city: 'Baltimore',
    state: 'MD',
    latitude: 39.2904,
    longitude: -76.6122,
    fee_structure: '$4,200-$9,600/year. $3,600-$10,000 for a one-time plan. Based on complexity.',
    website: 'https://zenithwealth.partners',
  },
/*
  NOTE: Website not available
  {
    firm_name: 'H3 Financial Planning',
    advisor_name: 'Adam Haynes',
    city: 'Salt Lake City',
    state: 'UT',
    latitude: 40.7608,
    longitude: -111.8910,
    fee_structure: 'Not listed.',
    website: 'https://h3fp.com',
  },
*/
  {
    firm_name: 'Find Your FI',
    advisor_name: 'Jenn Steliga',
    city: 'Omaha',
    state: 'NE',
    latitude: 41.2565,
    longitude: -95.9345,
    fee_structure: '$8,500 for year 1, $5,500 in years 2+',
    website: 'https://www.findyourfi.net',
  },
  {
    firm_name: 'Madi Manages Money, LLC',
    advisor_name: 'Madison Sharick',
    city: 'Pittsburgh',
    state: 'PA',
    latitude: 40.4406,
    longitude: -79.9959,
    fee_structure: '$3,000 for individuals, $5,000 for couples for a one-time plan.',
    website: 'https://madimanagesmoney.com/',
  },
  {
    firm_name: 'Modern Financial Planning',
    advisor_name: 'Bryan Hasling',
    city: 'Fort Worth',
    state: 'TX',
    latitude: 32.7555, 
    longitude: -97.3308,
    fee_structure: 'Not listed.',
    website: 'https://modernfp.com/',
  },
  {
    firm_name: 'OpenPath Financial',
    advisor_name: 'Aubrey Williams',
    city: 'Galeta',
    state: 'CA',
    latitude: 34.4358,
    longitude: -119.827,
    fee_structure: '$3,850-$15,000+ for a one-time plan. Hourly at $385/hr after that.',
    website: 'https://openpath.financial/',
  },
  {
    firm_name: 'EnoughFP LLC',
    advisor_name: 'Cole Ferrier',
    city: 'Edgewood',
    state: 'WA',
    latitude: 47.2501,
    longitude: -122.2937,
    fee_structure: '$400/hr',
    website: 'https://www.enoughfp.com/',
  },
];
advisors.sort(() => Math.random() - 0.5);

// Function to populate the advisor list
function populateAdvisorList(advisors) {
  const listContainer = document.getElementById('advisor-list');
  advisors.forEach((advisor) => {
    const advisorDiv = document.createElement('div');
    advisorDiv.className = 'advisor';

    advisorDiv.innerHTML = `
      <a href="${advisor.website}" target="_blank" rel="noopener noreferrer">
        <h3>${advisor.advisor_name}</h3>
        <p>
          <strong>Firm:</strong> ${advisor.firm_name}<br>
          <strong>Location:</strong> ${advisor.city}, ${advisor.state}<br>
          <strong>Fee Structure:</strong> ${advisor.fee_structure}
        </p>
      </a>
    `;

    listContainer.appendChild(advisorDiv);
  });
}

// Call the function to display the list
populateAdvisorList(advisors);

// Initialize the map
const map = L.map('map').setView([39.8283, -98.5795], 4); // Center over USA

// Set up the OpenStreetMap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

// Existing code...

// Function to add markers to the map
function addMarkersToMap(advisors) {
  advisors.forEach((advisor) => {
    const marker = L.marker([advisor.latitude, advisor.longitude]).addTo(map);
    marker.bindPopup(`
    <a href="${advisor.website}" target="_blank" rel="noopener noreferrer" class="popup-link">
      <div class="popup-content">
        <b>${advisor.advisor_name}</b><br>
        ${advisor.firm_name}<br>
        ${advisor.city}, ${advisor.state}<br>
        Fee Structure: ${advisor.fee_structure}<br>
      </div>
    </a>
    `);
  });
}

// Call the function to add markers
addMarkersToMap(advisors);

function filterAdvisors() {
  const query = document.getElementById('search').value.toLowerCase();
  // Filter the advisors array
  const filteredAdvisors = advisors.filter((advisor) => {
    return (
      advisor.city.toLowerCase().includes(query) ||
      advisor.state.toLowerCase().includes(query) ||
      advisor.fee_structure.toLowerCase().includes(query)
    );
  });
  // Clear existing advisors and markers
  document.getElementById('advisor-list').innerHTML = '';
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });
  // Repopulate the list and markers
  populateAdvisorList(filteredAdvisors);
  addMarkersToMap(filteredAdvisors);
}
