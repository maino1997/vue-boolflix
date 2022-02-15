<template>
  <section>
    <h2>{{ compTitle }}</h2>
    <ul class="row px-4">
      <Card v-for="film in List" :key="film.id" :List="List" :film="film" />
    </ul>
  </section>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Film",
  props: ["List", "compTitle"],
  components: {
    Card,
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