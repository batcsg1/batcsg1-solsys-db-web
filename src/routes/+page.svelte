<script>
    export let data;
    //Access planets and error props from the load function
    const { planets, error } = data;

    // Test to see if planet data or error comes through
    console.log('Planets:', planets);
    console.log('Error:', error);

    // Code for loading in column names
    let columnNames;
    if (planets.length > 0){
        //Start with column names of the first planet object
        columnNames = Object.keys(planets[0]);
    }
    //Display the column names to the console
    console.log(columnNames);
</script>

{#if error}
    <div class="error-message">{error}</div>
{:else if !planets || planets.length === 0}
    <p>Loading...</p>
{:else}
    <ul>
        {#each planets as planet}
            <li>{planet.name}</li>
        {/each}
    </ul>
{/if}

<style>
    .error-message {
        color: red;
        font-weight: bold;
    }
</style>