import styled from 'styled-components';
import { Menu } from 'antd';

const AntMenu = styled(Menu)`
  padding-top: 60px;
  .ant-menu-item {
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-inline: 10px;
    img {
      height: 24px;
      width: 24px;
    }
  }
  &.hide {
    li {
      span {
        opacity: 0 !important;
      }
      img {
        &:hover ~ span {
          opacity: 1 !important;
        }
      }
    }
    &.ant-menu-dark .ant-menu-item-selected {
      span {
        opacity: 1 !important;
      }
    }
  }
`;

export default AntMenu;
