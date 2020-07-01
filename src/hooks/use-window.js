import { useState, useEffect } from "react"

// Default window obj
const defaultWindow = {
  width: 0,
  height: 0,
}

// Default mobile object
const defaultMobile = {
  ...defaultWindow,
  view: "mobile",
}
// Default desktop object
const defaultDesktop = {
  ...defaultWindow,
  view: "desktop",
}

// Returns updated window obj or default
const getSize = windowObj =>
  !!windowObj
    ? {
        width: windowObj.innerWidth,
        height: windowObj.innerHeight,
        view: windowObj.innerWidth < 768 ? "mobile" : "desktop",
      }
    : defaultDesktop

// Checks if user-agent indicated mobile browser
const checkUAisMobile = ua => {
  const uaString = !!ua ? ua.toLowerCase() : null
  const MOBILE = "mobi"
  const ANDROID = "android"
  const IOS = "ios"
  return (
    !!uaString &&
    (uaString.indexOf(MOBILE) !== -1 ||
      uaString.indexOf(ANDROID) !== -1 ||
      uaString.indexOf(IOS) !== -1)
  )
}

/**
 * Custom hook to return window obj properties to determine layout styling
 * Requires null or undefined check due to SSR and rehydration
 * Window required for dimensions
 * Navigator.userAgent required for UA string to determine mobile device without window obj
 * Returns windowSize state obj from effect
 * Adds resize listener and cleans up listener
 * @param {*} window
 */
export const useWindow = window => {
  const resizeEvent = "resize"
  const ua = typeof navigator !== "undefined" ? navigator.userAgent : null
  const isWindow = typeof window !== "undefined"
  const isMobile = checkUAisMobile(ua)
  const defaultWindow = !isWindow && isMobile ? defaultMobile : defaultDesktop
  const windowSizeToUse = isWindow ? getSize(window) : defaultWindow
  const [windowSize, setWindowSize] = useState(windowSizeToUse)

  useEffect(() => {
    if (isWindow) {
      window.addEventListener(resizeEvent, () => setWindowSize(getSize(window)))
    }
    return () => {
      if (isWindow) {
        window.removeEventListener(resizeEvent, () =>
          setWindowSize(getSize(window))
        )
      }
    }
  }, [window, isWindow])

  return windowSize
}

export default useWindow
