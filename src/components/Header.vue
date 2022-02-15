<template>
  <header>
    <div class="container">
      <img
        src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
        alt="logo-netflix"
      />
      <div class="input-block">
        <input
          type="text"
          v-model.trim="value"
          @keyup.enter="getValue"
          placeholder="Cerca..."
        />
        <button @click="getValue">CERCA</button>
      </div>
    </div>
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

<style scoped lang="scss">
header {
  background-color: black;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
img {
  width: 200px;
  height: 70px;
}

input {
  height: 40px;
  padding: 10px;
}

button {
  height: 40px;
  border: 1px black;
  background-color: rgb(199, 5, 5);
  color: white;
  margin-left: 10px;
}
</style>