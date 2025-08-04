import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutConference: React.FC = () => {
  return (
    <section className="py-8" id="about-conference">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title" data-aos="fade-up">
            About The Conference
          </h2>
          <p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Exploring innovations in sustainable energy and advanced
            manufacturing systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <p className="text-gray-700 mb-4">
              The International Conference on Sustainable Energy & Advanced
              Manufacturing Systems (ICSEAMS - 2026) is a premier event that
              brings together researchers, industry experts, academicians, and
              policymakers to explore and discuss advancements in energy systems
              and manufacturing technologies.
            </p>
            <p className="text-gray-700 mb-4">
              With the aim of fostering innovation and promoting sustainable
              practices, ICSEAMS - 2026 will provide a global platform to share
              cutting-edge research, practical insights, and technological
              advancements that shaped the future of industries. The conference
              will focus on the latest trends and breakthroughs in renewable
              energy, smart grids, hydrogen technologies, additive
              manufacturing, Industry 4.0, sustainable practices, and more.
            </p>
            <p className="text-gray-700 mb-6">
              Participants will have the opportunity to engage in insightful
              discussions, form collaborative partnerships, and explore
              solutions that align with global sustainability goals and
              industrial excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/call-for-papers"
                className="flex items-center text-conference-orange hover:text-conference-purple font-medium transition-colors"
              >
                View Conference Tracks <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                to="/important-dates"
                className="flex items-center text-conference-orange hover:text-conference-purple font-medium transition-colors"
              >
                Important Dates <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2" data-aos="fade-left">
            <div className="relative">
              <img
                src="/logo.png"
                alt="Conference collaboration"
                className="rounded-lg shadow-xl w-full h-[400px] object-contain"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="text-conference-purple font-bold text-xl">
                  11-12
                </div>
                <div className="text-gray-700">April 2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutConference;
