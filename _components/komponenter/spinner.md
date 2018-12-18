---
permalink: /komponenter/spinner/
layout: styleguide
type: element
title: Spinner
category: Komponenter_category
subcategory: Design og kode
lead: Spinner lead
---

{% include code/preview.html component="spinner" %}
{% include code/accordion.html component="spinner" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="code-spinner-docs">
    Implementering
  </button>
  <div id="code-spinner-docs" aria-hidden="false" class="accordion-content">
    <p>For at implementere en spinner tilføjes en <code>.spinner</code> class på en lukket div.</p>
    <ul>
    <li>Eksempel: <code>&lt;div class="spinner"&gt;&lt;/div&gt;</code></li>
    </ul>
    <p>For at ændre spinnerens størrelse kan <code>font-size</code> gøres større eller mindre.</p>
  </div>
</div>

<div class="accordion-bordered accordion-docs">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="spinner-docs">
    Retningslinjer
  </button>
  <div id="spinner-docs" class="accordion-content">
     <article>
        <section>
            <h4>Tilgængelighed</h4>
            <p>Anvend ARIA aria-busy=true til at markere for skærmlæsere at der er en live region i gang med indlæsning og sæt værdien til false, når den er indlæst.</p>
        </section>
        <section>
            <h4>Brugervenlighed</h4>
            <h5>Anvendes til</h5>
            <p>En spinner anvendes til at signalere en forsinket indlæsning af en side eller del-funktion ved at give brugeren en synlig respons.</p>
            <h5>Anvendes ikke til</h5>
            <p>Spinner skal ikke anvendes som en standard komponent på alle løsninger, da det må forventes at langt størstedelen vil kunne indlæse inden for 3 sekunder.</p>
            <h5>Vejledning</h5>                
            <ul>
                <li>Anvend kun spinners i særdeles begrænset omfang og kun på løsninger, hvor der kan forventes ventetid.</li>
                <li>En spinner skal ikke anvendes til kompensation for en permanent langsom performance.</li>
                <li>En spinner bør ikke køre mere end 5-10 sekunder før brugeren gøres opmærksom på, at der må forventes lidt ventetid. </li>
            </ul>
        </section>
      </article>
  </div>
</div>