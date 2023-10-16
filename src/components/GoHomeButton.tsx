// Helpers
import { FC } from "react";
import { Link } from "react-router-dom";

// Nested Components
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

const GoHomeButton: FC = () => {
  const { t, i18n } = useTranslation("lang");
  return (
    <Button ghost style={{ margin: "1rem auto" }}>
      {/* English go back icon  */}
      {i18n.language == "en" && <DoubleLeftOutlined />}{" "}
      <Link to="/">{t("goHomeBtnText")} </Link>
      {/* Arabic go back icon  */}
      {i18n.language == "ar" && <DoubleRightOutlined />}
    </Button>
  );
};

export default GoHomeButton;
