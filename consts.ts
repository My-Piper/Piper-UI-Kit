import { Countries } from "src/ui-kit/enums/countries";
import { Currencies } from "src/ui-kit/enums/currencies";
import { Langs } from "src/ui-kit/enums/langs";

export const UI_DELAY = 250;

export const UI = {
  node: {
    width: 250,
    shift: 8,
    input: {
      height: 30,
    },
  },
  input: {
    width: 32,
    height: 32,
    shift: 8,
  },
  output: {
    width: 15,
    shift: 8,
  },
  color: {
    accent: "#FEBB38",
    accentLight: "#FDBA38",
    accentDark: "#F57F24",
    warning: "#f95741",
    primary: "#acacac",
    grey: "#d9d9d9",
    lightGrey: "#474747",
    textSecondary: "#222222",
    textPrimary: "#eaeaea",
    textPrimaryLight: "#535353",
    graphite75: "#aaaaaa",
    graphite100: "#878787",
    white: "#fff",
    black: "#000",
  },
};
export const DEFAULT_COUNTRY = Countries.us;
export const LANGS = [
  Langs.en,
  Langs.ru,
  Langs.de,
  Langs.es,
  Langs.ptBR,
  Langs.fr,
  Langs.ja,
  Langs.ko,
  Langs.zhCN,
  Langs.zhTW,
  Langs.hi,
  Langs.tr,
  Langs.it,
];
export const DEFAULT_LANG = Langs.en;

export const CURRENCIES = [
  Currencies.usd,
  Currencies.eur,
  Currencies.rub,
  Currencies.azn,
  Currencies.kzt,
  Currencies.uzs,
  Currencies.brl,
  Currencies.cop,
  Currencies.mxn,
  Currencies.ars,
  Currencies.bdt,
  Currencies.bob,
  Currencies.xaf,
  Currencies.cad,
  Currencies.clp,
  Currencies.cny,
  Currencies.crc,
  Currencies.xof,
  Currencies.svc,
  Currencies.ghs,
  Currencies.gtq,
  Currencies.hnl,
  Currencies.inr,
  Currencies.idr,
  Currencies.jpy,
  Currencies.kes,
  Currencies.myr,
  Currencies.nio,
  Currencies.ngn,
  Currencies.pen,
  Currencies.pyg,
  Currencies.php,
  Currencies.rwf,
  Currencies.sgd,
  Currencies.zar,
  Currencies.tzs,
  Currencies.thb,
  Currencies.ugx,
  Currencies.uyu,
  Currencies.vnd,
  Currencies.zmw,
];

