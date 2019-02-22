---
permalink: /omdesignsystemet/anbefalingerudvikling/
layout: styleguide
title: Anbefalinger omkring udvikling
category: Om_designsystemet_category
description: Anbefalinger for kode og kvalitet, performance, tilgængelighed og yderligere anvisninger til dig, der skal udvikle til eller i Det Fælles Designsystem
subnav:
- text: Anbefalinger til kode og kodekvalitet
  href: '#anbefalinger-kode'
- text: Frontend koden
  href: '#koden'
- text: Anbefalinger til frontend performance
  href: '#anbefalinger-performance'
- text: Optimering
  href: '#optimering'
- text: Anbefalering omkring tilgængelighed
  href: '#tilgaengelighed'
---

<article>
    <section>
        <p>Det Fælles Designsystem er en simpel samling af grundlæggende funktioner og design, der skaber et solidt grundlag for udviklingen af selvbetjeningsløsninger, der skal ligge på borger.dk og virk.dk.</p>
        <p>Designsystemets frontend arkitektur bygger på princippet om en minimal, modulær og skalerbar opbygning, der kan forgrene sig yderligere i takt med øget behov. Når du udvikler til designsystemet skal du følge tankerne bag, som de er formuleret i dette dokument.</p>
        <h2 class="h3">Omkring dette dokument </h2>
        <p>Dette dokument beskriver anbefalinger for kode og kvalitet, performance, tilgængelighed og yderligere anvisninger til dig, der skal udvikle til eller i Det Fælles Designsystem (i det følgende også kaldet ”designsystemet”).</p>
        <p>”Generelle anbefalinger omkring udvikling til Det Fælles Designsystem” revideres i takt med alle større releases.</p>
    </section>
    <section>
        <h2 id="anbefalinger-kode">Anbefalinger omkring kode og kodekvalitet</h2>
        <ul>
            <li>Kode skal være enkel, korrekt, forståelig, gennemtestet og dokumenteret, så andre udviklere kan gennemskue, genanvende og vedligeholde den i deres projekter </li>
            <li>Tænk modulært</li>
            <li>Brug altid code review og formaliserede test </li>
            <li>Anvend WhatWG til HTML reference og W3C til CSS reference og til at sikre kodens validitet gennem <a href="https://checker.html5.org/" class="icon-link">Nu Html Checker<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a> og <a href="https://jigsaw.w3.org/css-validator/" class="icon-link">CSS Validation Service<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li>Undgå unødigt kompliceret funktionalitet</li>
            <li>Indlæs ikke et bibliotek (fx jQuery), hvis det kan undværes</li>
            <li>Anvend eksempelkoden i Det Fælles Designsystem som reference for den aktuelle løsning</li>
            <li>Anvend konsekvent og gennemskuelig navngivning af CSS-klasser og gerne med løsningsspecifik præfix</li>
            <li>Test i alle browsere, der skal understøttes jf forretningens aktuelle baseline. </li>
        </ul>
    </section>
    <section>
        <h2 id="koden">Frontend koden</h2>
        <h3>HTML og CSS</h3>
        <p>Alle selvbetjeningsløsningers brugergrænseflade skal kodes i valid HTML5, som det er defineret her i <a href="https://whatwg.org/" class="icon-link">WhatWG<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>. </p>
        <p>Du skal huske på, at HTML5 er et format i udvikling, men at browseren ikke har ensartet understøttelse. Det er vigtigt, at du tjekker løsningens integritet og browserunderstøttelse ift din målgruppe. Du kan fx anvende <a href="https://caniuse.com/" class="icon-link">Can I use<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a> til at kontrollere understøttelsen af det enkelte tag.</p>
        <p>Du skal være konsekvent i dine klassenavne og struktur, så den er let at gennemskue for andre end dig selv. Der kan du fx anvende BEM eller OOCSS – det er ikke vigtigt, hvilket format du vælger, men at du er konsekvent.</p>
        <h4>Læs mere om HTML og CSS</h4>
        <ul class="nobullet-list">
            <li><a href=" https://whatwg.org/" class="icon-link">WhatWG<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://caniuse.com/" class="icon-link">Can I Use<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="http://html5doctor.com/" class="icon-link">HTML5 Doctor<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" class="icon-link">A Guide to flexbox<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://www.keycdn.com/blog/oocss" class="icon-link">OOCSS<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="http://getbem.com/" class="icon-link">BEM<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
        <h3>Javascript</h3>
        <p>Det Fælles Designsystem anvender ”vanilla” javascript (også kaldet Plain JS) og ikke et javascript bibliotek som fx jQuery. På den måde kan det anvende optimerede løsninger og undgå afhængighed til tredjeparts leverandører og deres eventuelle tekniske gæld. </p>
        <p>Hvis du vil udvikle en funktionskomponent, der fx skal kunne inkluderes i designsystemet og anvendes af andre, skal du altså kode den i vanilla javascript. Det betyder ikke, at du ikke kan anvende en tredjeparts løsning – se listen over anbefalede udvidelser. Men det betyder, at din funktion i så fald ikke kan tages i betragtning til inklusion i designsystemets kerne.</p>
        <h4>Læs mere om Javascript</h4>
        <ul class="nobullet-list">
            <li><a href="https://google.github.io/styleguide/jsguide.html" class="icon-link">Google JavaScript Style Guide<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://www.w3schools.com/js/js_conventions.asp" class="icon-link">JavaScript Style Guide<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://plainjs.com/" class="icon-link">Plain JS<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://snipcart.com/blog/learn-vanilla-javascript-before-using-js-frameworks" class="icon-link">Learn vanilla JavaScript<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a> </li>
            <li><a href="https://medium.com/@trombino.marco/you-might-not-need-jquery-a-2018-performance-case-study-aa6531d0b0c3" class="icon-link">You might not need jQuery<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a> </li>
        </ul>
        <h3>Kodekvalitet og validering</h3>
        <p>Koden skal være enkel, korrekt, forståelig, gennemtestet og dokumenteret, så andre udviklere kan gennemskue, genanvende og vedligeholde den i deres projekter. Det er til fordel for både udvikling, brugere og forretning og kan afhjælpe opbygningen af teknisk gæld. </p>
        <p>Det er vigtigt, at danne sig et overblik over den samlede kodes aktuelle tilstand gennem systematisk aftestning. </p>
        <p>Vi anbefaler, at man som minimum anvender code review på alle udviklingsprojekter og at man sætter en tydelig målestok for, hvad der definerer god kode, så der sikres en gennemgående kvalitet. </p>
        <p>Alle løsninger skal altid bestå formaliserede funktions-, regressions- og accepttest inden de går i produktion. </p>
        <h4>Læs mere om kodekvalitet og validering</h4>
        <ul class="nobullet-list">
            <li><a href="https://validator.w3.org/" class="icon-link">W3 HTML validator<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://jigsaw.w3.org/css-validator/" class="icon-link">JW3 CSS validator<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://dzone.com/articles/what-does-code-quality-actually-mean" class="icon-link">What does code quality actually mean?<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://dzone.com/articles/an-introduction-to-code-coverage" class="icon-link">An introduction to code coverage<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a> </li>
            <li><a href="https://designsystem.digital.gov/documentation/code-guidelines/" class="icon-link">US Web Design System - Code Guidelines<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a> </li>
        </ul>
    </section>
    <section>
        <h2 id="anbefalinger-performance">Anbefalinger omkring frontend performance</h2>
        <ul>
            <li>Formulér en baseline og en række performance-KPIer som målestok for løsningen. </li>
            <li>Minimér browserens kritiske vej for indlæsning</li>
            <li>Jo færre requests til serveren des bedre</li>
            <li>Minimer antallet af kritiske ressourcer og indlæs aldrig en udvidelse på alle sider i en løsning, hvor udvidelsen kun anvendes på en enkelt eller ganske få. </li>
            <li>Anvend asynkron og lazy indlæsning af ressourcer og forbered browserens indlæsning fx vha. preconnect og preload, hvor det kan lade sig gøre</li>
            <li>Indlæs data/kode i baggrunden, hvis det kan forudses, hvilken side brugeren skal besøge ved næste klik.</li>
            <li>Anvend end-to-end compression - pak alt, der kan pakkes</li>
            <li>Minify CSS og JS</li>
            <li>Minimer antallet af browserens genberegninger  </li>
            <li>Test fx i Lighthouse/Audit (Chrome Developer) og test meget gerne hos virkelige brugere med virkelige platformsvarianter. </li>
        </ul>
        <h3>
            Frontend performance-optimering
        </h3>
        <p><quote>“Don't write JavaScript that forces the browser to recalculate layout. Separate read and write functions, and perform reads first.<br>
            Don't over-complicate your CSS. Use less CSS and keep your CSS selectors simple.<br>
            Avoid layout as much as possible. Choose CSS that doesn't trigger layout at all.<br>
            Painting can take up more time than any other rendering activity. Watch out for paint bottlenecks.”<br>
            -	Google
        </quote></p>
        <p>En offentlig hjemmeside skal være en troværdig, stabil og sikker oplevelse for brugeren – både med hensyn til UX (kvalitative krav som beskrevet i ”Design og kode”) og performance (kvantitative krav) i form af indlæsningshastighed, stabilitet og robusthed. </p>
        <p>Performance-optimering er en costbenefit vurdering, hvis mål er at præsentere brugeren for den hurtigst mulige, stabile løsning, uden at forringe funktion og design, sat op i mod selve investeringen i performance-optimering.</p>
        <p>En selvbetjeningsløsning bør have sine egne performance-KPI’er, der matcher brugernes behov og forventning, og som justeres i takt med løsningens udvikling og brugernes forventning. Der bør måles både på kvalitet og kvantitet.  </p>
        <h3>Layout har indflydelse på performance</h3>
        <p>Undgå at anvende for mange layout-ændringer på siden. </p>
        <p>En layout-ændring er i princippet enhver handling, der kræver at browseren dynamisk genberegner layoutet. Genberegningen af sidens layout er omkostningstung for browseren og kan i visse tilfælde forringe brugeroplevelsen. Har løsningen fx accordions indlejret i en side, bør siden ideelt set ikke have yderligere elementer, der foretager ændringer i layoutet. </p>
        <p>Sider af stor betydning for brugeren bør anvende så simpelt layout med færrest mulige ændringer og genberegninger i brugssituationen. Så få dele af skærmens indhold som muligt, bør rammes af dynamiske layout-ændringer, for at kunne facilitere brugerens behov. I det hele taget: jo færre interaktive elementer per side jo bedre.  </p>
        <h3>Ressourcer</h3>
        <p>Jo flere ressourcer en løsning skal hente før brugeren kan anvende den, jo længere tid vil der gå (den kritiske sti øges) - og desto flere brugere vil blive frustrerede og få en dårlig oplevelse. </p>
        <p>Det er et centralt princip i performance at hente så få og så små ressourcer som muligt. Dette skal naturligvis vejes op i mod de krav og forventninger brugerne har til en given løsning. Det Fælles Designsystem bestræber sig på at understøtte dette ved at alle udvidelser til designsystemets funktioner er tilvalg udvikleren skal foretage sig.</p>
        <p>Det bør overvejes at anvende et Content Delivery Network (CDN) for at optimere load-hastigheden. </p>
        <h3>Baseline for load-hastighed</h3>
        <p>Krav til load-hastighed (tiden til der er funktionel grænseflade på skærmen) er relative i forhold til en løsnings forretningskritikalitet for både brugere og forretning holdt op i mod, hvor mange der forventes at skulle anvende løsningen indenfor et givent tidsrum. For at en løsnings baseline kan formuleres, skal de udpegede målepunkter overvejes, defineres og løbende testes og revurderes – typisk i forbindelse med større releases.</p>
        <p>Brugere forventer hurtig respons, når de besøger en hjemmeside, og venter maksimalt 3 sekunder på, at en hjemmeside indlæses, men ofte er 1 sekund allerede ”lang tid”. Dette betyder ikke, at siden er fuldt indlæst, men at brugeren har fået et forventeligt og brugbart indhold præsenteret. Browseren kan fortsat indlæse yderligere funktionalitet i baggrunden, men det synlige indhold skal være til rådighed for brugeren indenfor maksimalt 1-3 sekunder. </p>
        <p>Nedenstående skala blev formuleret af Norman Nielsen Group helt tilbage i 1993- 1997, gen-bekræftet i 2010 og er fortsat den skala, brugeres ”fokus-vindue” vurderes ud fra:</p>
        <ul>
            <li>0–100 ms — Instant feel, constant flow;</li>
            <li>100–300 ms —Slight perceptible delay;</li>
            <li>300–1000 ms — Loss of task focus, perceptible delay;</li>
            <li>1s+ — Mental context switch;</li>
            <li>10s+ — User leaves;</li>
        </ul>
        <h4>Læs mere om performance her</h4>
        <ul class="nobullet-list">
            <li><a href="https://designsystem.digital.gov/performance/" class="icon-link">US Web Design Standards - performance<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://www.machmetrics.com/speed-blog/average-page-load-times-websites-2018/" class="icon-link">2018 average load times<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://www.nngroup.com/articles/website-response-times/" class="icon-link">Website response times<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://speakerdeck.com/csswizardry/its-my-third-party-and-ill-cry-if-i-want-to" class="icon-link">It's my third party and I'll cry if I want to (slides)<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
        <h3>Performance-test</h3>
        <p>Performance-test er en videnskab i sig selv med en lang række parametre, der testes og justeres for at afdække løsningens performance. Det er ikke blot et spørgsmål om load-hastighed, men også tilgængelighed, søgbarhed og opsætning. </p>
        <h4>Udviklerværktøjer</h4>
        <p>Google Chrome, Internet Explorer/Edge, Mozilla og Safari stiller en lang række værktøjer til rådighed for test og fejlsøgning i en løsning. Ved at trykke på F12 åbner Developer Tools  alt lige fra kodevisning til performance-måling. Hver for sig er disse værktøjer uundværlige for aftestning og fejlsøgning.</p>
        <h5>Læs mere om udviklerværktøjer</h5>
        <ul class="nobullet-list">
            <li><a href="https://developers.google.com/web/tools/chrome-devtools/" class="icon-link">Chrome Developer Tools<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://docs.microsoft.com/da-dk/microsoft-edge/devtools-guide" class="icon-link">Microsoft Edge Devtools<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Tools" class="icon-link">Mozilla Developer Tools<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://developer.apple.com/safari/tools/" class="icon-link">Safari Developer Tools<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
        <h4>Lighthouse</h4>
        <p>Ved at anvende Chrome Developer tools får man adgang til applikationen ”Lighthouse” (tryk F12 i Google Chrome og vælg fanen "Audit"), der giver en analyse og scoring (fra 0-100) af en sides performance fordelt på fem parametre: Performance, Progressive Web App, Accessibility, Best practices og SEO. </p>
        <p>Lighthouse er som standard sat op til at vurdere parametre, som Google har fokus på, fx Progressive Web App (PWA). Man kan dog selv angive, hvilke parametre siden ønskes vurderet ud fra. Progressive Web App skal man naturligvis kun teste for, hvis man rent faktisk har udviklet en, og ellers fjernes fluebenet. </p>
        <p>Lighthouse giver gode råd til, hvor man kan eller bør sætte ind for at forbedre ens sides performance.  </p>
        <h5>Læs mere om Lighthouse</h5>
        <ul class="nobullet-list">
            <li><a href="https://developers.google.com/web/tools/lighthouse/" class="icon-link">Lighthouse<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
        <h4>PageSpeed Insights</h4>
        <p>Page Speed Insights er et Google værktøj, der måler en løsnings indlæsningshastighed på hhv. mobil og desktop, samt kommer med forslag til mulige forbedringer. </p>
        <h5>Læs mere om PageSpeed Insights</h5>
        <ul class="nobullet-list">
            <li><a href="https://developers.google.com/speed/pagespeed/insights/" class="icon-link">PageSpeed Insights<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
    </section>
    <section>       
        <h2 id="optimering">Optimering</h2>
        <h3>Minimer spild i filerne</h3>
        <p>Anvend et værktøj som fx Minifier til at minimere "spild" i JS og CSS filer, så de fylder mindst muligt. Typisk findes denne type værktøjer også som plugin til de mest udbredte kode-editors.</p>
        <h5>Læs mere om Minifier</h5>
        <ul class="nobullet-list">
            <li><a href="https://www.keycdn.com/support/how-to-minify-css-js-and-html" class="icon-link">How to minify<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://www.minifier.org/" class="icon-link">Minifier<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
        <h3>Critical path</h3>
        <p>Den kritiske vej (Critical Path) er den samlede sekvens af processer i tid fra en bruger aktiverer et link til den funktionelle selvbetjeningsløsning eller hjemmeside er tilgængelig. </p>
        <p>Hvilke ressourcer, der indlæses hvornår, så den kritiske vej holdes så kort, som det er praktisk muligt og som det forventes af brugere og forretning, er et centralt punkt i optimering af performance. </p>
        <p>CSS og JS er “render blocking”: en browser skal læse og udføre (layout) den komplette CSS og JS før den begynder at beregne selve siden. Alle andre processer står stille indtil browseren har denne del på plads. </p>
        <p>Designet af siden har meget at sige, da det skal sikre, at det vigtigste indhold for brugerens videre færd er øverst på siden. Alt andet bør placeres ”under folden” og blive indlæst senere, evt. ved asynkron eller lazy indlæsning.</p>
        <p>En server sender ~14kb data (10 TCP pakker) ved første forespørgsel og skal derefter vente på klienten, før den sender mere. Det vil sige, at kan det vigtigste indhold – det som bekræfter brugerens foregående valg – holdes på omkring 14kb, vil brugeroplevelsen forbedres markant. Det er ikke sikkert, det kan lade sig gøre i praksis at holde første visning på 14kb, men har man en selvbetjeningsløsning eller hjemmeside med høj forretningskritikalitet, periodevis højt pres, mange samtidige eller højt antal daglige brugere, kan det give mening at superoptimere den kritiske vej.</p>
        <p>Du kan fx placere den vigtigste CSS inline i <code>head</code> og de mindre vigtige deklarationer som linket ressource sammen med JS før <code>/body</code>. Vigtige grafikker ”over folden” kan være base64 og andre inline .svg.  I Det Fælles Designsystem har vi udvalgt ikoner fra Material Design i .svg (Scalable Vector Graphic) format. De ligger som en samlet “pakke” af <code>symbol</code> efter <code>body</code>. På denne måde sparer vi et større antal requests for den enkelte side. Koden for ikoner fylder ganske lidt.</p>
        <p>Bemærk, at da inline CSS ikke caches af browseren, er det en balanceakt at placere tilstrækkeligt CSS inline til, at det gør en forskel og ikke for meget, så brugeren skal hente den samme store pakke på hver eneste side.</p>
        <p>Især i SPA (Single Page Applications) løsninger giver dette koncept dog mening, da brugeren kun skal hente den ene side – med mindre det er en løsning, hvor brugeren ofte skal vende tilbage gentagne gange.</p>
        <h4 class="h5">Læs mere om Critical Path CSS</h4>
        <ul class="nobullet-list">
            <li><a href="https://medium.freecodecamp.org/an-introduction-to-web-performance-and-the-critical-rendering-path-ce1fb5029494" class="icon-link">An introduction to web performance and the critical rendering path<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://medium.com/@luisvieira_gmr/understanding-the-critical-rendering-path-rendering-pages-in-1-second-735c6e45b47a" class="icon-link">Understandingg the critical rendering path<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://varvy.com/pagespeed/critical-render-path.html" class="icon-link">Critical render path<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://developers.google.com/web/fundamentals/performance/critical-rendering-path/page-speed-rules-and-recommendations" class="icon-link">Page speed rules and recommendations<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://www.sitepoint.com/how-and-why-you-should-inline-your-critical-css/" class="icon-link">How and why you should inline your critical css<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
        <h3>Preload af ressourcer</h3>
        <p>Forbered browseren på at indlæse og beregne din selvbetjeningsløsning ved at anvende preconnect og preload i <code>head</code>.</p>
        <p>Ved at browseren først åbner forbindelse til en given server og derefter laver en tidlig indlæsning af en ressource, kan den senere hurtigt beregne eksempelvis layout. Bemærk, at browseren ikke anvender ressourcerne på dette tidspunkt, men kun gør dem klar. Det kaldes også ”lazy load”.</p>
        <p>Dette egner sig i særdeleshed til CSS og JS-filer, men kan også anvendes til andre ressourcer som fx en grafik, der er vigtig for sidens anvendelse.</p>
        <ul class="nobullet-list">
            <li>Preconnect kontakter den server, der forventes at skulle levere en given ressource. Det kunne være en CDN (Content Delivery Network). Dermed er forbindelsen åben.</li>
            <li>Preload beder browseren indlæse en ressource asynkront (lazy loading), så den er klar til brug, men uden at anvende den før det er påkrævet.</li>
        </ul>
        <h4 class="h5">Læs mere om preload her</h4>
            <ul class="nobullet-list">
            <li><a href="https://www.w3.org/TR/preload/" class="icon-link">Preload<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/" class="icon-link">Preload - what is it good for?<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
        <h3>High performance løsninger</h3>
        <p>Det Fælles Designsystem er et fleksibelt og generisk system, der kan håndtere mange forskellige typer løsninger, behov og skaleringer. </p>
        <p>Men, hvis du skal levere en high performance løsning, som pga det forventede pres fx i spidsbelastning eller generelt, ikke kan risikere at indlæse unødigt meget data for brugeren, bør du overveje en alternativ løsningsmodel:</p>
        <p>Brug Det Fælles Designsystem som UX repositorie og best practice anbefaling, men konstruer din egen minimale implementation, der kun håndtere præcis denne aktuelle selvbetjeningsløsnings behov. Løsningen vil skulle leve op til samme krav som en løsning konstrueret i designsystemet, men kan være langt mere målrettet det konkrete behov.</p>
        <p>Bemærk, at din backend ligeledes skal være toptunet for at kunne levere data hurtigt og stabilt. Gå i dialog med repræsentanter for din eller din forretnings driftsorganisation for at finde den bedste løsning.</p>
    </section>
    <section>
        <h2 id="tilgaengelighed">Anbefalinger omkring tilgængelighed</h2>
        <ul>
            <li>Overhold <a href="https://digst.dk/digital-service/webtilgaengelighed" class="icon-link">den danske lovgivning<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li>Følg anvisningerne i WCAG 2.1,  brug evt. <a href="https://webaim.org/" class="icon-link">Webaim<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a> som reference og test med <a href="http://wave.webaim.org/" class="icon-link">Wave (Web Accessibilty Evalution Tool)<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a> </li>
            <li>Tilstræb semantisk korrekt kode</li>
            <li>Brugeren skal kunne navigere på siden inkl. evt. modalvinduer via tab-tasten.</li>
            <li>Brug <a href="https://www.w3.org/WAI/standards-guidelines/aria/" class="icon-link">ARIA<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>, hvor det giver mening og øget tilgængelighed</li>
            <li>Designsystemets farvekombinationer sikrer at kontrastforholdet efterlever wcag2.1 - dobbelttjek andre farver med Webaim’s <a href="https://webaim.org/resources/contrastchecker/" class="icon-link">contrast checker<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>.</li>
            <li>Anvend skip-links på elementer, der gentages fra side til side (header, topmenu, footer)</li>
            <li>Angiv meningsgivende overskrifter, labels, alternativ tekst, summary, title og description på alle elementer, der har det som mulighed</li>
            <li>Anmod om dokumentation for behovet for en foreslået kompleks løsning, og tilbyd altid brugeren et alternativ til indhold, der ikke umiddelbart kan gøres tilgængeligt</li>
            <li>Det er ikke nok at en løsning er responsiv og mobile-first er ikke ensbetydende med en tilgængelig løsning. Selvbetjeningsløsningen skal også fungere ensartet og tilbyde samme indhold på tværs af platforme.</li>
        </ul>
        <h3>Hvorfor tilgængelighed?</h3>
        <p>Selvbetjeningsløsninger og alle andre offentlige hjemmesider skal overholde den danske lovgivning omkring tilgængelighed på WCAG 2.1 niveau AA. Alle hjemmesider og deres funktioner skal testes op imod disse krav, som ikke blot øger tilgængeligheden for brugere med særlige behov, men for alle brugere. </p>
        <p>Alt der udvikles i og til Det Fælles Designsystem skal leve op til lovkravene om at understøtte WCAG 2.1 på AA niveau.</p>
        <p>Du bør altid stille følgende spørgsmål før udviklingen af nye funktioner:</p>
            <ul class="nobullet-list">
            <li>Er denne helt specielle og unikke løsning nødvendig? </li>
            <li>Tilfører den merværdi for brugeren? </li>
            <li>Kan vi lave den tilgængelig uden funktionstab for alle? </li>
            <li>Kan vi løse behovet med en mere simpel og gennemprøvet model? </li>
        </ul>
        <h3>Sådan tester du din løsnings tilgængelighed</h3>
        <p>Første skridt på vejen til en tilgængelig løsning er, at sikre din løsnings front end kode er valid og følger anbefalingerne fra WHATWG og W3C.</p>
        <p>Vær opmærksom på, at som udgangspunkt er tilgængelighed slået fra i Safari og skal slås til under ”Avancerede indstillinger”.</p>
        <p>Når du skal teste for tilgængelighed anbefaler Det Fælles Designsystem, at du som minimum anvender diverse analyseværktøjer:</p>
        <h4>Webaim</h4>
        <p>Webaim er en hjemmeside udviklet og drevet af Utah State University med en række funktioner, der hjælper dig til at udvikle og teste for tilgængelighed. Deres anbefalinger er sykroniseret med krav og anbefalinger W3C.</p>
        <p>Webaim stiller funktionen Wave gratis til rådighed, som giver en analyse og rapport på din løsnings tilgængelighed og udfordringer med samme.</p>
        <h5>Læs mere om Webaim</h5>
            <ul class="nobullet-list">
            <li><a href="https://webaim.org/resources/" class="icon-link">Webaim<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>   
        <h4>Oplæsning</h4>
        <p>En af de store udfordringer i tilgængeligt design er aftestning af oplæsningen af sidens indhold. Der er for nuværende ikke en automatiseret måde at gøre dette på. Browserproducenterne og de forskellige platforme har desuden meget forskellige tilgange til oplæsning og alle har større eller mindre udfordringer især med matematiske og fysiske særtegn.  Men er din kode valid html og opfylder du kravene fra WCAG 2.1 forhindrer din løsning ikke oplæsningen af indholdet. </p>
        <p>Det Fælles Designsystem anbefaler at følge vejledningen fra Webaim omkring aftestning med Voice Over (Mac) og Oplæser på Windows 10.</p>
        <h5>Læs mere om oplæsning</h5>
            <ul class="nobullet-list">
            <li><a href="https://webaim.org/articles/voiceover/" class="icon-link">Voice over<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://support.microsoft.com/da-dk/help/17173/windows-10-hear-text-read-aloud" class="icon-link">Windows 10 hear text<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
            <li><a href="https://youtu.be/o_mvO6EQ0tM" class="icon-link">Introduction to Screen Readers<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>   
        <h4>Chrome Developer Tools</h4>
        <p>Google Chrome stiller en lang række værktøjer til rådighed for test og fejlsøgning i en løsning. Ved at trykke på F12 åbner Developer Tools alt lige fra kodevisning til performance-måling. Du kan se en farves tilgængelighedsniveau ved at klikke på farven i ”Elements” visning, hvor du også kan justere den og se resultatet direkte i den aktuelle sidevisning på samme måde som ved redigering af øvrige parametre i Chrome Developer Tools.</p>
    </section>
</article>
