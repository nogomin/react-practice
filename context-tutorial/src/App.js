import ColorBox from "./components/ColorBox"
import SelectColors from "./components/SelectColors";
import ColorContext, { ColorProvider } from "./contexts/color";

const App = () => {
  return (
    // Provider 사용 시에는 value값을 명시해주어야 한다.
    // <ColorContext.Provider value={{color: 'red'}}>
    //   <div>
    //     <ColorBox />
    //   </div>
    // </ColorContext.Provider>
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  )
}

export default App;