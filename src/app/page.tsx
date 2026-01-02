import Image from "next/image";
import companyLogo from "@/assets/images/companyLogo.png";
import { FaFacebookF, FaTiktok, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import {SiGmail} from "react-icons/si"

import "./styles/page.css";
import "./styles/global.css";



export default function Home() {
    const currentYear = new Date().getFullYear();

  return (
    <div className="homepage-container">
      <Image src={companyLogo} 
      className="companyLogo"
      alt="Hero image"
      width={500}
      height={500}
      />
      <p className="tag-line">Buy Time</p>
      <p className="services">Aircraft Charter | Aircraft Sales | Aviation Consulting</p>
      <div className="contacts">
        <a href='mailto:info@hermesnotus.com'>
          <p className="email"> info@hermesnotus.com --</p>
        </a>
        <a href="https://www.instagram.com/hermesnotus/"><p className="facebook"> <FaFacebookF /> </p></a>
        <a href="https://www.instagram.com/hermesnotus/"><p className="instagram"> <FaInstagram /> </p></a>
        
        <p className="linkedin"> <FaLinkedinIn /> </p>
        <a href="https://www.tiktok.com/@hermesnotus"><p className="tiktok"> <FaTiktok /> </p></a>
        <a href="https://x.com/HermesNotus"><p className="twitter"> X </p></a>
        
      </div>
      <footer className="text-center py-4 text-sm text-gray-500">
      © {currentYear} Hermes Notus Aviation. All rights reserved.
    </footer>
    </div> 
  );
}
