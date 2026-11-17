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

// Hämtar kontaktformuläret från HTML
const contactForm = document.querySelector('#contact-form')

// Lyssnar efter att formuläret skickas
contactForm.addEventListener('submit', event => {
  // Förhindrar att sidan laddas om
  event.preventDefault()
  // Hämtar namnet som användaren har skrivit
  const name = document.querySelector('#name').value
  
  // Hämtar elementet där meddelandet ska visas
  const formMessage = document.querySelector('#form-message')
 
  //   Visar ett personligt bekräftelsemeddelande
  formMessage.textContent = `Tack ${name}! Detta är en demonstration och inget meddelande har skickats.`
})
