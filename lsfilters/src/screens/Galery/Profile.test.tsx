import { fireEvent, render, screen } from '@testing-library/react-native';
import { describe, expect, test } from '@jest/globals';
import {Alert} from 'react-native';
import Profile from './Profile';

describe('Conjunto de tests del componente Profile', () => {
    jest.spyOn(Alert, 'alert');

    test("Validamos que muestre error si el nombre está vacío", () => {
        // Arrange: prerequisitos del test
        render(<Profile />);

        // Act: acción que queremos testear
        fireEvent.press(screen.getByText('Validar'));

        
        // Assert: validación esperada
        expect(Alert.alert).toHaveBeenCalledWith("Tienes que poner un nombre de usuario 👺");
    });

    test("Validamos que se cambie el color de fondo al seleccionar el emoji", () => {
        //Arrange
        render(<Profile />);
        const avatarButton = screen.getByTestId("avatar-2");

        /// Act: acción que queremos testear
        fireEvent.press(avatarButton);
        
        // Assert: validación esperada
        expect(avatarButton.props.style.backgroundColor).toBe('#FFC6A5');
    });

    test("Validamos que no muestre error si todos los campos son válidos", () => {
        // Arrange
        render(<Profile />);

        const nameInput = screen.getByPlaceholderText('Mi nombre es...');
        const nicknameInput = screen.getByPlaceholderText('Mi apodo es...');
        const descriptionInput = screen.getByPlaceholderText('Así soy yo!');

        // Act
        fireEvent.changeText(nameInput, 'Maria');
        fireEvent.changeText(nicknameInput, 'hola23');
        fireEvent.changeText(descriptionInput, 'Estudiante de ingeniería.');
        fireEvent.press(screen.getByText('Validar'));

        // Assert
        expect(Alert.alert).toHaveBeenCalledWith("✨ Todo correcto ✨");
    });
});
