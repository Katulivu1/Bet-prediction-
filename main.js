document.addEventListener("DOMContentLoaded", function () {
    const predictionsTableBody = document.querySelector("#predictions-table tbody");

    // Sample predictions (Will be replaced with real data from admin panel)
    const predictions = [
        { match: "Team A vs Team B", sport: "Football", prediction: "Win", confidence: "High" },
        { match: "Team C vs Team D", sport: "Basketball", prediction: "Lose", confidence: "Medium" },
        { match: "Team E vs Team F", sport: "Football", prediction: "Draw", confidence: "Low" }
    ];

    predictions.forEach(prediction => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${prediction.match}</td>
            <td>${prediction.sport}</td>
            <td>${prediction.prediction}</td>
            <td>${prediction.confidence}</td>
        `;
        predictionsTableBody.appendChild(row);
    });
});
