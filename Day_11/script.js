const questions = [
  {
    question: "who is the owner of bitcooin ?",
    options: ["Satoshi Nakamota", "Elon Musk", "Jeff Bezos", "Nikhil"],
  },
  {
    question: "who is the owner of bitcooin ?",
    options: ["Satoshi Nakamota", "Elon Musk", "Jeff Bezos", "Nikhil"],
  },
  {
    question: "who is the owner of bitcooin ?",
    options: ["Satoshi Nakamota", "Elon Musk", "Jeff Bezos", "Nikhil"],
  },
  {
    question: "who is the owner of bitcooin ?",
    options: ["Satoshi Nakamota", "Elon Musk", "Jeff Bezos", "Nikhil"],
  },
  {
    question: "who is the owner of bitcooin ?",
    options: ["Satoshi Nakamota", "Elon Musk", "Jeff Bezos", "Nikhil"],
  },
  {
    question: "who is the owner of bitcooin ?",
    options: ["Satoshi Nakamota", "Elon Musk", "Jeff Bezos", "Nikhil"],
  },
  {
    question: "who is the owner of bitcooin ?",
    options: ["Satoshi Nakamota", "Elon Musk", "Jeff Bezos", "Nikhil"],
  },
  {
    question: "who is the owner of bitcooin ?",
    options: ["Satoshi Nakamota", "Elon Musk", "Jeff Bezos", "Nikhil"],
  },
  {
    question: "who is the owner of bitcooin ?",
    options: ["Satoshi Nakamota", "Elon Musk", "Jeff Bezos", "Nikhil"],
  },
  {
    question: "who is the owner of bitcooin ?",
    options: ["Satoshi Nakamota", "Elon Musk", "Jeff Bezos", "Nikhil"],
  },
];

let score = 0;

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

function reveal(option) {
  const options = option.closest(".options");
  console.log(options);
  let temp = score;
  options.querySelectorAll("button").forEach((button) => {
    button.click();
  });
  score = temp;
}

function createOption(option, answer = false) {
  const optionHolder = document.createElement("div");
  optionHolder.className = "option";

  const button = document.createElement("button");
  button.innerHTML = option;
  button.addEventListener("click", () => {
    if (answer) {
      if (!button.classList.contains("correct")) {
        score++;
      }
      button.classList.add("correct");
    } else button.classList.add("wrong");
    reveal(button);
  });
  optionHolder.append(button);
  return optionHolder;
}

shuffle(questions);
questions.forEach((current, number) => {
  // console.log(current, number);
  const container = document.createElement("div");
  container.className = "container";

  const question = document.createElement("div");
  question.className = "question";
  question.innerHTML = `${number + 1}. ${current.question}`;

  container.append(question);

  const options = document.createElement("div");
  options.className = "options";

  const optionArray = [];
  current.options.forEach((option, number) => {
    if (number == 0) {
      optionArray.push(createOption(option, true));
    } else {
      optionArray.push(createOption(option));
    }

    // reveal(button);
  });

  shuffle(optionArray);
  optionArray.forEach((option) => {
    options.append(option);
  });
  container.append(options);

  document.body.append(container);
});

const showresult = document.querySelector(".result");

showresult.addEventListener("click", () => {
  showresult.innerHTML = `${score}/${questions.length}`;
});
