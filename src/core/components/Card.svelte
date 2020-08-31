<script lang="ts">
  import type { Media, Action, Image, Button } from '@qtagon/typhon-ui';

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  /**
   * Components
   */
  import cbutton from './Button.svelte';
  import caction from './Action.svelte';
  import cmedia from './Media.svelte';
  import cimage from './Image.svelte';
  import ccode from './Placeholder/Code.svelte';
  const components = {
    action: caction,
    media: cmedia,
    image: cimage,
    button: cbutton,
    placeholders: {
      code: ccode,
    },
  };

  export let title: string = '';
  export let subtitle: string = '';
  export let classified: string = '';
  export let images: Array<Image> = [];
  export let media: Media;
  export let actions: Array<Action> = [];
  export let buttons: Array<Button> = [];
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

<style type="text/scss">
  @import './scss/constraints.scss';
  @import './scss/fonts.scss';

  .card {
    display: flex;
    flex-direction: column;

    & > :global(div.image) {
      margin: 1.125rem 0;
    }

    & > :global(.media) {
      & > :global(.content) {
        margin: 0 0.625em;
      }
    }

    &.single-line {
      & > .content {
        & > .subtitle,
        & > .title {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }

  .actions,
  .buttons {
    display: flex;
    align-items: center;
    margin: 1.125rem 0 0 0;

    & > :global(.button:not(:last-child)) {
      margin-right: 0.938rem;
    }
  }

  .content {
    display: grid;
    flex-direction: column;
    width: 100%;
    grid-template-columns: repeat(auto-fill, [col] 100%);

    & > .title,
    .subtitle {
      &.title {
        margin: 0 0 0.5rem 0;
      }

      grid-column: 1/-1;
    }
  }

  .images {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, [col] 100%);
    margin: 1.125rem 0;

    &:not(.single) {
      grid-gap: 0.625rem;
      grid-template-columns: repeat(auto-fill, [col] 5.938rem);
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

  .subtitle {
    color: #555761;
  }
</style>

<div class={`card ${classified}`}>
  {#if placeholder}
    <svelte:component this={components.placeholders.code} />
  {/if}
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
  {#if buttons.length}
    <div class="buttons">
      {#each buttons as button}
        <svelte:component
          this={components.button}
          {...button}
          on:event={onEvent} />
      {/each}
    </div>
  {/if}
</div>
