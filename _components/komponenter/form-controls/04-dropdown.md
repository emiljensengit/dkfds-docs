---
title: Dropdown-menu
parent: Form controls
order: 04
lead:
---


{% include code/preview.html component="select" classes="preview-dropdown" %}
{% include code/accordion.html component="select" %}
<div class="accordion-bordered accordion-docs">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="dropdown-docs">
    Brugervenlighed
  </button>
  <div id="dropdown-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>
          <h4>Tilgængelighed</h4>
          <p>Dropdown-menu skal have et label tilknyttet.</p>
          <p>Anvend ikke JavaScript til automatisk at sende den valgte værdi, da en skærmlæser vælger hver option i takt med, at de læser dem op.</p>
          <p>Dropdown-menuens værdier er ikke umiddelbart synlige, øger sidens kompleksitet og bør kun anvendes sparsomt</p>
      </section>
      <section>
          <h4>Brugervenlighed</h4>
          <h5>Anvendes til</h5>
          <p>Anvend kun dropdown-menuer, når det er absolut nødvendigt og kun i tilfælde, hvor brugeren skal vælge mellem 7-15 værdier på begrænset plads.</p>
          <h5>Anvendes ikke til</h5>
          <ul>
              <li>Lister med færre værdier end 7.</li>
              <li>Lister med flere værdier end 15. I så tilfælde bør brugeren tilbydes et felt med auto-forslag, når brugeren begynder at indtaste.</li>
              <li>Hvis brugeren skal vælge mere end 1 værdi, skal der i stedet anvendes tjekbokse.</li>
              <li>Dropdown-menu er ikke velegnet til navigation.</li>
          </ul>
          <h5>Vejledning</h5>
          <ul>
              <li>Dropdown-menuer kræver ekstra aftestning på målgruppen pga de kognitive udfordringer, de kan afføde.</li>
              <li>Undgå at lade en dropdown-menus valg påvirke en anden. Det forvirrer mange brugere.</li>
              <li>Hvis du på forhånd ved, at mange brugere vil vælge den samme værdi, så marker den med <code>option selected="selected">Default/option</code>, så de ikke skal bruge tid på at gennemsøge listen.</li>
              <li>Anvend ikke JavaScript til automatisk at sende den valgte værdi, men sørg for at der er en submit-knap til at afsende formularen med.</li>
          </ul>
      </section>
    </article>
  </div>
</div>
