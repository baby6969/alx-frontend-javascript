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
// Directors Interface
// -----------------------------
interface Directors extends Teacher {
  numberOfReports: number;
}

// -----------------------------
// Example Director
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
// Function Interface
// -----------------------------
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// -----------------------------
// printTeacher Function
// -----------------------------
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName}. ${lastName}`;
}

console.log(printTeacher("John", "Doe")); // J. Doe

// -----------------------------
// StudentClass
// -----------------------------
class StudentClass {
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
