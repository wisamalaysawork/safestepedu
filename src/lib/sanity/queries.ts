export const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id, title, titleEn, description, descriptionEn, icon, order
}`;

export const universitiesQuery = `*[_type == "university"] | order(name asc) {
  _id, name, nameEn, slug, city, cityEn, image, programs, description, descriptionEn
}`;

export const universityBySlugQuery = `*[_type == "university" && slug.current == $slug][0] {
  _id, name, nameEn, slug, city, cityEn, image, programs, description, descriptionEn, details
}`;

export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc) {
  _id, name, nameEn, text, textEn, university, universityEn, image, rating, order
}`;

export const faqsQuery = `*[_type == "faq"] | order(order asc) {
  _id, question, questionEn, answer, answerEn, order
}`;

export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id, title, titleEn, slug, excerpt, excerptEn, publishedAt, mainImage
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id, title, titleEn, slug, body, bodyEn, publishedAt, mainImage, author
}`;
