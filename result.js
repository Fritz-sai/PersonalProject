import { dataResult } from "./option.js";
console.log("Loaded data from localStorage:", dataResult);

const tablesDiv = document.querySelector('.tables');

if (dataResult.length > 0) {
    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>City</th>
                <!-- Add more columns as needed -->
            </tr>
        </thead>
        <tbody>
            ${dataResult.map(entry => `
                <tr>
                    <td>${entry.firstname}</td>
                    <td>${entry.lastname}</td>
                    <td>${entry.city}</td>
                    <!-- Add more cells as needed -->
                </tr>
            `).join('')}
        </tbody>
    `;
    tablesDiv.appendChild(table);
} else {
    tablesDiv.textContent = "No data found.";
}

