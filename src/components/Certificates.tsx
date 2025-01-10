import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Web Development & UI/UX Design ",
      issuer: "PT. Miitra Celerates",
      date: "2024",
      image: "publik/assets/Web.png"
    },
    {
      title: "Completion Certificate",
      issuer: "PT. Miitra Celerates",
      date: "2024",
      image: "publik/assets/ser.png"
    },
    {
      title: "React Development",
      issuer: "Meta",
      date: "2023",
      image: "publik/assets/1.png"
    },
    {
      title: "Web Development & UI/UX Design ",
      issuer: "PT. Miitra Celerates",
      date: "2024",
      image: "publik/assets/2.png"
    },
    {
      title: "UI/UX Design",
      issuer: "Google",
      date: "2023",
      image: "publik/assets/3.png"
    },
    {
      title: "React Development",
      issuer: "Meta",
      date: "2023",
      image: "publik/assets/4.png"
    },
    {
      title: "Web Development & UI/UX Design ",
      issuer: "PT. Miitra Celerates",
      date: "2024",
      image: "publik/assets/5.png"
    },
    {
      title: "Completion Certificate",
      issuer: "PT. Miitra Celerates",
      date: "2024",
      image: "publik/assets/6.png"
    },
    {
      title: "React Development",
      issuer: "Meta",
      date: "2023",
      image: "publik/assets/pkl.png"
    },
    {
      title: "Web Development & UI/UX Design ",
      issuer: "PT. Miitra Celerates",
      date: "2024",
      image: "publik/assets/8.png"
    },
    {
      title: "UI/UX Design",
      issuer: "Google",
      date: "2023",
      image: "publik/assets/9.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Sertifikat</h2>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {certificates.map((cert, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0"
                >
                  <div className="relative">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-84 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-gray-200">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center mt-4 gap-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;