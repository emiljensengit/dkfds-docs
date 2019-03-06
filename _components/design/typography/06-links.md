---
type: component
title: Links
parent: typography
order: 06
---

<p class="font-lead">Links anvendes til at linke rundt i løsningen og til at linke ud af løsningen til eksterne sites.</p>
<p>Vær dog opmærksom på, at hvis der linkes for meget ud til eksterne websites i en selvbetjeningsløsning, kan det virke forstyrrende for flowet og få brugeren ud af kontekst.</p>

{% include code/preview.html component="links" %}
{% include code/accordion.html component="links" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="false" aria-controls="links-docs-tech">
    Implementering
  </button>
  <div id="links-docs-tech" aria-hidden="true" class="accordion-content">
     <article>
        <section>
            <h3 class="h4">Footerlink</h3>
            <p>Et footerlink defineres i koden ved at sætte klassen <code>function-link</code>.</p>
            <h3 class="h4">Eksternt link</h3>
            <p>Et eksternt link defineres i koden ved at sætte klassen <code>icon-link</code> på <code>a</code> elementet. Derudover tilføjes SVG ikonet inline: <code>&lt;svg class="icon-svg"&gt;&lt;use xlink:href="#open-in-new"&gt;&lt;/use&gt;&lt;/svg&gt;</code>.</p>
            <p>For at kunne bruge denne metode, husk da at inkludere SVG ikon samlingen i toppen af hver side under <code>&lt;body&gt;</code>.</p>
        </section>
     </article>
  </div>
</div>
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="typolinks-docs">
    Retningslinjer
  </button>
  <div id="typolinks-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>
        <h3 class="h4">Tilgængelighed</h3>
          <ul>
              <li>Linkteksten skal give mening for brugeren og angive, hvad linket fører hen til.</li>
              <li>Links skal enten understreges eller på anden vis markeres, et link må ikke kun være angivet med en farve.</li>
              <li>Brugerne skal kunne tabulere imellem links og aktivere dem via enter-knappen på keyboardet.</li>
              <li>Links skal have en defineret “href” attribut i koden.</li>
              <li>Har linket en “hover” skal denne kunne aktiveres både med keyboard og mus.</li>
          </ul>
      </section>
      <section>
        <h3 class="h4">Anvendes til</h3>
        <ul>
            <li>Brug links til at lade brugeren navigere til andre sider i din løsning.</li>
            <li>Brug links til at linke til sider uden for din løsning og husk at markere dette med et ikon.</li>
        </ul>
        <h3 class="h4">Brugervenlighed</h3>
        <p>Hvis et link fører væk fra den aktuelle side og brugeren kan miste data eller risikere at skulle udfylde samme del igen, så adviser brugeren om dette i et modal vindue og bed denne om at be- eller afkræfte ønsket om at forlade siden.</p>
        <p>Links skal anvendes med omtanke i en selvbetjeningsløsning. Hvis der linkes for meget ud til eksterne websites i en selvbetjeningsløning, kan det virke forstyrrende for flowet og få brugeren ud af kontekst. Omvendt kan det give stor værdi, hvis der linkes ud til relevante informationer, der understøtter brugerens vej gennem selvbetjeningsløsningen, og som kan give væsentlige input til, hvad brugeren skal indtaste i løsningen.</p>
        <p>Gør gerne brugeren opmærksom på, hvor det eksterne link fører hen, fx i en parentes som en del af linket, hvis ikke selve linkteksten viser det.</p>
      </section>
    </article>
  </div>
</div>