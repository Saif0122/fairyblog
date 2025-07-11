
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-stone-50 border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-fairy font-bold gradient-text">
                Enchanted Tales
              </span>
            </Link>
            <p className="text-stone-600 mb-4 max-w-md">
              Discover magical stories, timeless fairy tales, and enchanting adventures 
              that spark imagination and wonder in readers of all ages.
            </p>
          </div>

          <div>
            <h3 className="font-fairy font-semibold text-stone-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-stone-600 hover:text-enchanted-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/stories" className="text-stone-600 hover:text-enchanted-600 transition-colors">
                  Stories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-600 hover:text-enchanted-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-stone-600 hover:text-enchanted-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-fairy font-semibold text-stone-800 mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/classic" className="text-stone-600 hover:text-enchanted-600 transition-colors">
                  Classic Tales
                </Link>
              </li>
              <li>
                <Link to="/category/modern" className="text-stone-600 hover:text-enchanted-600 transition-colors">
                  Modern Stories
                </Link>
              </li>
              <li>
                <Link to="/category/adventure" className="text-stone-600 hover:text-enchanted-600 transition-colors">
                  Adventures
                </Link>
              </li>
              <li>
                <Link to="/category/magical" className="text-stone-600 hover:text-enchanted-600 transition-colors">
                  Magical Tales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-500 text-sm">
            © 2024 Enchanted Tales. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-stone-500 hover:text-enchanted-600 text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
