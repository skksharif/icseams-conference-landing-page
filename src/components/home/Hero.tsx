import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

const slides = [
  {
    image: "/slides/s4.png",
    title: "ICSEAMS-2025",
    subtitle: "International Conference on Sustainable Energy and Advanced Manufacturing Systems"
  },
    {
    image: "/slides/s1.png",
    title: "Advanced Manufacturing",
    subtitle: "Bridging research and industry in smart and digital manufacturing"
  },
  {
    image: "/slides/s3.png",
    title: "Sustainable Energy",
    subtitle: "Exploring innovations in renewable energy technologies and solutions"
  },

];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80vh] max-h-[500px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.image})`,
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              data-aos="fade-down" 
              data-aos-delay="200"
            >
              {slide.title}
            </h1>
            <p 
              className="text-lg md:text-xl lg:text-2xl max-w-3xl mb-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {slide.subtitle}
            </p>
            <div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-sm md:text-base"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-conference-orange" />
                <span>11th–13th September 2025</span>
              </div>
              <div className="hidden sm:block bg-white w-1 h-1 rounded-full" />
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-conference-orange" />
                <span>BVRIT, Narsapur, Telangana, India</span>
              </div>
            </div>
            <div 
              className="flex flex-col sm:flex-row gap-4"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              <Link to="/registration" className="btn-primary">
                Register Now
              </Link>
              <Link to="/call-for-papers" className="btn-outline">
                Submit Paper
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-conference-orange w-8' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;