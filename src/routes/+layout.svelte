<script lang="ts">
  import '../app.css';
  import { page } from '$app/state';
  import { fly } from 'svelte/transition';
  import type { Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();
</script>

<div class="bg-[#fdfbf8] min-h-screen relative overflow-x-hidden">
  <div class="absolute top-[-32px] left-0 w-full pointer-events-none overflow-hidden" style="height: 65px;">
    <img alt="" src="/images/bg-reef-crop.webp" class="absolute w-full h-full" style="object-fit: cover; object-position: center 43%;" />
  </div>

  {#key page.url.pathname}
    <div in:fly={{ y: 20, duration: 300, delay: 50 }}>
      {@render children()}
    </div>
  {/key}
</div>
