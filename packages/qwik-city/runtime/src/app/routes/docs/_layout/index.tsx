import { component$, Host, Slot, useStyles$ } from '@builder.io/qwik';
import type { HeadComponent } from '~qwik-city-runtime';
import { Menu } from '../../../components/menu/menu';
import styles from './docs.css';

export default component$(() => {
  useStyles$(styles);

  return (
    <Host class="docs">
      <Menu />
      <section class="docs-content">
        <Slot />
      </section>
    </Host>
  );
});

export const head: HeadComponent = ({ resolved }) => {
  return (
    <>
      <title>Docs: {resolved.title}</title>
    </>
  );
};
