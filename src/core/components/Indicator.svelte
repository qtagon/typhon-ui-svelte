<script lang="ts">
  import { SIZE, ALIGNMENT } from '@qtagon/typhon-ui';

  export let size: SIZE = SIZE.NONE;
  export let classified: string = '';
  export let alignment: ALIGNMENT = ALIGNMENT.NONE;
  export let style: string = '';
</script>

<style type="text/scss">
  @import './scss/size.scss';
  @import './scss/alignment.scss';

  .indicator {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: #ff4e4e;
    margin: 0 0.625em 0 0;
  }
</style>

<div class={`indicator ${size} ${alignment} ${classified}`} {style} />
