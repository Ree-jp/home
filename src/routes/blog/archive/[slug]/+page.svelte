<script lang="ts">
  import type { PageData } from './$types';
  import type { WPPost } from '$lib/types/wordpress';
  import ImageWithFallback from '$lib/components/ImageWithFallback.svelte';
  import Badge from '$lib/components/Badge.svelte';
  import { page } from '$app/state';

  let { data }: { data: PageData } = $props();

  function getTitle(post: WPPost): string {
    return post.title.rendered.replace(/<[^>]*>/g, '');
  }

  function getImage(post: WPPost): string {
    return post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? '';
  }

  function getCategory(post: WPPost): string {
    return post._embedded?.['wp:term']?.[0]?.[0]?.name ?? '';
  }

  function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  let title = $derived(getTitle(data.post));
  let image = $derived(getImage(data.post));
  let category = $derived(getCategory(data.post));
  let date = $derived(formatDate(data.post.date));
</script>

<svelte:head>
  <title>{title} | reesuke</title>
  {#if page.url.searchParams.has('category')}
    <meta name="robots" content="noindex,follow" />
  {/if}
</svelte:head>

<div class="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-[60px] pb-20">
  <div class="flex items-center justify-between mb-10">
    <a
      href={data.archiveHref}
      class="font-display text-[20px] md:text-[24px] text-black/60 hover:text-black transition-colors"
    >
      ← Archive
    </a>
    <a
      href={data.post.link}
      target="_blank"
      rel="noopener noreferrer"
      class="font-display text-[13px] text-black/40 hover:text-black transition-colors underline underline-offset-4"
    >
      元記事を見る ↗
    </a>
  </div>

  <article class="max-w-[820px] mx-auto">
    <div class="border-t-2 border-black/80 pt-8 mb-6">
      <div class="flex items-center gap-3 mb-6">
        {#if category}
          <Badge variant="outline" class="bg-white rounded-none text-xs px-2 py-1">{category}</Badge>
        {/if}
        <span class="text-sm text-black/50">{date}</span>
      </div>

      <h1 class="font-sans text-[28px] md:text-[48px] leading-[1.2] text-black mb-6">
        {title}
      </h1>
    </div>

    {#if image}
      <div class="relative aspect-[16/9] overflow-hidden rounded-2xl mb-12">
        <ImageWithFallback src={image} alt={title} class="w-full h-full object-cover" />
      </div>
    {/if}

    <div class="wp-content">
      {@html data.post.content.rendered}
    </div>

    <div class="border-t border-black/20 mt-16 pt-8 flex items-center justify-between">
      <a
        href={data.archiveHref}
        class="font-display text-[16px] md:text-[18px] text-black/60 hover:text-black transition-colors"
      >
        ← Archive
      </a>
      <span class="text-sm text-black/40">{date}</span>
    </div>
  </article>
</div>
