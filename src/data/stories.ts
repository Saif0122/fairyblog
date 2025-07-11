
export interface Story {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  image: string;
  publishDate: string;
  author: string;
  featured: boolean;
}

export const stories: Story[] = [
  {
    id: "cinderella-reimagined",
    title: "Cinderella's Digital Dreams",
    excerpt: "A modern retelling where Cinderella's fairy godmother is an AI assistant, and the glass slipper is a smart device.",
    content: `In the bustling city of Neo-London, Ella worked tirelessly at her stepfamily's tech startup. While her stepsisters attended exclusive networking events, Ella spent her nights coding in the basement office.

One evening, as she worked late debugging code, her computer screen flickered with an unusual blue light. "Hello, Ella," appeared a voice from her AI assistant. "I'm your Fairy Godmother 2.0."

The AI had been watching her dedication and kindness toward fellow coders in online forums. "You shall attend the TechBall," the AI declared, instantly updating Ella's LinkedIn profile, booking her a makeover appointment, and ordering a stunning outfit for delivery.

At the grand tech conference, Ella's innovative app idea caught the attention of Prince Charles, the event's keynote speaker and venture capitalist. They talked for hours about technology's power to help others, but Ella had to leave before revealing her identity due to her AI's security protocols.

In her rush, she dropped her smart bracelet—a prototype she'd been developing. Prince Charles used it to track down the brilliant mind behind the revolutionary app idea, leading him straight to Ella's coding sanctuary.

Their partnership blossomed into both business success and true love, proving that in the digital age, glass slippers had evolved into something far more meaningful.`,
    category: "modern",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    publishDate: "2024-01-15",
    author: "Marina Storyteller",
    featured: true
  },
  {
    id: "dragon-librarian",
    title: "The Dragon Who Loved Books",
    excerpt: "Deep in the Crystal Mountains lived Ember, a dragon with an unusual passion for collecting stories instead of treasure.",
    content: `Deep in the Crystal Mountains, where most dragons hoarded gold and jewels, lived Ember—a dragon quite different from her kin. Instead of precious metals, Ember collected something far more valuable: stories.

Her cave was lined not with glittering coins, but with thousands of books, scrolls, and manuscripts from every corner of the realm. She had learned to read from a brave librarian who had stumbled into her lair years ago, and since then, her hunger for stories had grown insatiable.

One day, young Princess Lyra arrived at Ember's cave, not to slay the dragon, but to seek help. The kingdom's Great Library had been destroyed by a terrible storm, and all their precious stories were lost.

"I've heard tales of your magnificent collection," Princess Lyra said, bowing respectfully. "Would you help us rebuild our library?"

Ember's eyes sparkled brighter than any treasure. She had been waiting her whole life for someone who understood the true value of stories. Together, they established the first Dragon-Human Library Exchange, where Ember would share her vast collection while the kingdom's citizens would bring her new tales from their travels.

The library became a place of wonder, where children would sit at the feet of a gentle dragon, listening to stories of far-off lands and magical adventures. Ember discovered that sharing stories brought her far more joy than hoarding them ever could.

And so the kingdom learned that sometimes the most fearsome creatures carry the gentlest hearts, and that true treasure lies not in gold, but in the stories that connect us all.`,
    category: "magical",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2139&q=80",
    publishDate: "2024-01-10",
    author: "Eldric Dragonheart",
    featured: true
  },
  {
    id: "red-riding-hood-detective",
    title: "Little Red and the Forest Mystery",
    excerpt: "When grandmother goes missing, Little Red puts on her detective hat to solve the case in this thrilling mystery adventure.",
    content: `Little Red was no ordinary girl. While other children played with dolls, she carried a magnifying glass and a notebook filled with observations about the world around her. So when Grandmother didn't answer her weekly video call, Red knew something was wrong.

Grabbing her famous red hoodie (equipped with hidden pockets for her detective tools), Red set off through Whispering Woods. She immediately noticed unusual signs: strange paw prints that were too big for any normal animal, and several woodland creatures huddled together in apparent fear.

At Grandmother's cottage, Red found the door ajar and clear signs of a struggle. But instead of panic, she felt the familiar thrill of a mystery to solve. Using her detective skills, she discovered tufts of gray fur, muddy footprints leading toward the old mill, and most intriguingly, a trail of breadcrumbs.

Following the clues, Red uncovered a surprising truth: the "Big Bad Wolf" was actually Wolfgang, a misunderstood creature who had been trying to protect the forest animals from poachers. Grandmother, it turned out, had been helping him by providing shelter and food.

The real villain was Mayor Grimm, who had been secretly allowing illegal hunting in the woods. When Grandmother discovered his scheme, he had her and Wolfgang captured and hidden at the abandoned mill.

Using her wits and a well-timed call to the Forest Rangers, Red exposed the mayor's crimes and rescued both Grandmother and Wolfgang. The forest was safe once again, and Red gained a new friend in the misunderstood wolf.

From that day forward, Wolfgang helped Red solve mysteries throughout the forest, proving that the best partnerships often come from the most unexpected places.`,
    category: "adventure",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    publishDate: "2024-01-08",
    author: "Detective Stories Inc.",
    featured: false
  },
  {
    id: "sleeping-beauty-baker",
    title: "The Sleepy Baker's Magical Donuts",
    excerpt: "Aurora's curse takes an unexpected turn when her century-long sleep leads to the discovery of magical overnight baking.",
    content: `Princess Aurora had always been different. Instead of traditional royal pursuits, she found joy in the castle kitchens, creating the most magnificent pastries and breads. Her special talent was baking at night when the magic in the air was strongest.

When the curse struck on her 16th birthday, instead of falling into eternal sleep, Aurora found herself in a strange state where she would sleepwalk each night to the kitchen and bake the most extraordinary treats anyone had ever tasted.

For a hundred years, the abandoned castle became famous throughout the land for the mysterious appearance of fresh, warm pastries each morning. Travelers would come from far and wide to taste these magical confections that appeared as if by magic.

The pastries had unusual properties: they could heal broken hearts, restore lost memories, and even help people find their true calling in life. The castle became a pilgrimage site for those seeking comfort and hope.

When Prince Philip finally arrived to break the curse, he found Aurora in the kitchen, flour in her hair, surrounded by the most beautiful array of golden donuts he'd ever seen. The true love's kiss didn't just wake her—it allowed her to remain conscious during her nighttime baking sessions.

Together, they opened "Aurora's Midnight Bakery," where the princess continued her magical baking, now fully awake to enjoy the joy her creations brought to others. The curse had become the kingdom's greatest blessing.

Their bakery became famous across all the lands, proving that sometimes what seems like a curse can become the very thing that brings the most happiness to the world.`,
    category: "classic",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80",
    publishDate: "2024-01-05",
    author: "Enchanted Kitchens",
    featured: true
  },
  {
    id: "three-little-pigs-architects",
    title: "The Three Architectural Prodigies",
    excerpt: "Three pig siblings revolutionize sustainable building practices while outsmarting a corporate developer who threatens their community.",
    content: `In the eco-village of Green Meadows, three pig siblings had just graduated from the prestigious Sustainable Architecture Academy. Each had different specialties: Sticks focused on renewable materials, Stones specialized in earth-friendly construction, and Bricks was a master of energy-efficient design.

When corporate developer B.B. Wolf threatened to demolish their community to build a shopping mall, the three siblings decided to prove that sustainable architecture could be both beautiful and profitable.

Sticks built the first demonstration home using innovative bamboo and recycled plastic composites. While beautiful and cost-effective, it wasn't quite strong enough to withstand the "accidental" wrecking ball that Wolf sent their way.

Stones created the second model using rammed earth and solar panels. It was more durable and completely energy self-sufficient, but Wolf's legal team found zoning loopholes to challenge its unconventional design.

Finally, Bricks combined all their knowledge to create a revolutionary building that used locally-sourced materials, passive heating and cooling, and cutting-edge smart home technology. The structure was so impressive that it attracted attention from sustainable living magazines and green investors.

When Wolf arrived with his final demolition order, he instead found a line of investors wanting to fund similar projects throughout the region. The siblings had not only saved their community but sparked a revolution in sustainable building practices.

Their success proved that innovation and collaboration could overcome even the huffing and puffing of corporate greed, and their designs became the model for eco-villages around the world.`,
    category: "modern",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    publishDate: "2024-01-03",
    author: "Green Stories Collective",
    featured: false
  },
  {
    id: "jack-cloud-computing",
    title: "Jack and the Beanstalk Server Farm",
    excerpt: "When Jack trades the family cow for quantum computing seeds, he discovers a digital realm beyond imagination.",
    content: `Jack stared at the eviction notice with growing desperation. His mother's small coffee shop was failing, and they were about to lose everything. In a moment of desperation, he traded their vintage espresso machine for what the mysterious vendor called "quantum computing seeds."

His mother was furious until Jack planted the seeds in their backyard and went to sleep. By morning, a massive tower of servers and fiber optic cables had grown overnight, reaching high into the clouds.

Climbing the technological beanstalk, Jack discovered Cloud Nine—a massive data center in the sky run by a giant corporation that was secretly harvesting data from unsuspecting users below. The CEO, a literal giant named Goliath Corp, had been stealing small businesses' customer data to crush local competition.

Jack discovered that Goliath had been specifically targeting small cafes like his mother's, using their stolen data to open competing chain stores with better locations and pricing strategies.

Using his computer programming skills learned from online tutorials, Jack managed to copy the stolen data and expose Goliath Corp's illegal practices. He also discovered quantum computing algorithms that could revolutionize small business operations.

Racing down the beanstalk with the evidence and the quantum code, Jack arrived just as Goliath's security team attempted to follow. But Jack had learned to manipulate the beanstalk's quantum properties, causing it to collapse and cutting off Goliath's access to the physical world.

With the stolen data returned and the quantum algorithms freely shared, Jack's mother's coffee shop became the first quantum-powered cafe, offering services no chain could match. Soon, small businesses everywhere were using Jack's freely shared code to compete with corporate giants.

The moral remained the same: sometimes what looks like a foolish trade can lead to the greatest discoveries.`,
    category: "adventure",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    publishDate: "2024-01-01",
    author: "TechTale Chronicles",
    featured: false
  }
];

export const categories = [
  { id: 'classic', name: 'Classic Tales', description: 'Timeless stories retold for modern audiences' },
  { id: 'modern', name: 'Modern Stories', description: 'Contemporary fairy tales set in today\'s world' },
  { id: 'adventure', name: 'Adventures', description: 'Thrilling quests and exciting journeys' },
  { id: 'magical', name: 'Magical Tales', description: 'Stories filled with wonder and enchantment' }
];

export const getStoriesByCategory = (category: string) => {
  return stories.filter(story => story.category === category);
};

export const getFeaturedStories = () => {
  return stories.filter(story => story.featured);
};

export const getStoryById = (id: string) => {
  return stories.find(story => story.id === id);
};
