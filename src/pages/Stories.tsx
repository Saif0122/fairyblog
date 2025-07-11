
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { stories, categories } from '@/data/stories';

const Stories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredStories = selectedCategory === 'all' 
    ? stories 
    : stories.filter(story => story.category === selectedCategory);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="page-header">All Stories</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Explore our complete collection of magical tales, fairy stories, and enchanting adventures.
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center mb-8">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story, index) => (
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
                  <span className="text-sm text-enchanted-600 font-medium capitalize bg-enchanted-50 px-2 py-1 rounded">
                    {categories.find(cat => cat.id === story.category)?.name}
                  </span>
                  <span className="text-sm text-stone-500">{story.readTime}</span>
                </div>
                <CardTitle className="font-fairy text-xl hover:text-enchanted-600 transition-colors">
                  {story.title}
                </CardTitle>
                <CardDescription className="text-stone-600 line-clamp-3">
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

        {filteredStories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-stone-500">No stories found in this category.</p>
            <Button 
              onClick={() => setSelectedCategory('all')} 
              className="mt-4 magical-btn"
            >
              View All Stories
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Stories;
