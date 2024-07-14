<template>
    <div>
        We are inside a blog
        <article class="prose dark:prose-invert">
            <ContentDoc />
        </article>
        <div>
            Post id is {{ route.params.id }}
        </div>
    </div>
</template>
<script setup>
const route = useRoute()
console.log(route.params.slug)
</script>
