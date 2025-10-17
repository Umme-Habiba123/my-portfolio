import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "../Button/Button.jsx";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0f0f12] text-white py-20 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Let's <span className="text-orange-400">Connect</span>
        </h2>
        <p className="text-gray-400 text-sm lg:text-xl md:text-base mb-12 max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations. Let's create
          something amazing together! 💬
        </p>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {/* Email */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start p-6 bg-[#1b1b1f] rounded-2xl shadow-md hover:bg-[#232327] transition-all hover:border hover:border-amber-500">
            <div className="p-3 bg-orange-600/20 rounded-lg mb-3 sm:mb-0 sm:mr-4">
              <Mail className="text-orange-400" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-medium break-all">mahiyarahman@gmail.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start p-6 bg-[#1b1b1f] rounded-2xl shadow-md hover:bg-[#232327] transition-all hover:border hover:border-amber-500">
            <div className="p-3 bg-orange-600/20 rounded-lg mb-3 sm:mb-0 sm:mr-4">
              <MapPin className="text-orange-400" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-400">Location</p>
              <p className="font-medium">Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start p-6 bg-[#1b1b1f] rounded-2xl shadow-md hover:bg-[#232327] transition-all hover:border hover:border-amber-500">
            <div className="p-3 bg-orange-600/20 rounded-lg mb-3 sm:mb-0 sm:mr-4">
              <Linkedin className="text-orange-400" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-400">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/mahiya-rehman-mim-a9b3a7210/"
                className="font-medium hover:underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/mahiya-rehman
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start p-6 bg-[#1b1b1f] rounded-2xl shadow-md hover:bg-[#232327] transition-all hover:border hover:border-amber-500">
            <div className="p-3 bg-orange-600/20 rounded-lg mb-3 sm:mb-0 sm:mr-4">
              <Github className="text-orange-400" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-400">GitHub</p>
              <a
                href="https://github.com/Umme-Habiba123"
                className="font-medium hover:underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Umme-Habiba123
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#1b1b1f] rounded-2xl py-10 px-6 md:px-10 shadow-md">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Ready to start a project?
          </h3>
          <p className="text-gray-400 text-sm md:text-base mb-6 max-w-lg mx-auto">
            Whether you have a question or just want to say hi, my inbox is
            always open!
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 hover:border-none text-white px-6 py-3 rounded-lg transition-all">
            Send a Message
          </Button>
        </div>
      </div>
    </section>
  );
}
