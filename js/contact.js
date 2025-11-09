// Contact Form Handler
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        service: formData.get('service'),
        message: formData.get('message')
      };

      // Create WhatsApp link with message
      const whatsappMessage = `Hello Uncle Jim Logistics!%0A%0AName: ${data.name}%0AEmail: ${data.email}%0APhone: ${data.phone}%0AService: ${data.service}%0AMessage: ${data.message}`;
      const whatsappLink = `https://wa.me/254721814000?text=${whatsappMessage}`;
      
      // Open WhatsApp
      window.open(whatsappLink, '_blank');
      
      // Show confirmation
      alert('Opening WhatsApp to contact Uncle Jim Logistics. We will respond to your inquiry promptly!');
      this.reset();
    });
  }
});
