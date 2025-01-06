<script>
    //Pass in our load function
    export let data;
    //Extract the props from the function
    const { planets, columnNames, error } = data;
    //Display the props
    console.log('Props:')
    console.log('Planets:', planets);
    console.log('Column Names:', columnNames);
    console.log('Error:', error);
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
    .error-message {
        color: red;
        font-weight: bold;
    }

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
