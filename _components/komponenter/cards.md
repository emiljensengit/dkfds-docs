---
permalink: /komponenter/cards/
layout: styleguide
type: component
title: Cards
category: Komponenter_category
subcategory: Komponenter 
lead: A card is a sheet of material that serves as an entry point to more detailed information.
---

{% include code/preview.html component="cards" %}
{% include code/accordion.html component="cards" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
    aria-expanded="false" aria-controls="code-documentation">
    Implementering
  </button>
  <div id="code-documentation" class="accordion-content">
    <section>
        <p>Alle cards har en <code>.card</code> class. Cards kan bestå af en header, et tekstområde, et contentområde og et aktionområde. Der er ingen specifik rækkefølge af områder og de kan derfor sammensættes efter eget behov og i alle størrelser. Der skal dog overholdes, hvad der bliver placeret i de forskellige områder. Hver område er beskrevet nedenfor. </p> 
        <h4>Header</h4>
        <p>Headeren har en <code>.card-header</code> class, og indeholder en titel og en understøttende tekst, som alle er p-tags med hver deres class.</p>
        <ul>
          <li><code>.header-titel</code></li>
          <li><code>.subheader</code></li>
        </ul>
        <h4>Tekstområde</h4>
        <p>Tekstområdet har en <code>.card-text</code> class, og indeholder brødtekst, som har en class.</p>
        <ul>
          <li><code>.text</code></li>
        </ul>
        <h4>Contentområde</h4>
        <p>Contentområdet har en <code>.card-content</code> class, og kan indeholde brødtekst og andet, såsom displaytekst og grafer, der har hver deres div med hver deres class. <code>.card-content</code> har en stribet baggrundsfarve, denne baggrundsfarve er midlertidig og vises kun for at indikere contentområdet. For at se hvilke andre baggrundsfarver der kan bruges, se på "Baggrundsfarver" under "Hjælpefunktioner" i sidenavigationen. Det er også muligt at tilføje andre farver.</p> 
        <ul>
          <li><code>.content-text</code></li>
          <li><code>.content</code></li>
        </ul>
        <h4>Aktionsområde</h4>
        <p>Aktionsområdet har en <code>.card-action</code> class, kan indeholde brødtekst, knapper, links og funktionelle link, som alle har hver deres div med hver deres class.</p>
        <ul>
          <li><code>.action-content</code></li>
          <li><code>.action-buttons</code></li>
          <li><code>.action-links</code></li>
        </ul>
    </section>
  </div>
</div>

<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="alert-docs">
    Retningslinjer
  </button>
  <div id="alert-docs" aria-hidden="false" class="accordion-content">
     <article>
        <section>
            <h4>Tilgængelighed</h4>
            <p>Cards skal overholde html outline, så browseren og evt. skærmlæsere kan afkode det korrekt. Dvs hvis det foregående afsnit er en heading 3, skal dit cards’ overskrift være en heading 4.</p>
        </section>
        <section>
            <h4>Brugervenlighed</h4>
            <h5>Anvendes til</h5>
            <p>Cards anvendes til at gruppere funktionalitet, der adskiller sig fra sidens øvrige indhold. Det kan fx være en afledt, men ikke direkte koblet ekstra funktion ift sidens kontekst. </p>
            <h5>Anvendes ikke til</h5>
            <ul>
                <li>Cards anvendes ikke til det primære indhold på en løsning, men til indhold der kan stå og forstås alene og fortsat være del af den samlede løsning.</li>
                <li>Brug ikke cards udelukkende af visuelle hensyn, som placeholders for ornamental grafik eller indhold uden interaktion.</li>
                <li>Cards er ikke en statusbesked.</li>
            </ul>
            <h5>Vejledning</h5>
            <ul>
                <li>Cards skal tilbyde en enkel og fokuseret funktion. </li>
                <li>Cards er velegnede til interaktion med brugeren, men brug dem kun, når der tilbydes en ekstra funktionalitet af grupperet indhold.</li>
                <li>Cards er velegnede til responsive løsninger.</li>
                <li>Der kan være flere cards på en side, men sørg for at de fremtræder roligt i sidens layout og ikke bryder sidens naturlige aflæsning.</li>
                <li>Undgå lange tekster.</li>
                <li>Skriv kort og præcist.</li>
            </ul>
        </section>
    </article>
  </div>
</div>