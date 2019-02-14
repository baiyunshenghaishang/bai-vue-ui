<template>
    <div class="box">
        <NumberInput v-model="val" placeholder="输入数字" @keydown="handleKeyDown" :decimalDigits="2" />
        <div>你按下了{{ charCode }}</div>
    </div>
</template>

<script>
import { NumberInput } from '../source/'
export default {
    name: 'NumberInputTest',
    components: { NumberInput },
    data() {
        return {
            val: '123abc',
            charCode: '',
        }
    },
    methods: {
        handleKeyDown(e) {
            this.charCode = String.fromCharCode(e.keyCode)
        },
    },
}
</script>

<style lang="scss" scoped>
.box {
    background: lightgray;
}
</style>
