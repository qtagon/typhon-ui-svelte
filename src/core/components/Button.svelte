<script lang="ts">
  import type { Icon } from '@qtagon/typhon-ui';
  import { ALIGNMENT, SIZE } from '@qtagon/typhon-ui';
  import type { Event } from '@qtagon/typhon-ui/lib/core';

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
  export let type: string = 'button';
  export let identifier: string = '';
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
    emit(name, { name, parameters });
    emit('event', { name, parameters, type, identifier });
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
