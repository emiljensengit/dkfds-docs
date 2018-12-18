---
type: component
title: Typesetting
parent: typography
order: 07
---

<!-- Typsetting section begin -->

{% include code/preview.html component="typesetting" %}
{% include code/accordion.html component="typesetting" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="false" aria-controls="typesetting-docs-tech">
    Implementering
  </button>
  <div id="typesetting-docs-tech" aria-hidden="true" class="accordion-content">
    <p>Alle tekstelementer her automatiske en max-bredde på 75 karaktere.</p>
    <p>Bredden er styret af variablen <code>$text-max-width</code> in <code>src/stylesheets/core/<wbr>_variables.scss</code>.</p>
  </div>
</div>