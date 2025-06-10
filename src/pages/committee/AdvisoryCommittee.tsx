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
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center text-conference-purple mb-6"
          data-aos="fade-up"
        >
          International Advisory Committee
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 border border-blue-200"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <p className="text-gray-800 font-medium">{member}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalAdvisoryCommittee;
