// Review slider
let currentReview = 0;
const reviews = document.querySelectorAll('.review');

function showReview(index) {
  reviews.forEach((r, i) => {
    r.classList.toggle('active', i === index);
  });
}

function nextReview() {
  currentReview = (currentReview + 1) % reviews.length;
  showReview(currentReview);
}

// Itinerary Suggestion with Validation
document.getElementById('tripForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const daysInput = document.getElementById('days');
  const days = parseInt(daysInput.value);
  const suggestion = document.getElementById('suggestion');

  if (!days || days < 1) {
    alert("Please enter a valid number of days (minimum 1).");
    daysInput.focus();
    return;
  }

  if (days <= 2) {
    suggestion.textContent = "Suggested Plan: 1 day North Goa, 1 day South Goa.";
  } else if (days <= 4) {
    suggestion.textContent = "Suggested Plan: Beaches, Fort Aguada, Old Goa churches, and shopping.";
  } else {
    suggestion.textContent = "Suggested Plan: Include Dudhsagar Falls, spice plantation tour, and cultural festivals.";
  }
});

// Chart.js – Tourist Footfall
const ctx = document.getElementById('visitorChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Visitors (in thousands)',
      data: [120, 140, 100, 80, 150, 130],
      backgroundColor: '#00796b'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// Scroll Animation using IntersectionObserver
const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));
// Toggle navigation on mobile
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
  }
  