<script lang="ts">
  import type { Image } from '../kappa/components/Image';
  import type { Action } from '../kappa/components/Action';
  import type { Media } from '../kappa/components/Media';

  /**
   * Components
   */
  import caction from './Action.svelte';
  import cmedia from './Media.svelte';
  import cimage from './Image.svelte';
  const components = {
    action: caction,
    media: cmedia,
    image: cimage,
  };

  export let title: string = '';
  export let subtitle: string = '';
  export let image: Image;
  export let media: Media;
  export let actions: Array<Action> = [];
</script>

<style type="text/scss">
  @import './scss/fonts.scss';

  img {
    object-fit: cover;
    object-position: top;

    &.sm {
      width: 3rem;
      height: 3rem;
      border-radius: 0.75rem;
    }
  }

  .card {
    display: flex;
    flex-direction: column;

    & > :global(div.image) {
      margin: 1.125rem 0;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;

    & > :last-child {
      margin: 0.5rem 0 0 0;
    }
  }

  .image {
    display: flex;

    & > a {
      display: flex;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    margin: 1.125rem 0 0 0;

    & > :global(button:not(:last-child)) {
      margin: 0 0.938rem 0 0;
    }
  }
</style>

<div class="card">
  {#if media}
    <svelte:component this={components.media} {...media} />
  {/if}
  {#if image}
    <svelte:component this={components.image} {...image} />
  {/if}
  <div class="content">
    <div class="h3">{title}</div>
    <div class="body-small">{subtitle}</div>
  </div>
  {#if actions.length}
    <div class="actions">
      {#each actions as action}
        <svelte:component this={components.action} {...action} />
      {/each}
    </div>
  {/if}
</div>
