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

  // Remove social sharing buttons from publication pages
  const sharingSection = document.querySelector('section.flex.flex-row.flex-wrap.justify-center.pt-4.text-xl');
  if (sharingSection) {
    // Check if this section contains social sharing links
    const sharingLinks = sharingSection.querySelectorAll('a[id*="share-link"]');
    if (sharingLinks.length > 0) {
      // Remove the entire sharing section
      sharingSection.remove();
    }
  }
});
