/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/images/vajra-logo.png';
import logoWhite from 'assets/images/vajra-logo.png';

export default function Logo({ isWhite }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image src={isWhite ? logoWhite : logo} alt="startup landing logo" width={130} height={80}/>
    </Link>
  );
}
