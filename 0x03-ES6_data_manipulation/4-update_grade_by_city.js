export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const student = listStudents.filter((student) => student.location === city);
  for (const student of students) {
    student.grade = 'N/A';
  }
  const newstudents = student.map ((student) => {
    const single = student;
    for (const grade of newGrades) {
      if (single.id === grade.studentId) {
        single.grade = grade.grade;
      }
    }
    return single;
  });
  return newStudents;
} 