<script lang="ts">
  import '../app.css';
  import type { Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();
</script>

<div class="bg-[#fdfbf8] min-h-screen relative overflow-x-hidden">
  <div class="absolute top-[-32px] left-0 w-full pointer-events-none overflow-hidden" style="height: 65px;">
    <img alt="" src="/images/bg-reef-crop.webp" class="absolute w-full h-full" style="object-fit: cover; object-position: center 43%;" />
  </div>

  {@render children()}
</div>
