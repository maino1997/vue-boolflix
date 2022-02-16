<template>
  <li
    class="col-6 col-md-4 col-lg-3 col-xl-2 cards overflow"
    @click="getFilmId(film.id)"
  >
    <div
      class="content"
      :style="{
        backgroundImage: getBackgroundPicture(film.poster_path),
      }"
    >
      <div class="description">
        <ul>
          <li>
            TITOLO:
            {{ getTitle(film) }}
          </li>
          <li>
            TITOLO ORIGINALE:
            {{ film.original_title }}
          </li>
          <li>
            LINGUA ORIGINALE:
            <img
              :src="getFlagUrl(film.original_language)"
              :alt="film.original_language"
            />
          </li>
          <li>
            VOTO:
            <i
              v-for="number in 5"
              :key="number"
              class="fa-star"
              :class="starClass(film.vote_average, number)"
            ></i>
          </li>
          <li>
            TRAMA:
            {{ film.overview }}
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "Card",
  props: ["List", "film"],
  data() {
    return {
      visible: false,
      filmIds: [],
    };
  },

  computed: {},

  methods: {
    getTitle(title) {
      if (title.title) {
        return title.title;
      } else {
        return title.name;
      }
    },
    getFilmId(id) {
      console.log(id);
      this.$emit("getId", id);
    },
    getFlagUrl(flag) {
      if (flag === "en") {
        return require("../assets/img/en.png");
      } else if (flag === "it") {
        return require("../assets/img/it.png");
      } else {
        return "https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png";
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

    getBackgroundPicture(path) {
      if (path && this.visible === false) {
        return `url(https://image.tmdb.org/t/p/w342${path})`;
      } else {
        return `url(https://www.mobileworld.it/wp-content/uploads/2016/06/netflix-nuova-icona-800x534.png)`;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cards {
  height: 300px;
  margin: 20px 0;
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
  border: 1px solid rgb(185, 182, 182);
  border-radius: 5px;
  overflow-y: auto;
  box-shadow: 0 0px 7px white;
  position: relative;
}

.description {
  background-color: rgb(26, 25, 25);
  display: none;
  min-height: 300px;
  padding: 10px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  li {
    margin: 20px 0;
  }
}
.content:hover .description {
  display: block;
  cursor: pointer;
}
</style>
