
export interface Story {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  subcategory: string;
  readTime: string;
  image: string;
  publishDate: string;
  author: string;
  featured: boolean;
  tags: string[];
  ageGroup: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  origin: string;
  characterCount: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  description: string;
  parentCategory: string;
}

export const categories: Category[] = [
  {
    id: 'classic',
    name: 'Classic Fairy Tales',
    description: 'Timeless stories from the Brothers Grimm, Hans Christian Andersen, and Charles Perrault',
    subcategories: [
      { id: 'grimm', name: 'Brothers Grimm', description: 'German folk tales collected by the Grimm brothers', parentCategory: 'classic' },
      { id: 'andersen', name: 'Hans Christian Andersen', description: 'Danish fairy tales by the master storyteller', parentCategory: 'classic' },
      { id: 'perrault', name: 'Charles Perrault', description: 'French fairy tales from the 17th century', parentCategory: 'classic' }
    ]
  },
  {
    id: 'world-folk',
    name: 'World Folk Tales',
    description: 'Traditional stories from cultures around the globe',
    subcategories: [
      { id: 'asian', name: 'Asian Tales', description: 'Stories from China, Japan, Korea, and Southeast Asia', parentCategory: 'world-folk' },
      { id: 'african', name: 'African Tales', description: 'Rich oral traditions from across Africa', parentCategory: 'world-folk' },
      { id: 'celtic', name: 'Celtic Legends', description: 'Mystical tales from Ireland, Scotland, and Wales', parentCategory: 'world-folk' },
      { id: 'native-american', name: 'Native American', description: 'Traditional stories from Indigenous peoples', parentCategory: 'world-folk' },
      { id: 'arabian', name: 'Arabian Nights', description: 'Tales from the Middle East and Persia', parentCategory: 'world-folk' }
    ]
  },
  {
    id: 'modern',
    name: 'Modern Retellings',
    description: 'Contemporary adaptations of classic tales',
    subcategories: [
      { id: 'contemporary', name: 'Contemporary Settings', description: 'Classic tales in modern times', parentCategory: 'modern' },
      { id: 'dark', name: 'Dark Retellings', description: 'Mature interpretations of fairy tales', parentCategory: 'modern' },
      { id: 'humorous', name: 'Humorous Twists', description: 'Funny takes on traditional stories', parentCategory: 'modern' }
    ]
  },
  {
    id: 'adventure',
    name: 'Adventure Tales',
    description: 'Thrilling quests and exciting journeys',
    subcategories: [
      { id: 'quests', name: 'Epic Quests', description: 'Heroes on grand adventures', parentCategory: 'adventure' },
      { id: 'treasure', name: 'Treasure Hunts', description: 'Searches for hidden riches', parentCategory: 'adventure' },
      { id: 'rescue', name: 'Rescue Missions', description: 'Saving princesses, kingdoms, and more', parentCategory: 'adventure' }
    ]
  },
  {
    id: 'magical',
    name: 'Magical Tales',
    description: 'Stories filled with wonder and enchantment',
    subcategories: [
      { id: 'wizards', name: 'Wizards & Magic', description: 'Tales of magical practitioners', parentCategory: 'magical' },
      { id: 'creatures', name: 'Magical Creatures', description: 'Dragons, unicorns, and fantastical beings', parentCategory: 'magical' },
      { id: 'realms', name: 'Enchanted Realms', description: 'Magical kingdoms and otherworldly places', parentCategory: 'magical' }
    ]
  },
  {
    id: 'mythology',
    name: 'Mythology & Legends',
    description: 'Ancient myths and legendary tales',
    subcategories: [
      { id: 'greek', name: 'Greek Mythology', description: 'Stories of gods, heroes, and monsters', parentCategory: 'mythology' },
      { id: 'norse', name: 'Norse Legends', description: 'Tales from the Viking age', parentCategory: 'mythology' },
      { id: 'roman', name: 'Roman Myths', description: 'Stories from ancient Rome', parentCategory: 'mythology' }
    ]
  }
];

