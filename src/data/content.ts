export interface Author {
  slug: string;
  name: string;
  tagline: string;
  bio: string;
  genres: string[];
  comparableAuthors: string[];
  status: 'active' | 'coming-soon';
}

export interface Book {
  slug: string;
  title: string;
  authorSlug: string;
  authorName: string;
  seriesName?: string;
  seriesSlug?: string;
  bookNumber?: number;
  tagline: string;
  blurb: string;
  shortBlurb: string;
  genres: string[];
  status: 'complete' | 'editing' | 'coming-soon';
  amazonKeywords: string[];
}

export const authors: Author[] = [
  {
    slug: 'rk-ashvane',
    name: 'R.K. Ashvane',
    tagline: 'Classic Prose Meets the Dark Fantasy Edge.',
    bio: `R.K. Ashvane is a craftsperson of dark fantasy, dedicated to exploring the resilience of the human spirit within the shadowed halls of The Ashmark. With the debut series, Songs of the Fallen, Ashvane establishes a universe where history is a heavy burden and magic comes at a terrible cost. Writing with a balanced, classic prose style, Ashvane prioritizes a natural rhythm and measured pacing, allowing the tension to build slowly and inexorably rather than relying on frenetic action. This traditional narrative flow makes complex worlds accessible to a broad audience without sacrificing the depth required by hardcore genre fans. Ashvane's writing philosophy is rooted in the belief that grimdark need not be nihilistic; instead, it is a canvas to paint the enduring strength of characters pushed to their absolute limits.`,
    genres: ['Grimdark Fantasy', 'Epic Fantasy'],
    comparableAuthors: ['John Gwynne', 'Anthony Ryan', 'Brian Staveley'],
    status: 'active',
  },
  {
    slug: 'df-bruno',
    name: 'D.F.Bruno',
    tagline: 'Where progression meets prose.',
    bio: `D.F.Bruno writes high-energy progression fantasy where every fight scene crackles with urgency. The prose style shifts dynamically between rapid-fire action sequences and introspective character moments, creating a rhythm that mirrors the genre's blend of adrenaline and growth. The narrative voice maintains an intimate, close third-person perspective that puts readers directly inside the protagonist's head — feeling every heartbeat, every surge of power, every gut-punch of defeat. Gritty, kinetic prose with short punchy sentences during action. Lyrical introspection during quiet beats. First-person-limited feel even in third person. Sensory-heavy.`,
    genres: ['LitRPG', 'Progression Fantasy', 'Science Fantasy'],
    comparableAuthors: ['Will Wight', 'Django Wexler', 'Andrew Rowe'],
    status: 'active',
  },
  {
    slug: 'vk-hollow',
    name: 'V.K. Hollow',
    tagline: 'Descend. Adapt. Survive.',
    bio: `V.K. Hollow is a specialist in underground adventure and emotion-based magic systems. The writing balances methodical world-building with pulse-pounding combat, treating every battle as a tactical puzzle while never losing sight of the emotional core that drives characters forward. LitRPG elements emerge naturally from the story rather than feeling pasted on — systems serve narrative, not the other way around. Methodical progression with tactical combat scenes. Emotion-driven character growth. Third-person limited. Balances action with strategic thinking.`,
    genres: ['LitRPG', 'Progression Fantasy', 'Dungeon Crawler'],
    comparableAuthors: ['Jeff Sproul', 'J.R. Castle', 'Michael Chatfield'],
    status: 'active',
  },
  // Placeholder pen names
  {
    slug: 'pen-name-4',
    name: 'TBA',
    tagline: 'A new voice joins the forge.',
    bio: '',
    genres: [],
    comparableAuthors: [],
    status: 'coming-soon',
  },
  {
    slug: 'pen-name-5',
    name: 'TBA',
    tagline: 'Another story awaits its telling.',
    bio: '',
    genres: [],
    comparableAuthors: [],
    status: 'coming-soon',
  },
];

