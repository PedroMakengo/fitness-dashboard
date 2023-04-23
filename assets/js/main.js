ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal('.content-cards, .chart-two ,.chart-one')

const loading = document.querySelector('.loading')

setTimeout(() => {
  loading.remove()
}, 3000)
