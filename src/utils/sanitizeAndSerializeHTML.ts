import parse from 'html-react-parser';
import sanitizeHtml from 'sanitize-html';

// Sanitize and serialize HTML string to React elements to prevent XSS attacks
export const sanitizeAndSerializeHTML = (html: string) => {
  const clean = sanitizeHtml(html);
  const sanitizedHtml = parse(clean);

  return sanitizedHtml;
};
