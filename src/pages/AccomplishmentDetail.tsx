import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, Calendar, MapPin, Users, Trophy, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedBackground from '@/components/AnimatedBackground';

const AccomplishmentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const accomplishments = {
    'hackathon': {
      title: 'National-Level Hackathons',
      category: 'Competition', 
      description: 'Top 100 position at DTU Hackathon among 700+ teams',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      detailImage: '/lovable-uploads/432d1118-d2eb-4dc7-8d61-c9f187f91d78.png',
      date: 'March 21-22, 2025',
      location: 'E-Cell DTU',
      participants: '700+ teams',
      achievements: [
        'Secured position in top 100 among 700+ participating teams in Execute 4.0 Hackathon',
        'Demonstrated exceptional problem-solving skills and technical innovation',
        'Developed innovative solutions in the field of technology and entrepreneurship',
        'Collaborated effectively with team members under tight deadlines',
        'Presented technical solutions to expert panels and industry professionals'
      ],
      skills: ['Problem Solving', 'Team Collaboration', 'Innovation', 'Technical Presentation', 'Entrepreneurship'],
      learnings: [
        'Enhanced ability to work under pressure and meet challenging deadlines',
        'Improved technical innovation and creative problem-solving capabilities',
        'Gained valuable experience in technology entrepreneurship',
        'Developed confidence in presenting technical solutions to expert judges',
        'Learned to adapt and iterate solutions based on real-time feedback'
      ],
      impact: 'This hackathon experience significantly boosted my confidence in competitive programming and reinforced my passion for using technology to solve real-world problems. It also helped me build a network of like-minded individuals and potential collaborators in the tech entrepreneurship space.'
    },
    'ai-workshop': {
      title: 'JNTU-GV GENERATIVE AI WORKSHOP',
      category: 'Workshop',
      description: 'Participated in CreSenceE-2024 AI Workshop',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      detailImage: '/lovable-uploads/0a908852-5613-41da-b607-b6fb55087e2d.png',
      date: 'March 1-2, 2024',
      location: 'JNTU-GV College of Engineering, Vizianagaram',
      participants: '200+ students',
      achievements: [
        'Actively participated in 2-day intensive Generative AI workshop as part of CreSenceE-2K24',
        'Gained hands-on experience with cutting-edge AI tools and technologies',
        'Learned about latest trends in generative AI and machine learning',
        'Networked with AI experts and industry professionals',
        'Completed practical projects demonstrating AI application development'
      ],
      skills: ['Generative AI', 'Machine Learning', 'Deep Learning', 'Python', 'AI Ethics'],
      learnings: [
        'Deep understanding of generative AI models and their practical applications',
        'Hands-on experience with tools like GPT, DALL-E, and other cutting-edge AI models',
        'Insights into ethical considerations and responsible AI development practices',
        'Knowledge of current AI industry trends and future technological prospects',
        'Practical experience in implementing AI solutions for real-world problems'
      ],
      impact: 'This workshop expanded my knowledge of cutting-edge AI technologies and provided me with practical skills that I\'ve since applied in my projects. It also connected me with a community of AI enthusiasts and professionals, opening doors for future collaborations.'
    },
    'nielit-bootcamp': {
      title: 'NIELIT Bootcamp',
      category: 'Training',
      description: 'Completed Unmanned Aerial Systems Bootcamp',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
      detailImage: '/lovable-uploads/0b19de49-dd4d-470b-ac86-5b2bee510a7a.png',
      date: 'September 30 - October 4, 2024',
      location: 'BVC College of Engineering, Rajahmundry',
      participants: '50+ students',
      achievements: [
        'Successfully completed 5-day intensive UAS bootcamp organized by NIELIT Aurangabad',
        'Gained comprehensive hands-on experience with drone technology and systems',
        'Learned about autonomous flight systems, control mechanisms, and navigation',
        'Understood practical applications of drones in various industries and sectors',
        'Received official certification from National Institute of Electronics & IT'
      ],
      skills: ['Drone Technology', 'Autonomous Systems', 'IoT Integration', 'Sensor Technology', 'Flight Control'],
      learnings: [
        'Comprehensive understanding of Unmanned Aerial Systems technology and applications',
        'Practical knowledge of drone assembly, configuration, and operational procedures',
        'Insights into commercial and industrial applications across multiple sectors',
        'Understanding of aviation regulations and safety protocols for drone operations',
        'Experience with flight planning software and autonomous navigation systems'
      ],
      impact: 'This bootcamp opened up new possibilities in the field of autonomous systems and IoT technology. The knowledge gained has been valuable for understanding the intersection of AI, robotics, and autonomous systems, significantly influencing my career direction towards intelligent systems development.'
    }
  };

  const accomplishment = accomplishments[id];

  if (!accomplishment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Accomplishment Not Found</h1>
          <Button onClick={() => navigate('/')} className="bg-cyan-500 hover:bg-cyan-600">
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
      
      {/* Header */}
      <div className="relative z-10 pt-8 pb-4">
        <div className="container mx-auto px-6">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="text-cyan-400 hover:text-cyan-300 mb-6 hover:bg-cyan-400/10 bg-black/20 backdrop-blur-sm border border-cyan-400/30"
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
                <Award className="w-5 h-5 text-purple-300" />
                <span className="text-purple-100 font-medium">{accomplishment.category}</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              >
                {accomplishment.title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-100 max-w-3xl mx-auto"
              >
                {accomplishment.description}
              </motion.p>
            </div>

            {/* Details Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card className="bg-black/60 border-cyan-500/50 backdrop-blur-xl shadow-lg shadow-cyan-500/20">
                  <CardContent className="p-6 text-center">
                    <Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-cyan-300 mb-2">Date</h3>
                    <p className="text-gray-100">{accomplishment.date}</p>
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
                    <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-purple-300 mb-2">Location</h3>
                    <p className="text-gray-100">{accomplishment.location}</p>
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
                    <Users className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-pink-300 mb-2">Participants</h3>
                    <p className="text-gray-100">{accomplishment.participants}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <div className="aspect-video rounded-2xl overflow-hidden border border-cyan-500/50 shadow-2xl shadow-cyan-500/20">
                <img
                  src={accomplishment.detailImage}
                  alt={accomplishment.title}
                  className="w-full h-full object-contain bg-white"
                />
              </div>
            </motion.div>

            {/* Key Achievements Section - Updated with better visibility */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <Card className="bg-gradient-to-r from-cyan-500/40 to-blue-500/40 border-2 border-cyan-400/80 backdrop-blur-xl shadow-2xl shadow-cyan-500/30">
                <CardHeader>
                  <CardTitle className="text-3xl text-cyan-100 flex items-center font-bold">
                    <Trophy className="w-8 h-8 mr-3 text-cyan-300" />
                    Key Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {accomplishment.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        className="flex items-start space-x-3 p-4 rounded-lg bg-black/50 border-2 border-cyan-400/50 hover:border-cyan-300/70 transition-colors"
                      >
                        <Star className="w-6 h-6 text-cyan-200 mt-0.5 flex-shrink-0" />
                        <span className="text-cyan-50 font-medium leading-relaxed">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills and Learnings */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Card className="bg-black/60 border-purple-500/50 backdrop-blur-xl h-full shadow-lg shadow-purple-500/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-200">Skills Developed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {accomplishment.skills.map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                          className="px-3 py-1 bg-purple-500/40 text-purple-100 rounded-full text-sm border border-purple-500/50"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <Card className="bg-black/60 border-cyan-500/50 backdrop-blur-xl h-full shadow-lg shadow-cyan-500/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-cyan-200">Key Learnings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {accomplishment.learnings.map((learning, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-100 text-sm">{learning}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Impact & Reflection Section - Updated with better visibility */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mb-12"
            >
              <Card className="bg-gradient-to-r from-purple-500/50 to-pink-500/50 border-2 border-purple-400/80 backdrop-blur-xl shadow-2xl shadow-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-3xl text-purple-100 font-bold">Impact & Reflection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-50 leading-relaxed text-lg font-medium">
                    {accomplishment.impact}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="text-center"
            >
              <Button
                onClick={() => navigate('/')}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg shadow-cyan-500/25"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Portfolio
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AccomplishmentDetail;
