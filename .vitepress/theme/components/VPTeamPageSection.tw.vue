<template>
  <section
    class="VPTeamPageSection py-[48px] px-[32px] md:pt-[64px] md:px-[48px] md:pb-[48px] text-center lg:pt-[80px] lg:px-[64px] lg:pb-[48px]"
  >
    <div
      class="relative mx-auto max-w-[1152px] text-[color:var(--vp-c-text-2)]"
    >
      <div
        class="absolute top-[16px] left-0 w-[100%] h-[1px] bg-[color:var(--vp-c-divider-light)]"
      />
      <h2
        v-if="$slots.title"
        class="relative inline-block px-[24px] tracking-[0] leading-[32px] text-[20px] font-[500] bg-[color:var(--vp-c-bg)]"
      >
        <slot name="title" />
      </h2>
    </div>
    <p
      v-if="$slots.lead"
      class="mx-auto max-w-[480px] pt-[12px] text-center leading-[24px] text-[16px] font-[500] text-[color:var(--vp-c-text-2)]"
    >
      <slot name="lead" />
    </p>
    <div v-if="$slots.members" class="members pt-[40px]">
      <slot name="members" />
    </div>
  </section>
</template>