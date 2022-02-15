<template>
  <li class="col-6 col-md-4 col-lg-2 cards">
    <div
      class="content"
      :style="{
        backgroundImage: getBackgroundPicture(film.poster_path),
      }"
    >
      <div
        class="description"
        v-if="visible"
        @mouseover="Visible"
        @mouseleave="notVisible"
      >
        <ul>
          <li>
            Titolo:
            {{ getTitle(film) }}
          </li>
          <li>
            Titolo Originale:
            {{ film.original_title }}
          </li>
          <li>
            Lingua Originale:
            <img
              :src="getFlagUrl(film.original_language)"
              :alt="film.original_language"
            />
          </li>
          <li>
            Voto:
            {{ film.vote_average }}
            <i
              v-for="number in 5"
              :key="number"
              class="fa-star"
              :class="starClass(film.vote_average, number)"
            ></i>
          </li>
          <li>
            Trama:
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

    starClass(vote, number) {
      return number <= Math.ceil(vote / 2) ? "fas" : "far";
    },

    getBackgroundPicture(path) {
      if (this.visible) {
        if (path) {
          return `url(https://image.tmdb.org/t/p/w342${path})`;
        } else {
          return "`url(https://www.mobileworld.it/wp-content/uploads/2016/06/netflix-nuova-icona-800x534.png)`";
        }
      }
    },
    Visible() {
      this.visible = true;
    },
    notVisible() {
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.cards {
  height: 300px;
  overflow: auto;
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
  border: 1px solid rgb(185, 182, 182);
  border-radius: 10px;
}
</style>
