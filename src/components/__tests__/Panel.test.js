import React from 'react';
import { shallow } from 'enzyme';
import Panel from '../Panel';

const mockProps = {
    title: "Test Panel",
    children: {},
};

describe('the Panel component', () => {

    it('renders correctly', () => {
        const wrapper = shallow(<Panel {...mockProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders children correctly', () => {
        const wrapper = shallow(
            <Panel title={mockProps.title}>
                <div>
                    <p>Test panel children</p>
                </div>
            </Panel>
        );
        expect(wrapper.find("div")).toHaveLength(1);
        expect(wrapper.find("p")).toHaveLength(1);
        expect(wrapper.find("p").text()).toEqual("Test panel children");
    });

    it('renders the title prop correctly', () => {
        const wrapper = shallow(<Panel {...mockProps} />);
        expect(wrapper.prop("title")).toEqual("Test Panel");
    });

    it('handles no children', () => {
        const wrapper = shallow(<Panel title={mockProps.title} />);
        expect(wrapper.exists()).toBe(true);
    });
})

