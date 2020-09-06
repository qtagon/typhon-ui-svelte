<script lang="ts">
  import type { Typhon } from '@qtagon/typhon-ui';

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  /**
   * Components
   */
  import Media from '../Media.svelte';
  import Card from '../Card.svelte';
  import Action from '../Action.svelte';
  import Button from '../Button.svelte';
  import Image from '../Image.svelte';
  import Notification from '../Notification.svelte';
  import Search from '../Search.svelte';
  import Tabs from '../Tabs.svelte';
  import Menu from '../Menu.svelte';
  import Subject from '../Subject.svelte';
  import Message from '../Message.svelte';
  import Modal from '../Modal.svelte';
  import Scroller from '../Scroller.svelte';
  import Form from '../Form.svelte';
  const components = {
    media: Media,
    card: Card,
    action: Action,
    image: Image,
    notification: Notification,
    search: Search,
    tabs: Tabs,
    menu: Menu,
    subject: Subject,
    message: Message,
    modal: Modal,
    button: Button,
    form: Form
  };

  /**
   * Properties
   */
  export let dynamic: Typhon;

  /**
   * Functions
   */
  const emit = (name: string = '', parameters: any) => {
    if (name) dispatch(name, parameters);
    return;
  };

  const onSearchEvent = ({ detail }) => {
    emit('search', detail);
  };

  const onElementEvent = ({ detail }) => {
    emit('element', detail);
  };

  const onEvent = ({ detail }) => {
    emit('event', detail);
  };
</script>

<style type="text/scss">
  @import '../scss/global.scss';
  @import '../scss/fonts.scss';
  @import '../scss/alignment.scss';
</style>

{#each dynamic.getComponents('modal') as component (component.identifier)}
  <svelte:component
    this={components[component.type]}
    on:search={onSearchEvent}
    {...component} />
{/each}

{#each dynamic.getColumns() as column (column.identifier)}
  <div class={`column ${column.classified}`} style={column.style}>
    <Scroller wrap={column.scroll}>
      {#each column.getRows() as row (row.identifier)}
        <div class={`row ${row.classified}`}>
          <Scroller wrap={row.scroll}>
            {#each row.getContainers() as container (container.identifier)}
              <div
                class={`container ${container.classified}`}
                style={container.style}>
                <Scroller wrap={container.scroll}>
                  {#each container.getComponents() as component (component.identifier)}
                    <svelte:component
                      this={components[component.type]}
                      on:search={onSearchEvent}
                      on:element={onElementEvent}
                      on:event={onEvent}
                      {...component} />
                  {/each}
                </Scroller>
              </div>
            {/each}
          </Scroller>
        </div>
      {/each}
    </Scroller>
  </div>
{/each}
