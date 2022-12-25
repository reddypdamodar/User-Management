const XLSX = require("xlsx");

function Excel(doc) {
  const students = [
    {
      name: doc.name,
      username: doc.username,
      email: doc.email,
      phone: doc.phone,
      password: doc.password,
      collegeName: doc.collegeName,
      gender: doc.gender,
    },
  ];

  const workSheet = XLSX.utils.json_to_sheet(students);
  const workBook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workBook, workSheet, "students");
  // Generate buffer
  XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });

  // Binary string
  XLSX.write(workBook, { bookType: "xlsx", type: "binary" });

  XLSX.writeFile(workBook, "studentsData.xlsx");
}

module.exports = { Excel };
