<script lang="ts">
  import '../app.css';
  import type { Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();
</script>

<div class="bg-[#fdfbf8] min-h-screen relative overflow-x-hidden">
  <!-- Figmaデザインのトップ装飾画像。コンテナh=65px、画像h=1440px、top=-1023pxでスライスを表示 -->
  <div class="absolute top-[-32px] left-0 w-full pointer-events-none overflow-hidden" style="height: 65px;">
    <img alt="" src="/images/bg-reef.png" class="absolute w-full" style="height: 1440px; top: -1023px;" />
  </div>

  {@render children()}
</div>
