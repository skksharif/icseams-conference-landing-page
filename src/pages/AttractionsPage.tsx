import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import AnimatedSection from '../components/common/AnimatedSection';

const AttractionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Nearby Attractions | ICSEAMS 2025';
  }, []);

  // Attractions data
  const attractions = [
    {
      name: 'Medak Fort',
      description: 'A historical fort built in the 12th century, offering panoramic views of the surrounding countryside. The fort houses a beautiful mosque and cannon.',
      distance: '15 km from venue',
      image: 'https://images.pexels.com/photos/2736420/pexels-photo-2736420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      location: 'Medak, Telangana',
      mapLink: 'https://goo.gl/maps/exampleMedakFort'
    },
    {
      name: 'Pocharam Wildlife Sanctuary',
      description: 'A serene wildlife sanctuary with diverse flora and fauna. Home to spotted deer, wild boar, and various bird species. The sanctuary also features a beautiful reservoir.',
      distance: '40 km from venue',
      image: 'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      location: 'Medak District, Telangana',
      mapLink: 'https://goo.gl/maps/examplePocharam'
    },
    {
      name: 'Singur Dam',
      description: 'A major irrigation project and beautiful picnic spot with serene waters and surrounding hills. Perfect for nature lovers and photography enthusiasts.',
      distance: '20 km from venue',
      image: 'https://images.pexels.com/photos/2042929/pexels-photo-2042929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      location: 'Sangareddy District, Telangana',
      mapLink: 'https://goo.gl/maps/exampleSingurDam'
    },
    {
      name: 'Charminar',
      description: 'The iconic symbol of Hyderabad, built in 1591. This historic monument with four minarets is surrounded by vibrant bazaars and is a must-visit landmark.',
      distance: '85 km from venue',
      image: 'https://images.pexels.com/photos/15886640/pexels-photo-15886640/free-photo-of-charminar-hyderabad-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      location: 'Hyderabad, Telangana',
      mapLink: 'https://goo.gl/maps/exampleCharminar'
    },
    {
      name: 'Golconda Fort',
      description: 'A magnificent fort known for its acoustic features, brilliant architecture, and rich history. The evening light and sound show narrates the fort\'s fascinating history.',
      distance: '80 km from venue',
      image: 'https://images.pexels.com/photos/15873726/pexels-photo-15873726/free-photo-of-golconda-fort-hyderabad-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      location: 'Hyderabad, Telangana',
      mapLink: 'https://goo.gl/maps/exampleGolcondaFort'
    },
    {
      name: 'Ramoji Film City',
      description: 'The world\'s largest film studio complex and a popular tourist destination with gardens, movie sets, and entertainment shows. Perfect for a day trip.',
      distance: '95 km from venue',
      image: 'https://images.pexels.com/photos/2343467/pexels-photo-2343467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      location: 'Hyderabad, Telangana',
      mapLink: 'https://goo.gl/maps/exampleRamojiFilmCity'
    }
  ];

  // State for carousel
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === attractions.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? attractions.length - 1 : prev - 1));
  };

  return (
    <div>
      <PageHeader 
        title="Nearby Attractions" 
        subtitle="Explore the cultural and natural beauty around the conference venue"
        image="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <div className="section">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md mb-12 text-center"
            >
              <p className="text-lg text-gray-700">
                Telangana and its surroundings offer a rich tapestry of cultural, historical, and natural attractions.
                Take advantage of your visit to ICSEAMS 2025 to explore these fascinating places during your stay.
              </p>
            </motion.div>
            
            {/* Featured Attraction Carousel */}
            <div className="mb-16 relative">
              <h2 className="text-2xl font-bold text-primary-800 mb-6 text-center">Featured Attractions</h2>
              
              <div className="relative overflow-hidden rounded-lg shadow-lg h-[500px]">
                {attractions.map((attraction, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: activeSlide === index ? 1 : 0,
                      zIndex: activeSlide === index ? 10 : 0
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
                    <img 
                      src={attraction.image} 
                      alt={attraction.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20">
                      <h3 className="text-3xl font-bold mb-2">{attraction.name}</h3>
                      <div className="flex items-center mb-3">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span>{attraction.location} • {attraction.distance}</span>
                      </div>
                      <p className="mb-4 text-gray-200 max-w-3xl">{attraction.description}</p>
                      <a 
                        href={attraction.mapLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-200 hover:text-primary-100"
                      >
                        View on Map
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
                
                {/* Navigation buttons */}
                <button 
                  onClick={prevSlide}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 z-30 backdrop-blur-sm transition-all"
                  aria-label="Previous attraction"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 z-30 backdrop-blur-sm transition-all"
                  aria-label="Next attraction"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                
                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                  {attractions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`w-3 h-3 rounded-full ${
                        activeSlide === index ? 'bg-white' : 'bg-white/40'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* All Attractions Grid */}
            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-6">Explore All Attractions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {attractions.map((attraction, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={attraction.image} 
                        alt={attraction.name} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold text-primary-800 mb-2">{attraction.name}</h3>
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="h-4 w-4 mr-1 text-primary-500" />
                        <span className="text-sm">{attraction.location} • {attraction.distance}</span>
                      </div>
                      <p className="text-gray-700 text-sm mb-4">{attraction.description}</p>
                      <a 
                        href={attraction.mapLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium"
                      >
                        View on Map
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Tour Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-16 bg-primary-50 p-6 rounded-lg border border-primary-100"
            >
              <h2 className="text-xl font-bold text-primary-800 mb-4">Conference Tours</h2>
              
              <div className="text-gray-700 space-y-4">
                <p>
                  ICSEAMS 2025 will organize optional post-conference tours to some of these attractions. 
                  Interested participants can sign up during the registration process or at the conference information desk.
                </p>
                
                <div className="bg-white p-4 rounded-md border border-primary-200">
                  <h3 className="font-semibold text-primary-700 mb-2">Planned Tours:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-primary-500 rounded-full mt-2 mr-2"></div>
                      <div>
                        <p className="font-medium">Hyderabad Cultural Tour</p>
                        <p className="text-sm">Visit to Charminar, Golconda Fort, and Salar Jung Museum</p>
                        <p className="text-sm text-primary-600">September 14, 2025 | Duration: Full Day</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-primary-500 rounded-full mt-2 mr-2"></div>
                      <div>
                        <p className="font-medium">Medak Heritage Tour</p>
                        <p className="text-sm">Visit to Medak Fort, Medak Cathedral, and local artisan villages</p>
                        <p className="text-sm text-primary-600">September 14, 2025 | Duration: Half Day</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <p>
                  For more information about conference tours or to arrange private tours, please contact:
                  <a href="mailto:tours@icseams2025.org" className="text-primary-600 hover:text-primary-700 ml-1">
                    tours@icseams2025.org
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

export default AttractionsPage;