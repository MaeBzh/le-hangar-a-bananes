<script setup lang="ts">
import type { DefaultTheme } from "vitepress/theme";
import VPIconHeart from "./icons/VPIconHeart.vue";
import VPLink from "./VPLink.vue";
import VPSocialLinks from "./VPSocialLinks.vue";

defineProps<{
  size?: "small" | "medium";
  member: DefaultTheme.TeamMember;
}>();
</script>

<template>
  <article
    class="VPTeamMembersItem flex flex-col gap-2 rounded-[12px] w-[100%] h-[100%] overflow-hidden"
  >
    <div
      class="flex-grow-1 bg-[color:var(--vp-c-bg-soft)]"
      :class="size === 'small' ? 'p-[32px]' : 'py-[48px] px-[32px]'"
    >
      <figure
        class="relative flex-shrink-0 mx-auto rounded-[50%] shadow-md"
        :class="size === 'small' ? 'w-[64px] h-[64px]' : 'w-[96px] h-[96px]'"
      >
        <img
          class="absolute inset-0 rounded-[50%] object-cover"
          :src="member.avatar"
          :alt="member.name"
        />
      </figure>
      <div
        class="text-center"
        :class="size === 'small' ? 'pt-[20px]' : 'pt-[24px] text-center'"
      >
        <h1
          class="m-0 font-[600]"
          :class="
            size === 'small'
              ? 'text-[16px] leading-[24px]'
              : 'tracking-[0.15px] text-[20px] leading-[28px]'
          "
        >
          {{ member.name }}
        </h1>
        <p
          v-if="member.title || member.org"
          class="m-0 font-[500] text-[color:var(--vp-c-text-2)]"
          :class="
            size === 'small'
              ? 'pt-[4px] text-[14px] leading-[20px]'
              : 'pt-[4px] text-[16px]'
          "
        >
          <span v-if="member.title" class="title">
            {{ member.title }}
          </span>
          <span v-if="member.title && member.org" class="at"> @ </span>
          <VPLink
            v-if="member.org"
            :class="{
              'text-[color:var(--vp-c-text-2)] hover:text-[color:var(--vp-c-brand)] transition-all duration-[250ms]':
                member.orgLink,
            }"
            :href="member.orgLink"
            no-icon
          >
            {{ member.org }}
          </VPLink>
        </p>
        <p
          v-if="member.desc"
          class="mx-auto"
          :class="
            size === 'small'
              ? 'pt-[12px] text-[14px] leading-[20px]'
              : 'pt-[16px] max-w-[288px] text-[16px]'
          "
        >
          {{ member.desc }}
        </p>
        <div
          v-if="member.links"
          class="flex justify-center h-[56px]"
          :class="
            size === 'small'
              ? 'mx-[-16px] mb-[-20px] pt-[10px] px-0 pb-0'
              : 'mx-[-16px] mb-[-12px] pt-[16px] px-[12px] pb-0'
          "
        >
          <VPSocialLinks :links="member.links" />
        </div>
      </div>
    </div>

    <div v-if="member.sponsor" class="sp">
      <VPLink
        class="flex justify-center items-center text-center p-[16px] text-[14px] font-[500] text-[color:var(--vp-c-sponsor)] bg-[var(--vp-c-bg-soft)] transition-all duration-[250ms]"
        :class="{
          'hover:outline-none hover:text-[color:var(--vp-c-text-dark-1)] hover:bg-[color:var(--vp-c-sponsor)]':
            member.sponsor,
        }"
        :href="member.sponsor"
        no-icon
      >
        <VPIconHeart class="mr-[8px] w-[16px] h-[16px] fill-current" />
        Sponsor
      </VPLink>
    </div>
  </article>
</template>
