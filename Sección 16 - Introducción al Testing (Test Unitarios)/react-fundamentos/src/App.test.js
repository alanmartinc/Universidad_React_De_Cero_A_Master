import {configure, shallow, mount, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App, {Title} from './App'

configure({
    adapter: new Adapter()
})

describe('Probando componente <App/>', () => {
    test('Probando renderizado de componente', () => {
        const wrapper = shallow(<App />)

        console.log(wrapper.find('.container').html())
        console.log(wrapper.find('div > p').html())
        console.log(wrapper.find('[num=3]').html())
        console.log(wrapper.find('[num="3"]').html())
        console.log(wrapper.find('[type="text"]').html())
        console.log(wrapper.find(Title).html())

        // expect(wrapper.find('h1').html()).toBe('<h1>Introducción a Unit Testing</h1>')
        // expect(wrapper.find('h1')).toHaveLength(1)
        // expect(wrapper.html()).toBe('<div><h1>Introducción a Unit Testing</h1></div>')
    })
})