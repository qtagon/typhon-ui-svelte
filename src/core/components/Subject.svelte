<script lang="ts">
  export let title: string = '';
  export let classified: string = '';
  export let style: string = '';
</script>

<style type="text/scss">
  @import './scss/fonts.scss';
  @import './scss/alignment.scss';
</style>

{#if title}
  <div class={`${classified}`} style={style}>{title}</div>
{/if}
