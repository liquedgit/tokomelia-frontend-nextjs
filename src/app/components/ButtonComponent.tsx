import Link from "next/link";

export function ButtonComponent({ ...props }) {
  return (
    <>
      <Link href={props.to}>
        <div className={`${props.style}`}>
          <button>{props.name}</button>
        </div>
      </Link>
    </>
  );
}
