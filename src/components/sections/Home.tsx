import { motion } from 'framer-motion'
import { ArrowRight, Briefcase } from 'lucide-react'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { AnimatedText } from '@/components/ui/animated-text'
import shubhamImage from '@/assets/shubham.jpeg'

const Home = () => {
  const socialLinks = [
    { icon: 'facebook', url: 'https://www.facebook.com/profile.php?id=100012893205430' },
    { icon: 'github', url: 'https://github.com/yourusername' },
    { icon: 'linkedin', url: 'https://linkedin.com/in/yourusername' },
    { icon: 'twitter', url: 'https://twitter.com/yourusername' },
  ]

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen pt-16 relative">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Hero Section with Image and Title */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-8">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img 
                  src={shubhamImage} 
                  alt="Shubham Mali" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
            </motion.div>
            
            {/* Title and Introduction */}
            <div className="flex-1 text-center lg:text-left">
              <AnimatedText 
                text="Hi, I am Shubham Mali"
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4"
              />
              <AnimatedText 
                text="A Full Stack Web Developer / Software Engineer"
                className="text-xl md:text-2xl text-muted-foreground mb-6"
                delay={0.5}
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium">Currently working as</span>
              <span className="font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Software Engineer at miniOrange Security
              </span>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-lg text-muted-foreground mb-8"
          >
            I am a passionate and highly skilled full-stack web developer with a strong background in creating dynamic and user-friendly web applications. With 5 years of experience in the field, I have successfully delivered numerous projects, showcasing my expertise in both front-end and back-end development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold text-primary mb-2">Available for Freelance Projects</h3>
            <p className="text-muted-foreground">
              I'm currently accepting new freelance projects and collaborations. Whether you need a custom web application, 
              e-commerce solution, or any other digital product, I'm here to help turn your ideas into reality.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="mt-4 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Discuss Your Project
            </motion.button>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Get in Touch
              </button>
            </motion.div>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.icon}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className={`fab fa-${link.icon} text-2xl`}></i>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            whileHover={{ y: -10 }}
            className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border"
          >
            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
            <p className="text-muted-foreground">
              Creating beautiful and responsive user interfaces with modern frameworks like React, Vue, and Angular
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -10 }}
            className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border"
          >
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <p className="text-muted-foreground">
              Building scalable and secure server-side applications with Node.js, Python, and PHP
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -10 }}
            className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border"
          >
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-muted-foreground">
              Designing intuitive and user-friendly experiences that delight users
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-muted-foreground">8421075337</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-muted-foreground">shubhammali929@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Website</h3>
              <p className="text-muted-foreground">shubhamm.info</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home 