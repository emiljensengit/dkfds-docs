---
permalink: /komponenter/beskeder/
layout: styleguide
type: component
title: Beskeder (Alerts)
category: Komponenter_category
subcategory: Design og kode
lead: 
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
            <h4>Tilgængelighed</h4>
            <ul>
                <li>Anvend ARIA <code>role=alert</code> til at øge tilgængeligheden ved at markere beskeden som en ikke-interaktiv del af sidens indhold. Hvis beskeden indeholder interaktivitet for brugeren, skal den mærkes op med <code>role=alertdialog</code> i stedet.</li>
                <li>Undgå at skjule beskeder på siden fx vha <code>display:none</code> eller <code>visibility: hidden</code>, da de risikerer at blive læst op af en skærmlæser.</li>
            </ul>
        </section>
        <section>
            <h4>Brugervenlighed</h4>
            <h5>Anvendes til</h5>
            <ul>
                <li>Beskeder (Alerts) anvendes til at give brugeren vigtig og aktuel information om fx status, fejl og opmærksomhedspunkter fx om opdateringer o.l.</li>
                <li>Anvend beskeder til at bekræfte en handling eller give besked om behov for handling.</li>
            </ul>
            <h5>Anvendes ikke til</h5>
                <ul>
                    <li>Beskeder anvendes ikke til at markere fejlindtastning ved et specifikt felt i en formular. </li>
                    <li>Information omkring en potentielt kritisk handling bør håndteres vha en modal-dialog eller andet, så brugeren ikke risikerer at overse eller misforstå beskeden.</li>
                </ul>
            <h5>Vejledning</h5>
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
