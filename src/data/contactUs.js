import { v4 as uuidv4 } from 'uuid';
import { MdPlace, MdPhone, MdMail } from 'react-icons/md';

export const contactUs = [
  {
    id: uuidv4(),
    icon: <MdPlace />,
    data: 'Jackson Street 567, San Diego, California, United States',
  },
  {
    id: uuidv4(),
    icon: <MdPhone />,
    data: '8 800-456-2650',
  },
  {
    id: uuidv4(),
    icon: <MdMail />,
    data: 'agency@look.support.com',
  },
];
