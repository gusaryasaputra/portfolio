import { FaEnvelope, FaPhone } from "react-icons/fa";

import { SocialMediaButton } from "../../_components";

export default function Contact() {
  return (
    <section className="py-10 bg-zinc-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Contact Me
        </h2>
        <p className="text-center text-lg mb-8 max-w-2xl mx-auto">
          Feel free to reach out to me through any of the following means. I
          look forward to connecting with you!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-around space-y-6 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <FaEnvelope size={24} />
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-blue-500">
                <a href="mailto:gusaryasaputra@gmail.com" target="_blank">
                  gusaryasaputra@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone size={24} />
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-blue-500">
                <a href="https://wa.me/+6281238484549" target="_blank">
                  +62 812 3848 4549
                </a>
              </p>
            </div>
          </div>
          <div className="pace-x-4">
            <h3 className="text-xl font-semibold">Social Media</h3>
            <div className="flex justify-center space-x-4 mt-2">
              <SocialMediaButton
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                socialMediaName="facebook"
                link="https://web.facebook.com/gusaryasaputra"
                iconSize={24}
              />
              <SocialMediaButton
                className="text-pink-500 hover:text-pink-700 transition-colors duration-300"
                socialMediaName="instagram"
                link="https://www.instagram.com/gusaryasaputra"
                iconSize={24}
              />
              <SocialMediaButton
                className="text-blue-700 hover:text-blue-900 transition-colors duration-300"
                socialMediaName="linkedin"
                link="https://www.linkedin.com/in/gusaryasaputra"
                iconSize={24}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
