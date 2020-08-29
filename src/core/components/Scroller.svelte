<script lang="ts">
  /**
   * Properties
   */
  export let wrap: boolean = false;
</script>

<style type="text/scss">
  @import './scss/scroller.scss';
</style>

{#if wrap}
  <div class="scroller-container scroller-fade scroller-ghost-hairline">
    <div class="scroller">
      <slot />
    </div>
  </div>
{:else}
  <slot />
{/if}
