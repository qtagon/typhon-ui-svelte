<script lang="ts">
  import type { Action, Image } from '@qtagon/typhon-ui';
  import { POSITION, ALIGNMENT } from '@qtagon/typhon-ui';

  /**
   * Components
   */
  import caction from './Action.svelte';
  import cimage from './Image.svelte';
  import ccode from './Placeholder/Code.svelte';
  const components = {
    action: caction,
    image: cimage,
    placeholders: {
      code: ccode,
    },
  };

  export let title: string = '';
  export let subtitle: string = '';
  export let classified: string = '';
  export let description: string = '';
  export let image: Image;
  export let actions: Array<Action> = [];
  export let alignment: ALIGNMENT = ALIGNMENT.NONE;
  export let position: POSITION = POSITION.NONE;
  export let placeholder: boolean = false;
</script>

<style type="text/scss">
  @import './scss/constraints.scss';
  @import './scss/fonts.scss';

  .media {
    display: flex;

    & > :global(.image) {
      align-self: initial;
    }

    &.middle {
      justify-content: center;
      align-items: center;
    }

    &.vertical {
      flex-direction: column;

      & > .content {
        margin: 0.938rem 0;
      }

      &.no-actions {
        & > .content {
          margin: 0.938rem 0 0 0;
        }
      }
    }

    & > .content {
      display: flex;
      flex-direction: column;
      margin: 0 0.938rem;
      flex: 1;
      justify-content: center;
      overflow: hidden;
    }
  }

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;

    & > :global(.button) {
      align-self: initial;

      &:not(:last-child) {
        margin: 0 0.938rem 0 0;
      }
    }
  }

  .title,
  .subtitle {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>

<div
  class={`media ${classified} ${alignment} ${position} ${!actions.length ? 'no-actions' : ''}`}>
  {#if placeholder}
    <svelte:component this={components.placeholders.code} />
  {/if}
  {#if image}
    <svelte:component this={components.image} {...image} />
  {/if}
  {#if title || subtitle || description}
    <div class="content">
      <div class="h3 title">{title}</div>
      <div class="body-small subtitle">{subtitle}</div>
      <div class="body-small description">{description}</div>
    </div>
  {/if}
  {#if actions.length}
    <div class="actions">
      {#each actions as action}
        <svelte:component this={components.action} {...action} />
      {/each}
    </div>
  {/if}
</div>
