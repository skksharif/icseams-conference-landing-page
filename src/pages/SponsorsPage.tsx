import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, ExternalLink, Mail } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import AnimatedSection from '../components/common/AnimatedSection';

const SponsorsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Sponsors | ICSEAMS 2025';
  }, []);

  // Placeholder sponsor data
  const sponsors = {
    platinum: [
      {
        name: 'TechInnovate Solutions',
        logo: 'https://images.pexels.com/photos/4467735/pexels-photo-4467735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        website: '#'
      }
    ],
    gold: [
      {
        name: 'Global Energy Systems',
        logo: 'https://images.pexels.com/photos/3823487/pexels-photo-3823487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        website: '#'
      },
      {
        name: 'Advanced Manufacturing Corp',
        logo: 'https://images.pexels.com/photos/16108219/pexels-photo-16108219/free-photo-of-close-up-of-metal-pipes-for-the-oil-and-gas-industry.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        website: '#'
      }
    ],
    silver: [
      {
        name: 'Renewable Energy Institute',
        logo: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        website: '#'
      },
      {
        name: 'Future Materials Research',
        logo: 'https://images.pexels.com/photos/2892618/pexels-photo-2892618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        website: '#'
      },
      {
        name: 'Smart Grid Technologies',
        logo: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        website: '#'
      }
    ],
    bronze: [
      {
        name: 'Sustainable Solutions Ltd',
        logo: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        website: '#'
      },
      {
        name: 'Green Energy Partners',
        logo: 'https://images.pexels.com/photos/1335614/pexels-photo-1335614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        website: '#'
      },
      {
        name: 'Automation Technologies Inc',
        logo: 'https://images.pexels.com/photos/1034812/pexels-photo-1034812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        website: '#'
      },
      {
        name: 'Industrial IoT Systems',
        logo: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        website: '#'
      }
    ]
  };

  // Sponsorship packages
  const packages = [
    {
      title: 'Platinum',
      price: '$10,000',
      benefits: [
        'Prominent logo display on all conference materials',
        'Premium exhibition space (4m x 3m)',
        'Full-page advertisement in conference proceedings',
        '5 complimentary registrations',
        '20-minute speaking slot in the main program',
        'Company banner at the main conference hall',
        'Recognition during opening and closing ceremonies',
        'Logo and link on conference website',
        'Promotional material in conference bags'
      ]
    },
    {
      title: 'Gold',
      price: '$7,500',
      benefits: [
        'Logo display on conference materials',
        'Exhibition space (3m x 2m)',
        'Half-page advertisement in conference proceedings',
        '3 complimentary registrations',
        '10-minute speaking slot in the main program',
        'Recognition during opening ceremony',
        'Logo and link on conference website',
        'Promotional material in conference bags'
      ]
    },
    {
      title: 'Silver',
      price: '$5,000',
      benefits: [
        'Logo on conference program',
        'Exhibition space (2m x 2m)',
        'Quarter-page advertisement in conference proceedings',
        '2 complimentary registrations',
        'Recognition during opening ceremony',
        'Logo and link on conference website'
      ]
    },
    {
      title: 'Bronze',
      price: '$2,500',
      benefits: [
        'Logo on conference program',
        'Exhibition table',
        '1 complimentary registration',
        'Logo and link on conference website'
      ]
    }
  ];

  const SponsorCategory = ({ title, sponsors, className = '' }) => (
    <div className={`mb-12 ${className}`}>
      <h3 className="text-2xl font-bold text-primary-800 mb-6 pb-2 border-b border-gray-200">{title} Sponsors</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center p-4">
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-4 text-center">
              <h4 className="text-lg font-semibold text-primary-800 mb-2">{sponsor.name}</h4>
              <a 
                href={sponsor.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                Visit Website
                <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <PageHeader 
        title="Our Sponsors and Partners" 
        subtitle="Supporting the advancement of sustainable energy and manufacturing technologies"
      />
      
      <div className="section">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md mb-10 text-center"
            >
              <p className="text-lg text-gray-700 mb-4">
                ICSEAMS 2025 is made possible through the generous support of our sponsors and partners.
                We extend our sincere gratitude to the following organizations for their commitment to
                advancing sustainable energy and manufacturing technologies.
              </p>
            </motion.div>
            
            {/* Current Sponsors */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">Our Sponsors</h2>
              
              {sponsors.platinum.length > 0 && (
                <SponsorCategory title="Platinum" sponsors={sponsors.platinum} className="mb-16" />
              )}
              
              {sponsors.gold.length > 0 && (
                <SponsorCategory title="Gold" sponsors={sponsors.gold} />
              )}
              
              {sponsors.silver.length > 0 && (
                <SponsorCategory title="Silver" sponsors={sponsors.silver} />
              )}
              
              {sponsors.bronze.length > 0 && (
                <SponsorCategory title="Bronze" sponsors={sponsors.bronze} />
              )}
            </div>
            
            {/* Supporting Organizations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">Supporting Organizations</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: 'BVRIT University', logo: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
                  { name: 'Department of Science & Technology, India', logo: 'https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
                  { name: 'IEEE Power & Energy Society', logo: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
                ].map((org, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex flex-col items-center">
                    <div className="h-24 flex items-center justify-center mb-4">
                      <img 
                        src={org.logo} 
                        alt={org.name} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-primary-800 text-center">{org.name}</h4>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Sponsorship Opportunities */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">Sponsorship Opportunities</h2>
              
              <p className="text-gray-700 text-center mb-10">
                Becoming a sponsor of ICSEAMS 2025 offers your organization valuable visibility and networking opportunities
                with leading researchers, academics, and industry professionals in sustainable energy and advanced manufacturing.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {packages.map((pkg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white rounded-lg shadow-md overflow-hidden border ${
                      index === 0 ? 'border-primary-300' : 'border-gray-200'
                    }`}
                  >
                    <div className={`p-4 text-center ${
                      index === 0 ? 'bg-primary-50' : 'bg-gray-50'
                    }`}>
                      <h3 className={`text-xl font-bold ${
                        index === 0 ? 'text-primary-800' : 'text-gray-800'
                      }`}>
                        {pkg.title} Package
                      </h3>
                      <p className={`text-2xl font-semibold mt-2 ${
                        index === 0 ? 'text-primary-600' : 'text-gray-700'
                      }`}>
                        {pkg.price}
                      </p>
                    </div>
                    
                    <div className="p-4">
                      <ul className="space-y-2">
                        {pkg.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <Award className={`h-4 w-4 mt-0.5 mr-2 flex-shrink-0 ${
                              index === 0 ? 'text-primary-500' : 'text-primary-400'
                            }`} />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-gray-700 mb-4">
                  For more information about sponsorship opportunities or to discuss custom packages,
                  please contact our sponsorship coordinator:
                </p>
                <a 
                  href="mailto:sponsors@icseams2025.org" 
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  sponsors@icseams2025.org
                </a>
              </div>
            </div>
            
            {/* Become a Sponsor CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-primary-50 p-8 rounded-lg border border-primary-100 text-center"
            >
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Become a Sponsor</h3>
              <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                Join leading organizations in supporting ICSEAMS 2025. Showcase your brand to a targeted audience
                of researchers, academics, and industry professionals in sustainable energy and advanced manufacturing.
              </p>
              <a 
                href="#" 
                className="btn btn-primary inline-flex items-center"
              >
                Download Sponsorship Brochure
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;