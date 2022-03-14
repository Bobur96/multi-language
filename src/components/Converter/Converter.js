import React from "react";
import { FormattedMessage } from "react-intl";

export default function Converter(id, msg) {
  return <FormattedMessage id={id} defaultMessage={msg} />;
}
