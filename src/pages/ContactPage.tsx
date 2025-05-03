import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import AnimatedSection from '../components/common/AnimatedSection';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact Us | ICSEAMS 2025';
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, isError: false, message: '' });
    
    // Simulating form submission
    setTimeout(() => {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: 'Thank you for your message. We will get back to you soon!'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const contactInfo = [
    {
      title: 'Conference Secretariat',
      icon: <MapPin className="h-5 w-5 text-primary-600" />,
      details: [
        'Department of Mechanical Engineering',
        'B V Raju Institute of Technology',
        'Narsapur, Medak District',
        'Telangana - 502313, India'
      ]
    },
    {
      title: 'Email',
      icon: <Mail className="h-5 w-5 text-primary-600" />,
      details: [
        'General Inquiries: info@icseams2025.org',
        'Paper Submissions: papers@icseams2025.org',
        'Registration: registration@icseams2025.org',
        'Sponsorship: sponsors@icseams2025.org'
      ]
    },
    {
      title: 'Phone',
      icon: <Phone className="h-5 w-5 text-primary-600" />,
      details: [
        '+91 123 456 7890',
        '+91 987 654 3210'
      ]
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with the ICSEAMS 2025 organizing team"
      />
      
      <div className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-primary-800 mb-6">Contact Information</h2>
                
                <div className="space-y-8 mb-10">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="mt-1 mr-4">
                        <div className="p-3 bg-primary-100 rounded-full">{item.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary-700 mb-2">{item.title}</h3>
                        <ul className="space-y-1 text-gray-700">
                          {item.details.map((detail, i) => (
                            <li key={i}>
                              {detail.includes('@') ? (
                                <a href={`mailto:${detail.split(': ')[1]}`} className="hover:text-primary-600">
                                  {detail}
                                </a>
                              ) : detail.includes('+') ? (
                                <a href={`tel:${detail.replace(/\s/g, '')}`} className="hover:text-primary-600">
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Google Map */}
                <div className="bg-gray-100 p-2 rounded-lg border border-gray-200 shadow-sm h-[300px] overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.719297268926!2d78.23041837525936!3d17.565496783987623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf03cad6b1873%3A0xe0e3f1b8dcede8cf!2sB%20V%20Raju%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1684909252158!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BVRIT Campus Map"
                    className="rounded"
                  ></iframe>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-primary-800 mb-6">Send us a Message</h2>
                
                {formStatus.isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-primary-50 p-6 rounded-lg border border-primary-100 text-center"
                  >
                    <CheckCircle className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-primary-800 mb-2">Thank You!</h3>
                    <p className="text-gray-700">
                      Your message has been sent successfully. We will get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setFormStatus(prev => ({ ...prev, isSubmitted: false }))}
                      className="mt-6 btn btn-primary"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                            placeholder="john.doe@example.com"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                        placeholder="Your message subject"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none">
                          <MessageSquare className="h-5 w-5 text-gray-400" />
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                          placeholder="Your message here..."
                        ></textarea>
                      </div>
                    </div>
                    
                    {formStatus.isError && (
                      <div className="flex items-center text-error-600 space-x-2">
                        <AlertCircle className="h-5 w-5" />
                        <span>{formStatus.message}</span>
                      </div>
                    )}
                    
                    <div>
                      <button
                        type="submit"
                        disabled={formStatus.isSubmitting}
                        className={`btn btn-primary w-full flex justify-center ${
                          formStatus.isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                      >
                        {formStatus.isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </button>
                    </div>
                    
                    <p className="text-center text-sm text-gray-500">
                      We'll get back to you as soon as possible. Your information is safe with us.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
            
            {/* Organizing Committee Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16"
            >
              <h2 className="text-2xl font-bold text-primary-800 mb-6">Key Contacts</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: 'Dr. Anand Prakash',
                    title: 'Conference Chair',
                    email: 'anand.prakash@bvrit.ac.in',
                    phone: '+91 987 654 3210'
                  },
                  {
                    name: 'Dr. Rekha Singh',
                    title: 'Technical Program Chair',
                    email: 'rekha.singh@bvrit.ac.in',
                    phone: '+91 876 543 2109'
                  },
                  {
                    name: 'Dr. Rajiv Kumar',
                    title: 'Publications Chair',
                    email: 'rajiv.kumar@bvrit.ac.in',
                    phone: '+91 765 432 1098'
                  }
                ].map((contact, index) => (
                  <div key={index} className="bg-white p-5 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-primary-800 mb-1">{contact.name}</h3>
                    <p className="text-primary-600 mb-3">{contact.title}</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <Mail className="h-4 w-4 text-primary-500 mr-2" />
                        <a href={`mailto:${contact.email}`} className="hover:text-primary-600">
                          {contact.email}
                        </a>
                      </li>
                      <li className="flex items-center">
                        <Phone className="h-4 w-4 text-primary-500 mr-2" />
                        <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-primary-600">
                          {contact.phone}
                        </a>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;