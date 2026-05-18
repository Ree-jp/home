<script lang="ts">
  const ERROR_IMG =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

  let {
    src,
    alt = '',
    class: className = '',
    style = ''
  }: {
    src?: string;
    alt?: string;
    class?: string;
    style?: string;
  } = $props();

  let didError = $state(false);
</script>

{#if didError}
  <div class="inline-block bg-gray-100 text-center align-middle {className}" {style}>
    <div class="flex items-center justify-center w-full h-full">
      <img src={ERROR_IMG} alt="" />
    </div>
  </div>
{:else}
  <img {src} {alt} class={className} {style} onerror={() => (didError = true)} />
{/if}
