import React from "react";
import { Award, BookOpen, Users, Globe } from "lucide-react";

const AboutDepartment: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-conference-green" />,
      title: "Accredited Programs",
      description:
        "UG & PG programs are NBA Tier-1 accredited, ensuring high academic quality.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-conference-green" />,
      title: "Faculty Excellence",
      description:
        "Department boasts 100% Ph.D. holders or candidates among its faculty.",
    },
    {
      icon: <Users className="w-8 h-8 text-conference-green" />,
      title: "Global Collaborations",
      description:
        "Partnerships with IITs, NITs, and international universities like Kumamoto and Binghamton.",
    },
    {
      icon: <Globe className="w-8 h-8 text-conference-green" />,
      title: "Industry Engagement",
      description:
        "Active in consulting and training with companies like ALTAIR Engineering.",
    },
  ];

  return (
    <section className="py-8 bg-white" id="about-department">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title" data-aos="fade-up">
            About Department of Mechanical Engineering
          </h2>
          <p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Innovation and Excellence in Mechanical Engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          <div data-aos="fade-right">
            <img
              src="/mech/mech-dept.jpg"
              alt="Mechanical Engineering Department"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div data-aos="fade-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              A Hub of Innovation & Technical Expertise
            </h3>
            <p className="text-gray-700 mb-4 text-justify">
              The Department of Mechanical Engineering (UG) was established at
              B.V. Raju Institute of Technology in 2009 and is renowned for its
              exceptional academic outcomes. The M.Tech. program in Engineering
              Design began in 2014 with an annual intake of 12 students. Both UG
              and PG programs are accredited by NBA Tier-1.
            </p>
            <p className="text-gray-700 mb-4 text-justify">
              With advanced laboratories and a team of highly qualified faculty
              (100% Ph.D. holders or pursuing), the department has secured
              funding from DST and provides consultancy services to industries.
              It actively collaborates with IITs, NITs, and prestigious global
              institutions including Binghamton University (New York), Kumamoto
              University and Saga University (Japan), and ALTAIR Engineering
              (India).
            </p>
            <p className="text-gray-700 text-justify">
              Students are proficient in industry-relevant tools like AutoCAD,
              ANSYS, SolidWorks, Master CAM, FLUENT, and Altair. The department
              has hosted landmark events such as Go-Kart Racing (IPEC-2018,
              2023), the Asian E-Bike Challenge (2018), and SAEINDIA e-BAJA 2024
              & 2025 – the first in South India.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card card-hover"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutDepartment;
