---
permalink: /udvidelser/selectwoo-multiselect/
layout: styleguide
type: component
title: Multiselect dropdown
category: Udvidelser_category
subcategory: Udvidelser
lead: Gør det muligt for brugeren at vælge flere elementer fra en liste.
---

<div class="alert alert-warning" role="alert">
  <div class="alert-body">
    <h3 class="alert-heading">Denne feature er ikke en del af Det Fælles Designsystem.</h3>
    <p class="alert-text">
      SelectWoo er ikke inkluderet i kernen af Det Fælles Designsystem. For at inkludere SelectWoo skal der inkluderes et eksternt bibliotek, se implementeringsafsnittet nedenfor.<br><br>
      Det Fælles Designsystem har implementeret et tema til SelectWoo og findes i <a href="https://github.com/detfaellesdesignsystem/dkfds-plugins">Plugins</a> projektet.
    </p>
  </div>
</div>

{% include code/preview.html component="selectwoo-multiselect" %}
{% include code/accordion.html component="selectwoo-multiselect" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="false" aria-controls="accordion-bordered-docs">
   Implementering
  </button>
  <div id="accordion-bordered-docs" aria-hidden="true" class="accordion-content">
    <p>Multiselect funktionaliteten bygger på biblioteket <a href="https://github.com/woocommerce/selectWoo">SelectWoo</a>, som er en tilgængelig implementering af det populære bibliotek <a href="https://select2.org/">Select2</a>.</p>
    <p>Det må antages at det er et begrænset antal selvbetjeningsløsninger som har brug for denne funktionalitet, derfor er dette bibliotek ikke inkluderet i standard javascript filen <code>dkfds.js</code>. En udvikler skal derfor selv inkludere de nødvendige filer for at få SelectWoo til at virke. Select2's <a href="https://select2.org/getting-started/installation">guide</a> kan bruges til opsætningen, dog skal SelectWoo's javascript filer bruges i steden for. Det er vigtigt at både javascript filer, og styling filer bliver inkluderet.</p>
    <p>På dette dokumentationssite er multiselect funktionaliteten en del af javascript filen <code>selectwoo-examples.js</code>, denne fil har kun til formål at vise funktionaliteten på dette dokumentationsite, og skal ikke inkluderes i selve selvbetjeningsløsningen.</p>
    <p>Eksemplet på denne side er implmenteret her: <code>[Stil til plugins biblioteket]/src/components/selectwoo/example/js/selectwoo-examples.js</code></p>
  </div>
</div>


<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="multiselect-docs">
    Brugervenlighed
  </button>
  <div id="multiselect-docs" aria-hidden="false" class="accordion-content">
    
  </div>
</div>
