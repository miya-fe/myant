<template>
  <view>
    <template v-if="mode === 'selector'">
      <picker :value="arrayIndex" :range="array" :mode="mode" @change="bindPickerChange">
        <view class="picker-input">{{ array[arrayIndex] }}</view>
      </picker>
    </template>
    <template v-else-if="mode === 'multiSelector'">
      <picker :mode="mode" :value="multiIndex" :range="multiArray" @change="bindMultiPickerChange">
        <view class="picker-input">{{ multiValue }}</view>
      </picker>
    </template>
    <template v-else-if="mode === 'time'">
      <picker :mode="mode" :value="time" :start="start" :end="end" @change="bindTimeChange">
        <view class="picker-input">{{ time }}</view>
      </picker>
    </template>
    <template v-else-if="mode === 'date'">
      <picker :mode="mode" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
        <view class="picker-input">{{ date }}</view>
      </picker>
    </template>
    <template v-else-if="mode === 'region'">
      <picker :mode="mode" :value="regionArray" @change="bindRegionChange">
        <view class="picker-input">{{ regionValue }}</view>
      </picker>
    </template>
  </view>
</template>

<script>
export default {
  name: 'MyPicker',
  props: {
    // picker类型
    // selector：普通选择器，multiSelector：多列选择器，time：时间选择器，date：日期选择器，region：省市区选择器
    mode: {
      type: String,
      default: 'selector'
    },
    // 普通选择器选择列表
    array: {
      type: Array,
      default() {
        return []
      }
    },
    // 普通选择器下标
    arrayIndex: {
      type: Number,
      default: 0
    },
    // 多列选择器选择列表
    multiArray: {
      type: Array,
      default() {
        return [[], []]
      }
    },
    multiIndex: {
      type: Array,
      default() {
        return []
      }
    },
    // 时间选择器有效时间范围的开始
    start: {
      type: String,
      default: '00:00'
    },
    // 时间选择器有效时间范围的结束
    end: {
      type: String,
      default: '23:59'
    },
    time: {
      type: String,
      default: '00:00'
    },
    startDate: {
      type: String,
      default: '1900-01-01'
    },
    endDate: {
      type: String,
      default: '2100-12-30'
    },
    date: {
      type: String,
      default: ''
    },
    regionValue: {
      type: String,
      default: ''
    }
  },
  data() {
    const currentDate = this.getDate({
      format: true
    })
    return {
      title: 'picker',
      // array: ['中国', '美国', '巴西', '日本'],
      regionArray: ['', '', '']
    }
  },
  computed: {
    multiValue() {
      const multiArrayFirst = this.multiArray[0] || ''
      const multiArraySecond = this.multiArray[1] || ''
      if (!multiArrayFirst[this.multiIndex[0]] || !multiArraySecond[this.multiIndex[1]]) {
        return '请选择数据'
      }

      return `${multiArrayFirst[this.multiIndex[0]]} - ${multiArraySecond[this.multiIndex[1]]}`
    }
    // regionValue() {
    //   return this.regionArray.filter((item) => item).join(',') || '请选择地区'
    // }
  },
  methods: {
    bindPickerChange(e) {
      this.$emit('click', e.target.value, 'selector')
    },
    bindDateChange(e) {
      this.$emit('click', e.target.value, 'date')
    },
    bindTimeChange(e) {
      this.$emit('click', e.target.value, 'time')
    },
    getDate(type) {
      const date = new Date()
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()

      if (type === 'start') {
        year -= 60
      } else if (type === 'end') {
        year += 2
      }
      month = month > 9 ? month : `0${  month}`
      day = day > 9 ? day : `0${  day}`
      return `${year}-${month}-${day}`
    },
    bindMultiPickerChange({ detail: { value } }) {
      // this.multiIndex = value
      this.$emit('click', value, 'multiSelector')
    },
    bindRegionChange({ detail: { value } }) {
      const regionValue = value.filter((item) => item).join(',')
      this.$emit('click', regionValue, 'region')
    }
  }
}
</script>

<style lang="scss" scoped>
.picker {
  &-input {
    height: 50rpx;
  }
}
</style>
