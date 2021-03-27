import React from 'react';
import styled from 'styled-components';
interface SpanProps {
    textColor?:any;
    size?:any;
    fontWeight?:any;
    children?:any;
    center?:boolean;
}
const Wrapper = styled.span<SpanProps>`
${({textColor}) => 
//텍스트 컬러가 있다면
    textColor &&
    `color:${textColor};`
}
${({size}) => 
    size &&
    `font-size:${size};`
}
${({fontWeight}) => 
    fontWeight &&
    `font-weight:${fontWeight};`
}
${({center}) => 
    center &&
    `text-align: center;`
}
`;

const Span = ({textColor,size,fontWeight,children, center}:SpanProps) =>{
return <Wrapper textColor={textColor} size={size} fontWeight={fontWeight} center={center}>{children}</Wrapper>
}

export default Span;