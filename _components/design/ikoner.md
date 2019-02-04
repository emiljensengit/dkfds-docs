---
permalink: /design/ikoner/
layout: styleguide
title: Ikoner
category: Design_category
lead: Ikoner benyttes til visuelt at understrege en handling eller en information. Ikoner kan underbygge et budskab eller gøre det lettere at afkode en side. Ikoner kan dog sjældent erstatte tekst.
order: 25
---

<p>Nedenfor vises de ikoner som er inkluderet i designsystemet. Ikonerne er reserveret til deres specifikke formål og skal anvendes som sådan. Hvis du har brug for yderligere ikoner henviser vi til <a href="https://material.io/tools/icons/?style=outline" class="icon-link">Material Design<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>, <a href="https://materialdesignicons.com" class="icon-link">Material Design Icons<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a> eller lignende</p>

<div class="alert alert-info alert--paragraph" role="alert" aria-label="Beskedbox der viser information">
  <div class="alert-body">
    <p class="alert-text">Bruges eller skabes andre ikoner end de viste skal de <a class="icon-link" href="https://material.io/design/iconography/system-icons.html#grid-keyline-shapes">passe ind visuelt<svg class="icon-svg "><use xlink:href="#open-in-new"></use></svg></a> og de må ikke ligne eller kunne forvirres med designsystemets andre ikoner.</p>
  </div>
</div>

{% include code/preview.html component="icons--svg" %}
{% include code/accordion.html component="icons--svg" %}

<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
    aria-expanded="false" aria-controls="icons-implementation">
    Implementering
  </button>
  <div id="icons-implementation" class="accordion-content">
    <p>Ikonerne kan indsættes på to måder, enten via klasser eller som inline svg.</p>
    <h5>Ikoner indsat via klasser</h5>
    <p>Ikoner der indsættes inline med i-tagget får på den måde samme skriftstørrelse og farve. Følgende kode indsætter et 'alert'-ikon: <code>&lt;i class="icon icon-alert-outline"&gt;&lt;/i&gt;</code></p>
    <h5>Ikoner indsat via inline svg</h5>
    <p>I toppen af <code>&lt;body&gt;</code> er alle svg-ikoner indsat i et område som er skjult. Følgende kode linker til et af disse svg ikoner og indsætter det via dets <code>id</code>: <code>&lt;svg class="icon-svg"&gt;&lt;use xlink:href="#alert-outline"&gt;&lt;/use&gt;&lt;/svg&gt;</code></p>
    <h5>Tilgængelighed</h5>
    <p>Husk at beskrive ikonet med tekst, evt. med “alt” tekst i koden, hvis ikonet står for sig selv, fx ikonet for “åbner i nyt vindue” <svg class="icon-svg "><use xlink:href="#open-in-new"></use></svg> skal der altid “alt” tekst på i koden. Fx: <code>&lt;i class="icon icon-alert-outline” alt=“beskrivelse af ikonet skrives her”&gt;&lt;/i&gt;</code></p>
    <p>Dekorative ikoner bør undgås, men hvis de bruges skal de ikke beskrives eller have “alt” tekst, da de ikke bærer nogen betydning eller er vigtige for brugeren.</p>
  </div>
</div>

<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
    aria-expanded="true" aria-controls="icons-docs">
    Retningslinjer
  </button>
  <div id="icons-docs" class="accordion-content">
  <p>Ikoner kan understøtte din kommunikation visuelt. Ikoner kan enten skabe klarhed eller tilføre forvirring. Tilføj kun ikoner, hvis det understøtter kommunikationen, er du i tvivl så vælg tekst alene. Hvorvidt du skal anvende et ikon eller ej afhænger i høj grad af konteksten.
  </p>
  <h5>Anbefalinger</h5>
  <ul>
    <li>Brug kun ikoner, hvor de understøtter brugerens forståelse af det som kommunikeres.</li>
    <li>Følg gængse konventioner for brug af ikoner, hvis de findes. Fx Hus-ikonet anvendes til “hjem”, som går til en forside. Lup-ikonet, bruges til at indikere en søgemulighed, osv.</li>
    <li>Undgå dekorative ikoner, de bliver let til visuel støj og øger dermed den kognitive belastning.</li>
    <li>Illustrative ikoner skal bruges med omtanke, hvis brugeren ikke forstår ikonet umiddelbart er det oftest bedre at bruge tekst uden ikon.</li>
  </ul>
  <h5>Illustrative ikoner</h5>
  <p>Illustrative ikoner er unikke for en given selvbetjeningsløsning, der giver mening i den givne kontekst, men ikke nødvendigvis i andre sammenhænge.</p>
  <p>Ikoner der anvendes illustrativt må ikke ligne eller være de samme som anvendes til navigation, feedback og funktionalitet.</p>
  <p>Vi bruger Material Design ikoner som udgangspunkt, men illustrative ikoner kan også tegnes specifikt til en løsning. Gøres dette, anbefaler vi at følge <a href="https://material.io/design/iconography/system-icons.html#" class="icon-link">Material Designs anvisninger for design af ikoner<svg class="icon-svg "><use xlink:href="#open-in-new"></use></svg></a>.
  </p>
  <h5>Links</h5>
  <ul class="nobullet-list">
  <li><a href="https://www.nngroup.com/articles/classifying-icons/" class="icon-link">https://www.nngroup.com/articles/classifying-icons/<svg class="icon-svg "><use xlink:href="#open-in-new"></use></svg></a></li>
  <li><a href="https://www.nngroup.com/articles/icon-usability/" class="icon-link">https://www.nngroup.com/articles/icon-usability/<svg class="icon-svg "><use xlink:href="#open-in-new"></use></svg></a></li>
  <li><a href="https://www.nngroup.com/articles/icon-testing/" class="icon-link">https://www.nngroup.com/articles/icon-testing/<svg class="icon-svg "><use xlink:href="#open-in-new"></use></svg></a></li>
  </ul>
  </div>
</div>
