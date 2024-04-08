<template>
  <v-layout ref="app" class="rounded rounded-md">
    <v-navigation-drawer
      color="grey-darken-2"
      permanent
      name="drawer"
      :width="500"
    >
      <div class="d-flex align-top justify-center mt-16">
        <LoginCard />
      </div>
    </v-navigation-drawer>

    <v-main class="d-flex align-top justify-center" style="height: 100vh">
      <v-col>
        <v-row class="d-flex justify-center">
          <div>
            <TopicsList class="mt-16" :width="500" />
          </div>
        </v-row>
        <v-row class="mt-16 d-flex justify-center">
          <div class="mt-5 mx-10">
            <Tools class="mb-5" :width="500" />
          </div>
        </v-row>
      </v-col>
    </v-main>
  </v-layout>
</template>

<script >
import LoginCard from "../components/loginCard.vue";
import Tools from "../components/tools.vue";
import TopicsList from "../components/topicsList.vue";

export default {
  components: {
    LoginCard,
    TopicsList,
    Tools,
  },
  data: () => {
    return { result: {} };
  },
  methods: {
    async privateURL() {
      return this.$store.auth.private();
    },
  },
};
</script>

<style>
</style>