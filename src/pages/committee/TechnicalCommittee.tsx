import React from 'react';

const InternationalTechnicalCommittee: React.FC = () => {
  const members = [
    "Amar Sheelwant, Ducom Instruments, India",
    "Aneesh Prabhakar, MNIT, Jaipur, India",
    "Anil Kumar, DTU Delhi, India",
    "Arrik Khanna, Chitkara Univ, Chandigarh, India",
    "B. Vijaya Ramanath, Sri Sairam CoE, Chennai, India",
    "Ch. Sri Chaitanya, VNR VJIET, Hyderabad, India",
    "Gajanan Anne, Manipal Institute of Technology, India",
    "Gangadharudu Talla, NIT Warangal, India",
    "G. Laxmaiah, CBIT, Hyderabad, India",
    "Gopi K R, CYIENT Limited, Bangalore, India",
    "G Raghavendra, NIT Warangal, India",
    "Gudipadu Venkatesh, NIT Warangal, India",
    "Hemant Marmat, ACROPOLIS, India",
    "Jeevan Vemula, GITAM School of Technology Hyderabad, India",
    "Karthik Aamanchi, Publicissapient, USA",
    "Kethavath Kranthi Kumar, JNU Delhi, India",
    "K Kiran Kumar, NIT Warangal, India",
    "Krishna Kishore Mugada, SVNIT Surat, India",
    "Manjaiah M, NIT Warangal, India",
    "Marrapu Bhargava, NIT Warangal, India",
    "Mervin Joe Thomas, NIT Surathkal, India",
    "M. K. Mathapati, KLE College of Engineering & Technology, India",
    "Mrunali Sona, Ashok Leyland technical centre",
    "MULATU CHAKE GILAGO, WACHEMO UNIVERSITY, Ethiopia",
    "Nagamothu Kishore Babu, NIT Warangal, India",
    "Nitin Rameshrao Kotkunde, BITS Pilani Hyderabad Campus, India",
    "Piyush Chandra Verma, BITS Pilani Hyderabad Campus, India",
    "P. Prabhakar Reddy, CBIT, Hyderabad, India",
    "Pravin T. Nitnaware, D.Y. Patil College of Engineering, India",
    "Pritam Das, VIT Chennai, India",
    "P Srinivas, GITAM School of Technology Hyderabad, India",
    "Punna Eshwaraiah, GITAM School of Technology Hyderabad, India",
    "P Vamsi Krishna, NIT Warangal, India",
    "Ramavath Bheekya Naik, NIT Raipur, India",
    "R. Thirumalai, Hindusthan Institute of Technology, India",
    "Sai Saketha Chandra Athkuri, NIT Calicut, India",
    "Saravana Bavan, Dayananda Sagar University, India",
    "Shital Patil, Bosch Global Software Technologies, India",
    "Shivraman, NIT Warangal, India",
    "Suresh Lakhimsetty, SVNIT, Surat, India",
    "Syam Kumar Chokka, IIITDM Jabalpur, India",
    "Vijay Jadon, Chitkara Univ, Chandigarh, India"
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        International Technical Committee
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default InternationalTechnicalCommittee;
