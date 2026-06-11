export function formatJobMeta(job) {
  return [job.location, job.experience, job.education].filter(Boolean).join(' | ')
}

export function formatCompanyMeta(job) {
  return [job.stage, job.size, job.industry].filter(Boolean).join(' | ')
}

export function searchJobs(jobs, keyword) {
  const value = keyword.trim().toLowerCase()

  if (!value) {
    return jobs
  }

  return jobs.filter((job) => {
    const source = [
      job.title,
      job.company,
      job.location,
      job.industry,
      ...(job.tags || [])
    ].join(' ').toLowerCase()

    return source.includes(value)
  })
}

export function filterJobsByChip(jobs, chip) {
  if (!chip) {
    return jobs
  }

  return jobs.filter((job) => {
    const source = [
      job.title,
      job.experience,
      job.education,
      job.salary,
      ...(job.tags || [])
    ].join(' ')

    return source.includes(chip)
  })
}

export function getGreeting(date = new Date()) {
  const hour = date.getHours()

  if (hour < 11) return '早上好，今天看看新机会'
  if (hour < 18) return '下午好，合适岗位正在更新'
  return '晚上好，轻松筛一批好岗位'
}
