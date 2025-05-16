import React, { useEffect } from 'react';
import PageHeader from '../components/common/PageHeader';
import { motion } from 'framer-motion';

// New committee data without photos
const committees = {
  advisoryCommittee: [
    { name: 'Shuichi TORII', affiliation: 'Department of Mechanical System Engineering, Kurume Institute of Technology, Japan' },
    { name: 'Shrikant Joshi', affiliation: 'Department of Engineering Science, University West, Trollhättan, Sweden' },
    { name: 'Chinnapat Panwisawas', affiliation: 'School of Engineering and Materials Science, Queen Mary University of London, UK' },
    { name: 'Y. Ravi Kumar', affiliation: 'Department of Mechanical Engineering, NIT Warangal, India' },
    { name: 'Etienne Martin', affiliation: 'Mechanical Engineering Department, Polytechnique Montreal, Canada' },
    { name: 'A. Venu Gopal', affiliation: 'Department of Mechanical Engineering, NIT Warangal, India' }
  ],
  technicalCommittee: [
    { name: 'Mrunali Sona', affiliation: 'Materials Engineering Department, Ashok Leyland Technical Centre' },
    { name: 'Manjaiah M', affiliation: 'Department of Mechanical Engineering, NIT Warangal, India' },
    { name: 'Nagamothu Kishore Babu', affiliation: 'Dept. of Metallurgical and Materials Engineering, NIT Warangal, India' },
    { name: 'Saravana Bavan', affiliation: 'Department of Mechanical Engineering, Dayananda Sagar University, India' },
    { name: 'M. K. Mathapati', affiliation: 'Mechanical Engineering, KLE College of Engineering & Technology, India' },
    { name: 'R. Thirumalai', affiliation: 'Dept of Aeronautical Engineering, Hindusthan Institute of Technology, India' },
    { name: 'Gajanan Anne', affiliation: 'Dept of Mechanical and Industrial Engineering, Manipal Institute of Technology, India' },
    { name: 'Gopi K R', affiliation: 'CYIENT Limited, Bangalore, India' },
    { name: 'Sai Saketha Chandra Athkuri', affiliation: 'Mechanical Engineering Dept., NIT Calicut, India' }
  ],
  organizingCommittee: [
    { name: 'K. V. Vishnu Raju', role: 'Chief Patron', affiliation: 'Chairman, SVES, India' },
    { name: 'Ravichandran Rajagopal', role: 'Patron', affiliation: 'Vice Chairman, SVES, India' },
    { name: 'K. Aditya Vissam', role: 'Patron', affiliation: 'Secretary, SVES, India' },
    { name: 'K. Lakshmi Prasad', role: 'Co-Patron', affiliation: 'Director, BVRIT Narsapur, India' },
    { name: 'Sanjay Dubey', role: 'Co-Patron', affiliation: 'Principal, BVRIT Narsapur, India' },
    { name: 'Raju Aedla', role: 'Technical Chair', affiliation: 'Dean - R&D, VEDIC, SVES, India' },
    { name: 'A. Varun', role: 'Organizing Chair', affiliation: 'Head, Dept. of Mechanical Engineering, BVRIT, Narsapur' },
    { name: 'M Sandeep Kumar', role: 'Organizing Secretary', affiliation: 'Mechanical Engineering, BVRIT, Narsapur, India' },
    { name: 'M Vishnu Vardhan Reddy', role: 'Organizing Joint-Secretary', affiliation: 'Mechanical Engineering, BVRIT, Narsapur, India' },
    { name: 'R Naresh', role: 'Organizing Joint-Secretary', affiliation: 'Mechanical Engineering, BVRIT, Narsapur, India' },
    { name: 'K Nagu', role: 'Organizing Joint-Secretary', affiliation: 'Mechanical Engineering, BVRIT, Narsapur, India' },
    { name: 'V. Murali Krishna', role: 'Internal Advisory', affiliation: 'Dean (Academics), BVRITN' },
    { name: 'A. Jagan', role: 'Internal Advisory', affiliation: 'Dean (IQAC), BVRITN' },
    { name: 'N Bhoopal', role: 'Internal Advisory', affiliation: 'Dean (Administration), BVRITN' },
    { name: 'Ch. Madhubabu', role: 'Internal Advisory', affiliation: 'HoD, CSE, BVRITN' },
    { name: 'B. R. Sanjeeva Reddy', role: 'Internal Advisory', affiliation: 'HoD, ECE, BVRITN' },
    { name: 'K. Rayudu', role: 'Internal Advisory', affiliation: 'HOD, EEE, BVRITN' },
    { name: 'H Srujana', role: 'Internal Advisory', affiliation: 'HoD, Biomedical Engineering, BVRITN' },
    { name: 'G. B. Radhika', role: 'Internal Advisory', affiliation: 'HoD, Chemical Engineering, BVRITN' },
    { name: 'S. Krishna Rao', role: 'Internal Advisory', affiliation: 'HoD, Civil Engineering, BVRITN' },
    { name: 'B. Mrunalini Sasanka', role: 'Internal Advisory', affiliation: 'HoD, Freshman Engineering, BVRITN' },
    { name: 'Dasaradh Ramaiah', role: 'Internal Advisory', affiliation: 'HoD, Information Technology, BVRITN' },
    { name: 'I. Nageswara Rao', role: 'Internal Advisory', affiliation: 'HoD, MBA, BVRITN' },
    { name: 'Vishnu Pulavarthy', role: 'Internal Advisory', affiliation: 'HoD, Pharmaceutical Engineering, BVRITN' },
    { name: 'K. Purnachand', role: 'Internal Advisory', affiliation: 'Program Coordinator, CSE DS, BVRITN' },
    { name: 'G. Uday Kiran', role: 'Internal Advisory', affiliation: 'Program Coordinator, AI & ML, BVRITN' },
    { name: 'K. Bhima', role: 'Internal Advisory', affiliation: 'Program Coordinator, CSBS, BVRITN' }
  ]
};

// Generic card for all types
const CommitteeMemberCard = ({ member, index }: { member: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
  >
    <h3 className="text-lg font-semibold text-primary-800">{member.name}</h3>
    {member.role && <p className="text-sm text-gray-700 italic">{member.role}</p>}
    <p className="text-sm text-gray-600">{member.affiliation}</p>
  </motion.div>
);

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
          <CommitteeSection title="Organizing Committee" members={committees.organizingCommittee} />
          <CommitteeSection title="Technical Committee" members={committees.technicalCommittee} />
          <CommitteeSection title="Advisory Committee" members={committees.advisoryCommittee} />
        </div>
      </div>
    </div>
  );
};

export default CommitteePage;