export const CURRENCIES_FOR_COUNTRIES = {
  [Countries.us]: Currencies.usd,
  [Countries.ru]: Currencies.rub,
  [Countries.de]: Currencies.eur,
  [Countries.fr]: Currencies.eur,
  [Countries.es]: Currencies.eur,
  [Countries.pt]: Currencies.eur,
  [Countries.it]: Currencies.eur,
  [Countries.at]: Currencies.eur,
  [Countries.be]: Currencies.eur,
  [Countries.bg]: Currencies.eur,
  [Countries.hr]: Currencies.eur,
  [Countries.cy]: Currencies.eur,
  [Countries.dk]: Currencies.eur,
  [Countries.ee]: Currencies.eur,
  [Countries.fi]: Currencies.eur,
  [Countries.gr]: Currencies.eur,
  [Countries.hu]: Currencies.eur,
  [Countries.ie]: Currencies.eur,
  [Countries.lv]: Currencies.eur,
  [Countries.lt]: Currencies.eur,
  [Countries.lu]: Currencies.eur,
  [Countries.mt]: Currencies.eur,
  [Countries.nl]: Currencies.eur,
  [Countries.pl]: Currencies.eur,
  [Countries.ro]: Currencies.eur,
  [Countries.sk]: Currencies.eur,
  [Countries.si]: Currencies.eur,
  [Countries.se]: Currencies.eur,
  [Countries.uk]: Currencies.eur,
  [Countries.no]: Currencies.eur,
  [Countries.ch]: Currencies.eur,
  [Countries.is]: Currencies.eur,
  [Countries.li]: Currencies.eur,
  [Countries.al]: Currencies.eur,
  [Countries.ad]: Currencies.eur,
  [Countries.ba]: Currencies.eur,
  [Countries.mk]: Currencies.eur,
  [Countries.mc]: Currencies.eur,
  [Countries.me]: Currencies.eur,
  [Countries.sm]: Currencies.eur,
  [Countries.rs]: Currencies.eur,
  [Countries.va]: Currencies.eur,
  [Countries.md]: Currencies.eur,
  [Countries.ua]: Currencies.eur,
  [Countries.kz]: Currencies.kzt,
  [Countries.az]: Currencies.azn,
  [Countries.br]: Currencies.brl,
  [Countries.co]: Currencies.cop,
  [Countries.uz]: Currencies.uzs,
  [Countries.mx]: Currencies.mxn,
  [Countries.ar]: Currencies.ars,
  [Countries.bd]: Currencies.bdt,
  [Countries.bo]: Currencies.bob,
  [Countries.cm]: Currencies.xaf,
  [Countries.ca]: Currencies.cad,
  [Countries.cn]: Currencies.cny,
  [Countries.cl]: Currencies.clp,
  [Countries.cr]: Currencies.crc,
  [Countries.ci]: Currencies.xof,
  [Countries.ec]: Currencies.usd,
  [Countries.sv]: Currencies.svc,
  [Countries.gh]: Currencies.ghs,
  [Countries.gt]: Currencies.gtq,
  [Countries.hn]: Currencies.hnl,
  [Countries.in]: Currencies.inr,
  [Countries.id]: Currencies.idr,
  [Countries.jp]: Currencies.jpy,
  [Countries.ke]: Currencies.kes,
  [Countries.my]: Currencies.myr,
  [Countries.ni]: Currencies.nio,
  [Countries.ng]: Currencies.ngn,
  [Countries.pa]: Currencies.usd,
  [Countries.pe]: Currencies.pen,
  [Countries.py]: Currencies.pyg,
  [Countries.ph]: Currencies.php,
  [Countries.rw]: Currencies.rwf,
  [Countries.sg]: Currencies.sgd,
  [Countries.za]: Currencies.zar,
  [Countries.tz]: Currencies.tzs,
  [Countries.th]: Currencies.thb,
  [Countries.ug]: Currencies.ugx,
  [Countries.uy]: Currencies.uyu,
  [Countries.vn]: Currencies.vnd,
  [Countries.zm]: Currencies.zmw,
};

export const CURRENCIES_REGIONS = [
  {
    name: "Default",
    items: [
      { code: "USD", label: "$ USD" },
      { code: "EUR", label: "€ EUR" },
      { code: "RUB", label: "₽ RUB" },
    ],
  },
  {
    name: "Asia",
    items: [
      { code: "AZN", label: "₼ AZN" },
      { code: "BDT", label: "৳ BDT" },
      { code: "CNY", label: "¥ CNY" },
      { code: "INR", label: "₹ INR" },
      { code: "IDR", label: "Rp IDR" },
      { code: "JPY", label: "¥ JPY" },
      { code: "KZT", label: "₸ KZT" },
      { code: "MYR", label: "RM MYR" },
      { code: "PHP", label: "₱ PHP" },
      { code: "SGD", label: "$ SGD" },
      { code: "THB", label: "฿ THB" },
      { code: "UZS", label: "сўм UZS" },
      { code: "VND", label: "₫ VND" },
    ],
  },
  {
    name: "North America",
    items: [{ code: "CAD", label: "$ CAD" }],
  },
  {
    name: "Central America",
    items: [
      { code: "CRC", label: "₡ CRC" },
      { code: "GTQ", label: "Q GTQ" },
      { code: "HNL", label: "L HNL" },
      { code: "MXN", label: "$ MXN" },
      { code: "NIO", label: "C$ NIO" },
      { code: "SVC", label: "$ SVC" },
    ],
  },
  {
    name: "South America",
    items: [
      { code: "ARS", label: "$ ARS" },
      { code: "BOB", label: "Bs BOB" },
      { code: "BRL", label: "R$ BRL" },
      { code: "CLP", label: "$ CLP" },
      { code: "COP", label: "$ COP" },
      { code: "PEN", label: "S/. PEN" },
      { code: "PYG", label: "₲ PYG" },
      { code: "UYU", label: "$ UYU" },
    ],
  },
  {
    name: "Africa",
    items: [
      { code: "GHS", label: "₵ GHS" },
      { code: "KES", label: "KSh KES" },
      { code: "NGN", label: "₦ NGN" },
      { code: "RWF", label: "₣ RWF" },
      { code: "TZS", label: "TZS" },
      { code: "UGX", label: "UGX" },
      { code: "XAF", label: "₣ XAF" },
      { code: "XOF", label: "₣ XOF" },
      { code: "ZAR", label: "R ZAR" },
      { code: "ZMW", label: "ZK ZMW" },
    ],
  },
];

