<template>
  <div class="input-block">
    <input
      type="text"
      v-model.trim="value"
      @keyup.enter="getValue"
      placeholder="Cerca..."
    />
    <button @click="getValue">CERCA</button>
  </div>
</template>

<script>
export default {
  name: "Search",
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

<style scoped lang="scss">
input {
  height: 40px;
  padding: 10px;
  cursor: pointer;
}

button {
  height: 40px;
  border: 1px black;
  background-color: rgb(199, 5, 5);
  color: white;
  margin-left: 10px;
}
</style>