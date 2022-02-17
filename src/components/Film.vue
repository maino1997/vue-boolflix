<template>
  <section>
    <h2 v-if="getArray.length > 0">{{ compTitle }}</h2>
    <ul class="row g-4">
      <Card
        v-for="film in getArray"
        :key="film.id"
        :List="List"
        :film="film"
        :filmId="film.id"
        :genreList="genreList"
        :endP="endP"
      />
    </ul>
  </section>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Film",
  props: ["List", "compTitle", "selectValue", "genreList", "endP"],
  components: {
    Card,
  },
  data() {
    return {
      filmIds: [],
    };
  },
  computed: {
    getArray() {
      if (this.selectValue) {
        return this.newArray();
      } else {
        return this.List;
      }
    },
  },
  methods: {
    newArray() {
      // console.log(this.selectValue);
      const newArray = this.List.filter((film) => {
        if (this.selectValue) {
          if (film.genre_ids.includes(this.selectValue)) {
            return true;
          } else {
            return false;
          }
        }
      });
      return newArray;
    },
    // getId(id) {
    //   this.$emit("getId", id);
    //   console.log(id);
    // },
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
</style>