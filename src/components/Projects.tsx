import React from 'react';
import { Github, Link } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portofolio",
      description: "Portofolio ini dirancang untuk menampilkan keahlian, pengalaman, dan karya saya secara profesional dan terorganisir. Menggunakan teknologi web modern seperti HTML, CSS, JavaScript, dan framework seperti React (opsional), portofolio ini memberikan tampilan yang responsif, interaktif, dan mudah dinavigasi.                                                                         ",
      image: "src/assets/Sampul.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/sin11723/Sindi-Handayani---Portofolio"
    },
    {
      title: "Thrift-Hunt",
      description: "Thrift-Hunt adalah sebuah website e-commerce yang dibuat sebagai bagian dari proyek akhir dalam program Studi Independen di PT. Mitra Celerates. Proyek ini merupakan salah satu syarat kelulusan bagi setiap anggota kelompok. Website ini dikembangkan secara kolaboratif oleh Tim Ascending, dengan tujuan menciptakan platform yang inovatif untuk memenuhi kebutuhan belanja online.",
      image: "src/assets/Ascending.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "UI/UX Design"],
      github: "https://github.com/fathur1902/ThriftHunt-React",
      live: "http://ascending.celerateskampusmerdeka.site/",
      figma: "https://www.figma.com/design/Ptc6dgPHh5BiWAnQnuhrNx/GROUP-3--ASCENDING?node-id=1-139"
    },
    {
        title: "Chillax",
        description: "Chillax adalah sebuah desain website yang dirancang khusus untuk mahasiswa, dengan tujuan membantu mengatasi tingkat stres yang sering dialami oleh mereka. Website ini menyediakan fitur bagi mahasiswa untuk menulis diary sebagai sarana ekspresi dan refleksi diri. Desain ini dibuat dengan penuh perhatian terhadap kebutuhan emosional mahasiswa dan dikembangkan melalui kolaborasi oleh Tim Ascending.",
        image: "src/assets/Chillax.jpg",
        technologies: ["Figma", "UI/UX Design"],
        figma: "https://www.figma.com/design/Mr4QElD2cyyN7ffbpfT0AF/Scholarly-Education-Landing-Page-Template-(Community)?node-id=373-8267&t=n4TOGKLJv1jirZTg-1"
    }

  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Proyek</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      className="flex items-center text-gray-600 hover:text-blue-600"
                    >
                      <Github size={20} className="mr-1" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live}
                      className="flex items-center text-gray-600 hover:text-blue-600"
                    >
                      <Link size={20} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                  {project.figma && (
                    <a 
                      href={project.figma}
                      className="flex items-center text-gray-600 hover:text-blue-600"
                    >
                      <Link size={20} className="mr-1" />
                      Design Figma
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
