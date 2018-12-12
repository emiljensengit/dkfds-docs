---
permalink: /komponenter/form-controls/
redirect_from:
- /form-controls/
layout: styleguide
type: component
title: Formular elementer
category: Komponenter_category
subcategory: Design og kode
lead: Brug formular elementerne til at opbygge blanketter til din selvbetjeningsløsning. 
subnav:
- text: Felter
  href: '#felter'
- text: Feltbredde
  href: '#feltbredde'
- text: Tekstområde
  href: '#textarea'
- text: Dropdown-menu
  href: '#dropdown-menu'
- text: Tjekboks
  href: '#tjekboks'
- text: Radioknap
  href: '#radioknap'
- text: Datovælger
  href: '#datovælger'
- text: Vedhæft fil
  href: '#vedhæft-fil'
---

<h4>Generelt om tilgængelighed af formularelementer</h4>
<ul>
    <li>Formularelementer markeres tydeligt med en focus-tilstand, når brugere vha tab-tasten navigerer sig frem til dem.</li>
    <li>Overhold sammenhængen mellem den viste rækkefølge af formularelementer på skærmen og deres rækkefølge i koden. Anvend ikke CSS til at omarrangere formularelementerne, da skærmlæsere følger rækkefølgen, som den er angivet i koden.</li>
    <li>Sørg for at alle elementer står i register – at de står på linje og i et naturligt vertikalt læse-flow fra top til bund.</li>
    <li>Grupper sammenhængende formularelementer vha. fieldset og brug et enkelt legend for hvert fieldset.</li>
    <li>Tilføj label til alle formularelementer udover fieldset.</li>
    <li>Labels til formularelementer skal være meningsfulde og præcise.</li>
    <li>Undgå placeholder-tekst, da browserne ikke kan garantere tilstrækkeligt kontrastniveau og teksten desuden kan være forvirrende for brugerne. Placeholder-tekst forsvinder, når brugeren klikker i feltet og dermed forsvinder information, der kunne være brugeren til gavn.</li>
    <li>Tillad copy/paste.</li>
</ul>

{% include child-sections.html parent='Form controls' %}
