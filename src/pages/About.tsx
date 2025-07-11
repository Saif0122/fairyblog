
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="page-header">About Enchanted Tales</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Welcome to a magical world where stories come alive, imagination knows no bounds, 
            and every tale holds the power to transport you to extraordinary realms.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-lg bg-gradient-to-br from-enchanted-50 to-golden-50">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-fairy gradient-text">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-stone-700 leading-relaxed">
                  At Enchanted Tales, we believe in the timeless power of storytelling to inspire, 
                  educate, and bring wonder to people of all ages. Our mission is to preserve the 
                  magic of fairy tales while reimagining them for contemporary audiences, creating 
                  stories that resonate with today's world while maintaining their enchanting essence.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-fairy font-bold text-center mb-12 gradient-text">
            What Makes Us Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="story-card h-full">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-enchanted-gradient rounded-full flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <CardTitle className="font-fairy text-xl text-center">Magical Storytelling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-stone-600">
                  Every story is crafted with care, weaving together traditional fairy tale elements 
                  with modern themes and contemporary relevance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="story-card h-full">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-golden-gradient rounded-full flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <CardTitle className="font-fairy text-xl text-center">Diverse Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-stone-600">
                  From classic retellings to modern adventures, our collection spans multiple 
                  genres and themes to satisfy every reader's taste.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="story-card h-full">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-forest-gradient rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌟</span>
                </div>
                <CardTitle className="font-fairy text-xl text-center">Quality Content</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-stone-600">
                  Each tale is carefully reviewed and edited to ensure the highest quality 
                  storytelling experience for our readers.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Story Categories */}
        <section className="mb-16 bg-stone-50 rounded-2xl p-8">
          <h2 className="text-3xl font-fairy font-bold text-center mb-8 gradient-text">
            Our Story Universe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-fairy font-semibold mb-4 text-enchanted-700">Classic Tales</h3>
              <p className="text-stone-600 mb-4">
                Beloved fairy tales reimagined for modern readers, maintaining their timeless 
                charm while addressing contemporary themes and values.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-fairy font-semibold mb-4 text-golden-600">Modern Stories</h3>
              <p className="text-stone-600 mb-4">
                Original tales set in today's world, where magic meets technology and 
                ancient wisdom guides modern adventures.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-fairy font-semibold mb-4 text-forest-600">Adventures</h3>
              <p className="text-stone-600 mb-4">
                Thrilling quests and exciting journeys that take readers on epic adventures 
                through magical realms and extraordinary circumstances.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-fairy font-semibold mb-4 text-enchanted-700">Magical Tales</h3>
              <p className="text-stone-600 mb-4">
                Stories filled with wonder, enchantment, and the kind of magic that reminds 
                us of the extraordinary potential within the ordinary world.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="text-center">
          <h2 className="text-3xl font-fairy font-bold mb-8 gradient-text">
            Our Philosophy
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              We believe that stories have the power to shape minds, inspire dreams, and create 
              connections between people across cultures and generations. In our digital age, 
              the ancient art of storytelling remains as relevant and powerful as ever.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              Through Enchanted Tales, we invite you to rediscover the magic of reading, 
              explore new perspectives, and remember that no matter how old we grow, 
              there's always room in our hearts for a little bit of wonder.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
