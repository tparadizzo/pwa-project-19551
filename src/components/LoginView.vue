<template>
  <div>
    <div>
      <h2>Already have an account? Login!</h2>
    </div>
    <div>
      <!-- Login form -->
      <form @submit.prevent="doLogin">
        <input type="text" placeholder="Username" v-model="login.username" />
        <br />
        <input
          type="password"
          placeholder="Password"
          v-model="login.password"
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>

    <div>
      <div>
        <h2>Do not have an account? Register!</h2>
      </div>
      <!-- register form -->
      <form @submit.prevent="doRegister">
        <input type="text" placeholder="Username" v-model="register.username" />
        <br />
        <input
          type="text"
          placeholder="First Name"
          v-model="register.firstname"
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          v-model="register.lastname"
        />
        <br />
        <input type="text" placeholder="Email" v-model="register.email" />
        <br />
        <input
          type="password"
          placeholder="Password"
          v-model="register.password"
        />
        <br />
        <button>Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        username: "",
        password: "",
      },

      register: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    doLogin() {
      if (this.login.username !== "" && this.login.password !== "") {
        if (this.login.username === "tabita") {
          if (this.login.password === "password") {
            this.$emit("logged", {
              username: this.login.username,
              firstname: "Tabita",
              lastname: "Paradizzo",
              email: "tabitalp@gmail.com",
            });
          } else {
            alert("We can't log you in with this credentials");
          }
        } else {
          alert("This is an invalid username");
        }
      } else {
        alert("User name and password must be set");
      }
    },

    doRegister() {
      const user = { ...this.register };
      localStorage.setItem("userAccount", JSON.stringify(user));
      this.$emit("logged", user);
    },
  },
};
</script>

<style scoped>
input {
  margin: 5px 0;
  padding: 15px;
  width: 90%;
  border-radius: 10px;
  border-color: grey;
  border-style: double;
}

h2 {
}

button {
}
</style>