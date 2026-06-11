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

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  padding: $app-page-padding $app-page-padding $app-page-bottom-padding;
  background: $app-color-page;
  box-sizing: border-box;
}

.profile-card,
.intent-card,
.menu-item {
  background: $app-color-surface;
  border: 1rpx solid $app-color-border;
  border-radius: $app-radius-card;
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
  color: $app-color-surface;
  font-size: 34rpx;
  font-weight: 800;
  background: $app-color-primary;
  border-radius: $app-radius-card;
}

.profile-main {
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
}

.name {
  color: $app-color-text-strong;
  font-size: 38rpx;
  font-weight: 800;
  line-height: 48rpx;
}

.desc {
  margin-top: 6rpx;
  color: $app-color-text-secondary;
  font-size: 24rpx;
  line-height: 32rpx;
}

.edit,
.section-action {
  flex-shrink: 0;
  color: $app-color-primary;
  font-size: 24rpx;
}

.stats {
  justify-content: space-between;
  margin-top: 30rpx;
  padding-top: 28rpx;
  border-top: 1rpx solid $app-color-border-light;
}

.stat {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.stat-value {
  color: $app-color-text-strong;
  font-size: 32rpx;
  font-weight: 800;
  line-height: 40rpx;
}

.stat-label {
  margin-top: 6rpx;
  color: $app-color-text-muted;
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
  color: $app-color-text-strong;
  font-size: 30rpx;
  font-weight: 800;
  line-height: 38rpx;
}

.intent-row {
  margin-top: 22rpx;
}

.intent-title {
  color: $app-color-text;
  font-size: 30rpx;
  font-weight: 800;
  line-height: 38rpx;
}

.intent-salary {
  flex-shrink: 0;
  color: $app-color-primary;
  font-size: 30rpx;
  font-weight: 800;
}

.intent-desc {
  display: block;
  margin-top: 12rpx;
  color: $app-color-text-secondary;
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
  color: $app-color-text;
  font-size: 28rpx;
  font-weight: 800;
  line-height: 36rpx;
}

.menu-desc {
  margin-top: 8rpx;
  color: $app-color-text-secondary;
  font-size: 23rpx;
  line-height: 32rpx;
}

.arrow {
  flex-shrink: 0;
  color: $app-color-text-arrow;
  font-size: 42rpx;
  line-height: 42rpx;
}
</style>
