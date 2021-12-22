import { defineClientAppEnhance } from '@vuepress/client';
import KfsUi from 'kfs-ui/lib'
import 'kfs-ui/lib/index.css'

export default defineClientAppEnhance(({
  app,
  router,
  siteData,
}) => {
  app.use(KfsUi)
})
