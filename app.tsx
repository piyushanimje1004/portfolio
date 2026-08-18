import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tools: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Premium Business Card',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=600&q=80',
    description: 'Elegant double-sided business card with gold foil accents and modern typography for a luxury real estate agency.',
    tools: 'CorelDRAW',
    color: 'from-amber-500 to-yellow-600'
  },
  {
    id: 2,
    title: 'Instagram Campaign',
    category: 'Digital',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
    description: 'Complete social media campaign with 12 post templates and story designs for a fashion boutique.',
    tools: 'Photoshop',
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 3,
    title: 'Restaurant Menu',
    category: 'Print',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    description: 'Fine dining menu design with food photography layout, elegant typography, and warm color palette.',
    tools: 'CorelDRAW',
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 4,
    title: 'Tech Startup Logo',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&q=80',
    description: 'Modern minimalist logo with complete brand guidelines and variations for a fintech startup.',
    tools: 'CorelDRAW',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 5,
    title: 'Travel Brochure',
    category: 'Print',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80',
    description: 'Tri-fold brochure showcasing exotic destinations with vibrant imagery and engaging layout.',
    tools: 'CorelDRAW',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 6,
    title: 'Product Photography',
    category: 'Editing',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    description: 'Professional product photo editing with background removal, color correction, and shadow enhancement.',
    tools: 'Photoshop',
    color: 'from-violet-500 to-purple-600'
  },
  {
    id: 7,
    title: 'Coffee Shop Branding',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    description: 'Complete brand identity including logo, packaging, signage, and promotional materials.',
    tools: 'CorelDRAW',
    color: 'from-amber-600 to-orange-700'
  },
  {
    id: 8,
    title: 'YouTube Channel Art',
    category: 'Digital',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&q=80',
    description: 'Eye-catching banner and thumbnail templates for a gaming channel with 50K+ subscribers.',
    tools: 'Photoshop',
    color: 'from-red-500 to-pink-600'
  },
  {
    id: 9,
    title: 'Achievement Certificate',
    category: 'Print',
    image: 'https://images.unsplash.com/photo-1589330694653-4b799315345d?w=600&q=80',
    description: 'Premium certificate design with ornate borders, gold seals, and elegant script typography.',
    tools: 'CorelDRAW',
    color: 'from-yellow-500 to-amber-600'
  },
  {
    id: 10,
    title: 'Music Festival Poster',
    category: 'Print',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
    description: 'Vibrant event poster with bold typography and dynamic composition for a summer music festival.',
    tools: 'Photoshop',
    color: 'from-fuchsia-500 to-pink-600'
  },
  {
    id: 11,
    title: 'Corporate ID System',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80',
    description: 'Professional employee ID cards, visitor passes, and access badges with company branding.',
    tools: 'CorelDRAW',
    color: 'from-slate-500 to-gray-600'
  },
  {
    id: 12,
    title: 'Wedding Invitation Suite',
    category: 'Print',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    description: 'Luxury wedding invitation with RSVP card, save-the-date, and envelope design with floral motifs.',
    tools: 'CorelDRAW',
    color: 'from-rose-400 to-pink-500'
  },
  {
    id: 13,
    title: 'Organic Food Labels',
    category: 'Packaging',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80',
    description: 'Eco-friendly product labels and packaging design for an organic food startup.',
    tools: 'CorelDRAW',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 14,
    title: 'Creative Photo Art',
    category: 'Editing',
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&q=80',
    description: 'Artistic photo manipulation with double exposure effect and color grading for magazine cover.',
    tools: 'Photoshop',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    id: 15,
    title: 'Law Firm Stationery',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&q=80',
    description: 'Professional letterhead, envelope, and business card design for a prestigious law firm.',
    tools: 'CorelDRAW',
    color: 'from-blue-600 to-indigo-700'
  },
  {
    id: 16,
    title: 'Store Opening Banner',
    category: 'Print',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    description: 'Large format flex banner design with eye-catching graphics for retail store inauguration.',
    tools: 'CorelDRAW',
    color: 'from-red-500 to-orange-600'
  },
  {
    id: 17,
    title: 'Fitness Brand Posts',
    category: 'Digital',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    description: '30-day social media content calendar with workout tips and motivational quotes for a gym.',
    tools: 'Photoshop',
    color: 'from-lime-500 to-green-600'
  },
  {
    id: 18,
    title: 'Creative Resume Template',
    category: 'Print',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80',
    description: 'Modern CV design with infographic elements and clean layout for creative professionals.',
    tools: 'CorelDRAW',
    color: 'from-teal-500 to-cyan-600'
  },
  {
    id: 19,
    title: 'Gift Card Design',
    category: 'Print',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80',
    description: 'Elegant gift voucher design with holographic elements and unique code integration.',
    tools: 'CorelDRAW',
    color: 'from-purple-500 to-violet-600'
  },
  {
    id: 20,
    title: 'Real Estate Flyer',
    category: 'Print',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
    description: 'Property listing flyer with floor plans, photos, and agent information for luxury homes.',
    tools: 'CorelDRAW',
    color: 'from-sky-500 to-blue-600'
  }
];

