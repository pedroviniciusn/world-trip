import { Box, Image, ImageProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface Itypes extends ImageProps {
  src: string;
  alt: string;
}

const Types: FunctionComponent<Itypes> = ({src, alt, ...rest}) => {
  return (
    <Box width={158} height={140}>
      <Image src={src} alt={alt} style={{margin: "auto", cursor: "pointer" }} {...rest}/>
    </Box>
  )
}

export default Types;