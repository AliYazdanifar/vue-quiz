<template>
    <main class="container rtl">

        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component"/>
            </transition>
        </router-view>
    </main>
</template>
<script>
    export default {
    };
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>
