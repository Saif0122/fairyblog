
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getStoryById, stories, categories } from '@/data/stories';
import { ArrowLeft, Clock } from 'lucide-react';

const StoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const story = id ? getStoryById(id) : null;

  if (!story) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-fairy font-bold mb-4">Story Not Found</h1>
          <p className="text-xl text-stone-600 mb-8">
            The story you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/stories">
            <Button className="magical-btn">
              Return to Stories
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const categoryName = categories.find(cat => cat.id === story.category)?.name || story.category;
  const relatedStories = stories.filter(s => s.category === story.category && s.id !== story.id).slice(0, 3);

  return (
    <Layout>
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Button */}
        <Link to="/stories" className="inline-flex items-center text-enchanted-600 hover:text-enchanted-700 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Stories
        </Link>

        {/* Story Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Badge variant="secondary" className="bg-enchanted-100 text-enchanted-800 hover:bg-enchanted-200">
              {categoryName}
            </Badge>
            <div className="flex items-center text-stone-500">
              <Clock className="w-4 h-4 mr-1" />
              {story.readTime}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-fairy font-bold mb-4 gradient-text">
            {story.title}
          </h1>
          
          <p className="text-xl text-stone-600 mb-6">
            {story.excerpt}
          </p>
          
          <div className="flex items-center text-stone-500 text-sm">
            <span>By {story.author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(story.publishDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
        </header>

        {/* Story Image */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <img 
            src={story.image} 
            alt={story.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Story Content */}
        <div className="prose prose-lg max-w-none mb-12">
          {story.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-stone-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Related Stories */}
        {relatedStories.length > 0 && (
          <section className="border-t border-stone-200 pt-12">
            <h2 className="text-3xl font-fairy font-bold mb-8 gradient-text">
              More {categoryName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedStories.map(relatedStory => (
                <Link 
                  key={relatedStory.id} 
                  to={`/story/${relatedStory.id}`}
                  className="block group"
                >
                  <div className="story-card h-full">
                    <div className="aspect-video bg-gradient-to-br from-enchanted-100 to-golden-100 rounded-t-xl overflow-hidden">
                      <img 
                        src={relatedStory.image} 
                        alt={relatedStory.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-fairy font-semibold text-lg mb-2 group-hover:text-enchanted-600 transition-colors">
                        {relatedStory.title}
                      </h3>
                      <p className="text-stone-600 text-sm line-clamp-2">
                        {relatedStory.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </Layout>
  );
};

export default StoryDetail;
