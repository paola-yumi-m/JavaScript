### [Build a Library](https://github.com/paola-yumi-m/myProjects/blob/main/JavaScript%20Intermediate/buildLibrary)

The buildLibrary code organizes the contents of a library. There is a parent class named Media and the child classes Book, Movie and CD. 
The classes characteristics are:

- Media class:
  - Properties: title (string), isCheckedOut (boolean, initially false) and ratings (array, initially empty)
  - Setters: a setter to set the isCheckedOut value 
  - Getters: all properties have a getter
  - Methods: .getAverageRating(), which returns the average of the ratings array, .toggleCheckOutStatus(), which changes the value of 
  isCheckedOut, and .addRating(), which add a rating to the rating array
  
-  Book class:
  Inherites the media class plus:
   - Properties: author (string) and  pages (number) 
   - Getters: all properties have a getter
   
- Movie class:
  Inherites the media class plus:
   - Properties: director (string) and runTime (number) 
   - Getters: all properties have a getter
   
- CD class:
  Inherites the media class plus:
   - Properties: artist (string) and songs (array of strings)
   - Getters: all properties have a getter
   - Methods: the shuffle method to return a shuffled array of the CD songs

### [School Catalogue](https://github.com/paola-yumi-m/myProjects/blob/main/JavaScript%20Intermediate/schoolCatalogue)

The schoolCatalogue code has a School parent class and three child classes: PrimarySchool, MiddleSchool and HighSchool.
The classes characteristics are:

- School class:
  - Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
  - Getters: all properties have getters
  - Setters: the numberOfStudents property has a setter
  - Methods: .quickFacts(), which logs a message about the school information, and .pickSubstituteTeacher(), which randomly selects a teacher from an array of names (this is a static method)

- PrimarySchool class:
Includes everything in the School class, plus one additional property
  - Properties: pickupPolicy (string)

- MiddleSchool class:
Does not include any additional properties or methods

- HighSchool class:
Includes everything in the School class, plus one additional property
  - Properties: sportsTeams (array of strings)

### [Message Mixer](https://github.com/paola-yumi-m/myProjects/tree/main/JavaScript%20Intermediate/messageMixer)

The messageMixer folder contains the files to a message mixer project. 
- The encryptors.js file contains the functions that encode the input message.
- The message-mixer.js file contains the input / output logic (except for importing the functions, the code was pre-given).
- The super-encoder.js file contains encoding and decoding functions. The encodeMessage function applies the three functions in the order caesar, symbol and reverse, to encode the user input. The decodeMessage function decodes the message back (the input / output logic code was pre-given).

### [WorkAround Explorer](https://github.com/paola-yumi-m/myProjects/tree/main/JavaScript%20Intermediate/workAroundExplorer)

The workAroundExplorer folder contains the files to a web application that shows salary data about companies.
This web app should allow users to choose specific roles and companies in the tech industry to see the following information:

- The salary for the chosen role at the chosen company.
- The industry average for the chosen role.
- The average salary at the chosen company across all roles.
- The industry average salary across all roles and all companies.

Most of the codes were already coded (front-end parts). The main task was to import and export the modules.

### [Wanderlust](https://github.com/paola-yumi-m/myProjects/tree/main/JavaScript%20Intermediate/wanderlust)

The wanderlust code creates a travel website that returns the weather forecast and three nearby places based on the given place.
The APIs used were the OpenWeatherAPI and the FoursquareAPI.
Part of the codes were already given. The main task was to use the GET and POST methods using the APIs.
