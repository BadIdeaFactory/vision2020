/* global VISION2020_KIOSK */
export function isKiosk () {
  return typeof VISION2020_KIOSK !== 'undefined' && VISION2020_KIOSK === true
}
