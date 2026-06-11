<template>
  <view class="page">
    <view class="hero">
      <view class="hero-top">
        <view>
          <text class="eyebrow">{{ greeting }}</text>
          <text class="title">找工作，直接聊</text>
        </view>
        <view class="city-pill">杭州</view>
      </view>

      <AppSearchBar v-model="keyword" />

      <view class="stats">
        <view v-for="item in stats" :key="item.label" class="stat-item">
          <text class="stat-value">{{ item.value }}</text>
          <text class="stat-label">{{ item.label }}</text>
        </view>
      </view>
    </view>

    <view class="tabs">
      <button
        v-for="tab in jobTabs"
        :key="tab"
        class="tab"
        :class="{ active: tab === activeTab }"
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </view>

    <view class="section">
      <FilterChips
        :chips="filterChips"
        :active-chip="activeChip"
        @select="toggleChip"
      />
    </view>

    <view class="job-list">
      <JobCard v-for="job in visibleJobs" :key="job.id" :job="job" />
      <view v-if="visibleJobs.length === 0" class="empty">
        <text class="empty-title">没有找到匹配岗位</text>
        <text class="empty-desc">换个关键词或筛选条件试试</text>
      </view>
    </view>

    <BottomNav :active-key="activeNav" @change="activeNav = $event" />
  </view>
</template>

<script setup>
import { computed, ref } from 'vue'
import AppSearchBar from '@/components/AppSearchBar.vue'
import BottomNav from '@/components/BottomNav.vue'
import FilterChips from '@/components/FilterChips.vue'
import JobCard from '@/components/JobCard.vue'
import { filterChips, jobs, jobTabs } from '@/data/jobs.js'
import { filterJobsByChip, getGreeting, searchJobs } from '@/utils/job.js'

const keyword = ref('')
const activeTab = ref(jobTabs[0])
const activeChip = ref(filterChips[0])
const activeNav = ref('jobs')

const greeting = getGreeting()

const stats = [
  { value: '3.8万', label: '在线岗位' },
  { value: '96%', label: '今日回复' },
  { value: '12', label: '适合你' }
]

const visibleJobs = computed(() => {
  const keywordJobs = searchJobs(jobs, keyword.value)
  return filterJobsByChip(keywordJobs, activeChip.value)
})

function toggleChip(chip) {
  activeChip.value = activeChip.value === chip ? '' : chip
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  padding: 28rpx 28rpx 148rpx;
  background: #f5f8f8;
  box-sizing: border-box;
}

.hero {
  padding: 30rpx;
  color: #143034;
  background: linear-gradient(135deg, #dffafa 0%, #ffffff 62%);
  border: 1rpx solid #d8eeee;
  border-radius: 8rpx;
}

.hero-top,
.stats,
.tabs {
  display: flex;
  align-items: center;
}

.hero-top {
  justify-content: space-between;
  gap: 24rpx;
  margin-bottom: 28rpx;
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

.city-pill {
  flex-shrink: 0;
  padding: 14rpx 22rpx;
  color: #007f82;
  font-size: 24rpx;
  line-height: 28rpx;
  background: #ffffff;
  border-radius: 6rpx;
}

.stats {
  justify-content: space-between;
  margin-top: 30rpx;
  padding-top: 26rpx;
  border-top: 1rpx solid rgba(0, 166, 166, 0.14);
}

.stat-item {
  display: flex;
  min-width: 0;
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

.tabs {
  gap: 10rpx;
  margin-top: 26rpx;
}

.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 104rpx;
  height: 58rpx;
  margin: 0;
  padding: 0 10rpx;
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

.section {
  margin-top: 18rpx;
}

.job-list {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
  margin-top: 22rpx;
}

.empty {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60rpx 24rpx;
  background: #ffffff;
  border: 1rpx solid #e8eef0;
  border-radius: 8rpx;
}

.empty-title {
  color: #273f43;
  font-size: 30rpx;
  font-weight: 700;
  line-height: 38rpx;
}

.empty-desc {
  margin-top: 10rpx;
  color: #74868a;
  font-size: 24rpx;
  line-height: 32rpx;
}
</style>
