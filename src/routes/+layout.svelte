<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import { page } from '$app/state';
  import { fly } from 'svelte/transition';
  import type { Snippet } from 'svelte';
  import { initTwemoji } from '$lib/twemoji';

  const SITE_URL = 'https://about.reesuke.com';

  let { children }: { children: Snippet } = $props();

  onMount(() => initTwemoji());
</script>

<svelte:head>
  <link rel="canonical" href="{SITE_URL}{page.url.pathname}" />
</svelte:head>

<div class="bg-[#fdfbf8] min-h-screen relative overflow-x-hidden">
  <div class="absolute top-[-32px] left-0 w-full pointer-events-none overflow-hidden" style="height: 65px;">
    <img alt="" src="/images/bg-reef-crop.webp" class="absolute w-full h-full" style="object-fit: cover; object-position: center 43%;" />
  </div>

  {#key page.url.pathname}
    <div in:fly={{ y: 20, duration: 300, delay: 50 }}>
      {@render children()}
    </div>
  {/key}

  <footer
    class="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-8 flex items-center justify-between text-sm text-black/40"
  >
    <span>© reesuke</span>
    <a href="/credits" class="hover:text-black transition-colors">Credits</a>
  </footer>
</div>
