<template>
    <LoadBottomAutoWithoutEl @load="load">
        <div class="box" slot-scope="{scroll}" @scroll="scroll">
            <div class="item" v-for="n in list" :key="n">{{n}}</div>
        </div>
    </LoadBottomAutoWithoutEl>
</template>

<script>
import { LoadBottomAutoWithoutEl } from '../source/index.js'
export default {
    name: 'LoadBottomAutoWithoutElTest',
    components: { LoadBottomAutoWithoutEl },
    data() {
        return {
            list: [1, 2, 3, 4, 5],
        }
    },
    methods: {
        load() {
            setTimeout(() => {
                let arr = new Array(10).fill(3)
                arr = arr.map((item, index) => {
                    return this.list.length + index + 1
                })
                this.list.push(...arr)
            }, 200)
        },
    },
}
</script>

<style lang="scss" scoped>
.box {
    height: 100vh;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
.item {
    height: 200px;
    background: linear-gradient(to bottom, transparent, gray);
}
</style>

