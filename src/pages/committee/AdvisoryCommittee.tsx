import React from "react";

const InternationalAdvisoryCommittee: React.FC = () => {
  const members = [
    "Ambrish Kela, Scientech Technologies Pvt. Ltd, India",
    "Devanuri Jaya Krishna, NIT Warangal, India",
    "Naveen BP, NITTR, Kolkata, India",
    "P. Bangaru Babu, NIT Warangal, India",
    "Praveen Barmavatu, Universidad Tecnológica Metropolitana, Chile",
    "Ravindra Kumar Gupta, King Saud University, Saudi Arabia",
    "R Parameshwaran, BITS Pilani Hyderabad Campus, India",
    "Sandip S. Deshmukh, BITS Pilani Hyderabad Campus, India",
    "SATYANARAYANA KUCHIBHATLA, PARISOHANA TECHNOLOGIES, India",
    "Selvaraj, Jeyraj A.L., Universiti Malaya, Malaysia",
    "Shuichi TORII, Kurume Institute of Technology, Fukuoka, Japan",
    "S Kanmani Subbu, IIT Palakkad, India",
    "Srinivasa Prakash Regalla, BITS Pilani Hyderabad Campus, India",
    "Sujith R, BITS Pilani Hyderabad Campus, India",
    "V P Chandra Mohan, NIT Warangal, India",
    "V Hari Kumar, NIT Warangal, India",
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        International Advisory Committee
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default InternationalAdvisoryCommittee;