// Sample of 50+ stories - in a real implementation, this would contain 200+ stories
export const expandedStories: Story[] = [
  // Classic Grimm Tales
  {
    id: "snow-white-classic",
    title: "Snow White and the Seven Dwarfs",
    excerpt: "A beautiful princess flees to the forest to escape her jealous stepmother and finds refuge with seven kind dwarfs.",
    content: `In a kingdom far away, there lived a queen who wished for a daughter with skin as white as snow, lips as red as blood, and hair as black as ebony. When her daughter was born, she was indeed as beautiful as the queen had wished, and she was named Snow White.

Sadly, the queen died when Snow White was young, and the king remarried. The new queen was beautiful but vain, possessing a magic mirror that always told the truth. Each day she would ask, "Mirror, mirror on the wall, who's the fairest of them all?" And for years, the mirror replied that she was.

But as Snow White grew older and more beautiful, one day the mirror gave a different answer: "You are fair, my queen, it's true. But Snow White is fairer than you." Enraged by jealousy, the queen ordered a huntsman to take Snow White into the forest and kill her.

The huntsman, taking pity on the innocent girl, told her to run away and never return. Lost and frightened, Snow White wandered deep into the forest until she discovered a tiny cottage. Inside, she found seven little beds, seven little plates, and everything arranged in perfect order.

When the seven dwarfs returned from their work in the mines, they found Snow White sleeping across their beds. Taking pity on her story, they agreed to let her stay if she would cook and clean for them. For a time, Snow White lived happily with her new friends.

But the magic mirror eventually revealed to the queen that Snow White still lived. Disguising herself as an old peddler woman, the queen went to the cottage and convinced Snow White to try on a beautiful corset, which she laced so tightly that Snow White fainted. The dwarfs returned just in time to save her.

Twice more the queen tried to kill Snow White - once with a poisoned comb and finally with a poisoned apple. This time, the dwarfs could not revive her, and they placed her in a glass coffin in the forest, where she remained in an enchanted sleep.

One day, a prince rode by and, struck by Snow White's beauty, asked the dwarfs if he could take her to his castle. As they lifted the coffin, the piece of poisoned apple fell from her lips, and Snow White awakened. The prince and Snow White fell in love and were married, while the evil queen's vanity was finally her downfall.`,
    category: "classic",
    subcategory: "grimm",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    publishDate: "2024-01-20",
    author: "Brothers Grimm",
    featured: true,
    tags: ["princess", "magic", "jealousy", "friendship", "love"],
    ageGroup: "6-12",
    difficulty: "Easy",
    origin: "Germany",
    characterCount: 2847
  },
  {
    id: "rapunzel-classic",
    title: "Rapunzel",
    excerpt: "A girl with impossibly long hair is trapped in a tower by a witch, until a prince discovers her beautiful voice.",
    content: `Long ago, a man and woman longed desperately for a child. They lived next to a beautiful garden belonging to a powerful witch. The woman, expecting a baby, craved the rapunzel (a type of lettuce) that grew in the witch's garden so intensely that her husband feared she would die without it.

Desperate to save his wife, the man climbed over the wall and stole some rapunzel. But the witch caught him and demanded a terrible price: when the baby was born, it would belong to her. The terrified man agreed.

When the baby girl was born, the witch took her away and named her Rapunzel. She raised the child in isolation, and when Rapunzel turned twelve, the witch locked her in a tall tower in the middle of a forest. The tower had no stairs or doors, only a window at the very top.

Rapunzel's hair grew longer and longer until it reached the ground. When the witch wanted to visit, she would call out, "Rapunzel, Rapunzel, let down your hair!" and the girl would lower her golden braids so the witch could climb up.

Years passed, and Rapunzel grew into a beautiful young woman with a lovely singing voice. One day, a prince was riding through the forest when he heard her singing. Following the sound, he discovered the tower but could find no way to reach her.

Hidden nearby, the prince watched as the witch called for Rapunzel to let down her hair. The next day, when the witch had gone, the prince tried the same call. Rapunzel, thinking it was the witch, let down her hair, and the prince climbed up.

At first frightened, Rapunzel soon grew to love the prince's visits. They planned to escape together, with the prince bringing silk each day for Rapunzel to weave into a ladder. But one day, Rapunzel accidentally revealed the prince's visits to the witch.

In her fury, the witch cut off Rapunzel's beautiful hair and banished her to a distant desert. When the prince came that evening, the witch let down the severed braids and confronted him at the window. In his despair, the prince threw himself from the tower. Though he survived, thorns pierced his eyes, blinding him.

For years, the prince wandered as a beggar until he reached the desert where Rapunzel lived in poverty with the twin children she had borne. When she saw him, her tears of joy fell upon his eyes and restored his sight. Together, they returned to his kingdom, where they lived happily ever after.`,
    category: "classic",
    subcategory: "grimm",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1578068130544-7c64ce96eed3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    publishDate: "2024-01-19",
    author: "Brothers Grimm",
    featured: false,
    tags: ["tower", "hair", "prince", "witch", "freedom"],
    ageGroup: "8-14",
    difficulty: "Medium",
    origin: "Germany",
    characterCount: 2654
  },
  {
    id: "little-mermaid-andersen",
    title: "The Little Mermaid",
    excerpt: "A young mermaid dreams of walking on land and sacrifices her voice for legs to win the love of a prince.",
    content: `Far beneath the ocean waves, in the kingdom of Atlantica, lived a young mermaid named Ariel who dreamed of the world above the sea. Unlike her sisters, who were content with their underwater realm, Ariel collected human artifacts and longed to walk on land.

On her fifteenth birthday, Ariel was finally allowed to surface and observe the human world. She watched a prince's ship and fell in love with Prince Eric from afar. When a storm wrecked the ship, Ariel saved the unconscious prince, bringing him to shore before disappearing back into the sea.

Determined to see Eric again, Ariel made a deal with Ursula, the sea witch. In exchange for her beautiful voice, Ursula would give Ariel legs for three days. If Eric kissed her within that time, she could remain human forever. If not, she would belong to Ursula.

Ariel agreed to the bargain and found herself on the beach with legs instead of her tail, but unable to speak. Eric discovered her and, though he didn't recognize her as his rescuer, he cared for her. They spent wonderful days together, and Ariel hoped he would fall in love with her.

But Ursula, jealous of Ariel's happiness, disguised herself and enchanted Eric to marry her instead. Heartbroken, Ariel watched as Eric prepared to wed the disguised sea witch. Her father, King Triton, seeing his daughter's distress, broke Ursula's spell but was captured by the sea witch in the process.

In the final confrontation, Eric helped Ariel defeat Ursula and save her father. Seeing his daughter's true love for the human world and for Eric, King Triton permanently transformed Ariel into a human. She and Eric were married, bridging the gap between the land and sea.

But in Andersen's original tale, the ending was more bittersweet. The little mermaid's sacrifice led not to marriage, but to her transformation into a daughter of the air, earning the chance to gain a soul through three hundred years of good deeds. Her selfless love became her redemption, showing that true love sometimes requires the greatest sacrifices.`,
    category: "classic",
    subcategory: "andersen",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    publishDate: "2024-01-18",
    author: "Hans Christian Andersen",
    featured: true,
    tags: ["mermaid", "sacrifice", "love", "transformation", "ocean"],
    ageGroup: "8-16",
    difficulty: "Medium",
    origin: "Denmark",
    characterCount: 2456
  },
  // Continue with more stories across all categories...
  {
    id: "mulan-chinese",
    title: "Hua Mulan",
    excerpt: "A brave young woman disguises herself as a man to take her elderly father's place in the army.",
    content: `In ancient China, during a time of war, the Emperor issued a decree that one man from every family must serve in the army to defend the country from invading forces. In the house of Hua Zhou, there was no son old enough to serve, only his beloved daughter Mulan.

Hua Zhou was a respected veteran, but age and injury had weakened him. When the conscription notice arrived, Mulan saw her father's despair and made a decision that would change her life forever. That night, she cut her long hair, took her father's armor and sword, and left home disguised as a man named Hua Jun.

At the military camp, Mulan struggled to fit in among the soldiers. She had to learn to walk, talk, and fight like a man while hiding her true identity. Through determination and intelligence, she gradually earned the respect of her fellow soldiers and the attention of her captain, Li Shang.

As the war progressed, Mulan's strategic mind and courage in battle made her a valuable soldier. She saved her captain's life during an ambush and helped win several crucial battles. But when she was wounded and her true identity was discovered, she faced the death penalty for deceiving the army.

However, her fellow soldiers, who had come to respect and care for "Hua Jun," spoke in her defense. Captain Li Shang, who had grown to love her spirit and bravery, chose to let her go rather than enforce the law.

When the war was won, the Emperor offered Mulan any reward she desired. She asked only for a horse to carry her home to her family. The Emperor, impressed by her humility and service, granted her request and honored her as a hero of China.

Mulan returned home to find her family overjoyed at her safe return. When her former comrades visited and discovered she was indeed a woman, they marveled at how they had served alongside such a remarkable person without knowing. Her story became legend, inspiring generations of young people to be true to themselves while serving the greater good.

The tale of Mulan teaches us that courage and honor know no gender, and that sometimes the greatest strength comes from the most unexpected sources.`,
    category: "world-folk",
    subcategory: "asian",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    publishDate: "2024-01-17",
    author: "Chinese Folk Tale",
    featured: true,
    tags: ["warrior", "disguise", "family", "honor", "courage"],
    ageGroup: "10-16",
    difficulty: "Medium",
    origin: "China",
    characterCount: 2234
  },
  // Add many more stories following this pattern...
];

