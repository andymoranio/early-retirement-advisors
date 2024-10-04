// Hard-coded advisor data
const advisors = [
  {
    firm_name: 'Ad Astra Financial Planning',
    advisor_name: 'Andy Moran',
    city: 'Los Altos',
    state: 'CA',
    latitude: 37.3852,
    longitude: -122.1141,
    fee_structure: '$4,000 or $6,000/year depending on complexity. Projects quoted at flat fee.',
    website: 'https://adastrafp.com',
  },
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
    fee_structure: '$5,400 for a one-time plan.',
    website: 'https://mullaneyfinancial.com',
  },
  {
    firm_name: 'Experience Your Wealth',
    advisor_name: 'Jake Northrup',
    city: 'Bristol',
    state: 'RI',
    latitude: 41.6771,
    longitude: -71.2662,
    fee_structure: 'Starting at $10,000/year after $1,500 upfront fee.',
    website: 'https://experienceyourwealth.com',
  },
  {
    firm_name: 'North Financial Advisors',
    advisor_name: 'Cady North',
    city: 'San Diego',
    state: 'CA',
    latitude: 32.7157,
    longitude: -117.1611,
    fee_structure: 'Starting at $6,625 for individuals, $10,500 for 2+ households. $749 for a "mini financial planning session".',
    website: 'https://northfinancialadvisors.com',
  },
  {
    firm_name: 'Modern Family Finance',
    advisor_name: 'Jennifer Dazols',
    city: 'Oakland',
    state: 'CA',
    latitude: 37.910076,
    longitude: -122.065186,
    fee_structure: 'Starting at $6,000/year for individuals, $8,000/year for 2+ households.',
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
    fee_structure: 'Starting at $3,600/year after $1,000 upfront fee.',
    website: 'https://nextadventurefinancial.com',
  },
  {
    firm_name: 'Rubby Pebble Financial Planning',
    advisor_name: 'Jamie Clark',
    city: 'Seattle',
    state: 'WA',
    latitude: 47.6061,
    longitude: -122.3328,
    fee_structure: 'Starting at $4,800/year after one-time plan, which is typically $5,600 for individuals, $6,800 for couples.',
    website: 'https://rubypebblefp.com',
  },
  {
    firm_name: 'DRS Financial Partners',
    advisor_name: 'Stanley Himeno-Okamoto',
    city: 'San Jose',
    state: 'CA',
    latitude: 37.3387,
    longitude: -121.8853,
    fee_structure: 'Starting at $3,600/year after one-time plan, which is typically $4,000 for individuals, $4,800 for couples. Project-based engagements start at $1,250 @ $320/hour.',
    website: 'https://drsfp.com',
  },
  {
    firm_name: 'Spark Financials',
    advisor_name: 'Danielle Miura',
    city: 'Ripon',
    state: 'CA',
    latitude: 37.7395,
    longitude: -121.1354,
    fee_structure: '$10,000/year.',
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

<!-- MailerLite Universal -->
(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
.push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
ml('account', '432239');
<!-- End MailerLite Universal -->
