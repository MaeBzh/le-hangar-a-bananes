<template>
  <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
    <TeamMembersItem
      v-for="(member, index) in members"
      :key="index"
      :member="member"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { DefaultTheme } from 'vitepress/theme'
import TeamMembersItem from './TeamMembersItem.vue'

export default defineComponent({
  name: 'TeamMembers',
  components: {
    TeamMembersItem,
  },
  props: {
    members: {
      type: Array as () => DefaultTheme.TeamMember[],
      required: true,
    },
  },
})
</script>