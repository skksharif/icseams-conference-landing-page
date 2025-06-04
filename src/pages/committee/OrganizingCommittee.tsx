import React from 'react';

interface MemberProps {
  name: string;
  role: string;
  type: 'chief' | 'chair' | 'secretary' | 'member';
  delay?: number;
}

const Member: React.FC<MemberProps> = ({ name, role, type, delay = 0 }) => {
  const getTypeClasses = () => {
    switch (type) {
      case 'chief':
        return 'bg-conference-purple/10 border-conference-purple/20 text-conference-purple';
      case 'chair':
        return 'bg-conference-orange/10 border-conference-orange/20 text-conference-orange';
      case 'secretary':
        return 'bg-conference-green/10 border-conference-green/20 text-conference-green';
      default:
        return 'bg-gray-100 border-gray-200 text-gray-700';
    }
  };

  return (
    <div 
      className={`p-4 rounded-lg border ${getTypeClasses()} transition-all duration-300 hover:shadow-md`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <h3 className="font-semibold text-gray-800">{name}</h3>
      <p className="text-sm mt-1">{role}</p>
    </div>
  );
};

const OrganizingCommittee: React.FC = () => {
  const chiefPatrons = [
    { name: "K. V. Vishnu Raju", role: "Chief Patron" },
  ];

  const patrons = [
    { name: "Ravichandran Rajagopal", role: "Patron" },
    { name: "K. Aditya Vissam", role: "Patron" },
  ];

  const coPatrons = [
    { name: "K. Lakshmi Prasad", role: "Co-Patron" },
    { name: "Sanjay Dubey", role: "Co-Patron" },
  ];

  const chairs = [
    { name: "Raju Aedla", role: "Technical Chair" },
    { name: "A. Varun", role: "Organizing Chair" },
  ];

  const secretaries = [
    { name: "M Sandeep Kumar", role: "Secretary" },
    { name: "M Vishnu Vardhan Reddy", role: "Joint Secretary" },
    { name: "R Naresh", role: "Joint Secretary" },
    { name: "K Nagu", role: "Joint Secretary" },
  ];

  const internalAdvisory = [
    { name: "Dean of Research", role: "Internal Advisory Committee" },
    { name: "Dean of Academics", role: "Internal Advisory Committee" },
    { name: "HOD of Mechanical Engineering", role: "Internal Advisory Committee" },
    { name: "HOD of Electrical Engineering", role: "Internal Advisory Committee" },
    { name: "HOD of Computer Science", role: "Internal Advisory Committee" },
    { name: "HOD of Civil Engineering", role: "Internal Advisory Committee" },
  ];

  return (
    <div>
      <div className="mb-8 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4" data-aos="fade-up">
          Organizing Committee
        </h2>
        <p className="text-gray-600" data-aos="fade-up" data-aos-delay="200">
          The organizing committee is responsible for planning and executing ICSEAMS-2025, ensuring a successful conference experience for all participants.
        </p>
      </div>

      <div className="space-y-8">
        {/* Chief Patrons, Patrons & Co-Patrons */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2" data-aos="fade-up">
            Patrons
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {chiefPatrons.map((member, index) => (
              <Member 
                key={member.name}
                name={member.name}
                role={member.role}
                type="chief"
                delay={index * 100}
              />
            ))}
            {patrons.map((member, index) => (
              <Member 
                key={member.name}
                name={member.name}
                role={member.role}
                type="chief"
                delay={(index + chiefPatrons.length) * 100}
              />
            ))}
            {coPatrons.map((member, index) => (
              <Member 
                key={member.name}
                name={member.name}
                role={member.role}
                type="chief"
                delay={(index + chiefPatrons.length + patrons.length) * 100}
              />
            ))}
          </div>
        </div>

        {/* Chairs */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2" data-aos="fade-up">
            Conference Chairs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chairs.map((member, index) => (
              <Member 
                key={member.name}
                name={member.name}
                role={member.role}
                type="chair"
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Secretaries */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2" data-aos="fade-up">
            Secretaries
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {secretaries.map((member, index) => (
              <Member 
                key={member.name}
                name={member.name}
                role={member.role}
                type="secretary"
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Internal Advisory */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2" data-aos="fade-up">
            Internal Advisory Committee
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internalAdvisory.map((member, index) => (
              <Member 
                key={member.name}
                name={member.name}
                role={member.role}
                type="member"
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizingCommittee;