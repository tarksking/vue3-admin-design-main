import type { App } from 'vue'

import { createI18n } from 'vue-i18n'

// setup i18n instance with glob
export function setupI18n(app: App, locale) {
  const i18n = createI18n({ legacy: false, locale })
  app.use(i18n)
}
