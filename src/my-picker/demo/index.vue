<template>
  <view>
    <view class="picker-contain">
      <view class="picker-title">普通选择器</view>
      <view class="picker-content">
        <view class="picker-header">
            当前选择
        </view>
        <view class="picker-body">
          <my-picker :mode="'selector'" @click="handlePickerClick" :array="array" :array-index="arrayIndex"/>
        </view>
      </view>
    </view>
    <view class="picker-contain">
      <view class="picker-title">多列选择器</view>
      <view class="picker-content">
        <view class="picker-header">
            当前选择
        </view>
        <view class="picker-body">
          <my-picker :mode="'multiSelector'" @click="handlePickerClick" :multi-array="multiArray" :multi-index="multiIndex"/>
        </view>
      </view>
    </view>
    <view class="picker-contain">
      <view class="picker-title">时间选择器</view>
      <view class="picker-content">
        <view class="picker-header">
            当前选择
        </view>
        <view class="picker-body">
          <my-picker :mode="'time'" @click="handlePickerClick" :time="time"/>
        </view>
      </view>
    </view>
    <view class="picker-contain">
      <view class="picker-title">日期选择器</view>
      <view class="picker-content">
        <view class="picker-header">
            当前选择
        </view>
        <view class="picker-body">
          <my-picker :mode="'date'" @click="handlePickerClick" :start-date="startDate" :end-date="endDate" :date="currentDate"/>
        </view>
      </view>
    </view>
    <view class="picker-contain">
      <view class="picker-title">省市区选择器</view>
      <view class="picker-content">
        <view class="picker-header">
            当前选择
        </view>
        <view class="picker-body">
          <my-picker :mode="'region'" @click="handlePickerClick" :region-value="regionValue"/>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
  export default {
    data () {
      const currentDate = this.getDate({
            format: true
        })
      return {
        array: ['中国', '美国', '巴西', '日本'],
        arrayIndex: 0,
        multiArray: [["a","b"], ["c","d"]],
        multiIndex: [0, 0],
        time: '12:01',
        currentDate,
        regionValue: ''
      }
    },
    computed: {
      startDate() {
        return this.getDate('start');
      },
      endDate() {
        return this.getDate('end');
      },
    },
    methods: {
      show () {
        this.pickerVisible = true
      },
      cancel () {
        this.result = 'click cancel result: null'
      },
      confirm (res) {
        this.result = JSON.stringify(res)
      },
      handlePickerClick(value, type) {
        if (type === 'selector') {
          this.arrayIndex = value
        } else if (type === 'multiSelector') {
          this.multiIndex = value
        } else if (type === 'time') {
          this.time = value
        } else if (type === 'date') {
          this.currentDate = value
        } else if (type === 'region') {
          this.regionValue = value
        }
      },
      getDate(type) {
        const date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (type === 'start') {
            year = year - 60;
        } else if (type === 'end') {
            year = year + 2;
        }
        month = month > 9 ? month : '0' + month;;
        day = day > 9 ? day : '0' + day;
        return `${year}-${month}-${day}`;
      },
    }
  }
</script>

<style lang="less" scoped>
.picker {
  &-contain {
    margin-bottom: 20rpx;
  }
  &-title {
    padding: 20rpx;
    color: #333;
    font-weight: 600;
  }
  &-content {
    display: flex;
    padding: 20rpx;
  }
  &-header {
    color: #333;
  }
  &-body {
    flex: 1;
    margin-left: 20rpx;
  }
}
</style>
