--- 
permalink: /preview-components/grid.html
layout: iframed 
title: Grid.html
---
<div class="grid-example">
    <div class="container">
        <div class="row">
            <div class="col">
                .col
            </div>
            <div class="col">
                .col
            </div>
            <div class="col">
                .col
            </div>
        </div>
    </div>
</div>

<!-- Stack the columns on mobile by making one full-width and the other half-width -->
<div class="grid-example">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-8">.col-12 .col-md-8</div>
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>
    </div>
</div>

<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
<div class="grid-example">
    <div class="container">
        <div class="row">
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>
    </div>
</div>

<!-- Columns are always 50% wide, on mobile and desktop -->
<div class="grid-example">
    <div class="container">
        <div class="row">
            <div class="col-6">.col-6</div>
            <div class="col-6">.col-6</div>
        </div>
    </div>
</div>

<style scoped>
    .grid-example {
        margin-bottom: 1em;
        padding-left: 16px;
        padding-right: 16px;
    }

    .grid-example .row>.col,
    .grid-example .row>[class^=col-] {
        padding-top: .75rem;
        padding-bottom: .75rem;
        background-color: rgba(86, 61, 124, .15);
        border: 1px solid rgba(86, 61, 124, .2);
    }
</style>