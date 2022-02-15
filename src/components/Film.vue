<template>
  <ul>
    <li>{{ compTitle }}</li>
    <li v-for="film in List" :key="film.id">
      {{ getTitle(film) }}
      {{ film.original_title }}
      <img
        :src="getFlagUrl(film.original_language)"
        :alt="film.original_language"
      />
      <img
        :src="`https://image.tmdb.org/t/p/w342${film.backdrop_path}`"
        alt="film-title"
      />
      <i
        v-for="(star, index) in ratings"
        :key="index"
        class="far fa-star"
        :class="{ fas: isIndex(film.vote_average, index) }"
        >{{ index + 1 }}</i
      >
      {{ film.vote_average }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Film",
  props: ["List", "compTitle"],

  data() {
    return {
      rateValue: 0,
      ratings: ["1", "2", "3", "4", "5"],
    };
  },

  methods: {
    getFlagUrl(flag) {
      if (flag === "en") {
        return require("../assets/img/en.png");
      } else if (flag === "it") {
        return require("../assets/img/it.png");
      } else {
        return "https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png";
      }
    },
    getTitle(title) {
      if (title.title) {
        return title.title;
      } else {
        return title.name;
      }
    },
    getOrigTitle(title) {
      if (title.title) {
        return title.original_title;
      } else {
        return title.original_name;
      }
    },

    isIndex(vote, index) {
      const roundedVote = Math.ceil(vote / 2);
      if (roundedVote >= index + 1) {
        return true;
      } else {
        false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
img {
  width: 50px;
  height: 30px;
}
</style>