// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Directors interface
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

// Function interface
interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// Correct function using destructured object
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// Example usage
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // J. Doe

// ---------------------------
// StudentClass Task
// Interface for constructor parameters
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface for the class
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// StudentClass definition
class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
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
const student = new StudentClass({ firstName: "Alice", lastName: "Smith" });
console.log(student.displayName()); // Alice
console.log(student.workOnHomework()); // Currently working
