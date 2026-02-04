import { useState, useEffect } from 'react';

function App() {
  const [isContactVisible, setContactVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentCertificate, setCurrentCertificate] = useState(null);
  const [currentWebinar, setCurrentWebinar] = useState(null);
  const [formStatus, setFormStatus] = useState(null);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false); // Close mobile menu after selection
    }
  };

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'certificates', 'webinars', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY + 100 >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to show specific project image
  const showProjectImage = (imageName) => {
    setCurrentImage(imageName);
  };

  // Certificates data - Add your certificates here
  const certificates = [
    {
      id: 1,
      title: "AI Fundamentals with IBM SkillsBuild",
      image: "/certfunda.png",
      url: "/certfunda.png"
    },
    {
      id: 2,
      title: "Apply AI: Analyze Customer Reviews",
      image: "/certapply.png",
      url: "/certapply.png" 
    },
    {
      id: 3,
      title: "Apply AI: Update Your Resume",
      image: "/cert3.png",
      url: "/cert3.png" 
    },
    {
      id: 4,
      title: "JavaScript Essentials 1",
      image: "/cert4.png",
      url: "/cert4.png" 
    },
    {
      id: 5,
      title: "Introduction to Data Science",
      image: "/cert5.png",
      url: "/cert5.png" 
    },
    {
      id: 6,
      title: "Introduction to Modern AI",
      image: "/cert6.png",
      url: "/cert6.png" 
    }
  ];

  // Webinars data - Add your webinars here
  const webinars = [
    {
      id: 1,
      title: "Cybersecurity for Everyone and Introduction to Philippine National Public Key Infrastructure (PNPKI)",
      image: "/webi1.png",
      url: "/webi1.png",
      date: "2026-01-28",
      organizer: "DICT CAR, Abra Provincial Office",
      time: "8:00 AM – 12:00 NN",
      description: "Digital Safety Webinar aimed to enhance participants' awareness and knowledge on digital safety, cybersecurity best practices, and responsible use of digital platforms."
    }
  ];
  return (
    <div className="bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 text-white min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-purple-800/90 backdrop-blur-md z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-pink-300">My Portfolio Profile</h1>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-4 lg:space-x-8">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className={`text-base lg:text-lg font-medium hover:text-pink-300 transition-colors ${activeSection === 'home' ? 'text-pink-300' : 'text-purple-200'
                  }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-base lg:text-lg font-medium hover:text-pink-300 transition-colors ${activeSection === 'about' ? 'text-pink-300' : 'text-purple-200'
                  }`}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className={`text-base lg:text-lg font-medium hover:text-pink-300 transition-colors ${activeSection === 'projects' ? 'text-pink-300' : 'text-purple-200'
                  }`}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('certificates')}
                className={`text-base lg:text-lg font-medium hover:text-pink-300 transition-colors ${activeSection === 'certificates' ? 'text-pink-300' : 'text-purple-200'
                  }`}
              >
                Certificates
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('webinars')}
                className={`text-base lg:text-lg font-medium hover:text-pink-300 transition-colors ${activeSection === 'webinars' ? 'text-pink-300' : 'text-purple-200'
                  }`}
              >
                Webinars
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-base lg:text-lg font-medium hover:text-pink-300 transition-colors ${activeSection === 'contact' ? 'text-pink-300' : 'text-purple-200'
                  }`}
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-purple-800/95 px-4 py-2">
            <ul className="flex flex-col space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className={`w-full text-left py-2 px-4 rounded-md font-medium hover:text-pink-300 transition-colors ${activeSection === 'home' ? 'text-pink-300 bg-purple-900/50' : 'text-purple-200'
                    }`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className={`w-full text-left py-2 px-4 rounded-md font-medium hover:text-pink-300 transition-colors ${activeSection === 'about' ? 'text-pink-300 bg-purple-900/50' : 'text-purple-200'
                    }`}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className={`w-full text-left py-2 px-4 rounded-md font-medium hover:text-pink-300 transition-colors ${activeSection === 'projects' ? 'text-pink-300 bg-purple-900/50' : 'text-purple-200'
                    }`}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('certificates')}
                  className={`w-full text-left py-2 px-4 rounded-md font-medium hover:text-pink-300 transition-colors ${activeSection === 'certificates' ? 'text-pink-300 bg-purple-900/50' : 'text-purple-200'
                    }`}
                >
                  Certificates
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('webinars')}
                  className={`w-full text-left py-2 px-4 rounded-md font-medium hover:text-pink-300 transition-colors ${activeSection === 'webinars' ? 'text-pink-300 bg-purple-900/50' : 'text-purple-200'
                    }`}
                >
                  Webinars
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`w-full text-left py-2 px-4 rounded-md font-medium hover:text-pink-300 transition-colors ${activeSection === 'contact' ? 'text-pink-300 bg-purple-900/50' : 'text-purple-200'
                    }`}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 pb-12 md:pt-0">
        <img
          src="me.png"
          alt="Cathrina Lapuz"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-pink-300 mb-6 md:mb-8 transform hover:scale-105 transition-transform"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Cathrina Lapuz</h1>
        <p className="text-lg sm:text-xl text-pink-200 px-4">Full Stack Web Developer | UI/UX Designer</p>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 px-4 sm:px-6 bg-purple-800/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-300 mb-6 md:mb-8">About Me</h2>
          <div className="space-y-4 text-left">
            <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
              I'm an <span className="text-pink-300">Information Technology student</span> majoring in Web Development, with a passion for creating user-friendly websites. My journey into web development began through my classes, where I learned the fundamentals of <span className="text-pink-300">HTML</span>, <span className="text-pink-300">CSS</span>, and <span className="text-pink-300">JavaScript</span>, and now I am diving into the <span className="text-pink-300">PERN stack</span> to expand my skills further.
            </p>
            <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
              What excites me most about web development is the ability to build <span className="text-pink-300">portfolios</span> and <span className="text-pink-300">personal projects</span>, allowing me to bring my ideas to life while improving my technical abilities. I enjoy learning new technologies and applying them in real-world projects that challenge my creativity and problem-solving skills.
            </p>
            <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
              Outside of web development, I enjoy <span className="text-pink-300">managing businesses</span>, where I can apply my organizational and leadership skills. This interest helps me think critically and manage projects efficiently.
            </p>
            <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
              I'm always eager to expand my skill set and take on new challenges. If you're looking for someone who is dedicated, curious, and ready to learn, let's connect and create something amazing!
            </p>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-300 mb-8 md:mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Project 1: Convert Activity */}
            <div className="bg-purple-800 p-6 backdrop-blur-md md:p-8 rounded-xl shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:-translate-y-2">
              <h3 className="text-xl md:text-2xl font-bold text-pink-300 mb-3 md:mb-4">Project 1: Convert Activity</h3>
              <p className="text-sm sm:text-base text-purple-100">
                A simple web application that allows users to convert Philippine Peso (PHP) into other currencies, such as US Dollar (USD), Chinese Yuan (CNY), Euro (EUR), and Japanese Yen (JPY).
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mt-4 md:mt-6">
                <button
                  onClick={() => showProjectImage('converter.png')}
                  className="px-4 py-2 sm:px-6 sm:py-2 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-all text-sm sm:text-base"
                >
                  View Full Image
                </button>
                <a
                  href="converter-activity/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 sm:px-6 sm:py-2 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-all text-sm sm:text-base text-center"
                >
                  View
                </a>
              </div>
            </div>

            {/* Project 2: todo list*/}
            <div className="bg-purple-800 p-6 md:p-8 rounded-xl shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:-translate-y-2">
              <h3 className="text-xl md:text-2xl font-bold text-pink-300 mb-3 md:mb-4">Project 2: To-Do List Application</h3>
              <p className="text-sm sm:text-base text-purple-100">
                A full-stack to-do list application built with Express.js and PostgreSQL. Users can create, update, and delete tasks and subtasks, with secure user authentication.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mt-4 md:mt-6">
                <button
                  onClick={() => showProjectImage('todo.png')}
                  className="px-4 py-2 sm:px-6 sm:py-2 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-all text-sm sm:text-base"
                >
                  View Full Image
                </button>
                <a
                  href="https://to-do-client-navy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 sm:px-6 sm:py-2 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-all text-sm sm:text-base text-center"
                >
                  View
                </a>
              </div>
            </div>

            {/* Project 3: calculator*/}
            <div className="bg-purple-800 p-6 md:p-8 rounded-xl shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:-translate-y-2">
              <h3 className="text-xl md:text-2xl font-bold text-pink-300 mb-3 md:mb-4">Project 3: Calculator</h3>
              <p className="text-sm sm:text-base text-purple-100">
                A responsive calculator application built with vanilla JavaScript that performs basic arithmetic operations with a clean, user-friendly interface.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mt-4 md:mt-6">
                <button
                  onClick={() => showProjectImage('cal.png')}
                  className="px-4 py-2 sm:px-6 sm:py-2 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-all text-sm sm:text-base"
                >
                  View Full Image
                </button>
                <a
                  href="calculator/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 sm:px-6 sm:py-2 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-all text-sm sm:text-base text-center"
                >
                  View
                </a>
              </div>
            </div>

            {/* Project 4: Loop */}
            <div className="bg-purple-800 p-6 md:p-8 rounded-xl shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:-translate-y-2">
              <h3 className="text-xl md:text-2xl font-bold text-pink-300 mb-3 md:mb-4">Project 4: Loop</h3>
              <p className="text-sm sm:text-base text-purple-100">
                This project lets you input a number and see the sum, factorial, odd numbers, and even numbers from 1 to that number, using JavaScript loops.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mt-4 md:mt-6">
                <button
                  onClick={() => showProjectImage('loop.png')}
                  className="px-4 py-2 sm:px-6 sm:py-2 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-all text-sm sm:text-base"
                >
                  View Full Image
                </button>
                <a
                  href="loop/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 sm:px-6 sm:py-2 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-all text-sm sm:text-base text-center"
                >
                  View
                </a>
              </div>
            </div>


            {/* Project 5: Employee Management */}
            <div className="bg-purple-800 p-6 md:p-8 rounded-xl shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:-translate-y-2">
              <h3 className="text-xl md:text-2xl font-bold text-pink-300 mb-3 md:mb-4">Project 5: Employee Management</h3>
              <p className="text-sm sm:text-base text-purple-100">
                This project demonstrates an employee management system that uses JavaScript arrays and objects to store, manage, and display employee information. It allows users to add new employees and display all employee details in a table format.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mt-4 md:mt-6">
                <button
                  onClick={() => showProjectImage('array.png')}
                  className="px-4 py-2 sm:px-6 sm:py-2 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-all text-sm sm:text-base"
                >
                  View Full Image
                </button>
                <a
                  href="Array Objects/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 sm:px-6 sm:py-2 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-all text-sm sm:text-base text-center"
                >
                  View
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16 md:py-20 px-4 sm:px-6 bg-purple-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-300 mb-8 md:mb-12 text-center">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="bg-purple-800 p-6 backdrop-blur-md md:p-8 rounded-xl shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:-translate-y-2"
              >
                <div className="mb-4 relative">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const placeholder = e.target.nextElementSibling;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-48 bg-purple-900/50 rounded-lg mb-4 items-center justify-center hidden">
                    <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-pink-300 mb-4 md:mb-6">{certificate.title}</h3>
                <button
                  onClick={() => setCurrentCertificate(certificate)}
                  className="block w-full px-4 py-2 sm:px-6 sm:py-2 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-all text-sm sm:text-base text-center"
                >
                  View Certificate
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section id="webinars" className="py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-300 mb-8 md:mb-12 text-center">Webinars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {webinars.map((webinar) => (
              <div
                key={webinar.id}
                className="bg-purple-800 p-6 backdrop-blur-md md:p-8 rounded-xl shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:-translate-y-2"
              >
                <div className="mb-4 relative">
                  <img
                    src={webinar.image}
                    alt={webinar.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const placeholder = e.target.nextElementSibling;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-48 bg-purple-900/50 rounded-lg mb-4 items-center justify-center hidden">
                    <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-pink-300 mb-2">{webinar.title}</h3>
                {webinar.date && (
                  <p className="text-sm text-purple-200 mb-1">
                    <span className="text-pink-300">Date:</span> {new Date(webinar.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                )}
                {webinar.organizer && (
                  <p className="text-sm text-purple-200 mb-4">
                    <span className="text-pink-300">Organizer:</span> {webinar.organizer}
                  </p>
                )}
                <button
                  onClick={() => setCurrentWebinar(webinar)}
                  className="block w-full px-4 py-2 sm:px-6 sm:py-2 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-all text-sm sm:text-base text-center"
                >
                  View Webinar
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 px-4 sm:px-6 bg-purple-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-300 mb-8 md:mb-12 text-center">Get In Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="bg-purple-800/70 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-purple-700 hover:border-pink-400 transition-all">
              <h3 className="text-xl md:text-2xl font-bold text-pink-300 mb-4 md:mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500/20 p-2 rounded-full">
                    <svg className="w-5 h-5 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-purple-200">Email</p>
                    <a href="mailto:lapuzcathrina65@gmail.com" className="text-pink-300 hover:underline text-base">lapuzcathrina65@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500/20 p-2 rounded-full">
                    <svg className="w-5 h-5 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-purple-200">Phone</p>
                    <p className="text-pink-300 text-base">09053888834</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500/20 p-2 rounded-full">
                    <svg className="w-5 h-5 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-purple-200">Location</p>
                    <p className="text-pink-300 text-base">Abra, Philippines</p>
                  </div>
                </div>

                <div className="pt-4 flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/cathrina-lapuz-31573b356/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500/20 hover:bg-pink-500/30 p-3 rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-pink-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://web.facebook.com/cathrinalapuz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500/20 hover:bg-pink-500/30 p-3 rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 text-pink-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Cathrinaaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500/20 hover:bg-pink-500/30 p-3 rounded-full transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5 text-pink-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-purple-800/70 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-purple-700 hover:border-pink-400 transition-all">
              <h3 className="text-xl md:text-2xl font-bold text-pink-300 mb-4 md:mb-6">Send Me a Message</h3>

              <form 
                onSubmit={async (e) => {
                  e.preventDefault();
                  setFormStatus('sending');
                  
                  const formData = new FormData(e.target);
                  const data = {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    message: formData.get('message'),
                    _subject: 'Portfolio Contact Form',
                    _captcha: 'false',
                    _template: 'box'
                  };

                  try {
                    const response = await fetch('https://formsubmit.co/ajax/lapuzcathrina65@gmail.com', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                      },
                      body: JSON.stringify(data)
                    });

                    if (response.ok) {
                      setFormStatus('success');
                      e.target.reset();
                      setTimeout(() => setFormStatus(null), 5000);
                    } else {
                      setFormStatus('error');
                    }
                  } catch (error) {
                    setFormStatus('error');
                  }
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-purple-200 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-purple-900/50 border border-purple-700 focus:border-pink-400 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-pink-300 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-purple-900/50 border border-purple-700 focus:border-pink-400 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-pink-300 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-purple-200 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full bg-purple-900/50 border border-purple-700 focus:border-pink-400 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-pink-300 transition-all"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                {formStatus === 'sending' && (
                  <div className="p-3 bg-blue-500/20 border border-blue-500/50 rounded-lg">
                    <p className="text-blue-300 text-sm">Sending message...</p>
                  </div>
                )}

                {formStatus === 'success' && (
                  <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg">
                    <p className="text-green-300 text-sm">Message sent successfully! I'll get back to you soon.</p>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                    <p className="text-red-300 text-sm">Failed to send message. Please try again.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full md:w-auto px-6 py-2 bg-pink-500 hover:bg-pink-600 disabled:bg-pink-500/50 disabled:cursor-not-allowed text-white font-medium rounded-lg shadow-lg transition-colors"
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-6 md:py-8 bg-purple-900">
        <p className="text-sm sm:text-base md:text-lg text-pink-200">Designed and Developed by Cathrina &copy; {new Date().getFullYear()}</p>
      </footer>

      {/* Full Image Modal */}
      {currentImage && (
        <div className="fixed inset-0 backdrop-blur-md bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-purple-900 p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl max-w-full max-h-full overflow-auto">
            <img
              src={currentImage}
              alt="Full-size Project Image"
              className="max-w-full max-h-[70vh] object-contain rounded-lg mb-4 sm:mb-6"
            />
            <button
              onClick={() => setCurrentImage(null)}
              className="w-full sm:w-auto px-6 py-2 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      {currentCertificate && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/75 flex items-center justify-center z-50 p-4">
          <div className="bg-purple-900 p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl max-w-full max-h-full overflow-auto">
            <div className="mb-4 sm:mb-6">
              {currentCertificate.url.endsWith('.pdf') ? (
                <iframe
                  src={currentCertificate.url}
                  className="w-full h-[70vh] rounded-lg"
                  title={currentCertificate.title}
                />
              ) : (
                <img
                  src={currentCertificate.url}
                  alt={currentCertificate.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg mx-auto"
                />
              )}
            </div>
            <button
              onClick={() => {
                setCurrentCertificate(null);
                scrollToSection('certificates');
              }}
              className="w-full sm:w-auto px-6 py-2 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-all"
            >
              Back
            </button>
          </div>
        </div>
      )}

      {/* Webinar Modal */}
      {currentWebinar && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/75 flex items-center justify-center z-50 p-4">
          <div className="bg-purple-900 p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl max-w-full max-h-full overflow-auto">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-pink-300 mb-4">{currentWebinar.title}</h3>
              {currentWebinar.date && (
                <p className="text-purple-200 mb-2">
                  <span className="text-pink-300 font-medium">Date:</span> {new Date(currentWebinar.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              )}
              {currentWebinar.time && (
                <p className="text-purple-200 mb-2">
                  <span className="text-pink-300 font-medium">Time:</span> {currentWebinar.time}
                </p>
              )}
              {currentWebinar.organizer && (
                <p className="text-purple-200 mb-2">
                  <span className="text-pink-300 font-medium">Organizer:</span> {currentWebinar.organizer}
                </p>
              )}
              {currentWebinar.description && (
                <p className="text-purple-200 mb-4 leading-relaxed">
                  {currentWebinar.description}
                </p>
              )}
              {currentWebinar.url.endsWith('.pdf') ? (
                <iframe
                  src={currentWebinar.url}
                  className="w-full h-[70vh] rounded-lg"
                  title={currentWebinar.title}
                />
              ) : (
                <img
                  src={currentWebinar.url}
                  alt={currentWebinar.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg mx-auto"
                />
              )}
            </div>
            <button
              onClick={() => {
                setCurrentWebinar(null);
                scrollToSection('webinars');
              }}
              className="w-full sm:w-auto px-6 py-2 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-all"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;