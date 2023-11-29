
import { aboutPages } from './schemas/about_us_pages/aboutUsPages'
import { aboutUsPage } from './schemas/about_us_pages/aboutUs'
import { mainPages } from './schemas/mainPages'
import { innerPages } from './schemas/innerPages'

export const schema = {
  types: [aboutUsPage, aboutPages, mainPages, innerPages],
}
