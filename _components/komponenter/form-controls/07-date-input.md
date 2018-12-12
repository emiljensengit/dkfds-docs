---
title: Datovælger
parent: Form controls
order: 07
lead: Tre seperate felter er den nemmeste måde for brugeren at indskrive dato.
---

{% include code/preview.html component="date-input" %}
{% include code/accordion.html component="date-input" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="false" aria-controls="date-input-tech">
    Implementering
  </button>
  <div id="date-input-tech" aria-hidden="true" class="accordion-content">
     <ul>
      <li>Dato-komponenten består af 2 dele: 3 input-felter og en datepicker.</li>
      <li>Datepickeren er implementeret med vendor scriptet <a href="https://github.com/dbushell/Pikaday">Pikaday</a>. Dette script og den javascript-kode som initialisere dato-komponenten er inkluderet i core javascript filen (dkfds.js).</li>
      <li>Inputfelterne bruger 'regex-input-mask' scriptet som forhindre brugeren i at indskrive mere end 2 tal for dag og måned, og 4 tal i år-inputtet. Derudover forhindre 'regex-input-mask' at brugeren indskriver tegn som ikke er tal. Eksempel for day og måned: <code> data-input-regex="^[0-9]{0,2}$"</code></li>
      <li>
        For at initialisere dato-komponenten skal <code>.date-group</code>-elementet have klassen <code>.js-calendar-group</code>. Derudover skal de tre inputfelter have følgende klasser:
        <ul>
          <li>Dag input: <code>.js-calendar-day-input</code></li>
          <li>Måned input: <code>.js-calendar-month-input</code></li>
          <li>År input: <code>.js-calendar-year-input</code></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="date-input-docs">
    Brugervenlighed
  </button>
  <div id="date-input-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>
          <h4>Tilgængelighed</h4>
          <p>Anvend ikke JavaScript til automatisk at flytte fokus fra felt til felt, da det gør det svært for tastatur-brugere at navigere i formularen.</p>          
      </section>
      <section>
          <h4>Brugervenlighed</h4>
          <h5>Anvendes til</h5>
          <p>Sætte brugeren i stand til at tilføje struktureret datoinformation.</p>
          <h5>Anvendes ikke til</h5>
          <p>Fx en booking, planlægning eller mere præcis dato- og tidsangivelse. Der bør du i stedet overveje en date picker.</p>
          <h5>Vejledning</h5>
          <p>Felternes rækkefølge skal modsvare den datoform, der anvendes i Danmark, dvs. dag, måned og år. Det skal afspejles i felternes labels.</p>
      </section>
    </article>
  </div>
</div>
