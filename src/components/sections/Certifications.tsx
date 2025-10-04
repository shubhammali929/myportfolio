import { motion } from 'framer-motion'
import { Award, ExternalLink, Star } from 'lucide-react'
import { AnimatedText } from '@/components/ui/animated-text'

interface Certification {
  title: string
  organization: string
  date: string
  description: string
  credentialId: string
  link: string
  badge: 'gold' | 'silver' | 'bronze'
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: 'Java 5-Star Gold Badge',
      organization: 'HackerRank',
      date: 'Verified',
      description: 'Achieved 5-star gold badge in Java programming, demonstrating advanced proficiency in Java problem-solving and algorithms.',
      credentialId: '@shubhammali929',
      link: 'https://www.hackerrank.com/profile/shubhammali929',
      badge: 'gold'
    },
    {
      title: 'Ethical Hacking and Cybersecurity',
      organization: 'Udemy',
      date: 'Certified',
      description: 'Comprehensive certification in ethical hacking techniques, cybersecurity fundamentals, and penetration testing methodologies.',
      credentialId: 'UC-b01608d3-ee10-467e-9746-be55c99e6a5c',
      link: 'https://www.udemy.com/certificate/UC-b01608d3-ee10-467e-9746-be55c99e6a5c/',
      badge: 'silver'
    },
    {
      title: 'SQL Intermediate Certification',
      organization: 'CodeChef',
      date: 'Certified',
      description: 'Intermediate level certification in SQL database management, queries, and data manipulation techniques.',
      credentialId: 'fef461d',
      link: 'https://www.codechef.com/certificates/preview/fef461d',
      badge: 'bronze'
    }
  ]

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'gold': return 'from-yellow-400 to-yellow-600'
      case 'silver': return 'from-gray-300 to-gray-500'
      case 'bronze': return 'from-orange-400 to-orange-600'
      default: return 'from-primary to-purple-600'
    }
  }

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'gold': return <Star className="h-5 w-5 text-yellow-500" />
      case 'silver': return <Award className="h-5 w-5 text-gray-500" />
      case 'bronze': return <Award className="h-5 w-5 text-orange-500" />
      default: return <Award className="h-5 w-5 text-primary" />
    }
  }

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatedText 
          text="Certifications & Achievements"
          className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-card/50 backdrop-blur-sm rounded-lg p-6 relative overflow-hidden border border-border transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              {/* Badge Background */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${getBadgeColor(cert.badge)} opacity-10 rounded-bl-full`} />
              
              {/* Badge Icon */}
              <div className="absolute top-4 right-4">
                {getBadgeIcon(cert.badge)}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2 text-foreground pr-8">{cert.title}</h3>
                <p className="text-primary font-medium mb-2">{cert.organization}</p>
                <p className="text-muted-foreground text-sm mb-4">{cert.date}</p>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{cert.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                    ID: {cert.credentialId}
                  </span>
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2 text-sm">Verify</span>
                    <ExternalLink className="h-4 w-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Certifications 