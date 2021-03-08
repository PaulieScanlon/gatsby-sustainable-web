export const isExternalLink = (path: string) => {
  if (path.match(/^(http|https):/g)) {
    return true
  }

  return false
}
