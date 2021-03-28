import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
width: 100%;
padding: 0 20px 0 20px;
${({theme}) => theme.media.desktop`  
    width: 1000px;
    padding: 0 0 0 0;
`}
${({theme}) => theme.media.tabletM`  
    width: 700px;
    padding: 0 0 0 0;
`}
`;

interface ContainerProps {
    children ?: any;
}
const Container = ({children}: ContainerProps) => {
    return <Wrapper>{children}</Wrapper>;
}

export default Container;