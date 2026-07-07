import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0B2E83] text-white mt-16">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold">
            Nepal Rastraya News
          </h2>

          <p className="mt-4 text-gray-300 leading-7">
            Nepal Rastraya News provides trusted, fast and
            accurate news from Nepal and around the world.
          </p>

          <div className="flex gap-4 mt-6 text-xl">

            <a href="#">
              <FaFacebookF className="hover:text-red-500 duration-300" />
            </a>

            <a href="#">
              <FaTwitter className="hover:text-red-500 duration-300" />
            </a>

            <a href="#">
              <FaYoutube className="hover:text-red-500 duration-300" />
            </a>

            <a href="#">
              <FaInstagram className="hover:text-red-500 duration-300" />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold mb-5">
            Quick Links
          </h2>

          <ul className="space-y-3">

            <li>
              <Link to="/" className="hover:text-red-400">
                Home
              </Link>
            </li>

            <li>
              <Link to="/news" className="hover:text-red-400">
                News
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-red-400">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-red-400">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-2xl font-bold mb-5">
            Categories
          </h2>

          <ul className="space-y-3">
            <li>Politics</li>
            <li>Sports</li>
            <li>Business</li>
            <li>Technology</li>
            <li>World</li>
            <li>Entertainment</li>
          </ul>
        </div>

        {/* Contact */}
        <div>

          <h2 className="text-2xl font-bold mb-5">
            Contact
          </h2>

          <div className="space-y-4 text-gray-300">

            <p className="flex gap-3">
              <FaMapMarkerAlt className="mt-1 text-red-500" />
              Kathmandu, Nepal
            </p>

            <p className="flex gap-3">
              <FaPhone className="mt-1 text-red-500" />
              +977 9800000000
            </p>

            <p className="flex gap-3">
              <FaEnvelope className="mt-1 text-red-500" />
              info@nepalrastrayanews.com
            </p>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-blue-700">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-300 text-center">
            © {new Date().getFullYear()} Nepal Rastraya News. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-3 md:mt-0">

            <Link to="/" className="hover:text-red-400">
              Privacy Policy
            </Link>

            <Link to="/" className="hover:text-red-400">
              Terms
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}