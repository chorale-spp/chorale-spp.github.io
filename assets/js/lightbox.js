// Lightbox functionality
function openLightbox(src, caption) {
  var lb = document.getElementById('lightbox');
  var img = document.getElementById('lightboxImg');
  if (!lb || !img) return;
  img.src = src;
  img.alt = caption || '';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  if (e && e.target !== e.currentTarget && e.target.tagName === 'IMG') return;
  var lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});
