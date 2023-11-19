import styled, {css} from 'styled-components';
//styled compoent의 css객체는 props를 사용할때 반드시 css로 감싸줘야한다. 그냥 ``으로 쓰면 Tagged 템플릿 리터럴이 아니기때문이다.

const sizes = {
    desktop: 1024,
    tablet: 768
}

//TODO: 이거 이해해보기.
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`@media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)};
    }`
    return acc;
}, {})

const Box = styled.div`
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;
    /**
    기본적으로 가로크기 1024px에 가운데 정렬이고 가로크기가 작아짐에 따라 크기를 줄이고 768px 미만이 되면 꽉 채운다.
     */ 
    width: 1024px;
    margin: 0 auto;
    /* @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 100%;
    } */
    ${media.desktop`width: 768px`}
    ${media.tablet`width: 100%`}
`;

const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
        background: rbga(255, 255, 255, 0.9);
    }

    ${props => props.inverted && css`
        background: none;
        border: 2px solid white;
        color: white;
        &:hover {
            background: white;
            color: black;
        }
    `};
    & + button {
        margin-left: 1rem;
    }
`;

const StyledComponent = () => (
    <Box color='black'>
        <Button>안녕하세요</Button>
        <Button inverted={true}>테두리만</Button>
    </Box>
)

export default StyledComponent;