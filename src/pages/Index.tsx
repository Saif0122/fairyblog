
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getFeaturedStories, categories } from '@/data/stories';
import { FileText } from 'lucide-react';

const Index = () => {
  const featuredStories = getFeaturedStories();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-enchanted-50 via-golden-50 to-stone-50 py-20">
        <div className="absolute inset-0 opacity-40">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a855f7' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-fairy font-bold mb-6 animate-fade-in">
              Welcome to{' '}
              <span className="gradient-text magical-sparkle">
                Enchanted Tales
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 mb-8 leading-relaxed animate-fade-in">
              Discover magical stories, timeless fairy tales, and enchanting adventures 
              that spark imagination and transport you to worlds beyond dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link to="/stories">
                <Button className="magical-btn text-lg px-8 py-4">
                  Explore Stories
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="text-lg px-8 py-4 border-enchanted-300 text-enchanted-700 hover:bg-enchanted-50">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-fairy font-bold text-center mb-12 gradient-text">
            Featured Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story, index) => (
              <Card key={story.id} className={`story-card animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="aspect-video bg-gradient-to-br from-enchanted-100 to-golden-100 rounded-t-xl flex items-center justify-center">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-enchanted-600 font-medium capitalize">
                      {story.category}
                    </span>
                    <span className="text-sm text-stone-500">{story.readTime}</span>
                  </div>
                  <CardTitle className="font-fairy text-xl">{story.title}</CardTitle>
                  <CardDescription className="text-stone-600">
                    {story.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link to={`/story/${story.id}`}>
                    <Button variant="ghost" className="text-enchanted-600 hover:text-enchanted-700 hover:bg-enchanted-50 p-0">
                      Read More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-fairy font-bold text-center mb-12 gradient-text">
            Story Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link 
                key={category.id} 
                to={`/category/${category.id}`}
                className={`block animate-fade-in`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white border-stone-200">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-enchanted-gradient rounded-full flex items-center justify-center">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="font-fairy text-xl text-stone-800">
                      {category.name}
                    </CardTitle>
                    <CardDescription className="text-stone-600">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-enchanted-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-fairy font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of readers who have discovered the magic within our collection 
            of enchanting tales and timeless stories.
          </p>
          <Link to="/stories">
            <Button className="bg-white text-enchanted-700 hover:bg-stone-100 text-lg px-8 py-4 font-semibold">
              Start Reading Now
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
