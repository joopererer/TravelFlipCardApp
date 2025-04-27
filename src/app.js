const API_URL = "http://localhost:8081/api/attractions";

let attractions = [];

async function fetchAttractions() {
    try {
        const response = await fetch(API_URL);
        if (response.ok) {
            attractions = await response.json();
        } else {
            console.error("Failed to fetch attractions");
        }
    } catch (error) {
        console.error("Error fetching attractions:", error);
    }
}

function randomFlip() {
    if (attractions.length === 0) {
        fetchAttractions().then(() => {
            let randomIndex = Math.floor(Math.random() * attractions.length);
            let attraction = attractions[randomIndex];

            let cardBack = document.querySelector('.card-back');
            cardBack.innerHTML = `
                <h3>${attraction.name}</h3>
                <p>Location: ${attraction.location}</p>
                <p>Type: ${attraction.type}</p>
            `;
            document.querySelector('.card').classList.toggle('flipped');
        });
    } else {
        let randomIndex = Math.floor(Math.random() * attractions.length);
        let attraction = attractions[randomIndex];

        let cardBack = document.querySelector('.card-back');
        cardBack.innerHTML = `
            <h3>${attraction.name}</h3>
            <p>Location: ${attraction.location}</p>
            <p>Type: ${attraction.type}</p>
        `;
        document.querySelector('.card').classList.toggle('flipped');
    }
}

fetchAttractions();
