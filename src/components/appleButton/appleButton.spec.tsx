import { screen, render } from '@testing-library/react'
import { AppleButton } from '.'
import { describe } from 'node:test'


describe('<AppleButton />', () => {
    it('should render button', () => {
        render(<AppleButton />)

        const button = screen.getByText('Continuar com Apple')
        expect(button).toBeInTheDocument()
    })
})