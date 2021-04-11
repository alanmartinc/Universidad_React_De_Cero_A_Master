import {configure, shallow, mount, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import List from './List'

configure({
    adapter: new Adapter()
})

describe('Probando componente <List/>', () => {
    const fruits = [
        {name: 'fresa', id: 1},
        {name: 'manzana', id: 2},
        {name: 'naranja', id: 3},
        {name: 'mango', id: 4}
    ]

    let wrapper 

    beforeEach(() => {
        wrapper = shallow(<List title='Frutas' list={fruits} />)
    })

    test('Validar nodos', () => {
        // Validar si existe nodo
        expect(wrapper.find('h1').exists()).toBe(true)

        // Validar si tiene clase css
        expect(wrapper.find('h1').hasClass('big')).toBe(true)

        // Validar cantidad de elementos hijos
        expect(wrapper.find('ul').children().length).toBe(4)

        // Validar el contenido de texto
        console.log(wrapper.find('li').first().html())
        console.log(wrapper.find('li').last().html())

        expect(wrapper.find('ul').childAt(2).text()).toBe('naranja')

        // Validar tipo de nodo / elemento
        expect(wrapper.find('ul').childAt(2).type()).toBe('li')

        // Validar HTML
        expect(wrapper.find('ul').childAt(2).html()).toBe('<li>naranja</li>')
    })

    test('Validar actualizaciones en props', () => {
        // Validar cantidad de elementos li
        expect(wrapper.find('li').length).toBe(4)

        wrapper.setProps({
            list: [
                {name: 'Kiwi', id: 5}
            ]
        })

        // Validar cantidad de elementos li
        expect(wrapper.find('li').length).toBe(1)

        wrapper.setProps({
            title: 'Super Frutas'
        })

        expect(wrapper.find('.big').text()).toBe('Super Frutas')
    })

    test('Validar que coincida con Snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})