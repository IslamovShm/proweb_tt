export function getContrastColor(hex) {
  if (hex.length === 4) {
    hex = '#' + [...hex.slice(1)].map((c) => c + c).join('')
  }

  const r = parseInt(hex.substr(1, 2), 16)
  const g = parseInt(hex.substr(3, 2), 16)
  const b = parseInt(hex.substr(5, 2), 16)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 160 ? '#000' : '#fff'
}
