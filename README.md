# Expanding Textarea
You have a simple need. When the user types a few lines into a textarea, the input should grow to fit the text. This should be easy, and it can be.

## Reasonable Alternatives

Here are two other options to consider first:

- Use this [clever CSS trick to replicate the textarea's content](https://css-tricks.com/the-cleanest-trick-for-autogrowing-textareas/). This can work just fine, though you do need to be careful that the hidden element perfectly mimics the textarea.
- Use Javascript to [measure and resize when the content changes](https://css-tricks.com/auto-growing-inputs-textareas/), though it's often a bit jerky.

If those don't fit your need, consider this tiny web component. You can drop it in and use it like a normal HTML element.

## Usage

Use `expanding-textarea` just how you would use a normal textarea. Its interface and behavior should be identical in most cases.

```
<expanding-textarea>Inital value</expanding-textarea>
```

That's about it! I hope you find this useful.