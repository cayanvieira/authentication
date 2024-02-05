<template>
  <v-card :width="450" class="pa-5 rounded-lg">
    <v-img
      class="mx-auto img-flag"
      :width="150"
      src="/img/logoIcon.png"
    ></v-img>

    <v-text-field variant="outlined" class="ma-5" label="E-mail"></v-text-field>
    <v-text-field variant="outlined" class="mx-5" label="Senha"></v-text-field>
    <v-card-actions class="d-flex justify-center mb-5">
      <v-btn variant="outlined">Entrar</v-btn>
      <v-btn variant="outlined" to="/register">Cadastrar</v-btn>
    </v-card-actions>
    <a href="" class="text-caption mx-5">Esqueceu sua senha?</a>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
.img-flag {
  border-radius: 50%;
}
</style>