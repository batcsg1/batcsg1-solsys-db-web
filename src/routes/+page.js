export async function load() {
    try {
        //Fetch data from our backend server
        const response = await fetch('http://localhost:3000/data');
        
        // Check if the fetch request failed
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        
        // Return the data in json format (if the fetch was a success)
        const planets = await response.json();

        // Extract column names if data is available
        let columnNames = [];
        if (planets.length > 0) {
            columnNames = Object.keys(planets[0]);
        }
        
        return { planets, columnNames };
    } catch (err) {
        // Log the error for debugging purposes
        console.error('Error fetching data:', err);

        // Gracefully handle the error by returning a default error message
        return { error: 'The server is currently unreachable. Please try again later.' };
    }
}
