<template>
  <v-card class="rounded-lg" :max-width="500">
    <v-card-title class="bg-grey-darken-2"> Ferramentas </v-card-title>
    <v-divider></v-divider>
    <v-chip
      v-for="(item, i) in tools"
      :key="i"
      size="large"
      class="mx-2 my-2 text-white"
      :color="item.color"
      variant="flat"
    >
      {{ item.text }}
    </v-chip>
  </v-card>
</template>

<script>
export default {
  data: () => {
    return {
      tools: [
        { text: "Axios", color: "#AA00FF" },
        { text: "Docker", color: "orange-darken-4" },
        { text: "Docker compose", color: "lime-accent-4" },
        { text: "Fastify", color: "blue-grey-darken-2" },
        { text: "Javascript", color: "blue-accent-3" },
        { text: "JWT", color: "teal-lighten-1" },
        { text: "Knex", color: "lime-darken-3" },
        { text: "Node", color: "red-darken-1" },
        { text: "Nodemailer", color: "brown-darken-3" },
        { text: "Pinea", color: "#EC407A" },
        { text: "Postgres", color: "#BA68C8" },
        { text: "Nuxt 3", color: "#4A148C" },
        { text: "Redis", color: "blue-grey-darken-3" },
        { text: "Vue 3", color: "#EC407A" },
        { text: "Vuetify 3", color: "#AA00FF" },
      ],
    };
  },
};
</script>

<style>
</style>