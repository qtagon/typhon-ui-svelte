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
  export let images: Array<Image> = [];
  export let media: Media;
  export let actions: Array<Action> = [];
</script>

<style type="text/scss">
  @import './scss/fonts.scss';

  .card {
    display: flex;
    flex-direction: column;

    &.padding {
      padding: 1.875rem;
    }

    &.round {
      border-radius: 0.75rem;
    }

    &.white {
      background-color: #ffffff;
    }

    & > :global(div.image) {
      margin: 1.125rem 0;
    }

    & > :global(.media) {
      & > :global(.content) {
        margin: 0 0.625em;
      }
    }
  }

  .content {
    display: grid;
    flex-direction: column;
    width: 100%;
    grid-template-columns: repeat(auto-fill, [col] 5.938rem);

    & > .title,
    .subtitle {
      grid-column: 1/-1;
    }

    & > .title {
      margin: 0 0 0.5rem 0;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    margin: 1.125rem 0 0 0;

    & > :global(.button:not(:last-child)) {
      margin-right: 0.938rem;
    }
  }

  .images {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, [col] 5.938rem);
    margin: 1.125rem 0;

    &:not(.single) {
      grid-gap: 0.625rem;
      grid-template-rows: repeat(auto-fill, [row] 5.938rem);
    }

    &.no-media {
      margin: 0 0 1.125rem 0;
    }

    & > :global(.image:first-child) {
      grid-column: col 1 / span 2;
      grid-row: row 1 / span 2;
    }

    &.single > :global(.image:first-child) {
      grid-column: 1/-1;
      grid-row: row 1 / span 3;
    }
  }

  .display {
    color: #555761;
  }
</style>

<div class="card">
  {#if media}
    <svelte:component this={components.media} {...media} />
  {/if}
  {#if images.length}
    <div
      class={`images ${images.length === 1 ? 'single' : ''} ${media || 'no-media'}`}>
      {#each images as image}
        <svelte:component this={components.image} {...image} />
      {/each}
    </div>
  {/if}
  {#if title || subtitle}
    <div class="content">
      {#if title}
        <div class="h3 title">{title}</div>
      {/if}
      {#if subtitle}
        <div class="display subtitle">{subtitle}</div>
      {/if}
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
