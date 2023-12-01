import { useContext } from "react";
import ColorContext, { ColorConsumer } from "../contexts/color"

const ColorBox = () => {
    // useContext는 함수 컴포넌트에서만 사용가능하지만 매우 편리하다.
    // const {state} = useContext(ColorContext);
    return (
        <ColorConsumer>
            {({state}) => (
                <>
                    <div 
                        style={{
                            width: '64px',
                            height: '64px',
                            background: state.color
                        }}
                    />
                    <div 
                        style={{
                            width: '32px',
                            height: '32px',
                            background: state.subcolor
                        }}
                    />
                </>
            )}
        </ColorConsumer>
    )
}

export default ColorBox;