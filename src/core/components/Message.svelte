<script lang="ts">
  import { ALIGNMENT, POSITION, SIZE } from '@qtagon/typhon-ui';
  import type { Icon } from '@qtagon/typhon-ui';

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
  export let alignment: ALIGNMENT = ALIGNMENT.NONE;
  export let position: POSITION = POSITION.NONE;
  export let style: string = '';

  /**
   *
   */
  export let subtitle: string = '';
  export let icon: Icon;
</script>

<style type="text/scss">
  @import './scss/constraints.scss';
  @import './scss/fonts.scss';

  .middle {
    justify-content: center;
    align-items: center;
  }

  .message {
    display: flex;
    flex-direction: column;

    & > .content {
      display: flex;
      flex-direction: column;
    }
  }

  .icon {
    & > :global(svg) {
      background: #f7f7f7;
      border-radius: 3.125rem;
      padding: 2.563rem;
    }
  }
</style>

<div class={`message ${alignment} ${position} ${classified}`} style={style}>
  {#if icon}
    <div class="icon">
      <svelte:component this={components.icon} {...icon} />
    </div>
  {/if}
  {#if title || subtitle}
    <div class={`content ${alignment}`}>
      {#if title}
        <div class="h1">{title}</div>
      {/if}
      {#if subtitle}
        <div class="display">{subtitle}</div>
      {/if}
    </div>
  {/if}
</div>
