<template>
  <div>
    <Header
      @getEmitValue="getModelValue"
      :genreList="genreList"
      @getSelectValue="getSelectValue"
    />
    <main class="text-center text-white">
      <div class="container">
        <h2 id="loader-title" v-if="tvList.length === 0">
          CERCA UN FILM O UNA SERIE TV
        </h2>
        <Film
          :List="filmList"
          compTitle="FILM"
          v-if="filmList.length"
          @getId="getId"
          :selectValue="selectValue"
        />
        <Film
          :List="tvList"
          compTitle="SERIE TV"
          v-if="tvList.length > 0"
          :selectValue="selectValue"
        />
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
      modelValue: "",
      selectValue: "",
      tvList: [],
      filmList: [],
      idList: [],
      genreList: [],
      movieId: undefined,
      api: {
        language: "it-IT",
        baseUri: "https://api.themoviedb.org/3/",
        key: "e99307154c6dfb0b4750f6603256716d",
      },
    };
  },

  methods: {
    getProduct(endPoint, config, list) {
      axios.get(`${this.api.baseUri}${endPoint}`, config).then((res) => {
        this[list] = res.data.results;
      });
    },

    getModelValue(value) {
      this.modelValue = value;
      if (!value) {
        this.tvList = [];
        this.filmList = [];
        return;
      }

      const { key, language } = this.api;

      const config = {
        params: {
          language,
          api_key: key,
          query: value,
        },
      };

      this.getProduct("search/tv", config, "tvList");
      this.getProduct("search/movie", config, "filmList");
    },

    // getGenreList(selectValue) {
    //   const { key, language } = this.api;

    //   const config = {
    //     params: {
    //       language,
    //       api_key: key,
    //       query: selectValue,
    //     },
    //   };
    // },

    getId(id) {
      this.movieId = id;
      console.log(id);
    },

    getSelectValue(value) {
      this.selectValue = value;
    },
  },
  mounted() {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=e99307154c6dfb0b4750f6603256716d&language=it-IT`
      )
      .then((res) => {
        this["genreList"] = res.data.genres;
      });
  },
};
</script>


<style lang="scss">
@import "./sass/style.scss";
main {
  background-color: rgb(26, 25, 25);
  height: calc(100vh - 90px);
  overflow-y: auto;
}

#loader-title {
  margin-top: 200px;
}
</style>
