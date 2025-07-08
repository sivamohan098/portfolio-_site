
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar, User, MapPin, Trophy, Target, Lightbulb, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedBackground from '@/components/AnimatedBackground';
import { projectsData } from '@/data/portfolioData';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find project from data
  const project = projectsData.find(p => p.id === id);

  const projects = {
    'dealhunter': {
      title: 'DealHunter – AI-Powered Web Scraper',
      company: 'Infosys Springboard',
      period: 'Feb 2025 - Mar 2025',
      description: 'AI-integrated web scraping tool for extracting deals and offers using Python, Streamlit, Playwright, and Beautiful Soup.',
      detailedDescription: 'DealHunter is an innovative AI-powered web scraping application designed to automatically discover, extract, and analyze deals and offers from various e-commerce platforms. The project combines advanced web scraping techniques with artificial intelligence to provide users with comprehensive deal hunting capabilities.',
      tech: ['Python', 'Streamlit', 'Playwright', 'Beautiful Soup', 'OpenAI', 'Gemini', 'Groq'],
      github: 'https://github.com/sivamohan098/Infosys-springboard-internship-.git',
      image: '/lovable-uploads/fb54aa17-6356-4487-87d1-f8292468de5b.png',
      features: [
        'Automated web scraping from multiple e-commerce platforms',
        'AI-powered deal analysis and categorization',
        'Real-time price monitoring and comparison',
        'Interactive Streamlit dashboard for data visualization',
        'Multiple AI model integration (OpenAI, Gemini, Groq)',
        'Playwright-based browser automation for dynamic content'
      ],
      challenges: [
        'Handling dynamic content and JavaScript-heavy websites',
        'Implementing rate limiting and respectful scraping practices',
        'Managing different website structures and layouts',
        'Integrating multiple AI APIs for enhanced analysis'
      ],
      solutions: [
        'Used Playwright for robust browser automation and dynamic content handling',
        'Implemented intelligent delay mechanisms and user-agent rotation',
        'Created flexible parsing modules adaptable to different site structures',
        'Developed fallback mechanisms between different AI providers'
      ],
      outcomes: [
        'Successfully scraped and analyzed 1000+ deals from multiple platforms',
        'Achieved 95% accuracy in deal extraction and categorization',
        'Reduced manual deal hunting time by 80%',
        'Created comprehensive analytics dashboard with real-time updates'
      ]
    },
    'waste-classification': {
      title: 'Waste Classification using CNN',
      company: 'Edunet Foundation',
      period: 'Jan 2025 - Feb 2025',
      description: 'CNN-based waste classification model using TensorFlow & Keras, achieving over 90% accuracy.',
      detailedDescription: 'An advanced computer vision project that leverages Convolutional Neural Networks to automatically classify different types of waste materials. This project addresses the critical environmental challenge of waste management by providing an automated solution for waste sorting.',
      tech: ['TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Matplotlib', 'CNN'],
      github: 'https://github.com/sivamohan098/Edunet_Foundation-internship-CNN-by-waste-classification-.git',
      image: '/lovable-uploads/32b621d5-4fd9-44fe-88f7-59d195d96255.png',
      features: [
        'Multi-class waste classification (Organic, Recyclable, Hazardous)',
        'Real-time image processing and classification',
        'Data augmentation for improved model robustness',
        'Comprehensive model evaluation and visualization',
        'Transfer learning implementation for enhanced accuracy',
        'OpenCV integration for image preprocessing'
      ],
      challenges: [
        'Limited dataset availability for certain waste categories',
        'Handling varying lighting conditions and image quality',
        'Balancing model complexity with inference speed',
        'Dealing with similar-looking waste materials'
      ],
      solutions: [
        'Implemented extensive data augmentation techniques',
        'Used transfer learning with pre-trained models',
        'Applied advanced preprocessing techniques with OpenCV',
        'Fine-tuned model architecture for optimal performance'
      ],
      outcomes: [
        'Achieved 92% accuracy on test dataset',
        'Successfully classified 6 different waste categories',
        'Reduced classification time to under 2 seconds per image',
        'Created scalable solution for waste management facilities'
      ]
    },
    'medical-insurance': {
      title: 'Medical Insurance Cost Prediction',
      company: 'Microsoft with Edunet Foundation',
      period: 'May 2025 - Jun 2025',
      description: 'Machine learning model to predict medical insurance costs using regression algorithms.',
      detailedDescription: 'A comprehensive machine learning project focused on predicting medical insurance costs based on various demographic and health factors. This project demonstrates the application of predictive analytics in the healthcare insurance industry.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Machine Learning'],
      github: 'https://github.com/sivamohan098/Microsoft-with-Edunet-Foundation-Predict-medical-insurance-costs-.git',
      image: '/lovable-uploads/b39315ea-eb64-4c90-b9b2-a06c1208c481.png',
      features: [
        'Multi-variable regression analysis',
        'Feature engineering and selection',
        'Cross-validation and model optimization',
        'Comprehensive data visualization and insights',
        'Multiple algorithm comparison and evaluation',
        'Statistical analysis of insurance factors'
      ],
      challenges: [
        'Handling missing and inconsistent data',
        'Dealing with skewed cost distributions',
        'Feature selection from numerous variables',
        'Model interpretability for business stakeholders'
      ],
      solutions: [
        'Implemented robust data cleaning and imputation strategies',
        'Applied log transformation to handle skewed distributions',
        'Used correlation analysis and feature importance techniques',
        'Created comprehensive visualizations for model interpretation'
      ],
      outcomes: [
        'Achieved R² score of 0.87 in cost prediction',
        'Identified key factors affecting insurance costs',
        'Reduced prediction error by 25% compared to baseline models',
        'Provided actionable insights for insurance pricing strategies'
      ]
    }
  };

  const projectDetail = projects[id];

  const handleBackToPortfolio = () => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const projectsSection = document.querySelector('[data-section="projects"]') || 
                             document.getElementById('projects') ||
                             document.querySelector('.projects-section');
      
      if (projectsSection) {
        projectsSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 200);
  };

  if (!projectDetail) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={handleBackToPortfolio} className="bg-cyan-500 hover:bg-cyan-600">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative">
      <AnimatedBackground />
      
      {/* Header with improved visibility */}
      <div className="relative z-10 pt-8 pb-4">
        <div className="container mx-auto px-6">
          <Button
            onClick={handleBackToPortfolio}
            className="text-white hover:text-cyan-300 mb-6 hover:bg-cyan-400/20 bg-cyan-500/30 backdrop-blur-sm border-2 border-cyan-400/80 shadow-lg shadow-cyan-500/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            {/* Hero Section */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-purple-500/30 px-4 py-2 rounded-full border border-purple-500/50 mb-6 backdrop-blur-sm"
              >
                <Code className="w-5 h-5 text-purple-300" />
                <span className="text-purple-100 font-medium">{projectDetail.company}</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              >
                {projectDetail.title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-100 max-w-3xl mx-auto"
              >
                {projectDetail.description}
              </motion.p>
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card className="bg-black/60 border-cyan-500/50 backdrop-blur-xl shadow-lg shadow-cyan-500/20">
                  <CardContent className="p-6 text-center">
                    <Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-cyan-300 mb-2">Duration</h3>
                    <p className="text-gray-100">{projectDetail.period}</p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Card className="bg-black/60 border-purple-500/50 backdrop-blur-xl shadow-lg shadow-purple-500/20">
                  <CardContent className="p-6 text-center">
                    <User className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-purple-300 mb-2">Company</h3>
                    <p className="text-gray-100">{projectDetail.company}</p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <Card className="bg-black/60 border-pink-500/50 backdrop-blur-xl shadow-lg shadow-pink-500/20">
                  <CardContent className="p-6 text-center">
                    <MapPin className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-pink-300 mb-2">Type</h3>
                    <p className="text-gray-100">Internship Project</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <div className="aspect-video rounded-2xl overflow-hidden border border-cyan-500/50 shadow-2xl shadow-cyan-500/20">
                <img
                  src={projectDetail.image}
                  alt={projectDetail.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.log('Image failed to load:', projectDetail.image);
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>
            </motion.div>

            {/* Technologies Used - Fixed visibility */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <Card className="bg-gradient-to-r from-indigo-500/40 to-purple-500/40 border-2 border-indigo-400/80 backdrop-blur-xl shadow-2xl shadow-indigo-500/30">
                <CardHeader>
                  <CardTitle className="text-3xl text-indigo-100 flex items-center font-bold">
                    <Zap className="w-8 h-8 mr-3 text-indigo-300" />
                    Technologies Used
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {projectDetail.tech.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                        className="px-6 py-3 bg-indigo-500/50 text-indigo-100 rounded-full text-lg border-2 border-indigo-400/70 hover:border-indigo-300/90 transition-colors font-semibold shadow-lg hover:shadow-xl hover:shadow-indigo-500/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Detailed Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12"
            >
              <Card className="bg-black/60 border-cyan-500/50 backdrop-blur-xl shadow-lg shadow-cyan-500/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-cyan-200">Detailed Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-100 leading-relaxed text-lg">
                    {projectDetail.detailedDescription}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <Card className="bg-black/60 border-purple-500/50 backdrop-blur-xl h-full shadow-lg shadow-purple-500/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-200 flex items-center">
                      <Target className="w-6 h-6 mr-2" />
                      Key Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {projectDetail.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-100 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <Card className="bg-black/60 border-pink-500/50 backdrop-blur-xl h-full shadow-lg shadow-pink-500/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-pink-200 flex items-center">
                      <Trophy className="w-6 h-6 mr-2" />
                      Outcomes & Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {projectDetail.outcomes.map((outcome, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-100 text-sm">{outcome}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Challenges & Solutions - Blue theme */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <Card className="bg-gradient-to-br from-blue-600/50 to-indigo-600/50 border-2 border-blue-400/90 backdrop-blur-xl h-full shadow-2xl shadow-blue-500/40">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-50 font-bold">Challenges Faced</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {projectDetail.challenges.map((challenge, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-2 h-2 bg-blue-200 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-blue-50 text-sm font-medium">{challenge}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <Card className="bg-gradient-to-br from-sky-600/50 to-blue-600/50 border-2 border-sky-400/90 backdrop-blur-xl h-full shadow-2xl shadow-sky-500/40">
                  <CardHeader>
                    <CardTitle className="text-xl text-sky-50 flex items-center font-bold">
                      <Lightbulb className="w-6 h-6 mr-2" />
                      Solutions Implemented
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {projectDetail.solutions.map((solution, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-2 h-2 bg-sky-200 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sky-50 text-sm font-medium">{solution}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button
                onClick={() => window.open(projectDetail.github, '_blank')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg shadow-purple-500/25"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </Button>
              
              <Button
                onClick={handleBackToPortfolio}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg shadow-cyan-500/25"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Portfolio
              </Button>
            </motion.div>

            {/* Explore More Projects - Blue theme */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="text-center"
            >
              <Card className="bg-gradient-to-r from-blue-600/50 to-indigo-600/50 border-2 border-blue-400/90 backdrop-blur-xl shadow-2xl shadow-blue-500/40">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-blue-50 mb-4">Explore More Projects</h3>
                  <p className="text-blue-50 mb-6">
                    Discover other exciting projects I've worked on, showcasing various technologies and innovative solutions.
                  </p>
                  <Button
                    onClick={handleBackToPortfolio}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg shadow-cyan-500/25 border-2 border-cyan-400/50"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View All Projects
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
