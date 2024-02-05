<template>
  <v-card :min-width="500" class="pa-5">
    <v-img
      class="mx-auto img-flag mb-3"
      :width="150"
      src="/img/logoIcon.png"
    ></v-img>
    <v-text-field
      label="Nome"
      variant="outlined"
      v-model="form.name"
    ></v-text-field>
    <v-text-field
      label="E-mail"
      variant="outlined"
      v-model="form.email"
    ></v-text-field>
    <v-text-field
      label="Senha"
      variant="outlined"
      v-model="form.password"
    ></v-text-field>
    <v-text-field
      label="Confirmar senha"
      variant="outlined"
      v-model="checkPassword"
    ></v-text-field>
    <v-card-actions class="d-flex justify-center">
      <v-btn variant="outlined"> Cadastrar </v-btn>
      <v-btn variant="outlined" to="/"> Voltar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => {
    return {
      form: {
        name: null,
        email: null,
        password: null,
      },
      checkPassword: null,
    };
  },
};
</script>

<style>
.img-flag {
  border-radius: 50%;
}
</style>