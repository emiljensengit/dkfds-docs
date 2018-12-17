---
title: Vedhæft fil
parent: Form controls
order: 07
lead: Lader brugeren vælge en fil.
---

{% include code/preview.html component="file-input" %}
{% include code/accordion.html component="file-input" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="date-input-docs">
    Implementering
  </button>
  <div id="date-input-docs" aria-hidden="false" class="accordion-content">
    <p>We recommend using a native input using type="file", rather than a custom Implementering.</p>
    <p>This is so:</p>
      <ul class="content-list">
      <li>the control gains focus when tabbing through the page</li>
      <li>the control functions using a keyboard</li>
      <li>the control functions using assistive technology</li>
      <li>the control functions when javascript is not available</li>
    </ul>
    <p>A custom Implementering of this control would need to meet the criteria above.</p>
  </div>
</div>

<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="file-input-docs">
    Retningslinjer
  </button>
  <div id="file-input-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>
          <h4>Tilgængelighed</h4>
          <p>Bør kun anvendes, hvis det er strengt nødvendigt for din løsning.</p>
      </section>
      <section>
          <h4>Brugervenlighed</h4>
          <h5>Anvendes til</h5>
          <p>Lade brugeren vælge og overføre en fil fra sin egen computer, tablet eller mobil.</p>
          <h5>Anvendes ikke til</h5>
          <h5>Vejledning</h5>
          <ul>
              <li>Sørg for at brugeren får en respons, når filen er overført.</li>
              <li>Gør tydeligt opmærksom på, hvilke formater og størrelser, der vil blive accepteret.</li>
              <li>Tjek filformatet før overførslen går i gang, så brugeren ikke spilder tid.</li>
          </ul>
      </section>
  </article>
</div>
