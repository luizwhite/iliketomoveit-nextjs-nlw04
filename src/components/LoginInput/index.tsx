import {
  InputHTMLAttributes,
  KeyboardEvent,
  useCallback,
  useRef,
  useState,
} from 'react';

import { Container, InputContainer, ArrowButton } from './styles';

import RightArrow from '../../assets/right_arrow.svg';

interface InputLoginProps extends InputHTMLAttributes<HTMLInputElement> {
  handleLogin: (value: string) => void;
}

const InputLogin: React.FC<InputLoginProps> = ({ handleLogin }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleValueChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputContainerClick = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyUp = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') handleLogin(value);
    },
    [handleLogin, value],
  );

  const handleClick = useCallback(() => {
    handleLogin(value);
  }, [handleLogin, value]);

  return (
    <Container>
      <InputContainer
        onClick={handleInputContainerClick}
        $isFocused={isFocused}
        $isFilled={!!value}
      >
        <input
          name="username"
          type="text"
          placeholder="Digite seu username"
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          onKeyUp={handleKeyUp}
          value={value}
          onChange={handleValueChange}
          ref={inputRef}
        />
      </InputContainer>

      <ArrowButton $isFilled={!!value} onClick={handleClick}>
        <RightArrow />
      </ArrowButton>
    </Container>
  );
};

export default InputLogin;
