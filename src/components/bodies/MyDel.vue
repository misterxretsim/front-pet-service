<template>
    <div class="myDel">
        <h2>Удаление</h2>
        <div>
            <input type="text" name="id" id="idInput" placeholder="ID" autocomplete="off" v-model="id" @keypress.enter="onEnter"/>
        </div>
        <myClose/>
    </div>
</template>

<script>
    import myClose from './MyClose.vue'

    export default {
        name: "MyDel",
        components: {
            myClose
        },
        data() {
            return {
                id: ''
            }
        },
        methods: {
            onEnter() {
                this.$store.commit('changeClass', 'false');
            }
        }
    }
</script>

<style scoped>
    .myDel {
        margin-top: 10px;
        position: relative;
    }
</style>