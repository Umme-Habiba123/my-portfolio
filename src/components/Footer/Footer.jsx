import { RiGithubLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { LuFacebook } from "react-icons/lu";

import { CgMail } from "react-icons/cg";

export default function Footer() {
  return (
    <footer className=" bg-[#0f0f12]  text-gray-400   py-6 border-t border-gray-800">
    <div className="max-w-9/12 mx-auto flex justify-between">
       <div>
       <p className="text-sm lg:text-lg md:text-base">
        © {new Date().getFullYear()} Mahiya Rehman. All rights reserved.
      </p>
     </div>
     <div>

       <p className="text-xs md:text-sm lg:text-lg mt-1">
        Built with ❤️ using <span className="text-orange-400 font-bold">React</span>,{" "}
        <span className="text-orange-400 font-bold">Tailwind</span> &{" "}
        <span className="text-orange-400 font-bold">DaisyUI</span>
      </p>
     </div>
     <div className="flex gap-3 text-3xl">
      <a target="_blank" href="https://github.com/Umme-Habiba123">
        <p><RiGithubLine /></p>
      </a>
     <a target="_blank" href="https://www.linkedin.com/in/mahiya-rehman-mim-a9b3a7210/">
      <p><SlSocialLinkedin /></p>
     </a>
     <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox">
       <p className="mt-1"><CgMail /></p>
     </a>
     <a target="_blank" href="https://www.facebook.com/mahiya.rahman.540132">
       <p className="mt-1"><LuFacebook />
</p>
     </a>
     </div>
    </div>
    </footer>
  );
}

