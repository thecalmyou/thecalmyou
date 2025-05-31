// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isVisible = answer.style.display === 'block';

    // Hide all answers first
    document.querySelectorAll('.faq-answer').forEach(a => (a.style.display = 'none'));

    // Toggle current
    answer.style.display = isVisible ? 'none' : 'block';
  });
});

// Review form submission and rendering reviews locally (no backend)
const form = document.getElementById('review-form');
const reviewList = document.getElementById('review-list');

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = form.name.value.trim();
  const rating = form.rating.value;
  const comment = form.comment.value.trim();

  if (!name || !rating || !comment) {
    alert('Please fill all fields.');
    return;
  }

  // Create review element
  const reviewEl = document.createElement('div');
  reviewEl.classList.add('review');

  // Stars for rating
  const stars = '★★★★★☆☆☆☆☆'.slice(5 - rating, 10 - rating);

  reviewEl.innerHTML = `
    <div class="review-header">${name}</div>
    <div class="review-rating">${stars}</div>
    <div class="review-comment">${comment}</div>
  `;

  reviewList.prepend(reviewEl);

  // Reset form
  form.reset();
});


  
