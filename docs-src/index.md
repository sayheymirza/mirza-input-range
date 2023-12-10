---
layout: page.11ty.cjs
title: <mirza-input-range> ⌲ Home
---

# &lt;mirza-input-range>

`<mirza-input-range>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<mirza-input-range>` is just an HTML element. You can it anywhere you can use HTML!

```html
<mirza-input-range></mirza-input-range>
```

  </div>
  <div>

<mirza-input-range></mirza-input-range>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<mirza-input-range>` can be configured with attributed in plain HTML.

```html
<mirza-input-range name="HTML"></mirza-input-range>
```

  </div>
  <div>

<mirza-input-range name="HTML"></mirza-input-range>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<mirza-input-range>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;mirza-input-range&gt;</h2>
    <mirza-input-range .name=${name}></mirza-input-range>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;mirza-input-range&gt;</h2>
<mirza-input-range name="lit-html"></mirza-input-range>

  </div>
</section>
