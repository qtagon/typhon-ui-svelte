<script lang="ts">
  import type { Image } from '../kappa/components/Image';
  import type { Option } from '../kappa/components/Option';

  export let title: string = '';
  export let subtitle: string = '';
  export let options: Array<Option> = [];
</script>

<style type="text/scss">
  @import './scss/fonts.scss';
  @import './scss/alignment.scss';

  .tabs {
    display: flex;

    & > .option {
      cursor: pointer;
      color: #8f92a1;

      &.active {
        color: #1e1f20;
      }

      &:not(:last-child) {
        margin-right: 1.875rem;
      }
    }
  }
</style>

{#if title}
  <div class="h1">{title}</div>
{/if}
<div class={`tabs`}>
  {#each options as option (option.identifier)}
    <div class={`option h4 ${option.classified}`}>{option.title}</div>
  {/each}
</div>
