import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { AnimatedText } from '@/components/ui/animated-text'

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Application (M.C.A.)',
      institution: 'MES Institute of Management & Career Courses (IMCC), Pune',
      location: 'Pune, Maharashtra',
      year: '2022 - 2024',
      description: 'In the pursuit of my Master\'s degree in Computer Science, I continue to explore advanced topics and sharpen my skills in software development. This ongoing journey is equipping me with the expertise needed for future challenges in the tech world.',
      courses: ['Advanced Web Development', 'Cloud Computing', 'Data Science', 'Software Architecture']
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Deccan Education Society\'s WILLINGDON COLLEGE, SANGLI',
      location: 'Sangli, Maharashtra',
      year: '2019 - 2022',
      description: 'During my Bachelor\'s in Computer Science, I embarked on a transformative journey where I delved into coding and mastered various technologies, laying a solid foundation for my future in the world of tech.',
      courses: ['Data Structures', 'Operating Systems', 'Database Management', 'Web Development']
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-12 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatedText 
            text="Education Journey"
            className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-12"
          />
          
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 }}
                className="mb-12 relative pl-8 border-l-2 border-primary"
              >
                <div className="absolute -left-3 top-0">
                  <motion.div 
                    className="bg-primary p-2 rounded-full"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <GraduationCap className="h-4 w-4 text-white" />
                  </motion.div>
                </div>
                
                <motion.div 
                  className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                    <span className="text-primary font-medium">{edu.year}</span>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-lg text-foreground font-medium">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.location}</p>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{edu.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, courseIndex) => (
                      <motion.span
                        key={courseIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Education 