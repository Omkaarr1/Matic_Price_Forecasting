// Model data
const models = [
    {
        name: "Random Forest",
        description:
            "An ensemble learning method effective at recognizing patterns but struggles with sequential data.",
        metrics: { RMSE: 0.0395, R2: 0.9961 },
        strengths: "Excellent for structured datasets, interpretable results.",
        weaknesses: "Poor handling of time-series data and dependencies.",
    },
    {
        name: "Support Vector Machine (SVM)",
        description:
            "A powerful model for classification and regression, but performs poorly on highly volatile data.",
        metrics: { RMSE: 0.1341, R2: -0.9211 },
        strengths: "Handles linear relationships well, good for small datasets.",
        weaknesses: "Fails to capture non-linear patterns in volatile markets.",
    },
    {
        name: "LSTM",
        description:
            "Excels at capturing long-term dependencies, but performance degrades with unseen data.",
        metrics: { RMSE: 0.1041, R2: 0.4691 },
        strengths: "Good at recognizing sequential patterns and trends.",
        weaknesses: "Prone to overfitting, slower training time.",
    },
    {
        name: "GNU+GRU Hybrid",
        description:
            "Combines non-linear and temporal modeling, offering the most accurate predictions.",
        metrics: { RMSE: 0.03, R2: 0.98 },
        strengths: "Highly accurate, robust in volatile environments.",
        weaknesses: "Slightly complex architecture, requires more data.",
    },
];

// Populate descriptions dynamically
const modelDetails = document.getElementById("model-details");
models.forEach((model) => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4 mb-4";
    col.innerHTML = `
        <div class="card p-3">
            <h5 class="card-title">${model.name}</h5>
            <p class="card-text">${model.description}</p>
            <ul>
                <li><strong>RMSE:</strong> ${model.metrics.RMSE}</li>
                <li><strong>R² Score:</strong> ${model.metrics.R2}</li>
            </ul>
        </div>
    `;
    modelDetails.appendChild(col);
});

// Populate table dynamically
const comparisonTable = document.getElementById("comparison-table");
models.forEach((model) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td><strong>${model.name}</strong></td>
        <td>${model.description}</td>
        <td>${model.metrics.RMSE}</td>
        <td>${model.metrics.R2}</td>
        <td>${model.strengths}</td>
        <td>${model.weaknesses}</td>
    `;
    comparisonTable.appendChild(row);
});

// Images for visual gallery
const images = [
    { src: "https://i.ibb.co/ypcwzSJ/image.png", caption: "Architecture Diagram" },
    { src: "https://i.ibb.co/FWx5kW1/image.png", caption: "Random Forest Predictions" },
    { src: "https://i.ibb.co/PwL7fGJ/image.png", caption: "SVM Predictions" },
    { src: "https://i.ibb.co/MfPDZyD/image.png", caption: "LSTM Predictions" },
    { src: "https://i.ibb.co/dWsHpNT/image.png", caption: "GNU+GRU Predictions" },
];

// Populate gallery
const visualGallery = document.getElementById("visual-gallery");
images.forEach((image) => {
    const col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `
        <img src="${image.src}" alt="${image.caption}" class="img-thumbnail">
        <p class="text-center">${image.caption}</p>
    `;
    visualGallery.appendChild(col);
});

// Results
const resultsContent = document.getElementById("results-content");
resultsContent.innerHTML = `
    <h4>Performance Summary</h4>
    <p>The GNU+GRU hybrid model outperformed others in handling both non-linear relationships and temporal dependencies. Its low RMSE (0.03) and high R² (0.98) indicate high accuracy and generalizability.</p>
    <p>The Random Forest model showed good training accuracy but struggled with sequential dependencies in volatile conditions. Similarly, SVM exhibited poor generalization, with an R² of -0.9211 on test data.</p>
    <p>LSTM offered strong performance in capturing long-term trends but was less effective in unseen data scenarios compared to the GNU+GRU hybrid.</p>
`;
