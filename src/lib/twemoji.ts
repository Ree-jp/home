/* テキスト中の絵文字を Twemoji の SVG 画像（jsDelivr CDN 配信）に差し替える。
 *
 * 画像ファイル名は codepoint を '-' で繋いだもの（例: 1f44b.svg）。
 * Twemoji は単独絵文字の FE0F（異体字セレクタ）をファイル名から省くため、
 * まず入力そのままの名前で読み、404 なら FE0F を除いた名前でリトライ、
 * それでもダメなら元のテキストに戻す（CDN 障害時もテキスト絵文字に戻るだけ）。
 *
 * \p{RGI_Emoji}（v フラグ）が使えない古いブラウザでは何もしない（OS 絵文字のまま）。
 */

const CDN_BASE = 'https://cdn.jsdelivr.net/npm/@twemoji/svg@15.0.0';

const EMOJI_RE = (() => {
  try {
    return new RegExp('\\p{RGI_Emoji}', 'gv');
  } catch {
    return null;
  }
})();

const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'TEXTAREA', 'NOSCRIPT', 'CODE', 'PRE']);

function toCodePoints(seq: string): string[] {
  return [...seq].map((c) => c.codePointAt(0)!.toString(16));
}

function createEmojiImg(seq: string): HTMLImageElement {
  const img = document.createElement('img');
  img.className = 'emoji';
  img.alt = seq;
  img.draggable = false;
  const full = toCodePoints(seq).join('-');
  const stripped = toCodePoints(seq)
    .filter((cp) => cp !== 'fe0f')
    .join('-');
  img.onerror = () => {
    if (stripped !== full && !img.dataset.retried) {
      img.dataset.retried = '1';
      img.src = `${CDN_BASE}/${stripped}.svg`;
    } else {
      img.replaceWith(document.createTextNode(seq));
    }
  };
  img.src = `${CDN_BASE}/${full}.svg`;
  return img;
}

function processTextNode(node: Text) {
  if (!EMOJI_RE) return;
  const text = node.data;
  EMOJI_RE.lastIndex = 0;
  if (!EMOJI_RE.test(text)) return;

  const frag = document.createDocumentFragment();
  let last = 0;
  EMOJI_RE.lastIndex = 0;
  for (const m of text.matchAll(EMOJI_RE)) {
    if (m.index > last) frag.append(text.slice(last, m.index));
    frag.append(createEmojiImg(m[0]));
    last = m.index + m[0].length;
  }
  if (last < text.length) frag.append(text.slice(last));
  node.replaceWith(frag);
}

function walk(root: Node) {
  if (root.nodeType === Node.TEXT_NODE) {
    processTextNode(root as Text);
    return;
  }
  if (root.nodeType !== Node.ELEMENT_NODE) return;
  if (SKIP_TAGS.has((root as Element).tagName)) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) =>
      n.parentElement && SKIP_TAGS.has(n.parentElement.tagName)
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_ACCEPT
  });
  const targets: Text[] = [];
  let n: Node | null;
  while ((n = walker.nextNode())) targets.push(n as Text);
  targets.forEach(processTextNode);
}

/** body 全体を変換し、以降の DOM 変化（ページ遷移など）も監視する。cleanup 関数を返す。 */
export function initTwemoji(): () => void {
  if (!EMOJI_RE) return () => {};
  walk(document.body);
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) m.addedNodes.forEach(walk);
  });
  observer.observe(document.body, { childList: true, subtree: true });
  return () => observer.disconnect();
}
