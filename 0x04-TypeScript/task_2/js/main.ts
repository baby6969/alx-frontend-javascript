// String literal type
export type Subjects = Math | History;

// teachClass function
export function teachClass(todayClass: Subjects): string {
  if (todayClass === Math) {
    return Teaching Math;
  } else if (todayClass === History) {
    return Teaching History;
  } else {
    return Unknown class; // Optional fallback
  }
}

// Example usage
console.log(teachClass(Math));    // Teaching Math
console.log(teachClass(History)); // Teaching History

