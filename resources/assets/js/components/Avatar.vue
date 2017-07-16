<template>
	<div class="avatar">
		<div>
			<img :src="image">
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		props: {
			image: {
				type: String,
				required: true
			}
		}
	}
</script>

<style lang="scss">
	.avatar{
		padding: 30px;
		& > div {
			text-align: center;
			width: 150px !important;
			height: 150px !important;
			margin: auto;
			img{
				width: 100% !important;
				height: 100% !important;
				border-radius: 50%;
			}
			&:before{
				content: '';
				width: inherit;
				height: inherit;
				background: rgba(255,0,0,0);
				position: absolute;
				transition: 0.5s all ease;
				transform: scale(1);
				border-radius: 50%;
				opacity: 0;
				z-index: -1;
			}
			&:hover:before{
				transform: scale(1.2);
				background: rgba(255,0,0,0.4);
				opacity: 0.4;
			}
		}		
	}
</style>