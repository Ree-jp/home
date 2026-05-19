<script lang="ts">
  import { page } from '$app/state';
</script>

<svelte:head>
  <title>{page.status} | reesuke</title>
</svelte:head>

<div class="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
  <div class="text-center">
    <p class="font-['Reem_Kufi_Ink',_sans-serif] text-[14px] md:text-[16px] text-black/40 mb-4">
      #{page.status === 404 ? 'NotFound' : 'Error'}
    </p>
    <p class="font-['Reem_Kufi_Ink',_sans-serif] text-[80px] md:text-[120px] leading-none text-black mb-6">
      {page.status}
    </p>
    <p class="font-['Noto_Sans_JP',_sans-serif] text-black/50 mb-10">
      {page.status === 404 ? 'ページが見つかりませんでした' : 'エラーが発生しました'}
    </p>
    <a
      href="/"
      class="group inline-flex items-center gap-2 font-['Reem_Kufi_Ink',_sans-serif] text-[18px] border border-black/20 px-6 py-3 rounded-full hover:bg-black hover:text-white hover:border-black transition-colors duration-200"
    >
      <span class="transition-transform group-hover:-translate-x-1">←</span>
      Back to Top
    </a>
  </div>
</div>
