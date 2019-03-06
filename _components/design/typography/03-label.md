---
type: component
title: Felt- og tabeloverskrifter (label og th)
parent: typography
order: 03
---
<p class="font-lead">I eksemplet nedenfor viser vi hvordan overskrifter til felter og overskrifter i tabeller ser ud. Overskrifter til felter og tabeller er ens, men der er forskel i koden.</p>

{% include code/preview.html component="labels" %}
{% include code/accordion.html component="labels" %}

<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="false" aria-controls="labels-docs-tech">
    Implementering
  </button>
  <div id="labels-docs-tech" aria-hidden="true" class="accordion-content">
    <p>Feltoverskrifter kan indsættes med et label-tag <code>&lt;label&gt;&lt;/label&gt;</code> og ved label klassen <code>.form-label</code></p>
    <p>Kolonneoverskrifter bruges i tabeller og indsættes som <code>&lt;th&gt;&lt;/th&gt;</code> i en thead. Kolonneoverskrifter skal hverken have label-tag eller label klasse.</p>
  </div>
</div>

<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="typolabels-docs">
    Retningslinjer
  </button>
  <div id="typolabels-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>
          <h3 class="h4">Feltoverskrift (label)</h3>
          <p>Formularer kan betragtes som en dialog med brugerne, hvor feltoverskriften er dit spørgsmål til brugeren og feltet som brugerne kan skrive i er svaret de giver dig.</p>              
          <ul>
            <li>Feltoverskrifter er dine spørgsmål til brugeren.</li>  
            <li>Sørg for at brugeren kan forstå hvad du beder om svar på.</li>
            <li>Undgå lange og komplekse feltoverskrifter.</li>
            <li>Stil kun et spørgsmål i en feltoverskrift.</li>
            <li>Feltoverskrifter placeres altid over feltet, som anvist under formularelementer.</li>
            <li>Alle felter eller sammenhængende gruppe af felter (fx datovalg) skal have en feltoverskrift.</li>
          </ul>
          <h3 class="h4">Tabeloverskrift (th)</h3>
          <p>Tabeloverskrifter er visuelt ens med feltoverskrifter, og bruges til at give overblik over rækker eller kolonner data i tabeller og lister.</p>
          <ul>
            <li>Tabeloverskrifter beskriver hvad indholdet i en række eller kolonne angiver.</li>  
          </ul>
      </section>
    </article>
  </div>
</div>