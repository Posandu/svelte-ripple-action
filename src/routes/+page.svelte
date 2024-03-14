<script lang="ts">
	import "$lib/ripple.css";
	import { ripple } from "$lib";
	import { onMount } from "svelte";
	import "./app.css";
	import Examples from "./Examples.svelte";
	import CodeBlock from "./CodeBlock.svelte";
	import type { RippleOptions } from "$lib/constants";

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
	});

	const SCRIPT = "<scri" + "pt>"; // some weird hack to avoid parsing

	let customizeOptions: RippleOptions = {
		color: "rgba(255,255,255,0.2)",
		center: false,
		disabled: false,
		duration: 0.6,
		maxRadius: 0,
	};
</script>

<div
	class="header"
	use:ripple={{
		color: "rgba(0, 0, 0, 0.2)",
		duration: 0.6,
	}}
	bind:this={header}
>
	<img src="/logo-large.png" alt="" srcset="" class="header--logo" />

	<h1 class="header--heading">Svelte ripple action</h1>

	<p class="header--desc">Svelte directive for a ripple effect</p>

	<CodeBlock code={`npm i svelte-ripple-action`} />

	<p class="header--info">
		<a
			href="https://npmjs.com/package/svelte-ripple-action"
			class="header--stat"
			target="_blank"
		>
			<img
				src="https://deno.bundlejs.com/badge?q=svelte-ripple-action"
				alt=""
			/>
		</a>

		<a
			href="https://github.com/posandu/svelte-ripple-action/commits"
			class="header--stat"
			target="_blank"
		>
			<img
				src="https://img.shields.io/github/commit-activity/t/posandu/svelte-ripple-action"
				alt=""
			/>
		</a>

		<a
			href="https://github.com/posandu/svelte-ripple-action/stargazers"
			class="header--stat"
			target="_blank"
		>
			<img
				alt="GitHub Repo stars"
				src="https://img.shields.io/github/stars/posandu/svelte-ripple-action"
			/>
		</a>
	</p>
</div>

<section class="section">
	<div class="section--left">
		<h1 class="section--heading">Installation</h1>

		<p class="section--desc">Install the package from npm</p>

		<CodeBlock code={`npm i svelte-ripple-action`} />
	</div>

	<div class="section--right">
		<h1 class="section--heading">Usage</h1>

		<p class="section--desc">
			Import the base styles inside the root of your app
		</p>

		<CodeBlock
			code={`${SCRIPT}\n	import "svelte-ripple-action/ripple.css"\n</script>`}
		/>

		<p class="section--desc">Use the directive in your components</p>

		<CodeBlock
			code={`${SCRIPT}\n	import { ripple } from "svelte-ripple-action";\n</script>\n\n<button use:ripple>Click me</button>`}
		/>

		<button
			use:ripple={{ color: "rgba(255,255,255,0.2)" }}
			class="btn btn-demo"
		>
			Click me
		</button>
	</div>
</section>

