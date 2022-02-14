<template>
  <ul>
    <li>FILM</li>
    <li v-for="film in List" :key="film.id">
      {{ film.title }}
      {{ film.original_title }}
      {{ film.original_language }}
      <img
        :src="getFlagUrl(film.original_language)"
        :alt="film.original_language"
      />
      {{ film.vote_average }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Film",
  props: ["List"],
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
  },
};
</script>

<style>
</style>