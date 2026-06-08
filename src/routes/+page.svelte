<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import Badge from '$lib/components/Badge.svelte';
  import { works } from '$lib/data/works';
  import { projects } from '$lib/data/projects';
  import { experience } from '$lib/data/experience';

  let scrollY = $state(0);
  let iconRight = $derived(Math.max(-80 - scrollY * 0.3, -200));
</script>

{#snippet iconMail()}
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-6 h-6">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/>
  </svg>
{/snippet}

{#snippet iconBookOpen()}
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-6 h-6">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 0 3-3h7z"/>
  </svg>
{/snippet}

{#snippet iconExternalLink(size: 'sm' | 'md')}
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class={size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'}>
    <path d="M15 3h6v6"/>
    <path d="M10 14 21 3"/>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
  </svg>
{/snippet}

<svelte:window bind:scrollY />
<svelte:head>
  <title>reesuke</title>
</svelte:head>

<div class="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
  <!-- Hero -->
  <div class="relative pt-[113px]">
    <p class="font-['Noto_Sans_JP',_sans-serif] font-black text-[32px] md:text-[64px] text-black">
      こんにちは👋
    </p>

    <!-- アイコン: スクロールに連動して右端にスライドアウト -->
    <div
      class="fixed top-[100px] md:top-[200px] z-10 transition-all duration-500 ease-out"
      style="right: {iconRight}px"
    >
      <div class="rotate-[307.36deg]">
        <img
          alt=""
          src="/images/icon.webp"
          class="w-[120px] h-[120px] md:w-[176px] md:h-[176px] object-cover pointer-events-none"
        />
      </div>
    </div>
  </div>

  <!-- About -->
  <div class="mt-12 md:mt-[110px]">
    <p class="font-['Reem_Kufi_Ink',_sans-serif] text-[32px] md:text-[48px] text-black">#About</p>

    <div class="mt-6 md:mt-[55px] md:ml-[100px] lg:ml-[150px]">
      <p class="font-['Reem_Kufi_Ink',_sans-serif] leading-none text-[48px] md:text-[80px] text-black">
        reesuke
      </p>

      <div class="mt-6 max-w-[926px]">
        <p class="text-[16px] md:text-[20px] leading-relaxed text-black/80">
          Minecraftサーバーの運営をきっかけにエンジニアの世界へ。大学ではハッカソンやコミュニティ活動を主にやってます。最近はネットワーク分野に興味があるよ 👀。
        </p>

        <div class="mt-8">
          <h3 class="text-[18px] md:text-[20px] mb-4 text-black/70">所属</h3>
          <div class="flex flex-wrap gap-3">
            {#each ['名城大学情報工学部', 'NxTEND', '情技研', 'STECH'] as affiliation}
              <Badge variant="outline" class="px-4 py-2 hover:bg-black/5">{affiliation}</Badge>
            {/each}
          </div>
        </div>

        <div class="flex gap-4 mt-8 items-center">
          <a
            href="https://github.com/ree-jp"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-full hover:bg-black/5 transition-colors"
          >
            <!-- GitHub mark -->
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/reesuke_"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-full hover:bg-black/5 transition-colors"
          >
            <!-- X (Twitter) mark -->
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="mailto:mail@reesuke.com" class="p-2 rounded-full hover:bg-black/5 transition-colors">
            {@render iconMail()}
          </a>
          <a
            href="/blog"
            class="group ml-2 inline-flex items-center gap-2 h-10 px-3 rounded-full font-['Reem_Kufi_Ink',_sans-serif] text-[18px] md:text-[20px] leading-none text-black hover:bg-black hover:text-white transition-colors"
          >
            {@render iconBookOpen()}
            <span>#Blog</span>
            <span class="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Product -->
  <div class="mt-12 md:mt-[75px]">
    <p class="font-['Reem_Kufi_Ink',_sans-serif] text-[32px] md:text-[48px] text-black">#Product</p>

    <div class="mt-6 md:mt-[55px] md:ml-[100px] lg:ml-[150px]">
      <p class="font-['Noto_Sans_JP',_sans-serif] text-[32px] md:text-[48px] text-black mb-8">作ってる</p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[926px]">
        {#each projects as project}
          <Card class="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col">
            <div class="p-6 flex flex-col flex-grow">
              <div class="flex items-start justify-between mb-2">
                <h3 class="text-[18px] md:text-[20px] flex-1 pr-2">{project.title}</h3>
                {#if project.link}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-black/40 hover:text-black transition-colors shrink-0"
                  >
                    {@render iconExternalLink('md')}
                  </a>
                {/if}
              </div>
              <div class="flex items-center gap-2 mb-3">
                <Badge variant="outline" class="text-xs text-black/50">{project.category}</Badge>
                {#if project.achievement}
                  <Badge class="text-xs">{project.achievement}</Badge>
                {/if}
              </div>
              <p class="text-black/50 text-sm mb-2">{project.period}</p>
              <p class="text-black/70 mb-4 flex-grow">{project.description}</p>
              <div class="flex flex-wrap gap-2">
                {#each project.tags as tag}
                  <Badge variant="outline" class="text-xs">{tag}</Badge>
                {/each}
              </div>
            </div>
          </Card>
        {/each}
      </div>
    </div>
  </div>

  <!-- Works -->
  <div class="mt-12 md:mt-[75px]">
    <p class="font-['Reem_Kufi_Ink',_sans-serif] text-[32px] md:text-[48px] text-black">#Works</p>

    <div class="mt-6 md:mt-[55px] md:ml-[100px] lg:ml-[150px]">
      <p class="font-['Noto_Sans_JP',_sans-serif] text-[32px] md:text-[48px] text-black mb-8">働いてる</p>

      <div class="max-w-[926px] space-y-6">
        {#each works as work}
          <Card class="overflow-hidden">
            <div class="p-6">
              <div class="flex items-start justify-between gap-2 mb-1">
                <h3 class="text-[18px] md:text-[20px]">{work.title}</h3>
                <Badge variant="outline" class="text-xs text-black/50 shrink-0">{work.type}</Badge>
              </div>
              <p class="text-black/50 text-sm mb-1">{work.company}</p>
              <p class="text-black/40 text-sm mb-3">{work.period}</p>
              <p class="text-black/70 mb-4">{work.description}</p>
              <div class="flex flex-wrap gap-2">
                {#each work.tags as tag}
                  <Badge variant="outline" class="text-xs">{tag}</Badge>
                {/each}
              </div>
            </div>
          </Card>
        {/each}
      </div>
    </div>
  </div>

  <!-- Experience -->
  <div class="mt-12 md:mt-[75px]">
    <p class="font-['Reem_Kufi_Ink',_sans-serif] text-[32px] md:text-[48px] text-black">#Experience</p>

    <div class="mt-6 md:mt-[55px] md:ml-[100px] lg:ml-[150px]">
      <p class="font-['Noto_Sans_JP',_sans-serif] text-[32px] md:text-[48px] text-black mb-8">その他の経験</p>

      <div class="max-w-[926px] space-y-4">
        {#each experience as exp}
          <div class="flex items-start gap-4 py-4 border-b border-black/10 last:border-0">
            <div class="shrink-0 w-2 h-2 rounded-full bg-black/30 mt-[10px]"></div>
            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between gap-2">
                <p class="text-[16px] md:text-[18px] text-black">{exp.title}</p>
                {#if exp.link}
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-black/30 hover:text-black transition-colors shrink-0 mt-1"
                  >
                    {@render iconExternalLink('sm')}
                  </a>
                {/if}
              </div>
              <p class="text-black/50 text-sm mt-1">{exp.period}</p>
              {#if exp.role}
                <Badge variant="outline" class="text-xs text-black/60 mt-2">{exp.role}</Badge>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Footer CTA -->
  <div class="mt-20 md:mt-32 pb-20">
    <a
      href="/blog"
      class="group w-full border-t-2 border-b border-black/80 py-12 md:py-20 flex items-center justify-between hover:bg-black hover:text-white hover:border-black transition-colors px-4"
    >
      <div class="text-left">
        <p class="font-['Reem_Kufi_Ink',_sans-serif] text-[14px] md:text-[16px] opacity-60 mb-2">
          #Blog / Notes & Logs
        </p>
        <p class="font-['Reem_Kufi_Ink',_sans-serif] text-[40px] md:text-[80px] leading-none">
          Read the Blog
        </p>
      </div>
      <span
        class="font-['Reem_Kufi_Ink',_sans-serif] text-[40px] md:text-[80px] leading-none transition-transform group-hover:translate-x-2"
      >
        →
      </span>
    </a>
  </div>
</div>
