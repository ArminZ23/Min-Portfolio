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

//   Hämtar alla sektioner på sidan
const sections = document.querySelectorAll('main section')

// Lyssnar när användaren scrollar
window.addEventListener('scroll', () => {
  // Går igenom varje sektion
  sections.forEach(section => {
    // Hämta sektionens position
    const sectionTop = section.offsetTop

    // Hämtar sektionens höjd
    const sectionHeight = section.offsetHeight

    // Hämtar sektionens ID
    const sectionId = section.getAttribute('id')

    // Kontrollerar om användaren befinner sig i sektionen
    if (
      window.scrollY >= sectionTop - 150 &&
      window.scrollY < sectionTop + sectionHeight - 150
    ) {
      // Tar bort tidigare aktiva markeringar
      menuLinks.forEach(link => link.classList.remove('active'))
      //  Hitta rätt navigationslänk
      const activeLink = document.querySelector(
        `#nav-links a[href="#${sectionId}"]`
      )

      // Markerar den aktiva länken
      if (activeLink) {
        activeLink.classList.add('active')
      }
    }
  })
})

// Hämtar alla filterknappar och projektkort
const filterButtons = document.querySelectorAll('.project-filters button')
const projectCards = document.querySelectorAll('.project-card')

// Går igenom varje filterknapp
filterButtons.forEach(button => {
  // Lyssnar efter klick på knappen
  button.addEventListener('click', () => {
    // Hämtar det valda filtret
    const filter = button.dataset.filter

    // Tar bort active från alla knappar
    filterButtons.forEach(btn => {
      btn.classList.remove('active')
    })
    // Markerar den valda knappen
    button.classList.add('active')

    // Visar eller döljer projektet beroende på kategori
    projectCards.forEach(card => {
      const category = card.dataset.category

      card.hidden = filter !== 'all' && filter !== category
    })
  })
})
