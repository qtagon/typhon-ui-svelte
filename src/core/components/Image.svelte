<script lang="ts">
  import type { Image } from '../kappa/components/Image';
  import type { Action } from '../kappa/components/Action';
  import type { SIZE } from '../kappa/interfaces/index';

  export let url: string = '';
  export let title: string = '';
  export let size: SIZE;
  export let classified: string = '';
</script>

<style type="text/scss">
  img {
    object-fit: cover;
    object-position: top;
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;

    &.sm {
      width: 3rem;
      height: 3rem;
      border-radius: 0.75rem;
    }
  }

  .image {
    display: flex;
    border-radius: 0.5rem;

    & > a {
      width: 100%;
      height: 100%;
      display: flex;
    }
  }
</style>

<div class="image">
  <a href={url} target="_blank">
    <img
      src={url}
      alt={title}
      class={`${classified} ${size}`}
      aria-label={title}
      rel="noopener noreferrer" />
  </a>
</div>
