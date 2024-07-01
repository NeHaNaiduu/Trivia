# React Trivia

This is a simple quiz application built with React, where users can test their knowledge by answering a series of questions.

## Features

- Displays questions loaded from a `questions.json` file.
- Allows users to select answers and provides immediate feedback on correctness.
- Tracks and displays the user's score.
- Includes a restart button to begin the quiz again.

## Technologies Used

- React
- JavaScript (ES6+)
- HTML/CSS

## Usage

- Click the "Get started" button to begin the quiz.
- Select an answer for each question by clicking on the option.
- Receive immediate feedback on whether your answer is correct or incorrect.
- Click "Next Question" to proceed to the next question.
- After answering all questions, view your final score and click "Restart" to start over.

## File Structure

```
react-quiz-app/
├── public/
│   ├── index.html
│   └── bg.mp4
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── questions.json
│   └── index.js
├── package.json
└── README.md
```

- **`public/`**: Contains the `index.html` file and any static assets like videos (`bg.mp4` in this case).
- **`src/`**: Contains the source code for the React application.
  - **`App.css`**: Styles for the application.
  - **`App.js`**: Main React component where the quiz logic and UI are implemented.
  - **`questions.json`**: JSON file containing quiz questions and answer options.
  - **`index.js`**: Entry point of the React application.

