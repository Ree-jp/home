<script lang="ts">
  import type { PageData } from './$types';
  import type { WPPost } from '$lib/types/wordpress';
  import Badge from '$lib/components/Badge.svelte';
  import ImageWithFallback from '$lib/components/ImageWithFallback.svelte';

  let { data }: { data: PageData } = $props();

  function categoryHref(slug: string): string {
    const next = data.categorySlugs.includes(slug)
      ? data.categorySlugs.filter((s) => s !== slug)
      : [...data.categorySlugs, slug];
    if (next.length === 0) return '/blog/archive';
    return '/blog/archive?' + next.map((s) => `category=${encodeURIComponent(s)}`).join('&');
  }

  function pageHref(p: number): string {
    const categoryParams = data.categorySlugs.map((s) => `category=${encodeURIComponent(s)}`).join('&');
    return categoryParams ? `/blog/archive?${categoryParams}&page=${p}` : `/blog/archive?page=${p}`;
  }

  function getTitle(post: WPPost): string {
    return post.title.rendered.replace(/<[^>]*>/g, '');
  }

  function getExcerpt(post: WPPost): string {
    return post.excerpt.rendered.replace(/<[^>]*>/g, '').trim();
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
</script>

<svelte:head>
  <title>Archive | reesuke</title>
</svelte:head>

<div class="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-[60px] pb-20">
  <div class="flex items-center justify-between mb-10">
    <a
      href="/blog"
      class="font-['Reem_Kufi_Ink',_sans-serif] text-[20px] md:text-[24px] text-black/60 hover:text-black transition-colors"
    >
      ← Blog
    </a>
    <p class="font-['Reem_Kufi_Ink',_sans-serif] text-[14px] md:text-[16px] text-black/50">
      {data.total} posts
    </p>
  </div>

  <div class="border-t-2 border-b border-black/80 py-8 md:py-12 mb-10 md:mb-16">
    <p class="font-['Reem_Kufi_Ink',_sans-serif] text-[14px] md:text-[16px] text-black/60 mb-2">
      #WordPress / Archive
    </p>
    <h1 class="font-['Reem_Kufi_Ink',_sans-serif] text-[56px] md:text-[120px] leading-[0.9] text-black">
      Archive
    </h1>
  </div>

  {#if data.categories.length > 0}
    <div class="flex flex-wrap gap-2 mb-10">
      {#each data.categories as category}
        <a
          href={categoryHref(category.slug)}
          class="font-['Reem_Kufi_Ink',_sans-serif] text-[13px] px-4 py-1.5 rounded-full border transition-colors duration-150
            {data.categorySlugs.includes(category.slug)
              ? 'bg-black text-white border-black'
              : 'border-black/20 text-black/60 hover:border-black hover:text-black'}"
        >
          {category.name}
        </a>
      {/each}
    </div>
  {/if}

  {#if data.posts.length === 0}
    <p class="text-black/50 text-center py-20">記事が見つかりませんでした</p>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
      {#each data.posts as post}
        <a href={post.link} target="_blank" rel="noopener noreferrer" class="group block w-full text-left">
          <div class="relative aspect-[4/3] overflow-hidden rounded-2xl mb-5">
            <ImageWithFallback
              src={getImage(post)}
              alt={getTitle(post)}
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {#if getCategory(post)}
              <div class="absolute top-3 left-3">
                <Badge variant="outline" class="bg-white rounded-none text-xs px-2 py-1">
                  {getCategory(post)}
                </Badge>
              </div>
            {/if}
          </div>
          <h3
            class="font-['Noto_Sans_JP',_sans-serif] text-[20px] md:text-[22px] leading-snug text-black mb-3 group-hover:underline decoration-2 underline-offset-4"
          >
            {getTitle(post)}
          </h3>
          <p class="text-black/65 text-sm leading-relaxed mb-4 line-clamp-3">{getExcerpt(post)}</p>
          <div class="flex items-center gap-3 text-xs text-black/50 pt-3 border-t border-black/10">
            <span>{formatDate(post.date)}</span>
          </div>
        </a>
      {/each}
    </div>

    <!-- ページネーション -->
    {#if data.totalPages > 1}
      <div class="flex items-center justify-center gap-4 mt-16">
        {#if data.page > 1}
          <a
            href={pageHref(data.page - 1)}
            class="font-['Reem_Kufi_Ink',_sans-serif] text-[16px] text-black/60 hover:text-black transition-colors"
          >
            ← Prev
          </a>
        {/if}
        <span class="font-['Reem_Kufi_Ink',_sans-serif] text-[14px] text-black/40">
          {data.page} / {data.totalPages}
        </span>
        {#if data.page < data.totalPages}
          <a
            href={pageHref(data.page + 1)}
            class="font-['Reem_Kufi_Ink',_sans-serif] text-[16px] text-black/60 hover:text-black transition-colors"
          >
            Next →
          </a>
        {/if}
      </div>
    {/if}
  {/if}
</div>
