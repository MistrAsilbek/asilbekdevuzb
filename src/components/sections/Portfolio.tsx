'use client';

import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { ParallaxSection } from '../ParallaxSection';

export function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Ismlarga Niklar',
      category: 'web',
      description: 'Xisoblovchi bot Telegram Guruhlar uchun.',
      image: 'https://i.postimg.cc/x1cth2LC/nik.jpg',
      technologies: ['PHP', 'MSQL'],
      liveUrl: 'https://t.me/IsmgaNikVideoXBot',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Jizzax Choyhona Bot',
      category: 'Telegram Bot ',
      description: 'Choyhona ovqat buyurtma qilish uchun Telegram bot',
      image: 'https://i.postimg.cc/yDnD6G2T/photo-2023-02-28-13-27-05.jpg',
      technologies: ['Python', 'Firebase', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Красивые шрифты ✒️',  
      category: 'web',
      description: 'Бот конвертирует английский и русский текст в креативные шрифты.',
      image: 'https://i.postimg.cc/jDqj1XCy/photo-2022-04-29-15-17-56.jpg',
      technologies: ['MSQL', 'PHP'],
      liveUrl: 'https://t.me/TextPro_Bot',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Tele Navo Bot | Rasmiy',
      category: 'web',
      description: 'Инстаграм, YouTube дан видео + сиз излаган мусиқани тез ва осон юклаб берувчи бот!',
      image: 'https://i.postimg.cc/Hr6pDVLj/photo-2025-11-02-12-00-27.jpg',
      technologies: ['Python', 'MSQL', 'Javascript'],
      liveUrl: 'https://t.me/telenavobot',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'PremiumHub Premium Bot',
      category: 'Telegram Bot',
      description: '1. Tezda Premium va Stars xarid qilish 💫',
      image: 'https://i.postimg.cc/K3g9xBzp/photo-2025-12-17-22-09-39.jpg',
      technologies: ['Python', 'MSQL',],
      liveUrl: 'https://t.me/PremiumHubPremiumBot',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'ChaqqonSMM [Bot]',
      category: 'Telegram Bot',
      description: 'Ushbu bot sizga barcha ijtimoiy tarmoqlar uchun ishonchli va arzon smm xizmatlarini taqtdim etadi!',
      image: 'https://i.postimg.cc/2qbCpXYD/photo-2025-06-24-08-56-38.jpg',
      technologies: ['PHP', 'MSQL'],
      liveUrl: 'https://t.me/ChaqqonSMMBot',
      githubUrl: '#',
    },
       {
      id: 7,
      title: 'CardXabar',
      category: 'Telegram Bot',
      description: 'Ushbu bot orqali siz ozingizning bank kartangizdagi barcha harajatlaringizni va balansingizni kuzatib borishingiz mumkin',
      image: 'https://i.postimg.cc/gnwF7NZh/photo-2020-05-12-09-17-02.jpg',
      technologies: ['React', 'Tailwind', 'Framer Motion'],
      liveUrl: 'https://t.me/CardXabarBot',
      githubUrl: '#',
    },
          {
      id: 8,
      title: 'Zor Kino Bot',
      category: 'Telegram Bot',
      description: 'Bot orqali siz sevimli filmlar, seriallar va multfilmlarni sifatli formatda korishingiz mumkin',
      image: 'https://i.postimg.cc/DW0qQJNN/photo-2025-03-09-08-34-51.jpg',
      technologies: ['React', 'Tailwind', 'Framer Motion'],
      liveUrl: 'https://t.me/ZorKinoBot',
      githubUrl: '#',
    },  
          {
      id: 9,
      title: 'User Info IDbot',
      category: 'Telegram Bot',
      description: 'Bot to get user, group and channel ids',
      image: 'https://i.postimg.cc/Hr6pDVLj/photo-2025-11-02-12-00-27.jpg',
      technologies: ['Php', 'MSQL', 'Framer Motion'],
      liveUrl: 'https://t.me/usinfosbot',
      githubUrl: '#',
    },  
       
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'design', label: 'Design' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-20 lg:pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <ParallaxSection speed={1}>
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
              Portfolio
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A collection of my recent work and projects
            </p>
          </div>
        </ParallaxSection>

        {/* Filter Buttons */}
        <ParallaxSection speed={0.8}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  filter === cat.id
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                    : 'glass-card hover:scale-105 text-gray-700 dark:text-gray-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ParallaxSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ParallaxSection key={project.id} speed={0.3 + (index % 3) * 0.1}>
              <GlassCard depth="medium" className="p-0 overflow-hidden group cursor-pointer h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 pb-4">
                    <a
                      href={project.liveUrl}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl hover:bg-white/30 flex items-center justify-center transition-all hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl hover:bg-white/30 flex items-center justify-center transition-all hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-white/10 dark:bg-white/5 text-sm text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </ParallaxSection>
          ))}
        </div>
      </div>
    </div>
  );
}