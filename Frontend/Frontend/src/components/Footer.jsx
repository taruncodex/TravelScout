export default function Footer() {
    return (
      <footer className="bg-white text-gray-800 py-12 shadow-lg">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div>
              <h2 className="text-3xl font-extrabold text-blue-600 flex items-center">
                TravelScout ✈️
              </h2>
              <p className="mt-2 text-gray-600">
                Explore the world with the best travel experiences.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-600">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>
                <li><a href="#" className="hover:text-blue-500 transition">Destinations</a></li>
                <li><a href="#" className="hover:text-blue-500 transition">Blog</a></li>
                <li><a href="#" className="hover:text-blue-500 transition">Contact</a></li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-600">Contact Us</h3>
              <p className="text-gray-600"><strong>Phone:</strong> +91 7365818084</p>
              <p className="text-gray-600"><strong>Email:</strong> support@travelscout.com</p>
              <p className="text-gray-600"><strong>Address:</strong> 123 mumbai St, India</p>
            </div>
  
            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-600">Newsletter</h3>
              <p className="text-gray-600 mb-4">Subscribe for exclusive travel deals.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="p-3 rounded-l-lg text-gray-800 outline-none border border-gray-300 w-full"
                />
                <button className="bg-blue-600 text-white px-4 py-3 rounded-r-lg font-bold hover:bg-blue-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
  
          {/* Social Media Icons & Copyright */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-4">
            <p className="text-gray-600">&copy; 2025 TravelScout. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-blue-600 hover:text-blue-700 transition text-2xl">🌍</a>
              <a href="#" className="text-blue-600 hover:text-blue-700 transition text-2xl">📸</a>
              <a href="#" className="text-blue-600 hover:text-blue-700 transition text-2xl">🐦</a>
              <a href="#" className="text-blue-600 hover:text-blue-700 transition text-2xl">📘</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  