<template>
    <div class="card shadow">
        <div class="card-header" v-show="hasHeader">

            <slot name="cardHeader"></slot>

        </div>
        <div class="card-body">
            <slot name="cardBody"></slot>
        </div>
        <div class="card-footer" v-show="hasFooter">
            <slot name="cardFooter"></slot>
        </div>
    </div>
</template>

<script>
    import {ref} from "vue";

    export default {
        name: "CardComponent",
        props: ["title"],
        setup(props, {slots}) {
            const hasHeader = ref(false)
            const hasFooter = ref(false)

            // Check if the slot exists by name and has content.
            // It returns an empty array if it's empty.
            if (slots.cardHeader && slots.cardHeader().length) {
                hasHeader.value = true
            }
            if (slots.cardFooter && slots.cardFooter().length) {
                hasFooter.value = true
            }

            return {
                hasHeader, hasFooter
            }
        }
    };
</script>

<style scoped>
    .card-header:empty {
        display: none;
    }
</style>