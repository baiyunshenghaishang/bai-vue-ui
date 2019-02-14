
<script>
export default {
    name: 'CountDown',
    props: {
        totalSecs: {
            type: Number,
            default: 60,
        },
        startTxt: {
            type: String,
            default: '发送验证码',
        },
        reStartTxt: {
            type: String,
            default: '重新发送',
        },
        countTxt: {
            type: [String, Function],
        },
    },
    render(h) {
        return this.$scopedSlots.default({
            secs: this.secs,
            startCount: this.startCount,
            stopCount: this.stopCount,
            txt: this.txt,
        })
    },
    data() {
        return {
            secs: this.totalSecs + 1,
        }
    },
    computed: {
        txt() {
            if (this.secs < this.totalSecs + 1) {
                if (typeof this.countTxt === undefined) {
                    return `${this.secs}s`
                }
                if (typeof this.countTxt === 'string') {
                    return this.countTxt
                }
                if (typeof this.countTxt === 'function') {
                    return this.countTxt(this.secs)
                }
            }
            if (this.tid === 0) {
                return this.reStartTxt
            } else {
                return this.startTxt
            }
        },
    },
    methods: {
        startCount() {
            if (this.tid) return
            this.minus()
        },
        stopCount() {
            if (this.tid) {
                clearTimeout(this.tid)
                this.secs = this.totalSecs + 1
                this.tid = 0
            }
        },
        minus() {
            if (this.secs <= 1) {
                this.stopCount()
                return
            }
            this.secs--
            this.tid = setTimeout(this.minus, 1000)
        },
    },
}
</script>
