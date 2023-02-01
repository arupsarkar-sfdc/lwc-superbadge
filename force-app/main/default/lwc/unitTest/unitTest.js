import { LightningElement, api } from 'lwc';
import { sum } from './sum';

export default class UnitTest extends LightningElement {
    @api unitNumber = sum(10,10)

    handleChange(event) {
        this.unitNumber = event.target.value
    }
}