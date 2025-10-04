import { motion } from 'framer-motion'
import { Github, ExternalLink, Play } from 'lucide-react'
import { AnimatedText } from '@/components/ui/animated-text'
import webMessengerImage from '@/assets/web-messenger.png'
import fixMyCodeImage from '@/assets/fixmycode.png'
import easyNavigateImage from '@/assets/easy-navigate.jpg'

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  github?: string
  live?: string
  videoDemo?: string
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Web Messenger Platform',
      description: 'Hosted web messenger platform with 50+ registered users. Built with responsive design achieving 30% improvement in cross-device accessibility.',
      image: webMessengerImage,
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      // github: 'https://github.com/yourusername/web-messenger',
      live: 'https://lets-chat-webmessenger.000webhostapp.com/'
    },
    {
      title: 'FixMyCode - AI Code Editor',
      description: 'Advanced code editor combining lightweight editing with AI-powered code transformation using OpenAI Codex API integration.',
      image: fixMyCodeImage,
      technologies: ['React', 'JavaScript', 'Firebase', 'OpenAI API'],
      github: 'https://github.com/shubhammali929/fix_my_code',
      live: 'https://fixmycode.netlify.app/',
      videoDemo: 'https://www.youtube.com/watch?v=znxQCv4sGuA'
    },
    {
      title: 'Easy Navigate - Voice Navigation',
      description: 'Hands-free mobile app for safe location exploration while driving. Voice-command enabled for discovering nearby attractions without distraction.',
      image: easyNavigateImage,
      technologies: ['React', 'Express.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com/shubhammali929/Highway-Alerts',
      live: 'https://highway-alerts.netlify.app/'
    }
  ]

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatedText 
          text="Featured Projects"
          className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden border border-border transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      <span className="text-sm">Code</span>
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                  )}
                  {project.videoDemo && (
                    <motion.a
                      href={project.videoDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      <span className="text-sm">Video Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Projects 