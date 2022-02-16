<template>
  <section>
    <h2>{{ compTitle }}</h2>
    <ul class="row g-4">
      <Card
        v-for="film in newArray"
        :key="film.id"
        :List="List"
        :film="film"
        @click="getId(film.id)"
        :filmId="film.id"
      />
    </ul>
  </section>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Film",
  props: ["List", "compTitle", "selectValue"],
  components: {
    Card,
  },
  data() {
    return {
      filmIds: [],
    };
  },
  computed: {
    newArray() {
      // console.log(this.selectValue);
      const newArray = this.List.filter((film) => {
        if (film.genre_ids.includes(this.selectValue)) {
          return true;
        } else {
          return false;
        }
      });
      return newArray;
    },
  },
  methods: {
    getId(id) {
      this.$emit("getId", id);
      console.log(id);
    },
  },
};
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  justify-content: center;
}
img {
  width: 50px;
  height: 30px;
}

// .card {
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
// }
</style>