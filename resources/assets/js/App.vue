<template>
	<div class="container">
		<md-sidenav class="main-sidebar md-left md-fixed sidebar" ref="main-sidebar" md-swipeable>
			<avatar :image="'/img/placeholder.png'"></avatar>
			<md-input-container  class="shorter">
				<label for="user">User</label>
				<md-select name="user" id="user">
					<md-subheader>User</md-subheader>
					<md-option value="info">Infomations</md-option>
					<md-option value="change">Change Password</md-option>
					<md-option value="logout">Log out</md-option>
				</md-select>
			</md-input-container>
			<md-divider></md-divider>

			<navigator></navigator>

		</md-sidenav>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
	import Navigator from './components/system/Navigator.vue'
	export default{
		components: {
			Navigator
		},
		methods: {
			toggleSidenav() {
		        this.$refs['main-sidebar'].toggle();
		    },
		}
	}
</script>
<style lang="scss">
	.container{
		@media(min-width: 992px) {
			padding-left: 304px;
		}
	}
	.shorter{
		width: 200px;
		margin: 0 auto 30px auto;
	}
	.sidebar{
		.md-input-container:after{
			height: 0;
		}
	}
</style>
