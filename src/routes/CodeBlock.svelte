<script lang="ts">
	import { codeToHtml } from "shiki";

	interface Props {
		code: string;
	}

	let { code }: Props = $props();

	const html = codeToHtml(code, {
		lang: "svelte",
		theme: "vitesse-dark",
	});
</script>

{#await html}
	<pre class="shiki" style="background-color: #121212;"><code>{code}</code
		></pre>
{:then html}
	{@html html}
{/await}
