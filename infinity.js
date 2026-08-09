'use strict';

function addBeginningOfInfinity() {
  const thinkerGrid = document.querySelector('#thinkerGrid');
  const bookshelf = document.querySelector('#bookshelf');
  const timeline = document.querySelector('#timeline');
  const sources = document.querySelector('#sources');
  if (!thinkerGrid || !bookshelf || !timeline || !sources) return;

  if (!document.querySelector('[data-deutsch-thinker]')) {
    thinkerGrid.insertAdjacentHTML('beforeend', `<article class="card" data-deutsch-thinker><div class="initials">DD</div><div class="meta">1953–</div><h3>David Deutsch</h3><div class="role">Physicist · philosopher · quantum computation pioneer</div><p class="saying">“Problems are inevitable. Problems are soluble.”</p><div class="cardfoot"><div><small>Read next</small><strong>The Beginning of Infinity · 2011</strong></div><a class="src" target="_blank" rel="noopener" href="https://www.daviddeutsch.org.uk/books/the-beginning-of-infinity/">SOURCE ↗</a></div></article>`);
  }

  if (!document.querySelector('[data-infinity-book]')) {
    bookshelf.insertAdjacentHTML('beforeend', `<article class="book" data-infinity-book><div class="year">2011</div><h3>The Beginning of Infinity</h3><div class="author">David Deutsch</div><p>A sweeping argument for open-ended progress through good explanations, criticism, creativity and error correction. Its relevance to scientific integrity is profound: knowledge grows when claims remain open to criticism and mistakes become opportunities for better explanations.</p><b>Explanations · Progress · Error correction</b></article>`);
  }

  if (!document.querySelector('[data-infinity-time]')) {
    timeline.insertAdjacentHTML('beforeend', `<article class="time" data-infinity-time><div class="year">2011</div><h3>Open-ended knowledge</h3><p>Deutsch argues that progress has no predetermined ceiling when people can create good explanations, expose them to criticism and correct errors.</p><div class="meta">The Beginning of Infinity</div></article>`);
  }

  if (!document.querySelector('[data-deutsch-source]')) {
    sources.insertAdjacentHTML('beforeend', `<div class="source" data-deutsch-source><div><strong>David Deutsch</strong><span>The Beginning of Infinity</span></div><a href="https://www.daviddeutsch.org.uk/books/the-beginning-of-infinity/" target="_blank" rel="noopener">OPEN ↗</a></div>`);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(addBeginningOfInfinity, 0));
} else {
  setTimeout(addBeginningOfInfinity, 0);
}