export default function App() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Print', 'Digital', 'Branding', 'Editing', 'Packaging'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                P
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
                <p className="text-sm text-gray-500">BCom Graduate | Graphic Designer</p>
              </div>
            </div>
            <a 
              href="mailto:your.email@example.com" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Hire Me
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                ABOUT ME
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Passionate About Design</h2>
              <p className="text-gray-600 leading-relaxed">
                BCom graduate with a creative passion for graphic design. Self-taught designer specializing in 
                <span className="text-blue-600 font-medium"> CorelDRAW</span> and 
                <span className="text-blue-600 font-medium"> Photoshop</span>. 
                I create professional designs for print and digital media that help businesses stand out. 
                From business cards to social media campaigns, I bring ideas to life with attention to detail 
                and creative flair.
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg font-medium">Print Design</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg font-medium">Brand Identity</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg font-medium">Photo Editing</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg font-medium">Social Media</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-5">My Skills</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-700">CorelDRAW</span>
                    <span className="text-blue-600 font-bold">85%</span>
                  </div>
                  <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-700">Photoshop</span>
                    <span className="text-blue-600 font-bold">80%</span>
                  </div>
                  <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-700">Typography</span>
                    <span className="text-blue-600 font-bold">75%</span>
                  </div>
                  <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-700">Layout Design</span>
                    <span className="text-blue-600 font-bold">80%</span>
                  </div>
                  <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                filter === cat 
                  ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/25' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden bg-gray-100 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className={`inline-block px-2 py-1 rounded-lg text-xs font-medium text-white bg-gradient-to-r ${project.color}`}>
                      {project.tools}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{project.category}</span>
                <h3 className="text-sm font-bold text-gray-900 mt-1 group-hover:text-blue-600 transition-colors line-clamp-1">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Project Count */}
        <div className="text-center mt-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm text-gray-500 shadow-sm border">
            Showing <strong className="text-gray-900">{filteredProjects.length}</strong> of <strong className="text-gray-900">{projects.length}</strong> projects
          </span>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-gray-100 relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition shadow-lg"
              >
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{selectedProject.category}</span>
                <span className="text-gray-300">•</span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full text-white bg-gradient-to-r ${selectedProject.color}`}>
                  {selectedProject.tools}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{selectedProject.title}</h3>
              <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
              <button 
                onClick={() => setSelectedProject(null)}
                className="mt-6 w-full py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
              >
                Close Project
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-sm">
                P
              </div>
              <span className="text-sm text-gray-500">
                © {new Date().getFullYear()} All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-sm font-medium text-gray-700">CorelDRAW</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="text-sm font-medium text-gray-700">Photoshop</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
