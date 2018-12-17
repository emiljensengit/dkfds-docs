---
permalink: /komponenter/tags/
layout: styleguide
type: element
title: Tags
category: Komponenter_category
subcategory: Design og kode
lead: 
---

{% include code/preview.html component="tags" %}
{% include code/accordion.html component="tags" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
    aria-expanded="false" aria-controls="tags-code-documentation">
    Implementering
  </button>
  <div id="tags-code-documentation" class="accordion-content">
    <p>Der er to eksempler på hvordan tags kan se ud. Ét uden ikon og ét med ikon.</p>
    <p>Alle tags skal have en <code>.tag</code> class <code>&lt;button&gt;&lt;/button&gt;</code> elementet. Hvis et tag skal have ikon, skal der yderligere tilføjes en <code>.tag-icon</code> class.</p>
    <p>Et tag vil se følgende ud:</p>
    <ul>
      <li><code>&lt;button class="tag"My tag&lt;/button&gt;</code></li>
    </ul>
    <p>Et tag med ikon vil se følgende ud:</p>
    <ul>
      <li><code>&lt;button class="tag tag-icon"My tag&lt;/button&gt;</code></li>
    </ul>
  </div>
</div>
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="accordion-bordered-docs">
    Brugervenlighed
  </button>
  <div id="accordion-bordered-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>
          <h4>Tilgængelighed</h4>
          <ul>
              <li>Tags markeres tydeligt med en focus-tilstand, når brugere vha tab-tasten navigerer sig frem til dem.</li>
              <li>Undgå at anvende <code>div</code> eller <code>img</code> tags til at konstruere et tag, da skærmlæsere ikke automatisk kan afkode funktionaliteten i så fald.</li>
              <li>Tags med et indlejret svg-ikon som fx (X) for ”Slet” eller ”Fjern” skal være klikbare på hele tag’et og ikke kun ikonet.</li>
          </ul>               
      </section>
      <section>
          <h4>Brugervenlighed</h4>
          <h5>Anvendes til</h5>
          <p>Et tag er en sekundær funktionalitet, der typisk anvendes til meta-information om indhold, der kan kategoriseres, filtreres eller på anden beskrives med nøgleord.</p>
          <h5>Anvendes ikke til</h5>
          <ul>
          <li>Primær funktionalitet som fx ”Gem”, hvor der i stedet bør anvendes en knap.</li>
          <li>Hvis tags anvendes i tæt forbindelse med knapper, kan det forvirre brugeren. Overvej nøje placering og anvendelse og udfør brugertest.</li>
          </ul>
          <p></p>
          <h5>Vejledning</h5>
          <ul>
              <li>Generelt skal du bruge tags til at give brugeren yderligere, sekundær information og nøgleord i relation til  indholdet. </li>
              <li>Brug så mange tags, der giver mening, men så få som muligt.</li>
              <li>Brug ord og begreber, der kan genkendes fra løsningens kontekst og ikke ukendte. </li>
              <li>Skriv kort og præcist.</li>
              <li>Brug stort forbogstav og små bogstaver for resten.</li>
              <li>Undgå at blande funktioner og husk at tags er noget, der må kunne overses uden at løsningens anvendelse forringes. </li>
          </ul>
      </section>
    </article>
  </div>
</div>
