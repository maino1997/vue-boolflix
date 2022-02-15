<template>
  <header>
    <input type="text" v-model.trim="value" @keyup.enter="getValue" />
    <button @click="getValue">CERCA</button>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    getValue() {
      this.$emit("getEmitValue", this.value);
    },
  },
};
</script>

<style>
</style>