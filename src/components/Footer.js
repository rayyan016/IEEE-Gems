import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook, FaGithub, FaAngellist, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <h2 className="text-lg font-bold mb-4">Product</h2>
            <ul>
              <li><a href="https://dummy-link">Overview</a></li>
              <li><a href="https://dummy-link">Features</a></li>
              <li><a href="https://dummy-link">Solutions</a></li>
              <li><a href="https://dummy-link">Tutorials</a></li>
              <li><a href="https://dummy-link">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Company</h2>
            <ul>
              <li><a href="https://dummy-link">About Us</a></li>
              <li><a href="https://dummy-link">Careers</a></li>
              <li><a href="https://dummy-link">Press</a></li>
              <li><a href="https://dummy-link">News</a></li>
              <li><a href="https://dummy-link">Media Kit</a></li>
              <li><a href="https://dummy-link">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Resources</h2>
            <ul>
              <li><a href="https://dummy-link">Blog</a></li>
              <li><a href="https://dummy-link">Newsletter</a></li>
              <li><a href="https://dummy-link">Events</a></li>
              <li><a href="https://dummy-link">Help Center</a></li>
              <li><a href="https://dummy-link">Tutorials</a></li>
              <li><a href="https://dummy-link">Support</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Social</h2>
            <ul>
              <li><a href="https://dummy-link">Twitter</a></li>
              <li><a href="https://dummy-link">LinkedIn</a></li>
              <li><a href="https://dummy-link">Facebook</a></li>
              <li><a href="https://dummy-link">GitHub</a></li>
              <li><a href="https://dummy-link">AngelList</a></li>
              <li><a href="https://dummy-link">Dribbble</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Legal</h2>
            <ul>
              <li><a href="https://dummy-link">Terms</a></li>
              <li><a href="https://dummy-link">Privacy</a></li>
              <li><a href="https://dummy-link">Cookies</a></li>
              <li><a href="https://dummy-link">Licenses</a></li>
              <li><a href="https://dummy-link">Settings</a></li>
              <li><a href="https://dummy-link">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between mt-8">
          <div>
            <p>&copy; {new Date().getFullYear()} Company. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://dummy-link" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="https://dummy-link" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://dummy-link" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </a>
            <a href="https://dummy-link" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
            <a href="https://dummy-link" className="text-gray-400 hover:text-white">
              <FaAngellist />
            </a>
            <a href="https://dummy-link" className="text-gray-400 hover:text-white">
              <FaDribbble />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
