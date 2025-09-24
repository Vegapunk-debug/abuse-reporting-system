import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogSection from './Blogs';
import Slider from './Slides';
import ReportCategory from './ReportCategory';

function Hero() {
  const navigate = useNavigate();
  const handleMakeAReport = () => navigate('/Report');
  const handleHowItWorks = () => navigate('/HowItWorks');

  return (
    <div>
      <Slider
        onReportClick={handleMakeAReport}
        onHowItWorksClick={handleHowItWorks}
      />
      <BlogSection />
      <ReportCategory />
    </div>
  );
}

export default Hero;
