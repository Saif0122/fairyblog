
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <span className="text-8xl">🏰</span>
          </div>
          <h1 className="text-6xl font-fairy font-bold mb-6 gradient-text">404</h1>
          <h2 className="text-3xl font-fairy font-semibold mb-4 text-stone-800">
            Tale Not Found
          </h2>
          <p className="text-xl text-stone-600 mb-8 leading-relaxed">
            It seems you've wandered into an uncharted part of our magical realm. 
            The story you're looking for has either been moved to a different castle 
            or is still being written by our fairy tale authors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="magical-btn text-lg px-8 py-4">
                Return Home
              </Button>
            </Link>
            <Link to="/stories">
              <Button variant="outline" className="text-lg px-8 py-4 border-enchanted-300 text-enchanted-700 hover:bg-enchanted-50">
                Browse Stories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
