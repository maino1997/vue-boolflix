<template>
  <div>
    <Header @getEmitValue="getModelValue" />

    <Main :filmList="filmList" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
    Main,
  },
  data() {
    return {
      filmList: [],
      searchValue: "",
    };
  },

  methods: {
    getUrl(string) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=${string}`
        )
        .then((res) => {
          this.filmList = res.data.results;
        });
    },
    getModelValue(value) {
      this.searchValue = value;
      this.getUrl(this.searchValue);
    },
  },
};
</script>


<style lang="scss">
</style>
