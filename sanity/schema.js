
import { aboutPages } from './schemas/about_us_pages/aboutUsPages'
import { aboutUsPage } from './schemas/about_us_pages/aboutUs'
import { mainPages } from './schemas/mainPages'

export const schema = {
  types: [aboutUsPage, aboutPages, mainPages],
}
