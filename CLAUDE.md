# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Word Master is a dual-purpose flashcard application for elementary school students, supporting both vocabulary learning and math practice. The application uses interactive flashcards with flip animations to display questions and answers.

## Architecture

This is a vanilla HTML/CSS/JavaScript application with no build system or package dependencies. The codebase consists of two parallel applications sharing common styling:

### Vocabulary Application (index.html)
- **index.html**: Entry point for vocabulary flashcards
- **assets/data/vocabulary-data.js**: Contains vocabulary word sets organized by semester
- **assets/js/main.js**: Application logic for vocabulary flashcards
- **assets/css/main.css**: Shared styling for both applications

### Math Application (math.html)
- **math.html**: Entry point for math flashcards
- **assets/data/math-data.js**: Contains math questions organized by grade level
- **assets/js/math.js**: Application logic for math flashcards
- **assets/css/math.css**: Additional styling specific to math pages

## Data Structure

### Vocabulary Data (vocabulary-data.js)
The `vocabularyData` object contains three semester-based word sets:
- `fall_2024`: Fall 2024 vocabulary
- `winter_2024`: Winter 2024 vocabulary
- `spring_2025`: Spring 2025 vocabulary (currently default)

Each word object:
```javascript
{ "word": "example", "part_of_speech": "n.", "definition": "a representative sample" }
```

### Math Data (math-data.js)
The `mathData` object contains three grade-level question sets:
- `grade1`: Grade 1 math questions
- `grade2`: Grade 2 math questions
- `grade3`: Grade 3 math questions (currently default)

Each question object:
```javascript
{ "question": "What is 8 × 7?", "answer": "56", "topic": "Multiplication" }
```

## Shared Functionality

Both applications follow the same pattern:

- **Card Flipping**: CSS 3D transforms for flip animation between front and back
- **Navigation**: Next/Back buttons with automatic reshuffling at end of deck
- **Settings Panel**: Bootstrap accordion for configuration options
- **Counter Display**: Shows current position in the deck (e.g., "3/20")
- **Automatic Shuffling**: Fisher-Yates shuffle algorithm on initialization and deck completion

### Vocabulary-Specific Features
- Toggle to display word or definition on card front
- Part of speech displayed with both word and definition

### Math-Specific Features
- Question always on front, answer on back
- Topic label displayed with answer

## Development

No build process required:
- Open `index.html` or `math.html` directly in browser
- Uses CDN resources for Bootstrap 5.3.3

## Adding Content

### Adding Vocabulary Words
Edit `assets/data/vocabulary-data.js` and add entries to the appropriate semester array.

### Adding Math Questions
Edit `assets/data/math-data.js` and add entries to the appropriate grade level array.

## Configuration

Default selections are controlled by `checked` attributes in HTML:
- Vocabulary defaults to Spring 2025: `index.html:56`
- Math defaults to Grade 3: `math.html:42`