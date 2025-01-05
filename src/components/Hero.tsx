import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
 return (
   <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
     <div className="container mx-auto px-4 py-16 mt-16">
       <div className="flex flex-col md:flex-row items-center justify-between">
         <div className="md:w-1/2 text-center md:text-left">
           <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
             Front-end Developer
             <span className="block text-blue-600">&amp; UI/UX Designer</span>
           </h1>
           <p className="text-lg text-gray-600 mb-8">
             Menciptakan pengalaman digital yang indah dan fungsional
           </p>
           <a 
             href="#contact"
             className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
           >
             Hubungi Saya
             <ArrowRight className="ml-2" size={20} />
           </a>
         </div>
         <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
           {/* Decorative frame elements */}
           <div className="absolute -top-4 -left-4 w-32 h-32 border-t-4 border-l-4 border-blue-500"></div>
           <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-4 border-r-4 border-purple-500"></div>
           
           {/* Main image container */}
           <div className="relative w-80 h-80 rounded-2xl p-2 bg-gradient-to-r from-blue-500 to-purple-500">
             <img 
               src="src/assets/Sindi.jpg"
               alt="Developer workspace"
               className="w-full h-full rounded-xl object-cover border-4 border-white shadow-xl"
             />
           </div>
         </div>
       </div>
     </div>
   </section>
 );
};

export default Hero;