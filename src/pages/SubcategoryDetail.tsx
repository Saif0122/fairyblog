
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { categories, getStoriesBySubcategory, getAllSubcategories } from '@/data/expandedStories';
import { ArrowLeft, BookOpen, User } from 'lucide-react';

const SubcategoryDetail = () => {
  const { subcategoryId } = useParams<{ subcategoryId: string }>();
  const allSubcategories = getAllSubcategories();
  const subcategoryData = allSubcategories.find(sub => sub.id === subcategoryId);
  const stories = subcategoryId ? getStoriesBySubcategory(subcategoryId) : [];
  
  const parentCategory = subcategoryData ? categories.find(cat => cat.id === subcategoryData.parentCategory) : null;

  if (!subcategoryData || !parentCategory) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-fairy font-bold mb-4">Subcategory Not Found</h1>
          <p className="text-xl text-stone-600 mb-8">
            The subcategory you're looking for doesn't exist.
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
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-stone-600 mb-8">
          <Link to="/stories" className="hover:text-enchanted-600 transition-colors">
            All Stories
          </Link>
          <span>›</span>
          <Link to={`/category/${parentCategory.id}`} className="hover:text-enchanted-600 transition-colors">
            {parentCategory.name}
          </Link>
          <span>›</span>
          <span className="text-enchanted-600 font-medium">{subcategoryData.name}</span>
        </nav>

        {/* Subcategory Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-fairy font-bold mb-6 gradient-text">
            {subcategoryData.name}
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-8">
            {subcategoryData.description}
          </p>
          <div className="flex items-center justify-center gap-6 text-stone-500">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>{stories.length} stories available</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Part of {parentCategory.name}</span>
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        {stories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {stories.map((story, index) => (
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
                      {story.difficulty}
                    </Badge>
                    <span className="text-xs text-stone-500">{story.readTime}</span>
                  </div>
                  <CardTitle className="font-fairy text-lg group-hover:text-enchanted-600 transition-colors line-clamp-2">
                    {story.title}
                  </CardTitle>
                  <CardDescription className="text-stone-600 line-clamp-2 text-sm">
                    {story.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {story.tags.slice(0, 2).map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-stone-500">
                      <User className="w-3 h-3 mr-1" />
                      {story.author}
                    </div>
                    <Link to={`/story/${story.id}`}>
                      <Button variant="ghost" size="sm" className="text-enchanted-600 hover:text-enchanted-700 hover:bg-enchanted-50 p-0">
                        Read →
                      </Button>
                    </Link>
                  </div>
                  <div className="flex items-center justify-between mt-2 text-xs text-stone-400">
                    <span>Age: {story.ageGroup}</span>
                    <span>{story.origin}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📖</div>
            <p className="text-xl text-stone-500 mb-4">
              No stories found in {subcategoryData.name} yet.
            </p>
            <p className="text-stone-400 mb-8">
              Check back soon for new additions to this collection!
            </p>
            <div className="flex gap-4 justify-center">
              <Link to={`/category/${parentCategory.id}`}>
                <Button variant="outline" className="border-enchanted-300 text-enchanted-700 hover:bg-enchanted-50">
                  Browse {parentCategory.name}
                </Button>
              </Link>
              <Link to="/stories">
                <Button className="magical-btn">
                  View All Stories
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SubcategoryDetail;
