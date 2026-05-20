<script lang="ts">
  import Badge from '$lib/components/Badge.svelte';
  import ImageWithFallback from '$lib/components/ImageWithFallback.svelte';
  import { posts } from '$lib/data/posts';

  const featuredIndex = Math.max(0, posts.findIndex((p) => p.featured));
  const featured = posts[featuredIndex];
  const rest = posts.map((p, i) => ({ post: p, index: i })).filter(({ index }) => index !== featuredIndex);
</script>

<svelte:head>
  <title>Blog | reesuke</title>
</svelte:head>

<div class="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-[60px] pb-20">
  <div class="flex items-center justify-between mb-10">
    <a
      href="/"
      class="font-['Reem_Kufi_Ink',_sans-serif] text-[20px] md:text-[24px] text-black/60 hover:text-black transition-colors"
    >
      ← reesuke
    </a>
    <div class="flex items-center gap-6">
      <a
        href="/blog/archive"
        class="font-['Reem_Kufi_Ink',_sans-serif] text-[14px] md:text-[16px] text-black/50 hover:text-black transition-colors underline underline-offset-4"
      >
        Archive →
      </a>
      <p class="font-['Reem_Kufi_Ink',_sans-serif] text-[14px] md:text-[16px] text-black/50">
        {posts.length} posts
      </p>
    </div>
  </div>

  <div class="border-t-2 border-b border-black/80 py-8 md:py-12 mb-10 md:mb-16">
    <p class="font-['Reem_Kufi_Ink',_sans-serif] text-[14px] md:text-[16px] text-black/60 mb-2">
      #Blog / Journal
    </p>
    <h1 class="font-['Reem_Kufi_Ink',_sans-serif] text-[56px] md:text-[120px] leading-[0.9] text-black">
      Notes & Logs
    </h1>
  </div>

  <!-- Featured -->
  <a href="/blog/{featuredIndex}" class="group block w-full text-left mb-16 md:mb-24">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
      <div class="md:col-span-7 relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl">
        <ImageWithFallback
          src={featured.image}
          alt={featured.title}
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div class="md:col-span-5 flex flex-col justify-end">
        <div class="flex items-center gap-3 mb-4">
          <Badge class="rounded-none px-3 py-1">FEATURED</Badge>
          <span class="text-black/60 text-sm">{featured.category}</span>
        </div>
        <h2
          class="font-['Noto_Sans_JP',_sans-serif] text-[28px] md:text-[40px] leading-tight text-black mb-4 group-hover:underline decoration-2 underline-offset-4"
        >
          {featured.title}
        </h2>
        <p class="text-black/70 text-[15px] md:text-[16px] leading-relaxed mb-6">{featured.excerpt}</p>
        <div class="flex items-center gap-4 text-sm text-black/50">
          <span>{featured.date}</span>
          <span>·</span>
          <span>{featured.readTime}</span>
          <span class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">Read →</span>
        </div>
      </div>
    </div>
  </a>

  <!-- Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
    {#each rest as { post, index }}
      <a href="/blog/{index}" class="group block w-full text-left">
        <div class="relative aspect-[4/3] overflow-hidden rounded-2xl mb-5">
          <ImageWithFallback
            src={post.image}
            alt={post.title}
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div class="absolute top-3 left-3">
            <Badge variant="outline" class="bg-white rounded-none text-xs px-2 py-1">{post.category}</Badge>
          </div>
        </div>
        <h3
          class="font-['Noto_Sans_JP',_sans-serif] text-[20px] md:text-[22px] leading-snug text-black mb-3 group-hover:underline decoration-2 underline-offset-4"
        >
          {post.title}
        </h3>
        <p class="text-black/65 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
        <div class="flex items-center gap-3 text-xs text-black/50 pt-3 border-t border-black/10">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </a>
    {/each}
  </div>
</div>
