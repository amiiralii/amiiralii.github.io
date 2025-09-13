// Remove Hugo Blox Builder attribution from footer
document.addEventListener('DOMContentLoaded', function() {
  // Find all powered-by paragraphs
  const poweredByElements = document.querySelectorAll('.powered-by.text-center');
  
  poweredByElements.forEach(function(element) {
    // Check if this element contains Hugo Blox Builder attribution
    const hugoBloxLink = element.querySelector('a[href*="hugoblox.com"]');
    if (hugoBloxLink) {
      // Remove the entire paragraph containing the attribution
      element.remove();
    }
  });
});
