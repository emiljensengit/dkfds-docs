---
permalink: /design/grid/
redirect_from:
- /grid/
layout: styleguide
type: component
title: Grid
category: Design_category
subcategory: Design
lead: Det fælles designsystem benytter et simpelt mobile-first flexbox grid til opbygning af sider. Gridsystemet er et standard 12-kolonne system, med fem responsive breakpoints.
subnav:
- text: Introduktion
  href: '#thegridsystem'
- text: Indstillinger
  href: '#grid-settings'
- text: Responsive klasser
  href: '#responsive-classes'
- text: Auto og Fill kolonner
  href: '#auto-fill-layout-columns'
- text: Rækkefølge
  href: '#reordering'
- text: Hjælpeklasser
  href: '#utility'
- text: Variable
  href: '#variables'
---
<section class="section">
    <h2 id="thegridsystem">Introduktion</h2>
    <p>Gridsystemet bruger kontainere, rækker og kolonner til at opbygge sider. Gridsystemet bruger <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes">flexbox</a> og er responsivt. Nedenfor vises eksempler på brugen af gridsystemet</p>
    {% include code/preview.html component="grid--how-it-works" %}
    {% include code/accordion.html component="grid--how-it-works" %}
    <p>Eksemplet ovenfor viser tre kolonner som har samme bredde på både mobil, tablet og desktop.</p>
</section>

<section class="section">
    <h2 id="grid-settings">Indstillinger</h2>
    <p>Grid systemet har følgende standardinstillinger:</p>
    <table class="table">
        <thead>
            <tr>
                <th></th>
                <th>Extra small<br /><small>&lt;576px</small></th>
                <th>Small<br /><small>&ge;576px</small></th>
                <th>Medium<br /><small>&ge;768px</small></th>
                <th>Large<br /><small>&ge;992px</small></th>
                <th>Extra large<br /><small>&ge;1200px</small></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Max container width</th>
                <td>None (auto)</td>
                <td>None (auto)</td>
                <td>None (auto)</td>
                <td>None (auto)</td>
                <td>1140px</td>
            </tr>
            <tr>
                <th>Class prefix</th>
                <td><code>.col-</code></td>
                <td><code>.col-sm-</code></td>
                <td><code>.col-md-</code></td>
                <td><code>.col-lg-</code></td>
                <td><code>.col-xl-</code></td>
            </tr>
            <tr>
                <th># of columns</th>
                <td colspan="5">12</td>
            </tr>
            <tr>
                <th>Gutter width</th>
                <td colspan="5">1rem (16px on each side of a column)</td>
            </tr>
            <tr>
                <th>Nestable</th>
                <td colspan="5">Yes</td>
            </tr>
            <tr>
                <th>Column ordring</th>
                <td colspan="5">Yes</td>
            </tr>
        </tbody>
    </table>
</section>

<section class="section">
    <h2 id="responsive-classes">Responsive klasser</h2>
    <p>Som udgangspunkt findes der 5 breakpoints: extra small, small, medium, large, or extra large.</p>

    <h3>Klasser som rammer alle breakpoints</h3>
    <p>Brug klassen <code>.col</code> eller <code>.col-*</code> uden responsive prefix (fx. md).</p>

    {% include code/preview.html component="grid--all-breakpoints" %}
    {% include code/accordion.html component="grid--all-breakpoints" %}

    <h3>Fra stablede kolonner til kolonner som vises på en række</h3>
    <p>Ved at bruge fx <code>.col-md-*</code> klassen, vil kolonnerne starte ud med at være placeret horizontalt over hinanden på mobile enheder og fra medium-skærme vil de være vist vertikalt på en række.</p>

    {% include code/preview.html component="grid--stacked-horizontal" %}
    {% include code/accordion.html component="grid--stacked-horizontal" %}

    <h3>Brug af forskellige kolonne-klasser</h3>
    <p>Det er muligt at mikse forskellige kolonne-klasser.</p>

    {% include code/preview.html component="grid--mix-match" %}
    {% include code/accordion.html component="grid--mix-match" %}

    <h3>Kolonneombrydning</h3>
    <p>Hvis der er mere end 12 kolonner på en række vil ekstra kolonner blive vist på en ny linie under de første 12</p>

    {% include code/preview.html component="grid--column-wrapping" %}
    {% include code/accordion.html component="grid--column-wrapping" %}

    <h3>Indlejre</h3>
    <p>Flere rækker og dertilhørende kolonner kan indjeres inde i hinanden.</p>

    {% include code/preview.html component="grid--nesting" %}
    {% include code/accordion.html component="grid--nesting" %}

    <h3>Ingen afstand mellem kolonner (ingen gutter)</h3>
    <p>Tilføj klassen <code>.no-gutters</code> til rækken for at fjerne den horisontale padding i kolonnerne.</p>
    {% include code/preview.html component="grid--no-gutters" %}
    {% include code/accordion.html component="grid--no-gutters" %}
