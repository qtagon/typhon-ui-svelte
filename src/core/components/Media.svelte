<script lang="ts">
  import type { Action, Button, Image } from '@qtagon/typhon-ui';
  import { POSITION, ALIGNMENT } from '@qtagon/typhon-ui';

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  /**
   * Components
   */
  import caction from './Action.svelte';
  import cbutton from './Button.svelte';
  import cimage from './Image.svelte';
  import ccode from './Placeholder/Code.svelte';
  const components = {
    action: caction,
    button: cbutton,
    image: cimage,
    placeholders: {
      code: ccode,
    },
  };

  export let title: string = '';
  export let subtitle: string = '';
  export let classified: string = '';
  export let style: string = '';
  export let description: string = '';
  export let image: Image;
  export let actions: Array<Action> = [];
  export let buttons: Array<Button> = [];
  export let alignment: ALIGNMENT = ALIGNMENT.NONE;
  export let position: POSITION = POSITION.NONE;
  export let placeholder: boolean = false;

  /**
   * Functions
   */
  const emit = (name: string = '', parameters: any) => {
    if (name) dispatch(name, parameters);
    return;
  };

  const onEvent = ({ detail }) => {
    const { name } = detail;
    emit(name, detail);
  };
</script>

<div
  class={`media ${classified} ${alignment} ${position} ${
    !actions.length ? 'no-actions' : ''
  }`}
  {style}
>
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
      {#if buttons.length}
        {#each buttons as button}
          <svelte:component
            this={components.button}
            {...button}
            on:event={onEvent}
          />
        {/each}
      {/if}
    </div>
  {/if}
</div>

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
