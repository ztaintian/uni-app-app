<template>
  <view class="bottom-nav">
    <button
      v-for="item in items"
      :key="item.key"
      class="nav-item"
      :class="{ active: item.key === activeKey }"
      @click="handleChange(item.key)"
    >
      <text class="nav-icon">{{ item.icon }}</text>
      <text class="nav-label">{{ item.label }}</text>
    </button>
  </view>
</template>

<script setup>
import { navItems, navigateByKey } from '@/utils/navigation.js'

const props = defineProps({
  activeKey: {
    type: String,
    default: 'jobs'
  },
  items: {
    type: Array,
    default: () => navItems
  }
})

const emit = defineEmits(['change'])

function handleChange(key) {
  emit('change', key)

  if (key !== props.activeKey) {
    navigateByKey(key)
  }
}
</script>

<style lang="scss" scoped>
.bottom-nav {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  height: $app-bottom-nav-height;
  padding-bottom: env(safe-area-inset-bottom);
  background: $app-color-surface;
  border-top: 1rpx solid $app-color-border;
}

.nav-item {
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: $app-bottom-nav-height;
  margin: 0;
  padding: 0;
  color: $app-color-text-light;
  line-height: 1;
  background: transparent;
  border-radius: $app-radius-none;
}

.nav-item::after {
  border: 0;
}

.nav-item.active {
  color: $app-color-primary;
}

.nav-icon {
  font-size: 34rpx;
  line-height: 38rpx;
}

.nav-label {
  margin-top: 8rpx;
  font-size: 22rpx;
  line-height: 26rpx;
}
</style>
