let rateButtons = document.querySelectorAll(".rateButton");
console.log(rateButtons);
let feedbackInput = document.querySelector(".inputText");
let ratings = [];
for (let i = 0; i < rateButtons.length; i++) {
  rateButtons[i].addEventListener("click", function () {
    ratings.push(i + 1);
    updateResults();
  });
}
updateResults();
function updateResults() {
  let numReviews = ratings.length;
  let avgRating =
    numReviews > 0
      ? (ratings.reduce((a, b) => a + b) / numReviews).toFixed(1)
      : 0;
  let numReviewsEl = document.querySelector(".numberReview h2");
  let avgRatingEl = document.querySelector(".average h2");
  numReviewsEl.textContent = `Số người đã review: ${numReviews}`;
  avgRatingEl.textContent = `Điểm trung bình đánh giá: ${avgRating}`;
}

let sendButton = document.querySelector(".sendButton");
let outputResult = document.querySelector(".outputResult");

sendButton.addEventListener("click", function () {
  let feedbackText = feedbackInput.value;
  let rating = ratings[ratings.length - 1];
  let feedbackEl = document.createElement("div");
  feedbackEl.classList.add("outputResult");
  feedbackEl.innerHTML = `
  <div class="ketqua">
      <p class="text">${feedbackText}</p>
      <button class="resultRate"><span>${rating}</span></button>
      <div class="editDelete">
      <button class="eButton" onclick="editButton()">Edit</button>
      <button class="eButton" onclick="deleteButton()">X</button>
      </div>
  </div>
  `;
  outputResult.appendChild(feedbackEl);
});
function deleteButton() {
  let feedbackEl = event.target.parentNode.parentNode;
  feedbackEl.remove();
}

function editButton() {
  let feedbackEl = event.target.parentNode.parentNode;
  let feedbackTextEl = feedbackEl.querySelector(".text");
  let currentText = feedbackTextEl.textContent;
  feedbackTextEl.outerHTML = `
      <input class="editText" type="text" value="${currentText}">
  `;

  let editTextEl = feedbackEl.querySelector(".editText");
  editTextEl.focus();

  editTextEl.addEventListener("blur", function () {
    let newText = editTextEl.value;

    editTextEl.outerHTML = `
      <p class="text">${newText}</p>
      `;
  });
}
