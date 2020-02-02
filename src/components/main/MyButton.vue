<template>
    <div class="myButton" @click="onClick(msg)">{{ msg }}</div>
</template>

<script>
    export default {
        name: 'MyButton',
        props: {
            msg: String
        },
        methods: {
            onClick(msg) {
                switch (msg) {
                    case 'Добавить':
                        this.$store.commit('changeClass', 'myAddNew');
                        this.$store.commit('changeClassOther', '');
                        break;
                    case 'Изменить':
                        this.$store.commit('changeClass', 'myChange');
                        this.$store.commit('changeClassOther', '');
                        break;
                    case 'Удалить':
                        this.$store.commit('changeClass', 'myDel');
                        this.$store.commit('changeClassOther', '');
                        break;
                    default:
                        this.$store.commit('changeClass', 'false');
                        this.$store.commit('changeClassOther', '')
                }
            }
        }
    }
</script>

<style scoped>
    .myButton {
        display: inline-block;
        padding-top: 15px;
        width: 200px;
        height: 35px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 10px;
        border: 2px solid rgba(255, 255, 255, 0.6);
        cursor: pointer;
        transition: .3s;
        margin: 15px;
        font-size: 16px;
    }
    .myButton:hover {
        background: rgba(255, 255, 255, 0.6);
    }
    .myButton:active {
        background: #2d9c87;
        border: 2px dotted rgba(255, 255, 255, 0.6);
    }
</style>