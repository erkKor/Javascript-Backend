import { render } from "@testing-library/react";
import QuantityButton from "../components/items/QuantityButton";


describe (QuantityButton, () => {
    it('Quantity value less then 2', () => {
        const {getByTestId} = render(<QuantityButton />)
        const value = Number(getByTestId('quantity').textContent)

        expect(value).toBeLessThan(2)
    })
})