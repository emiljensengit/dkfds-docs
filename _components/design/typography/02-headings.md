---
type: component
title: Overskrifter
parent: typography
order: 02
---

<p class="font-lead">Overskrifter strukturerer siden, giver overblik og hjælper brugeren samt skærmlæseren til at kunne overskue sidens logik og opbygning.</p>
<p>Overskriftstyperne h1-h6 har to formål:</p>
<ol>
  <li>De er sidens indholdsfortegnelse for skærmlæsere.</li>
  <li>De skaber et visuelt hierarki og gør siden overskuelig ved at inddele siden i afsnit og underafsnit.</li>
</ol>
<h3>Brug den overskrift som ser bedst ud uden at ødelægge oplevelsen for brugere, der anvender skærmlæsere</h3>
<p>Alle HTML-overskrifter h1 til h6 er givet en størrelse, farve og vægt, hvilket vil sige at de er stylet. Denne styling kan overskrives således, at man både kan holde en semantisk korrekt opbygning til skærmlæseren og samtidig have mulighed for rent visuelt at ændre stylingen. Dette kan gøres, hvis det fx ser bedre ud at en overskrift h3 ligner en overskrift h5. Så kan det gøres uden at det ødelægger oplevelsen for de brugere, der anvender en skærmlæser. I koden ser det således ud:<code>&lt;h3 class="h5"&gt;</code></p>

{% include code/preview.html component="headings" %}
{% include code/accordion.html component="headings" %}

<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="false" aria-controls="headings-docs-tech">
    Implementering
  </button>
  <div id="headings-docs-tech" aria-hidden="true" class="accordion-content">
    <p>Alle headings (h1-h6) er stylet med mixins, som styrer hver enkel headings font-family, font-size, line-height, font-weight og color. </p>
      <div class="code-highlight">
        <code>
          @mixin h1{ <br>
          &nbsp;&nbsp;&nbsp;font-family: $font-name; <br>
          &nbsp;&nbsp;&nbsp;font-size: $h1-font-size; <br>
          &nbsp;&nbsp;&nbsp;line-height: $h1-line-height; <br>
          &nbsp;&nbsp;&nbsp;font-weight: $font-weight-bold; <br>
          &nbsp;&nbsp;&nbsp;color: $color-black;<br>
        }
        </code>
      </div>
      <div class="code-highlight">
        <code>
          h1, .h1 {<br>
          &nbsp;&nbsp;&nbsp;@include h1;<br>
          }
        </code>
      </div>
      <p>Der er oprettet klasser for hver heading, som arver styling fra heading mixins. Dette betyder at hvis der ønskes en h1 med styling fra h2, skal klassen .h2 blot indsættes på &lt;h1 class="h2"&gt;</p>
  </div>
</div>


<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="typoheadings-docs">
    Retningslinjer
  </button>
  <div id="typoheadings-docs" aria-hidden="false" class="accordion-content">
    <article>
      <p>Overskrifter er både et visuelt virkemiddel og en struktur i koden.</p>
      <section>
          <h4>Tilgængelighed</h4>
          <p>H-tagget i koden bruges til at strukturere sidens logik for skærmlæsere. En god metafor for H-tags er at de tegner en indholdsfortegnelse op, som illustreret nedenfor.</p>
<pre>
  Sidetitel (h1)                1
    Afsnit (h2)                 1.1
      Underafsnit (h3)          1.1.1
    Afsnit (h2)                 1.2
      Underafsnit (h3)          1.2.1
    Afsnit (h2)                 1.3
      Underafsnit (h3)          1.3.1
        Under-underafsnit (h4)  1.3.1.1
        Under-underafsnit (h4)  1.3.1.2
    Afsnit (h2)                 1.4
    Afsnit (h2)                 1.5
</pre>
          <p>Skærmlæseren læser dette op og brugeren kan nemt hoppe imellem afsnit og underafsnit. Ødelægger man denne struktur, kan det blive en forvirrende oplevelse for de brugerere, der orienterer sig via en skærmlæser.</p>
          <p>Som beskrevet ovenfor er det muligt at følge en helt stringent struktur for skærmlæsere, og samtidig ændre på overskrifternes visuelle udtryk til brugere, der orienterer sig visuelt.</p>
          <h5>Hvornår skal du bruge overskrifter?</h5>
          <ul>
            <li>Du skal bruge overskrifter til at skabe struktur på din side og gruppere dit indhold i logiske og overskuelige bidder, både for skærmlæsere og visuelt.</li>
          </ul>
          <h5>Hvornår skal du overveje noget andet?</h5>
          <ul>
            <li>Du skal bruge noget andet hvis du vil fremhæve eller ændre styling på tekst som ikke udsiger noget om strukturen på siden. Brug fx beskedboksen til information, fremhæv særlige punkter med punktopstilling eller anvend stor tekst (display).</li>
          </ul>
          <h5>Vejledning</h5>                
          <ul>
              <li>Hold en stram overskriftstruktur i koden. En h3 altid er under en h2, en h4 under en h3 osv. h1 er altid øverst i hierarkiet.</li>  
              <li>Du bør ikke springe overskriftsled over og fx gå direkte fra en h2 til en h4. </li>
              <li>Hvis du visuelt vil have et andet udtryk, så brug en class=hX til at style overskriften om. Dermed bryder du ikke logikken for skærmlæsere, men får et andet visuelt udtryk på dine overskrifter.</li>
          </ul>
          <h5>Hvis du vil vide mere</h5>
          <ul>
            <li><a href="https://www.w3.org/TR/WCAG20-TECHS/H42.html" class="icon-link">H42: Using h1-h6 to identify headings<svg class="icon-svg "><use xlink:href="#open-in-new"></use></svg></a></li>
          </ul>
      </section>
    </article>
  </div>
</div>