import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Test in <AddCategory />', () => {
  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change the text box', () => {
    const input = wrapper.find('input');
    const value = 'Hello world';
    input.simulate('change', { target: { value } });
    expect(wrapper.find('h3').text().trim()).toBe(value.toUpperCase());
  });

  test('should not post info with submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should call setCategories and clean the input text', () => {
    const value = 'Hello world';
    wrapper.find('input').simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
