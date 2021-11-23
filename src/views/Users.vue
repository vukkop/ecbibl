<template>
  
  <v-card>
    <div id="modal">  
      <v-icon large  id="exit" @click="closeModal">mdi-window-close</v-icon>
      <div id="modal-inner"></div>
    </div>
      <h1>Users</h1>
      <v-card-title>
        User List
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table class="row-pointer"
        @click:row="handleRowClick"
        :headers="headers"
        :items="users"
        :search="search"
        
      ></v-data-table>
    </v-card>
</template>
<script>



export default {
  methods: {
      handleRowClick(item) {
        let e = document.getElementById('modal-inner');
        let m = document.getElementById('modal');
        m.style.display = "block";
        console.log(item);
        e.innerHTML = item.name;
      },
      closeModal() {
      let m = document.getElementById('modal');
        m.style.display = "none";
    }
    },
    data: function() {
      return {
        search: '',
        headers: [
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Member ID', value: 'id' },
          { text: 'Course', value: 'course' },
          { text: 'Student ID', value: 'studentId' },
          { text: 'Email', value: 'email' },
          { text: 'Phone', value: 'phone' },
          { text: 'Admission Year', value: 'admissionYear' },
          { text: 'Address', value: 'address' },
        ],
        users: [
          {
            name: 'Petar Petrovic',
            id: 1,
            course: 'IT',
            studentId: 'IT032',
            email: 'petar@gmail.com',
            phone: '0635544332',
            admissionYear: '2019',
            address: 'Radnicka 20',
          },
            {
            name: 'Petar Petrovic',
            id: 2,
            course: 'IT',
            studentId: 'IT032',
            email: 'petar@gmail.com',
            phone: '0635544332',
            admissionYear: '2019',
            address: 'Radnicka 20',
          },
          {
            name: 'Petar Petrovic',
            id: 3,
            course: 'IT',
            studentId: 'IT032',
            email: 'petar@gmail.com',
            phone: '0635544332',
            admissionYear: '2019',
            address: 'Radnicka 20',
          },
          {
            name: 'Petar Petrovic',
            id: 4,
            course: 'IT',
            studentId: 'IT032',
            email: 'petar@gmail.com',
            phone: '0635544332',
            admissionYear: '2019',
            address: 'Radnicka 20',
          },
          {
            name: 'Petar Petrovic',
            id: '5',
            course: 'IT',
            studentId: 'IT032',
            email: 'petar@gmail.com',
            phone: '0635544332',
            admissionYear: '2019',
            address: 'Radnicka 20',
          },
          {
            name: 'Petar Petrovic',
            id: '6',
            course: 'IT',
            studentId: 'IT032',
            email: 'petar@gmail.com',
            phone: '0635544332',
            admissionYear: '2019',
            address: 'Radnicka 20',
          },
          {
            name: 'Petar Petrovic',
            id: '7',
            course: 'IT',
            studentId: 'IT032',
            email: 'petar@gmail.com',
            phone: '0635544332',
            admissionYear: '2019',
            address: 'Radnicka 20',
          },
          {
            name: 'Petar Petrovic',
            id: '8',
            course: 'IT',
            studentId: 'IT032',
            email: 'petar@gmail.com',
            phone: '0635544332',
            admissionYear: '2019',
            address: 'Radnicka 20',
          },
          {
            name: 'Petar Petrovic',
            id: '9',
            course: 'IT',
            studentId: 'IT032',
            email: 'petar@gmail.com',
            phone: '0635544332',
            admissionYear: '2019',
            address: 'Radnicka 20',
          },
          {
            name: 'Petar Petrovic',
            id: '10',
            course: 'IT',
            studentId: 'IT032',
            email: 'petar@gmail.com',
            phone: '0635544332',
            admissionYear: '2019',
            address: 'Radnicka 20',
          },
          {
            name: 'Petar Petrovic',
            id: '11',
            course: 'IT',
            studentId: 'IT032',
            email: 'petar@gmail.com',
            phone: '0635544332',
            admissionYear: '2019',
            address: 'Radnicka 20',
          },
          {
            name: 'Petar Petrovic',
            id: '12',
            course: 'IT',
            studentId: 'IT032',
            email: 'petar@gmail.com',
            phone: '0635544332',
            admissionYear: '2019',
            address: 'Radnicka 20',
          },
          {
            name: 'Petar Petrovic',
            id: '13',
            course: 'IT',
            studentId: 'IT032',
            email: 'petar@gmail.com',
            phone: '0635544332',
            admissionYear: '2019',
            address: 'Radnicka 20',
          },
          {
            name: 'Petar Petrovic',
            id: '14',
            course: 'IT',
            studentId: 'IT032',
            email: 'petar@gmail.com',
            phone: '0635544332',
            admissionYear: '2019',
            address: 'Radnicka 20',
          },
        ],
      }
    }
}
</script>

<style scoped>
#modal {
  display: none;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute !important;
  z-index: 3;
  margin-top: 64px;
}
#modal-inner {
  width: 80%;
  margin: auto;
  background-color: white;
  height: 80vh;
  margin-top: 10vh;
}
#exit {
    position: absolute;
    top: 20px;
    right: 40px;
    cursor: pointer;
    color: white;
}
.row-pointer >>> tbody tr :hover {
  cursor: pointer;
}

</style>