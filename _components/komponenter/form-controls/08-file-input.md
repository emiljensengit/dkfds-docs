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
      aria-expanded="true" aria-controls="file-input-tech">
    Implementering
  </button>
  <div id="file-input-tech" aria-hidden="false" class="accordion-content">
    <p>Vi anbefaler at bruge det indbyggede input felt til filer <code>type="file"</code> frem for en skræddersyet løsning.</p>
    <p>Årsagen til dette er:</p>
      <ul class="content-list">
      <li>at feltet får fokus, når man tabber gennem siden</li>
      <li>at feltet fungerer ved brug af tastatur</li>
      <li>at feltet fungerer ved brug af hjælpemidler</li>
      <li>at feltet fungerer, selv når javascript er utilgængeligt</li>
    </ul>
    <p>En skræddersyet løsning af denne type felt bør udfylde ovenstående kriterier.</p>
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
