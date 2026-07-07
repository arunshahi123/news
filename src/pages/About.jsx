import {
  FaBullseye,
  FaEye,
  FaUsers,
  FaAward,
  FaGlobeAsia,
  FaNewspaper,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-100">

      {/* Hero Section */}

      <div className="bg-gradient-to-r from-[#0A2C8B] to-red-600 text-white">

        <div className="max-w-7xl mx-auto px-6 py-20 text-center">

          <h1 className="text-5xl font-bold">
            About Nepal News
          </h1>

          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Delivering trusted, accurate and timely news across Nepal and
            around the world.
          </p>

        </div>

      </div>

      {/* About */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1495020689067-958852a7765"
            alt="News Room"
            className="rounded-xl shadow-lg h-[450px] object-cover w-full"
          />

          <div>

            <h2 className="text-4xl font-bold text-[#0A2C8B] mb-6">
              Who We Are
            </h2>

            <p className="text-gray-700 leading-8 mb-4">
              Nepal News is an independent digital news platform dedicated to
              delivering authentic and unbiased news from Nepal and around the
              world.
            </p>

            <p className="text-gray-700 leading-8 mb-4">
              We cover politics, business, sports, technology, education,
              entertainment, health, tourism and international affairs.
            </p>

            <p className="text-gray-700 leading-8">
              Our experienced journalists work every day to bring reliable
              information to our readers.
            </p>

          </div>

        </div>

      </section>

      {/* Mission Vision */}

      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

          <div className="shadow-lg rounded-xl p-8">

            <FaBullseye className="text-5xl text-red-600 mb-5" />

            <h2 className="text-3xl font-bold text-[#0A2C8B] mb-4">
              Our Mission
            </h2>

            <p className="text-gray-700 leading-8">
              To provide factual, impartial and timely journalism that empowers
              citizens with trustworthy information.
            </p>

          </div>

          <div className="shadow-lg rounded-xl p-8">

            <FaEye className="text-5xl text-blue-700 mb-5" />

            <h2 className="text-3xl font-bold text-[#0A2C8B] mb-4">
              Our Vision
            </h2>

            <p className="text-gray-700 leading-8">
              To become Nepal's most trusted digital news platform by promoting
              transparency, accountability and responsible journalism.
            </p>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="py-16 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-4xl font-bold text-[#0A2C8B] mb-12">
            Our Achievement
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">

              <FaUsers className="text-5xl text-red-600 mx-auto mb-4" />

              <h1 className="text-4xl font-bold">500K+</h1>

              <p className="text-gray-600 mt-2">
                Monthly Readers
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">

              <FaNewspaper className="text-5xl text-blue-700 mx-auto mb-4" />

              <h1 className="text-4xl font-bold">15,000+</h1>

              <p className="text-gray-600 mt-2">
                Published News
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">

              <FaAward className="text-5xl text-red-600 mx-auto mb-4" />

              <h1 className="text-4xl font-bold">20+</h1>

              <p className="text-gray-600 mt-2">
                Journalism Awards
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">

              <FaGlobeAsia className="text-5xl text-blue-700 mx-auto mb-4" />

              <h1 className="text-4xl font-bold">75+</h1>

              <p className="text-gray-600 mt-2">
                Countries Reached
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Team */}

      <section className="py-16 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0A2C8B] mb-12">
            Meet Our Team
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                name: "Ram Sharma",
                role: "Editor in Chief",
              },
              {
                name: "Sita Karki",
                role: "Senior Reporter",
              },
              {
                name: "Hari Adhikari",
                role: "Business Editor",
              },
              {
                name: "Anita Rai",
                role: "Sports Journalist",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl shadow hover:shadow-xl duration-300 text-center p-6"
              >
                <img
                  src={`https://i.pravatar.cc/300?img=${index + 10}`}
                  alt={member.name}
                  className="w-36 h-36 rounded-full mx-auto object-cover"
                />

                <h3 className="text-2xl font-bold mt-5">
                  {member.name}
                </h3>

                <p className="text-red-600 mt-2">
                  {member.role}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="bg-[#0A2C8B] text-white py-16">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-8">
            Why Choose Nepal News?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div>

              <h3 className="text-2xl font-bold mb-3">
                ✔ Trusted Journalism
              </h3>

              <p>
                Accurate reporting with verified information.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-bold mb-3">
                ✔ Fast Updates
              </h3>

              <p>
                Breaking news delivered instantly.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-bold mb-3">
                ✔ Independent Voice
              </h3>

              <p>
                Fair, unbiased and responsible journalism.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default About;