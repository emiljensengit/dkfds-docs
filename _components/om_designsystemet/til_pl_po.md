---
permalink: /omdesignsystemet/tilpopl/
layout: styleguide
title: Til produktejere og projektledere
category: Om_designsystemet_category
subnav:
- text: Fordele ved at anvende Det Fælles Designsystem
  href: '#fordele'
- text: Følg op på din løsning
  href: '#foelg-op'
---
<section>
    <p>En selvbetjeningsløsning er en dialog med brugeren. Du efterspørger nogle informationer og giver brugeren et sted at svare, hvorefter du følger op.</p>
    <p>En selvbetjeningsløsning er ikke en monolog, hvor du deler din viden med brugeren. Monologer har karakter af artikler, vejledninger, regel- og informationssider. Alle disse er kendetegnet ved at brugeren ikke kan afgive svar eller på anden vis interagere med materialet ud over at læse det. Artikler, vejledninger, regler og informationer af generel karakter placeres på de hertil egnede sider på borger.dk og Virk.</p>
    <p>Hvis dit projekt passer ind i ovenstående definition eller er under lovkrav for at følge Den Fællesoffentlige Digitaliseringstrategi skal du anvende Det fælles designsystem.</p>
</section>
<section>
    <h2 id="fordele">Fordele ved at anvende Det Fælles Designsystem</h2>
    <p>Når du anvender designsystemet, følger du internationalt anerkendte best practices.  </p>
    <p>Det bliver nemmere for brugerne at anvende din selvbetjeningsløsning, da den samlede brugerrejse på tværs af offentlige tilbud bliver mere ensartet.</p>
    <p>Du kan spare tid og ressourcer ved at anvende UX repositoriet i designsystemet og derved kan time-to-ship blive hurtigere.</p>
    <h3>Ting du kan overveje, før du går i gang</h3>
    <ul>
        <li>Er der krav om, at din løsning anvender Det Fælles Designsystem?</li>
        <li>Beskriv det problem eller behov, din selvbetjeningsløsning skal løse for brugerne, i form af user stories og brugerrejser</li>
        <li>Udarbejd målgruppe-personaer, deres muligheder og behov </li>
        <li>Afhold gerne et eller flere designsprint med repræsentanter for din forretning, udviklere, produktejere</li>
        <li>Byg prototyper, test dem på rigtige brugere og juster ind til næste prototype/version</li>
        <li>Byg den simplest mulige løsning, der løser brugernes behov</li>
        <li>Forbered at følge op på din selvbetjeningsløsning ved hjælp af KPIer og indsamling af fx drift- og supporthenvendelser, så den næste version bl.a. kan bygge på baggrund af indsamlet empiri. </li>
    </ul>
