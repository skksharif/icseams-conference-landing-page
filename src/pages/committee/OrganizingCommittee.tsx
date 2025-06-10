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
        return 'bg-blue-100 border-blue-200 text-blue-700';
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
    { name: "K. V. Vishnu Raju", role: "Chairman, Sri Vishnu Educational Society, INDIA" },
    { name: "Ravichandran Rajagopal", role: "Vice-Chairman, Sri Vishnu Educational Society, INDIA" },
    { name: "K. Aditya Vissam", role: "Secretary, Sri Vishnu Educational Society, INDIA" },
    { name: "K. Sai Sumant", role: "Joint Secretary, Sri Vishnu Educational Society, INDIA" },
  ];

  const coPatrons = [
    { name: "K. Lakshmi Prasad", role: "Director, BVRIT Narsapur, INDIA" },
    { name: "Sanjay Dubey", role: "Principal, BVRIT Narsapur, INDIA" },
  ];

  const chairs = [
    { name: "Dr. Shuichi TORII", role: "Conference Chair, Kurume Institute of Technology, JAPAN" },
    { name: "V Murali Krishna", role: "Conference Co-Chair, Dean Academics, BVRIT Narsapur, INDIA" },
    { name: "Raju AEDLA", role: "Technical Chair, Dean – R&D, VEDIC, SVES" },
    { name: "A Varun", role: "Organizing Chair, HoD, Mechanical Engineering, BVRIT Narsapur, INDIA" },
    { name: "M Sandeep Kumar", role: "Organizing Co-Chair, Associate Head, Mechanical Engg., BVRIT Narsapur, INDIA" },
  ];

  const secretaries = [
    { name: "M Vishnu Vardhan Reddy", role: "Organizing Secretary, Assistant Professor, BVRIT Narsapur, INDIA" },
    { name: "Korra Nagu", role: "Joint Secretary, Assistant Professor, BVRIT Narsapur, INDIA" },
    { name: "R. Naresh", role: "Treasurer, Assistant Professor, BVRIT Narsapur, INDIA" },
  ];

  const coreCommittee = [
    { name: "D V Raju", role: "Dean, Consultancy" },
    { name: "P Senthil Kumar", role: "Professor" },
    { name: "A Padma Rao", role: "Professor" },
    { name: "K Obula Reddy", role: "Associate Professor" },
    { name: "Manzoor Hadi", role: "Associate Professor" },
    { name: "R Muthalagu", role: "Assistant Professor" },
    { name: "R Venkatesh Kumar", role: "Assistant Professor" },
    { name: "P Naresh Kumar Reddy", role: "Assistant Professor" },
    { name: "Waseem Ahamed", role: "Assistant Professor" },
    { name: "Anil Babu", role: "Assistant Professor" },
    { name: "Vijaya Sarathi", role: "Assistant Professor" },
    { name: "P Sangamesh", role: "Assistant Professor" },
    { name: "Akshay Kulkarni", role: "Assistant Professor" },
  ];

  const executiveCommittee = [
    { name: "A. Jagan", role: "Dean (IQAC), BVRITN" },
    { name: "N Bhoopal", role: "Dean (Administration), BVRITN" },
    { name: "H Srujana", role: "HoD, Biomedical Engineering, BVRITN" },
    { name: "G. B. Radhika", role: "HoD, Chemical Engineering, BVRITN" },
    { name: "Ch. Madhubabu", role: "HoD, CSE, BVRITN" },
    { name: "Dasaradh Ramaiah", role: "HoD, IT, BVRITN" },
    { name: "B. R. Sanjeeva Reddy", role: "HoD, ECE, BVRITN" },
    { name: "K. Rayudu", role: "HoD, EEE, BVRITN" },
    { name: "S. Krishna Rao", role: "HoD, Civil Engineering, BVRITN" },
    { name: "B. Mrunalini Sasanka", role: "HoD, Freshman Engineering, BVRITN" },
    { name: "I. Nageswara Rao", role: "HoD, MBA, BVRITN" },
    { name: "P. Vishnu", role: "HoD, Pharmaceutical Engineering, BVRITN" },
    { name: "K. Purnachand", role: "Coordinator, CSE Data Science, BVRITN" },
    { name: "G. Uday Kiran", role: "Coordinator, AI & ML, BVRITN" },
    { name: "K. Bhima", role: "Coordinator, CSBS, BVRITN" },
    { name: "R. Pitchai", role: "Associate Dean (R&D), BVRITN" },
    { name: "K. Sainadh Singh", role: "Associate Dean (IQAC), BVRITN" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2" data-aos="fade-up">
          Organizing Committee
        </h2>
        <p className="text-gray-600" data-aos="fade-up" data-aos-delay="100">
          Meet the team organizing ICSEAMS-2025 and ensuring a successful conference experience.
        </p>
      </div>

      {[
        { title: "Chief Patrons & Patrons", list: [...chiefPatrons, ...coPatrons], type: 'chief' },
        { title: "Chairs", list: chairs, type: 'chair' },
        { title: "Secretaries", list: secretaries, type: 'secretary' },
        { title: "Core Committee", list: coreCommittee, type: 'member' },
        { title: "Executive Committee", list: executiveCommittee, type: 'member' },
      ].map((section, idx) => (
        <div key={section.title} className="mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2" data-aos="fade-up">
            {section.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.list.map((member, index) => (
              <Member
                key={member.name}
                name={member.name}
                role={member.role}
                type={section.type as MemberProps['type']}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrganizingCommittee;
