import React from 'react';
import { BookOpen, Users, Code, Palette } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Tentang Saya</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-black-600 leading-relaxed mb-6">
              Mahasiswa Teknik Informatika Universitas Negeri Semarang Angkatan 22 dengan fokus pada Front-end Development dan UI/UX Design. Memiliki pengetahuan dalam HTML, CSS, JavaScript dan prinsip-prinsip perancangan antarmuka digital yang user-friendly.
            </p>
            <p className="text-black-600 leading-relaxed mb-6">
              Serta perancangan antarmuka digital yang intuitif. memiliki pengalaman dalam prototyping, implementasi desain responsif, dan optimasi pengalaman pengguna.
            </p>
            <p className="text-black-600 leading-relaxed">
              Aktif mengembangkan soft skills melalui organisasi kampus, termasuk kemampuan kepemimpinan dan public speaking. Berkomitmen pada pembelajaran berkelanjutan dan pengembangan solusi digital yang inovatif.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <BookOpen className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Pendidikan</h3>
              <p className="text-gray-600">S1 Ilmu Komputer di Universitas Negeri Semarang</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Users className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Organisasi</h3>
              <p className="text-gray-600">Kader Konservasi Universitas Negeri Semarang</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Code className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Development</h3>
              <p className="text-gray-600">Front-end Development</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Palette className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Design</h3>
              <p className="text-gray-600">UI/UX Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;