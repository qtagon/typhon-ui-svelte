<script lang="ts">
  import type { Image } from '../kappa/components/Image';
  import type { Action } from '../kappa/components/Action';
  import { ALIGNMENT } from '../kappa/interfaces/index';

  /**
   * Components
   */
  import caction from './Action.svelte';
  const components = {
    action: caction,
  };

  export let title: string = '';
  export let subtitle: string = '';
  export let actions: Array<Action> = [];
  export let alignment: ALIGNMENT = ALIGNMENT.NONE;
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
  <input placeholder={title} class={`display ${alignment}`} />
  {#if actions.length}
    {#each actions as action}
      <svelte:component this={components.action} {...action} />
    {/each}
  {/if}
</div>
