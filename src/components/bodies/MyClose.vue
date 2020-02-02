<template>
    <svg height="15" width="15" @click="onClick">
        <line x1="0" y1="0" x2="15" y2="15"/>
        <line x1="0" y1="15" x2="15" y2="0"/>
    </svg>
</template>

<script>
    export default {
        name: "MyClose",
        methods: {
            onClick() {
                this.$store.commit('changeClass', 'false');
                this.$store.commit('changeClassOther', '')
            }
        }
    }
</script>

<style scoped>
    svg {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 0;
        stroke: indianred;
        stroke-width: 2.5;
    }
    svg:active {
        transform: rotate(90deg);
        transform-origin: center center;
        transition: transform .3s ease-out;
    }

</style>