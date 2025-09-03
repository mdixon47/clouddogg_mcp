import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Foundations of Prompt Engineering - AI Prompt Engineering - CloudDogg MCP Learning",
  description: "Learn the fundamentals of prompt engineering and how language models interpret prompts.",
}

export default function FoundationsOfPromptEngineeringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100 dark:bg-gradient-to-b dark:from-gray-950 dark:to-gray-900 dark:text-gray-100 light:bg-gradient-to-b light:from-blue-50 light:to-white light:text-gray-800">
      <div className="relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl dark:bg-green-500/10 light:bg-green-500/5" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl dark:bg-emerald-500/10 light:bg-emerald-500/5" />

        <main className="pt-32 pb-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-3/4">
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent dark:from-green-400 dark:via-emerald-300 dark:to-teal-400 light:from-green-600 light:via-emerald-500 light:to-teal-600">
                    Module 1: Foundations of Prompt Engineering
                  </h1>
                  <p className="text-xl text-gray-300 light:text-gray-700">
                    Understanding how AI models interpret prompts
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 mb-8 light:bg-white light:border-gray-200 light:shadow-md">
                  <div className="aspect-w-16 aspect-h-9 mb-6">
                    <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center light:bg-gray-100">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-400 light:text-gray-600">Video player will appear here</p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-4 text-white light:text-gray-800">How Language Models Work</h2>

                  <div className="prose prose-invert max-w-none light:prose-light">
                    <p>
                      Large Language Models (LLMs) like GPT-4, Claude, and others are based on transformer architectures
                      that process text as sequences of tokens. Understanding how these models work is essential for
                      effective prompt engineering.
                    </p>

                    <h3>Key Concepts in Language Models</h3>

                    <ul>
                      <li>
                        <strong>Tokens</strong>: LLMs process text as tokens, which can be words, parts of words, or
                        individual characters. The model has a context window that limits how many tokens it can process
                        at once.
                      </li>
                      <li>
                        <strong>Training Data</strong>: LLMs are trained on vast datasets of text from the internet,
                        books, and other sources. This training data shapes what the model knows and how it responds.
                      </li>
                      <li>
                        <strong>Prediction</strong>: At its core, an LLM predicts the next token in a sequence based on
                        the tokens that came before it. This simple mechanism allows it to generate coherent text.
                      </li>
                      <li>
                        <strong>Context Window</strong>: This is the number of tokens the model can "see" at once. For
                        example, GPT-4 has a context window of up to 32,000 tokens, while earlier models had much
                        smaller windows.
                      </li>
                    </ul>

                    <h3>How Prompts Influence Model Behavior</h3>

                    <p>
                      When you provide a prompt to an LLM, you're essentially giving it a starting point for its text
                      generation. The model will attempt to continue the text in a way that's consistent with both its
                      training data and the specific context you've provided.
                    </p>

                    <p>
                      This means that the way you phrase your prompt has a significant impact on the response you'll
                      receive. A well-crafted prompt provides:
                    </p>

                    <ul>
                      <li>Clear instructions about what you want</li>
                      <li>Necessary context for the model to understand the task</li>
                      <li>Examples or demonstrations if needed (few-shot learning)</li>
                      <li>Constraints or guidelines for the response format</li>
                    </ul>

                    <h3>Model Limitations</h3>

                    <p>Understanding the limitations of LLMs is crucial for effective prompt engineering:</p>

                    <ul>
                      <li>
                        <strong>Knowledge Cutoff</strong>: Models have a training cutoff date and don't know about
                        events after that date.
                      </li>
                      <li>
                        <strong>Hallucinations</strong>: Models can generate plausible-sounding but incorrect
                        information.
                      </li>
                      <li>
                        <strong>Reasoning Limitations</strong>: Complex logical reasoning or mathematical calculations
                        can be challenging.
                      </li>
                      <li>
                        <strong>Bias</strong>: Models can reflect biases present in their training data.
                      </li>
                    </ul>

                    <p>
                      In the next lesson, we'll explore the anatomy of an effective prompt and how to structure your
                      prompts for optimal results.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div></div> {/* Placeholder for previous lesson button */}
                  <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg flex items-center">
                    Next Lesson: The Anatomy of an Effective Prompt
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="lg:w-1/4">
                <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 sticky top-32 light:bg-white light:border-gray-200 light:shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-white light:text-gray-800">Module 1 Lessons</h3>

                  <ul className="space-y-3">
                    <li className="p-3 bg-emerald-500/20 text-emerald-300 rounded-lg font-medium light:bg-emerald-100 light:text-emerald-700">
                      1.1 How Language Models Work
                    </li>
                    <li className="p-3 bg-gray-700/50 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors light:bg-gray-100 light:text-gray-700 light:hover:bg-gray-200">
                      1.2 The Anatomy of an Effective Prompt
                    </li>
                    <li className="p-3 bg-gray-700/50 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors light:bg-gray-100 light:text-gray-700 light:hover:bg-gray-200">
                      1.3 Common Prompt Engineering Mistakes
                    </li>
                    <li className="p-3 bg-gray-700/50 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors light:bg-gray-100 light:text-gray-700 light:hover:bg-gray-200">
                      1.4 Hands-on: Prompt Analysis
                    </li>
                    <li className="p-3 bg-gray-700/50 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors light:bg-gray-100 light:text-gray-700 light:hover:bg-gray-200">
                      1.5 Module 1 Quiz
                    </li>
                  </ul>

                  <div className="mt-6 pt-6 border-t border-gray-700 light:border-gray-200">
                    <h4 className="font-medium mb-2 text-white light:text-gray-800">Your Progress</h4>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2 light:bg-gray-200">
                      <div
                        className="bg-gradient-to-r from-green-500 to-emerald-600 h-2.5 rounded-full"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-400 light:text-gray-600">1 of 5 lessons completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
