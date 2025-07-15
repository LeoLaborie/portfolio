import { getUserLocale_function } from "../libs/locale";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = await getUserLocale_function();

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
