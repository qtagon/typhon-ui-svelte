<script lang="ts">
  import type { Image } from '../kappa/components/Image';

  export let title: string = '';
  export let subtitle: string = '';
  export let image: Image;
</script>

<style type="text/scss">
  img {
    &.sm {
      width: 3rem;
      height: 3rem;
      border-radius: 0.75rem;
    }
  }

  .media {
    display: flex;
  }

  .image {
    display: flex;
    & > a {
      display: flex;
    }
  }
</style>

<div class="media">
  <div class="image">
    <a href={image.url} target="_blank">
      <img
        src={image.url}
        alt={image.title}
        class={`${image.classified} ${image.size}`} />
    </a>
  </div>
  <div>
    <div>{title}</div>
    <div>{subtitle}</div>
  </div>
</div>
