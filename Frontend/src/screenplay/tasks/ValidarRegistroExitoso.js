import { expect } from '@playwright/test'
import IsVisible from '../questions/isVisible.js'
import mensajeExitoso from '../pages/ClientePage.js'

export default class ValidarRegistroExitoso{

    static async execute(actor) {
        const visible = await actor.asks(IsVisible.for(mensajeExitoso));
        expect(visible).toBe(true);
    }
    
}