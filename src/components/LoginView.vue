<template>
  <div class="form-detail">
    <div>
      <h1>Already have an account? Login!</h1>
      <br />
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
        <h1>Do not have an account? Register!</h1>
        <br />
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
            alert("Wrong credentials");
          }
        } else {
          alert("Invalid username");
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
  box-sizing: border-box;
  width: 100%;
  border-radius: 10px;
  border-color: grey;
  border-style: double;
  padding: 10px 20px;
  font-size: 15px;
}

.form-detail {
  text-align: left;
  padding: 16px 24px 16px;
}

h1 {
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  margin-bottom: 2em;
  margin-top: 2em;
  width: 99%;
  border-radius: 10px;
  font-weight: bold;
  border-style: solid;
  border-color: #5ab5f2;
  background-color: lightgray;
  box-shadow: 0 0.3rem 13px rgb(0 0 0 / 10%);
}
</style>