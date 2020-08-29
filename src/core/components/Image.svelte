<script lang="ts">
  import { SIZE, ALIGNMENT, POSITION } from '../kappa';

  export let url: string = '';
  export let title: string = '';
  export let size: SIZE = SIZE.NONE;
  export let classified: string = '';
  export let alignment: ALIGNMENT = ALIGNMENT.NONE;
  export let position: POSITION = POSITION.NONE;
</script>

<style type="text/scss">
  @import './scss/size.scss';
  @import './scss/alignment.scss';

  img {
    object-fit: cover;
    object-position: top;
    border-radius: 0.5rem;
  }

  .image {
    display: flex;
    border-radius: 0.5rem;
    margin: 0;

    & > a {
      display: flex;
    }
  }
</style>

<div class={`image ${size} ${alignment} ${classified}`}>
  <a
    href={url}
    class={`${size} ${classified}`}
    target="_blank"
    aria-label={title || url}
    title={title || url}
    rel="noopener noreferrer">
    <img src={url} alt={title || url} class={`${classified} ${size} ${position}`} loading="lazy" />
  </a>
</div>
