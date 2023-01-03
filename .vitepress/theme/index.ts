import { EnhanceAppContext } from 'vitepress'

import './tailwind.postcss'
import './custom.css'

import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx)
  }  
}
