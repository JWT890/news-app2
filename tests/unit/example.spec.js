import { shallowMount } from '@vue/test-utils';
import NewsApp from '@/components/NewsApp.vue';

describe('NewsApp', () => {
  it('should fetch news articles on mounted', async () => {
    const wrapper = shallowMount(NewsApp);

    // Mock the fetchNews function
    wrapper.vm.fetchNews = jest.fn().mockResolvedValueOnce();

    // Trigger the mounted hook
    wrapper.vm.$options.mounted.call(wrapper.vm);

    // Assert that fetchNews was called
    expect(wrapper.vm.fetchNews).toHaveBeenCalled();
  });
});