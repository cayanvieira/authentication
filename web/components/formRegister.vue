<template>
  <div>
    <v-card :min-width="500" class="pa-5">
      <v-img
        class="mx-auto img-flag mb-3"
        :width="150"
        src="/img/logoIcon.png"
      ></v-img>
      <v-text-field
        label="Nome*"
        variant="outlined"
        v-model="form.name"
        required
      ></v-text-field>
      <v-text-field
        label="E-mail*"
        variant="outlined"
        v-model="form.email"
      ></v-text-field>
      <v-text-field
        label="Senha*"
        variant="outlined"
        v-model="form.password"
      ></v-text-field>
      <v-text-field
        label="Confirmar senha*"
        variant="outlined"
        v-model="checkPassword"
      ></v-text-field>
      <v-card-actions class="d-flex justify-center">
        <v-btn variant="outlined" @click="signup()"> Cadastrar </v-btn>
        <v-btn variant="outlined" to="/"> Voltar </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="alertDialog" class="d-flex justify-center" width="25vw">
      <v-card width="25vw" class="d-flex justify-center">
        <v-card-title class="d-flex justify-center">{{
          messageDialog
        }}</v-card-title>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      form: {
        name: "",
        email: "",
        password: null,
      },
      checkPassword: null,
      alertDialog: false,
    };
  },
  methods: {
    async signup() {
      if (this.form.name.trim() === "") {
        this.messageDialog = "Campo nome obrigatório";
        return (this.alertDialog = true);
      }
      if (this.form.email.trim() === "") {
        this.messageDialog = "Campo e-mail obrigatório";
        return (this.alertDialog = true);
      }
      if (
        this.checkPassword != this.form.password ||
        !this.checkPassword ||
        !this.form.password
      ) {
        this.messageDialog =
          "As senhas digitadas são diferentes ou estão vazios";
        return (this.alertDialog = true);
      }

      return await this.$store.user.signup(this.form);
    },
  },
};
</script>

<style>
.img-flag {
  border-radius: 50%;
}
</style>