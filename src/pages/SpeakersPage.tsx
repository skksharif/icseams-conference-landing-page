import React from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { MapPin, Award, ExternalLink } from "lucide-react";

interface SpeakerProps {
  name: string;
  role: string;
  affiliation: string;
  country: string;
  image: string;
  bio?: string;
  type: "plenary" | "keynote" | "invited";
  website?: string;
  delay?: number;
}

const Speaker: React.FC<SpeakerProps> = ({
  name,
  role,
  affiliation,
  country,
  image,
  bio,
  type,
  website,
  delay = 0,
}) => {
  const getTypeClasses = () => {
    switch (type) {
      case "plenary":
        return "bg-conference-purple text-white";
      case "keynote":
        return "bg-conference-orange text-white";
      case "invited":
        return "bg-conference-green text-white";
      default:
        return "bg-gray-700 text-white";
    }
  };

  return (
    <div
      className="card card-hover overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="relative h-56 mb-4 overflow-hidden rounded-t-lg -mx-6 -mt-6">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getTypeClasses()}`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)} Speaker
        </div>
      </div>
      <div className="flex flex-col h-[calc(100%-14rem)]">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-conference-purple font-medium mb-2">{role}</p>
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin size={16} className="mr-1" />
          <span>
            {affiliation}, {country}
          </span>
        </div>
        {bio && <p className="text-gray-700 text-sm mb-4 flex-grow">{bio}</p>}
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-conference-orange hover:text-conference-purple flex items-center text-sm mt-auto transition-colors"
          >
            <span>View Profile</span>
            <ExternalLink size={14} className="ml-1" />
          </a>
        )}
      </div>
    </div>
  );
};

const SpeakersPage: React.FC = () => {
  const plenaryPLACEHOLDER = [
    {
      name: "Prof. Sarah Johnson",
      role: "Director of Sustainable Energy Research",
      affiliation: "Stanford University",
      country: "USA",
      image:
        "https://images.pexels.com/photos/5905497/pexels-photo-5905497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Leading researcher in renewable energy systems with 20+ years of experience developing innovative solar technologies.",
      website: "#",
    },
    {
      name: "Dr. James Chen",
      role: "Chief Scientist",
      affiliation: "National Renewable Energy Laboratory",
      country: "USA",
      image:
        "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Expert in energy storage systems and grid integration of renewable energy technologies.",
      website: "#",
    },
  ];

  const keynotePLACEHOLDER = [
    {
      name: "Prof. Maria Rodriguez",
      role: "Head of Advanced Manufacturing",
      affiliation: "Technical University of Munich",
      country: "Germany",
      image:
        "https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Pioneer in Industry 4.0 implementation and digital manufacturing technologies.",
      website: "#",
    },
    {
      name: "Dr. Robert Kim",
      role: "Chief Technology Officer",
      affiliation: "SustainTech Industries",
      country: "South Korea",
      image:
        "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Leading expert in hydrogen fuel cell technology and sustainable transportation systems.",
      website: "#",
    },
    {
      name: "Prof. Amina Patel",
      role: "Research Director",
      affiliation: "Indian Institute of Technology Delhi",
      country: "India",
      image:
        "https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Specializes in green manufacturing processes and sustainable materials engineering.",
      website: "#",
    },
  ];

  const invitedPLACEHOLDER = [
    {
      name: "Dr. Takashi Yamamoto",
      role: "Principal Researcher",
      affiliation: "Tokyo Institute of Technology",
      country: "Japan",
      image:
        "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Expert in solar photovoltaic technology and sustainable building integration.",
      website: "#",
    },
    {
      name: "Prof. Elizabeth Williams",
      role: "Director of Smart Manufacturing",
      affiliation: "Massachusetts Institute of Technology",
      country: "USA",
      image:
        "https://images.pexels.com/photos/6250987/pexels-photo-6250987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Specializes in AI applications for manufacturing optimization and energy efficiency.",
      website: "#",
    },
    {
      name: "Dr. Carlos Mendez",
      role: "Senior Scientist",
      affiliation: "University of São Paulo",
      country: "Brazil",
      image:
        "https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Leading researcher in bioenergy and sustainable agricultural systems.",
      website: "#",
    },
  ];

  return (
    <>
      <SEO
        title="Speakers"
        description="Meet the distinguished speakers of ICSEAMS-2026, including plenary, keynote, and invited speakers from around the world."
        canonical="/speakers"
      />
      <div className="bg-gradient-to-r from-conference-purple/90 to-conference-orange/90 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
          >
            Conference Speakers
          </h1>
          <p
            className="max-w-3xl mx-auto text-lg opacity-90"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Distinguished experts in sustainable energy and advanced
            manufacturing
          </p>
        </div>
      </div>
      <div className="w-full h-[30vh]">
         <p className="text-center text-3xl md:text-4xl font-bold mb-4 mt-10">Updated Soon</p>
      </div>
      {/*      

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8" data-aos="fade-up">
            <p className="text-gray-700 mb-6">
              ICSEAMS-2026 will feature distinguished speakers from academia and industry, sharing their expertise and insights on the latest developments in sustainable energy and advanced manufacturing systems.
            </p>
            <div className="inline-flex flex-wrap justify-center gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-conference-purple text-white">
                <Award size={14} className="mr-1" /> Plenary Speakers
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-conference-orange text-white">
                <Award size={14} className="mr-1" /> Keynote Speakers
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-conference-green text-white">
                <Award size={14} className="mr-1" /> Invited Speakers
              </span>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center" data-aos="fade-up">
              Plenary Speakers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {plenaryPLACEHOLDER.map((speaker, index) => (
                <Speaker 
                  key={speaker.name}
                  name={speaker.name}
                  role={speaker.role}
                  affiliation={speaker.affiliation}
                  country={speaker.country}
                  image={speaker.image}
                  bio={speaker.bio}
                  type="plenary"
                  website={speaker.website}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center" data-aos="fade-up">
              Keynote Speakers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {keynotePLACEHOLDER.map((speaker, index) => (
                <Speaker 
                  key={speaker.name}
                  name={speaker.name}
                  role={speaker.role}
                  affiliation={speaker.affiliation}
                  country={speaker.country}
                  image={speaker.image}
                  bio={speaker.bio}
                  type="keynote"
                  website={speaker.website}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center" data-aos="fade-up">
              Invited Speakers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {invitedPLACEHOLDER.map((speaker, index) => (
                <Speaker 
                  key={speaker.name}
                  name={speaker.name}
                  role={speaker.role}
                  affiliation={speaker.affiliation}
                  country={speaker.country}
                  image={speaker.image}
                  bio={speaker.bio}
                  type="invited"
                  website={speaker.website}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SpeakersPage;
