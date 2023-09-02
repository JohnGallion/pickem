const ticker = document.getElementById('ticker');

// Function to fetch sports updates from the backend (mock API)
async function fetchSportsUpdates() {
    try {
        // Replace this with a real API endpoint in a production environment
        const response = await fetch('https://api.collegefootballdata.com/games?year=2023&week=1&seasonType=regular&division=fbs');
        const data = await response.json();

        // Display the latest update in the ticker
        if (data && data.length > 0) {
            const latestUpdate = data[0];
            ticker.textContent = `Latest Update: ${latestUpdate.text}`;
        }
    } catch (error) {
        console.error('Error fetching sports updates:', error);
    }
}

// Fetch sports updates every 30 seconds (adjust the interval as needed)
setInterval(fetchSportsUpdates, 30000);

// Initial fetch
fetchSportsUpdates();