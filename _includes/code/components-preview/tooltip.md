--- 
permalink: /preview-components/tooltip.html
layout: iframed 
title: Tooltip.html
---
<div class="container">
    <p class="h5">Tooltip (kommer frem ved mouse-over):</p>
    <button class="button button-primary js-tooltip" role="tooltip" title="Dette er et tooltip">
        Knap med tooltip
        <span class="sr-only">Dette er tooltipteksten til screenreaders</span>
    </button>
    <p class="h5">Ikon med popover (kræver tryk)</p>
    <a href="javascript:void(0)" class="popover js-tooltip"
        data-tippy-trigger="click" role="tooltip" title="Dette er en hjælpetekst i en popover"><svg class="icon-svg " ><use xlink:href="#help-circle-outline"></use></svg><span
            class="sr-only">Dette er tooltipteksten til screenreaders,
            popover</span></a>

    <p class="h5">Ikon med tooltip</p>
    <a href="javascript:void(0)" class="js-tooltip" role="tooltip" title="Dette er en hjælpetekst i en popover"><svg class="icon-svg " ><use xlink:href="#help-circle-outline"></use></svg><span
            class="sr-only">Dette er tooltipteksten til screenreaders,
            popover</span></a>

    <p class="h5">Eksempel på konfiguration - placering:</p>
    <button class="button button-primary js-tooltip" data-tippy-placement="top"
        title="Top tooltip">Top <span class="sr-only">Dette er
            tooltipteksten til screenreaders, top</span></button>
    <button class="button button-primary js-tooltip" data-tippy-placement="bottom"
        title="Bund tooltip">Bund <span class="sr-only">Dette er
            tooltipteksten til screenreaders, bottom</span></button>
    <button class="button button-primary js-tooltip" data-tippy-placement="left"
        title="Venstre tooltip">Venstre <span class="sr-only">Dette er
            tooltipteksten til screenreaders, venstre</span></button>
    <button class="button button-primary js-tooltip" data-tippy-placement="right"
        title="Højre tooltip">Højre <span class="sr-only">Dette er
            tooltipteksten til screenreaders, højre</span></button>
</div>