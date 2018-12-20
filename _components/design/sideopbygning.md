---
permalink: /design/sideopbygning/
layout: styleguide
title: Sideopbygning (layout)
category: Design_category
lead: Afsnittet beskriver regler og principper for struktur og placering af komponenter i en selvbetjeningsløsning. Et godt layout er harmonisk, ensartet, logisk opbygget, og understøtter brugerens handlinger. Det er således både behageligt for øjet og let for brugeren at anvende.
subnav:
- text: Baseline grid
  href: '#baselinegrid'
- text: Grundlæggende struktur
  href: '#struktur'
- text: Header
  href: '#header'
- text: Indhold
  href: '#indhold'
- text: Footer
  href: '#footer'
---
<h2 id="baselinegrid">Baseline grid</h2>
<p>I Det Fælles Designsystem går alle vertikale dimensioner, højder på komponenter og afstande i højderetningen, op med en faktor 8. 8px, 16px, 24px, 32px, 40px, 48px, 56px... Gennem gentagelsen af værdier opstår en ro og balance på tværs af det visuelle layout og mellem sidens vertikale elementer. På tekst er det ikke tekstens størrelse, men linjehøjden, der skal gå op i 8. </p>
<p>Læs mere om baseline grid'et i artiklen <a href="https://builttoadapt.io/8-point-grid-vertical-rhythm-90d05ad95032" class="icon-link">8-Point Grid: Vertical Rhythm<svg class="icon-svg "><use xlink:href="#open-in-new"></use></svg></a>.</p>

<h2 id="struktur">Grundlæggende struktur</h2>
<p>Selvbetjeningsløsningen er delt op i tre overordnede områder.</p>
<ul>
    <li>Header</li>
    <li>Indhold</li>
    <li>Footer</li>
</ul>
<figure><img src="{{ site.baseurl }}/img/descriptionimages/header-indhold-footer.png" alt="Viser opbygningen af en side i designsystemet"></figure>

<h2 id="header">Header</h2>
<p>Headeren fungerer som identifikator af portal, ansvarlig myndighed og af brugeren som er logget på via NemLog-in. Derudover bruges headeren til navigation og overordnet styring af selvbetjeningsløsningen.</p>
<p>Headeren er ens på tværs af en given selvbetjeningsløsnings trin og undersider og bliver således et “ankerpunkt”, hvor brugeren altid kan vende tilbage til og orientere sig.</p>
<p>En header består af et antal rækker, som vist nedenfor.</p>
<ul>
    <li>Række 1 og 2 er obligatoriske</li>
    <li>Rækkerne 3-5 er valgfri</li>
    <li>Brug kun de nødvendige rækker</li>
    <li>Hold altid rækkefølgen, uanset kombinationen</li>
</ul>
<div class="alert alert-warning alert--paragraph" role="alert">
    <div class="alert-body">
        <p class="alert-text"><span class="sr-only">Advarsel:</span>Jo enklere navigationen er desto bedre.</p>
    </div>
</div>
<p>Brug kun rækker 3,4,5, samt knapper, links og ekstra navigation, når det er nødvendigt.</p>
<figure><img src="{{ site.baseurl }}/img/descriptionimages/header-opbygning.png" alt="Viser opbygningen af designsystemets header"></figure>
<h3 class="h5">Række 1</h3>
<p>Portal-logo, NemLog-in-oplysninger, evt. log ud knap.</p>
<h3 class="h5">Række 2</h3>
<p>Løsningstitel, ansvarshavende myndighed og evt. support/kontakt.oplysninger.</p>
<h3 class="h5">Række 3 (frivillig)</h3>
<p>Sidenavigation (topnavigation) i løsningen, evt. knapper, evt. ekstramenu.</p>
<h3 class="h5">Række 4 (frivillig)</h3>
<p>Flere sorteringsmuligheder, evt. ekstramenu, evt. knapper.</p>
<h3 class="h5">Række 5 (frivillig)</h3>
<p>Funktionslinks (igangsætter system- eller OS-funktionalitet, fx gem, print osv.)</p>
<p>En header med fem rækker er meget kompleks og kan som udgangspunkt ikke anbefales, men da designsystemet både skal servicere simple og komplekse løsninger, har der været behov for at headeren er meget tilpasningsvenlig.</p>
<p><a href="/dkfds-docs/komponenter/headers/">Se header-komponenten</a></p>

