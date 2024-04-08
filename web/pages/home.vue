<template>
  <div class="d-flex justify-center align-center" style="height: 100vh">
    <div>
      <v-col>
        <v-row class="d-flex justify-center">
          <v-btn @click="privateURL()" color="green"
            >Verificar Autenticação
          </v-btn>
        </v-row>
        <v-row class="mt-10 justify-center">
          <v-card width="500px" v-if="userData?.name === 'FastifyError'">
            <v-card-title class="justify-center text-center">
              {{ userData?.name }}
            </v-card-title>
          </v-card>
          <v-card width="500px" class="ma-auto" v-else>
            <v-card-title> Nome: {{ userData?.name }} </v-card-title>
            <v-card-title> E-mail: {{ userData?.email }} </v-card-title>
          </v-card>
        </v-row>
        <v-row class="d-flex justify-center mt-10">
          <v-btn @click="changeToken(token)" color="red">Alterar token </v-btn>
        </v-row>
      </v-col>
    </div>
  </div>
</template>

<script>
import { useCookie } from "#app/composables/cookie";
export default {
  data: () => {
    return {
      userData: null,
      token: null,
      trys: 0,
      tokenStore: null,
    };
  },
  created() {
    this.tokenStore = this.$store.auth.userToken.toString();
  },
  methods: {
    async privateURL() {
      return (this.userData = await this.$store.auth.private());
    },
    changeToken() {
      const cookie = useCookie("userToken");
      cookie.value = "";
      cookie.value = this.$store.auth.userToken =
        this.$store.auth.userToken + "54645646513213";
    },
  },
};
</script>

<style>
</style>