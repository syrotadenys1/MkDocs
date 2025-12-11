document.addEventListener('DOMContentLoaded', function () {
  if (typeof renderMathInElement !== 'function') return;
  try {
    renderMathInElement(document.body, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '\\[', right: '\\]', display: true},
        {left: '$', right: '$', display: false},
        {left: '\\(', right: '\\)', display: false}
      ],
      throwOnError: false
    });
  } catch (e) {
    console.warn('KaTeX render error:', e);
  }
});
