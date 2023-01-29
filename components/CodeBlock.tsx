import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

export default function CodeBlock({ code }) {
  const myHtml = hljs.highlight(code, {
    language: 'typescript'
  }).value;

  return (
    <pre className="ml-4 mb-4 mt-4 text-sm md:text-md max-w-xs md:max-w-2xl">
      <code dangerouslySetInnerHTML={{ __html: myHtml }} />
    </pre>
  );
}
