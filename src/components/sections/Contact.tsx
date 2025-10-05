import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { AnimatedText } from '@/components/ui/animated-text'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create the email body with proper formatting
    const emailBody = `Hello Shubham,

I'm ${formData.name}

${formData.message}

Best regards,
${formData.name}`

    // Create mailto URL with pre-filled content
    const mailtoURL = `mailto:shubhammali929@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`
    
    // Open email client
    window.location.href = mailtoURL
    
    // Reset form after sending
    setFormData({
      name: '',
      subject: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatedText 
          text="Get in Touch"
          className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-12"
        />
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-4">
                Feel free to reach out to me for any questions or opportunities.
              </p>
              <p className="text-sm text-muted-foreground mb-8 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                💡 <strong>Quick Contact:</strong> Fill out the form and click "Send Message" to open your email client with a pre-filled message ready to send!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:your.email@example.com" className="text-foreground hover:text-primary">
                    shubhammali929@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+1234567890" className="text-foreground hover:text-primary">
                    +91 8421075337
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">Pune, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: 0.2,
              duration: 0.5,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ scale: 1.01 }}
          >
            <form 
              onSubmit={handleSubmit} 
              className="space-y-6 p-8 rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/40"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project, question, or opportunity..."
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={!formData.name || !formData.subject || !formData.message}
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </motion.button>

            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact 