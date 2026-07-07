import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero */}

      <div className="bg-gradient-to-r from-[#0A2C8B] to-red-600 text-white">

        <div className="max-w-7xl mx-auto py-20 px-6 text-center">

          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-4 text-lg">
            We'd love to hear from you.
          </p>

        </div>

      </div>

      {/* Contact Information */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">

            <FaPhoneAlt className="text-red-600 text-4xl mx-auto mb-4"/>

            <h3 className="text-xl font-bold mb-2">
              Phone
            </h3>

            <p>+977-9800000000</p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">

            <FaEnvelope className="text-blue-700 text-4xl mx-auto mb-4"/>

            <h3 className="text-xl font-bold mb-2">
              Email
            </h3>

            <p>info@nepalnews.com</p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">

            <FaMapMarkerAlt className="text-red-600 text-4xl mx-auto mb-4"/>

            <h3 className="text-xl font-bold mb-2">
              Address
            </h3>

            <p>Kathmandu, Nepal</p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">

            <FaClock className="text-blue-700 text-4xl mx-auto mb-4"/>

            <h3 className="text-xl font-bold mb-2">
              Office Hours
            </h3>

            <p>Sun - Fri</p>

            <p>9:00 AM - 6:00 PM</p>

          </div>

        </div>

      </div>

      {/* Contact Form */}

      <div className="max-w-7xl mx-auto px-6 pb-16">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Form */}

          <div className="bg-white rounded-xl shadow-lg p-8">

            <h2 className="text-3xl font-bold text-[#0A2C8B] mb-6">
              Send us a Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>

              <button
                className="bg-red-600 hover:bg-blue-900 text-white px-8 py-3 rounded-lg transition"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Google Map */}

          <div>

            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Kathmandu,Nepal&output=embed"
              className="w-full h-[500px] rounded-xl shadow-lg"
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </div>

      {/* Social Media */}

      <div className="bg-[#0A2C8B] text-white py-12">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-8">
            Follow Us
          </h2>

          <div className="flex justify-center gap-8 text-4xl">

            <a href="#" className="hover:text-red-400">
              <FaFacebook />
            </a>

            <a href="#" className="hover:text-red-400">
              <FaTwitter />
            </a>

            <a href="#" className="hover:text-red-400">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-red-400">
              <FaYoutube />
            </a>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;