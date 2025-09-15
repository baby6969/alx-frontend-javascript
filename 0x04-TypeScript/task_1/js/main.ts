// -----------------------------
// Teacher Interface
// -----------------------------
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow extra attributes
}

// -----------------------------
// Director (singular) Interface
// -----------------------------
interface Director extends Teacher {
  numberOfReports: number;
}

// -----------------------------
// Directors (plural) Interface
// -----------------------------
interface Directors extends Teacher {
  numberOfReports: number;
}

// -----------------------------
// Example Director Usage
// -----------------------------
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// -----------------------------
// Function Interface for printTeacher
// -----------------------------
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// -----------------------------
// printTeacher Function
// -----------------------------
const printTeacher: printTeacherFunction = function (firstName: string, lastName: string): string {
  return `${firstName}. ${lastName}`;
};

// Example Usage
console.log(printTeacher("John", "Doe")); // J. Doe

// -----------------------------
// StudentClass Interface
// -----------------------------
interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// -----------------------------
// StudentClass Implementation
// -----------------------------
class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("Alice", "Smith");
console.log(student.displayName()); // Alice
console.log(student.workOnHomework()); // Currently working
