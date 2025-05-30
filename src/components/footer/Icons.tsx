import visaIcon from "../../assets/img/svg/visa.svg";
import mastercardIcon from "../../assets/img/svg/master.svg";
import amexIcon from "../../assets/img/svg/americanExpress.svg";
import paypalIcon from "../../assets/img/svg/paypal.svg";
import dinersClubIcon from "../../assets/img/svg/dinersClub.svg";
import discoverIcon from "../../assets/img/svg/discover.svg";

const Icons = (): JSX.Element => {
  return (
    <ul className="flex">
      <li>
        <img
          src={visaIcon}
          alt="Visa"
          width={38}
          height={24}
          className="icon"
        />
      </li>
      <li>
        <img
          src={mastercardIcon}
          alt="Mastercard"
          width={38}
          height={24}
          className="icon"
        />
      </li>
      <li>
        <img
          src={amexIcon}
          alt="American Express"
          width={38}
          height={24}
          className="icon"
        />
      </li>
      <li>
        <img
          src={paypalIcon}
          alt="PayPal"
          width={38}
          height={24}
          className="icon"
        />
      </li>
      <li>
        <img
          src={dinersClubIcon}
          alt="Diners Club"
          width={38}
          height={24}
          className="icon"
        />
      </li>
      <li>
        <img
          src={discoverIcon}
          alt="Discover"
          width={38}
          height={24}
          className="icon"
        />
      </li>
    </ul>
  );
};

export default Icons;
