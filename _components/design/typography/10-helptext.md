---
type: component
title: Hjælpetekst og fejlbeskeder
parent: typography
order: 10
---

<p class="font-lead">Kommunikér med og giv feedback til brugeren via hjælpetekster og fejlbeskeder.</p>

{% include code/preview.html component="helptext" %}
{% include code/accordion.html component="helptext" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="false" aria-controls="helptext-docs-tech">
    Brugervenlighed
  </button>
  <div id="helptext-docs-tech" aria-hidden="true" class="accordion-content">
    <p>Hjælpetekst og fejltekst knytter sig i udpræget grad til formularer, men kan anvendes hvor der er behov for at hjælpe brugeren med forklaring af et ovenstående element eller give feedback på et element.</p>
    <h2 class="h4">Hjælpetekst</h2>
    <p>Nogle gange er det nødvendigt at forklare eller eksemplificere en feltoverskrift, til dette kan man anvende hjælpetekst. Brug også hjælpetekst, til at forklare hvorfor du efterspørger særligt følsomme oplysninger, hvis dette kan være en barriere for at få et svar fra brugeren.</p>
    <ul>
        <li>
            Brug hjælpetekst til uddybende forklaring (fx til at understøtte feltoverskrifter).
        </li>
    </ul>
    <h2 class="h4">Fejlbesked</h2>
    <p>Det er vigtigt for brugerne at de får feedback særligt når noget fejler. Fejltekst er et helt centralt element for formularer. Sørg for at de er knivskarpe og præcist kommunikerer hvad der er fejlet og hvad brugeren skal gøre for at komme videre, gerne i en og samme sætning.</p>
    <ul>
        <li>Skriv klar og præcis fejltekst i et sprog brugeren forstår.</li>
        <li>Vær høflig (“Indtast venligst din adresse”), ikke anklagende (“Du mangler at indtaste din adresse”) og hjælp brugeren med at løse fejlen.</li>
        <li>Skriv ikke tekniske eller fagligt tunge fejltekster, ingen “jargon”.</li>
        <li>Placer fejlteksten, der hvor fejlen forekommer.</li>
        <li>Fejltekst er rød, men skal også indikeres med en rød streg i formularer eller et fejlikon, hvis fejlteksten bruges andre steder end i formularer.</li>
    </ul>
  </div>
</div>