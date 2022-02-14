<template>
  <main>
    <ul>
      <li v-for="film in filmList" :key="film.id">
        {{ film.name }}
        {{ film.original_name }}
        {{ film.original_language }}
        {{ film.vote_average }}
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: "Main",
  props: ["filmList"],
};
</script>

<style>
</style>