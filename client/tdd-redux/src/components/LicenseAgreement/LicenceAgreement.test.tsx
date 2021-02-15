import { renderWithRedux } from 'utils'
import Checkbox from 'components/Checkbox'
import AgreementSubmitButton from 'components/AgreementSubmitButton'
import LicenseAgreement from '.'

jest.mock('components/Checkbox', () => () => null)
jest.mock('components/AgreementSubmitButton', () => () => null)

describe('LicenseAgreement', () => {
  it('renders Checkbox with name and label', () => {
    const renderer = renderWithRedux(<LicenseAgreement />)

    const el = renderer.root.findByType(Checkbox)
    expect(el.props.name).toBe('agree')
    expect(el.props.label).toBe('Agree')
  })

  it('renders AgreementSubmitButton', () => {
    const renderer = renderWithRedux(<LicenseAgreement />)

    expect(() => renderer.root.findByType(AgreementSubmitButton)).not.toThrow()
  })
})
