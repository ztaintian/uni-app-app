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

<style lang="scss" scoped>
.search-card {
  padding: 16rpx 20rpx;
  background: $app-color-surface;
  border: 1rpx solid $app-color-border-search;
  border-radius: $app-radius-card;
  box-shadow: $app-shadow-search;
}

.search-row {
  display: flex;
  align-items: center;
  min-height: 64rpx;
}

.search-icon {
  width: 44rpx;
  color: $app-color-primary;
  font-size: 34rpx;
  line-height: 1;
}

.search-input {
  flex: 1;
  height: 64rpx;
  color: $app-color-text;
  font-size: 28rpx;
}

.search-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: $app-search-button-width;
  height: 56rpx;
  margin: 0;
  padding: 0;
  color: $app-color-surface;
  font-size: 24rpx;
  line-height: 56rpx;
  background: $app-color-primary-strong;
  border-radius: $app-radius-control;
}

.search-button::after {
  border: 0;
}
</style>
