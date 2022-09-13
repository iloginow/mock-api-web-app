import { h } from 'vue';

import Header from './components/header.component';
import PostList from './views/post-list.view';
import Footer from './components/footer.component';

export default {
  name: 'app',
  render() {
    return [
      h(Header),
      h(PostList),
      h(Footer),
    ];
  },
};
