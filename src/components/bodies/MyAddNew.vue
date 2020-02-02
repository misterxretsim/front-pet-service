<template>
    <div :class="'myAddNew ' + this.$store.getters.otherClass">
        <h2>Добавление</h2>
        <div>
            <input type="text" name="type" id="typeInput" placeholder="Тип" autocomplete="off" v-model="item.type" @input="onInput1"/>
            <input v-if="item.type === 'pets' || item.type === 'goods'" type="text" name="name" id="nameInput" placeholder="Имя" autocomplete="off" v-model="item.name" @input="onInput2"/>
            <input v-if="(item.type === 'pets' || item.type === 'goods') && item.name.length > 1" type="text" name="cost" id="costInput" placeholder="Цена" autocomplete="off" v-model="item.cost" @keypress.enter="onEnter"/>
        </div>
        <myClose/>
    </div>
</template>

<script>
    import myClose from './MyClose.vue'

    export default {
        name: "MyAddNew",
        components: {
            myClose
        },
        data() {
            return {
                item: {
                    type: '',
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
                if (this.item.type === 'pets' || this.item.type === 'goods') {
                    if (this.item.name.length < 2) this.$store.commit('changeClassOther', 'add45');
                    else this.$store.commit('changeClassOther', 'add90');
                } else this.$store.commit('changeClassOther', '')
            },
            onInput2() {
                if (this.item.name.length > 1) this.$store.commit('changeClassOther', 'add90');
                else this.$store.commit('changeClassOther', 'add45')
            }
        },

    }
</script>

<style scoped>
    .myAddNew {
        margin-top: 10px;
        position: relative;
    }
</style>