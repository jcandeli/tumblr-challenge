import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../Search';

configure({ adapter: new Adapter() });

const SearchComponent = Search.WrappedComponent;

describe('(Component) Search', () => {
    it('should render without errors', () => {
        const rendered = shallow(<SearchComponent />);
        expect(rendered.length).toEqual(1);
    });

    it('should save the values of input fields to state', () => {
        const rendered = shallow(<SearchComponent />);
        expect(rendered.state()).toEqual({ blogName: '', tag: '' });

        rendered.find('#blogName').simulate('change', { target: { name: 'blogName', value: 's' } });
        expect(rendered.state()).toEqual({ blogName: 's', tag: '' });
    });

    it('should display error messages', () => {
        const rendered = shallow(<SearchComponent errors={[{ title: 'error 1' }, { title: 'error 2' }]} />);
        expect(rendered.find('.error-message').length).toEqual(2);
        expect(rendered.find('.error-message').first().text()).toContain('error 1');
        expect(rendered.find('.error-message').last().text()).toContain('error 2');
    });

    it('should disable the search button if no search text', () => {
        const rendered = shallow(<SearchComponent />);
        rendered.setState({ blogName: '', tag: '' });
        expect(rendered.find('.btn-primary').getElement().props.disabled).toBe(true);

        rendered.setState({ blogName: 'silentclowns', tag: '' });
        expect(rendered.find('.btn-primary').getElement().props.disabled).toBe(false);

        rendered.setState({ blogName: '', tag: 'music' });
        expect(rendered.find('.btn-primary').getElement().props.disabled).toBe(false);
    });

    it('should disable the search button if loading previous search', () => {
        const rendered = shallow(<SearchComponent />);
        rendered.setState({ blogName: 'silentclowns', tag: 'art' });
        expect(rendered.find('.btn-primary').getElement().props.disabled).toBe(false);

        rendered.setProps({ loading: true });
        expect(rendered.find('.btn-primary').getElement().props.disabled).toBe(true);
    });

    it('should dispatch the fetchBlog action', () => {
        // create a spy and pass it as fetchBlog prop
        // simulate button click
        // check spy has been called once
    });
});
