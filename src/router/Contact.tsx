import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Span from '../components/Span';
import theme from '../styles/theme';
import Img from '../components/Img';
import accongImg from '../images/promotional-images/accongbox.png';
const TotalWrapper = styled.div`
    display: grid;
    grid-template-rows: 60px 1fr 200px;
    ${({theme}) => theme.media.tabletM`  
    grid-template-rows: 60px 1fr 200px;
    `}
    ${({theme}) => theme.media.tabletS`  
    grid-template-rows: 60px 1fr 100px;
    `}
    ${({theme}) => theme.media.mobile`  
    grid-template-rows: 60px 1fr 100px;
    `}
`;
const HeaderWrapper = styled.header`
    background-color: ${theme.colors.mainColor};
    display: flex;
    align-items: center;
    padding: 0 0 0 30px;
`;
const BodyWrapper = styled.section`
    display: grid;
    grid-template-rows: 300px 1fr;
`;
const BodyHeader = styled.header`
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: center;
`;
const BodyHeaderInner = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const BodyInner = styled.div`
    display: flex;
    justify-content: center;
`;

const TextItem = styled.div`
    display: flex;
    border-left: 6px solid black;
    padding: 0 30px 0 30px;
`;
const BodyMain = styled.div`
    height: 100vh;
    padding: 20px 0 0 0;
`;
const Contact = () => {
    return (<TotalWrapper>
        <HeaderWrapper><Link to="/"><Span textColor="white" fontWeight="700" size="1.6rem">Accong Box</Span></Link></HeaderWrapper>
        <BodyWrapper>
            <BodyHeader>
                <Container>
                    <BodyHeaderInner>
                        <TextItem>
                            <div>
                                <Span fontWeight="700" size="3rem">Accong Box</Span><br/><br/><br/>
                                <Span size="2rem">건의하기</Span>
                            </div>
                        </TextItem>
                        <div>
                            <Img src={accongImg} alt="img" width="200px" height="200px"/>
                        </div>
                    </BodyHeaderInner>
                </Container>
            </BodyHeader>
            <BodyInner>
                <Container>
                    <BodyMain>
                        <Span fontWeight="700" size="2rem">개발자 연락처<br /><br /></Span>
                        <Span fontWeight="700" size="1.4rem">Email: </Span><Span size="1.4rem">suhong.kim@kakao.com</Span>
                    </BodyMain>
                </Container>
            </BodyInner>
        </BodyWrapper>
        <Footer/>
    </TotalWrapper>);
}

export default Contact;