</section>
<section>
    <h2 id="foelg-op">Følg op på din løsning</h2>
    <p>Følg op på din selvbetjeningsløsning ved hjælp af KPIer og indsamling af fx drift- og supporthenvendelser, så den næste version bl.a. kan bygge på baggrund af indsamlet empiri. </p>
    <h3>Hvordan formulerer jeg KPI’er for min selvbetjeningsløsning?</h3>
    <p>For at kunne opstille metrikker for din selvbetjeningsløsning er det først nødvendigt at formulere, hvad målet for din selvbetjeningsløsning er.</p>
    <p>CSF (Critical Succes Factor)  er en formulering af overordnede succesmål for din selvbetjeningsløsning, som brugeren – og derigennem forretningen - skal opnå gennem interaktion med din løsning. </p>
    <p>Formaliserede KPI (Key Performance Indicators) identificerer kvantitative og/eller kvalitative metrikker for processer, der skal gennemføres succesfuldt for at CSF kan opnås. </p>
    <p>På baggrund af empiri bidrager KPI således med kvalificeret information til den videre udvikling med brugeren i fokus og peger på en prioritering for produktets roadmap, hvis man arbejder med et sådant.</p>
    <p>Målepunkter og skalaer bør være defineret FØR din løsning går i produktion. Det er fx en god ide, at formulere CSF og afledte KPI’er, som del af grundlaget for accept-kriterierne til den leverance, du modtager fra din leverandør. CSF formuleres gerne som høj-niveau user stories.</p>
    <h3>Eksempler på kvantitative KPI’er </h3>
    <p>Kvantitative KPI bidrager gennem metrikker til et objektivt billede af performance og funktion i kode- og operationslag og afdækker flaskehalse og udfordringer. </p>
    <p>Der kan fx opstilles metrikker for:</p>
    <ul>
        <li>Hvor mange samtidige brugere forventes på din selvbetjeningsløsning? </li>
        <li>Hvor mange brugere forventes på en dag, en uge, en måned?</li>
        <li>Hvor mange brugere kommer via en søgemaskine eller fra en anden hjemmeside?</li>
        <li>Hvor mange kommer direkte ind på selvbetjeningsløsningen? </li>
        <li>Indlæses første sidevisning på max 1 sekund?</li>
        <li>Hvor ofte må din løsning undlade at svare, svare langsomt om overhovedet? </li>
        <li>Hvad er ”langsomt”? Er det 3 sekunder? </li>
        <li>Hvor mange brugere skal være berørt af et problem med løsningen før det skal løses øjeblikkeligt?</li>
        <li>Interagerer brugeren med selvbetjeningsløsningen indenfor en på forhånd angivet tidsramme?</li>
        <li>Hvor mange brugere gennemførte det forventede forløb med succes  indenfor den forventede tid?</li>
    </ul>
    <h4>Værktøjer</h4>
    <p>Kvantitative KPI’er kan være svære at formulere, men fx et værktøj som Lighthouse/Audit, som er del af Chrome Developer Tools, kan hjælpe med at komme i gang ved at vurdere fem på forhånd definerede metrikker på en skala fra 1 - 100:</p>
    <ul>
        <li>Performance</li>
        <li>Progressive Web App</li>
        <li>Accessibility</li>
        <li>Best Practices</li>
        <li>SEO</li>
    </ul>
    <p>Du vælger selv hvilke af de fem punkter, du ønsker din selvbetjeningsløsning vurderet på, men designsystemet anbefaler, at du som minimum lader Lighthouse måle på følgende:</p>
    <ul>
        <li>Performance </li>
        <li>Accessibility</li>
        <li>Best Practices</li>
        <li>SEO</li>
    </ul>
    <p>Målingerne bør foretages på en løsning, der serveres fra et eksternt produktions- eller identisk testmiljø, så billedet er så realistisk som muligt.</p>
    <p>Fortolkningen af Lighthouse/Audit-resultaterne bør foregå sammen med en udvikler, da der flere steder refereres til tekniske begreber.</p>
    <p>Hvis din selvbetjeningsløsning er en  ”high performance løsning” skal den opnå en vurdering på mere end 90 på mindst fire af punkterne (ikke et gennemsnit).</p>
    <h4>Kvalitative KPIer</h4>
    <p>Performance er mere end hastigheden fra server til bruger. Det er også, hvordan interaktionen med selvbetjeningsløsningen opleves fra brugerens side; subjektive og kvalitative krav, som du skal være i dialog med brugerne for at afdække fx:</p>
    <ul>
        <li>Opleves den som stabil og tillidsvækkende?</li>
        <li>Er selvbetjeningsløsningen nem at anvende? </li>
        <li>Havde brugeren en succesfuld oplevelse?</li>
    </ul>
    <p>Du kan opstille skalaer for brugernes vurderinger, der kan indgå med andre metrikker for din selvbetjeningsløsning og præsenteres med udsagn fra brugerne. På denne måde dannes et billede af din selvbetjeningsløsning, som du kan bruge til fremtidige versioner.</p>
    <h3>KPI og kodekvalitet </h3>
    <p>Kodekvalitet kan fx afspejles i KPI’er, der udtaler sig om:</p>
    <ul>
        <li>Hvor mange fejl findes per test cyklus ift antal kodelinjer eller løste opgaver? Dette gælder både code review og test. Man kalder det også APFD (Average percentage of faults)</li>
        <li>Hvor mange fejl forventer man?</li>
        <li>Hvor mange indmeldte - antal og frekvens ift release-cyklus - supporthenvendelser afledes af funktions- og systemfejl?</li>
        <li>Hvor alvorlige er fejlene?</li>
    </ul>
    <h4>Læs mere om opfølgning og metrikker her</h4>
    <ul class="unstyled-list">
        <li><a href="https://www.smartbugmedia.com/blog/website-redesign-projects-key-metrics-to-track-from-day-1" class="icon-link">Key Metrics to track from day 1<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        <li><a href="https://www.staceybarr.com/measure-up/quantitative-versus-qualitative-kpis/" class="icon-link">Quantitative versus qualilitative KPIs<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        <li><a href="https://www.simplilearn.com/itil-csf-kpis-article" class="icon-link">ITIL, CSF, KPIs<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        <li><a href="https://simplicable.com/new/critical-success-factors" class="icon-link">Critical Succes Factors<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        <li><a href="https://airbrake.io/blog/metrics/code-quality-metrics-management" class="icon-link">Code Quality Metrics<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        <li><a href="https://designsystem.digital.gov/performance/" class="icon-link">US Web Design System - Performance<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
    </ul>
</section>