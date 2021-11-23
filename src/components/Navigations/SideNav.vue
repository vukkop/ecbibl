<template>
  <v-card
    height="calc(100vh - 64px)"
    width="220"
    class="mx-auto"
  >
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router :to="item.route"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>


<script>
  export default {
    name: 'SideNav',
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/' },
          { title: 'Library', icon: 'mdi-book-multiple', route: '/booklist' },
          { title: 'Users', icon: 'mdi-account-multiple', route: '/users' },
        ],
        right: null,
      }
    },
  }
</script>

<style scoped>

</style>