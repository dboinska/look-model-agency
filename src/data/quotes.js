import { v5 } from 'uuid';
const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';

export const quotes = [
  {
    id: v5('quote1', MY_NAMESPACE),
    author: 'Anna Wintour',
    employee: 'Editor-in-chief',
    company: 'Vogue',
    quote:
      'Donec ac est vel justo cursus rutrum ac eleifend ex. Pellentesque dapibus venenatis enim. Praesent massa libero, porta eu dolor id, tristique rutrum lectus. Sed dapibus, sapien euismod tempus efficitur, sapien velit placerat lectus, eu lobortis enim nulla vel velit. Nulla non.',
  },
  {
    id: v5('quote2', MY_NAMESPACE),
    author: 'Wendy Rowe',
    employee: 'Creative Director',
    company: 'Max Factor',
    quote:
      'Aliquam consequat blandit risus. Ut at risus nunc. Nulla sit amet sapien ante. Aliquam erat volutpat. Nulla facilisi. Etiam semper purus arcu, eu eleifend nibh pretium nec. Sed pellentesque lacinia velit mattis suscipit. Sed eu tortor ac massa congue malesuada quis a leo. Proin fringilla pharetra lorem sit. ',
  },

  {
    id: v5('quote3', MY_NAMESPACE),
    author: 'John Doe',
    employee: 'Marketing Director ',
    company: 'Coty',
    quote:
      'Maecenas aliquet purus faucibus, tincidunt felis quis, imperdiet lacus. Ut magna lorem, porta et sagittis ac, accumsan eu enim. Ut porttitor elit eu ante gravida dictum. Phasellus ut enim.  ',
  },
];
