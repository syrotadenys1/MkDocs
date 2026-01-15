function renderMath() {
  if (typeof renderMathInElement !== 'function') {
    return;
  }
  renderMathInElement(document.body, {
    delimiters: [
      {left: '$$', right: '$$', display: true},
      {left: '\\[', right: '\\]', display: true},
      {left: '$', right: '$', display: false},
      {left: '\\(', right: '\\)', display: false}
    ],
    throwOnError: false
  });
}

// Initial render
document.addEventListener('DOMContentLoaded', renderMath);

// Re-render on navigation for Material for MkDocs
if (typeof document$ !== 'undefined') {
  document$.subscribe(function() {
    renderMath();
  });
}
