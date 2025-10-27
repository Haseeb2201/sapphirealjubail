
import { useState } from 'react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedService, setSelectedService] = useState('Select a service');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const categories = ['All', 'Industrial', 'Infrastructure', 'Maintenance', 'Commercial'];
  const services = [
    'Select a service',
    'Asphalt Paving',
    'Dewatering Services',
    'HDPE Membrane',
    'Earthworks',
    'Scrap Services',
    'Scaffolding',
    'Civil Services'
  ];

  const projects = [
    {
      id: 1,
      title: 'PKG (4) AMIRAL – Jubail',
      client: 'Hyundai Engineering & Construction',
      description:
        'Comprehensive dewatering work for AMIRAL project ensuring safe and dry construction environments.',
      status: 'Ongoing',
      progress: 75,
      completion: 'Q1 2025',
      tags: ['Dewatering Systems', 'Industrial Safety', 'Project Management'],
      image:
        'https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwZW5naW5lZXJpbmd8ZW58MHx8fDE3NTg0NTE1MjZfDA&ixlib=rb-4.1.0&q=85',
      category: 'Industrial'
    },
    {
      id: 2,
      title: 'Package-6 Tanajib Gas Plant - Asphalt Paving',
      client: 'Hyundai Engineering & Construction',
      description:
        'High-quality asphalt paving work for gas plant infrastructure meeting industrial standards.',
      status: 'Ongoing',
      progress: 60,
      completion: 'Q2 2025',
      tags: ['Asphalt Paving', 'Gas Plant Infrastructure', 'Quality Standards'],
      image:
        'https://images.unsplash.com/photo-1547895749-888a559fc2a7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwZW5naW5lZXJpbmd8ZW58MHx8fDE3NTg0NTE1MjZfDA&ixlib=rb-4.1.0&q=85',
      category: 'Infrastructure'
    },
    {
      id: 3,
      title: 'Package-6 Tanajib Gas Plant - Demolition',
      client: 'Hyundai Engineering & Construction',
      description: 'Safe and controlled demolition work for gas plant infrastructure upgrades.',
      status: 'Ongoing',
      progress: 45,
      completion: 'Q3 2025',
      tags: ['Controlled Demolition', 'Safety Protocols', 'Industrial Upgrade'],
      image:
        'https://images.unsplash.com/photo-1714769889663-ca54fec12a6e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHx0bW90aGVyJTIwY29uc3RydWN0aW9uZW58ZW58MHx8fDE3NTg0NTE1MTg=&ixlib=rb-4.1.0&q=85',
      category: 'Industrial'
    },
    {
      id: 4,
      title: 'PKG (4) AMIRAL – Jubail Asphalt Paving',
      client: 'Hyundai Engineering & Construction',
      description:
        'Successful completion of asphalt paving work for AMIRAL project infrastructure.',
      status: 'Completed',
      progress: 100,
      completion: '2024',
      tags: ['Asphalt Paving', 'Infrastructure Development', 'Quality Delivery'],
      image:
        'https://images.unsplash.com/photo-1572061971745-063e9cc83afc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJwahwxfHx0bW90aGVyJTIwY29uc3RydWN0aW9uZW58ZW58MHx8fDE3NTg0NTE1MTg=&ixlib=rb-4.1.0&q=85',
      category: 'Infrastructure'
    },
    {
      id: 5,
      title: 'SINOPEC PKG 16 & 17 Road Work',
      client: 'Branch of Sinopec',
      description:
        'Complete road work construction for SINOPEC industrial facility access and infrastructure.',
      status: 'Completed',
      progress: 100,
      completion: '2024',
      tags: ['Road Construction', 'Industrial Access', 'Infrastructure'],
      image:
        'https://images.unsplash.com/photo-1547895749-888a559fc2a7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjahwzfHx0bW90aGVyJTIwY29uc3RydWN0aW9uZW58ZW58MHx8fDE3NTg0NTE1MjY=&ixlib=rb-4.1.0&q=85',
      category: 'Infrastructure'
    },
    {
      id: 6,
      title: 'Tanajib Gas Plant HDPE Liner Installation',
      client: 'Hyundai Engineering & Construction',
      description:
        'Professional HDPE liner installation for gas plant environmental and safety compliance.',
      status: 'Completed',
      progress: 100,
      completion: '2024',
      tags: ['HDPE Installation', 'Environmental Compliance', 'Gas Plant Systems'],
      image:
        'https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHx0bW90aGVyJTIwY29uc3RydWN0aW9uZW58ZW58MHx8fDE3NTg0NTE1MjY=&ixlib=rb-4.1.0&q=85',
      category: 'Industrial'
    }
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phone) {
      setSubmitMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const formData = new FormData();
      formData.append('first_name', firstName);
      formData.append('last_name', lastName);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('service', selectedService === 'Select a service' ? '' : selectedService);
      formData.append('message', message);
      formData.append('recipient_email', 'info@sapphirejubail.com');
      formData.append('subject', 'New Contact Form Submission - Sapphire Al Jubail');

      const response = await fetch('https://readdy.ai/api/form/d3amnfcjh0mfc84j8tt0', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitMessage('Thank you! Your message has been sent successfully. We will get back to you soon.');
        // Reset form
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setSelectedService('Select a service');
        setMessage('');
      } else {
        setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHome = () => {
    const homeSection = document.querySelector('#home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadBrochure = () => {
    window.open(
      'https://drive.google.com/file/d/16LM8nyPDd_jYIHK1kuYIVVkMfH0IHecO/view?usp=drive_link',
      '_blank'
    );
  };

  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <i className="ri-phone-line"></i>
              <span>+966 54 290 8146</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-mail-line"></i>
              <span>info@sapphirejubail.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>CR: 2055127001 | ISO 9001, 14001, 45001 Certified</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-10 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative mr-4">
                <div className="absolute inset-0 bg-blue-600/20 rounded-xl blur-lg"></div>
                <img
                  alt="Sapphire Al Jubail Logo"
                  className="relative h-14 w-14 object-contain drop-shadow-lg bg-white rounded-xl p-1 border border-gray-100"
                  src="https://static.readdy.ai/image/619dff44bb62b69a6436613a8db9cb8f/8300991ead32db52360089a7269c7d29.png"
                />
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-800 tracking-tight">
                  Sapphire Al Jubail
                </h1>
                <p className="text-sm text-gray-600 font-medium">General Contracting Est.</p>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              <button
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer"
                onClick={scrollToHome}
              >
                Home
              </button>
              <button
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer"
                onClick={scrollToAbout}
              >
                About
              </button>
              <button
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer"
                onClick={scrollToServices}
              >
                Services
              </button>
              <button
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer"
                onClick={scrollToProjects}
              >
                Projects
              </button>
              <button
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer"
                onClick={scrollToContact}
              >
                Contact
              </button>
              <button
                className="whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition-colors duration-200 cursor-pointer"
                onClick={scrollToContact}
              >
                Get Quote
              </button>
            </div>

            <button
              className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={`text-xl ${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer text-left"
                  onClick={() => {
                    scrollToHome();
                    setMobileMenuOpen(false);
                  }}
                >
                  Home
                </button>
                <button
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer text-left"
                  onClick={() => {
                    scrollToAbout();
                    setMobileMenuOpen(false);
                  }}
                >
                  About
                </button>
                <button
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer text-left"
                  onClick={() => {
                    scrollToServices();
                    setMobileMenuOpen(false);
                  }}
                >
                  Services
                </button>
                <button
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer text-left"
                  onClick={() => {
                    scrollToProjects();
                    setMobileMenuOpen(false);
                  }}
                >
                  Projects
                </button>
                <button
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer text-left"
                  onClick={() => {
                    scrollToContact();
                    setMobileMenuOpen(false);
                  }}
                >
                  Contact
                </button>
                <button
                  className="whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition-colors duration-200 cursor-pointer w-fit"
                  onClick={() => {
                    scrollToContact();
                    setMobileMenuOpen(false);
                  }}
                >
                  Get Quote
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20asphalt%20paving%20construction%20site%20with%20heavy%20machinery%20laying%20fresh%20asphalt%20road%20surface%2C%20featuring%20modern%20paving%20equipment%20and%20construction%20workers%20in%20safety%20gear%20ensuring%20quality%20road%20construction%20in%20industrial%20setting%20with%20clean%20blue%20sky%20background&width=1920&height=1080&seq=hero_asphalt&orientation=landscape')`
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
                  <span className="text-sm font-medium">ISO Certified Excellence</span>
                </div>

                <div className="flex items-center mb-6">
                  <div className="relative mr-4">
                    <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl"></div>
                    <img
                      alt="Sapphire Al Jubail Logo"
                      className="relative h-20 w-20 object-contain drop-shadow-2xl bg-white/90 rounded-2xl p-3 border border-white/30"
                      src="https://static.readdy.ai/image/619dff44bb62b69a6436613a8db9cb8f/8300991ead32db52360089a7269c7d29.png"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-3"></div>
                    <p className="text-blue-200 text-sm font-medium">Premium Construction Services</p>
                  </div>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Building Excellence in
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block">
                    Saudi Arabia
                  </span>
                </h1>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Sapphire Al Jubail delivers innovative construction solutions with 5+ years of expertise in
                  general contracting, industrial projects, and infrastructure development across the Kingdom.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-md transition-colors duration-200 group cursor-pointer whitespace-nowrap"
                    onClick={scrollToContact}
                  >
                    Start Your Project
                    <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </button>
                  <button
                    className="border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-medium px-8 py-3 rounded-md transition-colors duration-200 cursor-pointer whitespace-nowrap"
                    onClick={scrollToProjects}
                  >
                    <i className="ri-eye-line mr-2"></i>
                    View Our Work
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-2xl font-bold">5+</span>
                    </div>
                    <p className="text-gray-400 text-sm">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-2xl font-bold">70+</span>
                    </div>
                    <p className="text-gray-400 text-sm">Expert Team</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-2xl font-bold">3</span>
                    </div>
                    <p className="text-gray-400 text-sm">ISO Certifications</p>
                  </div>
                </div>
              </div>

              <div className="lg:ml-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Sapphire?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center text-white">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span>Asphalt Paving &amp; Road Construction</span>
                    </div>
                    <div className="flex items-center text-white">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span>Dewatering &amp; HDPE Systems</span>
                    </div>
                    <div className="flex items-center text-white">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span>Earthworks &amp; Civil Services</span>
                    </div>
                    <div className="flex items-center text-white">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span>Scaffolding &amp; Safety Equipment</span>
                    </div>
                    <div className="flex items-center text-white">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span>24/7 Support &amp; Maintenance</span>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg border border-blue-400/30">
                    <p className="text-blue-100 text-sm italic">
                      "Excellence is never an accident. It is always the result of high intention, sincere effort,
                      and intelligent execution."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-medium">About Us</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Building Trust Through Excellence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With over 5 years of experience, Sapphire Al Jubail has established itself as a leading contractor in
                Saudi Arabia, delivering innovative solutions across industrial, civil, and infrastructure projects.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <div className="flex items-center mb-6">
                  <div className="relative mr-4">
                    <div className="absolute inset-0 bg-blue-100 rounded-xl blur-sm"></div>
                    <img
                      alt="Sapphire Al Jubail Logo"
                      className="relative h-16 w-16 object-contain drop-shadow-lg bg-white rounded-xl p-2 border border-blue-200"
                      src="https://static.readdy.ai/image/619dff44bb62b69a6436613a8db9cb8f/8300991ead32db52360089a7269c7d29.png"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Your Trusted Construction Partner</h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-3"></div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Sapphire Al Jubail General Contracting Est. specializes in delivering professional and reliable contracting
                  services across Saudi Arabia. We serve the oil &amp; gas, petrochemical, and municipal sectors with
                  technical excellence and efficient project management.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our customer-focused approach ensures quality standards are maintained while delivering innovative and
                  sustainable infrastructure solutions with the highest safety and environmental standards.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center p-2">
                        <img
                          alt="Sapphire Al Jubail Logo"
                          className="w-full h-full object-contain"
                          src="https://static.readdy.ai/image/619dff44bb62b69a6436613a8db9cb8f/8300991ead32db52360089a7269c7d29.png"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Our Mission</h4>
                      <p className="text-gray-600">
                        Professional and reliable contracting services delivery with technical excellence, efficient
                        project management, and a customer-focused approach ensuring quality standards.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <i className="ri-eye-line text-blue-600 text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Our Vision</h4>
                      <p className="text-gray-600">
                        To be the leading contracting partner in Saudi Arabia, delivering innovative and sustainable
                        infrastructure solutions while maintaining the highest safety and environmental standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    alt="Modern Building Architecture"
                    className="w-full h-96 object-cover object-top"
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-2xl border border-gray-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">5+</div>
                    <div className="text-gray-600 text-sm">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                    <i className="ri-bar-chart-line text-xl"></i>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">70+</div>
                <div className="text-gray-600">Expert Team Members</div>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                    <i className="ri-bar-chart-line text-xl"></i>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
                <div className="text-gray-600">Engineers</div>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                    <i className="ri-bar-chart-line text-xl"></i>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                    <i className="ri-bar-chart-line text-xl"></i>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Core Values</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <i className="ri-award-line text-blue-600"></i>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Committed to delivering the highest quality in every project through meticulous attention to
                        detail.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <i className="ri-shield-check-line text-blue-600"></i>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Safety First</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Maintaining a zero-incident safety culture with rigorous quality assurance protocols.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <i className="ri-team-line text-blue-600"></i>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Team Excellence</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Building success through skilled professionals and strategic partnerships.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <i className="ri-medal-line text-blue-600"></i>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Quality Standards</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        ISO certified processes ensuring consistent high-performance delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications &amp; Standards</h3>
                <div className="bg-gray-50 rounded-xl p-8">
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <i className="ri-checkbox-circle-line text-green-600"></i>
                      <span className="text-gray-700">ISO 9001:2015 - Quality Management</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="ri-checkbox-circle-line text-green-600"></i>
                      <span className="text-gray-700">ISO 14001:2015 - Environmental Management</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="ri-checkbox-circle-line text-green-600"></i>
                      <span className="text-gray-700">ISO 45001:2018 - Occupational Health &amp; Safety</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Our Philosophy</h4>
                    <blockquote className="text-gray-600 italic border-l-4 border-blue-500 pl-4">
                      "Excellence is never an accident. It is always the result of high intention, sincere effort,
                      and intelligent execution."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-medium">Our Services</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Comprehensive Construction Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive construction and contracting services deliver exceptional results with professional excellence and innovative solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt="Professional construction management and general contracting services with quality assurance, featuring modern construction site with equipment and workers ensuring safety standards and project excellence in industrial and commercial building projects"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    src="https://readdy.ai/api/search-image?query=Professional%20construction%20management%20and%20general%20contracting%20services%20with%20quality%20assurance%2C%20featuring%20modern%20construction%20site%20with%20equipment%20and%20workers%20ensuring%20safety%20standards%20and%20project%20excellence%20in%20industrial%20and%20commercial%20building%20projects&width=400&height=300&seq=service1&orientation=landscape"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg">
                      <i className="ri-building-line text-xl"></i>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                      General Contracting
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Complete construction management from design to completion with quality assurance and professional execution.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      <span>Project Management</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      <span>Design &amp; Build</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      <span>Quality Control</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt="Professional asphalt paving and road construction services for industrial facilities, featuring heavy machinery laying fresh asphalt with workers ensuring quality standards and surface preparation on construction site with clean industrial background"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    src="https://readdy.ai/api/search-image?query=Professional%20asphalt%20paving%20and%20road%20construction%20services%20for%20industrial%20facilities%2C%20featuring%20heavy%20machinery%20laying%20fresh%20asphalt%20with%20workers%20ensuring%20quality%20standards%20and%20surface%20preparation%20on%20construction%20site%20with%20clean%20industrial%20background&width=400&height=300&seq=service2&orientation=landscape"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg">
                      <i className="ri-road-line text-xl"></i>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                      Asphalt Paving
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Professional asphalt paving and road construction services for industrial facilities and infrastructure projects.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                      <span>Road Construction</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                      <span>Surface Preparation</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                      <span>Quality Testing</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt="Advanced dewatering systems and water management solutions for construction sites, featuring industrial pumps and drainage equipment with workers managing water control systems in clean professional construction environment"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    src="https://readdy.ai/api/search-image?query=Advanced%20dewatering%20systems%20and%20water%20management%20solutions%20for%20construction%20sites%2C%20featuring%20industrial%20pumps%20and%20drainage%20equipment%20with%20workers%20managing%20water%20control%20systems%20in%20clean%20professional%20construction%20environment&width=400&height=300&seq=service3&orientation=landscape"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg">
                      <i className="ri-drop-line text-xl"></i>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                      Dewatering Services
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Advanced dewatering systems and solutions for construction sites and industrial facilities.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                      <span>Water Management</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                      <span>Pump Systems</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                      <span>Site Safety</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt="High-density polyethylene membrane installation for environmental protection, featuring workers installing HDPE liner systems with professional equipment ensuring containment and environmental safety with clean industrial background"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    src="https://readdy.ai/api/search-image?query=High-density%20polyethylene%20membrane%20installation%20for%20environmental%20protection%2C%20featuring%20workers%20installing%20HDPE%20liner%20systems%20with%20professional%20equipment%20ensuring%20containment%20and%20environmental%20safety%20with%20clean%20industrial%20background&width=400&height=300&seq=service4&orientation=landscape"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg">
                      <i className="ri-shield-line text-xl"></i>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                      HDPE Membrane
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      High-density polyethylene membrane installation for environmental protection and containment systems.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                      <span>Liner Installation</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                      <span>Environmental Protection</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                      <span>Quality Assurance</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt="Comprehensive earthmoving and excavation services for site preparation, featuring heavy excavation equipment and machinery performing grading and land development work with professional construction crew in clean industrial setting"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    src="https://readdy.ai/api/search-image?query=Comprehensive%20earthmoving%20and%20excavation%20services%20for%20site%20preparation%2C%20featuring%20heavy%20excavation%20equipment%20and%20machinery%20performing%20grading%20and%20land%20development%20work%20with%20professional%20construction%20crew%20in%20clean%20industrial%20setting&width=400&height=300&seq=service5&orientation=landscape"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="p-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg">
                      <i className="ri-landscape-line text-xl"></i>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                      Earthworks
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Comprehensive earthmoving and excavation services for site preparation and land development.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                      <span>Excavation</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                      <span>Grading</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                      <span>Site Preparation</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt="Professional scrap metal collection and recycling services for industrial sites, featuring organized metal sorting and collection equipment with workers managing recycling operations in clean industrial facility environment"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    src="https://readdy.ai/api/search-image?query=Professional%20scrap%20metal%20collection%20and%20recycling%20services%20for%20industrial%20sites%2C%20featuring%20organized%20metal%20sorting%20and%20collection%20equipment%20with%20workers%20managing%20recycling%20operations%20in%20clean%20industrial%20facility%20environment&width=400&height=300&seq=service6&orientation=landscape"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="p-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg">
                      <i className="ri-recycle-line text-xl"></i>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors mb-2">
                      Scrap Services
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Professional scrap metal collection and recycling services for industrial and construction sites.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></div>
                      <span>Metal Collection</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-teal-5

rounded-full mr-3"></div>
                      <span>Recycling</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></div>
                      <span>Site Cleanup</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt="Safe and reliable scaffolding systems for construction projects, featuring professional scaffolding installation with safety equipment and workers ensuring secure access systems in clean construction environment"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    src="https://readdy.ai/api/search-image?query=Safe%20and%20reliable%20scaffolding%20systems%20for%20construction%20projects%2C%20featuring%20professional%20scaffolding%20installation%20with%20safety%20equipment%20and%20workers%20ensuring%20secure%20access%20systems%20in%20clean%20construction%20environment&width=400&height=300&seq=service7&orientation=landscape"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg">
                      <i className="ri-building-2-line text-xl"></i>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                      Scaffolding
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Safe and reliable scaffolding systems for construction and maintenance projects with safety compliance.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></div>
                      <span>Safety Systems</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></div>
                      <span>Custom Design</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></div>
                      <span>Installation</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt="Comprehensive civil engineering services including utilities and infrastructure development, featuring modern construction equipment working on drainage systems and utility installation with professional engineers in clean industrial setting"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    src="https://readdy.ai/api/search-image?query=Comprehensive%20civil%20engineering%20services%20including%20utilities%20and%20infrastructure%20development%2C%20featuring%20modern%20construction%20equipment%20working%20on%20drainage%20systems%20and%20utility%20installation%20with%20professional%20engineers%20in%20clean%20industrial%20setting&width=400&height=300&seq=service8&orientation=landscape"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg">
                      <i className="ri-tools-line text-xl"></i>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors mb-2">
                      Civil Services
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Comprehensive civil engineering services including utilities, drainage, and infrastructure development.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></div>
                      <span>Infrastructure</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></div>
                      <span>Utilities</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></div>
                      <span>Drainage Systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-medium">Recent Projects</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Delivering Excellence Across Saudi Arabia
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From major industrial complexes to infrastructure development, our portfolio showcases our commitment to
                quality and innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      alt={project.title}
                      className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      src={project.image}
                    />
                    <div className="absolute top-4 left-4">
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {project.status}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                        <i className="ri-building-line text-gray-600"></i>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <div className="text-sm text-blue-600 font-medium">{project.client}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>

                    {project.status === 'Ongoing' && (
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      {project.status === 'Completed' && (
                        <div className="flex items-center gap-2">
                          <i className="ri-time-line"></i>
                          <span>8 months</span>
                        </div>
                      )}
                      <div
                        className={`flex items-center gap-2 font-medium ${
                          project.status === 'Ongoing' ? 'text-blue-600' : 'text-green-600'
                        }`}
                      >
                        <span>{project.status}</span>
                      </div>
                    </div>

                    <div
                      className={`text-xs font-medium ${
                        project.status === 'Ongoing' ? 'text-blue-600' : 'text-green-600'
                      }`}
                    >
                      {project.status === 'Ongoing'
                        ? `Expected Completion: ${project.completion}`
                        : `Completed: ${project.completion}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Ready to start your next project? Contact us today for a free consultation.
                  </p>
                </div>

                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Information (existing code retained) */}
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                        <div className="space-y-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <i className="ri-map-pin-line text-white text-xl"></i>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                              <p className="text-gray-600 leading-relaxed">
                                Al Jubail Industrial City<br />
                                Eastern Province, Saudi Arabia
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <i className="ri-phone-line text-white text-xl"></i>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                              <p className="text-gray-600 text-sm leading-relaxed">+966 54 290 8146</p>
                              <p className="text-gray-600 text-sm leading-relaxed">+966 55 860 1796</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <i className="ri-mail-line text-white text-xl"></i>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                              <p className="text-gray-600 text-sm leading-relaxed">info@sapphirejubail.com</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <i className="ri-time-line text-white text-xl"></i>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                Sunday - Thursday: 8:00 AM - 7:00 PM
                              </p>
                              <p className="text-gray-600 text-sm leading-relaxed">Saturday: 8:00 AM - 7:00 PM</p>
                              <p className="text-gray-600 text-sm leading-relaxed">Friday: Closed</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h4 className="font-semibold text-gray-900 mb-4">Why Choose Sapphire?</h4>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-center space-x-3">
                            <i className="ri-check-line text-blue-600"></i>
                            <span>Licensed &amp; Insured</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <i className="ri-check-line text-blue-600"></i>
                            <span>5+ Years Experience</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <i className="ri-check-line text-blue-600"></i>
                            <span>24/7 Emergency Service</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <i className="ri-check-line text-blue-600"></i>
                            <span>Quality Guaranteed</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Contact Form (modified) */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>

                      {submitMessage && (
                        <div
                          className={`mb-6 p-4 rounded-lg ${
                            submitMessage.includes('Thank you')
                              ? 'bg-green-50 text-green-800 border border-green-200'
                              : 'bg-red-50 text-red-800 border border-red-200'
                          }`}
                        >
                          {submitMessage}
                        </div>
                      )}

                      <form className="space-y-6" onSubmit={handleContactSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              First Name
                            </label>
                            <input
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                              placeholder="John"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              required
                              disabled={isSubmitting}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Last Name
                            </label>
                            <input
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                              placeholder="Doe"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              required
                              disabled={isSubmitting}
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                          </label>
                          <input
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                            placeholder="john@example.com"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={isSubmitting}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone
                          </label>
                          <input
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                            placeholder="+966 50 123 4567"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            disabled={isSubmitting}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Service Needed
                          </label>
                          <select
                            className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                            value={selectedService}
                            onChange={(e) => setSelectedService(e.target.value)}
                            disabled={isSubmitting}
                          >
                            <option value="Select a service">Select a service</option>
                            <option value="Asphalt Paving">Asphalt Paving</option>
                            <option value="Dewatering Services">Dewatering Services</option>
                            <option value="HDPE Membrane">HDPE Membrane</option>
                            <option value="Earthworks">Earthworks</option>
                            <option value="Scrap Services">Scrap Services</option>
                            <option value="Scaffolding">Scaffolding</option>
                            <option value="Civil Services">Civil Services</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Message
                          </label>
                          <textarea
                            rows={5}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 resize-vertical"
                            placeholder="Tell us about your project..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            maxLength={500}
                            required
                            disabled={isSubmitting}
                          ></textarea>
                          <p className="text-xs text-gray-500 mt-1">Maximum 500 characters</p>
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                          <i className={`ml-2 ${isSubmitting ? 'ri-loader-4-line animate-spin' : 'ri-send-plane-line'}`}></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End of Contact Section */}
          </div>

          {/* Custom Solution Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                      Need a Custom Solution?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                      Our expert team can design and implement tailored construction solutions for your specific project requirements.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <button
                        className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                        onClick={scrollToContact}
                      >
                        <i className="ri-chat-3-line mr-2"></i>
                        Discuss Your Project
                      </button>
                      <button
                        className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 cursor-pointer whitespace-nowrap"
                        onClick={downloadBrochure}
                      >
                        <i className="ri-download-line mr-2"></i>
                        Download Profile
                      </button>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              </div>
            </div>
          </section>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
              <div className="lg:col-span-1">
                <div className="flex items-center mb-6">
                  <div className="relative mr-4">
                    <div className="absolute inset-0 bg-white/10 rounded-xl blur-md"></div>
                    <img
                      alt="Sapphire Al Jubail Logo"
                      className="relative h-16 w-16 object-contain drop-shadow-xl bg-white/95 rounded-xl p-2 border border-white/20"
                      src="https://static.readdy.ai/image/619dff44bb62b69a6436613a8db9cb8f/8300991ead32db52360089a7269c7d29.png"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl tracking-tight">Sapphire Al Jubail</h3>
                    <p className="text-gray-300 text-sm font-medium">General Contracting Est.</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                      <span className="text-xs text-gray-400">Since 2017</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Building excellence across Saudi Arabia with 5+ years of expertise in construction, industrial projects, and infrastructure development.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <i className="ri-award-line text-blue-400"></i>
                    <span className="text-gray-300">CR: 2055127001</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="ri-medal-line text-blue-400"></i>
                    <span className="text-gray-300">ISO 9001, 14001, 45001 Certified</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6">Our Services</h4>
                <ul className="space-y-3">
                  <li>
                    <button
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center group cursor-pointer"
                      onClick={scrollToServices}
                    >
                      <i className="ri-arrow-right-s-line mr-1 group-hover:translate-x-1 transition-transform"></i>
                      General Contracting
                    </button>
                  </li>
                  <li>
                    <button
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center group cursor-pointer"
                      onClick={scrollToServices}
                      >
                      <i className="ri-arrow-right-s-line mr-1 group-hover:translate-x-1 transition-transform"></i>
                      Road Construction
                    </button>
                  </li>
                  <li>
                    <button className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center group cursor-pointer"
                      onClick={scrollToServices}
                    >
                      <i className="ri-arrow-right-s-line mr-1 group-hover:translate-x-1 transition-transform"></i>
                      Dewatering Systems
                    </button>
                  </li>
                  <li>
                    <button className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center group cursor-pointer"
                      onClick={scrollToServices}
                    >
                      <i className="ri-arrow-right-s-line mr-1 group-hover:translate-x-1 transition-transform"></i>
                      HDPE Membranes
                    </button>
                  </li>
                  <li>
                    <button className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center group cursor-pointer"
                      onClick={scrollToServices}
                    >
                      <i className="ri-arrow-right-s-line mr-1 group-hover:translate-x-1 transition-transform"></i>
                      Industrial Maintenance
                    </button>
                  </li>
                  <li>
                    <button className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center group cursor-pointer"
                      onClick={scrollToServices}
                    >
                      <i className="ri-arrow-right-s-line mr-1 group-hover:translate-x-1 transition-transform"></i>
                      Safety Equipment
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                    <button className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center group cursor-pointer"
                      onClick={scrollToAbout}
                    >
                      <i className="ri-arrow-right-s-line mr-1 group-hover:translate-x-1 transition-transform"></i>
                      About Us
                    </button>
                  </li>
                  <li>
                    <button className="text-gray-300 hover

:text-blue-400 transition-colors text-sm flex items-center group cursor-pointer"
                      onClick={scrollToServices}
                    >
                      <i className="ri-arrow-right-s-line mr-1 group-hover:translate-x-1 transition-transform"></i>
                      Our Services
                    </button>
                  </li>
                  <li>
                    <button className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center group cursor-pointer"
                      onClick={scrollToProjects}
                    >
                      <i className="ri-arrow-right-s-line mr-1 group

-hover:translate-x-1 transition-transform"></i>
                      Projects
                    </button>
                  </li>
                  <li>
                    <button className="text-gray-300 hover:text-blue-400 transition-

col

or

s text-sm flex items-center group cursor-pointer"
                      onClick={scrollToContact}
                    >
                      <i className="ri-arrow-right-s-line mr-1 group-hover:translate-x-1

transition

-
transform

"></

i

>Contact</

button

>
                  </li>
                  <li>
                    <button className="text

-gray-300 hover:text

-blue-400 transition-colors text-sm flex items-

center group cursor-pointer" on

Click={scrollToContact}>
                      <i className="ri

-arrow

-right

-s

-line mr-1

group

-hover:translate-x-1

transition

-transform"></i> Get Quote
                    </button>
                  </li>
                  <li>
                    <a href="https://readdy.ai/?origin=logo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center group"
                    >
                      <i className="ri-external-link-line mr-1 group-hover:translate-x-1 transition-transform"></i>
                      Made with Readdy
                    </a>
                  </li>
                </ul>

                <div className="mt-8">
                  <h5 className="font-semibold text-sm mb-4 text-gray-200">Certifications</h5>
                  <div className="space-y-2 text-xs text-gray-400">
                    <p>• ISO 9001:2015 Quality Management</p>
                    <p>• ISO 14001:2015 Environmental</p>
                    <p>• ISO 45001:2018 Safety Management</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6">Get In Touch</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <i className="ri-map-pin-line text-blue-400 mt-1"></i>
                    <div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        P.O. Box 7916, Jubail 35514,<br />
                        Kingdom of Saudi Arabia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <i className="ri-phone-line text-blue-400"></i>
                    <div className="text-sm">
                      <p className="text-gray-300">
                        <a href="tel:+966542908146" className="hover:text-blue-400 transition-colors">
                          +966 54 290 8146
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <i className="ri-mail-line text-blue-400"></i>
                    <div className="text-sm">
                      <p className="text-gray-300">
                        <a href="mailto:info@sapphirejubail.com" className="hover:text-blue-400 transition-colors">
                          info@sapphirejubail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <i className="ri-global-line text-blue-400"></i>
                    <div className="text-sm">
                      <p className="text-gray-300">
                        <a
                          href="https://www.sapphirealjubail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-400 transition-colors"
                        >
                          www.sapphirealjubail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-red-900/30 border border-red-800/50 rounded-lg">
                  <h5 className="font-semibold text-red-300 mb-2 text-sm">24/7 Emergency</h5>
                  <p className="text-red-200 font-semibold">+966 55 860 1796</p>
                  <p className="text-red-300 text-xs mt-1">Available for urgent project needs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Sapphire Al Jubail General Contracting Est. All rights reserved.
                </div>
                <div className="text-gray-400 text-sm">مؤسسة ياقوت الجبيل للمقاولات العامة</div>
                <div className="flex items-center gap-6 text-xs text-gray-500">
                  <span>Kingdom of Saudi Arabia</span>
                  <span>•</span>
                  <span>Since 2017</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
