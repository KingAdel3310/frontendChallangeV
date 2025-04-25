document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".writeUp").forEach((writeUp) => {
    const plus = writeUp.querySelector(".plus");
    const answer = writeUp.querySelector(".answer");
    const minus = writeUp.querySelector(".minus");

    if (plus && answer && minus) {
      minus.style.display = "none";
      answer.style.display = "none";

      plus.addEventListener("click", () => {
        plus.style.display = "none";
        minus.style.display = "block";
        answer.style.display = "block";
      });
      minus.addEventListener("click", () => {
        plus.style.display = "block";
        minus.style.display = "none";
        answer.style.display = "none";
      });
    }
  });
});
