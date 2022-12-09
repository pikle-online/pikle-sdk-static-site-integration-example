module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");

  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addFilter("categoryFilter", function(value, category) {
    return value.filter(next => next.data && next.data.category === category)
  });

  // Universal Shortcodes (Adds to Liquid, Nunjucks, Handlebars)
  eleventyConfig.addShortcode("addtocart", function(price, url, productId, showCompare) {
    return showCompare ? `<div>
      <h4>${price}</h4>
      <div class="d-flex cart-action-section">
        <button type="button" class="btn add-to-cart success"><span class="btn__content"> Add To Cart </span></button>
        <div class="pikle-compare-button" data-href="${url}" data-cart-url="/cart/add/${productId}" data-cart-method="post"></div>
      </div>
    </div>` :
    `<div>
      <h4>${price}</h4>
      <div class="d-flex cart-action-section">
        <button type="button" class="btn add-to-cart success"><span class="btn__content"> Add To Cart </span></button>
      </div>
    </div>`;
  });

  // Universal Shortcodes (Adds to Liquid, Nunjucks, Handlebars)
  eleventyConfig.addShortcode("piklejssdk", function(appkey) {
    const initSrc = 'https://connect.pikle.online/jssdk/v1.0/init.js'
    return `<div id="pikle-root"></div>
    <script>
      (function(w, id, c) {
        w[id] = w[id] || (w[id] = []);
        w[id].push(c);
      } (window, 'PIKLE',
        {
          appKey  : '${appkey}',
          version : 'v1.0',
          compare  : {
            showInit: true,
            loadOnHover: true,
            limit: 4
          }
        }
      ));
    </script>
    <script crossorigin="anonymous" src="${initSrc}"></script>`;
  });

  
  // Universal Shortcodes (Adds to Liquid, Nunjucks, Handlebars)
  eleventyConfig.addShortcode("piklestatus", function(layout) {
    return `<div class="pikle-compare-status" data-layout="${layout}"></div>`;
  });

  return {
    pathPrefix: "/pikle-sdk-static-site-integration-example/",
    dir: {
      input: "src",
      output: "docs"
    }
  }
}