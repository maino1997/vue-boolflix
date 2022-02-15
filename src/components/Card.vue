<template>
  <li class="col-6 col-sm-4 col-md-3 col-lg-2">
    <div
      class="content"
      :style="{
        backgroundImage: `url(https://image.tmdb.org/t/p/w342${film.poster_path})`,
      }"
    >
      {{ getTitle(film) }}
      {{ film.original_title }}
      <img
        :src="getFlagUrl(film.original_language)"
        :alt="film.original_language"
      />
      <i
        v-for="number in 5"
        :key="number"
        class="fa-star"
        :class="starClass(film.vote_average, number)"
      ></i>
      {{ film.vote_average }}
    </div>
  </li>
</template>

<script>
export default {
  name: "Card",
  props: ["List", "film"],
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

    starClass(vote, number) {
      return number <= Math.ceil(vote / 2) ? "fas" : "far";
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  min-height: 300px;
  //   width: calc(100% / 6);
  margin: 30px 0;
}
img {
  width: 50px;
  height: 30px;
}

.card {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.content {
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
