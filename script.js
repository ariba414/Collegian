function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
  }