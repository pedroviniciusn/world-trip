import { Box } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface ILogo {
  src: string | StaticImageData;
}

const Logo: FunctionComponent<ILogo> = ({src}) => {
  return (
    <Box width="100%" display="flex" alignItems="center" justifyContent="center">
      <Link href="/">
        <Image src={src} alt="Logo" width="100"/>
      </Link>
    </Box>
  )
}

export default Logo;