import React from "react";

const InternationalTechnicalCommittee: React.FC = () => {
  const members = [
    "Alankrita Singh, IIT Roorkee, India",
    "Allen Anilkumar, NIT Calicut, India",
    "Amar Sheelwant, Ducom Instruments, India",
    "Aneesh Prabhakar, MNIT, Jaipur, India",
    "Arpan Gupta, IIT Delhi, India",
    "Arrik Khanna, Chitkara Univ, Chandigarh, India",
    "Arun Babu K, NIT Calicut, India",
    "Basil Kuriachen, NIT Calicut, India",
    "Bukke Kiran Naik, NIT Rourkela, India",
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
    "Krishna Kishore Mugada, SVNIT Surat, India",
    "K. Sekar, NIT Calicut, India",
    "Manjaiah M, NIT Warangal, India",
    "Manoj Kumar Gupta, NIT Kurukshetra, India",
    "Marrapu Bhargava, NIT Warangal, India",
    "Mervin Joe Thomas, NIT Surathkal, India",
    "M. K. Mathapati, KLE College of Engineering & Technology, India",
    "Mrunali Sona, Ashok Leyland technical centre",
    "MULATU CHAKE GILAGO, WACHEMO UNIVERSITY, Ethiopia",
    "Nagamothu Kishore Babu, NIT Warangal, India",
    "Nitin Rameshrao Kotkunde, BITS Pilani Hyderabad Campus, India",
    "Pavan Pandit, NIT Surathkal, India",
    "Piyush Chandra Verma, BITS Pilani Hyderabad Campus, India",
    "Piyush Shakya, IIT Madras, India",
    "P. Prabhakar Reddy, CBIT, Hyderabad, India",
    "Prakash Chandra Mani, IIT (BHU) Varanasi, India",
    "Pranesh Dutta, NIT Calicut, India",
    "Pravin T. Nitnaware, D.Y. Patil College of Engineering, India",
    "Pritam Das, VIT Chennai, India",
    "P Srinivas, GITAM School of Technology Hyderabad, India",
    "Punna Eshwaraiah, GITAM School of Technology Hyderabad, India",
    "Ramavath Bheekya Naik, NIT Raipur, India",
    "Raghuram S, NIT Surathkal, India",
    "Ravi Pratap Singh, NIT Kurukshetra, India",
    "Rohini kumar B, NIT Calicut, India",
    "Rohith Tamrakar, SVNIT Surat, India",
    "R. Thirumalai, Hindusthan Institute of Technology, India",
    "Sai Saketha Chandra Athkuri, NIT Calicut, India",
    "Saravana Bavan, Dayananda Sagar University, India",
    "Shital Patil, Bosch Global Software Technologies. India",
    "Shivraman, NIT Warangal, India",
    "S. M. Kartheek Sonti, MAHINDRA & MAHINDRA, India",
    "Srihari Dodla, IIT (BHU) Varanasi, India",
    "Suresh Lakhimsetty, SVNIT, Surat, India",
    "Syam Kumar Chokka, IIITDM Jabalpur, India",
    "Vijay Jadon, Chitkara Univ, Chandigarh, India",
  ];

  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center text-conference-purple mb-6"
          data-aos="fade-up"
        >
          International Technical Committee
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 border border-blue-200"
              data-aos="fade-up"
              data-aos-delay={index * 10}
            >
              <p className="text-gray-800 font-medium">{member}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalTechnicalCommittee;
