import { StyledButton, Button2 } from "./components/Button.style"
import { Wrapper } from "./components/Wrapper.style"

function App() {

  return (
        <Wrapper>
            <a href="#">TESTANDO LINK</a>
            <StyledButton border="3px solid purple">Button</StyledButton>
            <StyledButton color="red">Button</StyledButton>
            <StyledButton>Button</StyledButton>
            <Button2>Button</Button2>
        </Wrapper>
  )
}

export default App
