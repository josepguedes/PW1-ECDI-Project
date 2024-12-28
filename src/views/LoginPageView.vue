<template>
</template>

<script>
import { useUserStore } from "@/stores/user";
export default {
  data() {
    return {
      store: useUserStore(),
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      try {
        this.store.login(this.email, this.password)
        this.$router.push({ name: "AccountDashboardPage" });
      } catch (error) {
         alert(`Error: ${error.message}`); 
      }
    },
  },
};
</script>


<style scoped>
</style>
