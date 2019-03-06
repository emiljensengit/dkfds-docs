---
permalink: /komponenter/accordions/
layout: styleguide
type: component
title: Accordions
category: Komponenter_category
subcategory: Komponenter
lead: Accordions are a list of headers that can be clicked to hide or reveal additional content.
---

{% include code/preview.html component="accordion" %}
{% include code/accordion.html component="accordion" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
    aria-expanded="true" aria-controls="documentation">
    Retningslinjer
  </button>
  <div id="documentation" class="accordion-content">
    <article>
      <section>
          <h2 class="h4">Tilgængelighed</h2>
          <ul>
              <li>Accordions markeres tydeligt med en focus-tilstand, når brugere vha tab-tasten navigerer sig frem til dem.</li>
              <li>Accordions er tilgængelige i den anbefalede løsning, men vi anbefaler, at du anvender dem i begrænset omfang, da en stor del af brugerne ikke opdager indholdet på accordions udover den aktive.</li>
          </ul>
      </section>
      <section>
          <h2 class="h4">Brugervenlighed</h2>
          <h3 class="h5">Anvendes til</h3>
          <p>Accordions er interaktive overskrifter, der anvendes til at skjule og vise det relaterede indhold.</p>
          <h3 class="h5">Anvendes ikke til</h3>
          <ul>
              <li>Accordions erstatter individuelle sider i en selvbetjeningsløsning eller hjemmeside.</li>
              <li>Accordions anvendes ikke til små mængder indhold, der i stedet kunne stå tydeligt på siden.</li>
              <li>Accordions anvendes ikke til at kollapse indhold i fx søgeresultater eller andre længere oversigter.</li>
              <li>Accordions anvendes ikke til at opdele et logisk flow eller en sekvens af handlinger. Der bør du evt. istedet anvende en tringuide.</li>
          </ul>
          <h3 class="h5">Vejledning</h3>                
          <ul>
              <li>Overvej at lade den accordion med det vigtigste indhold være foldet ud, så du sikrer at dine brugere læser den.</li>
              <li>Generelt er det ikke en god løsning at skjule indhold for at gøre siden mere spiselig. Overvej om det er nødvendigt at kollapse indhold og hvorfor, det er det. Hvis indholdet er unødigt langt eller uoverskueligt, bør det i stedet omformuleres og evt. splittes ud i flere sider. </li>
          </ul>
      </section>
    </article>
  </div>
</div>