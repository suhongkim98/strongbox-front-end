import React from 'react';
import styled from 'styled-components';
import Span from '../components/Span';
import theme from '../styles/theme';
import androidImg from '../images/android.png';
import Img from '../components/Img';
import appleImg from '../images/apple.png';
import windowsImg from '../images/windows.png';
import {FaDownload} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Footer from '../components/Footer';

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

    height :2000px;
`;
const DownloadNav = styled.nav`
    margin: 20px 0 20px 0;
    display: flex;
    justify-content: center;
    
    position: -webkit-sticky; /* 사파리 브라우저 지원 */
    position: sticky;
    top: 10px;
`;
const DownloadBtn = styled.div`
    width: 120px;
    height: 30px;
    background-color: ${theme.colors.mainColor};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 3px;
`;


const Home = () => {
    return (<TotalWrapper>
        <HeaderWrapper>
            <HeaderNav><Link to="/contact"><Span textColor="white">개발자에게 건의하기</Span></Link></HeaderNav>
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
                    <Link to="/download"><DownloadBtn><FaDownload color="white" /><Span textColor="white" size="1.2rem" fontWeight="700">Download</Span></DownloadBtn></Link>
                </DownloadNav>
            </Container>
        </BodyWrapper>
        <Footer/>
    </TotalWrapper>);
}

export default Home;
