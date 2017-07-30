<template lang="html">
    <md-list>
        <!-- <md-list-item>
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
        </md-list-item> -->
        <md-list-item>
            <router-link exact to="/">
                <md-icon>dashboard</md-icon> <span>Dashboard</span>
            </router-link>
        </md-list-item>
        <md-list-item>
            <router-link exact to="/categories">
                <md-icon>widgets</md-icon> <span>Categories</span>
            </router-link>
        </md-list-item>
<!--
        <md-list-item>
            <md-icon>delete</md-icon> <span>Trash</span>
        </md-list-item>

        <md-list-item>
            <md-icon>error</md-icon> <span>Spam</span>

            <md-divider class="md-inset"></md-divider>
        </md-list-item> -->
    </md-list>
</template>

<script>
export default {
    name: 'navigator'
}
</script>
