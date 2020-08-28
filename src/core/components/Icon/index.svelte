<script lang="ts">
  import * as icons from './icons';

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  /**
   * Properties
   */
  export let title: string = '';
  export let color: string = '#ffffff';
  export let width: number = 14;
  export let height: number = 14;

  /**
   * Functions
   */
  const onClick = () => {
    dispatch('click', {
      name,
    });
  };
</script>

<style type="text/scss">

</style>

<svg
  on:click={onClick}
  width={icons[title].width}
  height={icons[title].height}
  viewBox={`0 0 ${icons[title].width} ${icons[title].height}`}
  fill="none"
  style={`width: ${width || icons[title].width}px; height: ${height || icons[title].height}px;`}
  xmlns="http://www.w3.org/2000/svg">
  {#each icons[title].paths as { d }, i}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      {d}
      fill={color || icons[title].color} />
  {/each}
</svg>
