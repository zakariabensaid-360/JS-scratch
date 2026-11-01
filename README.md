# JS Scratch

A learning-focused JavaScript project for rebuilding core standard library methods from the ground up.

This repository is dedicated to understanding how JavaScript built-ins work by recreating them in plain JavaScript without relying on native implementations. The goal is to deepen understanding of core language mechanics, iteration patterns, functional programming, and array/object utility design.

## Why this project exists

JavaScript’s built-in methods are incredibly useful, but many developers use them without understanding how they actually work. This project takes a hands-on approach to learning by implementing common methods such as:

- map
- filter
- reduce
- some
- every
- find
- findIndex
- includes
- flat
- flatMap
- slice
- join
- concat

The focus is not just to reproduce behavior, but to reason about edge cases, iteration, callbacks, and performance.

## Goals

- Rebuild JavaScript standard library helpers from scratch
- Improve understanding of native behavior
- Practice writing clean, testable JavaScript
- Explore recursion, iteration, and callback patterns
- Build a reference implementation for educational use

## Project philosophy

This project is intentionally simple:

- Plain JavaScript only
- No external libraries
- Minimal dependencies
- Readable, small functions
- Educational code over production optimization

## Example usage

```js
const numbers = [1, 2, 3, 4, 5];

const doubled = map(numbers, (n) => n * 2);
// [2, 4, 6, 8, 10]

const evens = filter(numbers, (n) => n % 2 === 0);
// [2, 4]

const sum = reduce(numbers, (acc, n) => acc + n, 0);
// 15

const hasThree = some(numbers, (n) => n === 3);
// true
```

## Repository structure

```text
JS-scratch/
├── src/
│   ├── array/
│   │   ├── map.js
│   │   ├── filter.js
│   │   ├── reduce.js
│   │   ├── some.js
│   │   ├── every.js
│   │   ├── find.js
│   │   └── ...
│   └── utils/
│       └── helpers.js
├── tests/
│   ├── array.test.js
│   └── ...
├── README.md
├── package.json
└── .gitignore
```

## Implementation principles

Each method should:

- behave like the native JavaScript version as closely as possible
- handle common edge cases
- support callback logic in a readable way
- be simple enough to understand and debug
- include tests to validate expected behavior

## Testing

This project should include unit tests for:

- basic functionality
- empty arrays
- callbacks with index and array arguments
- sparse arrays and edge cases
- chaining and return behavior
- incorrect or missing arguments

Example test structure:

```js
import { map } from '../src/array/map.js';

describe('map', () => {
  test('doubles each number', () => {
    expect(map([1, 2, 3], (n) => n * 2)).toEqual([2, 4, 6]);
  });

  test('works with empty arrays', () => {
    expect(map([], (n) => n * 2)).toEqual([]);
  });
});
```

## How to run locally

```bash
git clone https://github.com/your-username/JS-scratch.git
cd JS-scratch
npm install
npm test
```

If you are not using a package manager yet, you can also just open the files directly in a browser or Node environment and test them manually.

## Contributing

Contributions are welcome if they help the project grow.

You can contribute by:

- implementing a missing method
- improving an existing implementation
- adding edge-case tests
- clarifying documentation
- improving readability and structure

Before contributing, please keep the code educational and consistent with the project’s plain-JavaScript philosophy.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## A note for learners

The real value of this project is not in matching the native implementation exactly, but in understanding why the native implementation behaves the way it does. Use this project as a practice ground for:

- JavaScript callbacks
- array iteration
- function semantics
- recursion and loops
- test-driven development
- foundational language mechanics

---

If you'd like, I can also give you:
- a more polished GitHub-style README
- a README tailored for a beginner audience
- a README with badges and sections for a real repo
- a complete package.json and test setup for this project
