import styled from "styled-components";
import { colors } from "../../utils/styles/theme";

// BUTTON
export const Button = styled.button`
    display: inline-block;
    width: 100%;
    line-height: 48px;
    font-size: 16px;
    background-color: ${colors.bgPrimary};
    color: ${colors.textPrimary};
    border-radius: 2px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.3s ease-out;
    border:2px solid ${colors.bgSecondary};
    margin-top:18px;

    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        cursor: pointer;
    }

    ${ (props) => props.isReset &&
    `
        background-color: ${colors.bgSecondary};
        color: ${colors.textSecondary};
    `

    }
`;
// SEARCH INPUT
export const TextSearch = styled.input`
    outline: 0;
    border-width: 0 0 2px;
    border-color: ${colors.bgPrimary};
    padding:0 15px;
    line-height:40px;
    font-size:14px;
    width: 100%;
    margin-bottom:24px;

`;
// FORM FOR QUERYING GITHUB REPOS
export const FormWrapper= styled.form`
      width:600px;
      padding:12px;
      background: white;
      margin:0 auto;
      border:2px solid ${colors.borderPrimary};
      border-radius:12px;
      text-align: center;
      -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
      -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
      box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;
// WRAPPER FOR RETURNED RESULTS FROM GITHUB
export const ContentWrapper = styled.div`
      width:800px;
      padding:20px;
      margin:0 auto;
      border:2px solid ${colors.borderSecondary};
      background: ${colors.bgExtra};
      -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
      -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
      box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;
// WRAPPER For MISSED ACCOUNTS
export const ErrWrapper = styled.div`
      width:auto;
      padding:12px;
      margin-bottom:24px;
      text-align: center;
      border:2px solid ${colors.borderPrimary};
      border-radius: 14px;
      color:${colors.errColor};
      font-size: 24px;
      font-weight: bold;
`;
// WRAPPER FOR USER DATA FROM GITHUB
export const UserWrapper = styled.div`
      width:600px;
      padding:12px;
      margin:0 auto;
      border:2px solid ${colors.borderSecondary};
      -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
      -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
      box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;
// WRAPPER FOR USER DATA FROM GITHUB
export const ReposWrapper = styled.ul`
    list-style: none;
      width:auto;
      padding:12px;
      margin:0 auto;
      border:1px solid ${colors.borderPrimary};
      margin-top:12px;
      -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
      -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
      box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;