<template>
  <scroll-view class="chip-scroll" scroll-x>
    <view class="chip-list">
      <button
        v-for="chip in chips"
        :key="chip"
        class="chip"
        :class="{ active: chip === activeChip }"
        size="mini"
        @click="$emit('select', chip)"
      >
        {{ chip }}
      </button>
    </view>
  </scroll-view>
</template>

<script setup>
defineProps({
  chips: {
    type: Array,
    default: () => []
  },
  activeChip: {
    type: String,
    default: ''
  }
})

defineEmits(['select'])
</script>

<style lang="scss" scoped>
.chip-scroll {
  width: 100%;
  white-space: nowrap;
}

.chip-list {
  display: flex;
  gap: 16rpx;
  padding: 4rpx 0;
}

.chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 128rpx;
  height: 56rpx;
  margin: 0;
  padding: 0 24rpx;
  color: $app-color-text-chip;
  font-size: 24rpx;
  line-height: 56rpx;
  background: $app-color-chip;
  border-radius: $app-radius-control;
}

.chip.active {
  color: $app-color-primary-dark;
  background: $app-color-primary-soft;
}

.chip::after {
  border: 0;
}
</style>
