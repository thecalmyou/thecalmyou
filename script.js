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
<script src="script.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>
<script>
  const firebaseConfig = {
    apiKey: "AIzaSyCGA14RbpVjoxthHW-wPotnQ-dXOIS71iE",
    authDomain: "the-calm-you-reviews.firebaseapp.com",
    projectId: "the-calm-you-reviews",
    storageBucket: "the-calm-you-reviews.appspot.com",
    messagingSenderId: "601737636338",
    appId: "1:601737636338:web:f1c376795ff2728a23236b",
    measurementId: "G-PHCZ6DTEC7"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  const reviewForm = document.getElementById('review-form');
  const reviewList = document.getElementById('review-list');

  function displayReviews() {
    reviewList.innerHTML = '';
    db.collection('reviews')
      .orderBy('timestamp', 'desc')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const data = doc.data();
          const reviewDiv = document.createElement('div');
          reviewDiv.className = 'review-item';
          reviewDiv.innerHTML = `
            <h4>${data.name}</h4>
            <div class="stars">${'★'.repeat(data.rating)}${'☆'.repeat(5 - data.rating)}</div>
            <p>${data.comment}</p>
          `;
          reviewList.appendChild(reviewDiv);
        });
      });
  }

  reviewForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const comment = document.getElementById('comment').value.trim();
    const rating = parseInt(document.getElementById('rating').value);

    if (name && comment && rating) {
      db.collection('reviews').add({
        name,
        comment,
        rating,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }).then(() => {
        reviewForm.reset();
        displayReviews();
      });
    } else {
      alert('Please fill all fields.');
    }
  });
</script>
