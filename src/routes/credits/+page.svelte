<script lang="ts">
  type Credit = {
    name: string;
    link: string;
    license: string;
    licenseLink: string;
    usage: string;
    note?: string;
  };

  const credits: Credit[] = [
    {
      name: 'Twemoji',
      link: 'https://github.com/jdecked/twemoji',
      license: 'CC-BY 4.0',
      licenseLink: 'https://creativecommons.org/licenses/by/4.0/',
      usage: 'サイト内の絵文字画像',
      note: 'Copyright 2020 Twitter, Inc and other contributors.'
    },
    {
      name: 'Lucide',
      link: 'https://lucide.dev/',
      license: 'ISC License',
      licenseLink: 'https://lucide.dev/license',
      usage: 'サイト内のUIアイコン'
    },
    {
      name: 'Noto Sans JP',
      link: 'https://fonts.google.com/noto/specimen/Noto+Sans+JP',
      license: 'SIL Open Font License 1.1',
      licenseLink: 'https://openfontlicense.org/',
      usage: '本文・見出しの和文フォント'
    },
    {
      name: 'Reem Kufi Ink',
      link: 'https://fonts.google.com/specimen/Reem+Kufi+Ink',
      license: 'SIL Open Font License 1.1',
      licenseLink: 'https://openfontlicense.org/',
      usage: '見出しフォント（サブセット化して自己ホスト）'
    }
  ];
</script>

<svelte:head>
  <title>Credits | reesuke</title>
  <meta name="description" content="このサイトで利用している素材・ライブラリの権利表記" />
</svelte:head>

<div class="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-10 pb-20">
  <a
    href="/"
    class="font-display text-[20px] md:text-[24px] text-black/60 hover:text-black transition-colors"
  >
    ← reesuke
  </a>

  <p class="font-display text-[32px] md:text-[48px] text-black mt-10">#Credits</p>

  <div class="mt-6 md:mt-[55px] md:ml-[100px] lg:ml-[150px] max-w-[926px]">
    <p class="text-[16px] md:text-[18px] leading-relaxed text-black/80 mb-10">
      このサイトは、以下の素晴らしい素材・ライブラリのおかげで成り立っています。
    </p>

    <div class="space-y-4">
      {#each credits as credit}
        <div class="py-5 border-b border-black/10 last:border-0">
          <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <a
              href={credit.link}
              target="_blank"
              rel="noopener noreferrer"
              class="text-[18px] md:text-[20px] text-black underline decoration-black/20 underline-offset-4 hover:decoration-black transition-colors"
            >
              {credit.name}
            </a>
            <a
              href={credit.licenseLink}
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-black/50 hover:text-black transition-colors"
            >
              {credit.license}
            </a>
          </div>
          <p class="text-black/60 text-sm mt-2">{credit.usage}</p>
          {#if credit.note}
            <p class="text-black/40 text-sm mt-1">{credit.note}</p>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>
