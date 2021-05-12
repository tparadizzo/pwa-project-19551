<template>
  <div class="user-info">
    <div>
      <h1>Hello, {{ account.firstname }}!!</h1>
      <br />
    </div>
    <form @submit.prevent="updateAccount">
      <div>
        <label>Username: </label> <br />
        <input type="text" v-model="account.username" />
      </div>
      <br />
      <div>
        <label>First Name: </label> <br />
        <input type="text" v-model="account.firstname" />
      </div>
      <br />
      <div>
        <label>Last Name: </label> <br />
        <input type="text" v-model="account.lastname" />
      </div>
      <br />
      <div>
        <label>Email: </label> <br />
        <input type="text" v-model="account.email" />
      </div>
      <br />
      <div>
        <label>Password: </label><br />
        <input type="password" v-model="account.password" />
      </div>
      <br />
      <button id="update-btn">Update</button>
      <button id="logout-btn" @click="logout">Logout</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    account: {
      type: Object,
    },
  },

  methods: {
    logout() {
      this.$emit("logout");
    },

    updateAccount() {
      const user = { ...this.account }; //clone Object to don't change the properties of the original
      localStorage.setItem("userAccount", JSON.stringify(user));
    },
  },
};
</script>

<style scoped>
.user-info {
  text-align: left;
  padding: 16px 24px 16px;
}

label {
  font-size: 15px;
  padding: 5px;
}

h1 {
  border-radius: 4px;
}

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

button {
  padding: 10px 20px;
  margin-bottom: 1em;
  width: 99%;
  border-radius: 10px;
  font-weight: bold;
  border-style: solid;
  box-shadow: 0 0.3rem 13px rgb(0 0 0 / 10%);
}

#update-btn {
  border-color: #5ab5f2;
  background-color: lightgray;
}

#logout-btn {
  background-color: #f2625d;
  border: none;
  margin-top: 2em;
}
</style>