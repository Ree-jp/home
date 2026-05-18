<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    variant = 'default',
    class: className = '',
    children
  }: {
    variant?: 'default' | 'outline';
    class?: string;
    children?: Snippet;
  } = $props();
</script>

<span
  class="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors
    {variant === 'outline'
    ? 'border border-black/20 bg-white text-black'
    : 'bg-black text-white border-0'}
    {className}"
>
  {@render children?.()}
</span>
