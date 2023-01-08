<template>
  <div
    class="VPTeamPageTitle py-[48px] px-[32px] md:pt-[64px] md:px-[48px] md:pb-[48px] text-center lg:pt-[80px] lg:px-[64px] lg:pb-[48px]"
  >
    <h1
      v-if="$slots.title"
      class="tracking-[0] leading-[44px] text-[36px] font-[500] md:tracking-[-0.5px] md:leading-[56px] md:text-[48px]"
    >
      <slot name="title" />
    </h1>
    <p
      v-if="$slots.lead"
      class="my-0 mx-auto max-w-[512px] pt-[12px] leading-[24px] text-[16px] font-[500] text-[color:var(--vp-c-text-2)] md:max-w-[592px] md:tracking-[0.15px] md:leading-[28px] md:text-[20px]"
    >
      <slot name="lead" />
    </p>
  </div>
</template>