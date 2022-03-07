import Link from 'next/link';
import style from './Button.module.css';

const Button = (props: { link: string; children: string }) => {
  return (
    <Link href={props.link}>
      <a className={style.btn}>{props.children}</a>
    </Link>
  );
};
export default Button;
