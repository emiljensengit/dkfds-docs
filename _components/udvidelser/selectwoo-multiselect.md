---
permalink: /udvidelser/selectwoo-multiselect/
layout: styleguide
type: component
title: Multiselect dropdown
category: Udvidelser_category
subcategory: Udvidelser
lead: Gør det muligt for brugeren at vælge flere elementer fra en liste.
---

<div class="alert alert-warning" role="alert">
  <div class="alert-body">
    <h3 class="alert-heading">Denne komponent er ikke en del af kerne af FDS</h3>
    <p class="alert-text">
      SelectWoo er ikke inkluderet i kernen af FDS. For at inkludere SelectWoo skal der inkluderes et eksternt bibliotek, se implementeringsafsnittet nedenfor.<br><br>
      FDS har implementeret et tema til SelectWoo og findes i <a href="https://github.com/detfaellesdesignsystem/dkfds-plugins">Plugins</a> projektet.
    </p>
  </div>
</div>

{% include code/preview.html component="selectwoo-multiselect" %}
{% include code/accordion.html component="selectwoo-multiselect" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="false" aria-controls="accordion-bordered-docs">
   Implementering
  </button>
  <div id="accordion-bordered-docs" aria-hidden="true" class="accordion-content">
    <p>Multiselect funktionaliteten bygger på biblioteket <a href="https://github.com/woocommerce/selectWoo">SelectWoo</a>, som er en tilgængelig implementering af det populære bibliotek <a href="https://select2.org/">Select2</a>.</p>
    <p>Det må antages at det er et begrænset antal selvbetjeningsløsninger som har brug for denne funktionalitet, derfor er dette bibliotek ikke inkluderet i standard javascript filen <code>dkfds.js</code>. En udvikler skal derfor selv inkludere de nødvendige filer for at få SelectWoo til at virke. Select2's <a href="https://select2.org/getting-started/installation">guide</a> kan bruges til opsætningen, dog skal SelectWoo's javascript filer bruges i steden for. Det er vigtigt at både javascript filer, og styling filer bliver inkluderet.</p>
    <p>På dette dokumentationssite er multiselect funktionaliteten en del af javascript filen <code>selectwoo-examples.js</code>, denne fil har kun til formål at vise funktionaliteten på dette dokumentationsite, og skal ikke inkluderes i selve selvbetjeningsløsningen.</p>
    <p>Eksemplet på denne side er implmenteret her: <code>[Stil til plugins biblioteket]/src/components/selectwoo/example/js/selectwoo-examples.js</code></p>
  </div>
</div>


<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="multiselect-docs">
    Retningslinjer
  </button>
  <div id="multiselect-docs" aria-hidden="false" class="accordion-content">
    <article>
                <section>
                    <h4>Tilgængelighed</h4>
                    <ul>
                        <li>Bemærk: Multiselect dropdown-funktionen (SelectWoo) er gennemtestet af Det Fælles Designsystem og opfylder ikke alle krav til en anbefalet udvidelse. Det er dog den bedste, vi har kunnet finde indtil videre. Du skal bruger- og performanceteste prototyper med SelectWoo med entydigt positive resultat i forhold til din målgruppe, hvis du ønsker at anvende den. Det anbefales generelt, at du overvejer en anden løsning end en multiselect i din løsning.
    
    </li>
                        <li>Multiselect dropdown anvender bl.a. ARIA til at øge den umiddelbare tilgængelighed. Du skal imidlertid være opmærksom på, at en lang valgliste øger den kognitive belastning og dermed sænker den reelle tilgængelighed.</li>
                    </ul>
                
                </section>
                <section>
                    <h4>Brugervenlighed</h4>
                    <h5>Anvendes til</h5>
                    <p>Multiselect dropdown anvendes til at give brugeren mulighed for at fortage mere end ét valg fra en prædefineret liste.</p>
                    <h5>Anvendes ikke til</h5>
                    <ul>
                        <li>Multiselect dropdown egner sig ikke til valg i lister med længere værdier.</li>
                        <li>Multiselect dropdown egner sig ikke til mobile løsninger.</li>
                    </ul>
                    <h5>Vejledning</h5>                
                    <ul>
                        <li>En multiselect dropdown er en avanceret funktion, der bør anvendes i meget begrænset omfang.</li>
                        <li>Overvej om du kan tilbyde en bedre og mere overskuelig løsning fx tjekbokse.</li>
                        <li>På trods af de udvidede muligheder i Select2-udvidelsen bør implementationen holdes så enkel som muligt. </li>
                        <li>Var varsom med at ændre indholdet af næste multiselect i forhold til det forrige valg.</li>
                        <li>Begræns antallet af valgmuligheder i listen, så brugeren ikke mister overblik over sit valg.</li>
                        <li>SelectWoo er afhængig af jQuery og dermed kræver den et ekstra request og ekstra kode i indlæsningen – dette kan nedsætte funktionens performance.</li>
                        <li><a href="https://medium.com/@kollinz/dropdown-alternatives-for-better-mobile-forms-53e40d641b53">Du kan læse mere om alternativer til multiselects her <svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
                    </ul>
                </section>
            
            </article>
  </div>
</div>
