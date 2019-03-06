---
permalink: /komponenter/beskeder/
layout: styleguide
type: component
title: Beskeder (Alerts)
category: Komponenter_category
subcategory: Komponenter
description: Beskeder bruges til at give en besked om en given handling, eller gøre opmærksom på noget vigtigt, når man kommer ind på en ny side.
---

{% include code/preview.html component="alerts" %}
{% include code/accordion.html component="alerts" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="alert-docs">
    Retningslinjer
  </button>
  <div id="alert-docs" aria-hidden="false" class="accordion-content">
    <article>
        <section>
            <h2 class="h4">Tilgængelighed</h2>
            <ul>
                <li>Anvend ARIA <code>role=alert</code> til at øge tilgængeligheden ved at markere beskeden som en ikke-interaktiv del af sidens indhold. Hvis beskeden indeholder interaktivitet for brugeren, skal den mærkes op med <code>role=alertdialog</code> i stedet.</li>
                <li>Undgå at skjule beskeder på siden fx vha <code>display:none</code> eller <code>visibility: hidden</code>, da de risikerer at blive læst op af en skærmlæser.</li>
            </ul>
        </section>
        <section>
            <h2 class="h4">Brugervenlighed</h2>
            <h3 class="h5">Anvendes til</h3>
            <ul>
                <li>Beskeder (Alerts) anvendes til at give brugeren vigtig og aktuel information om fx status, fejl og opmærksomhedspunkter fx om opdateringer o.l.</li>
                <li>Anvend beskeder til at bekræfte en handling eller give besked om behov for handling.</li>
            </ul>
            <h3 class="h5">Anvendes ikke til</h3>
                <ul>
                    <li>Beskeder anvendes ikke til at markere fejlindtastning ved et specifikt felt i en formular. </li>
                    <li>Information omkring en potentielt kritisk handling bør håndteres vha en modal-dialog eller andet, så brugeren ikke risikerer at overse eller misforstå beskeden.</li>
                </ul>
            <h3 class="h5">Vejledning</h3>
            <ul>
                <li>Brug kun beskeder, når det er reelt nødvendigt og meningsfuldt.</li>
                <li>Gør informationen aktiv og handlingsanvisende, så brugeren forstår, hvad der er behov for eller hvad den aktuelle status er. </li>
                <li>Brug ord og begreber, der kan genkendes fra løsningens kontekst og ikke ukendte. </li>
                <li>Skriv kort og præcist og undgå tekniske beskeder, der risikerer at forvirre brugeren. </li>
                <li>Brug beskeder til at øge brugerens forståelse for løsningen. </li>
            </ul>
        </section>
    </article>
  </div>
</div>
