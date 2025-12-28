# Hat Finder
A terminal-based pathfinding game built with JavaScript where you navigate through a field to find your hat while avoiding holes and staying within bounds.

## About
Hat Finder is a command-line game built as part of my Codecademy learning journey (Front-End Engineer course). The players starts at the top-left corner of a randomly generated field and must navigate using the keyboard controls (WASD) to locate their hat without falling into a hole or going out of bounds.

## How to Install
1. Clone this repository
2. Navigate to the project directory
3. Install dependencies:
```
npm install
```

## How to Play
1. Run the game:
```
node field_game.js
```
2. Use the following keys to move:
   - 'w' - Move up
   - 'a' - Move left
   - 's' - Move down
   - 'd' - Move right
3. **GOAL:** Find you hat '^' without falling into a hole '0' or going out of bounds

## Game Symbols
- `*` - Your current position
- `^` - Your hat (the goal)
- `O` - Holes (avoid these!)
- `░` - Safe field tiles

## Win/Lose Conditions
**You win when:** You reach the hat `^`

**You lose when:**
- You fall into a hole `O`
- You move outside the field boundaries

## Technologies Used
- JavaScript
- Node.js
- prompt-sync (for user input)

## What I Learned
- Object-oriented programming with JavaScript classes
- Game state management and game loops
- User input handling in terminal applications
- Random field generation with validation
- Problem-solving and logical thinking

---

Built with 💻 by Sierra C.S.
