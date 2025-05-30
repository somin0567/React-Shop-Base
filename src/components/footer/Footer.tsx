import Icons from "./Icons";
import Sns from "./Sns";

const Footer = (): JSX.Element => {
  return (
    <footer className="p-10 footer bg-base-200 text-base-content footer-center">
      <div className="grid grid-flow-col gap-4">
        <a
          rel="noreferrer noopener external"
          className="link link-hover"
          href="https://zero-base.co.kr/"
          target="_blank"
        >
          제로베이스
        </a>
      </div>
      <Icons />
      <Sns />
      <div>
        <p>Copyright © 2022 Zero Base</p>
      </div>
    </footer>
  );
};

export default Footer;
