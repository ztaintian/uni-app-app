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

<style scoped>
.page {
  min-height: 100vh;
  padding: 28rpx 28rpx 148rpx;
  background: #f5f8f8;
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
  color: #527174;
  font-size: 24rpx;
  line-height: 32rpx;
}

.title {
  margin-top: 8rpx;
  color: #112c30;
  font-size: 44rpx;
  font-weight: 800;
  line-height: 54rpx;
}

.status {
  flex-shrink: 0;
  padding: 14rpx 22rpx;
  color: #007f82;
  font-size: 24rpx;
  background: #dcfbfb;
  border-radius: 6rpx;
}

.summary {
  justify-content: space-between;
  margin-top: 28rpx;
  padding: 26rpx;
  background: #ffffff;
  border: 1rpx solid #e8eef0;
  border-radius: 8rpx;
}

.summary-item {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.summary-value {
  color: #102f34;
  font-size: 34rpx;
  font-weight: 800;
  line-height: 42rpx;
}

.summary-label {
  margin-top: 6rpx;
  color: #728286;
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
  color: #5e7074;
  font-size: 28rpx;
  line-height: 58rpx;
  background: transparent;
  border-radius: 0;
}

.tab::after {
  border: 0;
}

.tab.active {
  color: #102f34;
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
  background: #ffffff;
  border: 1rpx solid #e8eef0;
  border-radius: 8rpx;
}

.avatar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76rpx;
  height: 76rpx;
  color: #ffffff;
  font-size: 30rpx;
  font-weight: 800;
  background: #243b53;
  border-radius: 8rpx;
}

.online-dot {
  position: absolute;
  right: -2rpx;
  bottom: -2rpx;
  width: 18rpx;
  height: 18rpx;
  background: #00b8b8;
  border: 4rpx solid #ffffff;
  border-radius: 50%;
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
  color: #172b2d;
  font-size: 30rpx;
  font-weight: 800;
  line-height: 38rpx;
}

.time,
.role {
  color: #728286;
  font-size: 22rpx;
  line-height: 30rpx;
}

.role {
  margin-top: 4rpx;
}

.message {
  margin-top: 12rpx;
  color: #40585c;
  font-size: 26rpx;
  line-height: 36rpx;
}

.job-pill {
  align-self: flex-start;
  margin-top: 16rpx;
  padding: 8rpx 14rpx;
  color: #007f82;
  font-size: 22rpx;
  line-height: 28rpx;
  background: #effafa;
  border-radius: 4rpx;
}

.badge {
  position: absolute;
  top: 24rpx;
  right: 24rpx;
  min-width: 34rpx;
  height: 34rpx;
  color: #ffffff;
  font-size: 20rpx;
  line-height: 34rpx;
  text-align: center;
  background: #ff5a5f;
  border-radius: 17rpx;
}
</style>
