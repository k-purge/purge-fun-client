import SvgIcon from "@mui/material/SvgIcon";

export default function DeployerIcon(props: any) {
  return (
    <SvgIcon {...props} sx={{ cursor: "pointer" }}>
      <svg
        width="29"
        height="28"
        viewBox="0 0 29 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.625 0C6.90091 0 0.625 6.27591 0.625 14C0.625 21.7241 6.90111 28.0043 14.6256 28C17.4942 27.9984 20.2905 27.1073 22.6374 25.4609C22.7117 25.4118 22.7754 25.3482 22.8248 25.274C22.8741 25.1999 22.9081 25.1165 22.9247 25.029C22.9413 24.9414 22.9401 24.8514 22.9214 24.7643C22.9026 24.6772 22.8666 24.5948 22.8154 24.5218C22.7642 24.4489 22.6989 24.387 22.6234 24.3397C22.5479 24.2924 22.4636 24.2607 22.3757 24.2466C22.2877 24.2324 22.1978 24.236 22.1112 24.2572C22.0247 24.2783 21.9432 24.3166 21.8717 24.3698C19.7474 25.86 17.2173 26.6652 14.6243 26.6667C7.6213 26.6706 1.95833 21.0035 1.95833 14C1.95833 6.9965 7.6215 1.33333 14.625 1.33333C21.6285 1.33333 27.2931 6.99666 27.2917 14C27.2911 16.5952 26.4905 19.1273 25.0019 21.2539C24.95 21.3256 24.9128 21.4068 24.8926 21.493C24.8724 21.5792 24.8696 21.6685 24.8842 21.7557C24.8989 21.843 24.9308 21.9265 24.9781 22.0013C25.0253 22.0761 25.087 22.1408 25.1595 22.1915C25.2321 22.2423 25.3139 22.2781 25.4004 22.2968C25.4869 22.3156 25.5763 22.3169 25.6633 22.3008C25.7503 22.2847 25.8332 22.2514 25.9073 22.2029C25.9813 22.1543 26.0449 22.0916 26.0944 22.0182C27.7394 19.6682 28.6244 16.8692 28.625 14C28.6265 6.27575 22.3491 0 14.625 0ZM14.625 2.66667C13.1668 2.66709 11.7231 2.95215 10.3737 3.50065C10.2925 3.53364 10.2187 3.58229 10.1563 3.64383C10.094 3.70537 10.0444 3.77858 10.0103 3.8593C9.97627 3.94001 9.95845 4.02664 9.95789 4.11424C9.95732 4.20184 9.97402 4.2887 10.007 4.36984C10.04 4.45099 10.0887 4.52484 10.1503 4.58718C10.2118 4.64951 10.285 4.69911 10.3658 4.73315C10.4465 4.76718 10.5331 4.78497 10.6207 4.78552C10.7083 4.78607 10.7952 4.76935 10.8763 4.73633C12.0679 4.25198 13.3404 4.00037 14.625 4C20.1555 3.99837 24.625 8.46926 24.625 14C24.625 19.5307 20.1557 24 14.625 24C9.09425 24 4.62321 19.5305 4.625 14C4.62542 12.7155 4.8774 11.4429 5.36198 10.2513C5.39501 10.1702 5.41173 10.0833 5.41119 9.9957C5.41065 9.9081 5.39285 9.82146 5.35882 9.74073C5.32479 9.66 5.27519 9.58677 5.21286 9.52522C5.15052 9.46366 5.07666 9.41499 4.99551 9.38198C4.91436 9.34898 4.82751 9.33228 4.7399 9.33284C4.6523 9.33341 4.56566 9.35123 4.48494 9.38528C4.40423 9.41934 4.33101 9.46896 4.26947 9.53132C4.20794 9.59367 4.15929 9.66754 4.1263 9.7487C3.57758 11.098 3.29214 12.5416 3.29167 14C3.28964 20.2516 8.37367 25.3333 14.625 25.3333C20.8763 25.3333 25.9583 20.2513 25.9583 14C25.9583 7.74867 20.8766 2.66483 14.625 2.66667ZM14.6341 8.50911C14.508 8.5072 14.3839 8.54112 14.2762 8.60692C14.1686 8.67272 14.0818 8.76771 14.026 8.88086L12.6139 11.7428L9.45638 12.2005C9.33292 12.2183 9.21692 12.2703 9.12155 12.3507C9.02619 12.4311 8.95528 12.5366 8.9169 12.6553C8.87852 12.774 8.87419 12.901 8.90442 13.022C8.93464 13.143 8.99821 13.2532 9.08789 13.3398L11.3737 15.5664L10.832 18.7109C10.8108 18.8336 10.8243 18.9598 10.8711 19.0752C10.9179 19.1906 10.9961 19.2906 11.0968 19.3639C11.1975 19.4371 11.3167 19.4807 11.4409 19.4897C11.5651 19.4987 11.6893 19.4727 11.7995 19.4147L14.6237 17.9284L17.4486 19.4147C17.5588 19.4727 17.683 19.4987 17.8072 19.4897C17.9314 19.4807 18.0506 19.4371 18.1513 19.3639C18.252 19.2906 18.3301 19.1906 18.3769 19.0752C18.4237 18.9598 18.4373 18.8336 18.416 18.7109L17.8769 15.5664L20.1628 13.3398C20.2524 13.2531 20.316 13.143 20.3462 13.0219C20.3764 12.9008 20.372 12.7737 20.3336 12.655C20.2951 12.5363 20.2241 12.4308 20.1287 12.3505C20.0332 12.2701 19.9171 12.2182 19.7936 12.2005L16.6341 11.7428L15.222 8.88086C15.1677 8.77079 15.0841 8.67784 14.9804 8.61225C14.8766 8.54666 14.7568 8.51097 14.6341 8.50911ZM14.6243 10.6823L15.5937 12.6484C15.6417 12.7452 15.7124 12.8289 15.7998 12.8923C15.8873 12.9557 15.9888 12.9969 16.0957 13.0124L18.2656 13.3275L16.696 14.8555C16.6184 14.9309 16.5605 15.0241 16.527 15.127C16.4935 15.2299 16.4856 15.3393 16.5039 15.446L16.873 17.6061L14.9342 16.5853C14.8386 16.535 14.7321 16.5087 14.624 16.5087C14.5159 16.5087 14.4095 16.535 14.3138 16.5853L12.375 17.6035L12.7467 15.446C12.765 15.3393 12.7571 15.2299 12.7237 15.127C12.6902 15.0241 12.6322 14.9309 12.5547 14.8555L10.985 13.3275L13.1523 13.0124C13.2592 12.9969 13.3608 12.9557 13.4482 12.8923C13.5356 12.8289 13.6064 12.7452 13.6543 12.6484L14.6243 10.6823ZM24.0631 22.7617C23.9739 22.7603 23.8853 22.7767 23.8025 22.8102C23.7198 22.8436 23.6446 22.8933 23.5814 22.9564C23.5194 23.0183 23.4702 23.0918 23.4367 23.1728C23.4031 23.2537 23.3858 23.3404 23.3858 23.4281C23.3858 23.5157 23.4031 23.6024 23.4367 23.6834C23.4702 23.7643 23.5194 23.8378 23.5814 23.8997C23.6433 23.9617 23.7168 24.0109 23.7978 24.0445C23.8787 24.078 23.9654 24.0953 24.0531 24.0953C24.1407 24.0953 24.2274 24.078 24.3084 24.0445C24.3893 24.0109 24.4628 23.9617 24.5247 23.8997C24.5867 23.8378 24.6359 23.7643 24.6695 23.6834C24.703 23.6024 24.7203 23.5157 24.7203 23.4281C24.7203 23.3404 24.703 23.2537 24.6695 23.1728C24.6359 23.0918 24.5867 23.0183 24.5247 22.9564C24.402 22.834 24.2365 22.7641 24.0631 22.7617Z"
          fill={props.isfocus ? "#FFB800" : "white"}
        />
      </svg>
    </SvgIcon>
  );
}
