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

<style scoped>
.job-card {
  padding: 28rpx;
  background: #ffffff;
  border: 1rpx solid #e8eef0;
  border-radius: 8rpx;
}

.job-card.featured {
  border-color: #bceeee;
  box-shadow: 0 10rpx 26rpx rgba(0, 166, 166, 0.1);
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
  color: #14292d;
  font-size: 34rpx;
  font-weight: 700;
  line-height: 44rpx;
}

.job-meta,
.company-meta,
.active-time {
  margin-top: 8rpx;
  color: #728286;
  font-size: 24rpx;
  line-height: 32rpx;
}

.salary {
  flex-shrink: 0;
  color: #00a6a6;
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
  color: #52666a;
  font-size: 22rpx;
  line-height: 28rpx;
  background: #f2f6f7;
  border-radius: 4rpx;
}

.company-row {
  gap: 18rpx;
  margin-top: 26rpx;
  padding-top: 24rpx;
  border-top: 1rpx solid #edf2f3;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 68rpx;
  height: 68rpx;
  color: #ffffff;
  font-size: 28rpx;
  font-weight: 700;
  background: #243b53;
  border-radius: 8rpx;
}

.company-name,
.recruiter {
  color: #263b3f;
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
