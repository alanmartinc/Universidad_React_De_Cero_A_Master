import {configure, shallow, mount, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import Counter from './Counter'

configure({
    adapter: new Adapter()
})

describe('Probando componente <Counter/>', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<Counter/>)
    })

    test('Validar que coincida con Snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    test('Validar funcionamiento de botones', () => {
        wrapper.find('button').first().simulate('click')

        expect(wrapper.find('h1').text()).toBe('1')

        wrapper.find('button').last().simulate('click')
        wrapper.find('button').last().simulate('click')
        wrapper.find('button').last().simulate('click')

        expect(wrapper.find('h1').text()).toBe('-2')
    })
})