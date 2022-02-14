<template>
  <ul>
    <li>SERIE TV</li>
    <li v-for="serie in List" :key="serie.id">
      {{ serie.name }}
      {{ serie.original_name }}
      {{ serie.original_language }}
      <img
        :src="getFlagUrl(serie.original_language)"
        :alt="serie.original_language"
      />
      {{ serie.vote_average }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Tv",
  props: ["List"],
  data() {
    return {};
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
  },
};
</script>

<style>
</style>