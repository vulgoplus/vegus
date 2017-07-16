<template>
    <div class="page-content">
        <md-whiteframe md-tag="md-toolbar" md-elevation="1" class="main-header">
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
    @media (min-width: 1281px) {
      margin-left: 8px;
  }
}
.github {
    @media (max-width: 480px) {
      display: none;
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
            this.$root.toggleSidenav();
        }
    },
    mounted() {
        document.title = this.pageTitle + ' - Vue Material';
    }
};
</script>