const csvData = `nombre,edad,email
Juan,30,juan@example.com
María,25,maria@example.com
Pedro,35,pedro@example.com`;

function parseCSV(csvData) {
  const lines = csvData.split("\n");
  const headers = lines[0].split(",");
  const data = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",");
    const entry = {};

    for (let j = 0; j < headers.length; j++) {
      entry[headers[j]] = values[j];
    }

    data.push(entry);
  }

  return data;
}

document.addEventListener("DOMContentLoaded", () => {
  const parsedData = parseCSV(csvData);
  const tableBody = document.getElementById("csvData");

  parsedData.forEach((entry) => {
    const row = document.createElement("tr");
    const nombreCell = document.createElement("td");
    const edadCell = document.createElement("td");
    const emailCell = document.createElement("td");

    nombreCell.textContent = entry.nombre;
    edadCell.textContent = entry.edad;
    emailCell.textContent = entry.email;

    row.appendChild(nombreCell);
    row.appendChild(edadCell);
    row.appendChild(emailCell);

    tableBody.appendChild(row);
  });
});
