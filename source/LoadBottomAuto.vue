<template>
    <div class="autoLoad" ref="box" @scroll="handleScroll" v-bind="$attrs" v-on="listeners">
        <slot></slot>
    </div>
</template>

<script>
/**
 * 滚动到底部时触发load事件，可以设置scrollTop来初始化停留位置
 */
import { filterListener } from './util'
export default {
    name: 'LoadBottomAuto',
    props: {
        loadHeight: {
            type: Number,
            default: 50,
        },
        scrollTop: {
            type: Number,
            default: 0,
        },
    },
    model: {
        prop: 'scrollTop',
        event: 'scroll',
    },
    mounted() {
        this.initScrollTop()
    },
    watch: {
        scrollTop() {
            this.initScrollTop()
        },
    },
    data() {
        return {
            lastTime: 0,
            lastScrollTop: 0,
        }
    },
    computed: {
        listeners() {
            let filterEventType = ['scroll']
            return filterListener(this.$listeners, filterEventType)
        },
    },
    methods: {
        handleScroll(e) {
            let el = e.currentTarget
            if (!el) return
            let scrollTop = el.scrollTop,
                trigger =
                    el.scrollHeight - scrollTop - el.clientHeight <=
                    this.loadHeight,
                scrollDown =
                    this.lastScrollTop !== 0 && scrollTop > this.lastScrollTop
            this.lastScrollTop = scrollTop
            this.$emit('scroll', scrollTop, e)
            if (trigger && scrollDown) {
                let now = Date.now()
                if (now - this.lastTime > 200) {
                    this.lastTime = now
                    this.$emit('load')
                }
            }
        },
        initScrollTop() {
            let el = this.$refs.box
            if (!el) return
            el.scrollTop = this.scrollTop
        },
    },
}
</script>

<style lang="scss" scoped>
.autoLoad {
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
</style>
