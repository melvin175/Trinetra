// Alternative: Simple mailto fallback (no backend required)
// Replace the handleSubmit function in Contact.tsx with this if you want a simple solution

const handleSubmitMailto = (e: React.FormEvent) => {
  e.preventDefault();
  
  const subject = encodeURIComponent(`Contact Form Submission - ${formData.interestType}`);
  const body = encodeURIComponent(`New Contact Form Submission from Trinetra Website

Name: ${formData.fullName}
Email: ${formData.email}
Company: ${formData.companyName}
Phone: ${formData.phone}
Interest Type: ${formData.interestType}

Message:
${formData.message}

---
This email was sent from the Trinetra website contact form.`);
  
  // Open default email client
  window.location.href = `mailto:melvinfernando175@gmail.com?subject=${subject}&body=${body}`;
  
  // Show success message
  setSubmitStatus('success');
  setTimeout(() => {
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      interestType: '',
      message: '',
    });
    setSubmitStatus('idle');
  }, 3000);
};
