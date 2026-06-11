<template>
  <view class="page">
    <view class="profile-card">
      <view class="profile-top">
        <view class="avatar">求</view>
        <view class="profile-main">
          <text class="name">求职者</text>
          <text class="desc">前端开发 · 正在看机会</text>
        </view>
        <view class="edit">编辑</view>
      </view>

      <view class="stats">
        <view v-for="item in profileStats" :key="item.label" class="stat">
          <text class="stat-value">{{ item.value }}</text>
          <text class="stat-label">{{ item.label }}</text>
        </view>
      </view>
    </view>

    <view class="intent-card">
      <view class="section-head">
        <text class="section-title">求职意向</text>
        <text class="section-action">管理</text>
      </view>
      <view class="intent-row">
        <text class="intent-title">前端开发工程师</text>
        <text class="intent-salary">18-30K</text>
      </view>
      <text class="intent-desc">杭州 / 上海 · Vue3、uni-app、移动端方向</text>
    </view>

    <view class="menu-list">
      <view v-for="item in profileMenus" :key="item.title" class="menu-item">
        <view>
          <text class="menu-title">{{ item.title }}</text>
          <text class="menu-desc">{{ item.desc }}</text>
        </view>
        <text class="arrow">›</text>
      </view>
    </view>

    <BottomNav active-key="profile" />
  </view>
</template>

<script setup>
import BottomNav from '@/components/BottomNav.vue'
import { profileMenus, profileStats } from '@/data/profile.js'
</script>

<style scoped>
.page {
  min-height: 100vh;
  padding: 28rpx 28rpx 148rpx;
  background: #f5f8f8;
  box-sizing: border-box;
}

.profile-card,
.intent-card,
.menu-item {
  background: #ffffff;
  border: 1rpx solid #e8eef0;
  border-radius: 8rpx;
}

.profile-card,
.intent-card {
  padding: 30rpx;
}

.profile-top,
.stats,
.section-head,
.intent-row,
.menu-item {
  display: flex;
  align-items: center;
}

.profile-top {
  gap: 20rpx;
}

.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 92rpx;
  height: 92rpx;
  color: #ffffff;
  font-size: 34rpx;
  font-weight: 800;
  background: #00a6a6;
  border-radius: 8rpx;
}

.profile-main {
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
}

.name {
  color: #102f34;
  font-size: 38rpx;
  font-weight: 800;
  line-height: 48rpx;
}

.desc {
  margin-top: 6rpx;
  color: #728286;
  font-size: 24rpx;
  line-height: 32rpx;
}

.edit,
.section-action {
  flex-shrink: 0;
  color: #00a6a6;
  font-size: 24rpx;
}

.stats {
  justify-content: space-between;
  margin-top: 30rpx;
  padding-top: 28rpx;
  border-top: 1rpx solid #edf2f3;
}

.stat {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.stat-value {
  color: #132c31;
  font-size: 32rpx;
  font-weight: 800;
  line-height: 40rpx;
}

.stat-label {
  margin-top: 6rpx;
  color: #6a7e82;
  font-size: 22rpx;
  line-height: 28rpx;
}

.intent-card,
.menu-list {
  margin-top: 22rpx;
}

.section-head,
.intent-row,
.menu-item {
  justify-content: space-between;
  gap: 20rpx;
}

.section-title {
  color: #102f34;
  font-size: 30rpx;
  font-weight: 800;
  line-height: 38rpx;
}

.intent-row {
  margin-top: 22rpx;
}

.intent-title {
  color: #172b2d;
  font-size: 30rpx;
  font-weight: 800;
  line-height: 38rpx;
}

.intent-salary {
  flex-shrink: 0;
  color: #00a6a6;
  font-size: 30rpx;
  font-weight: 800;
}

.intent-desc {
  display: block;
  margin-top: 12rpx;
  color: #728286;
  font-size: 24rpx;
  line-height: 34rpx;
}

.menu-list {
  display: flex;
  flex-direction: column;
  gap: 18rpx;
}

.menu-item {
  padding: 26rpx 28rpx;
}

.menu-title,
.menu-desc {
  display: block;
}

.menu-title {
  color: #172b2d;
  font-size: 28rpx;
  font-weight: 800;
  line-height: 36rpx;
}

.menu-desc {
  margin-top: 8rpx;
  color: #728286;
  font-size: 23rpx;
  line-height: 32rpx;
}

.arrow {
  flex-shrink: 0;
  color: #9aabad;
  font-size: 42rpx;
  line-height: 42rpx;
}
</style>
