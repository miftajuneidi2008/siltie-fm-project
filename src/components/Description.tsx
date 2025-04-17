"use client";
import DOMPurify from "dompurify";
const Description = ({desc}:{desc: string}) => {
      const sanitizedHTML = DOMPurify.sanitize(desc);
  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
      className="max-w-[800px] text-[14px] leading-7 text-slate-600 max-sm:w-full"
    />
  );
};

export default Description;
