import styled from 'styled-components';

export const Description = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  grid-column: 1/13;
  grid-row: 2/3;
`;

export const ControllerLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  width: ${({ width }) => `${100 * width}%`};
  grid-column: 2/6;
  grid-row: ${({ image }) => image ? '4/5' : '8/9'};
`;

export const FileUploaderConatianer = styled.div`
  height: 110%;
  border-radius: 3px;
  grid-column: 2/9;
  grid-row: ${({ image }) => image ? '5/6' : '9/10'};
`;

export const Notification = styled.div`
  align-self: center;
  grid-column: 2/8;
  margin-top: 10px;
  grid-row: ${({ image }) => image ? '6/7' : '10/11'};
`;
