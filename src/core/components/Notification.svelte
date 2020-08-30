<script lang="ts">
  import type {
    Button,
    Image,
    Action,
    Indicator,
  } from '@qtagon/typhon-ui';

  /**
   * Components
   */
  import caction from './Action.svelte';
  import cimage from './Image.svelte';
  import cindicator from './Indicator.svelte';
  import cbutton from './Button.svelte';

  const components = {
    action: caction,
    image: cimage,
    indicator: cindicator,
    button: cbutton,
  };

  export let title: string = '';
  export let subtitle: string = '';
  export let description: string = '';
  export let image: Image;
  export let indicator: Indicator;
  export let actions: Array<Action> = [];
  export let buttons: Array<Button> = [];
</script>

<style type="text/scss">
  @import './scss/fonts.scss';

  .notification {
    display: flex;
    justify-content: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    margin: 0 0.625rem;
    flex: 1;
    justify-content: center;
  }

  .actions,
  .buttons {
    display: flex;
    align-items: center;

    &:not(.buttons) {
      justify-content: center;
    }

    &.buttons {
      margin: 1.25rem 0 0 0;
    }

    & > :global(button:not(:last-child)) {
      margin: 0 0.938rem 0 0;
    }
  }
</style>

<div class="notification">
  {#if indicator}
    <svelte:component this={components.indicator} {...indicator} />
  {/if}
  {#if image}
    <svelte:component this={components.image} {...image} />
  {/if}
  <div class="content">
    <div class="h4">
      {title}
      {#if description}
        <span class="body-small">&nbsp;&nbsp;{description}</span>
      {/if}
    </div>
    <div class="body-large">{subtitle}</div>
    {#if buttons.length}
      <div class="buttons">
        {#each buttons as button}
          <svelte:component this={components.button} {...button} />
        {/each}
      </div>
    {/if}
  </div>
  {#if actions.length}
    <div class="actions">
      {#each actions as action}
        <svelte:component this={components.action} {...action} />
      {/each}
    </div>
  {/if}
</div>
