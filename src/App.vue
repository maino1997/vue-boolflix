<template>
  <div>
    <Header @getEmitValue="getModelValue" />

    <Tv :List="tvList" />
    <Film :List="filmList" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Tv from "./components/Tv.vue";
import Film from "./components/Film.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
    Tv,
    Film,
  },
  data() {
    return {
      tvList: [],
      filmList: [],
      searchValue: "",
    };
  },

  methods: {
    getTvUrl(string) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=${string}`
        )
        .then((res) => {
          this.tvList = res.data.results;
        });
    },

    getFilmUrl(string) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=${string}`
        )
        .then((res) => {
          this.filmList = res.data.results;
        });
    },

    getModelValue(value) {
      this.searchValue = value;
      this.getTvUrl(value);
      this.getFilmUrl(value);
    },
  },
};
</script>


<style lang="scss">
</style>
