---
type: component
title: Manchettekst (lead paragraph)
parent: typography
order: 04
---
<p class="font-lead">Manchettekst bruges typisk til at introducere et trin eller en sides indhold. Den bruges hvor og når det giver mening i kontekst.</p>

<p>Giv tekst extra focus ved at give den klassen <code>.font-lead</code>.</p>

{% include code/preview.html component="lead_paragraph" %}
{% include code/accordion.html component="lead_paragraph" %}


<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="typolead-docs">
    Retningslinjer
  </button>
  <div id="typolead-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>   
          <ul>
            <li>Hold manchetteksten kort og præcis, gerne max tre linjer.</li>  
            <li>Manchetteksten er kun til korte introduktionstekster ikke til lange informationstekster. Brug brødtekst og lister til yderligere informationer.</li>
            <li>Brug ikke manchettekst, hvis det ikke er nødvendigt. Fx når brugeren kan afkode siden uden og begynde at indtaste med det samme.</li>
            <li>Typisk starter indtastningsflowet eller en sektion lige under manchetteksten, men den kan godt følges af brødtekst, lister, links, o.l. hvis det er nødvendigt for brugerens gennemførelse af løsningen.</li>
          </ul>
      </section>
    </article>
  </div>
</div>