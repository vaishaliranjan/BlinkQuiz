<div align="center">
    <h1>BLINK<b>QUIZ</b></h1>
</div>

## 🎓Overview

BlinkQUIZ is a web application for all kinds of users including **Blind Users**. Users can simply log in to be able to create and join quizzes by sharing the quiz code. There might be lots of quiz-generating applications, but the idea of creating a quiz and then taking it on the same platform and evaluating the students in such an amazingly easier way is quite innovative, where a teacher will create a quiz and have control over its shareability and access. Upon enabling public access, the app will provide a unique and secure quiz code that can be shared with students. Quiz code will be used by students to join the quiz and to avoid anonymous spamming entries. A list of students and their marks in respective quizzes will be shared with the creator/ teacher of the quiz.

<img width="956" alt="image" src="https://user-images.githubusercontent.com/110801536/236526551-6d706559-7b0a-42a3-b627-0b3c9fc487e0.png">

Teacher creates a Quiz

<img width="952" alt="image" src="https://user-images.githubusercontent.com/110801536/236526856-722d5515-0c26-4221-9444-99daa4fcc1c2.png">

The Quiz code is generated

<img width="954" alt="image" src="https://github.com/VreetiAggarwal/BlinkQuiz/assets/110801536/1db796a0-1780-4fd7-9cd6-36cc20d1d572">

The student can apply this code to acces the Quiz

<img width="953" alt="image" src="https://github.com/VreetiAggarwal/BlinkQuiz/assets/110801536/646d7797-74c2-4d6b-a6d6-8c81221446e4">

<img width="952" alt="image" src="https://github.com/VreetiAggarwal/BlinkQuiz/assets/110801536/22f13aad-1a12-42cc-a7e4-2ad8eebe6915">

<img width="955" alt="image" src="https://github.com/VreetiAggarwal/BlinkQuiz/assets/110801536/c761ecfd-2e8a-4a3f-8c2f-7ccfa6938d11">

The Dashboard shows attempted Quiz

<img width="951" alt="image" src="https://github.com/VreetiAggarwal/BlinkQuiz/assets/110801536/5fdabb90-c74b-4349-8bae-53fab398ef19">


## 🚀 Configuration Guidelines

- Create an account on firebase.google.com and add the API key in the .env file.
- Add the MongoDB API key (either the local server key or from the Atlas MongoDB remote server) in backend/src/server.js.
- Install MongoDB Server if you want to use the database locally.
- Install Node.js to use npm and node services.
- Open a terminal with the path set to the root directory of the project and run `npm install` command to install the requi#3C84AB packages.
- Open a new terminal with the path set to the backend directory of the project and run `npm install` command to install the requi#3C84AB packages.
- After successful installation of all packages, run the command `npm start` in the terminal with the path set to the root directory and wait for the project to initiate.

## Supported Environments

- Windows/ macOS/ Linux operating systems are supported for the development of the respective project.

## Blind Quiz Commands

- The Blind Quiz Module works with limited Speech Commands to interact with the App.
- Press `space` to turn the microphone on.
- Voice Commands:
  - `Instructions`: To listen to all the possible commands.
  - `start Quiz`: To hear the Quiz title and first Question.
  - `Select Option [Number]`: To mark the option of the current Question.
  - `next question`: to increment the question index and move to the next question and listen to it.
  - `previous question`: to decrement the question index and move to the previous question and listen to it
  - `Repeat Question [Number]`: To hear a specific Question.
  - `Repeat Current Question`: To repeat the current Question.
  - `submit quiz`: to submit the quiz.
