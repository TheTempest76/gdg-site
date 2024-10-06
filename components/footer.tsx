import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">GDG Dr. AIT</h3>
            <p className="mt-2">Empowering students through technology</p>
          </div>

          <div className="w-full md:w-1/3 text-center md:text-right">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin /></a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}