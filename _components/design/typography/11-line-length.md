---
type: component
title: Linjelængde
parent: typography
order: 11
---

<p class="font-lead">For at sikre optimal læsbarhed er der i koden sat en maksimal bredde på linjelængden for brød- og manchettekst.</p>

{% include code/preview.html component="line_length" %}
{% include code/accordion.html component="line_length" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="false" aria-controls="linelength-docs-tech">
    Implementering
  </button>
  <div id="linelength-docs-tech" aria-hidden="true" class="accordion-content">
   <p>Alle tekstelementer her automatiske en max-bredde på 75 karakterer.</p>
   <p>Bredden er styret af variablen <code>$text-max-width</code> i <code>src/stylesheets/core/_variables.scss</code>.</p>
  </div>
</div>