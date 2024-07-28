import React from 'react';

interface ParallaxSectionProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  backgroundImageUrl: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  backgroundImageUrl,
}) => {
  return (
    <section
      className="h-[500px] py-[110px] bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="max-w-[1400px] px-[15px]">
        <div className="pl-[100px]">
          <p className="uppercase text-[25px] leading-[32px] font-normal mb-[25px] pb-[10px] tracking-[.4px]">
            {title}
          </p>
          <p className="text-[90px] font-normal leading-[96px] mb-[30px] font-great-vibes">
            {subtitle}
          </p>
          <p className="text-[20px] font-normal leading-[24px] pb-[40px] text-[#666]">
            {description}
          </p>
          <div className="p-2 w-[190px] text-[14px] text-center text-white bg-[#232323]">
            {buttonText}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
