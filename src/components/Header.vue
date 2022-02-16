<template>
  <header>
    <div class="container">
      <img
        src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
        alt="logo-netflix"
      />
      <div class="search-block">
        <select v-model="genreValue" @change="getSelectValue">
          <option value="">FILTRA PER GENERE</option>
          <option
            v-for="(genre, index) in genreList"
            :key="index"
            :value="genre.id"
          >
            {{ genre.name }}
          </option>
        </select>
        <Search @getEmitValue="getValue" />
      </div>
    </div>
  </header>
</template>

<script>
import Search from "./Search.vue";
export default {
  name: "Header",
  components: {
    Search,
  },
  props: ["genreList"],
  data() {
    return {
      genreValue: "",
    };
  },
  methods: {
    getValue(value) {
      this.$emit("getEmitValue", value);
    },
    getSelectValue() {
      this.$emit("getSelectValue", this.genreValue);
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
  height: 90px;
}

.search-block {
  display: flex;
  select {
    border-radius: 5px;
    padding: 7px;
    cursor: pointer;
    margin-right: 15px;
  }
}
</style>