import { HeaderRegular, HeaderSmall } from "./styles/Header";

const App = () => {
  return (
    <>
      <HeaderRegular fontSize={60}>
        Regular Text<span>span inside of it</span>
      </HeaderRegular>
      <HeaderSmall>Smaller Text</HeaderSmall>
    </>
  );
};

export default App;
