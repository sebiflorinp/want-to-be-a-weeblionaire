import {useState} from "react";
import questionsJSON from "../data/questions.json";
import arrayRandomizer from "../utils/arrayRandomizer.js";


export function useQuestions() {
    const [questions, setQuestions] = useState(questionsJSON);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const getAQuestion = (difficulty) => {
        // Get a question with the chosen difficulty
        let questionsToChooseFrom = questions.filter(question => question.difficulty === difficulty);

        // If there are no questions left of the same difficulty reset the pool of questions
        if (questionsToChooseFrom.length === 0) {
            const allQuestionsOfACertainDifficulty = questionsJSON.filter(question => question.difficulty === difficulty);
            setQuestions(questions => [...questions, allQuestionsOfACertainDifficulty]);
            questionsToChooseFrom = allQuestionsOfACertainDifficulty;
        }

        // Choose a random question from the ones that have the right difficulty
        questionsToChooseFrom = arrayRandomizer(questionsToChooseFrom)
        console.log(questionsToChooseFrom);
        setCurrentQuestion(questionsToChooseFrom[0])

        // Get rid of the chosen question from the list of questions available
        setQuestions(prevQuestions => prevQuestions.filter(question => question.id !== questionsToChooseFrom[0].id))
    }

    const u5050Lifeline = () => {
        let answers = ["A", "B", "C", "D"]
        let wrongAnswers = answers.filter(answer => answer !== currentQuestion.correctAnswer)
        wrongAnswers = arrayRandomizer(wrongAnswers)
        let updatedQuestion = {
            ...currentQuestion,
            answers: {
                ...currentQuestion.answers,
                [wrongAnswers[1]]: "",
                [wrongAnswers[2]]: ""
            }
        }
        console.log(updatedQuestion)

        setCurrentQuestion(prevQuestion => ({
            ...prevQuestion,
            answers: {
                ...prevQuestion.answers,
                [wrongAnswers[1]]: "",
                [wrongAnswers[2]]: "",
            }
        }))
        console.log(currentQuestion)
    }

    return {
        currentQuestion,
        questions,
        u5050Lifeline,
        getAQuestion
    }
}
