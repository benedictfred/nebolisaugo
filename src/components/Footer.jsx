import {
  IoMdMail,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  CiPhone,
  FiMapPin,
} from "../utils/icons";

function Footer({ onScroll }) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:nebolisaugochukwu@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <IoMdMail className="w-4 h-4" />
                <span>nebolisaugochukwu@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <CiPhone className="w-4 h-4" />
                <span>+(234) 701-823-1429</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="w-4 h-4" />
                <span>Nigeria</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <ul className="*:cursor-pointer">
                <li
                  className="hover:text-white transition-colors"
                  onClick={() => onScroll("home")}
                >
                  Home
                </li>
                <li
                  className="hover:text-white transition-colors"
                  onClick={() => onScroll("about")}
                >
                  About
                </li>
                <li
                  className="hover:text-white transition-colors"
                  onClick={() => onScroll("projects")}
                >
                  Projects
                </li>
              </ul>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/benedictfred"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ugochukwu-nebolisa-a818b6302"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/i_am_nebolisa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm">
              {"Let's"} connect and discuss how we can work together on your
              next project!
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Nebolisa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
