import { styled, keyframes } from "styled-components";
import { BiSolidPencil } from "react-icons/bi";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const PostListWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${fadeInAnimation} 0.5s ease-in-out;
  position: relative; 
`;

export const PostListHeader = styled.div`
  display: flex;
  margin-top: 3rem;
  margin-bottom: 1rem;
  width: 100%;
  flex-direction: column;

`;

export const PostListHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;


export const PostListHeaderWrite = styled.div`
  :hover {
    color: white;
    background-color: #161835;
  }
`;

export const PostListHeaderWriteContent = styled.div`
  font-family: Pretendard-Medium;
  display: flex;
  font-size: 1.5rem;
  font-weight: 500;
  color: #161835;

  border-radius: 10px;
  border: 1.5px solid #161835;
  padding: 0.5rem;
  align-items: center;

  cursor: pointer;

  position: absolute;
  bottom: -5rem;
  right: 0;

  :hover {
    color: white;
    background-color: #161835;
  }
`;

export const StyledPencilIcon = styled(BiSolidPencil)`
  font-size: 2rem;
  margin-right: 0.5rem;
`;

export const PostListHeaderSort = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 1rem;
`;


export const PostListTable = styled.table`
  margin: 0 auto;
  width: 100%;
`;

export const PostListTableThead = styled.thead``;
export const PostListTableTbody = styled.tbody`
  animation: ${fadeInAnimation} 0.5s ease-in-out;
`;

export const PostListTableTr = styled.tr``;
export const PostListTableTh = styled.th`
  font-family: 'Pretendard-Medium';
  padding: 2rem;
  font-size: 1.3rem;
  border-bottom: 2px solid #f0f0f0;
`;

export const PostListTableTd = styled.td`
  font-family: 'Pretendard-Medium';
  padding: 2rem;
  font-size: 1.3rem;
  border-bottom: 2px solid #f0f0f0;
  text-align: center;
`;

export const StatusText = styled.p`
  font-family: 'Pretendard-Medium';
  color: ${props => props.color};
  font-size: 1.3rem;
`;

export const PostListTableTdTitle = styled.td`
  padding: 2rem;
  font-size: 1.3rem;
  border-bottom: 2px solid #f0f0f0;
  text-align: flex-start;
`;

export const LikeIcon = styled(FaRegThumbsUp)`
  color: black;
  font-size: 1.4rem;
  margin-right: 0.5rem;
`;

export const CommentIcon = styled(FaRegCommentAlt)`
  color: black;
  font-size: 1.4rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;

export const EyeIcon = styled(FaEye)`
  color: black;
  font-size: 1.4rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;

export const PostListPaging = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  position: relative;
  bottom: 0;
  transform: translate(-50%, 0);
`;

export const PostListTableTrContent = styled.tr`
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Select = styled.select`
  background-color: #161835;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 1rem 0.5rem;
  font-size: 2rem;
  font-weight: 500;
  margin-right: 2rem;
  appearance: none;
  text-align: center;
  cursor: pointer;
`;

export const Option = styled.option`
  background-color: white;
  color: #333333;
`;

export const PostListMobile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PostListMobileWrapper = styled.div`
  width: 100%;
  display: flex;

  padding: 2rem 1rem;
  border-bottom: 2px solid #f0f0f0;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const PostListMobukeWrapperBox1 = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
export const PostListMobukeWrapperBox2 = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;

  padding: 1rem;
  border-radius: 1rem;
  * {
    margin-right: 0.5rem;
  }
`;

export const PostListMobileTitle = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;

  flex-grow: 1;
`;
export const PostListMobileDescription = styled.div`
  display: flex;
`;

export const PostListMobileServiceTitle = styled.div`
  font-size: 2rem;

  margin-bottom: 1rem;
  color: gray;
`;

export const PostListMobileContent = styled.div`
  font-size: 1.5rem;
  margin-right: 1rem;
  color: gray;
`;


// 금주의 인기글
// style.js

export const PopularPostsSection = styled.div`
display: flex;
align-items: center;
`;

export const PopularPostsHeader = styled.div`
  padding-left: 20px;
  font-size: 2.0rem;
  font-weight: bold;
  text-align: left;
`;

export const ControlSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PopularPostsList = styled.div `
  margin-top: 2rem;
  font-size: 1.3rem;
`;
