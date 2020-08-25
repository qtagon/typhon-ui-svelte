<script lang="ts">
  import type { Image } from '../kappa/components/Image';
  import type { Action } from '../kappa/components/Action';
  import type { Event } from '../kappa/base/Event';
  import { ALIGNMENT } from '../kappa/interfaces/index';

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  /**
   * Components
   */
  import caction from './Action.svelte';
  const components = {
    action: caction,
  };

  /**
   * Props
   */
  export let value: string = '';
  export let title: string = '';
  export let event: Event;
  export let subtitle: string = '';
  export let actions: Array<Action> = [];
  export let alignment: ALIGNMENT = ALIGNMENT.NONE;

  /**
   * Functions
   */
  const emit = (name, parameters) => {
    if (name) dispatch(name, parameters);
    return;
  };

  let timeout = null;
  const onInput = (e) => {
    value = e.target.value;

    if (timeout !== null) clearTimeout(timeout);

    timeout = setTimeout(function () {
      const { name, parameters } = event;
      emit(name, { title, value, parameters });
    }, 350);
  };
</script>

<style type="text/scss">
  @import './scss/fonts.scss';
  @import './scss/alignment.scss';

  .search {
    display: flex;
    padding: 1.188rem;
    background: #ffffff;
    border: 0.063rem solid #e5e5e5;
    border-radius: 0.75rem;
  }

  input {
    outline: none;
    border: none;
    margin: 0;
    color: #1e1f20;
    width: 100%;

    &::placeholder {
      color: #4c526d;
      opacity: 1;
    }

    &:-ms-input-placeholder {
      color: #4c526d;
    }

    &::-ms-input-placeholder {
      color: #4c526d;
    }
  }

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;

    & > :global(.button:not(:last-child)) {
      margin: 0 0.938rem 0 0;
    }
  }
</style>

<div class={`search`}>
  <input
    placeholder={title}
    class={`display ${alignment}`}
    {value}
    name="search"
    on:input={onInput}
    autocomplete="on" />
  {#if actions.length}
    {#each actions as action}
      <svelte:component this={components.action} {...action} />
    {/each}
  {/if}
</div>
