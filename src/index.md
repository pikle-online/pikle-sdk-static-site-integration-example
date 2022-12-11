---
title: Pikle JS SDK Integration example - with Comparison Service
layout: "base.njk"
---

<div class="product-list d-flex">
{% for product in collections.products %}
  <div class="product-card">
    <div>
      <div class="d-flex justify-center">
        <img src="{{ product.data.img | url }}" width="100" height="100">
      </div>
      <div>
        <a href="{{ product.url | url }}">{{ product.data.title }}</a>
      </div>
    </div>
    {% addtocart product.data.price, product.url, product.data.productId, true %}
  </div>
{% endfor %}
</div>