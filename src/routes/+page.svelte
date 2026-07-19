<script lang="ts">
  import Mail from '@lucide/svelte/icons/mail';
  import BookOpen from '@lucide/svelte/icons/book-open';
  import ExternalLink from '@lucide/svelte/icons/external-link';
  import Card from '$lib/components/Card.svelte';
  import Badge from '$lib/components/Badge.svelte';
  import { works } from '$lib/data/works';
  import { projects } from '$lib/data/projects';
  import { experience, experienceCategories } from '$lib/data/experience';

  let scrollY = $state(0);
  let iconRight = $derived(Math.max(-80 - scrollY * 0.3, -200));
</script>

<svelte:window bind:scrollY />
<svelte:head>
  <title>reesuke</title>
</svelte:head>

<div class="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
  <!-- Hero -->
  <div class="relative pt-[113px]">
    <p class="font-sans font-black text-[32px] md:text-[64px] text-black">
      こんにちは   👋
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
    <p class="font-display text-[32px] md:text-[48px] text-black">#About</p>

    <div class="mt-6 md:mt-[55px] md:ml-[100px] lg:ml-[150px]">
      <p class="font-display leading-none text-[48px] md:text-[80px] text-black">
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
            <!-- Github icon (旧lucide、パッケージからは削除されたためインライン) -->
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
          </a>
          <a
            href="https://twitter.com/reesuke_"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-full hover:bg-black/5 transition-colors"
          >
            <!-- Twitter icon (旧lucide、パッケージからは削除されたためインライン) -->
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
            </svg>
          </a>
          <a href="mailto:mail@reesuke.com" class="p-2 rounded-full hover:bg-black/5 transition-colors">
            <Mail class="w-6 h-6" aria-hidden="true" />
          </a>
          <a
            href="/blog"
            class="group ml-2 inline-flex items-center gap-2 h-10 px-3 rounded-full font-display text-[18px] md:text-[20px] leading-none text-black hover:bg-black hover:text-white transition-colors"
          >
            <BookOpen class="w-6 h-6" aria-hidden="true" />
            <span>#Blog</span>
            <span class="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Product -->
  <div class="mt-12 md:mt-[75px]">
    <p class="font-display text-[32px] md:text-[48px] text-black">#Product</p>

    <div class="mt-6 md:mt-[55px] md:ml-[100px] lg:ml-[150px]">
      <p class="font-sans text-[32px] md:text-[48px] text-black mb-8">作ってる 👾</p>

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
                    <ExternalLink class="w-5 h-5" aria-hidden="true" />
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
    <p class="font-display text-[32px] md:text-[48px] text-black">#Works</p>

    <div class="mt-6 md:mt-[55px] md:ml-[100px] lg:ml-[150px]">
      <p class="font-sans text-[32px] md:text-[48px] text-black mb-8">働いてる 💪</p>

      <div class="max-w-[926px] space-y-6">
        {#each works as work}
          <Card class="overflow-hidden">
            <div class="p-6">
              <div class="flex items-start justify-between gap-2 mb-1">
                <h3 class="text-[18px] md:text-[20px]">{work.title}</h3>
                <div class="flex items-center gap-2 shrink-0">
                  <Badge variant="outline" class="text-xs text-black/50">{work.type}</Badge>
                  {#if work.link}
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-black/30 hover:text-black transition-colors"
                    >
                      <ExternalLink class="w-4 h-4" aria-hidden="true" />
                    </a>
                  {/if}
                </div>
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
    <p class="font-display text-[32px] md:text-[48px] text-black">#Experience</p>

    <div class="mt-6 md:mt-[30px] md:ml-[100px] lg:ml-[150px]">

      <div class="max-w-[926px] space-y-10">
        {#each experienceCategories as category}
          <div>
            <p class="text-sm text-black/40 tracking-wider mb-2">{category}</p>
            <div class="space-y-4">
              {#each experience.filter((e) => e.category === category) as exp}
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
                          <ExternalLink class="w-4 h-4" aria-hidden="true" />
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
        <p class="font-display text-[14px] md:text-[16px] opacity-60 mb-2">
          #Blog / Notes & Logs
        </p>
        <p class="font-display text-[40px] md:text-[80px] leading-none">
          Read the Blog
        </p>
      </div>
      <span
        class="font-display text-[40px] md:text-[80px] leading-none transition-transform group-hover:translate-x-2"
      >
        →
      </span>
    </a>
  </div>
</div>
