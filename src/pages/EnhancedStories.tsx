
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { 
  expandedStories, 
  categories, 
  searchStories,
  getStoriesByCategory,
  getStoriesBySubcategory,
  getStoriesByAgeGroup,
  getStoriesByDifficulty
} from '@/data/expandedStories';
import { Search, Filter, Clock, User } from 'lucide-react';

const STORIES_PER_PAGE = 12;

const EnhancedStories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStories = useMemo(() => {
    let stories = expandedStories;

    // Apply search filter
    if (searchQuery) {
      stories = searchStories(searchQuery);
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      stories = stories.filter(story => story.category === selectedCategory);
    }

    // Apply subcategory filter
    if (selectedSubcategory !== 'all') {
      stories = stories.filter(story => story.subcategory === selectedSubcategory);
    }

    // Apply age group filter
    if (selectedAgeGroup !== 'all') {
      stories = stories.filter(story => story.ageGroup === selectedAgeGroup);
    }

    // Apply difficulty filter
    if (selectedDifficulty !== 'all') {
      stories = stories.filter(story => story.difficulty === selectedDifficulty);
    }

    return stories;
  }, [searchQuery, selectedCategory, selectedSubcategory, selectedAgeGroup, selectedDifficulty]);

  const totalPages = Math.ceil(filteredStories.length / STORIES_PER_PAGE);
  const startIndex = (currentPage - 1) * STORIES_PER_PAGE;
  const endIndex = startIndex + STORIES_PER_PAGE;
  const currentStories = filteredStories.slice(startIndex, endIndex);

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);
  const availableSubcategories = selectedCategoryData?.subcategories || [];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedSubcategory('all');
    setSelectedAgeGroup('all');
    setSelectedDifficulty('all');
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-fairy font-bold mb-6 gradient-text">
            Enchanted Story Collection
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-8">
            Discover over 200 magical tales from around the world. Filter by category, age group, or search for your favorite characters and themes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-stone-500">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {filteredStories.length} stories found
            </span>
            <span>•</span>
            <span>From {categories.length} categories</span>
            <span>•</span>
            <span>Multiple age groups</span>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
            {/* Search */}
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-4 h-4" />
              <Input
                placeholder="Search stories, characters, themes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={(value) => {
              setSelectedCategory(value);
              setSelectedSubcategory('all');
              setCurrentPage(1);
            }}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
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

            {/* Subcategory Filter */}
            <Select 
              value={selectedSubcategory} 
              onValueChange={(value) => {
                setSelectedSubcategory(value);
                setCurrentPage(1);
              }}
              disabled={selectedCategory === 'all' || availableSubcategories.length === 0}
            >
              <SelectTrigger>
                <SelectValue placeholder="Subcategory" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subcategories</SelectItem>
                {availableSubcategories.map(subcategory => (
                  <SelectItem key={subcategory.id} value={subcategory.id}>
                    {subcategory.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Age Group Filter */}
            <Select value={selectedAgeGroup} onValueChange={(value) => {
              setSelectedAgeGroup(value);
              setCurrentPage(1);
            }}>
              <SelectTrigger>
                <SelectValue placeholder="Age Group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ages</SelectItem>
                <SelectItem value="3-6">Ages 3-6</SelectItem>
                <SelectItem value="6-12">Ages 6-12</SelectItem>
                <SelectItem value="8-14">Ages 8-14</SelectItem>
                <SelectItem value="8-16">Ages 8-16</SelectItem>
                <SelectItem value="10-16">Ages 10-16</SelectItem>
                <SelectItem value="12+">Ages 12+</SelectItem>
              </SelectContent>
            </Select>

            {/* Difficulty Filter */}
            <Select value={selectedDifficulty} onValueChange={(value) => {
              setSelectedDifficulty(value);
              setCurrentPage(1);
            }}>
              <SelectTrigger>
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Easy">Easy</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-stone-500" />
              <span className="text-sm text-stone-600">
                Showing {currentStories.length} of {filteredStories.length} stories
              </span>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={resetFilters}
              className="text-enchanted-600 border-enchanted-300 hover:bg-enchanted-50"
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Stories Grid */}
        {currentStories.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {currentStories.map((story, index) => (
                <Card key={story.id} className={`story-card animate-fade-in group`} style={{ animationDelay: `${index * 0.05}s` }}>
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
                        {categories.find(cat => cat.id === story.category)?.name}
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
                      {story.tags.slice(0, 3).map(tag => (
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
                      <span>{story.difficulty}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) handlePageChange(currentPage - 1);
                        }}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      
                      return (
                        <PaginationItem key={pageNum}>
                          <PaginationLink
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handlePageChange(pageNum);
                            }}
                            isActive={currentPage === pageNum}
                          >
                            {pageNum}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    })}
                    
                    {totalPages > 5 && currentPage < totalPages - 2 && (
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                    )}
                    
                    <PaginationItem>
                      <PaginationNext 
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages) handlePageChange(currentPage + 1);
                        }}
                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <p className="text-xl text-stone-500 mb-4">No stories found matching your criteria.</p>
            <p className="text-stone-400 mb-8">Try adjusting your filters or search terms.</p>
            <Button 
              onClick={resetFilters} 
              className="magical-btn"
            >
              View All Stories
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default EnhancedStories;
