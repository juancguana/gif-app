import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Test in <GifGridItem />', () => {
  const title = 'Un titulo';
  const url = 'https://localhost/algo.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('should show the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have a parragraph with the title', () => {
    const p = wrapper.find('figcaption');
    expect(p.text().trim()).toBe(title);
  });

  test('should have an image equal to url and alt by props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('should have class animate__fadeIn', () => {
    const figure = wrapper.find('figure');
    const className = figure.prop('className');
    expect(className.includes('animate__fadeIn')).toBe(true);
  });
});
