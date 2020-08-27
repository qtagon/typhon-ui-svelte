<script lang="ts">
  import type { Image } from '../kappa/components/Image';
  import type { Action } from '../kappa/components/Action';

  /**
   * Components
   */
  import caction from './Action.svelte';
  import cimage from './Image.svelte';
  const components = {
    action: caction,
    image: cimage,
  };

  export let title: string = '';
  export let subtitle: string = '';
  export let classified: string = '';
  export let description: string = '';
  export let image: Image;
  export let actions: Array<Action> = [];
</script>

<style type="text/scss">
  @import './scss/constraints.scss';
  @import './scss/fonts.scss';

  .media {
    display: flex;
  }

  .content {
    display: flex;
    flex-direction: column;
    margin: 0 0.938rem;
    flex: 1;
    justify-content: center;
    overflow: hidden;
  }

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;

    & > :global(.button:not(:last-child)) {
      margin: 0 0.938rem 0 0;
    }
  }

  .title,
  .subtitle {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>

<div class={`media ${classified}`}>
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
