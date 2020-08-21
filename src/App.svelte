<script lang="ts">
  import Kappa, { SIZE, ALIGNMENT } from './core/kappa';
  /**
   * Components
   */
  import Media from './core/components/Media.svelte';
  import Card from './core/components/Card.svelte';
  import Action from './core/components/Action.svelte';
  import Image from './core/components/Image.svelte';
  import Notification from './core/components/Notification.svelte';

  const components = {
    media: Media,
    card: Card,
    action: Action,
    image: Image,
    notification: Notification,
  };

  const dynamic = new Kappa('ui').setRow('content');
  const container = dynamic.onRow('content').setContainer('products');

  const notification = container.setNotification(
    'Marriet Miles',
    'sent you a friend request',
    '4min'
  );

  notification.setAction('').setClassified('primary').setIcon('addUser');
  notification.setButton('Add').setClassified('success').setIcon('check');
  notification
    .setButton('Ignore')
    .setClassified('transparent black')
    .setIcon('close');
  notification
    .setIndicator()
    .setStyle('margin-top: 0.625rem;')
    .setAlignment(ALIGNMENT.TOP);

  notification
    .setImage(
      'https://images.pexels.com/photos/4845272/pexels-photo-4845272.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      SIZE.EXTRA_SMALL_X2
    )
    .setAlignment(ALIGNMENT.TOP);

  const notificationx = container.setNotification(
    'Allie X',
    'sent you a friend request',
    'Feb 18, 2018'
  );

  notificationx.setAction('').setClassified('primary').setIcon('addUser');
  notificationx.setButton('Added').setClassified('dark').setIcon('close');
  notificationx
    .setIndicator()
    .setStyle('margin-top: 0.9375rem;')
    .setAlignment(ALIGNMENT.TOP);

  notificationx
    .setImage(
      'https://images.pexels.com/photos/4294972/pexels-photo-4294972.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      SIZE.EXTRA_SMALL
    )
    .setAlignment(ALIGNMENT.TOP);
</script>

<style type="text/scss">

</style>

<main>
  {#each dynamic.getRows() as row, i}
    <div class="row">
      {#each row.getContainers() as container}
        <div class="container">
          {#each container.getComponents() as component}
            <svelte:component
              this={components[component.type]}
              {...component} />
          {/each}
        </div>
      {/each}
    </div>
  {/each}
</main>
