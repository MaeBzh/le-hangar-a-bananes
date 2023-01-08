<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme';
import VPTeamMembersItem from './VPTeamMembersItem.tw.vue';

const props = defineProps<{
  size?: 'small' | 'medium'
  members: DefaultTheme.TeamMember[]
}>()
</script>

<template>
  <div class="VPTeamMembers" >
    <div class="grid gap-[24px] mx-auto max-w-[1152px]" :class="{
      // props.size === small
      'max-w-[276px]': size === 'small' && members.length === 1,
      'max-w-[calc(276px * 2 + 24px)]': size === 'small' && members.length === 2,
      'max-w-[calc(276px * 3 + 24px * 2)]': size === 'small' && members.length === 3,
      'grid-cols-[repeat(auto-fit, minmax(224px, 1fr)]': size === 'small',
      
      // props.size === medium
      'max-w-[368px]': size === 'medium' && members.length === 1,
      'max-w-[calc(368px * 2 + 24px)]': size === 'medium' && members.length === 2,
      'grid-cols-[repeat(auto-fit, minmax(256px, 1fr)]': size === 'medium',
      'xs:grid-cols-[repeat(auto-fit, minmax(288px, 1fr)]': size === 'medium',
    }">
      <div v-for="member in members" :key="member.name" class="item">
        <VPTeamMembersItem :size="size" :member="member" />
      </div>
    </div>
  </div>
</template>
