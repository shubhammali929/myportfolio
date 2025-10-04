import { Github, Linkedin, Coffee } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Shubham Mali. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/shubhammali929"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/shubhammali1511/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://buymeacoffee.com/shubhammali"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              <Coffee className="h-4 w-4 mr-2" />
              Buy me a coffee
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 