// {
//     title: '',
//     description: '',
//     languages: [],
//     frameworks: [],
//     url: ,
// },

export const projects = [
  {
    title: "Sudoku Puzzle App",
    description:
      "This program implements a simple Sudoku puzzle.\n A user can solve a medium-difficulty puzzle which is included in the file, or set up their own puzzle to solve. It includes a method to check if the current state of a puzzle is valid, and if not, displays the locations within the puzzle that are in conflict. The methodology of each feature is explained in comments within the code. \n The application demonstrates the concepts I learned over the course of two quarters studying functional programming at Portland State University. I wrote the majority of the application during the first course in the series. During the second course in the series, I refactored the existing code to implement more features of the Functor and Applicative typeclases, as well as implementing a TUI which used the Monad typeclass.",
    languages: ["Haskell"],
    frameworks: ["brick"],
    url: "https://github.com/annahansen229/Portfolio/tree/main/AdvancedFunctionalProgrammingFinalProject",
  },
  {
    title: "Google Cloud App",
    description:
      "This program asks a user for their name, gender, and year of birth and then uses this information to query a public dataset using the GCP BigQuery API to obtain the popularity rank of the given name in the United States over time. Using this data, I dynamically generate a graph of the popularity of the name over time and save this graph to Cloud Storage for hosting, the image is then served by Cloud Storage and displayed to the user along with the popularity rank of their name in their birth year. \n The application demonstrates the concepts I learned in the Internet, Web and Cloud Systems class at Portland State University. The application was deployed on Google Cloud Platform and utilized several GCP APIs and features including Identity and Access Management.",
    languages: ["Python"],
    frameworks: ["flask", "pandas", "numpy", "matplotlib"],
    url: "https://github.com/annahansen229/Portfolio/tree/main/InternetWebCloudSystemsFinalProject",
  },
  {
    title: "Harry Potter App",
    description:
      "This program displays information about the Harry Potter books. This was a group project written to demonstrate the concepts learned in Front End Web Development at Portland State University, including responsiveness, accessibility and interesting styling. My section was the Characters page, which fetches data from the API and dynamically displays information based on search terms or filters applied by the user.",
    languages: ["Javascript", "HTML", "CSS"],
    frameworks: ["react", "bootstrap"],
    url: "https://github.com/annahansen229/Portfolio/tree/main/FrontEndFinalProject",
  },
  {
    title: "Profile Page",
    description:
      "You are here! :) \n This basic website displays my professional profile and is linked on my resume and professional social media profiles. This was originally written as my final project for Intro to Web Development in Summer 2022",
    languages: ["Javascript", "HTML", "CSS"],
    frameworks: ["react", "bootstrap"],
    url: "https://github.com/annahansen229/Profile",
  },
]
