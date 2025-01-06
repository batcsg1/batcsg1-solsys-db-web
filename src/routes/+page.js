export async function load({ fetch }){
    const response = await fetch('http://localhost:3000/data');
    //Assign the data to the data array
    const planets = await response.json();
    return { props: {planets} };
}