import React from 'react';
import styled from 'styled-components';
import Span from '../components/Span';
import theme from '../styles/theme';
import androidImg from '../images/android.png';
import Img from '../components/Img';
import appleImg from '../images/apple.png';
import windowsImg from '../images/windows.png';

const TotalWrapper = styled.div`
    display: grid;
    grid-template-rows: 500px 1fr 200px;
    ${({theme}) => theme.media.tabletM`  
    grid-template-rows: 300px 1fr 200px;
    `}
    ${({theme}) => theme.media.tabletS`  
    grid-template-rows: 200px 1fr 100px;
    `}
    ${({theme}) => theme.media.mobile`  
    grid-template-rows: 100px 1fr 100px;
    `}
`;
const HeaderWrapper = styled.header`
    background-color: ${theme.colors.mainColor};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 20px 20px;
`;
const HeaderNav = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;
const HeaderText = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 10px;
    ${({theme}) => theme.media.tabletS`
    font-size: 7px;
    `}
    ${({theme}) => theme.media.mobile`
    font-size: 5px;
    `}
`;
const HeaderFooter = styled.div`
    width: 200px;
    display: none;
    justify-content: space-around;
    font-size: 10px;
    ${({theme}) => theme.media.desktop`
    display: flex;
    `}
    ${({theme}) => theme.media.tabletM`
    display: flex;
    `}
`;
const BodyWrapper = styled.section`
    display: flex;
    width: 100%;
    justify-content: center;
`;
const DownloadNav = styled.nav``;
const DownloadBtn = styled.div`
    width: 150px;
    height: 30px;
    background-color: ${theme.colors.mainColor};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: 1px solid black;
    border-radius: 3px;
`;
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
const Container = styled.div`
    width: 100%;
    ${({theme}) => theme.media.desktop`  
        width: 1000px;
    `}
    ${({theme}) => theme.media.tabletM`  
        width: 700px;
    `}
`;
const Home = () => {
    return (<TotalWrapper>
        <HeaderWrapper>
            <HeaderNav><Span textColor="white">개발자에게 건의하기</Span></HeaderNav>
            <HeaderText>
                <Span center size="4em" textColor="white" fontWeight="700">Accong Box</Span>
                <Span center size="1.4em" textColor="white">아이디 비밀번호, 이제는 안전하게 보관하세요.</Span>
            </HeaderText>
            <HeaderFooter>
                <Img src={androidImg} alt="android" width="4em" height="4em" />
                <Img src={appleImg} alt="android" width="4em" height="4em" />
                <Img src={windowsImg} alt="android" width="4em" height="4em" />
            </HeaderFooter>
        </HeaderWrapper>
        <BodyWrapper>
            <Container>
                <DownloadNav>
                    <DownloadBtn><Span>icon</Span><Span textColor="white" size="1.2rem" fontWeight="700">Download</Span></DownloadBtn>
                </DownloadNav>
            </Container>
        </BodyWrapper>
        <FooterWrapper>
            <Container>
                <FooterContainerWrapper>
                    <FooterHeader><Span fontWeight="700" textColor="white" size="1.6rem">Accong Box</Span></FooterHeader>
                    <FooterBody>
                        <div><Span textColor="white" size="1.2rem">다운로드</Span></div>
                        <div><Span textColor="white" size="1.2rem">건의하기</Span></div>
                    </FooterBody>
                    <FooterCopyRight><Span textColor="white" center>Copyright 2021. suhong kim All rights reserved</Span></FooterCopyRight>
                </FooterContainerWrapper>
            </Container>
        </FooterWrapper>
    </TotalWrapper>);
}

export default Home;
