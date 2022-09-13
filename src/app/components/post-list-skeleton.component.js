import { h } from 'vue';
import PostListSkeletonItem from './post-list-skeleton-item.component';

import 'skeleton-screen-css';
import '../../css/skeleton.css';

export default {
  name: 'post-list-skeleton',
  props: {
    itemCount: {
      type: Number,
      default: 10,
    },
  },
  render() {
    return h('div', { class: 'ssc' }, Array.from({ length: this.itemCount })
      .map(() => h(PostListSkeletonItem)));
  },
};
