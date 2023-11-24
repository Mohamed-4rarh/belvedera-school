import {blockContent} from './schemas/blockContent'
import {category} from './schemas/category'
import {post} from './schemas/post'
import {author} from './schemas/author'
import { aboutPage } from './schemas/about_us_pages/about'

export const schema = {
  types: [post, author, category, blockContent, aboutPage],
}
