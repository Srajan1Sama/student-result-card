
// Array of objects
const students = [
    { name: "Anita", maths: 85, science: 90, english: 80 },
    { name: "Rahul", maths: 60, science: 62, english: 65 },
    { name: "Meena", maths: 94, science: 95, english: 94 },
    { name: "Karthik", maths: 48, science: 32, english: 50 },
    { name: "Divya", maths: 70, science: 70, english: 70 }
];


// Function to calculate grade
function getGrade(percent) {

    if (percent >= 90) {
        return "A+";
    }
    else if (percent >= 75) {
        return "A";
    }
    else if (percent >= 60) {
        return "B";
    }
    else if (percent >= 50) {
        return "C";
    }
    else {
        return "D";
    }
}


// Generate results function
function generateResults() {

    let totalPercentage = 0;
    let passCount = 0;

    let topper = "";
    let highestPercentage = -1;

    let output = "";

    // For loop
    for (let i = 0; i < students.length; i++) {

        let s = students[i];

        // Calculate total
        let total = s.maths + s.science + s.english;

        // Calculate percentage
        let percentage = (total / 300) * 100;

        // Calculate grade
        let grade = getGrade(percentage);

        // Check pass or fail
        let result;

        if (
            s.maths >= 35 &&
            s.science >= 35 &&
            s.english >= 35
        ) {
            result = "Pass";
            passCount++;
        }
        else {
            result = "Fail";
        }

        // Class percentage
        totalPercentage += percentage;

        // Find topper
        if (percentage > highestPercentage) {
            highestPercentage = percentage;
            topper = s.name;
        }

        // Failed student row
        let rowClass = result === "Fail" ? "fail" : "";

        // Add data to table
        output += `
            <tr class="${rowClass}">
                <td>${s.name}</td>
                <td>${total}</td>
                <td>${percentage.toFixed(2)}%</td>
                <td>${grade}</td>
                <td>${result}</td>
            </tr>
        `;
    }

    // Display table
    document.getElementById("resultBody").innerHTML = output;

    // Calculate class average
    let average = totalPercentage / students.length;

    // Display topper
    document.getElementById("topper").innerHTML =
        "Topper: " + topper + " (" +
        highestPercentage.toFixed(2) + "%)";

    // Display average
    document.getElementById("average").innerHTML =
        "Class Average: " + average.toFixed(2) + "%";

    // Display pass count
    document.getElementById("passed").innerHTML =
        "Passed: " + passCount + " out of " +
        students.length + " students";

    // Show result section
    document.getElementById("resultSection").hidden = false;
}


// Button click event
document.getElementById("generateBtn")
    .addEventListener("click", generateResults);
