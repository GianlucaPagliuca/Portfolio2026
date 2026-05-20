 // ── MILAN MODE ──────────────────────────────────────────────────
const isMilan = new URLSearchParams(window.location.search).get('milan') === 'true';

window.document.onload = () => {
  if (isMilan) {
    // Show the relocation paragraph in About
    document.getElementById('milan-para').style.display = 'block';
    // Update location aside
    document.getElementById('location-text').innerHTML = 'Corby, UK · Relocating to Milan, Italy<br/><small style="color:var(--accent);font-size:0.8em">Italian citizenship in progress (jure sanguinis)</small>';
    // Update contact section copy
    document.getElementById('contact-sub').textContent =
      'Open to front-end, full-stack and game development roles in Milan, Italy, the UK, or remotely. Drop me a message, I respond to every enquiry.';
  }
};



// Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  reveals.forEach(el => observer.observe(el));