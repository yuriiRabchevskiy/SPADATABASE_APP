import { Theme } from './../../Models/General';


export const light: Theme = {
  name: 'light',
  properties: {
    '--background-default': '#ffffff',
    '--background-dark': '#E1E2E1',
    '--background-light': '#F5F5F6',

    '--primary-default': '#76ff03',
    '--primary-dark': '#32cb00',
    '--primary-light': '#b0ff57',
    '--secondary-default': '#b2ff59',
    '--secondary-dark': '#7ecb20',
    '--secondary-light': '#e7ff8c',
    '--text-default': '#212121',
    '--text-secondary': '#616161',

    '--error-default': '#f50057',
    '--error-dark': '#ff5983',
    '--error-light': '#bb002f',
    '--box-shadow-dark': '0 0 10px 2px rgba(0, 0, 0, 0.5)'
  }
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--background-default': '#ffffff',
    '--background-dark': '#E1E2E1',
    '--background-light': '#F5F5F6',

    '--primary-default': '#aa00ff',
    '--primary-dark': '#7200ca',
    '--primary-light': '#e254ff',
    '--secondary-default': '#2962ff',
    '--secondary-dark': '#0039cb',
    '--secondary-light': '#768fff',
    '--text-default': '#fafafa',
    '--text-secondary': '#bdbdbd',

    '--error-default': '#ec407a',
    '--error-dark': '#b4004e',
    '--error-light': '#ff77a9',
    '--box-shadow-dark': '0 0 10px 2px rgba(0, 0, 0, 0.5)'
  }
};
