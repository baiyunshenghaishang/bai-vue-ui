<template>
    <input class="numberInput" type="tel" ref="el" :value="innerVal" @input="handleInput" v-bind="$attrs"
        v-on="listeners">
</template>

<script>
import { filterListener } from './util'

/**
 * 数字输入框，可以输入符合格式的整数和小数
 */

export default {
    name: 'MobileInput',
    props: {
        value: {},
        decimalDigits: {
            type: Number,
            default: 2,
        },
    },
    data() {
        return {
            innerVal: this.value,
        }
    },
    computed: {
        listeners() {
            let filterEventType = ['input']
            return filterListener(this.$listeners, filterEventType)
        },
    },
    methods: {
        handleInput(e) {
            let inputVal = e.target.value
            // 输入空值
            if (inputVal === '') {
                this.innerVal = inputVal
                this.$emit('input', inputVal)
                return
            }
            // 如果原先值不为数字，可以输入任何内容
            if (this.innerVal !== '' && isNaN(this.innerVal)) {
                this.innerVal = inputVal
                this.$emit('input', inputVal)
                return
            }
            let regex
            if (this.decimalDigits === 0) {
                regex = /^[1-9](\d+)?/
            } else {
                regex = new RegExp(
                    `^([1-9](\\d+)?(\\.\\d{0,${
                        this.decimalDigits
                    }})?)|(0(\\.\\d{0,${this.decimalDigits}})?)`
                )
            }
            let match = regex.exec(inputVal)
            if (match) {
                let val = match[1] || match[4]
                this.innerVal = val
                e.target.value = val
                this.$emit('input', val)
                return
            }
            e.target.value = this.innerVal
        },
    },
}
</script>
<style lang="scss" scoped>
.numberInput {
    outline: none;
    border: none;
    padding: 7px 0;
    -webkit-appearance: none;
    background-color: #fff;
    font-size: inherit;
    color: inherit;
    &:focus {
        outline: none;
        border: none;
    }
}
</style>

