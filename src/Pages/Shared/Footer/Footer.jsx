import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content p-10">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-lg font-bold">ACME Industries Ltd.</h2>
          <p>Providing reliable tech since 1992</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Quick Links</h2>
          <ul>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter className="text-xl" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram className="text-xl" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <FaLinkedinIn className="text-xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-base-300 text-base-content p-4 text-center mt-4">
        <p>Copyright &copy; {new Date().getFullYear()} - All rights reserved by ACME Industries Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
