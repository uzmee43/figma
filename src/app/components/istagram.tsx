import Image from 'next/image';
import React from 'react';

const Instagram = () => {
  return (
    <div className='relative h-[450px] w-[1440px]'>
      {/* Background Image */}
      <Image
        src="/Group 47 (1).png"
        alt="img"
        layout="fill"
        objectFit="cover" 
      />

    
    </div>
  );
};

export default Instagram;
