# Expanding Textarea
You have a simple need. When the user types a few lines into a textarea, the input should grow to fit the text. This should be easy, and it can be with `<expanding-textarea>`.

## Usage

First, you'll want to reference the package.

If you're using a bundler, `npm install expanding-textarea`, and then import it in one of your top level files.  This is reference and register the custom element

If you're not bundling your project, you can use a CDN like jsdelivr and include a script tag in your project:

```
<script type="module" src=" https://cdn.jsdelivr.net/npm/expanding-textarea@0.2.0/dist/expanding-textarea.es.js"></script>
```

Once loaded, you can use `<expanding-textarea>` just as you would use a normal textarea. Its interface and behavior should be identical in most cases.

```
<expanding-textarea>Inital value</expanding-textarea>
```

To style the `<expanding-textarea>`, use [CSS parts](https://developer.mozilla.org/en-US/docs/Web/CSS/::part).

```
expanding-textarea::part(input) {
  color: hotpink;
}

expanding-textarea::part(placeholder) {
  color: cyan;
}
```

That's about it! I hope you find this useful.

## A Reasonable Alternative

If you don't want to use javascript, you can also try this [clever CSS trick](https://css-tricks.com/the-cleanest-trick-for-autogrowing-textareas/) to resize a textarea.

---
Adam Sanderson (https://snakeshands.com)