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
  // Try multiple selectors to find the sharing section
  const sharingSectionSelectors = [
    'section.flex.flex-row.flex-wrap.justify-center.pt-4.text-xl',
    'section:has(a[id*="share-link"])',
    'section:has(a[href*="facebook.com/sharer"])',
    'section:has(a[href*="linkedin.com/shareArticle"])',
    'section:has(a[href*="whatsapp://send"])'
  ];
  
  let sharingSection = null;
  for (const selector of sharingSectionSelectors) {
    sharingSection = document.querySelector(selector);
    if (sharingSection) break;
  }
  
  // Also try finding by sharing links directly
  if (!sharingSection) {
    const sharingLinks = document.querySelectorAll('a[id*="share-link"]');
    if (sharingLinks.length > 0) {
      // Find the parent section of the first sharing link
      sharingSection = sharingLinks[0].closest('section');
    }
  }
  
  if (sharingSection) {
    // Remove the entire sharing section
    sharingSection.remove();
    console.log('Social sharing section removed');
  } else {
    // Fallback: remove individual sharing links
    const allSharingLinks = document.querySelectorAll('a[id*="share-link"], a[href*="facebook.com/sharer"], a[href*="linkedin.com/shareArticle"], a[href*="whatsapp://send"], a[href*="mailto:"][title="Email"]');
    allSharingLinks.forEach(link => link.remove());
    console.log('Individual sharing links removed:', allSharingLinks.length);
  }

  // Make inline links look like normal text
  const contentLinks = document.querySelectorAll('p a, .content a, main a, article a');
  contentLinks.forEach(function(link) {
    // Skip button-style links
    if (!link.classList.contains('btn') && !link.classList.contains('button')) {
      link.style.color = 'inherit';
      link.style.textDecoration = 'none';
      link.style.fontWeight = 'inherit';
      link.style.fontSize = 'inherit';
      
      // Add hover effect
      link.addEventListener('mouseenter', function() {
        this.style.textDecoration = 'underline';
      });
      link.addEventListener('mouseleave', function() {
        this.style.textDecoration = 'none';
      });
    }
  });
});
