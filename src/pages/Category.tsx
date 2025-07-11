
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getStoriesByCategory, categories } from '@/data/stories';
import { ArrowLeft } from 'lucide-react';

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const categoryData = categories.find(cat => cat.id === category);
  const stories = category ? getStoriesByCategory(category) : [];

  if (!categoryData) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-fairy font-bold mb-4">Category Not Found</h1>
          <p className="text-xl text-stone-600 mb-8">
            The category you're looking for doesn't exist.
          </p>
          <Link to="/stories">
            <Button className="magical-btn">
              Browse All Stories
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to="/stories" className="inline-flex items-center text-enchanted-600 hover:text-enchanted-700 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Stories
        </Link>

        {/* Category Header */}
        <div className="text-center mb-12">
          <h1 className="page-header">{categoryData.name}</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            {categoryData.description}
          </p>
        </div>

        {/* Stories Grid */}
        {stories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Card key={story.id} className={`story-card animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-video bg-gradient-to-br from-enchanted-100 to-golden-100 rounded-t-xl overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-enchanted-600 font-medium bg-enchanted-50 px-2 py-1 rounded">
                      {categoryData.name}
                    </span>
                    <span className="text-sm text-stone-500">{story.readTime}</span>
                  </div>
                  <CardTitle className="font-fairy text-xl hover:text-enchanted-600 transition-colors">
                    {story.title}
                  </CardTitle>
                  <CardDescription className="text-stone-600">
                    {story.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-stone-500">
                      By {story.author}
                    </div>
                    <Link to={`/story/${story.id}`}>
                      <Button variant="ghost" className="text-enchanted-600 hover:text-enchanted-700 hover:bg-enchanted-50 p-0">
                        Read Story →
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-stone-500 mb-4">
              No stories found in this category yet.
            </p>
            <p className="text-stone-400 mb-8">
              Check back soon for new additions to {categoryData.name}!
            </p>
            <Link to="/stories">
              <Button className="magical-btn">
                Explore Other Categories
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Category;
