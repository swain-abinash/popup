import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function About() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: "20px" }}>
      <h1>{t("about")}</h1>
      <p>This is the About page of our application.</p>
      <Link to="/">
        <Button variant="contained" color="primary">
          {t("home")}
        </Button>
      </Link>
    </div>
  );
}

export default About;
