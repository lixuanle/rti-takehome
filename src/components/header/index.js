import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as Icon } from "../../assets/icon-left-arrow.svg";

const Header = ({ headerTitle }) => {
  return (
    <MobileHeaderContainer>
      {headerTitle === "Movie Details" ? 
        <Link style={{ margin: "auto 0" }} to="/">
          <IconLeftArrow width={24} />
        </Link> : null}
      <MobileHeader>
        {headerTitle}
      </MobileHeader>
    </MobileHeaderContainer>
  )
}

export default Header;

const MobileHeaderContainer = styled.div`
  display: flex;
  background-color: #212121;
  position: fixed;
  top: 0;
  margin: 0;
  width: 100%;
  padding: 5px 20px;
`

const MobileHeader = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 1.4rem;
`

const IconLeftArrow = styled(Icon)`
  fill: white;
  margin-right: 12px;
`
