---
title: Tjekboks
parent: Form controls
order: 05
lead:
---


{% include code/preview.html component="checkbox" %}
{% include code/accordion.html component="checkbox" %}
<div class="accordion-bordered accordion-docs">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="checkbox-docs">
    Retningslinjer
  </button>
  <div id="checkbox-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>
          <h4>Tilgængelighed</h4>
          <ul>
          <li>Tjekbokse (mere end 1) skal altid indsættes i et fieldset inkl. legend. En enkelt tjekboks skal ikke sidde i et fieldset.</li>
          <li>Hver tjekboks skal have label tilknyttet. Label kan erstattes med title-attributten.</li>
          <li>Hver tjekboks skal have sit eget id og dets tilhørende label den samme værdi angivet.</li>
          <li>Tjekboksenes design er ændret ift standardvisningen for at gøre dem tydeligere og øge deres visuelle respons til brugerens interaktion.</li>
          <li>Tjekboksene er gjort tilgængelige for skærmlæsere på trods af deres visuelle design, ved at selve checkbox tagget er placeret udenfor det synlige skærmområde.</li>
          </ul>
      </section>
      <section>
          <h4>Brugervenlighed</h4>
          <h5>Anvendes til</h5>
          <ul>
          <li>Tjekbokse giver brugeren mulighed for at vælge en eller flere værdier ud fra en synlig liste.</li>
          <li>Når brugeren skal kunne få overblik over de mulige valg.</li>
          <li>Når brugeren skal be- eller afkræfte et valg fx Ja/Nej ( i det tilfælde en enkelt tjekboks) eller slå noget til eller fra (toggle).</li>
          <li>Når listen over mulige valg kan være på en mobilvisning.</li>
          </ul>
          <h5>Anvendes ikke til</h5>
          <ul>
              <li>Hvis der er for mange valg til at give mening på en mobilvisning.</li>
              <li>Hvis brugeren kun kan vælge én værdi, skal du vælge radio buttons.</li>
          </ul>
          <h5>Vejledning</h5>
          <ul>
              <li>Brugeren skal kunne tappe eller klikke på tjekboksen eller dens label for at vælge eller fravælge dens værdi.</li>
              <li>Lister med tjekbokse bør opstilles vertikalt af hensyn til aflæsning.</li>
              <li>Anvend et positivt sprog til værdierne. I stedet for fx ”Jeg vil ikke modtage bekræftelse på email” bør der stå ”Jeg vil gerne modtage bekræftelse på email”.</li>
              <li>Sørg for at der er tilstrækkelig luft omkring den enkelte tjekboks, så den er brugbar på touchskærme.</li>
          </ul>
      </section>
    </article>
  </div>
</div>
