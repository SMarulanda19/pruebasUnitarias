const functions = require("./functions.js");

describe('multiply function', () => {
  it('Muestra el resultado de la multiplicacion de las 2 variables', () => {
    // Arrange
    const num1 = 2;
    const num2 = 3;

    // Act
    const result = functions.multiply(num1, num2);

    // Assert
    expect(result).toBe(6);
  });
});

describe('isNull function', () => {
  it('Muestra un retorno nulo', () => {
    // Arrange

    // Act
    const result = functions.isNull();

    // Assert
    expect(result).toBeNull();
  });
});

describe('checkTruthy function', () => {
  it('Muestra un retorno verdadero si envio un paramentro verdadero', () => {
    // Arrange
    const value = true;

    // Act
    const result = functions.checkTruthy(value);

    // Assert
    expect(result).toBe(true);
  });
});

describe('addLastName function', () => {
  it('debe mostrar un retorno con un objeto con su nombre y Apellido', () => {
    // Arrange
    const lastname = 'Perez';

    // Act
    const result = functions.addLastName(lastname);

    // Assert
    expect(result).toEqual({ firstname: 'Pepito', lastname: 'Perez' });
  });
});
