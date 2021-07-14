<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        text
        @click="openAdd"
      >
        <span class="mr-2">add</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn
        text
        @click="openCollection"
      >
        <span class="mr-2">open Collection</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn
        text
        @click="clearCollection"
      >
        <span class="mr-2">clear Collection</span>
        <v-icon>mdi-autorenew</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Calculator ref="calculator"/>
    </v-main>
  </v-app>
</template>

<script>
import Calculator from './components/Calculator';

export default {
  name: 'App',

  components: {
    Calculator,
  },

  data: () => ({
    //
  }),
  methods: {
    clearCollection: function() {
         console.log("clear")
         let list = [];
         localStorage.list = JSON.stringify(list); 
         this.$refs.calculator.collection = [];
      },
    openAdd: function() {
      this.$refs.calculator.mode = "add"
    },
    openCollection: function() {
      this.$refs.calculator.viewCollection();
    }
  }
};
</script>
