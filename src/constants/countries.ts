export interface CountryType {
  code: string;
  name: string;
  currency: string;
  currencySymbol: string;
}

export const countries: CountryType[] = [
  { code: "AUS", name: "Australia", currency: "AUD", currencySymbol: "$" },
  { code: "AUT", name: "Austria", currency: "EUR", currencySymbol: "€" },
  { code: "BEL", name: "Belgium", currency: "EUR", currencySymbol: "€" },
  { code: "BRA", name: "Brazil", currency: "BRL", currencySymbol: "R$" },
  { code: "CAN", name: "Canada", currency: "CAD", currencySymbol: "$" },
  { code: "CHE", name: "Switzerland", currency: "CHF", currencySymbol: "Fr" },
  { code: "CHL", name: "Chile", currency: "CLP", currencySymbol: "$" },
  { code: "CHN", name: "China", currency: "CNY", currencySymbol: "¥" },
  { code: "COL", name: "Colombia", currency: "COP", currencySymbol: "$" },
  {
    code: "CZE",
    name: "Czech Republic",
    currency: "CZK",
    currencySymbol: "Kč",
  },
  { code: "DEU", name: "Germany", currency: "EUR", currencySymbol: "€" },
  { code: "DNK", name: "Denmark", currency: "DKK", currencySymbol: "kr" },
  { code: "ESP", name: "Spain", currency: "EUR", currencySymbol: "€" },
  { code: "EST", name: "Estonia", currency: "EUR", currencySymbol: "€" },
  { code: "FIN", name: "Finland", currency: "EUR", currencySymbol: "€" },
  { code: "FRA", name: "France", currency: "EUR", currencySymbol: "€" },
  { code: "GBR", name: "United Kingdom", currency: "GBP", currencySymbol: "£" },
  { code: "GRC", name: "Greece", currency: "EUR", currencySymbol: "€" },
  {
    code: "HKG",
    name: "Hong Kong SAR",
    currency: "HKD",
    currencySymbol: "HK$",
  },
  { code: "HRV", name: "Croatia", currency: "HRK", currencySymbol: "kn" },
  { code: "HUN", name: "Hungary", currency: "HUF", currencySymbol: "Ft" },
  { code: "IDN", name: "Indonesia", currency: "IDR", currencySymbol: "Rp" },
  { code: "IND", name: "India", currency: "INR", currencySymbol: "₹" },
  { code: "IRL", name: "Ireland", currency: "EUR", currencySymbol: "€" },
  { code: "ISR", name: "Israel", currency: "ILS", currencySymbol: "₪" },
  { code: "ITA", name: "Italy", currency: "EUR", currencySymbol: "€" },
  { code: "JPN", name: "Japan", currency: "JPY", currencySymbol: "¥" },
  { code: "KOR", name: "South Korea", currency: "KRW", currencySymbol: "₩" },
  { code: "LTU", name: "Lithuania", currency: "EUR", currencySymbol: "€" },
  { code: "LVA", name: "Latvia", currency: "EUR", currencySymbol: "€" },
  { code: "MEX", name: "Mexico", currency: "MXN", currencySymbol: "$" },
  { code: "MYS", name: "Malaysia", currency: "MYR", currencySymbol: "RM" },
  { code: "NLD", name: "Netherlands", currency: "EUR", currencySymbol: "€" },
  { code: "NOR", name: "Norway", currency: "NOK", currencySymbol: "kr" },
  { code: "NZL", name: "New Zealand", currency: "NZD", currencySymbol: "$" },
  { code: "PHL", name: "Philippines", currency: "PHP", currencySymbol: "₱" },
  { code: "POL", name: "Poland", currency: "PLN", currencySymbol: "zł" },
  { code: "PRT", name: "Portugal", currency: "EUR", currencySymbol: "€" },
  { code: "ROU", name: "Romania", currency: "RON", currencySymbol: "lei" },
  { code: "RUS", name: "Russia", currency: "RUB", currencySymbol: "₽" },
  { code: "SAU", name: "Saudi Arabia", currency: "SAR", currencySymbol: "ر.س" },
  { code: "SGP", name: "Singapore", currency: "SGD", currencySymbol: "S$" },
  { code: "SRB", name: "Serbia", currency: "RSD", currencySymbol: "дин." },
  { code: "SVK", name: "Slovakia", currency: "EUR", currencySymbol: "€" },
  { code: "SVN", name: "Slovenia", currency: "EUR", currencySymbol: "€" },
  { code: "SWE", name: "Sweden", currency: "SEK", currencySymbol: "kr" },
  { code: "THA", name: "Thailand", currency: "THB", currencySymbol: "฿" },
  { code: "TUR", name: "Turkey", currency: "TRY", currencySymbol: "₺" },
  { code: "TWN", name: "Taiwan", currency: "TWD", currencySymbol: "NT$" },
  { code: "UKR", name: "Ukraine", currency: "UAH", currencySymbol: "₴" },
  {
    code: "USA",
    name: "United States of America",
    currency: "USD",
    currencySymbol: "$",
  },
  { code: "VNM", name: "Vietnam", currency: "VND", currencySymbol: "₫" },
  { code: "ZAF", name: "South Africa", currency: "ZAR", currencySymbol: "R" },
];
