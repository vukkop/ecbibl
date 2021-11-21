<template>
  <v-app >
    <v-app-bar
      app
      color="primary"
      dark
    />
    <v-main class="app">
        <SideNav class="side-nav"/>
        <div class="main-view">
          <router-view/>
        </div>
        
    </v-main>
  </v-app>
</template>

<script>
import SideNav from './components/Navigations/SideNav.vue'

export default {
  name: 'App',
  components: {
    SideNav
  },  
  data: () => ({
    //
  }),
};
</script>

<style>
/* * {
  outline: 1px dashed green
} */
.app {
  outline: 2px solid blue;
}
.side-nav, .main-view {
  display: inline-block;
  vertical-align: top;
}
  .side-nav {
    height: 100vh;
  }
  .main-view {
    width:calc(100% - 220px);
    min-height: calc(100vh - 64px);
    outline: 1px solid red;
  }
</style>
