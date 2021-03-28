import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';
import Container from './Container';
import Span from './Span';

const FooterWrapper = styled.footer`
    background-color: ${theme.colors.mainColor};
    display: flex;
    width: 100%;
    justify-content: center;
`;
const FooterHeader = styled.div``;
const FooterBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 10px 0 0 0;
    ${({theme}) => theme.media.desktop`  
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    `}
`;
const FooterCopyRight = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const FooterContainerWrapper = styled.div`
    height: 100%;
    position: relative;
    padding: 10px 0 0 0;
`;

const Footer = () => {
    return (<FooterWrapper>
    <Container>
        <FooterContainerWrapper>
            <FooterHeader><Link to="/"><Span fontWeight="700" textColor="white" size="1.6rem">Accong Box</Span></Link></FooterHeader>
            <FooterBody>
                <Link to="/download"><Span textColor="white" size="1.2rem">다운로드</Span></Link>
                <Link to="/contact"><Span textColor="white" size="1.2rem">건의하기</Span></Link>
            </FooterBody>
            <FooterCopyRight><Span textColor="white" center>Copyright 2021. suhong kim All rights reserved</Span></FooterCopyRight>
        </FooterContainerWrapper>
    </Container>
</FooterWrapper>);
}

export default Footer;
