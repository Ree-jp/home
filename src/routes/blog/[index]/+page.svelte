<script lang="ts">
  import Badge from '$lib/components/Badge.svelte';
  import ImageWithFallback from '$lib/components/ImageWithFallback.svelte';

  let { data } = $props();
  // $derived を使って data の変更に追従させる
  let post = $derived(data.post);
  let related = $derived(data.related);
</script>

<svelte:head>
  <title>{post.title} | reesuke</title>
</svelte:head>

<div class="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-[60px] pb-20">
  <div class="flex items-center justify-between mb-10">
    <a
      href="/blog"
      class="font-['Reem_Kufi_Ink',_sans-serif] text-[20px] md:text-[24px] text-black/60 hover:text-black transition-colors"
    >
      ← Back to Blog
    </a>
    <a
      href="/"
      class="font-['Reem_Kufi_Ink',_sans-serif] text-[14px] md:text-[16px] text-black/50 hover:text-black transition-colors"
    >
      ← reesuke
    </a>
  </div>

  <article class="max-w-[820px] mx-auto">
    <div class="border-t-2 border-black/80 pt-8 mb-6">
      <div class="flex items-center gap-3 mb-6">
        <Badge variant="outline" class="bg-white rounded-none text-xs px-2 py-1">{post.category}</Badge>
        <span class="text-sm text-black/50">{post.date}</span>
        <span class="text-sm text-black/40">·</span>
        <span class="text-sm text-black/50">{post.readTime}</span>
      </div>

      <h1 class="font-['Noto_Sans_JP',_sans-serif] text-[32px] md:text-[56px] leading-[1.15] text-black mb-6">
        {post.title}
      </h1>

      <p class="text-black/70 text-[16px] md:text-[18px] leading-relaxed mb-10">{post.excerpt}</p>
    </div>

    <div class="relative aspect-[16/9] overflow-hidden mb-12">
      <ImageWithFallback src={post.image} alt={post.title} class="w-full h-full object-cover" />
    </div>

    <div class="text-black/85 text-[16px] md:text-[17px] leading-[1.9] space-y-6">
      <p class="text-black/50 text-sm border-l-2 border-black/30 pl-4">
        ※ 以下は本文のレイアウト確認用ダミーテキストです。実際の記事に差し替えてください。
      </p>

      <h2 class="font-['Reem_Kufi_Ink',_sans-serif] text-[28px] md:text-[32px] text-black pt-4">はじめに</h2>
      <p>
        ここは本文の最初の段落です。Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p>
        段落の2つめです。あいうえおかきくけこさしすせそたちつてとなにぬねの。これはサンプルの本文で、実際の記事に置き換えるとそれっぽい見た目になるはずです。
      </p>

      <h2 class="font-['Reem_Kufi_Ink',_sans-serif] text-[28px] md:text-[32px] text-black pt-4">
        セクション見出しのサンプル
      </h2>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>

      <blockquote class="border-l-4 border-black pl-6 italic text-black/70 my-8">
        これは引用ブロックのサンプルです。記事内で誰かの言葉や重要なフレーズを強調するときに使えます。
      </blockquote>

      <h3 class="font-['Reem_Kufi_Ink',_sans-serif] text-[22px] md:text-[24px] text-black pt-2">
        リストのサンプル
      </h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>箇条書きの項目その1</li>
        <li>箇条書きの項目その2</li>
        <li>箇条書きの項目その3 — 少し長めのテキストもこんな感じで折り返されます</li>
      </ul>

      <h3 class="font-['Reem_Kufi_Ink',_sans-serif] text-[22px] md:text-[24px] text-black pt-2">
        コードブロックのサンプル
      </h3>
      <pre class="bg-black text-white p-5 overflow-x-auto text-sm leading-relaxed">{`// sample code
function hello(name: string) {
  return \`Hello, \${name}!\`;
}`}</pre>

      <h2 class="font-['Reem_Kufi_Ink',_sans-serif] text-[28px] md:text-[32px] text-black pt-4">まとめ</h2>
      <p>
        ここに記事のまとめを書きます。読者へのメッセージや今後の展望などを添えると、記事として収まりがよくなります。
      </p>
    </div>

    <div class="border-t border-black/20 mt-16 pt-8 flex items-center justify-between">
      <a
        href="/blog"
        class="font-['Reem_Kufi_Ink',_sans-serif] text-[16px] md:text-[18px] text-black/60 hover:text-black transition-colors"
      >
        ← Back to Blog
      </a>
      <span class="text-sm text-black/40">{post.date}</span>
    </div>
  </article>

  {#if related.length > 0}
    <div class="mt-20 md:mt-28">
      <p class="font-['Reem_Kufi_Ink',_sans-serif] text-[20px] md:text-[24px] text-black/80 mb-6">Read more</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each related as { post: r, index: i }}
          <a href="/blog/{i}" class="group block w-full text-left">
            <div class="relative aspect-[4/3] overflow-hidden mb-4">
              <ImageWithFallback
                src={r.image}
                alt={r.title}
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p class="text-xs text-black/50 mb-1">{r.category} · {r.date}</p>
            <h4 class="text-[16px] md:text-[18px] text-black group-hover:underline decoration-2 underline-offset-4">
              {r.title}
            </h4>
          </a>
        {/each}
      </div>
    </div>
  {/if}
</div>
