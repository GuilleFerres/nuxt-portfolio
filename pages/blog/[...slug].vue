<template>
    <div>
        <article class="prose dark:prose-invert prose-pre:bg-white dark:prose-pre:bg-gray-800 max-w-none prose-pre:text-gray-700 dark:prose-pre:text-gray-300">
            <ContentDoc v-slot="{ doc }">
                <div class="grid grid-cols-6 gap-16">
                    <div :class="doc.toc ? 'col-span-4' : 'col-span-6'">
                        <ContentRenderer :value="doc" />
                    </div>
                    <div v-if="doc.toc" class="col-span-2 not-prose">
                        <aside class="sticky top-8">
                            <div class="font-semibold mb-2">
                                Table of Contents
                            </div>
                            <nav>
                                <TocLinks :links="doc.body.toc.links" />
                            </nav>
                        </aside>
                    </div>
                </div>
                
            </ContentDoc>
        </article>
    </div>
</template>
<script setup>
const route = useRoute()
console.log(route.params.slug)
</script>
