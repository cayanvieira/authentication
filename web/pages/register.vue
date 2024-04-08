<template>
  <v-layout ref="app" class="rounded rounded-md d-flex justify-center">
    <v-main
      class="d-flex align-top justify-center"
      style="height: 100vh; max-width: 1920px"
    >
      <div class="mt-10">
        <FormRegister />
      </div>
    </v-main>
  </v-layout>
</template>

<script>
import FormRegister from "../components/formRegister.vue";
export default {
  components: { FormRegister },
  data: () => {
    return {};
  },
};
</script>

<style>
.img-flag {
  border-radius: 50%;
}
</style>