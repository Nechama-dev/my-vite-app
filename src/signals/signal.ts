import {signal} from '@preact/signals-react'

export const count = signal(0);

export const increament = () => count.value ++;
export const dicreament = () => count.value --;