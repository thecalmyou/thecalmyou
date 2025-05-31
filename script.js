document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".faq-question");
  
    questions.forEach((q) => {
      q.addEventListener("click", () => {
        const answer = q.nextElementSibling;
  
        document.querySelectorAll(".faq-answer").forEach((a) => {
          if (a !== answer) a.style.display = "none";
        });
  
        answer.style.display = answer.style.display === "block" ? "none" : "block";
      });
    });
  });
<script>
  const reviewForm = document.getElementById('review-form');
  const reviewList = document.getElementById('review-list');

  function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    reviewList.innerHTML = '';
    reviews.forEach(data => {
      const reviewDiv = document.createElement('div');
      reviewDiv.className = 'review-item';
      reviewDiv.innerHTML = `
        <h4>${data.name}</h4>
        <div class="stars">${'★'.repeat(data.rating)}${'☆'.repeat(5 - data.rating)}</div>
        <p>${data.comment}</p>
      `;
      reviewList.appendChild(reviewDiv);
    });
  }

  reviewForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const comment = document.getElementById('comment').value.trim();
    const rating = parseInt(document.getElementById('rating').value);

    if (name && comment && rating) {
      const newReview = { name, comment, rating };
      const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
      reviews.unshift(newReview);
      localStorage.setItem('reviews', JSON.stringify(reviews));
      reviewForm.reset();
      loadReviews();
    } else {
      alert('Please fill all fields.');
    }
  });

  document.addEventListener('DOMContentLoaded', loadReviews);
</script>

  
