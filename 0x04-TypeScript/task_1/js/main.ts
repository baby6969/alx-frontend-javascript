// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow extra attributes
}

// Director interface (singular)
interface Director extends Teacher {
  numberOfReports: number;
}

// Directors interface (plural)
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage of Directors
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Function interface for printTeacher
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// ALX requires a regular function, NOT an arrow function
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// Example usage
console.log(printTeacher("John", "Doe")); // J. Doe
