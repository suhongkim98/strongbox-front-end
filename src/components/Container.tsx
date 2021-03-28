import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
width: 100%;
${({theme}) => theme.media.desktop`  
    width: 1000px;
`}
${({theme}) => theme.media.tabletM`  
    width: 700px;
`}
`;

interface ContainerProps {
    children ?: any;
}
const Container = ({children}: ContainerProps) => {
    return <Wrapper>{children}</Wrapper>;
}

export default Container;