<h2 id="indhold">Indhold</h2>
<p>Vi kender ikke det specifikke indhold i alle selvbetjeningsløsninger, hvorfor konkrete retningslinjer for et layout er erstattet af nogle principper. Principperne er at betragte som anbefalinger, der særligt retter sig mod selvbetjeningsløsninger til lavfrekvente og ikke-proffesionelle brugere. Principperne udsiger ikke noget om hvordan en given selvbetjeningsløsning specifikt skal se ud.</p>
<ul>
    <li>
        <h3 class="h5">Gør det let at skimme indholdet</h3>
        <p>Lad fx overskrifter, labels, brødtekst, inputfelter og primærknap flugte til venstre ned af siden, så øjets flugt primært foregår i en bevægelse op og ned af siden (en kolonne).</p>
        <img src="{{ site.baseurl }}/img/descriptionimages/skimbar.png" alt="Grafisk visning af en side som er let at skimme" class="description-image">
    </li>
    <li>
        <h3 class="h5">Gør løsningen let og luftigt</h3>
        <p>Gør god brug af “luft” (white space), det gør sidens indhold lettere at overskue og forstå.</p>
        <img src="{{ site.baseurl }}/img/descriptionimages/let-og-luftig.png" alt="Luft omkring elementer" class="description-image">
    </li>
    <li>
        <h3 class="h5">Vis hvad der hænger sammen med hvad</h3>
        <p>Skab klare gestalter. Placer elementer der hører sammen tættere på hinanden og adskil/fjern elementer der ikke hører sammen fra hinanden.</p>
        <img src="{{ site.baseurl }}/img/descriptionimages/Sammenhaeng.png" alt="Billedet viser gruppering af elementer" class="description-image">
    </li>
    <li>
        <h3 class="h5">Del indholdet op i små bidder</h3>
        <p>Gør layoutet overskueligt ved at dele løsningen eller siden op i mindre bidder. Fx et spørgsmål pr. side i en trinbasseret løsning. På teksttunge sider brug da overskrifter, underoverskrifter og lister til at skabe overskuelighed.</p>
        <img src="{{ site.baseurl }}/img/descriptionimages/del-op.png" alt="Gruppering af indhold i små bidder." class="description-image">
    </li>
    <li>
        <h3 class="h5">Brug et responsivt grid</h3>
        <p>Brug et grid-system til at styre dit layout.</p>
        <img src="{{ site.baseurl }}/img/descriptionimages/brug-et-grid.png" alt="Side med gridsystem." class="description-image">
        <p><a href="/dkfds-docs/design/grid/">Grid’et i designsystemet</a></p>
        <p><a href="/dkfds-docs/eksempler/">Eksempler på selvbetjeningsløsninger</a></p>
    </li>
</ul>

<h2 id="footer">Footer</h2>
<p>Footeren fungerer som sidens afslutning, og her er der mulighed for endnu en gang at angive hvilken myndighed, der er ansvarlig for selvbetjeningsløsningen, og hvordan brugeren får support og kommer i kontakt med dig som myndighed. I footeren har du også mulighed for at linke ud af selvbetjeningsløsningen og angive ikkeløsningsspecifikke informationer, som fx telefontider og lignende.</p>
<p>Vi anbefaler at du afslutter din selvbetjeningsløsning med en footer.</p>
<p>Designsystemet giver mulighed for footere af forskellig karakter til forskellige behov. En footer kan være placeret i en række eller i 4 blokke af 3 kolonner.</p>

<h3 class="h4">Footer på en linje</h3>
<figure><img src="{{ site.baseurl }}/img/descriptionimages/footer-paa-en-linje.png" alt="Footer på linie"></figure>

<h3 class="h4">Footer i 4 blokke af 3 kolonner</h3>
<figure><img src="{{ site.baseurl }}/img/descriptionimages/footer-i-4-blokke-af-3-kolonner.png" alt="Footer i 4 kolonner"></figure>

<p>Linjen skærer hele skærmensbredde og er af typen "ydre streg". Footeren placerer sig enten i bunden af browservinduet eller 64px fra sidste element på siden ned til linjen.</p>

<p>Under linjen er der 24 px til overskrifter og tekst. Overskrifter og tekst er 16px med linjehøjde 24px og herunder er der endnu 24 px inden siden slutter.</p>

<p>Footeren indeholder altid ansvarlig myndighed, tilgængelighedserklæring og cookieoplsyning. Det er op til den enkelte at vælge en footer som passer til den mængde indhold, der er rigtig for en given selvbetjeningsløsning.</p>

<p><a href="/dkfds-docs/komponenter/footers/">Se footer-komponenten</a></p>