</section>

<section class="section">
    <h2 id="auto-fill-layout-columns">'Auto' og 'Fill' kolonner</h2>
    <p>Det er muligt at specificere bredden på en kolonne uden en eksplicit nummer-klasse som fx <code>.col-sm-6</code>.</p>
    
    <h3>Specifik bredde på kun én kolonne</h3>
    <p>Ved kun at give én kolonne en eksplicit bredde (.col-6) tilpasser de resterende kolonner sig.</p>
    {% include code/preview.html component="grid--one-column-width" %}
    {% include code/accordion.html component="grid--one-column-width" %}

    <h3>Kolonnebredde efter indhold</h3>
    <p>Ved at brug <code>col-{breakpoint}-auto</code> tilpasser kolonnerne sig til deres indhold.</p>
    {% include code/preview.html component="grid--variable-width-content" %}
    {% include code/accordion.html component="grid--variable-width-content" %}
</section>

<section class="section">
    <h2 id="reordering">Rækkefølge</h2>
    <h3>Order-klasser</h3>
    <p>Brug klasserne <code>.order-</code> til at bestemme den visuelle rækkefølge af kolonnerne. Disse klasser findes også i responsive udgaver fx <code>.order-1.order-md-2</code>).</p>

    {% include code/preview.html component="grid--ordering-visual" %}
    {% include code/accordion.html component="grid--ordering-visual" %}

    <h3>Forskyd kolonner</h3>
    <p>Brug klasserne <code>.offset-</code> til at forskyde kolonner, fx forskyder <code>.offset-md-4</code> 4 kolonner til højre.</p>

    {% include code/preview.html component="grid--offsets" %}
    {% include code/accordion.html component="grid--offsets" %}

    <p>Det er muligt at nulstille forskydning ved fx at bruge <code>.offset-md-0</code></p>

    {% include code/preview.html component="grid--offsets-reset" %}
    {% include code/accordion.html component="grid--offsets-reset" %}
  
</section>

<section class="section">
    <h2 id="utility">Hjælpeklasser</h2>
    <p>Designsystemet kommer med forskellige hjælpeklasser, fx. flex, margin og bredde. Disse hjælpeklasser kan kombineres med grid-systemet.</p>
    <h3 >Hjælpeklasser: Flexbox</h3>
    <p>Bruge designsystemets flexbox hjælpeklasser-klasser til at ændre på placeringsen af kolonnerne og placeringen af indholdet i kolonnerne.</p>

    <h4>Vertikal alignment</h4>

    {% include code/preview.html component="grid--util-flex-vertical-align-01" %}
    {% include code/accordion.html component="grid--util-flex-vertical-align-01" %}

    <br>
    {% include code/preview.html component="grid--util-flex-vertical-align-02" %}
    {% include code/accordion.html component="grid--util-flex-vertical-align-02" %}

    <h4>Horisontal alignment</h4>

    {% include code/preview.html component="grid--util-flex-horizontal-align" %}
    {% include code/accordion.html component="grid--util-flex-horizontal-align" %}

    <h3>Hjælpeklasser: Margin</h3>
    <p>Det er også muligt at bruge margin-hjælpeklasserne såsom <code>.mr-auto</code>.</p>

    {% include code/preview.html component="grid--util-margin" %}
    {% include code/accordion.html component="grid--util-margin" %}

    <h3>Hjælpeklasser: bredde</h3>
    <p>Hvis du ønsker rækker og klonner som gør fra kant til kant kan du envent undlade <code>.container</code> eller tilføje klassen <code>.w-percent-100</code>.</p>
</section>

<section class="section">
    <h2 id="variables">Sass variable i designsystemet</h2>
    <pre>
    <code class="lang-scss">$grid-columns:      12;
    $grid-gutter-width: 30px;

    $grid-breakpoints: (
        // Extra small screen / phone
        xs: 0,
        // Small screen / phone
        sm: 576px,
        // Medium screen / tablet
        md: 768px,
        // Large screen / desktop
        lg: 992px,
        // Extra large screen / wide desktop
        xl: 1200px
    );

    $container-max-widths: (
        sm: 100%,
        md: 100%,
        lg: 100%,
        xl: 1200px
    );</code>
    </pre>
</section>