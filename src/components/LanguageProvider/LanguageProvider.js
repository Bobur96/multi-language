/* eslint-disable default-case */
import { IntlProvider, FormattedMessage } from "react-intl";
import defaultMessage from "../Quote/messages";

function LanguageProvider(props) {
  const { locale, lang } = props;
  return (
    <IntlProvider locale={locale} messages={lang}>
      <div className="text-center">
        <p>
          <FormattedMessage
            id="change"
            defaultMessage={defaultMessage.quote.change}
          />
        </p>
        <div className="text-center">{props.children}</div>
      </div>
    </IntlProvider>
  );
}

export default LanguageProvider;
