import React from "react";
import SEO from "../components/SEO";
import {
  MapPin,
  Hotel,
  Utensils,
  Landmark,
  ShoppingBag,
  Plane,
  Train,
  Bus,
} from "lucide-react";

interface PlaceProps {
  name: string;
  description: string;
  distance: string;
  image: string;
  type: "attraction" | "hotel" | "restaurant" | "shopping";
  website?: string;
  mapLink?: string;
  delay?: number;
}

const Place: React.FC<PlaceProps> = ({
  name,
  description,
  distance,
  image,
  type,
  website,
  mapLink,
  delay = 0,
}) => {
  const getIcon = () => {
    switch (type) {
      case "attraction":
        return <Landmark className="w-5 h-5 text-conference-purple" />;
      case "hotel":
        return <Hotel className="w-5 h-5 text-conference-orange" />;
      case "restaurant":
        return <Utensils className="w-5 h-5 text-conference-green" />;
      case "shopping":
        return <ShoppingBag className="w-5 h-5 text-blue-500" />;
      default:
        return <MapPin className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="relative h-48">
        {mapLink ? (
          <a href={mapLink} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </a>
        ) : (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        )}
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium flex items-center shadow-sm">
          <MapPin size={12} className="mr-1 text-conference-orange" />
          {distance}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="mr-2">{getIcon()}</div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-conference-orange hover:text-conference-purple text-sm font-medium transition-colors"
          >
            Visit Website
          </a>
        )}
      </div>
    </div>
  );
};

const NearbyPlacesPage: React.FC = () => {
  const attractions = [
    {
      name: "Narsapur Forest",
      description: "A beautiful reserve forest area ideal for nature lovers and short hikes.",
      distance: "5 km",
      image:
        "https://imgs.search.brave.com/nAj1t9uac47oklv1iR7HLBLlqs-RaA7ezB9R4AVHrSk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZWxhbmdhbmF0/b2RheS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDgv/TmFyc2FwdXItMS5q/cGc",
      type: "attraction",
      mapLink: "https://www.google.com/maps?q=Narsapur+Forest",
    },
    {
      name: "Medak Cathedral",
      description: "One of the largest churches in India with beautiful Gothic architecture.",
      distance: "35 km",
      image:
        "https://imgs.search.brave.com/TkysZbynD7zwXIv2859sZ6QXFUs6vBQ3ka-8ti2BTW0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MGEvMmYvYWIvZWIv/bWVkYWstY2h1cmNo/LmpwZw",
      type: "attraction",
      mapLink: "https://www.google.com/maps?q=Medak+Cathedral",
    },
    {
      name: "Pocharam Wildlife Sanctuary",
      description: "Home to diverse flora and fauna, perfect for wildlife enthusiasts.",
      distance: "55 km",
      image:
        "https://imgs.search.brave.com/pmuEHY6RCGC1S5wEaSLrdUpyiCOC5vJf4sAfFf2v3qE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly94cGxv/cmluZ2Rlc3RpbmF0/aW9ucy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDcv/UG9jaGFyYW0tV2ls/ZGxpZmUtU2FuY3R1/YXJ5LVRpbWluZ3Mu/anBn",
      type: "attraction",
      mapLink: "https://www.google.com/maps?q=Pocharam+Wildlife+Sanctuary",
    },
  ];

  const hotels = [
    {
      name: "Hotel Grand Sangareddy",
      description: "Comfortable rooms with modern amenities and conference facilities.",
      distance: "15 km",
      image:
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "hotel",
    },
    {
      name: "BVRIT Guest House",
      description: "On-campus accommodation with basic amenities for conference attendees.",
      distance: "0.5 km",
      image:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "hotel",
    },
    {
      name: "Westside Residency",
      description: "Budget-friendly hotel with clean rooms and good service.",
      distance: "12 km",
      image:
        "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "hotel",
    },
  ];


  return (
    <>
      <SEO
        title="Nearby Places"
        description="Explore attractions, accommodations, dining options, and transportation near BVRIT, the venue for ICSEAMS-2026."
        canonical="/nearby-places"
      />
      <div className="bg-gradient-to-r from-conference-purple/90 to-conference-green/90 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            Nearby Places
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90" data-aos="fade-up" data-aos-delay="200">
            Explore attractions, accommodations, and dining options around BVRIT
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Intro */}
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="text-gray-700">
              While attending ICSEAMS-2026, take some time to explore the
              surrounding areas. From natural attractions to cultural landmarks,
              there's much to discover near the conference venue.
            </p>
          </div>

          {/* Tourist Attractions */}
          <Section title="Tourist Attractions" icon={<Landmark size={24} className="text-conference-purple mr-2" />} data={attractions} />

          {/* Accommodation */}

          {/* Dining Options */}

          {/* Transportation */}
          <div data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Transportation Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TransportCard icon={<Plane className="text-blue-600" />} title="Air Travel" desc="Rajiv Gandhi International Airport in Hyderabad is the nearest airport, about 70 km from BVRIT. Taxis and cab services are available from the airport." bg="bg-blue-100" />
              <TransportCard icon={<Train className="text-green-600" />} title="Rail Travel" desc="Secunderabad and Hyderabad railway stations are 50-60 km from BVRIT. Local transportation options connect these stations to the venue." bg="bg-green-100" />
              <TransportCard icon={<Bus className="text-orange-600" />} title="Local Transport" desc="Auto-rickshaws, taxis, and local buses are available for transportation within Narsapur and surrounding areas. The conference will also arrange shuttle services." bg="bg-orange-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Reusable UI Components
const Section = ({ title, icon, data }: any) => (
  <div className="mb-16">
    <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center" data-aos="fade-up">
      {icon} {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((place: PlaceProps, index: number) => (
        <Place key={place.name} {...place} delay={index * 100} />
      ))}
    </div>
  </div>
);

const TransportCard = ({
  icon,
  title,
  desc,
  bg,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  bg: string;
}) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
    <div className="flex items-center mb-4">
      <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center mr-3`}>
        {icon}
      </div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);

export default NearbyPlacesPage;
