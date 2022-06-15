const question = document.querySelectorAll('.question')

question.forEach(q => {
  q.addEventListener('click', event => {
    q.classList.toggle("active")
  })
})