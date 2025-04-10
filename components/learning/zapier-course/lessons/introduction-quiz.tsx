"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle, XCircle } from "lucide-react"

export default function IntroductionQuiz() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const quiz = {
    title: "Knowledge Check",
    description: "Test your understanding of the key concepts covered in this introduction.",
    questions: [
      {
        id: 1,
        question: "What is Zapier primarily used for?",
        options: [
          {
            id: "a",
            text: "Creating AI models from scratch",
          },
          {
            id: "b",
            text: "Connecting different applications and automating workflows",
          },
          {
            id: "c",
            text: "Replacing human workers with AI",
          },
          {
            id: "d",
            text: "Building websites and mobile apps",
          },
        ],
        correctAnswer: "b",
      },
      {
        id: 2,
        question: "How many applications can Zapier connect with?",
        options: [
          {
            id: "a",
            text: "Around 500",
          },
          {
            id: "b",
            text: "Around 1,000",
          },
          {
            id: "c",
            text: "Around 5,000",
          },
          {
            id: "d",
            text: "Around 10,000",
          },
        ],
        correctAnswer: "c",
      },
      {
        id: 3,
        question: "What is a key benefit of integrating MCP with Zapier?",
        options: [
          {
            id: "a",
            text: "It allows AI models to interact with thousands of applications",
          },
          {
            id: "b",
            text: "It makes your website load faster",
          },
          {
            id: "c",
            text: "It reduces the cost of cloud hosting",
          },
          {
            id: "d",
            text: "It improves the accuracy of AI models",
          },
        ],
        correctAnswer: "a",
      },
    ],
  }

  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerChange = (questionId: number, answerId: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerId,
    })
  }

  const handleSubmit = () => {
    let correctAnswers = 0
    quiz.questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctAnswers++
      }
    })
    setScore(correctAnswers)
    setSubmitted(true)
  }

  const handleRetry = () => {
    setSelectedAnswers({})
    setSubmitted(false)
    setScore(0)
  }

  return (
    <div
      ref={ref}
      className={`mt-12 transition-all duration-1000 transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <h2 className="text-2xl font-bold mb-6 text-white">{quiz.title}</h2>
      <p className="text-gray-300 mb-6">{quiz.description}</p>

      <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700 overflow-hidden">
        <CardContent className="p-6">
          {submitted ? (
            <div className="space-y-6">
              <div className="text-center p-4 rounded-lg bg-gray-800/50">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Your Score: {score} / {quiz.questions.length}
                </h3>
                <p className="text-gray-300">
                  {score === quiz.questions.length
                    ? "Perfect! You've mastered the introduction."
                    : score >= quiz.questions.length / 2
                      ? "Good job! You're on the right track."
                      : "Keep learning! Review the introduction material and try again."}
                </p>
              </div>

              {quiz.questions.map((question) => (
                <div key={question.id} className="space-y-3">
                  <div className="flex items-start">
                    <span className="font-medium text-white">{question.question}</span>
                  </div>

                  <RadioGroup value={selectedAnswers[question.id]} className="space-y-2" disabled>
                    {question.options.map((option) => (
                      <div
                        key={option.id}
                        className={`flex items-center space-x-2 p-3 rounded-lg ${
                          selectedAnswers[question.id] === option.id
                            ? option.id === question.correctAnswer
                              ? "bg-green-500/20 border border-green-500/30"
                              : "bg-red-500/20 border border-red-500/30"
                            : option.id === question.correctAnswer
                              ? "bg-green-500/20 border border-green-500/30"
                              : "bg-gray-800/50 border border-gray-700"
                        }`}
                      >
                        <RadioGroupItem value={option.id} id={`q${question.id}-${option.id}`} className="text-white" />
                        <Label htmlFor={`q${question.id}-${option.id}`} className="flex-1 text-gray-300">
                          {option.text}
                        </Label>
                        {selectedAnswers[question.id] === option.id ? (
                          option.id === question.correctAnswer ? (
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-400" />
                          )
                        ) : option.id === question.correctAnswer ? (
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        ) : null}
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ))}

              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white"
                onClick={handleRetry}
              >
                Try Again
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {quiz.questions.map((question) => (
                <div key={question.id} className="space-y-3">
                  <div className="flex items-start">
                    <span className="font-medium text-white">{question.question}</span>
                  </div>

                  <RadioGroup
                    value={selectedAnswers[question.id]}
                    onValueChange={(value) => handleAnswerChange(question.id, value)}
                    className="space-y-2"
                  >
                    {question.options.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center space-x-2 p-3 rounded-lg bg-gray-800/50 border border-gray-700"
                      >
                        <RadioGroupItem value={option.id} id={`q${question.id}-${option.id}`} className="text-white" />
                        <Label htmlFor={`q${question.id}-${option.id}`} className="flex-1 text-gray-300">
                          {option.text}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ))}

              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white"
                onClick={handleSubmit}
                disabled={Object.keys(selectedAnswers).length !== quiz.questions.length}
              >
                Submit Answers
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
