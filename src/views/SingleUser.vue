<template>
  
  <v-container>


    <v-row>
      <v-col
        cols="12"
        md="10"
      >
       <v-skeleton-loader
          v-bind="attrs"
          type="list-item-avatar-three-line, image, article"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {        
    name: 'SinngleUser',
    data: () => ({
      attrs: {
        class: 'mb-6',
        boilerplate: true,
        elevation: 2,
      },
    }),
    props:{
      items: Array
    },
    computed: {
      user: function() {
        for (let i = 0; i < this.items.length; i++) {
         if (this.items[i].id == this.$route.params.id) {
           return this.items[i];
         }
        }
        return false; 
      }
    }
}

</script>

<style>

</style>