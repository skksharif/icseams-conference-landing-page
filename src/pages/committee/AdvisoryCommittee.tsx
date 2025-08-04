import React from "react";

const InternationalAdvisoryCommittee: React.FC = () => {
  const members = [
    "Ajay Muljibhai Sidpara, IIT Kharagpur, India",
    "Anil Kumar, DTU Delhi, India",
    "Ambrish Kela, Scientech Technologies Pvt. Ltd, India",
    "Arvind Kumar, IIT Kanpur, India",
    "Ashis Mallick, ISM Dhanbad, India",
    "Avinash Parashar, IIT Roorkee, India",
    "A Venu Gopal, NIT Warangal, India",
    "A Kumar, NIT Warangal, India",
    "Devanuri Jaya Krishna, NIT Warangal, India",
    "Dheerendra Kr. Dwivedi, IIT Roorkee, India",
    "Gangaraju Gedda, Chung-Ang University, South Korea",
    "Johar Sarkar, IIT (BHU) Varanasi, India",
    "K Kiran Kumar, NIT Warangal, India",
    "L A Kumaraswamidhas, ISM Dhandbad, India",
    "Mohd Zaheer Khan Yusufzai, IIT (BHU) Varanasi, India",
    "Nalinaksh S. Vyas, IIT Kanpur, India",
    "Naveen BP, NITTR, Kolkata, India",
    "Nirmal Kumar Singh, ISM Dhandbad, India",
    "N Venkaiah, IIT Tirupati, India",
    "N Venkata Reddy, IIT Hyderabad, India",
    "P Bangaru Babu, NIT Warangal, India",
    "P Vamsi Krishna, NIT Warangal, India",
    "Pradeep Dixit, IIT Bombay, India",
    "Pranab Kumar Mondal, IIT Guwahati, India",
    "Prashanta Kr Mahato, ISM Dhanbad, India",
    "Praveen Barmavatu, Universidad Tecnológica Metropolitana, Chile",
    "Radha Monohar A, Universidad Tecnológica Metropolitana, Chile",
    "Ravi Kiran Yellavajjala, Arizona State University, USA",
    "Ravindra Kumar Gupta, King Saud University, Saudi Arabia",
    "Rajnesh Tyagi, IIT (BHU) Varanasi, India",
    "R Parameshwaran, BITS Pilani Hyderabad Campus, India",
    "Sandeep Soni, Sardar Vallabhbhai National Institute of Technology Surat, India",
    "Sandip S. Deshmukh, BITS Pilani Hyderabad Campus, India",
    "SATYANARAYANA KUCHIBHATLA, PARISOHANA TECHNOLOGIES, India",
    "Selvaraj, Jeyraj A.L., Universiti Malaya, Malaysia",
    "Shailendra K. Shukla, IIT (BHU) Varanasi, India",
    "Shrikant Joshi, University West in Trollhättan, Sweden",
    "Shuichi TORII, Kurume Institute of Technology, Fukuoka, Japan",
    "Sivasrinivasu Devadula, IIT Madras, India",
    "S Kanmani Subbu, IIT Palakkad, India",
    "Somnath Chattopadhyaya, ISM Dhanbad, India",
    "Srinivasa Prakash Regalla, BITS Pilani Hyderabad Campus, India",
    "Sujith R, BITS Pilani Hyderabad Campus, India",
    "Suresh Babu V, NIT Warangal, India",
    "Syu-Ruei Jhang, National United University, Taiwan",
    "Varun Sharma, IIT Roorkee, India",
    "Vinay V Panicker, NIT Calicut, India",
    "V P Chandra Mohan, NIT Warangal, India",
    "V Hari Kumar, NIT Warangal, India",
    "V Vasu, NIT Warangal, India",
    "Y Ravi Kumar, NIT Warangal, India",
    "Yuvaraj Dhandapani, University of Leeds, England",
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