export const ALL_COUNTIES: {
  [key: string]: { code: string; label: string }[];
} = {
  [Langs.en]: [
    { code: "US", label: "United States" },
    { code: "RU", label: "Russia" },
    { code: "DE", label: "Germany" },
    { code: "FR", label: "France" },

    { code: "AF", label: "Afghanistan" },
    { code: "AX", label: "Åland Islands" },
    { code: "AL", label: "Albania" },
    { code: "DZ", label: "Algeria" },
    { code: "AS", label: "American Samoa" },
    { code: "AD", label: "Andorra" },
    { code: "AO", label: "Angola" },
    { code: "AI", label: "Anguilla" },
    { code: "AQ", label: "Antarctica" },
    { code: "AG", label: "Antigua and Barbuda" },
    { code: "AR", label: "Argentina" },
    { code: "AM", label: "Armenia" },
    { code: "AW", label: "Aruba" },
    { code: "AU", label: "Australia" },
    { code: "AT", label: "Austria" },
    { code: "AZ", label: "Azerbaijan" },
    { code: "BS", label: "Bahamas" },
    { code: "BH", label: "Bahrain" },
    { code: "BD", label: "Bangladesh" },
    { code: "BB", label: "Barbados" },
    { code: "BY", label: "Belarus" },
    { code: "BE", label: "Belgium" },
    { code: "BZ", label: "Belize" },
    { code: "BJ", label: "Benin" },
    { code: "BM", label: "Bermuda" },
    { code: "BT", label: "Bhutan" },
    { code: "BO", label: "Bolivia" },
    { code: "BQ", label: "Bonaire" },
    { code: "BA", label: "Bosnia and Herzegovina" },
    { code: "BW", label: "Botswana" },
    { code: "BV", label: "Bouvet Island" },
    { code: "BR", label: "Brazil" },
    { code: "IO", label: "British Indian Ocean Territory" },
    { code: "BN", label: "Brunei Darussalam" },
    { code: "BG", label: "Bulgaria" },
    { code: "BF", label: "Burkina Faso" },
    { code: "BI", label: "Burundi" },
    { code: "CV", label: "Cabo Verde" },
    { code: "KH", label: "Cambodia" },
    { code: "CM", label: "Cameroon" },
    { code: "CA", label: "Canada" },
    { code: "KY", label: "Cayman Islands" },
    { code: "CF", label: "Central African Republic" },
    { code: "TD", label: "Chad" },
    { code: "CL", label: "Chile" },
    { code: "CN", label: "China" },
    { code: "CX", label: "Christmas Island" },
    { code: "CC", label: "Cocos (Keeling) Islands" },
    { code: "CO", label: "Colombia" },
    { code: "KM", label: "Comoros" },
    { code: "CG", label: "Congo" },
    { code: "CD", label: "Congo" },
    { code: "CK", label: "Cook Islands" },
    { code: "CR", label: "Costa Rica" },
    { code: "CI", label: "Côte d'Ivoire" },
    { code: "HR", label: "Croatia" },
    { code: "CU", label: "Cuba" },
    { code: "CW", label: "Curaçao" },
    { code: "CY", label: "Cyprus" },
    { code: "CZ", label: "Czech Republic" },
    { code: "DK", label: "Denmark" },
    { code: "DJ", label: "Djibouti" },
    { code: "DM", label: "Dominica" },
    { code: "DO", label: "Dominican Republic" },
    { code: "EC", label: "Ecuador" },
    { code: "EG", label: "Egypt" },
    { code: "SV", label: "El Salvador" },
    { code: "GQ", label: "Equatorial Guinea" },
    { code: "ER", label: "Eritrea" },
    { code: "EE", label: "Estonia" },
    { code: "ET", label: "Ethiopia" },
    { code: "FK", label: "Falkland Islands" },
    { code: "FO", label: "Faroe Islands" },
    { code: "FJ", label: "Fiji" },
    { code: "FI", label: "Finland" },
    { code: "GF", label: "French Guiana" },
    { code: "PF", label: "French Polynesia" },
    { code: "TF", label: "French Southern Territories" },
    { code: "GA", label: "Gabon" },
    { code: "GM", label: "Gambia" },
    { code: "GE", label: "Georgia" },
    { code: "GH", label: "Ghana" },
    { code: "GI", label: "Gibraltar" },
    { code: "GR", label: "Greece" },
    { code: "GL", label: "Greenland" },
    { code: "GD", label: "Grenada" },
    { code: "GP", label: "Guadeloupe" },
    { code: "GU", label: "Guam" },
    { code: "GT", label: "Guatemala" },
    { code: "GG", label: "Guernsey" },
    { code: "GN", label: "Guinea" },
    { code: "GW", label: "Guinea-Bissau" },
    { code: "GY", label: "Guyana" },
    { code: "HT", label: "Haiti" },
    { code: "HM", label: "Heard Island and McDonald Islands" },
    { code: "VA", label: "Holy See" },
    { code: "HN", label: "Honduras" },
    { code: "HK", label: "Hong Kong" },
    { code: "HU", label: "Hungary" },
    { code: "IS", label: "Iceland" },
    { code: "IN", label: "India" },
    { code: "ID", label: "Indonesia" },
    { code: "IR", label: "Iran (Islamic Republic of)" },
    { code: "IQ", label: "Iraq" },
    { code: "IE", label: "Ireland" },
    { code: "IM", label: "Isle of Man" },
    { code: "IL", label: "Israel" },
    { code: "IT", label: "Italy" },
    { code: "JM", label: "Jamaica" },
    { code: "JP", label: "Japan" },
    { code: "JE", label: "Jersey" },
    { code: "JO", label: "Jordan" },
    { code: "KZ", label: "Kazakhstan" },
    { code: "KE", label: "Kenya" },
    { code: "KI", label: "Kiribati" },
    { code: "KP", label: "Korea (DPR)" },
    { code: "KR", label: "Korea (Republic of)" },
    { code: "KW", label: "Kuwait" },
    { code: "KG", label: "Kyrgyzstan" },
    { code: "LA", label: "Lao People's Democratic Republic" },
    { code: "LV", label: "Latvia" },
    { code: "LB", label: "Lebanon" },
    { code: "LS", label: "Lesotho" },
    { code: "LR", label: "Liberia" },
    { code: "LY", label: "Libya" },
    { code: "LI", label: "Liechtenstein" },
    { code: "LT", label: "Lithuania" },
    { code: "LU", label: "Luxembourg" },
    { code: "MO", label: "Macao" },
    { code: "MK", label: "Macedonia" },
    { code: "MG", label: "Madagascar" },
    { code: "MW", label: "Malawi" },
    { code: "MY", label: "Malaysia" },
    { code: "MV", label: "Maldives" },
    { code: "ML", label: "Mali" },
    { code: "MT", label: "Malta" },
    { code: "MH", label: "Marshall Islands" },
    { code: "MQ", label: "Martinique" },
    { code: "MR", label: "Mauritania" },
    { code: "MU", label: "Mauritius" },
    { code: "YT", label: "Mayotte" },
    { code: "MX", label: "Mexico" },
    { code: "FM", label: "Micronesia" },
    { code: "MD", label: "Moldova" },
    { code: "MC", label: "Monaco" },
    { code: "MN", label: "Mongolia" },
    { code: "ME", label: "Montenegro" },
    { code: "MS", label: "Montserrat" },
    { code: "MA", label: "Morocco" },
    { code: "MZ", label: "Mozambique" },
    { code: "MM", label: "Myanmar" },
    { code: "NA", label: "Namibia" },
    { code: "NR", label: "Nauru" },
    { code: "NP", label: "Nepal" },
    { code: "NL", label: "Netherlands" },
    { code: "NC", label: "New Caledonia" },
    { code: "NZ", label: "New Zealand" },
    { code: "NI", label: "Nicaragua" },
    { code: "NE", label: "Niger" },
    { code: "NG", label: "Nigeria" },
    { code: "NU", label: "Niue" },
    { code: "NF", label: "Norfolk Island" },
    { code: "MP", label: "Northern Mariana Islands" },
    { code: "NO", label: "Norway" },
    { code: "OM", label: "Oman" },
    { code: "PK", label: "Pakistan" },
    { code: "PW", label: "Palau" },
    { code: "PS", label: "Palestine, State of" },
    { code: "PA", label: "Panama" },
    { code: "PG", label: "Papua New Guinea" },
    { code: "PY", label: "Paraguay" },
    { code: "PE", label: "Peru" },
    { code: "PH", label: "Philippines" },
    { code: "PN", label: "Pitcairn" },
    { code: "PL", label: "Poland" },
    { code: "PT", label: "Portugal" },
    { code: "PR", label: "Puerto Rico" },
    { code: "QA", label: "Qatar" },
    { code: "RE", label: "Réunion" },
    { code: "RO", label: "Romania" },
    { code: "RW", label: "Rwanda" },
    { code: "BL", label: "Saint Barthélemy" },
    { code: "SH", label: "Saint Helena" },
    { code: "KN", label: "Saint Kitts and Nevis" },
    { code: "LC", label: "Saint Lucia" },
    { code: "MF", label: "Saint Martin" },
    { code: "PM", label: "Saint Pierre and Miquelon" },
    { code: "VC", label: "Saint Vincent and the Grenadines" },
    { code: "WS", label: "Samoa" },
    { code: "SM", label: "San Marino" },
    { code: "ST", label: "Sao Tome and Principe" },
    { code: "SA", label: "Saudi Arabia" },
    { code: "SN", label: "Senegal" },
    { code: "RS", label: "Serbia" },
    { code: "SC", label: "Seychelles" },
    { code: "SL", label: "Sierra Leone" },
    { code: "SG", label: "Singapore" },
    { code: "SX", label: "Sint Maarten (Dutch part)" },
    { code: "SK", label: "Slovakia" },
    { code: "SI", label: "Slovenia" },
    { code: "SB", label: "Solomon Islands" },
    { code: "SO", label: "Somalia" },
    { code: "ZA", label: "South Africa" },
    { code: "GS", label: "South Georgia" },
    { code: "SS", label: "South Sudan" },
    { code: "ES", label: "Spain" },
    { code: "LK", label: "Sri Lanka" },
    { code: "SD", label: "Sudan" },
    { code: "SR", label: "Suriname" },
    { code: "SJ", label: "Svalbard and Jan Mayen" },
    { code: "SZ", label: "Swaziland" },
    { code: "SE", label: "Sweden" },
    { code: "CH", label: "Switzerland" },
    { code: "SY", label: "Syrian Arab Republic" },
    { code: "TW", label: "Taiwan, Province of China" },
    { code: "TJ", label: "Tajikistan" },
    { code: "TZ", label: "Tanzania, United Republic of" },
    { code: "TH", label: "Thailand" },
    { code: "TL", label: "Timor-Leste" },
    { code: "TG", label: "Togo" },
    { code: "TK", label: "Tokelau" },
    { code: "TO", label: "Tonga" },
    { code: "TT", label: "Trinidad and Tobago" },
    { code: "TN", label: "Tunisia" },
    { code: "TR", label: "Turkey" },
    { code: "TM", label: "Turkmenistan" },
    { code: "TC", label: "Turks and Caicos Islands" },
    { code: "TV", label: "Tuvalu" },
    { code: "UG", label: "Uganda" },
    { code: "UA", label: "Ukraine" },
    { code: "AE", label: "United Arab Emirates" },
    { code: "GB", label: "United Kingdom" },
    { code: "UM", label: "United States Minor Outlying Islands" },
    { code: "UY", label: "Uruguay" },
    { code: "UZ", label: "Uzbekistan" },
    { code: "VU", label: "Vanuatu" },
    { code: "VE", label: "Venezuela (Bolivarian Republic of)" },
    { code: "VN", label: "Viet Nam" },
    { code: "VG", label: "Virgin Islands (British)" },
    { code: "VI", label: "Virgin Islands (U.S.)" },
    { code: "WF", label: "Wallis and Futuna" },
    { code: "EH", label: "Western Sahara" },
    { code: "YE", label: "Yemen" },
    { code: "ZM", label: "Zambia" },
    { code: "ZW", label: "Zimbabwe" },
  ],
  [Langs.ru]: [
    { code: "US", label: "США" },
    { code: "RU", label: "Россия" },
    { code: "DE", label: "Германия" },
    { code: "FR", label: "Франция" },
    { code: "AF", label: "Афганистан" },
    { code: "AX", label: "Аландские острова" },
    { code: "AL", label: "Албания" },
    { code: "DZ", label: "Алжир" },
    { code: "AS", label: "Американское Самоа" },
    { code: "AD", label: "Андорра" },
    { code: "AO", label: "Ангола" },
    { code: "AI", label: "Ангилья" },
    { code: "AQ", label: "Антарктида" },
    { code: "AG", label: "Антигуа и Барбуда" },
    { code: "AR", label: "Аргентина" },
    { code: "AM", label: "Армения" },
    { code: "AW", label: "Аруба" },
    { code: "AU", label: "Австралия" },
    { code: "AT", label: "Австрия" },
    { code: "AZ", label: "Азербайджан" },
    { code: "BS", label: "Багамы" },
    { code: "BH", label: "Бахрейн" },
    { code: "BD", label: "Бангладеш" },
    { code: "BB", label: "Барбадос" },
    { code: "BY", label: "Беларусь" },
    { code: "BE", label: "Бельгия" },
    { code: "BZ", label: "Белиз" },
    { code: "BJ", label: "Бенин" },
    { code: "BM", label: "Бермуды" },
    { code: "BT", label: "Бутан" },
    { code: "BO", label: "Боливия" },
    { code: "BQ", label: "Бонэйр" },
    { code: "BA", label: "Босния и Герцеговина" },
    { code: "BW", label: "Ботсвана" },
    { code: "BV", label: "Остров Буве" },
    { code: "BR", label: "Бразилия" },
    { code: "IO", label: "Британская территория Индийского океана" },
    { code: "BN", label: "Бруней-Даруссалам" },
    { code: "BG", label: "Болгария" },
    { code: "BF", label: "Буркина-Фасо" },
    { code: "BI", label: "Бурунди" },
    { code: "CV", label: "Кабо-Верде" },
    { code: "KH", label: "Камбоджа" },
    { code: "CM", label: "Камерун" },
    { code: "CA", label: "Канада" },
    { code: "KY", label: "Каймановы острова" },
    { code: "CF", label: "Центрально-Африканская Республика" },
    { code: "TD", label: "Чад" },
    { code: "CL", label: "Чили" },
    { code: "CN", label: "Китай" },
    { code: "CX", label: "Остров Рождества" },
    { code: "CC", label: "Кокосовые (Килинг) острова" },
    { code: "CO", label: "Колумбия" },
    { code: "KM", label: "Коморские острова" },
    { code: "CG", label: "Конго" },
    { code: "CD", label: "Конго" },
    { code: "CK", label: "Острова Кука" },
    { code: "CR", label: "Коста-Рика" },
    { code: "CI", label: "Кот-д'Ивуар" },
    { code: "HR", label: "Хорватия" },
    { code: "CU", label: "Куба" },
    { code: "CW", label: "Кюрасао" },
    { code: "CY", label: "Кипр" },
    { code: "CZ", label: "Чехия" },
    { code: "DK", label: "Дания" },
    { code: "DJ", label: "Джибути" },
    { code: "DM", label: "Доминика" },
    { code: "DO", label: "Доминиканская Республика" },
    { code: "EC", label: "Эквадор" },
    { code: "EG", label: "Египет" },
    { code: "SV", label: "Сальвадор" },
    { code: "GQ", label: "Экваториальная Гвинея" },
    { code: "ER", label: "Эритрея" },
    { code: "EE", label: "Эстония" },
    { code: "ET", label: "Эфиопия" },
    { code: "FK", label: "Фолклендские острова" },
    { code: "FO", label: "Фарерские острова" },
    { code: "FJ", label: "Фиджи" },
    { code: "FI", label: "Финляндия" },
    { code: "GF", label: "Французская Гвиана" },
    { code: "PF", label: "Французская Полинезия" },
    { code: "TF", label: "Французские Южные и Антарктические территории" },
    { code: "GA", label: "Габон" },
    { code: "GM", label: "Гамбия" },
    { code: "GE", label: "Грузия" },
    { code: "GH", label: "Гана" },
    { code: "GI", label: "Гибралтар" },
    { code: "GR", label: "Греция" },
    { code: "GL", label: "Гренландия" },
    { code: "GD", label: "Гренада" },
    { code: "GP", label: "Гваделупа" },
    { code: "GU", label: "Гуам" },
    { code: "GT", label: "Гватемала" },
    { code: "GG", label: "Гернси" },
    { code: "GN", label: "Гвинея" },
    { code: "GW", label: "Гвинея-Бисау" },
    { code: "GY", label: "Гайана" },
    { code: "HT", label: "Гаити" },
    { code: "HM", label: "Остров Херд и острова Макдональд" },
    { code: "VA", label: "Святая Престольная область" },
    { code: "HN", label: "Гондурас" },
    { code: "HK", label: "Гонконг" },
    { code: "HU", label: "Венгрия" },
    { code: "IS", label: "Исландия" },
    { code: "IN", label: "Индия" },
    { code: "ID", label: "Индонезия" },
    { code: "IR", label: "Иран (Исламская Республика)" },
    { code: "IQ", label: "Ирак" },
    { code: "IE", label: "Ирландия" },
    { code: "IM", label: "Остров Мэн" },
    { code: "IL", label: "Израиль" },
    { code: "IT", label: "Италия" },
    { code: "JM", label: "Ямайка" },
    { code: "JP", label: "Япония" },
    { code: "JE", label: "Джерси" },
    { code: "JO", label: "Иордания" },
    { code: "KZ", label: "Казахстан" },
    { code: "KE", label: "Кения" },
    { code: "KI", label: "Кирибати" },
    { code: "KP", label: "Корея (КНДР)" },
    { code: "KR", label: "Корея (Республика)" },
    { code: "KW", label: "Кувейт" },
    { code: "KG", label: "Киргизия" },
    { code: "LA", label: "Лаосская Народно-Демократическая Республика" },
    { code: "LV", label: "Латвия" },
    { code: "LB", label: "Ливан" },
    { code: "LS", label: "Лесото" },
    { code: "LR", label: "Либерия" },
    { code: "LY", label: "Ливия" },
    { code: "LI", label: "Лихтенштейн" },
    { code: "LT", label: "Литва" },
    { code: "LU", label: "Люксембург" },
    { code: "MO", label: "Макао" },
    { code: "MK", label: "Македония" },
    { code: "MG", label: "Мадагаскар" },
    { code: "MW", label: "Малави" },
    { code: "MY", label: "Малайзия" },
    { code: "MV", label: "Мальдивы" },
    { code: "ML", label: "Мали" },
    { code: "MT", label: "Мальта" },
    { code: "MH", label: "Маршалловы острова" },
    { code: "MQ", label: "Мартиника" },
    { code: "MR", label: "Мавритания" },
    { code: "MU", label: "Маврикий" },
    { code: "YT", label: "Майотта" },
    { code: "MX", label: "Мексика" },
    { code: "FM", label: "Микронезия" },
    { code: "MD", label: "Молдова" },
    { code: "MC", label: "Монако" },
    { code: "MN", label: "Монголия" },
    { code: "ME", label: "Черногория" },
    { code: "MS", label: "Монтсеррат" },
    { code: "MA", label: "Марокко" },
    { code: "MZ", label: "Мозамбик" },
    { code: "MM", label: "Мьянма" },
    { code: "NA", label: "Намибия" },
    { code: "NR", label: "Науру" },
    { code: "NP", label: "Непал" },
    { code: "NL", label: "Нидерланды" },
    { code: "NC", label: "Новая Каледония" },
    { code: "NZ", label: "Новая Зеландия" },
    { code: "NI", label: "Никарагуа" },
    { code: "NE", label: "Нигер" },
    { code: "NG", label: "Нигерия" },
    { code: "NU", label: "Ниуэ" },
    { code: "NF", label: "Норфолк" },
    { code: "MP", label: "Северные Марианские острова" },
    { code: "NO", label: "Норвегия" },
    { code: "OM", label: "Оман" },
    { code: "PK", label: "Пакистан" },
    { code: "PW", label: "Палау" },
    { code: "PS", label: "Палестина, Государство" },
    { code: "PA", label: "Панама" },
    { code: "PG", label: "Папуа — Новая Гвинея" },
    { code: "PY", label: "Парагвай" },
    { code: "PE", label: "Перу" },
    { code: "PH", label: "Филиппины" },
    { code: "PN", label: "Питкэрн" },
    { code: "PL", label: "Польша" },
    { code: "PT", label: "Португалия" },
    { code: "PR", label: "Пуэрто-Рико" },
    { code: "QA", label: "Катар" },
    { code: "RE", label: "Реюньон" },
    { code: "RO", label: "Румыния" },
    { code: "RW", label: "Руанда" },
    { code: "BL", label: "Сен-Бартелеми" },
    { code: "SH", label: "Остров Святой Елены" },
    { code: "KN", label: "Сент-Китс и Невис" },
    { code: "LC", label: "Сент-Люсия" },
    { code: "MF", label: "Сен-Мартен" },
    { code: "PM", label: "Сен-Пьер и Микелон" },
    { code: "VC", label: "Сент-Винсент и Гренадины" },
    { code: "WS", label: "Самоа" },
    { code: "SM", label: "Сан-Марино" },
    { code: "ST", label: "Сан-Томе и Принсипи" },
    { code: "SA", label: "Саудовская Аравия" },
    { code: "SN", label: "Сенегал" },
    { code: "RS", label: "Сербия" },
    { code: "SC", label: "Сейшельские Острова" },
    { code: "SL", label: "Сьерра-Леоне" },
    { code: "SG", label: "Сингапур" },
    { code: "SX", label: "Синт-Мартен" },
    { code: "SK", label: "Словакия" },
    { code: "SI", label: "Словения" },
    { code: "SB", label: "Соломоновы Острова" },
    { code: "SO", label: "Сомали" },
    { code: "ZA", label: "Южная Африка" },
    { code: "GS", label: "Южная Джорджия и Южные Сандвичевы Острова" },
    { code: "SS", label: "Южный Судан" },
    { code: "ES", label: "Испания" },
    { code: "LK", label: "Шри-Ланка" },
    { code: "SD", label: "Судан" },
    { code: "SR", label: "Суринам" },
    { code: "SJ", label: "Шпицберген и Ян-Майен" },
    { code: "SZ", label: "Свазиленд" },
    { code: "SE", label: "Швеция" },
    { code: "CH", label: "Швейцария" },
    { code: "SY", label: "Сирия" },
    { code: "TW", label: "Тайвань, Провинция Китая" },
    { code: "TJ", label: "Таджикистан" },
    { code: "TZ", label: "Танзания, Объединенная Республика" },
    { code: "TH", label: "Таиланд" },
    { code: "TL", label: "Восточный Тимор" },
    { code: "TG", label: "Того" },
    { code: "TK", label: "Токелау" },
    { code: "TO", label: "Тонга" },
    { code: "TT", label: "Тринидад и Тобаго" },
    { code: "TN", label: "Тунис" },
    { code: "TR", label: "Турция" },
    { code: "TM", label: "Туркмения" },
    { code: "TC", label: "Острова Теркс и Кайкос" },
    { code: "TV", label: "Тувалу" },
    { code: "UG", label: "Уганда" },
    { code: "UA", label: "Украина" },
    { code: "AE", label: "Объединенные Арабские Эмираты" },
    { code: "GB", label: "Великобритания" },
    { code: "UM", label: "Малые отдаленные острова Соединенных Штатов" },
    { code: "UY", label: "Уругвай" },
    { code: "UZ", label: "Узбекистан" },
    { code: "VU", label: "Вануату" },
    { code: "VE", label: "Венесуэла (Боливарианская Республика)" },
    { code: "VN", label: "Вьетнам" },
    { code: "VG", label: "Британские Виргинские острова" },
    { code: "VI", label: "Американские Виргинские острова" },
    { code: "WF", label: "Уоллис и Футуна" },
    { code: "EH", label: "Западная Сахара" },
    { code: "YE", label: "Йемен" },
    { code: "ZM", label: "Замбия" },
    { code: "ZW", label: "Зимбабве" },
  ],
};
