import { Box, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { FunctionComponent } from 'react';


interface ILogo {
  src: string;
  alt: string;
}

const Logo: FunctionComponent<ILogo> = ({src, alt}) => {
  return (
    <Box width="100%" display="flex" alignItems="center" justifyContent="center">
      <Link href="/">
        <Image src={src} alt={alt} width={110} />
      </Link>
    </Box>
  )
}

export default Logo;