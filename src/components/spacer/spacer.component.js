import React from 'react';
import styled from 'styled-components/native';

const TopSmall = styled.View`
    marginTop: ${(props) => props.theme.space[1]};
`;

const TopMedium = styled.View`
    marginTop:  ${(props) => props.theme.space[2]};
`;

const TopLarge = styled.View`
    marginTop:  ${(props) => props.theme.space[3]};
`;

const LeftSmall = styled.View`
    marginLeft:  ${(props) => props.theme.space[1]};
`;

const LeftMedium = styled.View`
    marginLeft:  ${(props) => props.theme.space[2]};
`;

const LeftLarge = styled.View`
    marginLeft:  ${(props) => props.theme.space[3]};
`;


export const Spacer = ({ variant }) => {
    if (variant === 'top.small') {
        return <TopSmall />;
    }

    if (variant === 'top.medium') {
        return <TopMedium />;
    }

    if (variant === 'top.large') {
        return <TopLarge />;
    }


    if (variant === 'left.small') {
        return <LeftSmall />;
    }

    if (variant === 'left.medium') {
        return <LeftMedium />;
    }

    if (variant === 'left.large') {
        return <LeftLarge />;
    }


};