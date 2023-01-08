<template>
  <div
    class="VPTeamPage pb-[96px] md:pb-[128px] 
    [:slotted(.VPTeamPageSection + .VPTeamPageSection)]:mt-[64px] 
    [:slotted(.VPTeamMembers + .VPTeamPageSection)]:mt-[64px] 
    [:slotted(.VPTeamMembers + .VPTeamMembers)]:mt-[24px] 
    md:[:slotted(VPTeamPageTitle + .VPTeamPageSection)]:mt-[16px] 
    md:[:slotted(.VPTeamPageSection + .VPTeamPageSection)]:mt-[96px] 
    md:[:slotted(.VPTeamMembers + .VPTeamPageSection)]:mt-[96px] 
    [:slotted(.VPTeamMembers)]:px-[24px] 
    md:[:slotted(.VPTeamMembers)]:px-[48px] 
    lg:[:slotted(.VPTeamMembers)]:px-[64px]"
  >
    <slot />
  </div>
</template>