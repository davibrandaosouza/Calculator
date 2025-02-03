import { Calculator } from './scripts.js';

describe('Calculator', () => {
  let calculator;
  let mockPreviousOperationText;
  let mockCurrentOperationText;

  beforeEach(() => {
    mockPreviousOperationText = { innerText: '' };
    mockCurrentOperationText = { innerText: '' };
    calculator = new Calculator(mockPreviousOperationText, mockCurrentOperationText);
  });
});
