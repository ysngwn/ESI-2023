// Generated by CodiumAI

describe('Register', () => {

    // renders the registration form with all required fields
    it('should render the registration form with all required fields', () => {
      // Arrange
      const wrapper = shallow(<Register />);
  
      // Act
  
      // Assert
      expect(wrapper.find('form')).toHaveLength(1);
      expect(wrapper.find('Input[labelText="Nome"]')).toHaveLength(1);
      expect(wrapper.find('Input[labelText="Email"]')).toHaveLength(1);
      expect(wrapper.find('Input[labelText="Senha"]')).toHaveLength(1);
      expect(wrapper.find('Input[labelText="Confirmar senha"]')).toHaveLength(1);
      expect(wrapper.find('Button[type="submit"]')).toHaveLength(1);
    });

    // submits the form and sends a POST request to the backend with the user data
    it('should submit the form and send a POST request to the backend with the user data', () => {
      // Arrange
      const navigateMock = jest.fn();
      const fetchMock = jest.fn(() => Promise.resolve({ json: () => Promise.resolve() }));
      global.fetch = fetchMock;
      useNavigate.mockReturnValue(navigateMock);
      const wrapper = shallow(<Register />);
  
      // Act
      wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
  
      // Assert
      expect(fetchMock).toHaveBeenCalledWith("http://localhost:3000/api/user/create", {
        method: "POST",
        body: JSON.stringify({
          name: "",
          email: "",
          password: "",
          confirm_password: ""
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      expect(navigateMock).toHaveBeenCalledWith("/");
    });

    // redirects the user to the homepage after successful registration
    it('should redirect the user to the homepage after successful registration', () => {
      // Arrange
      const navigateMock = jest.fn();
      useNavigate.mockReturnValue(navigateMock);
      const wrapper = shallow(<Register />);
  
      // Act
      wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
  
      // Assert
      expect(navigateMock).toHaveBeenCalledWith("/");
    });

    // submits the form with missing required fields and displays error messages
    it('should submit the form with missing required fields and display error messages', () => {
      // Arrange
      const wrapper = shallow(<Register />);
  
      // Act
      wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
  
      // Assert
      expect(wrapper.find('Input[labelText="Nome"]').prop('required')).toBe(true);
      expect(wrapper.find('Input[labelText="Email"]').prop('required')).toBe(true);
      expect(wrapper.find('Input[labelText="Senha"]').prop('required')).toBe(true);
      expect(wrapper.find('Input[labelText="Confirmar senha"]').prop('required')).toBe(true);
      expect(wrapper.find('Button[type="submit"]').prop('onClick')).toBeInstanceOf(Function);
      expect(wrapper.find('Button[type="submit"]').prop('onClick')).toThrowError("As senhas não coincidem");
    });

    // submits the form with invalid email format and displays an error message
    it('should submit the form with invalid email format and display an error message', () => {
      // Arrange
      const wrapper = shallow(<Register />);
      wrapper.find('Input[labelText="Email"]').simulate('change', { target: { value: "invalidemail" } });
  
      // Act
      wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
  
      // Assert
      expect(wrapper.find('Input[labelText="Email"]').prop('value')).toBe("invalidemail");
      expect(wrapper.find('Button[type="submit"]').prop('onClick')).toBeInstanceOf(Function);
      expect(wrapper.find('Button[type="submit"]').prop('onClick')).toThrowError("Houve um erro ao cadastrar o usuário");
    });

    // submits the form with a password that does not meet the minimum requirements and displays an error message
    it('should submit the form with a password that does not meet the minimum requirements and display an error message', () => {
      // Arrange
      const wrapper = shallow(<Register />);
      wrapper.find('Input[labelText="Senha"]').simulate('change', { target: { value: "password" } });
  
      // Act
      wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
  
      // Assert
      expect(wrapper.find('Input[labelText="Senha"]').prop('value')).toBe("password");
      expect(wrapper.find('Button[type="submit"]').prop('onClick')).toBeInstanceOf(Function);
      expect(wrapper.find('Button[type="submit"]').prop('onClick')).toThrowError("Houve um erro ao cadastrar o usuário");
    });

    // displays an error message if the passwords do not match
    it('should display an error message if the passwords do not match', () => {
      // Arrange
      const wrapper = shallow(<Register />);
      const form = wrapper.find('form');
      const passwordInput = wrapper.find('Input[labelText="Senha"]');
      const confirmPasswordInput = wrapper.find('Input[labelText="Confirmar senha"]');
      const button = wrapper.find('Button[type="submit"]');
      const alertSpy = jest.spyOn(window, 'alert');

      // Act
      passwordInput.props().onChange({ target: { value: 'password' } });
      confirmPasswordInput.props().onChange({ target: { value: 'differentpassword' } });
      form.simulate('submit');

      // Assert
      expect(alertSpy).toHaveBeenCalledWith('As senhas não coincidem');
    });

    // submits the form with a password that is too long and displays an error message
    it('should display an error message when the password is too long', () => {
      // Arrange
      const wrapper = shallow(<Register />);
      const form = wrapper.find('form');
      const inputPassword = wrapper.find('Input[labelText="Senha"]');
      const inputConfirmPassword = wrapper.find('Input[labelText="Confirmar senha"]');
      const errorMessage = "As senhas não coincidem";

      // Act
      inputPassword.simulate('change', { target: { value: 'password1234567890' } });
      inputConfirmPassword.simulate('change', { target: { value: 'password1234567890' } });
      form.simulate('submit', { preventDefault: jest.fn() });

      // Assert
      expect(wrapper.text()).toContain(errorMessage);
    });

    // displays a loading spinner while waiting for the backend response
    it('should display a loading spinner while waiting for the backend response', () => {
      // Arrange
      const wrapper = shallow(<Register />);
      const mockFetch = jest.fn(() => new Promise(() => {})); // Mock fetch function
      global.fetch = mockFetch;

      // Act
      wrapper.find('Button[type="submit"]').simulate('click');

      // Assert
      expect(wrapper.find('Spinner')).toHaveLength(1);
      expect(mockFetch).toHaveBeenCalled();
    });

    // allows the user to press the enter key to submit the form
    it('should submit the form when the enter key is pressed', () => {
      // Arrange
      const navigateMock = jest.fn();
      const useNavigateMock = jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(navigateMock);
      const fetchMock = jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue({}) });
      global.fetch = fetchMock;
      const wrapper = shallow(<Register />);

      // Act
      wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });

      // Assert
      expect(fetchMock).toHaveBeenCalled();
      expect(navigateMock).toHaveBeenCalled();

      // Clean up
      useNavigateMock.mockRestore();
      delete global.fetch;
    });
});