<script lang="ts">
	import "$lib/ripple.css";
	import { ripple } from "$lib";
	import { onMount } from "svelte";
	import "./app.css";
	import Examples from "./Examples.svelte";

	let header: HTMLDivElement | null = null;

	onMount(() => {
		if (header) {
			header?.dispatchEvent(
				new PointerEvent("pointerdown", {
					clientX: Math.random() * header.clientWidth,
					clientY: Math.random() * header.clientHeight,
				})
			);

			setTimeout(() => {
				header?.dispatchEvent(
					new PointerEvent("pointerup", {
						clientX: Math.random() * header.clientWidth,
						clientY: Math.random() * header.clientHeight,
					})
				);
			}, 600);
		}

		globalThis.hljs.highlightAll();
	});
</script>

<div
	class="header"
	use:ripple={{
		color: "rgba(255, 255, 255, 0.2)",
		duration: 1,
	}}
	bind:this={header}
>
	<h1>
		<code> Svelte ripple action </code>
	</h1>

	<p class="description">Svelte directive for a ripple effect</p>
</div>

<div class="container">
	<h2>Usage</h2>

	<p>Install the package from npm or any node package manager of your choice</p>

	<pre><code class="language-bash">npm i -D svelte-ripple-action</code></pre>

	<p>Import the CSS styles for the ripple effect.</p>

	<pre><code class="language-js">import "svelte-ripple-action/ripple.css";</code
		></pre>

	<p>
		Import the directive from the package and use it on any element you want to
		have a ripple effect on
	</p>

	<pre><code class="language-jsx"
			>{`<scr'ipt>
  import { ripple } from "svelte-ripple-action";
</script>

<button use:ripple>Click me</button>
`.replace(/'/g, "")}</code
		></pre>

	<p>DONE! 🥳 you have a ripple effect on your element.</p>

	<button use:ripple class="btn" style="margin: 10px 0;"> Click me </button>

	<h2>Options</h2>

	<p>
		You can pass options to the ripple action to customize the ripple effect.
	</p>

	<pre><code class="language-jsx"
			>{`<scr'ipt>
  import { ripple } from "svelte-ripple-action";
</script>

<button use:ripple={options}>Click me</button>
`.replace(/'/g, "")}</code
		></pre>

	<h3>
		center?: <code>boolean</code>
	</h3>

	<p>
		By default, the ripple effect starts from the point where the user clicks on
		the element. If you want the ripple effect to start from the center of the
		element, you can pass the <code>center</code> option.
	</p>

	<button
		use:ripple={{
			center: true,
		}}
		class="btn"
		style="margin: 10px 0;"
	>
		Click me
	</button>

	<pre><code class="language-html"
			>{`<button use:ripple={{center:true}}>Click me</button>`}
</code></pre>

	<h3>
		color?: <code>string</code>
	</h3>

	<p>
		The color of the ripple effect. You can pass any valid CSS color value to
		the <code>color</code> option.
	</p>

	<button
		use:ripple={{
			color: "rgba(255, 0, 0, 0.2)",
		}}
		class="btn"
		style="margin: 10px 0;background-color: white;color:red;border: 1px solid red;"
	>
		Red ripple
	</button>

	<pre><code class="language-html"
			>{`<button
  use:ripple={{
  	color: "rgba(255, 0, 0, 0.2)",
  }}
  style="background-color: white;color:red;border: 1px solid red;"
>
  Red ripple
</button>`}
</code></pre>

	<h3>
		duration?: <code>number</code>
	</h3>

	<p>
		Duration of the ripple effect in seconds. You can pass any valid number to
		the <code>duration</code> option.
	</p>

	<button
		use:ripple={{
			duration: 2,
		}}
		class="btn"
		style="margin: 10px 4px;"
	>
		2 seconds
	</button>

	<button
		use:ripple={{
			duration: 0.2,
		}}
		class="btn"
		style="margin: 10px 4px;"
	>
		0.2 seconds
	</button>

	<pre><code class="language-html"
			>{`<button use:ripple={{duration:2}}>2 seconds</button> 
<button use:ripple={{duration:0.2}}>0.2 seconds</button>`}
</code></pre>

	<br />

	<h2>Some examples</h2>

	<Examples />

	<pre><code class="language-html" style="margin-top: 20px;"
			>{`<div use:ripple class="box imgripple">Image ripple</div>
<div use:ripple class="box gradient">Gradient ripple</div>

<br />

<p>Needs to be wrapped in a div for void elements like img, input, etc.</p>
<div use:ripple class="imgbox">
	<img
		src="https://media.tenor.com/VFFJ8Ei3C2IAAAAM/rickroll-rick.gif"
		alt="Man dancing"
	/>
</div>

<div
	use:ripple={{
		color: "rgba(0,0,0,0.5)",
	}}
>
	<input type="text" placeholder="Type something" style="width: 100%;" />
</div>

<style>
.box {
  height: 200px;
  width: 200px;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 20px;
  margin-right: 20px;
  display: inline-flex;
}

.imgbox {
  height: 200px;
  width: 200px;
  border-radius: 5px;
  margin-top: 20px;
  margin-right: 20px;
  display: inline-flex;
  & img {
  	width: 100%;
  	height: 100%;
  	object-fit: cover;
  }
}

.imgripple {
  & .ripple {
  	background: url(https://media.tenor.com/VFFJ8Ei3C2IAAAAM/rickroll-rick.gif);
  	background-size: 80%;
  	background-position: center;
  	background-repeat: no-repeat;
  	z-index: -1;
  }
}

.gradient {
  & .ripple {
  	background: linear-gradient(45deg, #f3ed783d, #af4261);
  }
}
</style>`}</code
		></pre>

	<footer style="margin-top: 20px;" class="footer">
		<p>
			Created by <a href="https://posandu.com">Posandu</a>. Check out the source
			code on
			<a href="https://github.com/posandu/svelte-ripple-action">GitHub</a>
		</p>
	</footer>
</div>

<style>
	:global(*, *::before, *::after) {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		font-family: inherit;
	}

	:global(html, body) {
		height: 100%;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif;
	}

	.header {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		min-height: 200px;
		background-color: #d8411b;
		user-select: none;
		color: white;

		& h1 {
			font-size: 2rem;
			margin-bottom: 1rem;
		}

		& .description {
			font-size: 1.2rem;
			color: #f0f0f0;
		}
	}

	code {
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 0.2rem;
	}

	.container {
		padding: 2rem;
		max-width: 800px;
		margin: 0 auto;

		& p {
			line-height: 40px;
		}

		& pre code {
			background-color: rgb(24, 24, 24);
			font-family: "Consolas", "Courier New", monospace;
			display: block;
		}

		& h3 {
			margin-top: 20px;
		}
	}

	.btn {
		padding: 0.5rem 1rem;
		border-radius: 0.2rem;
		background-color: #ff4e21;
		color: white;
		border: none;
		cursor: pointer;
		font-size: 1rem;
		font-weight: 600;
		transition: all 0.2s ease;

		&:hover {
			background-color: #f33e16;
		}

		&:focus {
			outline: none;
		}
	}

	.footer {
		margin-top: 20px;
		text-align: center;

		& a {
			color: #ff4e21;
			text-decoration: none;
			font-weight: 600;

			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>
