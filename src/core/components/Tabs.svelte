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
  let identifier: string = options?.find((e) => e)?.identifier || '';

  /**
   * Functions
   */
  const emit = (name, parameters) => {
    if (name) dispatch(name, parameters);
    return;
  };

  const onClick = (option: Option) => {
    const { name, parameters } = option.event;
    emit(name, { title, parameters, identifier: option.identifier });
    identifier = option.identifier;
  };
</script>

<style type="text/scss">
  @import './scss/fonts.scss';
  @import './scss/alignment.scss';

  .tabs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0 !important;

    & > .option {
      cursor: pointer;
      color: #8f92a1;

      &.active,
      &:hover,
      &:focus,
      &:active {
        color: #1e1f20;
      }

      &:not(:last-child) {
        margin-right: 1.875rem;
        margin-bottom: 1.875rem;
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
      class={`option h4 ${option.classified} ${option.identifier === identifier ? 'active' : ''}`}
      on:click={() => onClick(option)}>
      {option.title}
    </div>
  {/each}
</div>
