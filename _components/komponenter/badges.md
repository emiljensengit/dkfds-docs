---
permalink: /komponenter/badges/
layout: styleguide
type: element
title: Badges
category: Komponenter_category
subcategory: Komponenter
lead: Badges draw attention to new or important content.
---

{% include code/preview.html component="badges" %}
{% include code/accordion.html component="badges" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
    aria-expanded="false" aria-controls="code-documentation">
    Implementering
  </button>
  <div id="code-documentation" class="accordion-content">
    <section>
        <p>Alle badges skal have en <code>.badge</code> class på <code>&lt;label&gt;&lt;/label&gt;</code> elementet.</p>
        <p>Badges findes i to størrelser, store og små:</p>
        <ul>
          <li><p>For et stort badge skal der tilføjes en <code>.badge-large</code> class. </p></li>
          <li><p>For et lille badge skal der tilføjes en <code>.badge-small</code> class. </p></li>
        </ul>
        <p>Et stort badge vil se følgende ud:</p>
        <ul>
          <li><code>&lt;label class="badge badge-large"My badge&lt;/label&gt;</code></li>
        </ul>
        <p>Et lille badge vil se følgende ud:</p>
        <ul>
          <li><code>&lt;label class="badge badge-small"My badge&lt;/label&gt;</code></li>
        </ul>
    </section>
  </div>
</div>

<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="label-docs">
    Retningslinjer
  </button>
  <div id="label-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>
          <h4>Tilgængelighed</h4>
          <ul>
              <li>Interaktive badges markeres tydeligt med en focus-tilstand, når brugere vha tab-tasten navigerer sig frem til dem.</li>
              <li>Hvis badges anvendes dynamisk i løsningen til at gøre opmærksom på nyt indlæst indhold eller ændringer på siden, skal du anvende ARIA live regions til at gøre skærmlæsere på opmærksomme på ændringerne.</li>
          </ul>
      </section>
      <section>
          <h4>Brugervenlighed</h4>
          <h5>Anvendes til</h5>
          <p>Badges anvendes til at gøre opmærksom på ændringer, nyt eller vigtigt indhold.</p>
          <h5>Anvendes ikke til</h5>
          <ul>
              <li>Hvis et badges placering gør, at det kan misforstås som en knap, skal du undlade at anvende det. Test altid for dette, når du anvender badges.</li>
              <li>Overvej at markere ændringer på siden ved at markere selve det ændrede fx med en baggrundsfarve eller en typografisk markering som fx fed tekst.</li>
              <li>Hvis indholdet forventes at udskiftes dynamisk som fx en nyhedsside, kan det være nok blot at placere nyeste øverst og undlade badge.</li>
          </ul>
          <h5>Vejledning</h5>                
          <ul>
              <li>Brug ord og begreber, der kan genkendes fra løsningens kontekst og ikke ukendte. </li>  
              <li>Badges skrives med store bogstaver.</li>
              <li>Hvis det anvendte badge ikke er interaktivt (fx som link), skal det ikke have hover, focus eller active styling.</li>
              <li>Bland aldrig interaktive og statiske badges i samme løsning. Brugerne forventer ensartet opførsel indenfor løsningen.</li>
              <li>Vær varsom med at markere for meget med badges – brug dem kun, hvor det virkelig er meningsfuldt.</li>
          </ul>
      </section>
    </article>
  </div>
</div>
