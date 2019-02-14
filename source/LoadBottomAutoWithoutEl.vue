<script>
// 不带元素的底部自动加载，只处理滚动到底部触发load事件
export default {
    name: 'LoadBottomAutoWithoutEl',
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
    render() {
        return this.$scopedSlots.default({
            scroll: this.handleScroll,
        })
    },
    data() {
        return {
            lastTime: 0,
            lastScrollTop: 0,
        }
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
            this.$emit('scroll', scrollTop)
            if (trigger && scrollDown) {
                let now = Date.now()
                if (now - this.lastTime > 200) {
                    this.lastTime = now
                    this.$emit('load')
                }
            }
        },
    },
}
</script>
