<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import * as icons from './icons';

  // Props
  export let title: string = '';
  export let color: string = '#ffffff';

  // Events
  const dispatch = createEventDispatcher();

  // Handlers
  const click = () => {
    dispatch('clicked', {
      name,
    });
  };
</script>

<style type="text/scss">

</style>

<svg
  on:click={click}
  width={icons[title].width}
  height={icons[title].height}
  viewBox={`0 0 ${icons[title].width} ${icons[title].height}`}
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  {#each icons[title].paths as { d }, i}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      {d}
      fill={color || icons[title].color} />
  {/each}
</svg>
