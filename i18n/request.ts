import { getUserLocale_function } from "../libs/locale";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // Try to get saved locale from headers (if we have access) or use default detection
  let locale = await getUserLocale_function();
  
  // During client-side navigation, check if we have a preferred locale
  // This is a server-side function, so we can't access localStorage directly
  // But we can make the default more predictable
  
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
