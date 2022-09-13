import { h, ref } from 'vue';

import '../../css/footer.css';

export default {
  name: 'app-footer',
  setup() {
    const date = new Date();
    const currentYear = ref(date.getFullYear());
    return { currentYear };
  },
  render() {
    return h('footer', { class: 'app-footer' }, [
      h('p', { class: 'footer-copyright' }, [
        h('div', [
          h('span', { innerHTML: '&copy' }),
          h('span', { innerHTML: '&nbsp' }),
          h('span', this.currentYear),
          h('span', { innerHTML: '&nbsp' }),
          h('span', 'Ilia Loginov'),
        ]),
        h('div', [
          h('a', {
            class: 'footer-copyright-email',
            href: 'mailto:i.loginow.by@gmail.com',
          }, 'i.loginow.by@gmail.com'),
        ]),
      ]),
      h('p', { class: 'footer-source' }, [
        h('a', {
          class: 'footer-source-link',
          href: 'https://github.com/iloginow/mock-api-web-app',
          target: '_blank',
        }, 'Source code'),
      ]),
    ]);
  },
};
