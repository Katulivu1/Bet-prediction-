document.addEventListener("DOMContentLoaded", function () {
    const predictionsContainer = document.getElementById("predictions-container");

    // Sample predictions (This will be replaced with actual data)
    const predictions = [
        { match: "Team A vs Team B", sport: "Football", prediction: "Win", confidence: "High" },
        { match: "Team C vs Team D", sport: "Basketball", prediction: "Lose", confidence: "Medium" }
    ];

    predictions.forEach(prediction => {
        const div = document.createElement("div");
        div.classList.add("prediction-item");
        div.innerHTML = `
            <h3>${prediction.match} (${prediction.sport})</h3>
            <p>Prediction: <strong>${prediction.prediction}</strong></p>
            <p>Confidence Level: <strong>${prediction.confidence}</strong></p>
        `;
        predictionsContainer.appendChild(div);
    });
});
