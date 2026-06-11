export const navItems = [
  { key: 'jobs', label: '职位', icon: '⌂', path: '/pages/index/index' },
  { key: 'chat', label: '沟通', icon: '☏', path: '/pages/chat/chat' },
  { key: 'profile', label: '我的', icon: '◉', path: '/pages/profile/profile' }
]

export function navigateByKey(key) {
  const target = navItems.find((item) => item.key === key)

  if (!target) {
    return
  }

  uni.navigateTo({
    url: target.path,
    fail() {
      uni.redirectTo({ url: target.path })
    }
  })
}
