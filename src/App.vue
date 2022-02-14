<template>
  <div>
    <Header @getEmitValue="getModelValue" />

    <Film :List="filmList" compTitle="FILM" />
    <Film :List="tvList" compTitle="SERIE TV" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Film from "./components/Film.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,

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
