<template>
    <CountDown startTxt="准备倒计时" reStartTxt="再次倒计时" :countTxt="getTxt" :totalSecs="5">
        <div slot-scope="{startCount,txt,stopCount}">
            <div @click="startCount">{{txt}}</div>
            <div @click.stop="stopCount">点我停止</div>
        </div>

    </CountDown>
</template>

<script>
import { CountDown } from '../source/'
export default {
    name: 'CountDownTest',
    components: { CountDown },
    methods: {
        getTxt(secs) {
            return `还剩${secs}秒`
        },
    },
}
</script>
