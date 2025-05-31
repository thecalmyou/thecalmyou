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
