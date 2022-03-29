import { v4 as uuidv4 } from 'uuid';

export const ourRequirements = [
  {
    id: uuidv4(),
    label: 'Height at least 1.73m.',
  },

  { id: uuidv4(), label: 'Regular facial features.' },

  { id: uuidv4(), label: 'Well-groomed hair, hands and skin.' },
  {
    id: uuidv4(),
    label: 'A or B bra size, slim waist.',
  },
  {
    id: uuidv4(),
    label: 'Circumference under bust approx. 75 cm.',
  },
  { id: uuidv4(), label: 'Hip circumference under 93cm.' },
  {
    id: uuidv4(),
    label: 'Two photos of your face and body on a light, solid background.',
  },
];

export default ourRequirements;
