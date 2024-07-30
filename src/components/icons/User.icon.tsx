import SvgIcon from "@mui/material/SvgIcon";

export default function UserIcon(props: any) {
  return (
    <SvgIcon {...props} sx={{ cursor: "pointer", width: "12px" }}>
      <svg
        width="10"
        height="11"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.0001 4.97367C6.23547 4.97367 7.23693 3.97221 7.23693 2.73684C7.23693 1.50147 6.23547 0.5 5.0001 0.5C3.76473 0.5 2.76326 1.50147 2.76326 2.73684C2.76326 3.97221 3.76473 4.97367 5.0001 4.97367Z"
          fill={props.color ?? "#24FF00"}
        />
        <path
          d="M5.0001 5.5C2.82004 5.5 1.05273 7.26732 1.05273 9.44736C1.05273 10.0287 1.52402 10.5 2.10537 10.5H7.89484C8.47619 10.5 8.94748 10.0287 8.94748 9.44736C8.94746 7.26732 7.18016 5.5 5.0001 5.5Z"
          fill={props.color ?? "#24FF00"}
        />
      </svg>
    </SvgIcon>
  );
}
