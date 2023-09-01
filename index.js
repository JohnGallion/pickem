document.getElementById("createTableBtn").addEventListener("click", function () {
    // Create a new table element
    var table = document.createElement("table");

    // Create a table row
    var row = table.insertRow(0);

    // Create a table cell
    var cell = row.insertCell(0);

    // Add content to the cell
    cell.innerHTML = `<div class="border border-secondary"><input type="text" ></input></div>`;

    // Add the table to the container
    document.getElementById("tableContainer").appendChild(table);
});