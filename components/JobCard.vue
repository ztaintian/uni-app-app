<template>
  <view class="job-card" :class="{ featured: job.highlight }">
    <view class="job-head">
      <view class="job-main">
        <text class="job-title">{{ job.title }}</text>
        <text class="job-meta">{{ jobMeta }}</text>
      </view>
      <text class="salary">{{ job.salary }}</text>
    </view>

    <view class="tag-row">
      <text v-for="tag in job.tags" :key="tag" class="tag">{{ tag }}</text>
    </view>

    <view class="company-row">
      <view class="logo">{{ companyInitial }}</view>
      <view class="company-main">
        <text class="company-name">{{ job.company }}</text>
        <text class="company-meta">{{ companyMeta }}</text>
      </view>
    </view>

    <view class="recruiter-row">
      <text class="recruiter">{{ job.recruiter }} · {{ job.role }}</text>
      <text class="active-time">{{ job.activeAt }}</text>
    </view>
  </view>
</template>

<script setup>
import { computed } from 'vue'
import { formatCompanyMeta, formatJobMeta } from '@/utils/job.js'

const props = defineProps({
  job: {
    type: Object,
    required: true
  }
})

const jobMeta = computed(() => formatJobMeta(props.job))
const companyMeta = computed(() => formatCompanyMeta(props.job))
const companyInitial = computed(() => props.job.company.slice(0, 1))
</script>

<style lang="scss" scoped>
.job-card {
  padding: 28rpx;
  background: $app-color-surface;
  border: 1rpx solid $app-color-border;
  border-radius: $app-radius-card;
}

.job-card.featured {
  border-color: $app-color-primary-border;
  box-shadow: $app-shadow-featured;
}

.job-head,
.company-row,
.recruiter-row {
  display: flex;
  align-items: center;
}

.job-head {
  justify-content: space-between;
  gap: 20rpx;
}

.job-main,
.company-main {
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
}

.job-title {
  color: $app-color-text-card-title;
  font-size: 34rpx;
  font-weight: 700;
  line-height: 44rpx;
}

.job-meta,
.company-meta,
.active-time {
  margin-top: 8rpx;
  color: $app-color-text-secondary;
  font-size: 24rpx;
  line-height: 32rpx;
}

.salary {
  flex-shrink: 0;
  color: $app-color-primary;
  font-size: 32rpx;
  font-weight: 700;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12rpx;
  margin-top: 22rpx;
}

.tag {
  padding: 8rpx 14rpx;
  color: $app-color-text-tag;
  font-size: 22rpx;
  line-height: 28rpx;
  background: $app-color-surface-muted;
  border-radius: $app-radius-tag;
}

.company-row {
  gap: 18rpx;
  margin-top: 26rpx;
  padding-top: 24rpx;
  border-top: 1rpx solid $app-color-border-light;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 68rpx;
  height: 68rpx;
  color: $app-color-surface;
  font-size: 28rpx;
  font-weight: 700;
  background: $app-color-brand-deep;
  border-radius: $app-radius-card;
}

.company-name,
.recruiter {
  color: $app-color-text-card;
  font-size: 26rpx;
  line-height: 34rpx;
}

.recruiter-row {
  justify-content: space-between;
  gap: 16rpx;
  margin-top: 22rpx;
}

.active-time {
  flex-shrink: 0;
  margin-top: 0;
}
</style>
