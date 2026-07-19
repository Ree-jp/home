<script lang="ts">
  import Badge from '$lib/components/Badge.svelte';
  import ImageWithFallback from '$lib/components/ImageWithFallback.svelte';
  import { page } from '$app/state';
  import { goto } from '$app/navigation';

  let { data } = $props();
  let post = $derived(data.post);
  let related = $derived(data.related);

  let passwordInput = $state('');

  let isLocked = $derived(!data.unlocked);

  $effect(() => {
    if (data.unlocked && page.url.searchParams.has('password')) {
      const clean = new URL(page.url.href);
      clean.searchParams.delete('password');
      history.replaceState(history.state, '', clean.toString());
    }
  });

  function submitPassword() {
    const url = new URL(page.url.href);
    url.searchParams.set('password', passwordInput);
    goto(url.toString());
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter') submitPassword();
  }
</script>

<svelte:head>
  <title>{post.title} | reesuke</title>
  {#if post.isPasswordProtected}
    <meta name="robots" content="noindex,follow" />
  {/if}
  {#if !isLocked && post.content.includes('twitter-tweet')}
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  {/if}
</svelte:head>

<div class="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-[60px] pb-20">
  <div class="flex items-center justify-between mb-10">
    <a
      href="/blog"
      class="font-display text-[20px] md:text-[24px] text-black/60 hover:text-black transition-colors"
    >
      ← Back to Blog
    </a>
    <a
      href="/"
      class="font-display text-[14px] md:text-[16px] text-black/50 hover:text-black transition-colors"
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
        {#if post.isPasswordProtected}
          <span class="text-sm text-black/40">·</span>
          <span class="text-xs text-black/40">🔒 protected</span>
        {/if}
      </div>

      <h1 class="font-sans text-[32px] md:text-[56px] leading-[1.15] text-black mb-6">
        {post.title}
      </h1>

      <p class="text-black/70 text-[16px] md:text-[18px] leading-relaxed mb-10">{post.excerpt}</p>
    </div>

    {#if post.image}
      <div class="relative aspect-[16/9] overflow-hidden rounded-2xl mb-12">
        <ImageWithFallback src={post.image} alt={post.title} class="w-full h-full object-cover" />
      </div>
    {/if}

    {#if isLocked}
      <div class="flex flex-col items-center justify-center py-20 gap-6">
        <span class="text-5xl">🔒</span>
        <p class="font-sans text-[18px] text-black/70">
          この記事はパスワードで保護されています
        </p>
        {#if data.wrongPassword}
          <p class="text-sm text-red-500">パスワードが違います</p>
        {/if}
        <div class="flex gap-3 w-full max-w-sm">
          <input
            type="password"
            placeholder="パスワードを入力"
            bind:value={passwordInput}
            onkeydown={handleKeydown}
            class="flex-1 border border-black/30 rounded-none px-4 py-2 text-sm outline-none focus:border-black transition-colors"
          />
          <button
            onclick={submitPassword}
            class="px-5 py-2 bg-black text-white text-sm hover:bg-black/80 transition-colors"
          >
            解錠
          </button>
        </div>
      </div>
    {:else}
      <div class="prose-content text-black/85 text-[16px] md:text-[17px] leading-[1.9]">
        {@html post.content}
      </div>
    {/if}

    <div class="border-t border-black/20 mt-16 pt-8 flex items-center justify-between">
      <a
        href="/blog"
        class="font-display text-[16px] md:text-[18px] text-black/60 hover:text-black transition-colors"
      >
        ← Back to Blog
      </a>
      <span class="text-sm text-black/40">{post.date}</span>
    </div>
  </article>

  {#if related.length > 0}
    <div class="mt-20 md:mt-28">
      <p class="font-display text-[20px] md:text-[24px] text-black/80 mb-6">Read more</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each related as r}
          <a href="/blog/{r.slug}" class="group block w-full text-left">
            <div class="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4">
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
