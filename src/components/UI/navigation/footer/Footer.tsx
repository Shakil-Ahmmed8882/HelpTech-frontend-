export default function Footer() {
    return (
      <footer className="bg-default-50 text-default-900 relative z-[999]">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">HelpTech</h2>
              <p className="text-sm">Your go-to place for tech help and solutions.</p>
              <div className="flex space-x-4">
                <span className="hover:underline">Facebook</span>
                <span className="hover:underline">Twitter</span>
                <span className="hover:underline">Instagram</span>
                <span className="hover:underline">LinkedIn</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><span className="hover:underline">About Us</span></li>
                <li><span className="hover:underline">Our Services</span></li>
                <li><span className="hover:underline">FAQ</span></li>
                <li><span className="hover:underline">Blog</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><span className="hover:underline">Contact Us</span></li>
                <li><span className="hover:underline">Help Center</span></li>
                <li><span className="hover:underline">Community Forum</span></li>
                <li><span className="hover:underline">Feedback</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li>
                  <span className="hover:underline">info@helptech.com</span>
                </li>
                <li>
                  <span className="hover:underline">+1 (234) 567-890</span>
                </li>
                <li>
                  <span>123 Tech Street, Silicon Valley, CA 94000</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} HelpTech. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="text-sm hover:underline">Privacy Policy</span>
              <span className="text-sm hover:underline">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }