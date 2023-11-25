import {blockContent} from './schemas/blockContent'
import {category} from './schemas/category'
import {post} from './schemas/post'
import {author} from './schemas/author'
import { aboutPages } from './schemas/about_us_pages/aboutUsPages'
import { aboutUsPage } from './schemas/about_us_pages/aboutUs'

export const schema = {
  types: [post, author, category, blockContent,aboutUsPage, aboutPages],
}
