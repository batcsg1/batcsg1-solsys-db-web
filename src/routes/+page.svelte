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
<h1>About the Planets</h1>
<table>
    <thead>
        <tr>
            {#each columnNames as column}
                <th>{column}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        <!--Iterate over each planet-->
        {#each planets as planet}
            <!--Each row corresponds to a planet-->
            <tr> 
                <!--Iterate over all the column names-->
                {#each columnNames as column}
                    <!--Each planet column value-->
                    <td>{planet[column]}</td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>
{/if}

<style>
    table{
        background-color: rgb(59, 58, 80);
        padding: 0.2em;
        border-radius: 0.4em;
    }
    h1{
        color: lightblue;
    }
    thead{
        color: white;
    }
    tbody{
        background: rgb(18, 29, 39);
    }
    th{
        padding: 0.4em;
    }
    tbody td{
        text-align: center;
        font-size: small;
        color: white;
        padding: 0.8em;
    }
</style>