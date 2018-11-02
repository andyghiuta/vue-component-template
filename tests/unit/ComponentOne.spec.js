import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ComponentOne from '@/components/ComponentOne.vue';

describe('ComponentOne.vue', () => {
  it('renders footer', () => {
    const wrapper = shallowMount(ComponentOne);
    expect(wrapper.contains('div')).to.be.true;
  });
});
