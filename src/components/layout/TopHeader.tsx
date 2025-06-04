import React from 'react';

const TopHeader: React.FC = () => {
  return (
    <div className="w-full">
      <div className="w-[100vw] mx-auto">
        <div className="flex flex-wrap items-center justify-center">
          {/* Show on desktop */}
          <img src="/banner.png" alt="banner" className="hidden md:block w-[100vw]" />
          
          {/* Show on mobile */}
          <img src="/mobile-banner.png" alt="mobile-banner" className="block md:hidden w-[100vw]" />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
