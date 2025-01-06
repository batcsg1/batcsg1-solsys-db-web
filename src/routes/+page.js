export async function load() {
    try {
        const response = await fetch('http://localhost:3000/data');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const planets = await response.json();
        
        return {planets};
    } catch (err) {
        console.error(err);
        return { error: 'Unable to load data at the moment. Please try again later.' };
    }
}