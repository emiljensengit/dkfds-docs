---
title: Radioknap - skjul og vis indhold
parent: Collapse
order: 01
lead: 
---

{% include code/preview.html component="radio-toggle-content" %}
{% include code/accordion.html component="radio-toggle-content" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="radio-toggle-content-tech">
    Implementering
  </button>
  <div id="radio-toggle-content-tech" aria-hidden="false" class="accordion-content">
    <section>
        <p>For at initialisere collapse funktionaliteten på en radioknap skal <code>input[type=radio]</code> have følgende:</p>
        <ul>
          <li>Attributten <code>name</code>: alle radioknapper I en gruppe skal have samme værdi i 'name'-attributten. Derved kan kun én af radioknapperne være valgt af gangen.</li>
          <li>Attributten <code>data-js-target="id-of-target-to-collapse"</code>: denne attribute skal have id'et på det element som skal vises når radioknappen er aktiveret. </li>
          <li>Hvis man ønsker at radioknappen skal være valgt fra starten af, skal den have attributten <code>'checked'</code>.</li>
          <li><code>aria-controls="id-of-target-to-collapse" </code></li>
        </ul>
        <p>Alle radioknapperne i en gruppe skal placeres i en container som har klassen <code>js-radio-toggle-group</code>.</p>
        <p>Det element som skal collapses/expandes skal have følgende:</p>
        <ul>
          <li><code>id=”id-of-target-to-collapse”</code></li>
          <li><code>aria-hidden="true/false"</code></li>
        </ul>
    </section>
  </div>
</div>
<div class="accordion-bordered accordion-docs">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="checkbox-toggle-content-docs">
    Retningslinjer
  </button>
  <div id="checkbox-toggle-content-docs" class="accordion-content">
    <article>
      <section>
          <h3 class="h4">Tilgængelighed</h3>
          <ul>
              <li>Radioknapperne skal kunne aktiveres og håndteres fra tastatur.</li>
              <li>Skjul ikke meningsbærende indhold som fx beskrivelser/labels med denne funktionalitet.</li>
              <li>Vis kun de ekstra muligheder, når brugeren har foretaget et valg.</li>
          </ul>
      </section>
      <section>
          <h3 class="h4">Brugervenlighed</h3>
          <h4 class="h5">Anvendes til</h4>
          <p>Vise yderligere information eller en ekstra funktion relevant til brugerens valg, fx kan du vise et email-felt, når brugeren vælger at ville kontaktes per email.</p>
          <h4 class="h5">Anvendes ikke til</h4>
          <p>Anvend ikke denne mulighed til inline-placerede radioknapper. </p>
          <h4 class="h5">Vejledning</h4>                
          <p>Hold det enkelt. Hvis du har behov for at eksponere større mængder af ekstra funktionalitet, bør du overveje, at fordele det ud over flere sider i stedet.</p>
      </section>
    </article>
  </div>
</div>
