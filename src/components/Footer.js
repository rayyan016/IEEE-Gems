import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaAngellist,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Footer Links */}
          <div>
            <h2 className="text-lg font-bold mb-4">Product</h2>
            <ul>
              <li>
                <a href="https://dummy-link">Overview</a>
              </li>
              <li>
                <a href="https://dummy-link">Features</a>
              </li>
              <li>
                <a href="https://dummy-link">Solutions</a>
              </li>
              <li>
                <a href="https://dummy-link">Tutorials</a>
              </li>
              <li>
                <a href="https://dummy-link">Pricing</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Company</h2>
            <ul>
              <li>
                <a href="https://dummy-link">About Us</a>
              </li>
              <li>
                <a href="https://dummy-link">Careers</a>
              </li>
              <li>
                <a href="https://dummy-link">Press</a>
              </li>
              <li>
                <a href="https://dummy-link">News</a>
              </li>
              <li>
                <a href="https://dummy-link">Media Kit</a>
              </li>
              <li>
                <a href="https://dummy-link">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Resources</h2>
            <ul>
              <li>
                <a href="https://dummy-link">Blog</a>
              </li>
              <li>
                <a href="https://dummy-link">Newsletter</a>
              </li>
              <li>
                <a href="https://dummy-link">Events</a>
              </li>
              <li>
                <a href="https://dummy-link">Help Center</a>
              </li>
              <li>
                <a href="https://dummy-link">Tutorials</a>
              </li>
              <li>
                <a href="https://dummy-link">Support</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Social</h2>
            <ul>
              <li>
                <a href="https://twitter.com">Twitter</a>
              </li>
              <li>
                <a href="https://linkedin.com">LinkedIn</a>
              </li>
              <li>
                <a href="https://facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://github.com">GitHub</a>
              </li>
              <li>
                <a href="https://www.angellist.com/">AngelList</a>
              </li>
              <li>
                <a href="https://dribbble.com/">Dribbble</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Legal</h2>
            <ul>
              <li>
                <a href="https://dummy-link">Terms</a>
              </li>
              <li>
                <a href="https://dummy-link">Privacy</a>
              </li>
              <li>
                <a href="https://dummy-link">Cookies</a>
              </li>
              <li>
                <a href="https://dummy-link">Licenses</a>
              </li>
              <li>
                <a href="https://dummy-link">Settings</a>
              </li>
              <li>
                <a href="https://dummy-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Part */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-8">
          <div className="text-sm lg:text-lg">
            <p>
              &copy; {new Date().getFullYear()} Phoenix UI. All rights
              reserved.
            </p>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mb-3 md:mb-0">
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.angellist.com/"
              className="text-gray-400 hover:text-white"
            >
              <FaAngellist />
            </a>
            <a
              href="https://dribbble.com/"
              className="text-gray-400 hover:text-white"
            >
              <FaDribbble />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
