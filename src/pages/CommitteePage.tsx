import React, { useEffect } from 'react';
import PageHeader from '../components/common/PageHeader';
import AnimatedSection from '../components/common/AnimatedSection';
import { motion } from 'framer-motion';

// Placeholder committee data
const committees = {
  chiefPatrons: [
    {
      name: 'Dr. A. K. Singh',
      title: 'Vice Chancellor',
      affiliation: 'University of Science and Technology',
      photo: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Dr. Rajiv Kumar',
      title: 'Chairman',
      affiliation: 'BVRIT',
      photo: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ],
  patrons: [
    {
      name: 'Prof. Sunita Sharma',
      title: 'Dean of Engineering',
      affiliation: 'BVRIT',
      photo: 'https://images.pexels.com/photos/5212309/pexels-photo-5212309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Dr. M. N. Rao',
      title: 'Director',
      affiliation: 'Institute of Advanced Research',
      photo: 'https://images.pexels.com/photos/8989479/pexels-photo-8989479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ],
  generalChairs: [
    {
      name: 'Prof. Anand Prakash',
      title: 'Professor of Mechanical Engineering',
      affiliation: 'BVRIT',
      photo: 'https://images.pexels.com/photos/5795034/pexels-photo-5795034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Dr. Rekha Singh',
      title: 'Professor of Electrical Engineering',
      affiliation: 'BVRIT',
      photo: 'https://images.pexels.com/photos/6325975/pexels-photo-6325975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ],
  technicalChairs: [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Associate Professor',
      affiliation: 'University of California, Berkeley',
      photo: 'https://images.pexels.com/photos/5699377/pexels-photo-5699377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Dr. Li Wei',
      title: 'Associate Professor',
      affiliation: 'Tsinghua University',
      photo: 'https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Prof. Hans Mueller',
      title: 'Professor',
      affiliation: 'Technical University of Munich',
      photo: 'https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ],
  advisoryCommittee: [
    {
      name: 'Prof. James Wilson',
      title: 'Professor',
      affiliation: 'MIT',
      photo: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Dr. Maya Patel',
      title: 'Director of Research',
      affiliation: 'National Renewable Energy Laboratory',
      photo: 'https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Prof. Carlos Rodriguez',
      title: 'Professor',
      affiliation: 'University of São Paulo',
      photo: 'https://images.pexels.com/photos/5490280/pexels-photo-5490280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Dr. Fatima Al-Zahrani',
      title: 'Professor',
      affiliation: 'King Abdullah University of Science and Technology',
      photo: 'https://images.pexels.com/photos/5490835/pexels-photo-5490835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ]
};

// Committee member card component
const CommitteeMemberCard = ({ member, index }: { member: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-lg shadow-md overflow-hidden"
  >
    <div className="h-48 overflow-hidden">
      <img 
        src={member.photo} 
        alt={member.name} 
        className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-primary-800">{member.name}</h3>
      <p className="text-sm text-gray-600">{member.title}</p>
      <p className="text-sm text-primary-600">{member.affiliation}</p>
    </div>
  </motion.div>
);

// Committee section component
const CommitteeSection = ({ title, members }: { title: string, members: any[] }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold text-primary-800 mb-6 pb-2 border-b-2 border-primary-200">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {members.map((member, index) => (
        <CommitteeMemberCard key={index} member={member} index={index} />
      ))}
    </div>
  </div>
);

const CommitteePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Committee | ICSEAMS 2025';
  }, []);

  return (
    <div>
      <PageHeader 
        title="Organizing Committee" 
        subtitle="Meet the dedicated team behind ICSEAMS 2025"
      />
      
      <div className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700">
              ICSEAMS 2025 is organized by a distinguished committee of academics and industry experts from around the world,
              working together to create an exceptional conference experience.
            </p>
          </div>

          <CommitteeSection title="Chief Patrons" members={committees.chiefPatrons} />
          <CommitteeSection title="Patrons" members={committees.patrons} />
          <CommitteeSection title="General Chairs" members={committees.generalChairs} />
          <CommitteeSection title="Technical Committee Chairs" members={committees.technicalChairs} />
          <CommitteeSection title="International Advisory Committee" members={committees.advisoryCommittee} />
        </div>
      </div>
    </div>
  );
};

export default CommitteePage;