function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let left = 0;
  let right = students.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (students[mid] === searchStudent) {
      return mid;
    } else if (students[mid] < searchStudent) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
exStudents = [
  "Alice",
  "Andrew",
  "Bob",
  "Bobby",
  "Charlie",
  "Diana",
  "Ethan",
  "Fiona",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];
console.log(findStudentIndex(exStudents, "Isaac"));

// ตอบคำถามตรงนี้จ้า
// Binary Search มี Big O เป็น log(n) เพราะ จำนวนรอบในการวนลูปหรือทำซ้ำที่มากที่สุดที่สามารถเกิดขึ้นได้ แปรผันกับจำนวนข้อมูลแบบ logarithm เช่น ข้อมูล 10 ตัว จะลูปมากที่สุด 4 รอบ
