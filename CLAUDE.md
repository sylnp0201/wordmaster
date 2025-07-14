# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Word Master is a vocabulary flashcard application built for elementary school students, specifically designed for 3rd grade vocabulary learning. The application displays vocabulary words with their definitions, parts of speech, and allows users to flip between word and definition views.

## Architecture

This is a vanilla HTML/CSS/JavaScript application with no build system or package dependencies:

- **index.html**: Main application entry point with Bootstrap UI components
- **assets/css/main.css**: Custom styling for flashcard animations and responsive design
- **assets/js/main.js**: Core application logic containing word data and flashcard functionality

## Key Components

### Word Data Structure
The application contains three word sets stored as JavaScript arrays in `main.js`:
- `fall_2024_words`: Fall 2024 vocabulary set
- `winter_2024_words`: Winter 2024 vocabulary set  
- `spring_2025_words`: Spring 2025 vocabulary set (currently default)

Each word object contains:
```javascript
{ "word": "example", "part_of_speech": "n.", "definition": "a representative sample" }
```

### Core Functionality
- **Card Flipping**: CSS 3D transforms create flip animation between word and definition
- **Navigation**: Next/Back buttons with automatic shuffling when reaching end
- **Settings**: Toggle between showing word or definition on front, select word sets
- **Counter**: Displays current position in word set

### State Management
Key global variables in `main.js`:
- `words`: Current active word set
- `currentIndex`: Position in current word set
- `word_on_front`: Boolean for display preference
- `unUsedIndices`: Array tracking word usage (currently unused)

## Development

Since this is a static web application with no build process:
- Open `index.html` directly in a browser for testing
- No installation or build commands required
- Uses CDN resources for Bootstrap and Font Awesome

## Adding New Words

To add vocabulary words, modify the appropriate word array in `assets/js/main.js`. Follow the existing structure with word, part_of_speech, and definition fields.

## Current Word Set Default

The application defaults to Spring 2025 words (`words-latest` radio button checked). To change the default, modify the `checked` attribute in the HTML radio buttons in `index.html:57`.