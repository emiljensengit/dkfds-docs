---
permalink: /omdesignsystemet/tiludviklere/
layout: styleguide
title: Til udviklere
category: Om_designsystemet_category
subnav:
---

<p>FDS er opdelt i to projekter:</p>
<ul class="nobullet-list">
    <li><a href="https://github.com/detfaellesdesignsystem/dkfds-components" class="icon-link">DKFDS Components (kernen som indeholder komponenterne)<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
    <li><a href="https://github.com/detfaellesdesignsystem/dkfds-plugins" class="icon-link">DKFDS Plugins<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
</ul>

<h2>DKFDS Components</h2>
<p>Projektet er på npm og kan installeres ved at skrive følgende i en kommando-prompt:</p>
```shell
npm install --save dkfds
```
<p>Modulet 'dkfds' er nu installeret i 'node_modules' mappen.<br>
Du kan enten benytte source-filerne i 'src/'-mappen eller de kompilerede filer i 'dist/'-mappen.</p>

<h3>Inkluder DKFDS Components i dit projekt</h3>
<p>Den hurtigst måde at få inkluderet FDS' css i dit projekt er at tilføje følgende link-tag:</p>
```shell
  <link type='text/css' rel='stylesheet' href='[path to dkfds folder]/dist/css/dkfds.css'>
```
<p>For at inkludere javascripten, tilføj følgende tag i slutningen af body-tagget:</p>
```shell
  <script src='[path to dkfds folder]/dist/js/dkfds.js'></script>
```

<h4>Note til Webpack</h4>
<p>For at inkludere stylingen skal visse variabler tilpasses:</p>

```shell
  $font-path:         '~dkfds/src/fonts/IBMPlexSans/';
  $image-path:        '~dkfds/src/img';
  $site-image-path:   '~dkfds/src/img';
  $icons-folder-path: '~dkfds/src/img/svg-icons';
  @import '../node_modules/dkfds/src/stylesheets/dkfds';
```

<p>For at inkludere javascripten via webpack, tilføj følgende linie i din main.js fil:</p>

```shell
  import "dkfds";
```

<h2>DKFDS Plugins</h2>
<p>Det er kun styling (css eller scss) som skal inkluderes fra plugins projektet. Den JavaScript og HTML som findes i projektet er kun til at lave de eksempler som kan ses på dette dokumentationssite.</p>
<p>Der er i øjeblikket lavet temaer til følgende:</p>
<ul class="nobullet-list">
    <li><a href="https://datatables.net/" class="icon-link">Datatables<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
    <li><a href="https://github.com/woocommerce/selectWoo" class="icon-link">SelectWoo<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
</ul>

<p>Projektet er på npm og kan installeres ved at skrive følgende i en kommando-prompt:</p>

```shell
npm install dkfds-plugins --save
```

<p>Modulet 'dkfds-plugins' er nu installeret i 'node_modules' mappen.<br>
<p>Inkluder derefter temaerne enten som css direkte:</p>

<pre>
&lt;link rel="stylesheet" href="[path-to-plugins-project]/dist/css/dkfds-datatables-theme.min.css"&gt;
</pre>

<p>Eller inkluder temaet i scss:</p>

<pre>
@import "~dkfds-plugins/dist/datatables/style/dkfds-datatables-theme.scss";
</pre>
