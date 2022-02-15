<template>
  <div>
    <Header @getEmitValue="getModelValue" />
    <main class="text-center text-white">
      <div class="container">
        <h2 id="loader-title" v-if="tvList.length === 0">
          CERCA UN FILM O UNA SERIE TV
        </h2>
        <Film :List="filmList" compTitle="FILM" v-if="filmList.length > 0" />
        <Film :List="tvList" compTitle="SERIE TV" v-if="tvList.length > 0" />
      </div>
    </main>
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
      if (!value) {
        this.tvList = [];
        this.filmList = [];
        return;
      }
      this.getTvUrl(value);
      this.getFilmUrl(value);
    },
  },
};
</script>


<style lang="scss">
@import "./sass/style.scss";
main {
  background-color: rgb(26, 25, 25);
  height: calc(100vh - 70px);
  overflow-y: auto;
}

#loader-title {
  margin-top: 200px;
}
</style>
