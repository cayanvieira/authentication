<template>
  <div class="d-flex justify-center pt-10">
    <v-card :width="450" class="pa-5 rounded-lg">
      <v-img
        class="mx-auto img-flag"
        :width="150"
        src="/img/logoIcon.png"
      ></v-img>

      <v-text-field
        variant="outlined"
        class="ma-5"
        label="E-mail"
        v-model="form.email"
      ></v-text-field>
      <v-text-field
        variant="outlined"
        class="mx-5"
        label="Código"
        v-model="form.code"
      ></v-text-field>
      <v-card-actions class="d-flex justify-center mb-5">
        <v-btn variant="outlined" @click="verify()">Confirmar</v-btn>
        <v-btn variant="outlined" disabled>Reenviar Código</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      form: {
        email: null,
        code: null,
      },
    };
  },
  methods: {
    verify() {
      return this.$store.user.verify(this.form);
    },
  },
};
</script>

<style>
</style>