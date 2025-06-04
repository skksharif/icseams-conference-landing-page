import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Contact the organizers of ICSEAMS-2025 for any queries related to the conference, paper submissions, registration, or sponsorship." 
        canonical="/contact"
      />
      <div className="bg-gradient-to-r from-conference-orange/90 to-conference-purple/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            Contact Us
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90" data-aos="fade-up" data-aos-delay="200">
            Get in touch with the ICSEAMS-2025 organizing team
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div data-aos="fade-right">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              <p className="text-gray-700 mb-8">
                If you have any questions about ICSEAMS-2025, please don't hesitate to contact us. Our team is here to assist you with any queries related to paper submissions, registration, venue, or other conference matters.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-conference-orange/10 flex items-center justify-center shrink-0 mr-4">
                    <Mail className="w-5 h-5 text-conference-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <a href="mailto:icseams@bvrit.ac.in" className="text-conference-orange hover:underline">
                      icseams@bvrit.ac.in
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      For general inquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-conference-orange/10 flex items-center justify-center shrink-0 mr-4">
                    <Phone className="w-5 h-5 text-conference-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-800">+91 8309463748 (Dr. M Sandeep Kumar)</p>
                    <p className="text-gray-800">+91 9490784496 (Dr. M Vishnu Vardhan Reddy)</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Monday to Friday, 9:00 AM - 5:00 PM (IST)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-conference-orange/10 flex items-center justify-center shrink-0 mr-4">
                    <MapPin className="w-5 h-5 text-conference-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-800">
                      Department of Mechanical Engineering<br />
                      B V Raju Institute of Technology (BVRIT)<br />
                      Vishnupur, Narsapur<br />
                      Medak District<br />
                      Telangana - 502313<br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-gray-800 mb-3">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-conference-orange hover:text-white transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-conference-orange hover:text-white transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-conference-orange hover:text-white transition-colors">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-conference-orange hover:text-white transition-colors">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-conference-orange focus:border-conference-orange"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-conference-orange focus:border-conference-orange"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-conference-orange focus:border-conference-orange"
                      placeholder="Message subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-conference-orange focus:border-conference-orange"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    <Send size={16} className="mr-2" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6" data-aos="fade-up">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Specific Inquiries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Paper Submissions</h3>
                <p className="text-gray-700 text-sm mb-2">
                  For inquiries related to paper submissions, review process, or publication:
                </p>
                <a href="mailto:icseams.papers@bvrit.ac.in" className="text-conference-orange hover:underline text-sm">
                  icseams.papers@bvrit.ac.in
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Registration</h3>
                <p className="text-gray-700 text-sm mb-2">
                  For inquiries related to conference registration or payment:
                </p>
                <a href="mailto:icseams.registration@bvrit.ac.in" className="text-conference-orange hover:underline text-sm">
                  icseams.registration@bvrit.ac.in
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Sponsorship</h3>
                <p className="text-gray-700 text-sm mb-2">
                  For inquiries related to sponsorship opportunities:
                </p>
                <a href="mailto:icseams.sponsors@bvrit.ac.in" className="text-conference-orange hover:underline text-sm">
                  icseams.sponsors@bvrit.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;