export const books: Book[] = [
  {
    slug: 'iron-hymn',
    title: 'Iron Hymn',
    authorSlug: 'rk-ashvane',
    authorName: 'R.K. Ashvane',
    seriesName: 'Songs of the Fallen',
    seriesSlug: 'songs-of-the-fallen',
    bookNumber: 1,
    tagline: 'When gods die, only iron remains.',
    blurb: `Sister Vaela once marched to the rhythm of a living goddess, her blade a verse in the Iron Hymn that kept the Ashmark from tearing itself apart. But when the music stopped amidst the butchered bodies of the Siege of Oakhaven, silence became the only prayer left unanswered. Now, stripped of her station and haunted by the ghosts of a faith that abandoned her, Vaela walks a path paved with blood and betrayal. The kingdom is rotting from within, and the only hope for resurrection lies in a forbidden ritual that demands a price higher than death itself. She must navigate a political landscape where gods are dying and kings are mere meat for the grinder, forcing her to ally with the very heretics she once burned. In the Ashmark, faith is a weapon, and silence is the deadliest sound of all.`,
    shortBlurb: `Disgraced war-priestess Sister Vaela seeks to resurrect her silent goddess in a world of blood and betrayal. But in the grimdark Ashmark, faith is a weapon, and her soul is the price.`,
    genres: ['Grimdark Fantasy', 'Epic Fantasy'],
    status: 'complete',
    amazonKeywords: ['grimdark fantasy series', 'dark fantasy magic system', 'epic fantasy anti-hero', 'fallen gods fantasy', 'war priestess fantasy'],
  },
  {
    slug: 'voidwalker',
    title: 'VoidWalker',
    authorSlug: 'df-bruno',
    authorName: 'D.F.Bruno',
    seriesName: 'Echoes of Caelus',
    seriesSlug: 'echoes-of-caelus',
    bookNumber: 1,
    tagline: 'The void doesn\'t just take. It changes you.',
    blurb: `In the corporate-controlled depths of the Caelus Universe, void technology keeps humanity alive—and drives them mad. Jaxson is just a maintenance worker on a dying station, until he discovers what AetherCorp has been hiding in the dark spaces between dimensions. The void energy that powers faster-than-light travel, advanced computation, and limited reality manipulation comes with a terrible cost: psychological decay, physical transformation, and the hungry attention of incomprehensible entities lurking beyond the veil. Now Jaxson holds the key to technology that could free humanity from corporate tyranny—or tear reality apart.`,
    shortBlurb: `In the Caelus Universe, void technology keeps humanity alive—and drives them mad. When maintenance worker Jaxson discovers AetherCorp's darkest secret, he must choose between corporate slavery and a power that could consume him.`,
    genres: ['LitRPG', 'Progression Fantasy', 'Science Fantasy'],
    status: 'complete',
    amazonKeywords: ['dark science fiction space opera', 'litrpg progression fantasy space station', 'corporate dystopia sci fi horror', 'void magic science fantasy series'],
  },
  {
    slug: 'the-awakening',
    title: 'The Awakening',
    authorSlug: 'df-bruno',
    authorName: 'D.F.Bruno',
    tagline: 'Some powers don\'t sleep. They wait.',
    blurb: `A standalone progression fantasy from D.F.Bruno. When the ancient systems that govern reality begin to stir, one person finds themselves at the epicenter of a change that could reshape everything they know about power, growth, and the price of becoming more than human.`,
    shortBlurb: `A standalone progression fantasy. When ancient systems governing reality begin to stir, one person stands at the epicenter of a transformation that could reshape everything.`,
    genres: ['Progression Fantasy', 'LitRPG'],
    status: 'complete',
    amazonKeywords: ['progression fantasy standalone', 'litrpg awakening', 'power fantasy book'],
  },
  {
    slug: 'baildurs-pass',
    title: 'Baildur\'s Pass',
    authorSlug: 'vk-hollow',
    authorName: 'V.K. Hollow',
    tagline: 'Descend. Adapt. Survive.',
    blurb: `Deep beneath the surface world lies The Sunless Depths — vast tunnel networks containing massive settlements of orcs, dwarves, and goblins. Magic and combat abilities are rare, granted only to those driven by genuine need. Skills develop based on what a person wants and enjoys doing. Baildur's Pass follows a protagonist who must navigate this underground labyrinth, where every descent brings new dangers and every survival requires adaptation. In the depths, emotion fuels power, and the only way out is through.`,
    shortBlurb: `In The Sunless Depths, magic comes from genuine need and skills grow from desire. Navigate vast underground tunnels where emotion fuels power and the only way out is through.`,
    genres: ['LitRPG', 'Dungeon Crawler', 'Progression Fantasy'],
    status: 'editing',
    amazonKeywords: ['dungeon crawler litrpg', 'underground fantasy adventure', 'emotion based magic system', 'progression fantasy tunnels'],
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

export function getBooksByAuthor(authorSlug: string): Book[] {
  return books.filter((b) => b.authorSlug === authorSlug);
}

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}

export function getBooksBySeries(seriesSlug: string): Book[] {
  return books.filter((b) => b.seriesSlug === seriesSlug);
}

export function getGenreClass(genre: string): string {
  const map: Record<string, string> = {
    'Grimdark Fantasy': 'genre-grimdark',
    'Epic Fantasy': 'genre-grimdark',
    'LitRPG': 'genre-litrpg',
    'Progression Fantasy': 'genre-progression',
    'Science Fantasy': 'genre-litrpg',
    'Dungeon Crawler': 'genre-dungeon',
  };
  return map[genre] || 'genre-progression';
}
