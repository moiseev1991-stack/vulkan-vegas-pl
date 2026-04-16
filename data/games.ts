export interface Game {
  id: string
  title: string
  provider: string
  category: 'slots' | 'live' | 'crash' | 'table' | 'instant'
  tags: ('hot' | 'network-promo' | 'drops-wins' | 'new')[]
  image: string
  isPopular: boolean
}

export const games: Game[] = [
  // Slots — shuffled order
  { id: 'gates-of-olympus-1000', title: 'Gates of Olympus 1000', provider: 'Pragmatic Play', category: 'slots', tags: ['hot', 'drops-wins'], image: '/images/games/gates-of-olympus-1000-vv.jpg', isPopular: true },
  { id: 'sugar-rush', title: 'Sugar Rush', provider: 'Pragmatic Play', category: 'slots', tags: ['drops-wins', 'hot'], image: '/images/games/sugar-rush-vv.jpg', isPopular: true },
  { id: 'book-of-ra-deluxe', title: 'Book of Ra Deluxe', provider: 'Novomatic', category: 'slots', tags: ['hot'], image: '/images/games/book-of-ra-deluxe-vv.jpg', isPopular: true },
  { id: 'big-bass-splash', title: 'Big Bass Splash', provider: 'Pragmatic Play', category: 'slots', tags: ['drops-wins', 'hot'], image: '/images/games/big-bass-splash-vv.jpg', isPopular: true },
  { id: 'vulkanspiele-joker', title: 'Vulkanspiele Joker', provider: 'BGaming', category: 'slots', tags: ['new'], image: '/images/games/vulkanspiele-joker-vv.webp', isPopular: false },
  { id: 'book-of-fallen', title: 'Book of the Fallen', provider: 'Pragmatic Play', category: 'slots', tags: ['drops-wins'], image: '/images/games/book-of-fallen-vv.jpg', isPopular: true },
  { id: 'crown-coins', title: 'Crown Coins', provider: 'Evoplay', category: 'slots', tags: ['hot'], image: '/images/games/crown-coins-vv.jpg', isPopular: true },
  { id: 'candy-craze', title: 'Candy Craze', provider: 'Evoplay', category: 'slots', tags: [], image: '/images/games/candy-craze-vv.jpg', isPopular: false },
  { id: 'seven-seven', title: 'Seven Seven', provider: 'Evoplay', category: 'slots', tags: ['hot'], image: '/images/games/seven-seven-vv.jpg', isPopular: true },
  { id: 'fortune-bags', title: 'Fortune Bags', provider: 'BGaming', category: 'slots', tags: ['new'], image: '/images/games/fortune-bags-vv.webp', isPopular: false },
  { id: 'book-of-ra-magic', title: 'Book of Ra Magic', provider: 'Novomatic', category: 'slots', tags: [], image: '/images/games/book-of-ra-magic-vv.jpg', isPopular: false },
  { id: 'cash-the-gold', title: 'Cash the Gold', provider: 'Pragmatic Play', category: 'slots', tags: ['network-promo'], image: '/images/games/cash-the-gold-vv.jpg', isPopular: false },
  { id: 'blazing-crown-deluxe', title: 'Blazing Crown Deluxe', provider: 'Gamomat', category: 'slots', tags: [], image: '/images/games/blazing-crown-deluxe-vv.jpg', isPopular: true },
  { id: 'wild-love', title: 'Wild Love', provider: 'Endorphina', category: 'slots', tags: ['network-promo'], image: '/images/games/wild-love-vv.png', isPopular: false },
  { id: 'vulkanspiele-spark', title: 'Vulkanspiele Spark', provider: 'BGaming', category: 'slots', tags: ['new'], image: '/images/games/vulkanspiele-spark-vv.png', isPopular: false },
  { id: 'joker-stoker', title: 'Joker Stoker', provider: 'Evoplay', category: 'slots', tags: [], image: '/images/games/joker-stoker-vv.jpg', isPopular: false },
  { id: 'all-ways-luck', title: 'All Ways Luck', provider: 'Amatic', category: 'slots', tags: [], image: '/images/games/all-ways-luck-vv.jpg', isPopular: false },
  // Crash games
  { id: 'spaceman', title: 'Spaceman', provider: 'Pragmatic Play', category: 'crash', tags: ['hot'], image: '/images/games/spaceman-vv.jpg', isPopular: true },
  { id: 'aviator', title: 'Aviator', provider: 'Spribe', category: 'crash', tags: ['hot'], image: '/images/games/aviator-vv.png', isPopular: true },
  { id: 'speed-crash', title: 'Speed Crash', provider: 'BGaming', category: 'crash', tags: [], image: '/images/games/speed-crash-vv.jpg', isPopular: false },
  { id: 'high-striker', title: 'High Striker', provider: 'Evoplay', category: 'crash', tags: [], image: '/images/games/high-striker-vv.png', isPopular: false },
  { id: 'high-flyer', title: 'High Flyer', provider: 'Evoplay', category: 'crash', tags: [], image: '/images/games/high-flyer-vv.jpg', isPopular: false },
  { id: 'save-the-hamster', title: 'Save the Hamster', provider: 'Evoplay', category: 'crash', tags: [], image: '/images/games/save-the-hamster-vv.jpg', isPopular: false },
]

export const liveGames: Game[] = [
  { id: 'lightning-roulette', title: 'Lightning Roulette', provider: 'Evolution', category: 'live', tags: ['hot'], image: '/images/live/lightning-roulette-vv.jpg', isPopular: true },
  { id: 'crazy-coin-flip', title: 'Crazy Coin Flip', provider: 'Evolution', category: 'live', tags: ['hot'], image: '/images/live/crazy-coin-flip-vv.png', isPopular: true },
  { id: 'blackjack-lobby', title: 'Blackjack Lobby', provider: 'Evolution', category: 'live', tags: [], image: '/images/live/blackjack-lobby-vv.jpg', isPopular: false },
  { id: 'european-roulette-vip', title: 'European Roulette VIP', provider: 'Evolution', category: 'live', tags: ['hot'], image: '/images/live/european-roulette-vip-vv.png', isPopular: true },
  { id: 'azure-blackjack', title: 'Azure Blackjack', provider: 'Pragmatic Play', category: 'live', tags: [], image: '/images/live/azure-blackjack-vv.jpg', isPopular: false },
  { id: 'immersive-roulette', title: 'Immersive Roulette', provider: 'Evolution', category: 'live', tags: [], image: '/images/live/immersive-roulette-vv.jpg', isPopular: false },
  { id: 'one-blackjack', title: 'ONE Blackjack', provider: 'Pragmatic Play', category: 'live', tags: [], image: '/images/live/one-blackjack-vv.png', isPopular: false },
  { id: 'baccarat-lobby', title: 'Baccarat Lobby', provider: 'Evolution', category: 'live', tags: [], image: '/images/live/baccarat-lobby-vv.jpg', isPopular: false },
  { id: 'roulette-lobby', title: 'Roulette Lobby', provider: 'Evolution', category: 'live', tags: [], image: '/images/live/roulette-lobby-vv.jpg', isPopular: false },
  { id: 'first-person-hilo', title: 'First Person HiLo', provider: 'Evolution', category: 'live', tags: [], image: '/images/live/first-person-hilo-vv.jpg', isPopular: false },
  { id: 'first-person-blackjack', title: 'First Person Blackjack', provider: 'Evolution', category: 'live', tags: [], image: '/images/live/first-person-blackjack-vv.webp', isPopular: false },
]
