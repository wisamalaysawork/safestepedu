export const serviceSchema = {
  name: "service",
  title: "خدمة",
  type: "document",
  fields: [
    { name: "title", title: "العنوان", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "titleEn", title: "Title (English)", type: "string" },
    { name: "description", title: "الوصف", type: "text", validation: (Rule: any) => Rule.required() },
    { name: "descriptionEn", title: "Description (English)", type: "text" },
    { name: "icon", title: "أيقونة", type: "string" },
    { name: "order", title: "الترتيب", type: "number" },
  ],
};

export const universitySchema = {
  name: "university",
  title: "جامعة",
  type: "document",
  fields: [
    { name: "name", title: "الاسم", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "nameEn", title: "Name (English)", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" } },
    { name: "city", title: "المدينة", type: "string" },
    { name: "cityEn", title: "City (English)", type: "string" },
    { name: "image", title: "صورة", type: "image", options: { hotspot: true } },
    { name: "description", title: "الوصف", type: "text" },
    { name: "descriptionEn", title: "Description (English)", type: "text" },
    { name: "programs", title: "البرامج", type: "array", of: [{ type: "string" }] },
    { name: "details", title: "تفاصيل إضافية", type: "blockContent" },
  ],
};

export const testimonialSchema = {
  name: "testimonial",
  title: "رأي طالب",
  type: "document",
  fields: [
    { name: "name", title: "الاسم", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "nameEn", title: "Name (English)", type: "string" },
    { name: "text", title: "النص", type: "text", validation: (Rule: any) => Rule.required() },
    { name: "textEn", title: "Text (English)", type: "text" },
    { name: "university", title: "الجامعة", type: "string" },
    { name: "universityEn", title: "University (English)", type: "string" },
    { name: "image", title: "الصورة", type: "image" },
    { name: "rating", title: "التقييم", type: "number", validation: (Rule: any) => Rule.min(1).max(5) },
    { name: "order", title: "الترتيب", type: "number" },
  ],
};

export const faqSchema = {
  name: "faq",
  title: "سؤال شائع",
  type: "document",
  fields: [
    { name: "question", title: "السؤال", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "questionEn", title: "Question (English)", type: "string" },
    { name: "answer", title: "الإجابة", type: "text", validation: (Rule: any) => Rule.required() },
    { name: "answerEn", title: "Answer (English)", type: "text" },
    { name: "order", title: "الترتيب", type: "number" },
  ],
};

export const postSchema = {
  name: "post",
  title: "مقال",
  type: "document",
  fields: [
    { name: "title", title: "العنوان", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "titleEn", title: "Title (English)", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "excerpt", title: "ملخص", type: "text" },
    { name: "excerptEn", title: "Excerpt (English)", type: "text" },
    { name: "body", title: "المحتوى", type: "blockContent" },
    { name: "bodyEn", title: "Content (English)", type: "blockContent" },
    { name: "publishedAt", title: "تاريخ النشر", type: "datetime" },
    { name: "mainImage", title: "الصورة الرئيسية", type: "image", options: { hotspot: true } },
    { name: "author", title: "الكاتب", type: "string" },
  ],
};

export const blockContentSchema = {
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
    },
    { type: "image", options: { hotspot: true } },
  ],
};

export const schemaTypes = [
  serviceSchema,
  universitySchema,
  testimonialSchema,
  faqSchema,
  postSchema,
  blockContentSchema,
];
