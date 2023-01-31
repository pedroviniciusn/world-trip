import { Box } from '@chakra-ui/react';
import Image, { StaticImageData, ImageProps } from 'next/image';

import { FunctionComponent } from 'react';

interface Itypes extends ImageProps {
  src: string | StaticImageData;
  alt: string;
}

const Types: FunctionComponent<Itypes> = ({src, alt, ...rest}) => {
  return (
    <Box width={158}>
      <Image src={src} alt={alt} style={{margin: "auto", cursor: "pointer" }} {...rest}/>
    </Box>
  )
}

export default Types;