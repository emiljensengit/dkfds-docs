---
title: Tabel
parent: Tables
order: 01
lead: 
---

{% include code/preview.html component="table" %}
{% include code/accordion.html component="table" %}


<div class="accordion-bordered accordion-docs">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="tables-docs">
    Retningslinjer
  </button>
  <div id="tables-docs" class="accordion-content">
      <article>
        <section>
            <h4>Tilgængelighed</h4>
            <ul>
                <li>Tabeller i Det Fælles Designsystem overholder HTML standarden, men du skal selv tilføje <code>scope=col</code> eller <code>scope=row</code> til hver header celle <code>th</code>th.</li>
                <li>Hvis du konstruerer en såkaldt kompleks tabel – en tabel med flere header-niveauer -  skal hver header have tilføjet et unikt id (fx <code>id=header-eksempel</code>) og hver celle tilføjes en header-attribut med den relevante og tilknyttede tabel header’s <code>id</code> angivet (fx <code>header=header-eksempel</code>).</li>
                <li>Når du tilføjer en titel til en tabel, skal du skrive den i <code>caption</code> indenfor table-elementet.</li>
            </ul>
        </section>
        <section>
            <h4>Brugervenlighed</h4>
            <h5>Anvendes til</h5>
            <p>Tabeller anvendes til at præsentere brugeren for tabulær data som fx statistik opstillet i rækker og kolonner.</p>
            <h5>Anvendes ikke til</h5>
            <ul>
                <li>Tabeller anvendes ikke til at opsætte en sides eller en komponents indhold udover tabulær data.</li>
                <li>Overvej at anvende en liste (en unordered eller definition list), hvis det giver brugeren et bedre overblik.</li>
            </ul>
            <h5>Vejledning</h5>                
            <ul>
                <li>Tabeller er en kompleks størrelse og når du bruger tabeller, skal du sikre dig, at din opmærkning overholder tilgængelighedskravene.  </li>
                <li>Vær meget opmærksom på typen af data, din tabel skal præsentere brugeren for.</li>
            </ul>
        </section>
    </article>
  </div>
</div>