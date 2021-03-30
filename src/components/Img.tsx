import React from 'react';
import styled from 'styled-components';

interface ImgProps {
    src: string;
    alt: string;
    width?: any;
    height?: any;
}
const Image = styled.img<ImgProps>`
    ${({width}) => 
        width &&
        `width:${width};`
    }
    ${({height}) => 
        height &&
        `height:${height};`
}
`;
const Img = ({src, alt, width, height}: ImgProps) => {
    return <Image src={src} alt={alt} width={width} height={height}/>
}

export default Img;
