<template>
    <div>
        We are inside a blog
        <div>
            Post id is {{ route.params.id }}
        </div>
    </div>
</template>
<script setup>
const route = useRoute()
console.log(route)
</script>
