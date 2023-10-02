import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { logRoles } from '@testing-library/dom';

test('button has correct initial color and updates when clicked', () => {
  const {container}=render(<App/>);
  logRoles(container);
  const colorButton=screen.getByRole('button',{name:'Change to blue'});
  expect(colorButton).toHaveStyle({ backgroundColor:"red" });
});

test('button turns blue when clicked', () => {
  render(<App/>);
  const colorButton=screen.getByRole('button',{name:'Change to blue'});
  expect(colorButton).toHaveStyle({ backgroundColor:"red" });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor:"blue" });
  expect(colorButton).toHaveTextContent('Change to red')

});
test('initial conditions', () => {
  render(<App/>);
  const colorButton=screen.getByRole('button',{name:'Change to blue'});
  expect(colorButton).toBeEnabled();
  const checkbox=screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();

});
test('checkbox disables button on first click and enables on second click',()=>{
  render(<App/>);
  const checkbox=screen.getByRole('checkbox' ,{name:'Disable button'});
  const button=screen.getByRole('button',{name:'Change to blue'});
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();

});
test('Disables button has gray background and reverts to red',()=>{
  render(<App/>);
  const checkbox=screen.getByRole('checkbox' ,{name:'Disable button'});
  const button=screen.getByRole('button',{name:'Change to blue'});
  fireEvent.click(checkbox);
  expect(button).toHaveStyle('background-color:gray');
  fireEvent.click(checkbox);
  expect(button).toHaveStyle('background-color:red');

});
test('Disables button has gray background and reverts to blue',()=>{
  render(<App/>);
  const checkbox=screen.getByRole('checkbox' ,{name:'Disable button'});
  const button=screen.getByRole('button',{name:'Change to blue'});
  fireEvent.click(button);
  fireEvent.click(checkbox);
  expect(button).toHaveStyle('background-color:gray');
  fireEvent.click(checkbox);
  expect(button).toHaveStyle('background-color:blue');

});
