const answer = document.querySelector('#research-answer');
const questions = document.querySelectorAll('[data-answer]');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    answer.textContent = question.dataset.answer;
    questions.forEach((item) => item.setAttribute('aria-pressed', String(item === question)));
  });
  question.setAttribute('aria-pressed', 'false');
});

document.querySelector('#year').textContent = new Date().getFullYear();
