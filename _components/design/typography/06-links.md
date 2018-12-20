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
      aria-expanded="true" aria-controls="typolinks-docs">
    Retningslinjer
  </button>
  <div id="typolinks-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>
          <h4>Tilgængelighed</h4>
          <ul>
              <li>Linkteksten skal give mening for brugeren og angive, hvad linket fører hen til.</li>
              <li>Links skal enten understreges eller på anden vis markeres, et link må ikke kun være angivet med en farve.</li>
              <li>Brugerne skal kunne tabulere imellem links og aktivere dem via enter-knappen på keyboardet.</li>
              <li>Links skal have en defineret “href” attribut i koden.</li>
              <li>Har linket en “hover” skal denne kunne aktiveres både med keyboard og mus.</li>
          </ul>
      </section>
      <section>
        <h4>Anvendes til</h4>
        <ul>
            <li>Brug links til at lade brugeren navigere til andre sider i din løsning.</li>
            <li>Brug links til at linke til sider uden for din løsning og husk at markere dette med et ikon.</li>
        </ul>
        <h4>Brugervenlighed</h4>
        <p>Hvis et link fører væk fra den aktuelle side og brugeren kan miste data eller risikere at skulle udfylde samme del igen, så adviser brugeren om dette i et modal vindue og bed denne om at be- eller afkræfte ønsket om at forlade siden.</p>
        <p>Links skal anvendes med omtanke i en selvbetjeningsløsning. Hvis der linkes for meget ud til eksterne websites i en selvbetjeningsløning, kan det virke forstyrrende for flowet og få brugeren ud af kontekst. Omvendt kan det give stor værdi, hvis der linkes ud til relevante informationer, der understøtter brugerens vej gennem selvbetjeningsløsningen, og som kan give væsentlige input til, hvad brugeren skal indtaste i løsningen.</p>
        <p>Gør gerne brugeren opmærksom på, hvor det eksterne link fører hen, fx i en parentes som en del af linket, hvis ikke selve linkteksten viser det.</p>
      </section>
    </article>
  </div>
</div>