import React from "react";
import { Row, Col } from "antd";
import "../css/index.css";
import UserAvatar from "./UserAvatar";

function HeaderInfo(props) {
  return (
    <div>
      <Row className="header-row">
        <Col xs={24} sm={24} md={5} lg={5} xl={5} xxl={4} className="brand-name">
          BookStore
        </Col>
        <Col xs={0} sm={0} md={19} lg={19} xl={19} xxl={20} className="col-item">
          <UserAvatar className="user-avatar" />
        </Col>
      </Row>
    </div>
  );
}

export default HeaderInfo;
