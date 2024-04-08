<template>
  <v-card class="rounded-lg">
    <v-card-title class="bg-grey-darken-2"> Recursos </v-card-title>
    <v-divider></v-divider>
    <v-list v-model:opened="open">
      <v-list-group v-for="(item, i) in features" :key="i">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" :title="item.title"> </v-list-item>
        </template>
        <v-card-text class="text-caption"> {{ item.text }} </v-card-text>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => {
    return {
      features: [
        { title: "Cadastro de usuário", text: "Cadastro de usuário" },
        {
          title: "Confirmação em dois fatores",
          text: "Envio de e-mail para confirmação em dois fatores",
        },
        { title: "Login", text: "Login" },
        {
          title: "Token JWT",
          text: "Verifica se token JWT tem permissão de acesso para outras páginas",
        },
      ],
      open: [],
    };
  },
};
</script>

<style>
</style>