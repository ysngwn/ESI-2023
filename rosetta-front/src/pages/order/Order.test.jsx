// Generated by CodiumAI

describe('Order', () => {

    // Fetches order data from API and renders it on the page
    it('should fetch order data from API and render it on the page', () => {
      // Mock the necessary dependencies
      jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue({ id: '123' }),
      }));
      jest.mock('../../services/http/api', () => ({
        fetchOrder: jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue({}) }),
      }));

      // Import the function
      const Order = require('./Order').default;

      // Render the component
      const wrapper = shallow(<Order />);

      // Assert that the order data is fetched and rendered on the page
      expect(wrapper.find('h1').text()).toBe('Order Title');
    });

    // Allows user to submit an answer to the order and updates the page with the new answer
    it('should allow user to submit an answer to the order and update the page with the new answer', () => {
      // Mock the necessary dependencies
      jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue({ id: '123' }),
      }));
      jest.mock('../../services/http/api', () => ({
        fetchOrder: jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue({}) }),
      }));

      // Import the function
      const Order = require('./Order').default;

      // Render the component
      const wrapper = shallow(<Order />);

      // Simulate submitting an answer
      wrapper.find('form').simulate('submit', { files: [] });

      // Assert that the answer is submitted and the page is updated with the new answer
      expect(wrapper.find('.answer').text()).toBe('New Answer');
    });

    // Displays files associated with the order and answer(s)
    it('should display files associated with the order and answer(s)', () => {
      // Mock the necessary dependencies
      jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue({ id: '123' }),
      }));
      jest.mock('../../services/http/api', () => ({
        fetchOrder: jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue({}) }),
      }));

      // Import the function
      const Order = require('./Order').default;

      // Render the component
      const wrapper = shallow(<Order />);

      // Assert that the files associated with the order and answer(s) are displayed
      expect(wrapper.find('.order-files').text()).toBe('Order Files');
      expect(wrapper.find('.answer-files').text()).toBe('Answer Files');
    });

    // Renders a message indicating that the order is completed if it has already been completed
    it('should render a message indicating that the order is completed if it has already been completed', () => {
      // Mock the necessary dependencies
      jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue({ id: '123' }),
      }));
      jest.mock('../../services/http/api', () => ({
        fetchOrder: jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue({ completed: true }) }),
      }));

      // Import the function
      const Order = require('./Order').default;

      // Render the component
      const wrapper = shallow(<Order />);

      // Assert that a message indicating that the order is completed is rendered
      expect(wrapper.find('.completed-message').text()).toBe('Order Completed');
    });

    // Displays a button to rate the project if the order is completed and the user has not yet rated it
    it('should display a button to rate the project when the order is completed and the user has not yet rated it', () => {
      // Mock the necessary dependencies
      jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue({ id: '123' }),
      }));
      jest.mock('../../services/http/api', () => ({
        fetchOrder: jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue({}) }),
      }));

      // Mock the order data
      const order = {
        completed: true,
        canRateOrder: true,
      };

      // Import the function
      const Order = require('./Order').default;

      // Render the component with the mocked order data
      const wrapper = shallow(<Order />);
      wrapper.setState({ order });

      // Assert that the button to rate the project is displayed
      expect(wrapper.find('button').text()).toBe('Rate Project');
    });

    // Allows user to accept an order if they are the first to do so
    it('should allow user to accept an order if they are the first to do so', async () => {
      // Mock the necessary dependencies
      jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue({ id: '123' }),
      }));
      jest.mock('../../services/http/api', () => ({
        fetchOrder: jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue({}) }),
      }));
      jest.mock('react-hook-form', () => ({
        useForm: jest.fn().mockReturnValue({
          register: jest.fn(),
          handleSubmit: jest.fn(),
        }),
      }));
      jest.mock('react', () => ({
        ...jest.requireActual('react'),
        useState: jest.fn(),
        useEffect: jest.fn(),
      }));
      jest.mock('@uiw/react-md-editor', () => ({
        MDEditor: jest.fn().mockReturnValue({
          value: '**Digite sua resposta...**',
          onChange: jest.fn(),
        }),
      }));
      jest.mock('../../components/modal/RateProjectModal', () => ({
        RateProjectModal: jest.fn().mockReturnValue({
          isOpen: false,
          setIsOpen: jest.fn(),
          onSucess: jest.fn(),
        }),
      }));
      jest.mock('react-spinners/ClipLoader', () => ({
        ClipLoader: jest.fn().mockReturnValue({
          size: 150,
          color: '#fff',
        }),
      }));

      // Import the function
      const Order = require('./Order').default;

      // Render the component
      const wrapper = shallow(<Order />);

      // Set the necessary state values
      wrapper.find('useState').mockImplementation((initialValue) => {
        if (initialValue === false) {
          return [false, jest.fn()];
        } else if (initialValue === null) {
          return [null, jest.fn()];
        } else if (initialValue === '**Digite sua resposta...**') {
          return ['**Digite sua resposta...**', jest.fn()];
        }
      });

      // Set the necessary effect values
      wrapper.find('useEffect').mockImplementation((effect, dependencies) => {
        if (dependencies.length === 0) {
          effect();
        }
      });

      // Set the necessary event handlers
      wrapper.find('Button').at(1).simulate('click');
      wrapper.find('Button').at(3).simulate('click');

      // Assert that the necessary functions are called
      expect(wrapper.find('fetchOrder')).toHaveBeenCalled();
      expect(wrapper.find('handleSubmitAnswer')).toHaveBeenCalled();
      expect(wrapper.find('handleAccept')).toHaveBeenCalled();
      expect(wrapper.find('handleSubmitRating')).toHaveBeenCalled();
    });

    // Displays the user's avatar and name associated with the order and answer(s)
    it('should display the users avatar and name associated with the order and answer(s)', () => {
      // Mock the necessary dependencies
      jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue({ id: '123' }),
      }));
      jest.mock('../../services/http/api', () => ({
        fetchOrder: jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue({}) }),
      }));

      // Import the function
      const Order = require('./Order').default;

      // Render the component
      const wrapper = shallow(<Order />);

      // Assert that the user's avatar and name are displayed
      expect(wrapper.find('Image').prop('src')).toBe('user-avatar-url');
      expect(wrapper.find('span').text()).toBe('User Name');
    });

    // Renders the order's title, description, and associated tags and languages
    it('should fetch order data from API and render it on the page', () => {
      // Mock the necessary dependencies
      jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue({ id: '123' }),
      }));
      jest.mock('../../services/http/api', () => ({
        fetchOrder: jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue({}) }),
      }));

      // Import the function
      const Order = require('./Order').default;

      // Render the component
      const wrapper = shallow(<Order />);

      // Assert that the order data is fetched and rendered on the page
      expect(wrapper.find('h1').text()).toBe('Order Title');
    });

    // Allows user to download files associated with the order and answer(s)
    it('should allow user to download files associated with the order and answer(s)', () => {
      // Mock the necessary dependencies
      jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue({ id: '123' }),
      }));
      jest.mock('../../services/http/api', () => ({
        fetchOrder: jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue({}) }),
      }));

      // Import the function
      const Order = require('./Order').default;

      // Render the component
      const wrapper = shallow(<Order />);

      // Assert that the order data is fetched and rendered on the page
      expect(wrapper.find('h1').text()).toBe('Order Title');

      // Mock the necessary dependencies for file download
      const mockFiles = ['file1.pdf', 'file2.docx'];
      jest.spyOn(global, 'fetch').mockImplementation((url) => {
        if (url.includes('/archives/')) {
          return Promise.resolve({
            ok: true,
            blob: () => Promise.resolve(new Blob(mockFiles)),
          });
        }
        return Promise.resolve({ ok: true });
      });

      // Simulate clicking on a file download link
      wrapper.find('a').at(0).simulate('click');

      // Assert that the file is downloaded
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/archives/file1.pdf', { method: 'GET' });

      // Simulate clicking on another file download link
      wrapper.find('a').at(1).simulate('click');

      // Assert that the second file is downloaded
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/archives/file2.docx', { method: 'GET' });
    });

    // Renders a loading spinner when submitting an answer or accepting an order
    it('should render a loading spinner when accepting an order', async () => {
      // Mock the necessary dependencies
      jest.mock('react', () => ({
        ...jest.requireActual('react'),
        useState: jest.fn().mockReturnValue([false, jest.fn()]),
        useEffect: jest.fn().mockImplementation((callback) => callback()),
      }));
      jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue({ id: '123' }),
      }));
      jest.mock('../../services/http/api', () => ({
        fetchOrder: jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue({}) }),
      }));
      jest.mock('react-hook-form', () => ({
        useForm: jest.fn().mockReturnValue({
          register: jest.fn(),
          handleSubmit: jest.fn(),
        }),
      }));
      jest.mock('react-spinners/ClipLoader', () => ({
        __esModule: true,
        default: jest.fn().mockReturnValue(<div>Loading...</div>),
      }));

      // Import the function
      const Order = require('./Order').default;

      // Render the component
      const wrapper = shallow(<Order />);

      // Simulate accepting an order
      await wrapper.find('Button').simulate('click');

      // Assert that the loading spinner is rendered
      expect(wrapper.find('div').text()).toBe('Loading...');
    });

    // Uses ReactMarkdown to render markdown text in the order's description and answer(s)
    it('should render markdown text in the orders description and answer(s)', () => {
      // Mock the necessary dependencies
      jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue({ id: '123' }),
      }));
      jest.mock('../../services/http/api', () => ({
        fetchOrder: jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue({}) }),
      }));

      // Import the function
      const Order = require('./Order').default;

      // Render the component
      const wrapper = shallow(<Order />);

      // Assert that the markdown text is rendered in the order's description
      expect(wrapper.find('ReactMarkdown').at(0).prop('children')).toBe(order.description);

      // Assert that the markdown text is rendered in the order's answer(s)
      expect(wrapper.find('ReactMarkdown').at(1).prop('children')).toBe(answer.answer);
    });

    // Uses ReactMarkdown to render markdown text in the order's answer(s)
    it('should render markdown text in the orders answer(s)', () => {
      // Mock the necessary dependencies
      jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue({ id: '123' }),
      }));
      jest.mock('../../services/http/api', () => ({
        fetchOrder: jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue({}) }),
      }));

      // Import the function
      const Order = require('./Order').default;

      // Render the component
      const wrapper = shallow(<Order />);

      // Assert that the markdown text is rendered in the order's answer(s)
      expect(wrapper.find('ReactMarkdown').at(1).prop('children')).toBe(answer.answer);
    });

    // Does not display the accept button if the order has already been accepted by another user
    it('should not display the accept button if the order has already been accepted by another user', () => {
      // Mock the necessary dependencies
      jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue({ id: '123' }),
      }));
      jest.mock('../../services/http/api', () => ({
        fetchOrder: jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue({}) }),
      }));

      // Import the function
      const Order = require('./Order').default;

      // Render the component
      const wrapper = shallow(<Order />);

      // Assert that the accept button is not displayed
      expect(wrapper.find('Button').exists()).toBe(false);
    });

    // Does not display the rate button if the order is not completed or the user has already rated it
    it('should not display the rate button if the order is not completed or the user has already rated it', () => {
      // Mock the necessary dependencies
      jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue({ id: '123' }),
      }));
      jest.mock('../../services/http/api', () => ({
        fetchOrder: jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue({}) }),
      }));

      // Import the function
      const Order = require('./Order').default;

      // Render the component
      const wrapper = shallow(<Order />);

      // Assert that the rate button is not displayed
      expect(wrapper.find('button').text()).not.toBe('Avaliar Projeto');
    });

    // Does not display the answer form if the user has already submitted an answer
    it('should not display the answer form if the user has already submitted an answer', () => {
      // Mock the necessary dependencies
      jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue({ id: '123' }),
      }));
      jest.mock('../../services/http/api', () => ({
        fetchOrder: jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue({}) }),
      }));

      // Import the function
      const Order = require('./Order').default;

      // Render the component
      const wrapper = shallow(<Order />);

      // Assert that the answer form is not displayed
      expect(wrapper.find('form')).toHaveLength(0);
    });

    // Does not display the files section if there are no files associated with the order or answer(s)
    it('should not display the files section if there are no files associated with the order', () => {
      // Mock the necessary dependencies
      jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue({ id: '123' }),
      }));
      jest.mock('../../services/http/api', () => ({
        fetchOrder: jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue({}) }),
      }));

      // Import the function
      const Order = require('./Order').default;

      // Render the component
      const wrapper = shallow(<Order />);

      // Assert that the files section is not displayed
      expect(wrapper.find('.files-section')).toHaveLength(0);
    });

    // Displays a message if there is an error fetching the order data from the API
    it('should display an error message when there is an error fetching the order data from the API', async () => {
      // Mock the necessary dependencies
      jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue({ id: '123' }),
      }));
      jest.mock('../../services/http/api', () => ({
        fetchOrder: jest.fn().mockRejectedValue(new Error('Failed to fetch order data')),
      }));

      // Import the function
      const Order = require('./Order').default;

      // Render the component
      const wrapper = shallow(<Order />);

      // Wait for the fetchOrder function to be called
      await new Promise(resolve => setTimeout(resolve, 0));

      // Assert that the error message is displayed
      expect(wrapper.find('.error-message').text()).toBe('Failed to fetch order data');
    });

    // Displays a message if there is an error submitting an answer to the order
    it('should display an error message when there is an error submitting an answer', async () => {
      // Mock the necessary dependencies
      jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue({ id: '123' }),
      }));
      jest.mock('../../services/http/api', () => ({
        fetchOrder: jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue({}) }),
      }));
      jest.spyOn(window, 'fetch').mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue({}),
      });

      // Import the function
      const Order = require('./Order').default;

      // Render the component
      const wrapper = mount(<Order />);

      // Simulate submitting an answer
      await act(async () => {
        wrapper.find('form').simulate('submit');
      });

      // Assert that the error message is displayed
      expect(wrapper.find('.error-message').text()).toBe('Error submitting answer');
    });

    // Displays a message if there is an error submitting the rating for the project
    it('should display an error message when there is an error submitting the rating', async () => {
      // Mock the necessary dependencies
      jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue({ id: '123' }),
      }));
      jest.mock('../../services/http/api', () => ({
        fetchOrder: jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue({}) }),
      }));
      jest.spyOn(window, 'fetch').mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue({}),
      });

      // Import the function
      const Order = require('./Order').default;

      // Render the component
      const wrapper = shallow(<Order />);

      // Simulate submitting the rating
      await wrapper.find(RateProjectModal).prop('onSuccess')();

      // Assert that the error message is displayed
      expect(wrapper.find('.error-message').exists()).toBe(true);
    });

    // Allows user to cancel rating the project and close the rating modal
    it('should cancel rating the project and close the rating modal when cancel button is clicked', () => {
      // Mock the necessary dependencies
      jest.mock('react', () => ({
        ...jest.requireActual('react'),
        useState: jest.fn().mockReturnValue([false, jest.fn()]), // Mock useState for open state
      }));
      jest.mock('../../components/modal/RateProjectModal', () => ({
        RateProjectModal: jest.fn().mockReturnValue(<div>Rate Project Modal</div>), // Mock RateProjectModal component
      }));

      // Import the function
      const Order = require('./Order').default;

      // Render the component
      const wrapper = shallow(<Order />);

      // Find and click the cancel button
      wrapper.find('button').simulate('click');

      // Assert that the open state is set to false
      expect(wrapper.find('RateProjectModal').prop('isOpen')).toBe(false);
    });

    // Displays a message if there is an error accepting the order
    it('should display an error message when there is an error accepting the order', async () => {
      // Mock the necessary dependencies
      jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue({ id: '123' }),
      }));
      jest.mock('../../services/http/api', () => ({
        fetchOrder: jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue({}) }),
      }));
      jest.spyOn(window, 'fetch').mockRejectedValueOnce(new Error('Error accepting order'));

      // Import the function
      const Order = require('./Order').default;

      // Render the component
      const wrapper = shallow(<Order />);

      // Wait for the fetchOrder function to be called
      await waitFor(() => {
        expect(window.fetch).toHaveBeenCalledWith('http://localhost:3000/api/orders/123/accept', {
          method: 'POST',
          headers: {
            Authorization: 'Bearer null',
          },
        });
      });

      // Assert that the error message is displayed
      expect(wrapper.find('.error-message').text()).toBe('Error accepting order');
    });
});