<template>
  <div>
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
        type="password"
        class="mx-5"
        label="Senha"
        v-model="form.password"
      ></v-text-field>
      <v-card-actions class="d-flex justify-center mb-5">
        <v-btn variant="outlined" @click="signin()">Entrar</v-btn>
        <v-btn variant="outlined" to="/register">Cadastrar</v-btn>
      </v-card-actions>
      <a href="" class="text-caption mx-5">Esqueceu sua senha?</a>
    </v-card>
    <v-dialog v-model="errorLogin" width="500px">
      <v-card class="d-flex justify-center">
        <v-card-title class="d-flex justify-center">Erro</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="d-flex justify-center"
          >Usuário não encontrado</v-card-text
        >
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      form: {
        email: null,
        password: null,
      },
      errorLogin: false,
    };
  },
  methods: {
    async signin() {
      const auth = await this.$store.auth.signin(this.form);

      if (auth.token) {
        const router = useRouter();
        return router.push("/home");
      } else {
        return (this.errorLogin = true);
      }
    },
  },
};
</script>

<style>
.img-flag {
  border-radius: 50%;
}
</style>