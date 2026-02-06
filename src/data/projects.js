export const projects = [
  {
    title: "Roller Derby Penalty Practice",
    description:
      "I designed this app as a learning resource for the roller derby community. It implements a flashcard-style study aid for learning the verbal cues and hand signals used in officiating roller derby. A simple UI allows the user to pick which areas they want to study, and relevant video clips are shuffled to create a unique training experience for every session.",
    languages: ["Python"],
    frameworks: ["dash"],
    url: "https://www.derbysignals.org",
    repoUrl: "https://github.com/annahansen229/RollerDerbyPenaltyPractice"
  },
  {
    title: "Sudoku Puzzle App",
    description:
      "This program implements a simple Sudoku puzzle.\n A user can solve a medium-difficulty puzzle which is included in the file, or set up their own puzzle to solve. It includes a method to check if the current state of a puzzle is valid, and if not, displays the locations within the puzzle that are in conflict. The methodology of each feature is explained in comments within the code. \n The application demonstrates the concepts I learned over the course of two quarters studying functional programming at Portland State University. I wrote the majority of the application during the first course in the series. During the second course in the series, I refactored the existing code to implement more features of the Functor and Applicative typeclases, as well as implementing a TUI which used the Monad typeclass.",
    languages: ["Haskell"],
    frameworks: ["brick"],
    repoUrl: "https://github.com/annahansen229/Portfolio/tree/main/AdvancedFunctionalProgrammingFinalProject",
  },
  {
    title: "Google Cloud App",
    description:
      "This program asks a user for their name, gender, and year of birth and then uses this information to query a public dataset using the GCP BigQuery API to obtain the popularity rank of the given name in the United States over time. Using this data, I dynamically generate a graph of the popularity of the name over time and save this graph to Cloud Storage for hosting, the image is then served by Cloud Storage and displayed to the user along with the popularity rank of their name in their birth year. \n The application demonstrates the concepts I learned in the Internet, Web and Cloud Systems class at Portland State University. The application was deployed on Google Cloud Platform and utilized several GCP APIs and features including Identity and Access Management.",
    languages: ["Python"],
    frameworks: ["flask", "pandas", "numpy", "matplotlib"],
    repoUrl: "https://github.com/annahansen229/Portfolio/tree/main/InternetWebCloudSystemsFinalProject",
  },
]
