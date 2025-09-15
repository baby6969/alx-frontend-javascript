// -----------------------------
// DirectorInterface
// -----------------------------
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// -----------------------------
// TeacherInterface
// -----------------------------
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// -----------------------------
// Director Class
// -----------------------------
class Director implements DirectorInterface {
  workFromHome(): string {
    return Working from home;
  }

  getCoffeeBreak(): string {
    return Getting a coffee break;
  }

  workDirectorTasks(): string {
    return Getting to director tasks;
  }
}

// -----------------------------
// Teacher Class
// -----------------------------
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return Cannot work from home;
  }

  getCoffeeBreak(): string {
    return Cannot have a break;
  }

  workTeacherTasks(): string {
    return Getting to work;
  }
}

// -----------------------------
// createEmployee Function
// -----------------------------
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === number && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// -----------------------------
// Example usage / Tests
// -----------------------------
console.log(createEmployee(200));    // Teacher
console.log(createEmployee(1000));   // Director
console.log(createEmployee('00')); // Director

// Optional: To check method outputs
const emp1 = createEmployee(200);
console.log(emp1 instanceof Teacher ? Teacher : Director);

const emp2 = createEmployee(1000);
console.log(emp2 instanceof Director ? Director : Teacher);

const emp3 = createEmployee(00);
console.log(emp3 instanceof Director ? Director : Teacher);

