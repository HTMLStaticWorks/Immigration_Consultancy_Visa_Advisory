tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        medical: {
          navy: '#1E1B18',       // Deep Obsidian Charcoal
          navyLight: '#2E2722',  // Deep Espresso
          blue: '#8C6935',       // Deep Bronze/Gold
          blueLight: '#B89047',  // Vibrant Premium Bronze (primary accent)
          cyan: '#E5C687',       // Champagne Gold (highlight accent)
          teal: '#C5B49E',       // Soft Sand Beige (secondary accent)
          light: '#F7F4EB',      // Warm Cream Off-White
          darkBg: '#12100E',     // Dark Obsidian Background
          darkCard: '#1A1816',   // Dark Espresso Card
          darkText: '#ECE7DC',   // Warm Cream Text
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      }
    }
  }
}
