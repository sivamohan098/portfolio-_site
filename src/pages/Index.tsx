import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ExternalLink, Calendar, MapPin, Phone, Code, Award, User, Briefcase, Menu, X, Eye, Facebook, Instagram, Layers, Zap, Database, Globe, Brain, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import AnimatedBackground from '@/components/AnimatedBackground';
import PreLoader from '@/components/PreLoader';

const Index = () => {
  const [showPreLoader, setShowPreLoader] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [selectedCertification, setSelectedCertification] = useState(null);
  const navigate = useNavigate();
  
  const sections = ['home', 'about', 'education', 'skills', 'experience', 'projects', 'contact'];
  const rotatingTitles = ['AI/ML Enthusiast', 'Full Stack Developer', 'Problem Solver'];
  
  // Rotating title effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    education: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    contact: useRef(null)
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId].current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleViewDetails = (projectId) => {
    // Scroll to top first
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Then navigate to project detail
    setTimeout(() => {
      navigate(`/project/${projectId}`);
    }, 300);
  };

  const projects = [
    {
      id: 'dealhunter',
      title: 'DealHunter – AI-Powered Web Scraper',
      company: 'Infosys Springboard',
      period: 'Feb 2025 - Mar 2025',
      description: 'AI-integrated web scraping tool for extracting deals and offers using Python, Streamlit, Playwright, and Beautiful Soup.',
      tech: ['Python', 'Streamlit', 'Playwright', 'Beautiful Soup', 'OpenAI', 'Gemini', 'Groq'],
      github: 'https://github.com/sivamohan098/Infosys-springboard-internship-.git',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=800'
    },
    {
      id: 'waste-classification',
      title: 'Waste Classification using CNN',
      company: 'Edunet Foundation',
      period: 'Jan 2025 - Feb 2025',
      description: 'CNN-based waste classification model using TensorFlow & Keras, achieving over 90% accuracy.',
      tech: ['TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Matplotlib', 'CNN'],
      github: 'https://github.com/sivamohan098/Edunet_Foundation-internship-CNN-by-waste-classification-.git',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=800'
    },
    {
      id: 'medical-insurance',
      title: 'Medical Insurance Cost Prediction',
      company: 'Microsoft with Edunet Foundation',
      period: 'May 2025 - Jun 2025',
      description: 'Machine learning model to predict medical insurance costs using regression algorithms.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Machine Learning'],
      github: 'https://github.com/sivamohan098/Microsoft-with-Edunet-Foundation-Predict-medical-insurance-costs-.git',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=800'
    }
  ];

  // Updated skills data structure for new layout
  const skillCategories = [
    {
      title: 'Artificial Intelligence',
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: 'Machine Learning', percentage: 85 },
        { name: 'Deep Learning', percentage: 80 },
        { name: 'TensorFlow & Keras', percentage: 75 },
        { name: 'CNN & Neural Networks', percentage: 80 }
      ]
    },
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'Python', percentage: 90 },
        { name: 'Java', percentage: 85 },
        { name: 'JavaScript', percentage: 75 },
        { name: 'SQL', percentage: 80 }
      ]
    },
    {
      title: 'Web Development',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: 'React', percentage: 80 },
        { name: 'HTML/CSS', percentage: 85 },
        { name: 'Node.js', percentage: 70 },
        { name: 'REST APIs', percentage: 75 }
      ]
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'MongoDB', percentage: 80 },
        { name: 'MySQL', percentage: 85 },
        { name: 'PostgreSQL', percentage: 75 }
      ]
    },
    {
      title: 'Web Scraping',
      icon: <Layers className="w-6 h-6" />,
      skills: [
        { name: 'Beautiful Soup', percentage: 90 },
        { name: 'Playwright', percentage: 85 },
        { name: 'Selenium', percentage: 80 }
      ]
    }
  ];

  const softSkills = [
    {
      title: 'Organizational Skills',
      icon: <Target className="w-6 h-6" />,
      description: 'Efficiently managing time and resources to meet project deadlines'
    },
    {
      title: 'Multitasking & Organization',
      icon: <Zap className="w-6 h-6" />,
      description: 'Handling multiple projects simultaneously while maintaining quality'
    },
    {
      title: 'Teamwork & Collaboration',
      icon: <User className="w-6 h-6" />,
      description: 'Working effectively in diverse teams to achieve common goals'
    },
    {
      title: 'Communication Skills',
      icon: <Mail className="w-6 h-6" />,
      description: 'Clear and effective communication with team members and stakeholders'
    }
  ];

  const tools = [
    'Python', 'Java', 'JavaScript', 'React', 'TensorFlow', 'Keras', 'PyTorch', 'OpenCV', 'NumPy', 'Pandas',
    'Matplotlib', 'Scikit-learn', 'Beautiful Soup', 'Playwright', 'Selenium', 'MongoDB', 'MySQL', 'PostgreSQL', 'Node.js',
    'Express.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'GitHub', 'VS Code', 'Jupyter', 'Google Colab', 'Streamlit',
    'OpenAI API', 'Gemini API', 'Groq API'
  ];

  const certifications = [
    {
      name: 'Infosys Internship (Web Development) Executive 5.0',
      image: '/lovable-uploads/b8dbc601-8af5-4497-9925-3ace1d312702.png'
    },
    {
      name: 'Edunet Foundation Internship (CNN) AICTE',
      image: '/lovable-uploads/00d7db79-1ece-4c9a-a083-e56d962eb00e.png'
    },
    {
      name: 'Infosys Python Foundation',
      image: '/lovable-uploads/9df349fb-343c-426b-8668-06209d2dd5a2.png'
    },
    {
      name: 'NPTEL (Programming in Java)',
      image: '/lovable-uploads/7cc3f57f-e923-411f-a5d9-43088694e42e.png'
    },
    {
      name: 'HQL Edutech (Core and Advanced Java)',
      image: '/lovable-uploads/74deb11c-2de5-4c1e-82f4-9aa5425fae2c.png'
    },
    {
      name: 'NVIDIA (Building LLM Application with Prompt Engineering)',
      image: '/lovable-uploads/381796fc-248d-48f0-bcb3-2691a0dc80d4.png'
    },
    {
      name: 'IBM [Cognitive class.AI] (SQL & Relational Databases)',
      image: '/lovable-uploads/a3ddfaf8-2081-4f9d-96db-469445007681.png'
    }
  ];

  const accomplishments = [
    {
      id: 'hackathon',
      title: 'National-Level Hackathons',
      description: 'Top 100 position at DTU Hackathon among 700+ teams',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=800',
      category: 'Competition'
    },
    {
      id: 'ai-workshop',
      title: 'JNTU-GV GENERATIVE AI WORKSHOP',
      description: 'Participated in CreSenceE-2024 AI Workshop',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=800',
      category: 'Workshop'
    },
    {
      id: 'nielit-bootcamp',
      title: 'NIELIT Bootcamp',
      description: 'Completed Unmanned Aerial Systems Bootcamp',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&q=800',
      category: 'Training'
    }
  ];

  const handleEmailClick = () => {
    window.location.href = 'mailto:sivamohanmusidipalli@gmail.com?subject=Portfolio Contact&body=Hi Siva Mohan,';
  };

  const handleDownloadResume = () => {
    // Create a link to download the resume PDF
    const link = document.createElement('a');
    link.href = '/Siva Mohan Musidipalli.pdf'; // This file should be placed in the public folder
    link.download = 'M_Siva_Mohan_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSearchClick = () => {
    setShowPreLoader(false);
  };

  if (showPreLoader) {
    return <PreLoader onSearchClick={handleSearchClick} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-x-hidden">
      <AnimatedBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              MUSIDIPALLI SIVA MOHAN
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 px-4 py-2 rounded-lg font-medium ${
                    activeSection === section 
                      ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/30' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pb-4"
              >
                <div className="flex flex-col space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`capitalize text-left px-4 py-3 rounded-lg font-medium ${
                        activeSection === section 
                          ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/30' 
                          : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      }`}
                    >
                      {section}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" ref={sectionRefs.home} className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              MUSIDIPALLI SIVA MOHAN
            </h1>
            
            <div className="h-12 mb-8">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentTitleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl text-purple-400 font-light"
                >
                  {rotatingTitles[currentTitleIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>
            
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300 leading-relaxed">
              Computer Science Engineering (AI & ML) student passionate about artificial intelligence,
              machine learning, and full-stack development. Building innovative solutions that make a difference.
            </p>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <div className="text-center">
                  <p className="text-sm">Korukonda, Rajahmundry</p>
                  <p className="text-sm">Andhra Pradesh, 533289</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+91 9398923037</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-pink-400" />
                <span className="text-sm">sivamohanmusidipalli@gmail.com</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                onClick={handleEmailClick}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 border-2 border-cyan-500"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25 border-2 border-purple-500"
              >
                <Eye className="w-5 h-5 mr-2" />
                View Projects
              </Button>
              <Button 
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25 border-2 border-purple-500"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <Button
                onClick={() => window.open('https://github.com/sivamohan098', '_blank')}
                variant="ghost"
                size="icon"
                className="w-12 h-12 rounded-full border-2 border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 text-white hover:text-cyan-400"
              >
                <Github className="w-6 h-6" />
              </Button>
              <Button
                onClick={() => window.open('https://linkedin.com/in/m-siva-mohan-79179b27a', '_blank')}
                variant="ghost"
                size="icon"
                className="w-12 h-12 rounded-full border-2 border-gray-600 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 text-white hover:text-blue-400"
              >
                <Linkedin className="w-6 h-6" />
              </Button>
              <Button
                onClick={handleEmailClick}
                variant="ghost"
                size="icon"
                className="w-12 h-12 rounded-full border-2 border-gray-600 hover:border-pink-400 hover:bg-pink-400/10 transition-all duration-300 text-white hover:text-pink-400"
              >
                <Mail className="w-6 h-6" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={sectionRefs.about} className="min-h-screen py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Career Objective</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            </div>
            
            <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-cyan-500/10">
              <CardContent className="p-8">
                <p className="text-gray-100 leading-relaxed text-lg">
                  To secure a challenging role in a forward-thinking organization where I can apply my skills in Python, Java, web development, and artificial intelligence. I aim to contribute to innovative projects, enhance my technical expertise in AI/ML and full-stack development, and grow both professionally and personally as part of a collaborative team.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" ref={sectionRefs.education} className="min-h-screen py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Education</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-xl shadow-lg shadow-cyan-500/10">
                  <CardContent className="p-6">
                    <div className="border-l-4 border-cyan-400 pl-4">
                      <h5 className="font-medium text-cyan-400 text-xl">BVC College Of Engineering</h5>
                      <p className="text-white font-medium">B.Tech - Computer Science Engineering (AI & ML)</p>
                      <p className="text-sm text-gray-300">CGPA: 70% | Expected: Apr 2026</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-black/40 border-purple-500/30 backdrop-blur-xl shadow-lg shadow-purple-500/10">
                  <CardContent className="p-6">
                    <div className="border-l-4 border-purple-400 pl-4">
                      <h5 className="font-medium text-purple-400 text-xl">Srujuna Model Jr College</h5>
                      <p className="text-white font-medium">Intermediate - MPC</p>
                      <p className="text-sm text-gray-300">CGPA: 85.2% | Mar 2022</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-black/40 border-pink-500/30 backdrop-blur-xl shadow-lg shadow-pink-500/10">
                  <CardContent className="p-6">
                    <div className="border-l-4 border-pink-400 pl-4">
                      <h5 className="font-medium text-pink-400 text-xl">Government High School</h5>
                      <p className="text-white font-medium">Secondary Education</p>
                      <p className="text-sm text-gray-300">CGPA: 90% | Mar 2020</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - Redesigned */}
      <section id="skills" ref={sectionRefs.skills} className="min-h-screen py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills & Expertise</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            </div>
            
            {/* Technical Skills */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-center text-cyan-300">Technical Skills</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-xl h-full shadow-lg shadow-cyan-500/10">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-xl text-cyan-300 flex items-center gap-3">
                          <div className="text-cyan-400">{category.icon}</div>
                          {category.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-white font-medium text-sm">{skill.name}</span>
                              <span className="text-cyan-400 font-bold text-sm">{skill.percentage}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <motion.div
                                className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.percentage}%` }}
                                transition={{ duration: 1, delay: skillIndex * 0.1 }}
                              />
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-center text-purple-300">Soft Skills</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="bg-black/40 border-purple-500/30 backdrop-blur-xl shadow-lg shadow-purple-500/10">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="text-purple-400 mt-1">{skill.icon}</div>
                          <div>
                            <h4 className="text-purple-300 font-semibold text-lg mb-2">{skill.title}</h4>
                            <p className="text-gray-200 text-sm leading-relaxed">{skill.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-center text-purple-300">Tools & Technologies</h3>
              <Card className="bg-black/40 border-purple-500/30 backdrop-blur-xl shadow-lg shadow-purple-500/10">
                <CardContent className="p-8">
                  <div className="flex flex-wrap gap-3 justify-center">
                    {tools.map((tool, index) => (
                      <motion.span
                        key={tool}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="px-4 py-2 bg-purple-500/20 text-purple-200 rounded-full text-sm border border-purple-500/30 hover:border-purple-400/50 transition-colors font-medium"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Certifications Section - Updated with purple/pink theme */}
            <div className="mb-16">
              <h3 className="text-4xl font-bold mb-8 text-center text-purple-300 flex items-center justify-center gap-3">
                <Award className="w-10 h-10 text-purple-400" />
                Certifications
              </h3>
              <Card className="bg-gradient-to-br from-purple-900/50 to-pink-800/50 border-2 border-purple-400/60 backdrop-blur-xl shadow-2xl shadow-purple-500/30">
                <CardContent className="p-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={cert.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-purple-800/40 to-pink-700/40 border-2 border-purple-400/50 hover:border-purple-300/80 transition-all duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-purple-800/60 hover:to-pink-700/60 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-purple-500/20"
                        onClick={() => setSelectedCertification(cert)}
                      >
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-purple-400/30 rounded-full flex items-center justify-center border-2 border-purple-400/60 group-hover:border-purple-300/90 transition-colors">
                            <Award className="w-6 h-6 text-purple-200 group-hover:text-purple-100" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-purple-100 font-semibold text-base leading-relaxed group-hover:text-white transition-colors">
                            {cert.name}
                          </h4>
                          <p className="text-purple-200/90 text-sm mt-1 group-hover:text-purple-100/95 transition-colors">
                            Click to view certificate
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Accomplishments Section - Updated with cyan/blue theme */}
            <div>
              <h3 className="text-4xl font-bold mb-8 text-center text-cyan-300 flex items-center justify-center gap-3">
                <Target className="w-10 h-10 text-cyan-400" />
                Accomplishments
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {accomplishments.map((accomplishment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="cursor-pointer group"
                    onClick={() => navigate(`/accomplishment/${accomplishment.id}`)}
                  >
                    <Card className="bg-gradient-to-br from-cyan-900/50 to-blue-800/50 border-2 border-cyan-400/60 backdrop-blur-xl hover:border-cyan-300/80 transition-all duration-300 h-full shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 group-hover:scale-105 hover:bg-gradient-to-br hover:from-cyan-900/70 hover:to-blue-800/70">
                      <CardContent className="p-8">
                        <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-6 overflow-hidden shadow-lg">
                          <img 
                            src={accomplishment.image} 
                            alt={accomplishment.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-4 py-2 bg-cyan-500/40 text-cyan-100 rounded-full text-sm border border-cyan-400/60 font-semibold">
                            {accomplishment.category}
                          </span>
                          <div className="w-10 h-10 bg-cyan-400/30 rounded-full flex items-center justify-center border-2 border-cyan-400/60">
                            <Award className="w-5 h-5 text-cyan-200" />
                          </div>
                        </div>
                        <h4 className="font-bold text-cyan-100 mb-3 text-xl group-hover:text-white transition-colors">
                          {accomplishment.title}
                        </h4>
                        <p className="text-cyan-200/95 text-sm leading-relaxed group-hover:text-cyan-100 transition-colors">
                          {accomplishment.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={sectionRefs.experience} className="min-h-screen py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Experience</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid gap-8 max-w-4xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="cursor-pointer"
                  onClick={() => handleViewDetails(project.id)}
                >
                  <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-xl hover:bg-black/50 transition-all duration-300 group shadow-lg shadow-cyan-500/10">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                          <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden border border-gray-600">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>
                        
                        <div className="md:w-2/3 space-y-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                              {project.title}
                            </h3>
                            <p className="text-cyan-400 font-bold text-lg">{project.company}</p>
                            <div className="flex items-center text-gray-300 text-sm mt-1">
                              <Calendar className="w-4 h-4 mr-2" />
                              {project.period}
                            </div>
                          </div>
                          
                          <p className="text-gray-200 leading-relaxed">{project.description}</p>
                          
                          <div className="flex flex-wrap gap-2">
                            {project.tech.slice(0, 4).map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.tech.length > 4 && (
                              <span className="px-3 py-1 bg-gray-600/20 text-gray-400 rounded-full text-sm border border-gray-600/30">
                                +{project.tech.length - 4} more
                              </span>
                            )}
                          </div>
                          
                          <div className="flex space-x-4 pt-2">
                            <Button
                              className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium shadow-lg shadow-cyan-600/25"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                            
                            <Button
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.github, '_blank');
                              }}
                              variant="outline"
                              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-medium bg-transparent shadow-lg shadow-purple-500/25"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              GitHub
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={sectionRefs.projects} className="min-h-screen py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Featured Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                  onClick={() => handleViewDetails(project.id)}
                >
                  <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-xl h-full hover:bg-black/50 transition-all duration-300 group shadow-lg shadow-cyan-500/10">
                    <CardContent className="p-6">
                      <div className="aspect-video bg-gray-700 rounded-lg mb-4 flex items-center justify-center overflow-hidden border border-gray-600">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h3>
                      <p className="text-cyan-400 mb-2 font-medium">{project.company}</p>
                      <p className="text-gray-200 text-sm mb-4 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 bg-gray-600/20 text-gray-400 rounded-full text-xs border border-gray-600/30">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={sectionRefs.contact} className="min-h-screen py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Get In Touch</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl">
                  <img 
                    src="/lovable-uploads/7d8f4010-33f4-4d34-a7ff-dd5a5e28666e.png" 
                    alt="Musidipalli Siva Mohan" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span>Korukonda, Rajhmundry, AP 533289</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span>9398923037</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <Mail className="w-5 h-5 text-pink-400" />
                    <span>sivamohanmusidipalli@gmail.com</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="bg-black/40 border-cyan-500/40 backdrop-blur-xl shadow-lg shadow-cyan-500/10">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
                    
                    <div className="space-y-4">
                      <Button
                        onClick={handleEmailClick}
                        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-4 rounded-lg text-lg font-medium transition-all duration-300 border-2 border-cyan-600 shadow-lg shadow-cyan-600/25"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Send Email
                      </Button>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <Button
                          onClick={() => window.open('https://github.com/sivamohan098', '_blank')}
                          className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-300 border-2 border-purple-600 shadow-lg shadow-purple-600/25"
                        >
                          <Github className="w-5 h-5 mr-2" />
                          GitHub
                        </Button>
                        
                        <Button
                          onClick={() => window.open('https://linkedin.com/in/m-siva-mohan-79179b27a', '_blank')}
                          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all duration-300 border-2 border-blue-600 shadow-lg shadow-blue-600/25"
                        >
                          <Linkedin className="w-5 h-5 mr-2" />
                          LinkedIn
                        </Button>
                      </div>
                      
                      <Button
                        onClick={handleDownloadResume}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-lg font-medium transition-all duration-300 border-2 border-purple-500 shadow-lg shadow-purple-500/25"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Resume
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-cyan-500/20 py-12 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                MUSIDIPALLI SIVA MOHAN
              </h3>
              <p className="text-gray-400 mb-4">
                Passionate about creating innovative AI/ML solutions and building impactful web applications. 
                Let's connect and collaborate on exciting projects!
              </p>
              <div className="flex space-x-4">
                <Button
                  onClick={() => window.open('https://github.com/sivamohan098', '_blank')}
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  onClick={() => window.open('https://linkedin.com/in/m-siva-mohan-79179b27a', '_blank')}
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button
                  onClick={() => window.open('https://www.instagram.com/ms.17.m?igsh=MTlzNGZxenQyZXBhaQ==', '_blank')}
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button
                  onClick={() => window.open('https://m.facebook.com/story.php?story_fbid=pfbid02ywLdB5xw72MaMeyo1FNPs8L6Z3ev3uzKt6UvYsmrGw7sUPtepwEmZ4WFSmfQaSpgl&id=100022833756624&mibextid=ZbWKwL', '_blank')}
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button
                  onClick={handleEmailClick}
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-cyan-400 font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block text-gray-400 hover:text-white transition-colors capitalize"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-purple-400 font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                  Andhra Pradesh, India
                </p>
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-purple-400" />
                  +91 9398923037
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-pink-400" />
                  sivamohanmusidipalli@gmail.com
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 MUSIDIPALLI SIVA MOHAN. All rights reserved. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>

      {/* Certification Modal - Fixed visibility */}
      <AnimatePresence>
        {selectedCertification && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCertification(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-lg p-6 max-w-4xl max-h-[90vh] overflow-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">{selectedCertification.name}</h3>
                <button
                  onClick={() => setSelectedCertification(null)}
                  className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-full"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex justify-center">
                <img
                  src={selectedCertification.image}
                  alt={selectedCertification.name}
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
