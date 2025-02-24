document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("prediction-form");
    const tableBody = document.querySelector("#admin-table tbody");
    let predictions = JSON.parse(localStorage.getItem("predictions")) || [];

    // Function to display predictions
    function displayPredictions() {
        tableBody.innerHTML = "";
        predictions.forEach((prediction, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${prediction.match}</td>
                <td>${prediction.sport}</td>
                <td>${prediction.prediction}</td>
                <td>${prediction.confidence}</td>
                <td>
                    <button class="edit" onclick="editPrediction(${index})">Edit</button>
                    <button onclick="deletePrediction(${index})">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Function to add a new prediction
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const match = document.getElementById("match").value;
        const sport = document.getElementById("sport").value;
        const prediction = document.getElementById("prediction").value;
        const confidence = document.getElementById("confidence").value;

        predictions.push({ match, sport, prediction, confidence });
        localStorage.setItem("predictions", JSON.stringify(predictions));

        form.reset();
        displayPredictions();
    });

    // Function to delete a prediction
    window.deletePrediction = function (index) {
        predictions.splice(index, 1);
        localStorage.setItem("predictions", JSON.stringify(predictions));
        displayPredictions();
    };

    // Function to edit a prediction
    window.editPrediction = function (index) {
        const prediction = predictions[index];
        document.getElementById("match").value = prediction.match;
        document.getElementById("sport").value = prediction.sport;
        document.getElementById("prediction").value = prediction.prediction;
        document.getElementById("confidence").value = prediction.confidence;

        predictions.splice(index, 1);
        localStorage.setItem("predictions", JSON.stringify(predictions));
        displayPredictions();
    };

    displayPredictions();
});
