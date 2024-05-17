import parse from 'html-react-parser';
import sanitizeHtml from 'sanitize-html';

export const sanitizeAndSerializeHTML = (html: string) => {
  const clean = sanitizeHtml(html);
  const sanitizedHtml = parse(clean);

  return sanitizedHtml;
};
