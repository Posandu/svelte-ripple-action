# Svelte Ripple Action

<p>
  <img
			src="https://deno.bundlejs.com/badge?q=svelte-ripple-action"
			alt=""
	/>
  <img src="https://img.shields.io/github/commit-activity/t/posandu/svelte-ripple-action" />
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/posandu/svelte-ripple-action">
</p>

View the [demo](https://ripple.posandu.com/).

Svelte Ripple Action is a simple and customizable action for creating ripple effects on elements in a Svelte application.

## Installation

Install the package from npm or your preferred package manager:

```bash
npm install svelte-ripple-action
```

## Usage

1. Import the CSS styles for the ripple effect:

```javascript
import "svelte-ripple-action/ripple.css";
```

2. Import the `ripple` action and use it on any element you want to have a ripple effect on:

```svelte
<script>
  import { ripple } from "svelte-ripple-action";
</script>

<button use:ripple>Click me</button>
```

That's it! You now have a ripple effect on your element.

## Options

You can pass options to customize the ripple effect.

### `center?: boolean`

By default, the ripple effect starts from the point where the user clicks on the element. If you want the ripple effect to start from the center of the element, you can pass the `center` option.

```svelte
<button use:ripple={{ center: true }}>Click me</button>
```

### `color?: string`

You can customize the color of the ripple effect by passing a valid CSS color value to the `color` option.

```svelte
<button
  use:ripple={{
    color: "rgba(255, 0, 0, 0.2)",
  }}
>Red ripple</button>
```

### `duration?: number`

You can control the duration of the ripple effect in seconds by passing a number to the `duration` option.

```svelte
<button use:ripple={{ duration: 2 }}>2 seconds</button>
<button use:ripple={{ duration: 0.2 }}>0.2 seconds</button>
```

### `maxRadius?: number`

You can control the maximum radius of the ripple effect in pixels by passing a number to the `maxRadius` option.

```svelte
<button use:ripple={{ maxRadius: 100 }}>100px</button>
```

## Credits

Created by [Posandu](https://posandu.com). You can find the source code on [GitHub](https://github.com/posandu/svelte-ripple-action).
