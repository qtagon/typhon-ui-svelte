<script lang="ts">
  import type { Icon } from '../kappa/core/components';
  import { ALIGNMENT, SIZE } from '../kappa';
  import type { Event } from '../kappa/core';

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  /**
   * Components
   */
  import cicon from './Icon/index.svelte';
  const components = {
    icon: cicon,
  };

  /**
   * Properties
   */
  export let title: string = '';
  export let classified: string = '';
  export let icon: Icon;
  export let alignment: ALIGNMENT = ALIGNMENT.NONE;
  export let size: SIZE = SIZE.NONE;
  export let event: Event;

  /**
   * Data
   */
  const untitled = icon && !title ? 'untitled' : '';

  /**
   * Functions
   */
  const emit = (name: string = '', parameters: any) => {
    if (name) dispatch(name, parameters);
    return;
  };

  const onClick = () => {
    if (!event) return;
    const { name, parameters } = event;
    emit(name, {});
  };
</script>

<style type="text/scss">
  @import './scss/button.scss';
  @import './scss/alignment.scss';
  @import './scss/fonts.scss';
</style>

<button
  class={`button ${classified} ${untitled} ${alignment} ${size} display`}
  name={title}
  type="button"
  on:click={onClick}>
  {#if icon}
    <svelte:component this={components.icon} {...icon} />
    {#if title}&nbsp;{/if}
  {/if}
  {title}
</button>
