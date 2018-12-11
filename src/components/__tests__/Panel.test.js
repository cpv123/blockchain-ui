import React from 'react';
import { shallow } from 'enzyme';
import Panel from '../Panel';

describe('The Panel component', () => {

    it('renders as expected with children', () => {
        const props = { title: "Test Panel" };
        const wrapper = shallow(
            <Panel {...props}>
                <div>
                    <p>Test panel children</p>
                </div>
            </Panel>
        ).dive();

        expect(wrapper).toMatchSnapshot();
    });

    it('handles no children', () => {
        const props = { title: "Test Panel" };
        const wrapper = shallow(<Panel {...props} />).dive();

        expect(wrapper.exists()).toBe(true);
    });
})
