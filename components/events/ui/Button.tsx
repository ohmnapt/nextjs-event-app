import Link from 'next/link';
import style from './Button.module.css';

const Button = (props: { link: string; children: string }) => {
  console.log(props.children);
  return (
    <Link href={props.link}>
      <a className={style.btn}>{props.children}</a>
    </Link>
  );
};
export default Button;
