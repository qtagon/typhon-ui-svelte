<script lang="ts">
  import { ALIGNMENT, POSITION, SIZE } from '@qtagon/typhon-ui';
  import type { Button } from '@qtagon/typhon-ui';

  import { fade } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  /**
   * Components
   */
  import cicon from './Icon/index.svelte';
  import cbutton from './Button.svelte';
  const components = {
    icon: cicon,
    button: cbutton,
  };

  /**
   * Properties
   */
  export let identifier: string = '';
  export let type: string = '';
  export let title: string = '';
  export let classified: string = '';
  export let alignment: ALIGNMENT = ALIGNMENT.NONE;
  export let position: POSITION = POSITION.NONE;
  export let size: SIZE = SIZE.NONE;
  export let style: string = '';
  export let placeholder: boolean = false;
  export let visible: boolean = false;

  export let buttons: Array<Button> = [];
  export let subtitle: string = '';
  export let background = 'rgba(47, 49, 54, .2)';
  const icon = {
    title: 'close',
  };

  /**
   * Functions
   */
  const emit = (name: string = '', parameters: any) => {
    if (name) dispatch(name, parameters);
    return;
  };

  const onCancel = () => {
    visible = !visible;
    emit('cancel', { identifier });
  };

  const onConfirm = () => {
    onCancel();
  };

  const handleKeydown = (e) => {
    const { key, keyCode } = e;
    switch (keyCode) {
      case 13:
      case 27:
      case undefined:
        onCancel();
      default:
        break;
    }
  };
</script>

<style type="text/scss">
  @import './scss/fonts.scss';

  $breakpoint-small: 576px;
  $breakpoint-medium: 992px;
  $breakpoint-large: 1200px;

  .container {
    position: absolute;
    z-index: 999;
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: opacity 0.15s;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 150ms ease-out;
  }

  .modal {
    border-radius: 1rem;
    padding: 1.875rem;
    width: 22.917%;
    background: #ffffff;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: $breakpoint-large) {
      width: 30%;
    }

    @media only screen and (max-width: $breakpoint-medium) {
      width: 45%;
    }

    @media only screen and (max-width: $breakpoint-small) {
      width: 80%;
    }

    & > .content {
      & > .display {
        margin: 0.625em 0 0 0;
        color: #8f92a1;
      }
    }
  }

  .headline {
    display: flex;
    align-items: center;

    & > .title {
      flex: 1;
    }

    & > :global(svg) {
      margin-left: auto;
      cursor: pointer;

      & > :global(path) {
        fill: #1e1f20;
      }
    }
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 1.125rem 0 0 0;

    & > :global(.button) {
      align-self: initial;

      &:not(:last-child) {
        margin: 0 0.938rem 0 0;
      }
    }
  }
</style>

<svelte:window on:keydown={handleKeydown} on:click={handleKeydown} />

{#if visible}
  <div
    class="container"
    style={`background: ${background};`}
    transition:fade={{ duration: 150 }}>
    <div class="modal">
      <div class="content">
        <div class="headline">
          {#if title}
            <div class="h2 title">{title}</div>
          {/if}
          <svelte:component
            this={components.icon}
            {...icon}
            on:click={onCancel} />
        </div>
        <div class="display">{subtitle}</div>
      </div>
      {#if buttons.length}
        <div class="actions">
          {#each buttons as button}
            <svelte:component
              this={components.button}
              {...button}
              on:confirm={onConfirm}
              on:cancel={onCancel} />
          {/each}
        </div>
      {/if}
    </div>
  </div>
{/if}
