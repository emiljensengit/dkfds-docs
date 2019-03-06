---
title: Radioknap
parent: Form controls
order: 06
lead: 
---

{% include code/preview.html component="radiobutton" %}
{% include code/accordion.html component="radiobutton" %}
<div class="accordion-bordered accordion-docs">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="radio-docs">
    Retningslinjer
  </button>
  <div id="radio-docs" aria-hidden="false" class="accordion-content">
   <article>
      <section>
        <h3 class="h4">Tilgængelighed</h3>
        <ul>
            <li>Radioknapper (mere end 1) skal altid indsættes i et fieldset inkl. legend. En enkelt tjekboks skal ikke sidde i et fieldset.</li>
            <li>Hver radioknap skal have label tilknyttet. Label kan erstattes med title-attributten.</li>
            <li>Hver radioknap skal have sit eget id og dets tilhørende label den samme værdi angivet. </li>
            <li>Tjekboksenes aktuelle design er ændret ift standardvisningen for at gøre dem tydeligere og øge deres visuelle respons til brugerens interaktion.</li>
            <li>Tjekboksene er gjort tilgængelige for skærmlæsere, på trods af deres visuelle design, ved at selve checkbox tagget er placeret udenfor det synlige skærmområde.</li>
        </ul>
      </section>
      <section>
        <h3 class="h4">Brugervenlighed</h3>
        <h4 class="h5">Anvendes til</h4>
        <ul>
            <li>Radioknapper giver brugeren mulighed for at vælge en enkelt værdi ud fra en synlig liste.</li>
            <li>Når brugeren skal kunne få overblik over de mulige valg.</li>
            <li>Når listen over mulige valg kan være på en mobilvisning.</li>
        </ul>
        <h4 class="h5">Anvendes ikke til</h4>
        <ul>
            <li>Når brugeren skal kunne vælge mere end én værdi ud fra en synlig liste.</li>
            <li>Hvis antallet af mulige værdier er for mange til en mobilvisning, bør du overveje en dropdown-menu.</li>
            <li>Hvis brugeren skal kunne undlade at vælge en værdi.</li>
        </ul>
        <h4 class="h5">Vejledning</h4>
        <ul>
            <li>Brugeren skal kunne tappe eller klikke på radioknappen eller dens label for at vælge eller fravælge dens værdi.</li>
            <li>Lister med radioknapper bør opstilles vertikalt af hensyn til aflæsning.</li>
            <li>Sørg for at der er tilstrækkelig luft omkring den enkelte tjekboks, så den er brugbar på touchskærme.</li>
            <li>Vær forsigtig med at angive et standard valg, da det kan have en modsat effekt, hvor brugeren ikke foretager et bevidst valg eller føler sig manipuleret.</li>
        </ul>
      </section>
    </article>
  </div>
</div>
