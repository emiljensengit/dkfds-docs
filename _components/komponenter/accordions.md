---
permalink: /komponenter/accordions/
layout: styleguide
type: component
title: Accordions
category: Komponenter_category
subcategory: Design og kode
lead: Accordions are a list of headers that can be clicked to hide or reveal additional content.
---

{% include code/preview.html component="accordion" %}
{% include code/accordion.html component="accordion" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
    aria-expanded="true" aria-controls="documentation">
    Retningslinjer
  </button>
  <div id="documentation" class="accordion-content">
    
  </div>
</div>