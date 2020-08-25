<script lang="ts">
  import type { Image } from '../kappa/components/Image';
  import type { Option } from '../kappa/components/Option';
  import type { Event } from '../kappa/base/Event';

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  /**
   * Props
   */
  export let title: string = '';
  export let subtitle: string = '';
  export let options: Array<Option> = [];
  export let event: Event;

  /**
   * Functions
   */
  const emit = (name, parameters) => {
    if (name) dispatch(name, parameters);
    return;
  };

  const onClick = ({ event }) => {
    const { name, parameters } = event;
    emit(name, { title, parameters });
  };
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
    <div
      class={`option h4 ${option.classified}`}
      on:click={() => onClick(option)}>
      {option.title}
    </div>
  {/each}
</div>
