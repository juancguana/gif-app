import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Test in <GifExpertApp />', () => {
  test('should show corectly', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show a categories list', () => {
    const categories = ['One Punch', 'Dragon Ball'];

    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
