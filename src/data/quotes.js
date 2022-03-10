import { v4 as uuidv4 } from 'uuid';

export const quotes = [
  {
    id: uuidv4(),
    author: 'Anna Wintour',
    employ: 'Editor-in-chief',
    company: 'Vogue',
    quote:
      'Donec ac est vel justo cursus rutrum ac eleifend ex. Pellentesque dapibus venenatis enim. Praesent massa libero, porta eu dolor id, tristique rutrum lectus. Sed dapibus, sapien euismod tempus efficitur, sapien velit placerat lectus, eu lobortis enim nulla vel velit. Nulla non.',
  },
  {
    id: uuidv4(),
    author: 'Wendy Rowe',
    employ: 'Creative Director',
    company: 'Max Factor',
    quote:
      'Aliquam consequat blandit risus. Ut at risus nunc. Nulla sit amet sapien ante. Aliquam erat volutpat. Nulla facilisi. Etiam semper purus arcu, eu eleifend nibh pretium nec. Sed pellentesque lacinia velit mattis suscipit. Sed eu tortor ac massa congue malesuada quis a leo. Proin fringilla pharetra lorem sit. ',
  },

  {
    id: uuidv4(),
    author: 'John Doe',
    employ: 'Marketing Director ',
    company: 'Coty',
    quote:
      'Maecenas aliquet purus faucibus, tincidunt felis quis, imperdiet lacus. Ut magna lorem, porta et sagittis ac, accumsan eu enim. Ut porttitor elit eu ante gravida dictum. Phasellus ut enim.  ',
  },
];
