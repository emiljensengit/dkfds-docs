---
title: Display
parent: Hjælpefunktioner
order: 04
---

<p>Der er opsat en hjælpefunktion som automatisk genererer klasser til display-egenskaben baseret på de definerede breakpoints i <code>$grid-breakpoints</code>. Disse hjælpeklasser er inspireret af <a href="https://getbootstrap.com/docs/4.1/utilities/display/" class="icon-link">Bootstraps Display Utility<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>.</p>
Format: <code>d-{display}</code> og <code>d-{breakpoint}-{display}</code>

<h3 class="h5 mb-0">Display</h3>
<ul>
    <li><code>none</code></li>
    <li><code>inline-block</code></li>
    <li><code>block</code></li>
    <li><code>flex</code></li>
    <li><code>inline-flex</code></li>
</ul>
<h3 class="h5 mb-0">Eksempel</h3>

<table class="table">
  <thead>
    <tr>
      <th>Browserstørrelse</th>
      <th>Klasse</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Skjul på alle</td>
      <td><code>.d-none</code></td>
    </tr>
    <tr>
      <td>Skjul kun på xs</td>
      <td><code>.d-none .d-sm-block</code></td>
    </tr>
    <tr>
      <td>Skjul kun på sm</td>
      <td><code>.d-sm-none .d-md-block</code></td>
    </tr>
    <tr>
      <td>Skjul kun på md</td>
      <td><code>.d-md-none .d-lg-block</code></td>
    </tr>
    <tr>
      <td>Skjul kun på lg</td>
      <td><code>.d-lg-none .d-xl-block</code></td>
    </tr>
    <tr>
      <td>Skjul kun på xl</td>
      <td><code>.d-xl-none</code></td>
    </tr>
    <tr>
      <td>Synlig på alle</td>
      <td><code>.d-block</code></td>
    </tr>
    <tr>
      <td>Synlig kun på xs</td>
      <td><code>.d-block .d-sm-none</code></td>
    </tr>
    <tr>
      <td>Synlig kun på sm</td>
      <td><code>.d-none .d-sm-block .d-md-none</code></td>
    </tr>
    <tr>
      <td>Synlig kun på md</td>
      <td><code>.d-none .d-md-block .d-lg-none</code></td>
    </tr>
    <tr>
      <td>Synlig kun på lg</td>
      <td><code>.d-none .d-lg-block .d-xl-none</code></td>
    </tr>
    <tr>
      <td>Synlig kun på xl</td>
      <td><code>.d-none .d-xl-block</code></td>
    </tr>
  </tbody>
</table>