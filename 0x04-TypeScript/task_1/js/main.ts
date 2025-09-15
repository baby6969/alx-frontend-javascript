// Define Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow extra attributes
}

// Define Director (singular) interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Define Directors (plural) interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
// Teacher interface (already defined from previous tasks)
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow extra attributes
}

// Function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Correct function definition
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// Example usage
console.log(printTeacher("John", "Doe")); // J. Doe



