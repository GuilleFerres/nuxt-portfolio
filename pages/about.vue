<template>
    <div>
        This page is about me
    </div>
</template>
<script setup lang="ts">
useHead({
    title: 'about',
    link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    }
  ]
})
</script>
<style scoped>
body {
    font-family: 'Roboto';
}
</style>
