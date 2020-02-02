export default {
    mutations: {
        changeClass(state, val) {
            state.active.value = val;
        },
        changeClassOther(state, val) {
            state.active.additional = val;
        }
    },
    state: {
        buttons: [
            {
                name: 'Добавить'
            },
            {
                name: 'Изменить'
            },
            {
                name: 'Удалить'
            }
        ],
        active: {
            value: 'false',
            additional: ''
        }
    },
    getters: {
        buttons: (state) => state.buttons,
        class: (state) => state.active.value,
        otherClass: (state) => state.active.additional
    }
}