import Dice from '../qcBX8Xp8i.gif';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex flex-row py-1.5">
      <img src={Dice} alt="dice" />
      <Link to="/">
        <header className="text-9xl font-medium text-white">Bet Site</header>
      </Link>
      <img src={Dice} alt="dice" />
    </div>
  );
}