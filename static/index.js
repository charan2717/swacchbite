document.addEventListener("DOMContentLoaded", () => {
// 1. Navigation scroll effect
  const nav = document.querySelector("nav")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      nav.classList.add("bg-zinc-950/95", "h-16", "shadow-xl")
      nav.classList.remove("bg-zinc-950/80", "h-20")
    } else {
      nav.classList.remove("bg-zinc-950/95", "h-16", "shadow-xl")
      nav.classList.add("bg-zinc-950/80", "h-20")
    }
  })

  // 2. Scroll Reveal Animation
  const revealElements = document.querySelectorAll("section")
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    },
    { threshold: 0.1 },
  )

  revealElements.forEach((el) => {
    el.classList.add("reveal")
    revealObserver.observe(el)
  })
    // 4. Smooth Anchor Scrolling (Fix for some browsers)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })
})
