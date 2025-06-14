import { SITE, APP_BLOG } from "neko-hi:config";
import slugify from 'limax';
import { trim } from '~/utils/utils';
export const getCanonical = (path = ""): string | URL => {
  const url = String(new URL(path, SITE.site));
  if (SITE.trailingSlash == false && path && url.endsWith("/")) {
    return url.slice(0, -1);
  } else if (SITE.trailingSlash == true && path && !url.endsWith("/")) {
    return url + "/";
  }
  return url;
};
export const cleanSlug = (text = '') =>
  trimSlash(text)
    .split('/')
    .map((slug) => slugify(slug))
    .join('/');
const BASE_PATHNAME = SITE.base || '/';
export const trimSlash = (s: string) => trim(trim(s, '/'));

export const BLOG_BASE = cleanSlug(APP_BLOG?.list?.pathname);
export const POST_PERMALINK_PATTERN = trimSlash(APP_BLOG?.post?.permalink || `${BLOG_BASE}/%slug%`);
export const getAsset = (path: string): string =>
  '/' +
  [BASE_PATHNAME, path]
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
