<script>
	import { ripple } from "$lib";
</script>

<div use:ripple class="box imgripple">Image ripple</div>
<div use:ripple class="box gradient">Gradient ripple</div>

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
</style>
