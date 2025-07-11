
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { categories, getStoriesByCategory, getSubcategoriesByCategory } from '@/data/expandedStories';
import { ArrowLeft, BookOpen, Users } from 'lucide-react';

const CategoryDetail = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const categoryData = categories.find(cat => cat.id === categoryId);
  const stories = categoryId ? getStoriesByCategory(categoryId) : [];
  const subcategories = categoryId ? getSubcategoriesByCategory(categoryId) : [];

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
          <h1 className="text-5xl font-fairy font-bold mb-6 gradient-text">
            {categoryData.name}
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-8">
            {categoryData.description}
          </p>
          <div className="flex items-center justify-center gap-6 text-stone-500">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>{stories.length} stories</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>{subcategories.length} subcategories</span>
            </div>
          </div>
        </div>

        {/* Subcategories */}
        {subcategories.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-fairy font-bold mb-8 text-center gradient-text">
              Explore Subcategories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {subcategories.map((subcategory, index) => (
                <Link 
                  key={subcategory.id} 
                  to={`/subcategory/${subcategory.id}`}
                  className={`block animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white border-stone-200">
                    <CardHeader className="text-center">
                      <CardTitle className="font-fairy text-xl text-stone-800 mb-2">
                        {subcategory.name}
                      </CardTitle>
                      <CardDescription className="text-stone-600">
                        {subcategory.description}
                      </CardDescription>
                      <div className="mt-4">
                        <Badge variant="secondary" className="bg-enchanted-100 text-enchanted-800">
                          {stories.filter(story => story.subcategory === subcategory.id).length} stories
                        </Badge>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Featured Stories from Category */}
        <section>
          <h2 className="text-3xl font-fairy font-bold mb-8 text-center gradient-text">
            Featured Stories
          </h2>
          {stories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {stories.slice(0, 6).map((story, index) => (
                <Card key={story.id} className={`story-card animate-fade-in group`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-enchanted-100 to-golden-100 rounded-t-xl overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs bg-enchanted-100 text-enchanted-800">
                        {subcategories.find(sub => sub.id === story.subcategory)?.name || story.subcategory}
                      </Badge>
                      <span className="text-xs text-stone-500">{story.readTime}</span>
                    </div>
                    <CardTitle className="font-fairy text-lg group-hover:text-enchanted-600 transition-colors">
                      {story.title}
                    </CardTitle>
                    <CardDescription className="text-stone-600 line-clamp-2">
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
                Check back soon for new additions!
              </p>
            </div>
          )}

          {stories.length > 6 && (
            <div className="text-center">
              <Link to={`/stories?category=${categoryData.id}`}>
                <Button className="magical-btn">
                  View All {stories.length} Stories
                </Button>
              </Link>
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default CategoryDetail;
