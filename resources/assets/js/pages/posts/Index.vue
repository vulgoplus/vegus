<template lang="html">
    <page-content page-title="Categories">
        <div class="pull-right">
            <router-link tag="md-button" to="/categories/add" class="md-button md-accent md-raised">
                <md-icon>add</md-icon> New post
            </router-link>
        </div>
    </page-content>
</template>

<script>
export default {
}
</script>

<style lang="css">
    .pull-right{
        clear: both;
        button{
            float: right;
        }
    }
</style>
