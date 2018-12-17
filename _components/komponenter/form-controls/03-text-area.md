---
title: Textarea
parent: Form controls
order: 03
lead: 
---

{% include code/preview.html component="text-area" %}
{% include code/accordion.html component="text-area" %}
<div class="accordion-bordered accordion-docs">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="text-area-docs">
    Retningslinjer
  </button>
  <div id="text-area-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>
          <h4>Tilgængelighed</h4>
          <p>Tekstområdet markeres tydeligt med en focus-tilstand, når brugere vha tab-tasten navigerer sig frem til dem.</p>
      </section>
      <section>
          <h4>Brugervenlighed</h4>
          <h5>Anvendes til</h5>
          <ul>
              <li>Tekstområder anvendes til sammenhængende (mere end 2 linjer), men ustruktureret tekst og sætninger, der har karakter af prosa som fx en baggrundsfortælling.</li>
              <li>Når der er behov for yderligere, sammenhængende information, hvis karakter ikke kan vælges fra et prædefineret sæt værdier.</li>
              <li>Når løsningen stiller et spørgsmål, der ikke kan besvares i et felt.</li>
          </ul>
          <h5>Anvendes ikke til</h5>
          <p>Tekstområder anvendes ikke til struktureret information, hvor datakonsistens har betydning.</p>
          <h5>Vejledning</h5>
          <ul>
              <li>Angiv tekstområdets højde, så det modsvarer den tekstmængde, du forventer brugeren skal levere.</li>
              <li>Overvej at begrænse antallet af tegn, hvis det giver mening.</li>
              <li>Vis kun fejlbeskeder, når brugeren har indtastet en ugyldig værdi.</li>
              <li>Fejlbeskeder skal være meningsfulde og hjælpsomme. </li>
              <li>Fejlbeskeder placeres imellem label og feltet, som markeres med rødt.</li>
          </ul>
      </section>
    </article>
  </div>
</div>
