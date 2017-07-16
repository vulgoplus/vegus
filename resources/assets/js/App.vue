<template>
	<div class="container">
		<md-sidenav class="main-sidebar md-left md-fixed sidebar" md-swipeable>
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

			<md-list>
				<md-list-item>
					<md-icon>send</md-icon> <span>Sent Mail</span>

					<md-list-expand>
						<md-list>
							<md-list-item class="md-inset">
								<router-link exact to="/themes/configuration">Configuration</router-link>
							</md-list-item>

							<md-list-item class="md-inset">
								<router-link exact to="/themes/dynamic-themes">Dynamic Theme</router-link>
							</md-list-item>
						</md-list>
					</md-list-expand>
				</md-list-item>

				<md-list-item>
					<md-icon>send</md-icon> <span>Sent Mail</span>
				</md-list-item>

				<md-list-item>
					<md-icon>delete</md-icon> <span>Trash</span>
				</md-list-item>

				<md-list-item>
					<md-icon>error</md-icon> <span>Spam</span>

					<md-divider class="md-inset"></md-divider>
				</md-list-item>
			</md-list>
		</md-sidenav>
		<page-content page-title="ahhi">
			<whiteframe>1</whiteframe>
		</page-content>
	</div>
</template>

<style lang="scss">
	.container{
		padding-left: 304px;
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