import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';

const interestTypes = [
  'Fleet Operator',
  'Infrastructure Partner',
  'Investor',
  'Government / PSU',
  'Technology Partner',
  'Other',
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    interestType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setSubmitStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Option 1: Try backend API if available
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/contact';
      
      // Check if backend is available, otherwise use mailto fallback
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: 'melvinfernando175@gmail.com',
            from: formData.email,
            fromName: formData.fullName,
            subject: `New Contact Form Submission - ${formData.interestType}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${formData.fullName}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Company:</strong> ${formData.companyName}</p>
              <p><strong>Phone:</strong> ${formData.phone}</p>
              <p><strong>Interest Type:</strong> ${formData.interestType}</p>
              <p><strong>Message:</strong></p>
              <p>${formData.message.replace(/\n/g, '<br>')}</p>
            `,
            text: `
New Contact Form Submission

Name: ${formData.fullName}
Email: ${formData.email}
Company: ${formData.companyName}
Phone: ${formData.phone}
Interest Type: ${formData.interestType}

Message:
${formData.message}
            `,
          }),
        });

        if (response.ok) {
          setIsSubmitting(false);
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
          }, 5000);
          return;
        }
      } catch (apiError) {
        // Backend not available, fall back to mailto
        console.log('Backend not available, using mailto fallback');
      }

      // Option 2: Mailto fallback (no backend required)
      // This opens the user's default email client
      const subject = encodeURIComponent(`New Contact Form Submission - ${formData.interestType}`);
      const body = encodeURIComponent(`New Contact Form Submission from Trinetra Website

Name: ${formData.fullName}
Email: ${formData.email}
Company: ${formData.companyName}
Phone: ${formData.phone}
Interest Type: ${formData.interestType}

Message:
${formData.message}

---
This email was sent from the Trinetra website contact form.
Reply to: ${formData.email}`);
      
      // Create mailto link
      const mailtoLink = `mailto:melvinfernando175@gmail.com?subject=${subject}&body=${body}`;
      
      // Try to open email client
      try {
        // Create a temporary anchor element to trigger mailto
        const link = document.createElement('a');
        link.href = mailtoLink;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show success message
        setIsSubmitting(false);
        setSubmitStatus('success');
        
        // Reset form after success
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
      } catch (mailtoError) {
        // If mailto fails, show error with instructions
        setIsSubmitting(false);
        setSubmitStatus('error');
        setErrorMessage('Could not open email client. Please email melvinfernando175@gmail.com directly with your message.');
      }
      
    } catch (error: any) {
      console.error('Form submission failed:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
      
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-zinc-900 text-white" itemScope itemType="https://schema.org/ContactPage">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-lime-200 bg-clip-text text-transparent">Get in Touch</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/20">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Trinetra Green Mobility </h4>
                    <p className="text-gray-400">India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/20">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Email</h4>
                    <a href="mailto:info@trinetra.com" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">
                    info@trinetragreen.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2 text-gray-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none text-white placeholder-gray-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium mb-2 text-gray-300">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none text-white placeholder-gray-500"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none text-white placeholder-gray-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none text-white placeholder-gray-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="interestType" className="block text-sm font-medium mb-2 text-gray-300">
                    Interest Type *
                  </label>
                  <select
                    id="interestType"
                    name="interestType"
                    required
                    value={formData.interestType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none text-white"
                  >
                    <option value="" className="bg-zinc-900 text-gray-400">Select an option</option>
                    {interestTypes.map((type) => (
                      <option key={type} value={type} className="bg-zinc-900 text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none resize-none text-white placeholder-gray-500"
                    placeholder="Enter your message"
                  />
                </div>

                <div className="space-y-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                  
                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2 text-green-400 bg-green-400/10 p-4 rounded-lg border border-green-400/30"
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="font-medium text-white">Thank you! We'll get back to you soon.</span>
                      </motion.div>
                    )}
                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-lg border border-red-400/30"
                      >
                        <span className="font-medium text-white">{errorMessage || 'Failed to send message. Please try again later.'}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
