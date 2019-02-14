<template>
    <LoadBottomAuto @load="load" v-model="scrollTop" class="box" @touchstart="touchstart">
        <div class="item" v-for="n in list" :key="n">{{ n }}</div>
    </LoadBottomAuto>
</template>

<script>
import { LoadBottomAuto } from '../source'
export default {
    name: 'LoadBottomAutoTest',
    components: { LoadBottomAuto },
    data() {
        return {
            list: [1, 2, 3, 4, 5],
            scrollTop: 300,
        }
    },
    methods: {
        load() {
            let arr = new Array(10).fill(3)
            arr = arr.map((item, index) => {
                return this.list.length + index + 1
            })
            this.list.push(...arr)
        },
        touchstart(e) {
            console.log(e)
        },
    },
}
</script>

<style lang="scss" scoped>
.box {
    height: 100vh;
}
.item {
    height: 200px;
    background: linear-gradient(to bottom, transparent, gray);
}
</style>
