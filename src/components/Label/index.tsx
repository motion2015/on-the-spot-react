import styled from '@emotion/styled';
import { Component } from 'react';

const Conatiner = styled.span`
  margin: 0 16px;
  font-size: 1.2rem;
`;

interface Props {
  readonly data: number;
}

// export const Label = ({ data }: Props) => {
//   return <Conatiner>{data}</Conatiner>;
// };

export class Label extends Component<Props> {
  render() {
    const { data } = this.props;
    return <Conatiner>{data}</Conatiner>;
  }
}
