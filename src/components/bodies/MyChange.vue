<template>
    <div class="myChange">
        <h2>Изменение</h2>
        <div>
            <input type="text" name="id" id="idInput" placeholder="ID" autocomplete="off" v-model="item.id" @input="onInput1"/>
            <input v-if="item.id.length > 0" type="text" name="name" id="nameInput" placeholder="Имя" autocomplete="off" v-model="item.name" @input="onInput2"/>
            <input v-if="item.id.length > 0 && item.name.length > 1" type="text" name="cost" id="costInput" placeholder="Цена" autocomplete="off" v-model="item.cost" @keypress.enter="onEnter"/>
        </div>
        <myClose/>
    </div>
</template>

<script>
    import myClose from './MyClose.vue'

    export default {
        name: "MyChange",
        components: {
            myClose
        },
        data() {
            return {
                item: {
                    id: '',
                    name: '',
                    cost: ''
                }
            }
        },
        methods: {
            onEnter() {
                this.$store.commit('changeClass', 'false');
                this.$store.commit('changeClassOther', '')
            },
            onInput1() {
                if (this.item.id.length > 0) {
                    if (this.item.name.length < 2) this.$store.commit('changeClassOther', 'add45');
                    else this.$store.commit('changeClassOther', 'add90');
                } else this.$store.commit('changeClassOther', '')
            },
            onInput2() {
                if (this.item.name.length > 1) this.$store.commit('changeClassOther', 'add90');
                else this.$store.commit('changeClassOther', 'add45')
            }
        }
    }
</script>

<style scoped>
    .myChange {
        margin-top: 10px;
        position: relative;
    }
</style>