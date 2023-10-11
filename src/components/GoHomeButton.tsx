// Helpers
import { FC } from "react";
import { Link } from "react-router-dom";

// Nested Components
import { DoubleLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";

const GoHomeButton: FC = () => {
  return (
    <Button ghost style={{ margin: "1rem auto" }}>
      <DoubleLeftOutlined /> <Link to="/">Go back </Link>
    </Button>
  );
};

export default GoHomeButton;