<section class="section">
	<div class="section--left">
		<h1 class="section--heading">Options</h1>

		<p class="section--desc">
			You can pass an object to the directive to customize the ripple effect
		</p>

		<div class="option">
			<div>
				<span class="option--name"
					>color?: <span class="option--type">string</span></span
				>
				<label class="option--desc" for="color">color of the ripple</label>
			</div>

			<input
				type="text"
				placeholder="rgba(255,255,255,0.2)"
				bind:value={customizeOptions.color}
				class="option--input"
				id="color"
			/>
		</div>

		<div class="option">
			<div>
				<span class="option--name"
					>duration?: <span class="option--type">number</span></span
				>
				<label class="option--desc" for="duration">
					duration of the ripple in seconds
				</label>
			</div>

			<input
				type="number"
				placeholder="0.6"
				bind:value={customizeOptions.duration}
				class="option--input"
				id="duration"
			/>
		</div>

		<div class="option">
			<div>
				<span class="option--name"
					>maxRadius?: <span class="option--type">number</span></span
				>
				<label class="option--desc" for="maxRadius">
					maximum radius of the ripple
				</label>
			</div>

			<input
				type="number"
				placeholder="leave -1 for auto"
				bind:value={customizeOptions.maxRadius}
				class="option--input"
				id="maxRadius"
			/>
		</div>

		<div
			class="option"
			style="display: flex;align-items: center;justify-content: space-between;"
		>
			<div>
				<span class="option--name"
					>center?: <span class="option--type">boolean</span></span
				>
				<label class="option--desc" for="center">
					whether to start the ripple from the center
				</label>
			</div>

			<input
				type="checkbox"
				bind:checked={customizeOptions.center}
				class="option--input"
				style="max-width: 48px;margin:0"
				id="center"
			/>
		</div>

		<div
			class="option"
			style="display: flex;align-items: center;justify-content: space-between;margin-bottom: 0; {customizeOptions.disabled
				? `background: #f70b0b0f;
				border-color: #ff00003b;`
				: ''}"
		>
			<div>
				<span class="option--name"
					>disabled?: <span class="option--type">boolean</span></span
				>
				<label class="option--desc" for="disabled">
					disable the ripple effect
				</label>
			</div>

			<input
				type="checkbox"
				bind:checked={customizeOptions.disabled}
				class="option--input"
				style="max-width: 48px;margin:0"
				id="disabled"
			/>
		</div>
	</div>

	<div class="section--right preview">
		<h1 class="section--heading">Preview</h1>

		<div class="preview--inside">
			<button
				use:ripple={{
					...customizeOptions,
					maxRadius:
						customizeOptions.maxRadius === -1
							? undefined
							: customizeOptions.maxRadius,
				}}
				class="btn btn-demo"
				style="margin-bottom: 10px"
			>
				:) Click me
			</button>
		</div>

		{#key customizeOptions}
			<CodeBlock
				code={`<button 
	use:ripple={{
		color: "${customizeOptions.color}",
		duration: ${customizeOptions.duration},
		${
			customizeOptions.maxRadius === -1
				? ""
				: `maxRadius: ${customizeOptions.maxRadius},`
		}
		center: ${customizeOptions.center},
		disabled: ${customizeOptions.disabled},
	}}
>
	Click me
</button>`}
			/>
		{/key}
	</div>
</section>

<section class="examples section">
	<h2 class="section--heading">Other examples</h2>

	<Examples />
</section>

<p class="footer">
	Created by <a href="https://posandu.com" target="_blank">@Posandu</a>.
	Licensed under MIT.
</p>

<style>
	.header {
		background: #d23604;
		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20px;
		min-height: 310px;
		line-height: 66px;
		user-select: none;
	}
	.header--logo {
		width: 100px;
		border-radius: 100px;
	}
	.header--heading {
		font-size: 33px;
		font-weight: 600;
		margin-top: 15px;
	}
	.header--desc {
		font-size: 17px;
		font-weight: 500;
		color: #fffffff7;
	}

	:global(.header .shiki) {
		border-radius: 20px;
		padding: 10px 20px;
		line-height: 25px;
		user-select: text;
	}

	.section {
		display: flex;
		padding: 10px;
		max-width: 1024px;
		margin: 20px auto;
		gap: 50px;
	}
	.section--left,
	.section--right {
		flex: 1;
	}
	.section--heading {
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 7px;
	}
	.section--desc {
		color: #2f2f2f;
		line-height: 40px;
		font-size: 15px;
	}
	:global(.section .shiki) {
		padding: 10px;
		border-radius: 10px;
	}

	.btn {
		padding: 10px 20px;
		border-radius: 4px;
		background: #fe3e00;
		color: white;
		font-size: 16px;
		font-weight: 600;
		box-shadow:
			rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
			rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
			rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
		transition: all 0.2s ease;
	}
	.btn-demo {
		margin-top: 20px;
	}
	.btn:hover {
		background: #ff5017;
		box-shadow:
			rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
			rgba(0, 0, 0, 0.14) 0px 4px 5px 0px,
			rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
	}

	.btn:active {
		box-shadow:
			rgba(0, 0, 0, 0.2) 0px 5px 5px -3px,
			rgba(0, 0, 0, 0.14) 0px 8px 10px 1px,
			rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
	}

	.option--name {
		font-weight: 600;
	}
	.option--desc {
		color: #737373;
		font-weight: 500;
	}
	.option--input {
		margin-top: 10px;
		width: 100%;
		background: #e8e8e8;
		border-radius: 10px;
		padding: 8px 10px;
		font-size: 14px;
		outline: none;
	}
	.option--input:hover {
		background: #d9d9d9;
	}
	.option--input:focus {
		background: #dbdbdb;
		box-shadow: 0 0 0 2px #fe3e0059;
	}
	.option {
		border: 1px solid #0000001a;
		border-radius: 11px;
		padding: 10px;
		margin: 4px -10px;
		margin-bottom: 8px;
	}

	.option--type {
		font-weight: 500;
		font-style: italic;
	}

	.section--right.preview {
		display: flex;
		flex-direction: column;
	}
	.preview--inside {
		flex: 1;
		align-items: center;
		justify-content: center;
		display: flex;
		background: #f9f9f9;
		border-radius: 10px;
	}

	.examples {
		display: block !important;
	}

	.footer {
		margin: 18px 0;
		text-align: center;
	}

	a {
		color: #fe3e00;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	a:active {
		color: #ff5017;
	}

	a:focus {
		box-shadow: 0 0 0 2px #fe3e0059;
	}

	@media (max-width: 768px) {
		.section {
			flex-direction: column;
		}
		.section--left,
		.section--right {
			flex: 1;
		}
		.section--right {
			margin-top: 20px;
		}
	}
</style>
