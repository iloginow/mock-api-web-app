import { h } from 'vue';
import { mapGetters } from 'vuex';

import '../../css/header.css';

export default {
  name: 'app-header',
  computed: {
    ...mapGetters({
      selectedPostsCount: 'topRated/selectedPostsCount',
      totalPostsCount: 'topRated/totalPostsCount',
    }),
    selectedStatus() {
      if (!this.totalPostsCount) return '';
      if (!this.selectedPostsCount) return 'No posts selected';
      if (this.selectedPostsCount === this.totalPostsCount) return 'All posts selected';
      return `Selected ${this.selectedPostsCount} posts out of ${this.totalPostsCount}`;
    },
  },
  render() {
    return h('header', { class: 'app-header' }, [
      h('h1', { class: 'header-title' }, 'Post List App'),
      h('div', { class: 'header-selected-status' }, this.selectedStatus),
    ]);
  },
};
