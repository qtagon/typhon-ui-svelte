<script lang="ts">
  import type { Action, Input } from '@qtagon/typhon-ui';
  import type { Event } from '@qtagon/typhon-ui/lib/core';
  import { ALIGNMENT } from '@qtagon/typhon-ui';

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
  export let title: string = '';
  export let subtitle: string = '';
  export let inputs: Array<Input> = [];

  /**
   * Functions
   */
  const emit = (name, parameters) => {
    if (name) dispatch(name, parameters);
    return;
  };
</script>

<style type="text/scss">
  @import './scss/fonts.scss';
  @import './scss/alignment.scss';

  .subtitle {
    margin: 0.625rem 0 0 0;
  }

  .headline {
    margin: 0 0 3.75rem 0;
  }

  label {
    text-transform: uppercase;
  }

  input {
    outline: none;
    border: none;
    margin: 0;
    color: #1e1f20;
    width: 100%;
    height: 100%;
    padding: 1.188rem;
    border: 0.063rem solid #e5e5e5;
    border-radius: 0.75rem;
    margin: 0.625rem 0 0 0;

    &:not(:last-child) {
      margin: 0.625rem 0 1.25rem 0;
    }

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
</style>

<div class={`form`}>
  <div class="headline">
    <div class="h2 title">{title}</div>
    <div class="display subtitle">{subtitle}</div>
  </div>
  <form>
    {#each inputs as input}
      <label for={input.identifier} class="label">{input.title}</label>
      <input
        name={input.title.toLowerCase()}
        type="text"
        id={input.identifier}
        placeholder={input.title}
        class="display" />
    {/each}
  </form>
</div>
