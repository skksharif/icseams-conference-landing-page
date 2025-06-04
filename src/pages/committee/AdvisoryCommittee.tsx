import React from 'react';
import { MapPin } from 'lucide-react';

interface AdvisorProps {
  name: string;
  country: string;
  affiliation?: string;
  image: string;
  delay?: number;
}

const Advisor: React.FC<AdvisorProps> = ({ name, country, affiliation, image, delay = 0 }) => (
  <div 
    className="card card-hover flex flex-col items-center text-center"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
    <div className="flex items-center justify-center text-gray-600 mb-2">
      <MapPin size={16} className="mr-1" />
      <span>{country}</span>
    </div>
    {affiliation && <p className="text-gray-700 text-sm italic">{affiliation}</p>}
  </div>
);

const AdvisoryCommittee: React.FC = () => {
  const advisors = [
    {
      name: "Prof. Shuichi TORII",
      country: "Japan",
      image: "https://images.pexels.com/photos/5668770/pexels-photo-5668770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Prof. Shrikant Joshi",
      country: "Sweden",
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Dr. Chinnapat Panwisawas",
      country: "United Kingdom",
      image: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Prof. Y. Ravi Kumar",
      country: "India",
      image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Prof. Etienne Martin",
      country: "Canada",
      image: "https://images.pexels.com/photos/5673501/pexels-photo-5673501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Dr. A. Venu Gopal",
      country: "India",
      image: "https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <div>
      <div className="mb-8 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4" data-aos="fade-up">
          Advisory Committee
        </h2>
        <p className="text-gray-600" data-aos="fade-up" data-aos-delay="200">
          Our distinguished advisory committee consists of leading experts in the fields of sustainable energy and advanced manufacturing systems from around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {advisors.map((advisor, index) => (
          <Advisor 
            key={advisor.name}
            name={advisor.name}
            country={advisor.country}
            image={advisor.image}
            delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
};

export default AdvisoryCommittee;