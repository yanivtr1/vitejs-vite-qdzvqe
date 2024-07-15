import React, { useState } from 'react';

const exercises = [
  { question: "1. Io studio lingue...e tu?", answer: "Anch'io studio lingue." },
  { question: "2. Noi abitiamo in centro. E voi?", answer: "Anche noi abitiamo in centro." },
  { question: "3. Mia madre va in vacanza in agosto. E la tua?", answer: "Anche lei va in vacanza in agosto." },
  { question: "4. La settimana prossima vado al mare. E tu?", answer: "Anch'io vado al mare." },
  { question: "5. Il mio ragazzo non sa nuotare. E il tuo?", answer: "Neanche lui sa nuotare." },
  { question: "6. Io non riesco a dimagrire. E tu?", answer: "Neanch'io riesco a dimagrire." },
  { question: "7. Gli studenti italiani mangiano alla mensa. E gli studenti inglesi?", answer: "Anche loro mangiano alla mensa." },
  { question: "8. Gli studenti italiani possono lavorare a tempo pieno. E gli studenti americani?", answer: "Anche loro possono lavorare a tempo pieno." },
  { question: "9. I miei amici non suonano la chitarra. E i tuoi?", answer: "Neanche loro suonano la chitarra." },
  { question: "10. Noi non beviamo il vino. E voi?", answer: "Neanche noi beviamo il vino." }
];

const Exercise = ({ question, answer, onNext }) => {
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.toLowerCase().trim() === answer.toLowerCase()) {
      setFeedback('Correct!');
    } else {
      setFeedback(`Incorrect. The correct answer is: ${answer}`);
    }
  };

  return (
    <div>
      <p>{question}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your answer"
        />
        <button type="submit">Check</button>
      </form>
      {feedback && (
        <div>
          <p>{feedback}</p>
          <button onClick={onNext}>Next Exercise</button>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [currentExercise, setCurrentExercise] = useState(0);

  const handleNext = () => {
    setCurrentExercise((prev) => (prev + 1) % exercises.length);
  };

  return (
    <div>
      <h1>Italian Language Learning: Anche and Neanche</h1>
      <Exercise
        question={exercises[currentExercise].question}
        answer={exercises[currentExercise].answer}
        onNext={handleNext}
      />
      <p>Progress: {currentExercise + 1} / {exercises.length}</p>
    </div>
  );
};

export default App;