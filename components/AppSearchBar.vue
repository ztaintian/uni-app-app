<template>
  <view class="search-card">
    <view class="search-row">
      <text class="search-icon">⌕</text>
      <input
        class="search-input"
        type="text"
        confirm-type="search"
        :value="modelValue"
        :placeholder="placeholder"
        @input="handleInput"
      />
      <button class="search-button" size="mini">搜索</button>
    </view>
  </view>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: '搜索职位、公司或技能'
  }
})

const emit = defineEmits(['update:modelValue'])

function handleInput(event) {
  emit('update:modelValue', event.detail.value)
}
</script>

<style scoped>
.search-card {
  padding: 16rpx 20rpx;
  background: #ffffff;
  border: 1rpx solid #e7eef0;
  border-radius: 8rpx;
  box-shadow: 0 8rpx 24rpx rgba(15, 39, 46, 0.06);
}

.search-row {
  display: flex;
  align-items: center;
  min-height: 64rpx;
}

.search-icon {
  width: 44rpx;
  color: #00a6a6;
  font-size: 34rpx;
  line-height: 1;
}

.search-input {
  flex: 1;
  height: 64rpx;
  color: #172b2d;
  font-size: 28rpx;
}

.search-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112rpx;
  height: 56rpx;
  margin: 0;
  padding: 0;
  color: #ffffff;
  font-size: 24rpx;
  line-height: 56rpx;
  background: #00b8b8;
  border-radius: 6rpx;
}

.search-button::after {
  border: 0;
}
</style>
