const SCRIPT = `script>`;
const CODE = `<${SCRIPT}
	import { ripple } from "svelte-ripple-action";
</${SCRIPT}

<div use:ripple class="box imgripple">Image ripple</div>
<div use:ripple class="box gradient">Gradient ripple</div>

<br />
<br />

<p>Needs to be wrapped in a div for void elements like img, input, etc.</p>

<div use:ripple class="imgbox">
	<img
		src="...."
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
		user-select: none;
	}

	.imgbox {
		height: 200px;
		width: 200px;
		border-radius: 5px;
		margin-top: 20px;
		margin-right: 20px;
		display: inline-flex;
	}

	.imgbox img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	:global(.imgripple .ripple) {
		background: url(.....);
		background-size: 80%;
		background-position: center;
		background-repeat: no-repeat;
		z-index: -1;
	}

	:global(.gradient .ripple) {
		background: linear-gradient(
			45deg, 
			#f3ed783d, 
			#af4261
		);
	}
</style>
`;

export { CODE };
