import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Span from '../components/Span';
import theme from '../styles/theme';
import androidImg from '../images/android.png';
import Img from '../components/Img';
import appleImg from '../images/apple-black.png';
import windowsImg from '../images/windows.png';
import accongImg from '../images/promotional-images/accongbox.png';
import warningShotImg from '../images/warningshot.png';

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
    ${({theme}) => theme.media.mobile`
    img {
        display:none;
    }
    `}
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

const DownloadListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const DownloadListItem = styled.div`
    height: 100px;
    border-bottom: 1px solid gray;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const DownloadlistItemInner = styled.div`
    display: flex;
`;
const TipWrapper = styled.div`
    padding: 30px 0 30px 0;
`;
const ResponsiveImgWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 20px 0 20px 0;
`;
const ResponsiveImgWrapperItem = styled.div`
    width: 40rem;
    height: 40rem;
    ${({theme}) => theme.media.tabletS`
    width: 100%;
    height: 100%;
    `}
    ${({theme}) => theme.media.mobile`
    width: 100%;
    height: 100%;
    `}
`;
const DownloadLink = styled.a`
    :hover {
        color: lightblue;
    }
`;
const Download = () => {
    return (<TotalWrapper>
        <HeaderWrapper><Link to="/"><Span textColor="white" fontWeight="700" size="1.6rem">Accong Box</Span></Link></HeaderWrapper>
        <BodyWrapper>
            <BodyHeader>
                <Container>
                    <BodyHeaderInner>
                        <TextItem>
                            <div>
                                <Span fontWeight="700" size="3rem">Accong Box</Span><br/><br/><br/>
                                <Span size="2rem">???????????? ??????</Span>
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
                    <DownloadListWrapper>
                        <DownloadListItem>
                            <DownloadlistItemInner>
                                <TextItem>
                                    <Span size="1.4rem" fontWeight="700">Accong Box Desktop<br/><Span size="1.2rem" fontWeight="200">V.0.0.1 Beta</Span></Span>
                                </TextItem>
                                <Img src={windowsImg} alt="?????????" width="3rem" height="3rem" />
                            </DownloadlistItemInner>
                            <Span size="1.2rem">
                                <DownloadLink href="https://drive.google.com/drive/folders/1uWugV4pDVlkARH87nQpxP9qMnZUqLH6i?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    windows
                                </DownloadLink>
                            </Span>
                        </DownloadListItem>
                        <DownloadListItem>
                            <DownloadlistItemInner>
                                <TextItem>
                                    <Span size="1.4rem" fontWeight="700">Accong Box Android<br/><Span size="1.2rem" fontWeight="200">V.1.1.0</Span></Span>
                                </TextItem>
                                <Img src={androidImg} alt="???????????????" width="3rem" height="3rem" />
                            </DownloadlistItemInner>
                            <Span size="1.2rem">
                                <DownloadLink href="https://play.google.com/store/apps/details?id=com.accongbox.www" target="_blank" rel="noopener noreferrer">
                                    Download
                                </DownloadLink>
                            </Span>
                        </DownloadListItem>
                        <DownloadListItem>
                            <DownloadlistItemInner>
                                <TextItem>
                                    <Span size="1.4rem" fontWeight="700">Accong Box Ios<br/><Span size="1.2rem" fontWeight="200">V.1.0.0</Span></Span>
                                </TextItem>
                                <Img src={appleImg} alt="ios" width="3rem" height="3rem" />
                            </DownloadlistItemInner>
                            <Span size="1.2rem">Download</Span>
                        </DownloadListItem>
                        <TipWrapper>
                            <Span size="1.6rem" fontWeight="700">??? PC?????? ?????? ?????? ?????? ??? <Span textColor="red">?????? ?????? ?????????</Span> ????????? ?????? ??????</Span>
                            <ResponsiveImgWrapper>
                                <ResponsiveImgWrapperItem>
                                    <Img src={warningShotImg} alt="warn" />
                                </ResponsiveImgWrapperItem>
                            </ResponsiveImgWrapper>
                            <Span size="1.4rem" lineHeight="2rem">
                                ?????? ???????????? ????????????????????? ????????? ?????? <Span fontWeight="700">?????? ?????? ?????????</Span>??? ?????? ????????? ?????? ?????? ????????? ??????????????? ????????? ?????? ???????????? ????????? ?????????.
                                <br/><br/>????????? ???????????? ??????????????? ?????? ?????? <Span fontWeight="700">?????? ?????? ?????????</Span>??? ???????????? ?????? ???????????? ???????????????.
                                <br/><Span fontWeight="700">??????????????? ?????? ????????? ???????????? ??????????????????!</Span>
                                <br/><br/>????????? Accong Box??? ???????????? ??? ??????????????? ?????? ??? ?????? ??????????????? <DownloadLink href="http://accongbox.com" target="_blank" rel="noopener noreferrer">https://accongbox.com</DownloadLink>?????? ?????? ????????????!
                                <br/>?????? ?????? ?????? ?????? ???????????? ????????? ?????? ?????????????????????.
                            </Span>
                        </TipWrapper>
                    </DownloadListWrapper>
                </Container>
            </BodyInner>
        </BodyWrapper>
        <Footer/>
    </TotalWrapper>);
}

export default Download;
