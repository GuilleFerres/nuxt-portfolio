<template>
    <div class="container mx-auto max-w-2xl">
        <header class="flex justify-between items-center mt-5">
            <div class="flex items-center space-x-12">
                <div>
                    <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200">
                        Guille Ferres
                    </NuxtLink>
                </div>
                <Menu />
            </div>
            <ClientOnly>
                <ColorModeSelector />
            </ClientOnly>
        </header>
        <main class="p-2 mt-10">
            <slot />
        </main>
        
    </div>
</template>

<script setup>
useHead({
    titleTemplate: '%s | Guillermo Ferres'
})
</script>
<style>
body {
    font-family: 'Roboto';
}
body {     
    @apply bg-white text-gray-700 dark:text-gray-300 dark:bg-gray-900 
}
</style>
