const router = require("express").Router();

router.get("/", (req, res) => {
  const rawQuestions = [
    {
      question: "I shave every day, but my beard stays the same. Who am I?",
      correct_answer: "A barber",
      incorrect_answers: ["A mirror", "A magician", "A werewolf"],
    },
    {
      question: "What room has no doors and no windows?",
      correct_answer: "A mushroom",
      incorrect_answers: ["A darkroom", "A vacuum", "A ghost house"],
    },
    {
      question: "Why did the scarecrow win an award?",
      correct_answer: "Because he was outstanding in his field",
      incorrect_answers: ["He scared a bird", "He looked funny", "He sang well"],
    },
    {
      question: "Why don’t eggs tell jokes?",
      correct_answer: "Because they’d crack up",
      incorrect_answers: ["Because they’re shy", "Because they’re scrambled", "Because they hate laughter"],
    },
    {
      question: "Why did the math book look sad?",
      correct_answer: "Because it had too many problems",
      incorrect_answers: ["It lost its numbers", "It couldn’t divide", "It was overdue"],
    },
    {
      question: "What has one eye but can’t see?",
      correct_answer: "A needle",
      incorrect_answers: ["A pirate", "A potato", "A donut"],
    },
    {
      question: "The more you take, the more you leave behind. What are they?",
      correct_answer: "Footsteps",
      incorrect_answers: ["Breaths", "Cookies", "Mistakes"],
    },
    {
      question: "Why was six scared of seven?",
      correct_answer: "Because 7 8 9",
      incorrect_answers: ["It tripped", "They argued", "Seven is lucky"],
    },
    {
      question: "I’m tall when I’m young, and short when I’m old. What am I?",
      correct_answer: "A candle",
      incorrect_answers: ["A giraffe", "A pencil", "An old person"],
    },
    {
      question: "What is 2 + 2?",
      correct_answer: "4",
      incorrect_answers: ["Fish", "22", "Window"],
    },
  ];

  res.status(200).json({
    time: "05:00",
    results: rawQuestions,
  });
});

module.exports = router;
