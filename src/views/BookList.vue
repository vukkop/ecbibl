<template>
<div>
       <h1>Book List</h1>
    <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</div>
 
    
</template>

<script>
export default {
    name: 'BookList'
}
</script>

<style>

</style>