import React from 'react';
import { Building, User } from 'lucide-react';

interface MemberProps {
  name: string;
  affiliation: string;
  type: 'industry' | 'academic';
  delay?: number;
}

const Member: React.FC<MemberProps> = ({ name, affiliation, type, delay = 0 }) => (
  <div 
    className="card card-hover"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="flex flex-col">
      <div className="flex items-center mb-3">
        {type === 'industry' ? (
          <Building className="w-5 h-5 text-conference-orange mr-2" />
        ) : (
          <User className="w-5 h-5 text-conference-purple mr-2" />
        )}
        <div className={`text-xs font-medium px-2 py-1 rounded-full ${
          type === 'industry' 
            ? 'bg-orange-100 text-conference-orange' 
            : 'bg-purple-100 text-conference-purple'
        }`}>
          {type === 'industry' ? 'Industry' : 'Academic'}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
      <p className="text-gray-600 text-sm">{affiliation}</p>
    </div>
  </div>
);

const TechnicalCommittee: React.FC = () => {
  const members = [
    {
      name: "Dr. Mrunali Sona",
      affiliation: "Ashok Leyland",
      type: 'industry' as const
    },
    {
      name: "Dr. Manjaiah M",
      affiliation: "NIT Warangal",
      type: 'academic' as const
    },
    {
      name: "Dr. Nagamothu Kishore Babu",
      affiliation: "NIT Warangal",
      type: 'academic' as const
    },
    {
      name: "Dr. Saravana Bavan",
      affiliation: "Dayananda Sagar University",
      type: 'academic' as const
    },
    {
      name: "Dr. M. K. Mathapati",
      affiliation: "KLECET",
      type: 'academic' as const
    },
    {
      name: "Dr. R. Thirumalai",
      affiliation: "Hindusthan Institute of Technology",
      type: 'academic' as const
    },
    {
      name: "Dr. Gajanan Anne",
      affiliation: "Manipal Institute",
      type: 'academic' as const
    },
    {
      name: "Dr. Gopi K R",
      affiliation: "CYIENT",
      type: 'industry' as const
    },
    {
      name: "Dr. Sai Saketha Chandra",
      affiliation: "NIT Calicut",
      type: 'academic' as const
    }
  ];

  return (
    <div>
      <div className="mb-8 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4" data-aos="fade-up">
          Technical Committee
        </h2>
        <p className="text-gray-600" data-aos="fade-up" data-aos-delay="200">
          Our technical committee includes experts from academia and industry who will review papers and ensure the highest standards of technical quality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <Member 
            key={member.name}
            name={member.name}
            affiliation={member.affiliation}
            type={member.type}
            delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnicalCommittee;