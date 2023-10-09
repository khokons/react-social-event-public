# Project name : Social Event Management 
 ---


# Live link ^
coming soon------


# Add at least 5 Project features
 ---

 _Certainly, here are five feature of the project_

 - User Registration and Authentication:
   - Users can register for an account using their name, email, and password. They can also log in securely, ensuring that only registered users can access certain features.
  
  - Invitation Management:
   - Users can create and send invitations for their events. Invitations include event details, and users can customize them. The system also tracks RSVP responses from invitees.

  - Service Cards: 
   - The project includes a section for displaying service cards. Each card provides information about a service, including its name, image, price, short description, and a button to learn more.

  - Private Route:
   - The application has a PrivateRoute component that ensures certain routes can only be      accessed by authenticated users. Unauthorized users are redirected to the login page.

  - Responsive Design:
   - The project is designed to be responsive, ensuring a consistent and user-friendly      experience on various devices, including desktop and mobile.


  - Reviews:
   - There is a reviews section that displays user reviews with ratings and comments. Each review includes the name and role of the reviewer, along with their feedback.

# MCQ TEST: 
 ---


1. Write the correct answer from the following options and give an explanation (2-5 lines).

let greeting;
greetign = {};
console.log(greetign);

    A: {}
    B: ReferenceError: greetign is not defined
    C: undefined

- Answer: B
 - Why correct ans: In the code, there is a typo in the variable name. It is declared as "greeting" but is assigned a value using the incorrect name "greetign." Due to this typo, JavaScript treats "greetign" as an undeclared variable, resulting in a ReferenceError. The correct variable name should be used for it to work as expected.

2. Write the correct answer from the following options and give an explanation (2-5 lines).

function sum(a, b) {
  return a + b;
}

sum(1, "2");

    A: NaN
    B: TypeError
    C: "12"
    D: 3

 - Answer: C
  - Explanation: In JavaScript, when you use the + operator with one or more strings, it performs string concatenation instead of addition. In this case, 1 is a number, and "2" is a string. When you add them together with +, JavaScript converts the number to a string and concatenates them, resulting in the string "12".


3. Write the correct answer from the following options and give an explanation (2-5 lines).

const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

    A: ['🍕', '🍫', '🥑', '🍔']
    B: ['🍝', '🍫', '🥑', '🍔']
    C: ['🍝', '🍕', '🍫', '🥑', '🍔']
    D: ReferenceError

 - Answer: A
  - Explanation: In the code, info.favoriteFood initially holds a reference to the first element of the food array, which is "🍕". However, when you later assign "🍝" to info.favoriteFood, it does not modify the food array. So, food remains unchanged and still contains ['🍕', '🍫', '🥑', '🍔'].


4. Write the correct answer from the following options and give an explanation (2-5 lines).

function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

    A: Hi there,
    B: Hi there, undefined
    C: Hi there, null
    D: ReferenceError

- Answer: B
 - Explanation: In the sayHi function, there is a parameter name which expects an argument when the function is called. However, when sayHi() is called without any argument, name inside the function becomes undefined. So, the function returns "Hi there, undefined" as the result.


5. Write the correct answer from the following options and give an explanation (2-5 lines).

let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

    A: 1
    B: 2
    C: 3
    D: 4

- Answer: B
 - Explanation: The forEach method iterates through the nums array and executes the provided callback function for each element. In JavaScript, 0 is considered a falsy value, so the condition if (num) evaluates to false when num is 0. Therefore, count is only incremented for the elements 1, 2, and 3, resulting in count being 2 at the end of the iteration.





