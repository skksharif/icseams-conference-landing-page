import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, MapIcon, Hotel, Utensils, Bus, Plane } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import AnimatedSection from '../components/common/AnimatedSection';

const VenuePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Venue | ICSEAMS 2025';
  }, []);

  // Hotel recommendations
  const hotels = [
    {
      name: 'Grand Hyderabad Hotel',
      distance: '3 km from venue',
      category: 'Luxury',
      priceRange: '₹9,000 - ₹12,000 per night'
    },
    {
      name: 'Narsapur Park Inn',
      distance: '1 km from venue',
      category: 'Mid-range',
      priceRange: '₹4,000 - ₹6,000 per night'
    },
    {
      name: 'Medak Valley Resort',
      distance: '5 km from venue',
      category: 'Premium',
      priceRange: '₹7,000 - ₹9,000 per night'
    },
    {
      name: 'BVRIT Guest House',
      distance: 'On campus',
      category: 'Budget',
      priceRange: '₹2,500 - ₹3,500 per night'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Conference Venue" 
        subtitle="BVRIT Campus, Narsapur, Telangana, India"
        image="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <div className="section">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* Venue Information */}
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row"
              >
                <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
                  <h2 className="text-2xl font-bold text-primary-800 mb-4">About the Venue</h2>
                  
                  <div className="prose text-gray-700">
                    <p>
                      ICSEAMS 2025 will be held at the prestigious B V Raju Institute of Technology (BVRIT) campus, 
                      located in Narsapur, Medak District, Telangana, India.
                    </p>
                    
                    <p>
                      BVRIT is one of the premier engineering institutes in India, known for its excellent academic 
                      standards and state-of-the-art infrastructure. The conference will take place in the newly built 
                      International Conference Center, featuring modern facilities and advanced audiovisual equipment.
                    </p>
                    
                    <p>
                      The campus is surrounded by lush greenery, providing a serene and academic environment perfect 
                      for intellectual discussions and networking among participants.
                    </p>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Address:</p>
                        <p className="text-gray-700">
                          B V Raju Institute of Technology<br />
                          Vishnupur, Narsapur, Medak District<br />
                          Telangana - 502313, India
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Plane className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Nearest Airport:</p>
                        <p className="text-gray-700">
                          Rajiv Gandhi International Airport, Hyderabad (approximately 80 km)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <div className="bg-gray-100 p-2 rounded-lg border border-gray-200 shadow-sm h-[350px] overflow-hidden">
                    {/* Embedded Google Map - Replace src with actual Google Maps embed URL */}
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.719297268926!2d78.23041837525936!3d17.565496783987623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf03cad6b1873%3A0xe0e3f1b8dcede8cf!2sB%20V%20Raju%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1684909252158!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="BVRIT Campus Map"
                      className="rounded"
                    ></iframe>
                  </div>
                  
                  <div className="mt-4 flex justify-center">
                    <a 
                      href="https://goo.gl/maps/KZYHqJxy6XLYc4U2A" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                    >
                      <MapIcon className="h-5 w-5 mr-2" />
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Campus Facilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold text-primary-800 mb-6">Campus Facilities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="BVRIT Conference Hall" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-primary-700 mb-2">Conference Facilities</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="h-2 w-2 bg-primary-500 rounded-full mt-2 mr-2"></div>
                        <span>Main auditorium (capacity: 500 people)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-2 w-2 bg-primary-500 rounded-full mt-2 mr-2"></div>
                        <span>Four parallel session rooms (capacity: 100 each)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-2 w-2 bg-primary-500 rounded-full mt-2 mr-2"></div>
                        <span>Poster presentation hall</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-2 w-2 bg-primary-500 rounded-full mt-2 mr-2"></div>
                        <span>Exhibition area for sponsors</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="BVRIT Campus" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-primary-700 mb-2">Campus Amenities</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="h-2 w-2 bg-primary-500 rounded-full mt-2 mr-2"></div>
                        <span>High-speed Wi-Fi throughout the campus</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-2 w-2 bg-primary-500 rounded-full mt-2 mr-2"></div>
                        <span>On-site cafeteria and dining facilities</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-2 w-2 bg-primary-500 rounded-full mt-2 mr-2"></div>
                        <span>Recreation areas and beautiful garden spaces</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-2 w-2 bg-primary-500 rounded-full mt-2 mr-2"></div>
                        <span>First aid and medical services</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Accommodation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-16"
            >
              <div className="flex items-center mb-6">
                <Hotel className="h-6 w-6 text-primary-600 mr-3" />
                <h2 className="text-2xl font-bold text-primary-800">Accommodation</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                We have negotiated special rates for conference attendees at the following hotels.
                Please mention "ICSEAMS 2025" when making your booking to avail of the conference discount.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary-50">
                      <th className="py-3 px-4 text-left font-semibold text-primary-800 border border-primary-100">Hotel Name</th>
                      <th className="py-3 px-4 text-left font-semibold text-primary-800 border border-primary-100">Distance</th>
                      <th className="py-3 px-4 text-left font-semibold text-primary-800 border border-primary-100">Category</th>
                      <th className="py-3 px-4 text-left font-semibold text-primary-800 border border-primary-100">Price Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hotels.map((hotel, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-3 px-4 border border-gray-200 font-medium">{hotel.name}</td>
                        <td className="py-3 px-4 border border-gray-200">{hotel.distance}</td>
                        <td className="py-3 px-4 border border-gray-200">{hotel.category}</td>
                        <td className="py-3 px-4 border border-gray-200">{hotel.priceRange}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <p className="mt-4 text-gray-600 text-sm">
                *Rates are indicative and subject to change. Early booking is recommended.
              </p>
            </motion.div>
            
            {/* Transportation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <Bus className="h-6 w-6 text-primary-600 mr-3" />
                <h2 className="text-2xl font-bold text-primary-800">Transportation</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-primary-700 mb-3">Getting to Hyderabad</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      Hyderabad is well-connected by air, rail, and road to major cities in India and international destinations.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Plane className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          <strong>By Air:</strong> Rajiv Gandhi International Airport (HYD) serves both domestic 
                          and international flights from major airlines.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-2 w-2 bg-primary-500 rounded-full mt-2 mr-2"></div>
                        <span>
                          <strong>By Train:</strong> Secunderabad and Hyderabad railway stations connect to all major 
                          cities in India.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-primary-700 mb-3">Local Transportation</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      Several options are available to reach the BVRIT campus:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="h-2 w-2 bg-primary-500 rounded-full mt-2 mr-2"></div>
                        <span>
                          <strong>Conference Shuttle:</strong> Complimentary shuttle service from select hotels to the venue
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-2 w-2 bg-primary-500 rounded-full mt-2 mr-2"></div>
                        <span>
                          <strong>Taxi/Cab:</strong> Ola, Uber, and local taxi services are readily available
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-2 w-2 bg-primary-500 rounded-full mt-2 mr-2"></div>
                        <span>
                          <strong>Public Transport:</strong> Regular bus services from Hyderabad to Narsapur
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-primary-50 p-5 rounded-lg border border-primary-100">
                <h3 className="text-lg font-semibold text-primary-800 mb-3">Need Assistance?</h3>
                <p className="text-gray-700">
                  For any queries related to accommodation or transportation, please contact our logistics team:
                </p>
                <p className="mt-2">
                  <a href="mailto:logistics@icseams2025.org" className="text-primary-600 hover:text-primary-700">
                    logistics@icseams2025.org
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenuePage;