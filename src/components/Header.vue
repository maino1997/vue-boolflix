<template>
  <header>
    <input type="text" v-model="value" />
    <button @keyup.enter="getValue">CERCA</button>
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