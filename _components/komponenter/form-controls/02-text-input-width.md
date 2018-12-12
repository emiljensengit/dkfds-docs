---
title: Feltbredde
parent: Form controls
order: 02
lead: 
---

{% include code/preview.html component="text-input-width" %}
{% include code/accordion.html component="text-input-width" %}
<div class="accordion-bordered accordion-docs">
  <button class="button-unstyled accordion-button"
      aria-expanded="false" aria-controls="text-input-width">
    Implementering
  </button>
  <div id="text-input-width" aria-hidden="true" class="accordion-content">
    <h4>Input bredde med rem</h4>   
    <p>Inputfelter har en standard bredde på 32rem, for at ændre bredden på inputfelter bruges nedenstående klasser:</p>
    <ul>
      <li><code>.input-width-xxs</code> har en bredde på 8rem</li>
      <li><code>.input-width-xs</code> har en bredde på 16rem</li>
      <li><code>.input-width-s</code> har en bredde på 24rem</li>
      <li><code>.input-width-m</code> har en bredde på 32rem</li>
      <li><code>.input-width-l</code> har en bredde på 40rem</li>
      <li><code>.input-width-xl</code> har en bredde på 48rem</li>
    </ul>
    <h4>Input bredde med tegn</h4>
    <p>For at styre bredden på inputfelter efter tegn, skal der i stedet bruges nedenstående klasser:</p>
    <ul>
      <li><code>.input-char-4</code> har en bredde der passer til 4 tegn</li>
      <li><code>.input-char-8</code> har en bredde der passer til 8 tegn</li>
      <li><code>.input-char-11</code> har en bredde der passer til 11 tegn</li>
      <li><code>.input-char-27</code> har en bredde der passer til 27 tegn</li>
      <p>For at tilføje flere input bredder, der er styret af tegn, skal der tilføjes en ny klasse, hvor det nye tal skal erstattes med X.</p>
      <ul>
        <li><code>.input-char-X { max-width: calc(2px + 16px + 16px + Xch); }</code></li>
      </ul>
    </ul>
    <h4>Validering</h4>
    <p>Vi anbefaler at der laves validering på inputfelter. Nedenfor ses et eksempel på validering af en e-mail, samt validering af et felt der kun må indeholde tal.</p>
    <p class="h5">Felt med email validering</p>
    <ul>
      <li><code>&lt;input type="email" pattern="/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/"&gt;</code></li>
    </ul>
    <p class="h5">Felt med kun tal validering</p>
    <ul>
      <li><code>&lt;input type="number" pattern="[0-9]"&gt;</code></li>
    </ul>
  </div>
</div>

<div class="accordion-bordered accordion-docs">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="text-input-width-docs">
    Brugervenlighed
  </button>
  <div id="text-input-width-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>
          <h4>Tilgængelighed</h4>
          <p>Feltets bredde skal modsvare det, brugeren forventes at indtaste, så tegn ikke skjules.</p>
      </section>
      <section>
          <h4>Brugervenlighed</h4>
          <h5>Anvendes til</h5>
          <p>Feltbredden angiver det forventede omfang, så brugeren kan få en fornemmelse af, hvad der skal indtastes. Dvs fx et felt til et dansk postnummer bør kun være 4 tegn bredt, hvorimod et felt til gadenavn bør være fx 27 tegn. </p>
          <p>Feltbredde bruges til at begrænse antallet af tegn i et felt.</p>
          <h5>Anvendes ikke til</h5>
          <p>Feltbredde anvendes ikke til at validere brugerens input. Hvis der er et bestemt krav til inputvalidering, bør det angives i en vejledning.</p>
          <h5>Vejledning</h5>
          <p>Tilføj feltbredde-værdier som modsvarer den mængde information, brugeren forventes at indtaste, så tegn ikke skjules eller brugeren bliver i tvivl om, vedkommende har indtastet for lidt.</p>
      </section>
    </article>
  </div>
</div>
