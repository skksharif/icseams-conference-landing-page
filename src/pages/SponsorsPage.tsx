import React from 'react';
import SEO from '../components/SEO';
import { Award, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SponsorProps {
  name: string;
  logo: string;
  type: 'platinum' | 'gold' | 'silver' | 'bronze';
  website?: string;
  delay?: number;
}

const Sponsor: React.FC<SponsorProps> = ({ name, logo, type, website, delay = 0 }) => {
  const getBadgeColor = () => {
    switch (type) {
      case 'platinum':
        return 'bg-gray-200 text-gray-800';
      case 'gold':
        return 'bg-yellow-100 text-yellow-800';
      case 'silver':
        return 'bg-gray-100 text-gray-700';
      case 'bronze':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="w-32 h-32 flex items-center justify-center mb-4">
        <img src={logo} alt={name} className="max-w-full max-h-full" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
      <span className={`text-xs font-medium px-3 py-1 rounded-full ${getBadgeColor()} mb-3`}>
        {type.charAt(0).toUpperCase() + type.slice(1)} Sponsor
      </span>
      {website && (
        <a 
          href={website} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-conference-orange hover:text-conference-purple flex items-center text-sm transition-colors"
        >
          <span>Visit Website</span>
          <ExternalLink size={14} className="ml-1" />
        </a>
      )}
    </div>
  );
};

const SponsorsPage: React.FC = () => {
  const platinumSponsors = [
    {
      name: "TechInnovate",
      logo: "https://images.pexels.com/photos/7005697/pexels-photo-7005697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: 'platinum' as const,
      website: "#"
    },
    {
      name: "EnergyFuture",
      logo: "https://images.pexels.com/photos/5696555/pexels-photo-5696555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: 'platinum' as const,
      website: "#"
    }
  ];

  const goldSponsors = [
    {
      name: "ManufactureTech",
      logo: "https://images.pexels.com/photos/4226251/pexels-photo-4226251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: 'gold' as const,
      website: "#"
    },
    {
      name: "SustainPower",
      logo: "https://images.pexels.com/photos/6956866/pexels-photo-6956866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: 'gold' as const,
      website: "#"
    },
    {
      name: "RenewSystems",
      logo: "https://images.pexels.com/photos/4226262/pexels-photo-4226262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: 'gold' as const,
      website: "#"
    }
  ];

  const silverSponsors = [
    {
      name: "IndustrialSmart",
      logo: "https://images.pexels.com/photos/7693173/pexels-photo-7693173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: 'silver' as const,
      website: "#"
    },
    {
      name: "GreenTech Solutions",
      logo: "https://images.pexels.com/photos/7693212/pexels-photo-7693212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: 'silver' as const,
      website: "#"
    },
    {
      name: "AdvancedEngineering",
      logo: "https://images.pexels.com/photos/7693201/pexels-photo-7693201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: 'silver' as const,
      website: "#"
    },
    {
      name: "EcoSolutions",
      logo: "https://images.pexels.com/photos/5849620/pexels-photo-5849620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: 'silver' as const,
      website: "#"
    }
  ];

  return (
    <>
      <SEO 
        title="Sponsors" 
        description="ICSEAMS-2025 is proudly sponsored by leading organizations in the fields of sustainable energy and advanced manufacturing systems." 
        canonical="/sponsors"
      />
      <div className="bg-gradient-to-r from-conference-green/90 to-conference-orange/90 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            Our Sponsors
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90" data-aos="fade-up" data-aos-delay="200">
            ICSEAMS-2025 is supported by leading organizations in industry and academia
          </p>
        </div>
      </div>
       <div className="w-full h-[30vh]">
         <p className="text-center text-3xl md:text-4xl font-bold mb-4 mt-10">Updated Soon</p>
      </div>

    {
      /*
        <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="text-gray-700 mb-8">
              We extend our sincere gratitude to all our sponsors for their generous support in making ICSEAMS-2025 a success. Their contributions enable us to organize a high-quality conference and provide a platform for researchers and professionals to share knowledge and innovations.
            </p>
            <div className="inline-flex flex-wrap justify-center gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-800">
                <Award size={14} className="mr-1" /> Platinum
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
                <Award size={14} className="mr-1" /> Gold
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
                <Award size={14} className="mr-1" /> Silver
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-amber-100 text-amber-800">
                <Award size={14} className="mr-1" /> Bronze
              </span>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center" data-aos="fade-up">
              Platinum Sponsors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platinumSponsors.map((sponsor, index) => (
                <Sponsor 
                  key={sponsor.name}
                  name={sponsor.name}
                  logo={sponsor.logo}
                  type={sponsor.type}
                  website={sponsor.website}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center" data-aos="fade-up">
              Gold Sponsors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {goldSponsors.map((sponsor, index) => (
                <Sponsor 
                  key={sponsor.name}
                  name={sponsor.name}
                  logo={sponsor.logo}
                  type={sponsor.type}
                  website={sponsor.website}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center" data-aos="fade-up">
              Silver Sponsors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {silverSponsors.map((sponsor, index) => (
                <Sponsor 
                  key={sponsor.name}
                  name={sponsor.name}
                  logo={sponsor.logo}
                  type={sponsor.type}
                  website={sponsor.website}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mt-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Sponsorship Opportunities
            </h2>
            <p className="text-gray-700 mb-6 text-center">
              Join our distinguished sponsors and gain valuable exposure to researchers, academics, and industry professionals in the fields of sustainable energy and advanced manufacturing systems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Benefits of Sponsorship</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                    Brand visibility to an international audience
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                    Networking opportunities with leading researchers
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                    Access to cutting-edge research and innovations
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                    Recognition in conference materials and website
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                    Exhibition space at the conference venue
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Sponsorship Packages</h3>
                <p className="text-gray-700">
                  We offer various sponsorship packages to suit different needs and budgets:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                    Platinum Sponsor
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                    Gold Sponsor
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                    Silver Sponsor
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                    Bronze Sponsor
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                    Special Category Sponsors (lunch, dinner, awards, etc.)
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-700 mb-4">
                For detailed information about sponsorship packages and benefits, please contact:
              </p>
              <a 
                href="mailto:icseams.sponsors@bvrit.ac.in" 
                className="btn-primary inline-flex items-center"
              >
                <Mail size={16} className="mr-2" />
                <span>Contact Sponsorship Team</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      */
    }
    </>
  );
};

export default SponsorsPage;