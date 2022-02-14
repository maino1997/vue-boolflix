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
      {{ film.vote_average }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Film",
  props: ["List", "compTitle"],
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
  },
};
</script>

<style>
</style>