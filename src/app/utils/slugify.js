import slugify from "slugify";

export default function slug(str) {
  return slugify(str, {
    replacement: "-",
    remove: undefined,
    lower: true,
    strict: false,
  });
}
