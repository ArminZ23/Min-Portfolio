// Hämtar hamburgermenyn och navigationslänkarna från HTML
const menuToggle = document.querySelector('.menu-toggle')
const navLinks = document.querySelector('#nav-links')

// Kör koden när användaren klickar på hamburgermenyn
menuToggle.addEventListener('click', () => {
  // Öppnar eller stänger menyn genom att ändra CSS-klassen
  const isOpen = navLinks.classList.toggle('open')

  // Uppdaterar om menyn är öppen eller stängd
  menuToggle.setAttribute('aria-expanded', String(isOpen))

  // Ändrar knappens beskrivning för skärmläsare

  menuToggle.setAttribute('aria-label', isOpen ? 'Stäng menyn' : 'Öppna menyn')
})

// Hämtar alla länkar i mobilmenyn
const menuLinks = document.querySelectorAll('#nav-links a')

// Går igenom varje länk och kollar efter klick
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Stänger mobilmenyn
    navLinks.classList.remove('open')

    // Uppdaterar tillgänglighetsinformationen
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.setAttribute('aria-label', 'Öppna menyn')
  })
})
