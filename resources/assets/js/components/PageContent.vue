<template>
    <div class="page-content">
        <md-whiteframe md-tag="md-toolbar" md-elevation="1">
            <md-button class="md-icon-button nav-trigger" @click="toggleSidenav">
                <md-icon>menu</md-icon>
            </md-button>
            <div class="md-title">{{ pageTitle }}</div>
        </md-whiteframe>

        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.page-content {
    min-height: 100%;
    max-height: 100%;
    flex: 1;
    display: flex;
    flex-flow: column
}
.main-header {
    z-index: 2;
    color: #fff !important;
}
.nav-trigger {
    @media (min-width: 1281px) {
      display: none;
  }
}
.md-title {
    flex: 1;
    text-transform: capitalize;
    @media (min-width: 1281px) {
      margin-left: 8px;
  }
}
</style>

<script>
  export default {
    props: {
      pageTitle: String
    },
    methods: {
        toggleSidenav() {
            this.$root.$children[0].toggleSidenav()
        }
    },
    mounted() {
        document.title = this.pageTitle + ' - Vue Material';
    }
};
</script>