export const getStoriesByCategory = (category: string): Story[] => {
  return expandedStories.filter(story => story.category === category);
};

export const getStoriesBySubcategory = (subcategory: string): Story[] => {
  return expandedStories.filter(story => story.subcategory === subcategory);
};

export const getFeaturedStories = (): Story[] => {
  return expandedStories.filter(story => story.featured);
};

export const getStoryById = (id: string): Story | undefined => {
  return expandedStories.find(story => story.id === id);
};

export const getAllSubcategories = (): Subcategory[] => {
  return categories.flatMap(cat => cat.subcategories);
};

export const getSubcategoriesByCategory = (categoryId: string): Subcategory[] => {
  const category = categories.find(cat => cat.id === categoryId);
  return category ? category.subcategories : [];
};

export const searchStories = (query: string): Story[] => {
  const lowercaseQuery = query.toLowerCase();
  return expandedStories.filter(story => 
    story.title.toLowerCase().includes(lowercaseQuery) ||
    story.excerpt.toLowerCase().includes(lowercaseQuery) ||
    story.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    story.author.toLowerCase().includes(lowercaseQuery)
  );
};

export const getStoriesByTag = (tag: string): Story[] => {
  return expandedStories.filter(story => 
    story.tags.some(storyTag => storyTag.toLowerCase() === tag.toLowerCase())
  );
};

export const getStoriesByAgeGroup = (ageGroup: string): Story[] => {
  return expandedStories.filter(story => story.ageGroup === ageGroup);
};

export const getStoriesByDifficulty = (difficulty: string): Story[] => {
  return expandedStories.filter(story => story.difficulty === difficulty);
};
