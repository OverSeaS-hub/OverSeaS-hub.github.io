const myQuestions = [
	{
		question: "A l'origine, comment s'appelait la borne d'arcade de Pac-Man ?",

		answers: {
			a: "Poc-Man",
			b: "Pif-Man",
			c: "Puck-Man",
			d: "Le gras c'est la vie",
		},
		correctAnswer: "c",
	},

	{
		question: "Quel jeu est dédié à Luigi ?",

		answers: {
			a: "Plomber Fighter",
			b: "Legend of Luigi",
			c: "Luigi's Mansion",
			d: "Paper Mario",
		},
		correctAnswer: "c",
	},

	{
		question:
			"De quand date la première apparition du célèbre plombier moustachu de chez Nintendo ?",

		answers: {
			a: "1981, Donkey Kong",
			b: "1983, The original Mario Bros.",
			c: "1985, Super Mario Bros",
			d: "1992, mario kart",
		},
		correctAnswer: "a",
	},

	{
		question: "Quand fut créé le premier jeu en 3D, et quel est son nom ?",

		answers: {
			a: "Wolfenstein 3D en 1992",
			b: "Spasim en 1974",
			c: "Maze War en 1974",
			d: "Vol Libre en 1980",
		},
		correctAnswer: "c",
	},

	{
		question: "Quel fut le Game of the Year en 2022 ?",

		answers: {
			a: "Final Fantasy XIV",
			b: "God of War: Ragnarôk",
			c: "Stray",
			d: "Elden Ring",
		},
		correctAnswer: "d",
	},

	{
		question:
			"Quel langage de code a été utilisé pour faire Minecraft, et sous quel script tourne-t'il ?",

		answers: {
			a: "Html et Powershell",
			b: "C# et Ruby",
			c: "C++ et Python",
			d: "Java et Javascript",
		},
		correctAnswer: "d",
	},

	{
		question:
			"Quel niveau les développeurs adorent mettre dans les jeux pourris de JdG ?",

		answers: {
			a: "Le niveau dans une usine",
			b: "Le niveau dans les égouts",
			c: "Le niveau labyrinth",
			d: "Le niveau couloirs pour planter la caméra",
		},
		correctAnswer: "b",
	},

	{
		question: "En quelle année sort la Xbox, suivi de la gamecube ?",

		answers: {
			a: "1964",
			b: "2002",
			c: "2003",
			d: "2004",
		},
		correctAnswer: "b",
	},

	{
		question:
			"Avant la playstation 2, quelle était la console la plus vendue au monde ?",

		answers: {
			a: "Gameboy",
			b: "Mega Drive",
			c: "Super Nintendo",
			d: "Nintendo 64",
		},
		correctAnswer: "a",
	},

	{
		question: "En quelle année est sorti le tout premier GTA ?",

		answers: {
			a: "1996",
			b: "1998",
			c: "1995",
			d: "1997",
		},
		correctAnswer: "d",
	},

	{
		question:
			"Qui est le rappeur qui incarne le boss des badguy dans le jeu DefJam: Fight for New-York ?",

		answers: {
			a: "Eminem",
			b: "Snoop Dogg",
			c: "50 cent",
			d: "Booba",
		},
		correctAnswer: "b",
	},

	{
		question:
			"Quel est le titre que porte notre personnage dans l'histoire de Final Fantasy XIV ?",

		answers: {
			a: "Sauveur d'Eorzéa",
			b: "Guerrier de la Lumière",
			c: "Guerrier des Ténèbres",
			d: "Héritier de la 7e Aube",
		},
		correctAnswer: "b",
	},
];

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(
	questions,
	quizContainer,
	resultsContainer,
	submitButton,
) {
	function showQuestions(questions, quizContainer) {
		// we'll need a place to store the output and the answer choices
		const output = [];
		let answers;

		// for each question...
		for (let i = 0; i < questions.length; i++) {
			// first reset the list of answers
			answers = [];

			// for each available answer...
			for (letter in questions[i].answers) {
				// ...add an html radio button
				answers.push(
					`<label><input type="radio" name="question${i}" value="${letter}">${letter}: ${questions[i].answers[letter]}</label>`,
				);
			}

			// add this question and its answers to the output
			output.push(
				`<div class="question">${questions[i].question}</div><div class="answers">${answers.join("")}</div>`,
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join("");
	}

	function showResults(questions, quizContainer, resultsContainer) {
		// gather answer containers from our quiz
		const answerContainers = quizContainer.querySelectorAll(".answers");

		// keep track of user's answers
		let userAnswer = "";
		let numCorrect = 0;

		// for each question...
		for (let i = 0; i < questions.length; i++) {
			// find selected answer
			userAnswer = answerContainers[i].querySelector(
				`input[name=question${i}]:checked`,
			)?.value;

			// if answer is correct
			if (userAnswer === questions[i].correctAnswer) {
				// add to the number of correct answers
				numCorrect++;

				// color the answers green
				answerContainers[i].style.color = "lightgreen";
			}
			// if answer is wrong or blank
			else {
				// color the answers red
				answerContainers[i].style.color = "red";
			}
		}

		// show number of correct answers out of total
		resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
	}

	// show questions right away
	showQuestions(questions, quizContainer);

	// on submit, show results
	submitButton.onclick = () => {
		showResults(questions, quizContainer, resultsContainer);
		submitButton.disabled = true;
	};
}
