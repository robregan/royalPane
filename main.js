// ===================== SCROLL REVEAL =====================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  },
  { threshold: 0.3 },
)

document.querySelectorAll('.intro-inner').forEach((el) => observer.observe(el))
document.querySelectorAll('.service-item').forEach((el) => observer.observe(el))
document.querySelectorAll('.work-item').forEach((el) => observer.observe(el))
document
  .querySelectorAll('.about-img-wrap, .about-details, .about-right')
  .forEach((el) => observer.observe(el))
document
  .querySelectorAll('.contact-left, .contact-right')
  .forEach((el) => observer.observe(el))

// ===================== MOBILE MENU =====================
const toggle = document.getElementById('navToggle')
const mobileMenu = document.getElementById('mobileMenu')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('is-open')
  mobileMenu.classList.toggle('is-open')
  document.body.style.overflow = mobileMenu.classList.contains('is-open')
    ? 'hidden' // prevent scrolling behind menu
    : ''
})

// close menu when a link is clicked
document.querySelectorAll('.mobile-link').forEach((link) => {
  link.addEventListener('click', () => {
    toggle.classList.remove('is-open')
    mobileMenu.classList.remove('is-open')
    document.body.style.overflow = ''
  })
})
