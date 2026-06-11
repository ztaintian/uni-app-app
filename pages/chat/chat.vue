<template>
  <view class="page">
    <view class="header">
      <view>
        <text class="eyebrow">沟通中心</text>
        <text class="title">和招聘者直接聊</text>
      </view>
      <view class="status">在线</view>
    </view>

    <view class="summary">
      <view v-for="item in summary" :key="item.label" class="summary-item">
        <text class="summary-value">{{ item.value }}</text>
        <text class="summary-label">{{ item.label }}</text>
      </view>
    </view>

    <view class="tabs">
      <button
        v-for="tab in messageTabs"
        :key="tab"
        class="tab"
        :class="{ active: activeTab === tab }"
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </view>

    <view class="conversation-list">
      <view v-for="item in visibleConversations" :key="item.id" class="conversation">
        <view class="avatar">
          <text>{{ item.name.slice(0, 1) }}</text>
          <view v-if="item.online" class="online-dot"></view>
        </view>
        <view class="conversation-main">
          <view class="conversation-top">
            <text class="name">{{ item.name }}</text>
            <text class="time">{{ item.time }}</text>
          </view>
          <text class="role">{{ item.role }}</text>
          <text class="message">{{ item.lastMessage }}</text>
          <view class="job-pill">{{ item.job }}</view>
        </view>
        <view v-if="item.unread" class="badge">{{ item.unread }}</view>
      </view>
    </view>

    <BottomNav active-key="chat" />
  </view>
</template>

<script setup>
import { computed, ref } from 'vue'
import BottomNav from '@/components/BottomNav.vue'
import { conversations, messageTabs } from '@/data/messages.js'

const activeTab = ref(messageTabs[0])
const summary = [
  { value: '3', label: '沟通中' },
  { value: '2', label: '待回复' },
  { value: '1', label: '面试邀约' }
]

const visibleConversations = computed(() => {
  if (activeTab.value === '未读') {
    return conversations.filter((item) => item.unread > 0)
  }

  if (activeTab.value === '已约面') {
    return conversations.filter((item) => item.lastMessage.includes('面试'))
  }

  return conversations
})
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  padding: $app-page-padding $app-page-padding $app-page-bottom-padding;
  background: $app-color-page;
  box-sizing: border-box;
}

.header,
.summary,
.conversation-top {
  display: flex;
  align-items: center;
}

.header {
  justify-content: space-between;
  gap: 24rpx;
}

.eyebrow,
.title {
  display: block;
}

.eyebrow {
  color: $app-color-text-eyebrow;
  font-size: 24rpx;
  line-height: 32rpx;
}

.title {
  margin-top: 8rpx;
  color: $app-color-text-title;
  font-size: 44rpx;
  font-weight: 800;
  line-height: 54rpx;
}

.status {
  flex-shrink: 0;
  padding: 14rpx 22rpx;
  color: $app-color-primary-dark;
  font-size: 24rpx;
  background: $app-color-primary-soft;
  border-radius: $app-radius-control;
}

.summary {
  justify-content: space-between;
  margin-top: 28rpx;
  padding: 26rpx;
  background: $app-color-surface;
  border: 1rpx solid $app-color-border;
  border-radius: $app-radius-card;
}

.summary-item {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.summary-value {
  color: $app-color-text-strong;
  font-size: 34rpx;
  font-weight: 800;
  line-height: 42rpx;
}

.summary-label {
  margin-top: 6rpx;
  color: $app-color-text-secondary;
  font-size: 22rpx;
  line-height: 30rpx;
}

.tabs {
  display: flex;
  gap: 10rpx;
  margin-top: 26rpx;
}

.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120rpx;
  height: 58rpx;
  margin: 0;
  padding: 0 12rpx;
  color: $app-color-text-tab;
  font-size: 28rpx;
  line-height: 58rpx;
  background: transparent;
  border-radius: $app-radius-none;
}

.tab::after {
  border: 0;
}

.tab.active {
  color: $app-color-text-strong;
  font-weight: 800;
}

.conversation-list {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
  margin-top: 22rpx;
}

.conversation {
  position: relative;
  display: flex;
  gap: 18rpx;
  padding: 28rpx;
  background: $app-color-surface;
  border: 1rpx solid $app-color-border;
  border-radius: $app-radius-card;
}

.avatar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76rpx;
  height: 76rpx;
  color: $app-color-surface;
  font-size: 30rpx;
  font-weight: 800;
  background: $app-color-brand-deep;
  border-radius: $app-radius-card;
}

.online-dot {
  position: absolute;
  right: -2rpx;
  bottom: -2rpx;
  width: 18rpx;
  height: 18rpx;
  background: $app-color-primary-strong;
  border: 4rpx solid $app-color-surface;
  border-radius: $app-radius-round;
}

.conversation-main {
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
}

.conversation-top {
  justify-content: space-between;
  gap: 18rpx;
}

.name {
  color: $app-color-text;
  font-size: 30rpx;
  font-weight: 800;
  line-height: 38rpx;
}

.time,
.role {
  color: $app-color-text-secondary;
  font-size: 22rpx;
  line-height: 30rpx;
}

.role {
  margin-top: 4rpx;
}

.message {
  margin-top: 12rpx;
  color: $app-color-text-message;
  font-size: 26rpx;
  line-height: 36rpx;
}

.job-pill {
  align-self: flex-start;
  margin-top: 16rpx;
  padding: 8rpx 14rpx;
  color: $app-color-primary-dark;
  font-size: 22rpx;
  line-height: 28rpx;
  background: $app-color-primary-pale;
  border-radius: $app-radius-tag;
}

.badge {
  position: absolute;
  top: 24rpx;
  right: 24rpx;
  min-width: 34rpx;
  height: 34rpx;
  color: $app-color-surface;
  font-size: 20rpx;
  line-height: 34rpx;
  text-align: center;
  background: $app-color-danger;
  border-radius: $app-radius-badge;
}
</style>
