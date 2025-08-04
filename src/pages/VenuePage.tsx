import React from "react";
import SEO from "../components/SEO";
import {
  MapPin,
  Landmark,
  Coffee,
  Wifi,
  Check,
  Navigation,
  Clock,
} from "lucide-react";

const VenuePage: React.FC = () => {
  const facilities = [
    {
      icon: <Landmark size={20} className="text-conference-purple" />,
      title: "Modern Conference Hall",
      description:
        "State-of-the-art auditorium with professional audio-visual equipment",
    },
    {
      icon: <Wifi size={20} className="text-conference-purple" />,
      title: "High-Speed Wi-Fi",
      description: "Campus-wide high-speed internet access for all attendees",
    },
    {
      icon: <Coffee size={20} className="text-conference-purple" />,
      title: "Dining Facilities",
      description:
        "On-campus cafeteria and dining areas for meals and refreshments",
    },
    {
      icon: <Clock size={20} className="text-conference-purple" />,
      title: "Multiple Session Rooms",
      description:
        "Parallel session rooms equipped with presentation facilities",
    },
  ];

  return (
    <>
      <SEO
        title="Venue"
        description="ICSEAMS-2026 will be held at B V Raju Institute of Technology (BVRIT), Narsapur, Telangana, India from 10th–11th April 2026."
        canonical="/venue"
      />
      <div className="bg-gradient-to-r from-conference-orange/90 to-conference-purple/90 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
          >
            Conference Venue
          </h1>
          <p
            className="max-w-3xl mx-auto text-lg opacity-90"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            B V Raju Institute of Technology (BVRIT), Narsapur, Telangana, India
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div data-aos="fade-right">
              <img
                src="/bvrit.jpg"
                alt="BVRIT Campus"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div data-aos="fade-left">
              <div className="flex items-center mb-4">
                <MapPin size={24} className="text-conference-orange mr-2" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Venue Location
                </h2>
              </div>
              <p className="text-gray-700 mb-4">
                ICSEAMS-2026 will be held at the beautiful campus of B V Raju
                Institute of Technology (BVRIT), located in Narsapur, Telangana,
                India.
              </p>
              <p className="text-gray-700 mb-4">
                The venue provides modern conference facilities, comfortable
                accommodations, and a serene environment perfect for academic
                discussions and networking.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Complete Address:
                </h3>
                <p className="text-gray-700">
                  B V Raju Institute of Technology (BVRIT)
                  <br />
                  Vishnupur, Narsapur
                  <br />
                  Medak District
                  <br />
                  Telangana - 502313
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Campus Facilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-conference-purple/10 flex items-center justify-center mr-3">
                      {facility.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800">
                      {facility.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {facility.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12" data-aos="fade-up">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 relative h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2199.2066108452136!2d78.25245593095119!3d17.727263860346817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97350e1c32a3%3A0x4802dcf916ba83e6!2sDR%20B.V%20Raju%20Institute%20Of%20Technology%2C%20narsapur!5e0!3m2!1sen!2sin!4v1749013592450!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BVRIT Location Map"
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Navigation
                    size={20}
                    className="mr-2 text-conference-orange"
                  />
                  How to Reach
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">By Air</h4>
                    <p className="text-gray-700 mb-4">
                      The nearest airport is Rajiv Gandhi International Airport
                      (HYD) in Hyderabad, approximately 70 km from the venue.
                      Taxis and cab services are available from the airport to
                      BVRIT.
                    </p>

                    <h4 className="font-semibold text-gray-800 mb-2">
                      By Train
                    </h4>
                    <p className="text-gray-700">
                      Secunderabad Railway Station and Hyderabad Railway Station
                      are the major railway stations, about 50-60 km from the
                      venue. Local transportation is available to reach BVRIT.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      By Road
                    </h4>
                    <p className="text-gray-700 mb-4">
                      BVRIT is well-connected by road. Regular buses operate
                      from Hyderabad to Narsapur. Alternatively, taxis and cab
                      services can be hired from Hyderabad.
                    </p>

                    <h4 className="font-semibold text-gray-800 mb-2">
                      Local Transportation
                    </h4>
                    <p className="text-gray-700">
                      Auto-rickshaws and local taxis are available for
                      transportation within Narsapur. The conference will also
                      arrange shuttle services from nearby hotels to the venue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-aos="fade-up"
          >
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Accommodation
              </h3>
              <p className="text-gray-700 mb-4">
                Several accommodation options are available near the conference
                venue:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Check
                    size={18}
                    className="text-conference-green mr-2 mt-0.5"
                  />
                  <span>On-campus guest rooms (limited availability)</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={18}
                    className="text-conference-green mr-2 mt-0.5"
                  />
                  <span>Hotels in Narsapur (3-5 km from venue)</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={18}
                    className="text-conference-green mr-2 mt-0.5"
                  />
                  <span>Hotels in Sangareddy (15 km from venue)</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={18}
                    className="text-conference-green mr-2 mt-0.5"
                  />
                  <span>Hotels in Hyderabad (40-60 km from venue)</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                Detailed information about accommodation options and special
                rates for conference attendees will be provided upon
                registration.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Weather
              </h3>
              <p className="text-gray-700 mb-4">
                Narsapur in September typically experiences:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <Check
                    size={18}
                    className="text-conference-green mr-2 mt-0.5"
                  />
                  <span>Temperature: 22°C to 32°C (72°F to 90°F)</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={18}
                    className="text-conference-green mr-2 mt-0.5"
                  />
                  <span>Weather: Mostly pleasant with occasional rain</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={18}
                    className="text-conference-green mr-2 mt-0.5"
                  />
                  <span>Humidity: Moderate to high</span>
                </li>
              </ul>
              <p className="text-gray-700">
                It is recommended to bring light cotton clothing, a light jacket
                for evenings, and an umbrella or raincoat just in case.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VenuePage;
