export type Insurance = {
  title: string;
  subtitle: string;
};

export const getInsurances = async (): Promise<Insurance[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    {
      title: 'Heltidsulykke udvidet 5%',
      subtitle: 'Neva, Jonas',
    },
    {
      title: 'Bilforsikring',
      subtitle: 'AX78169, HYUNDAI I30CW 1.6 CRDi 5 dør',
    },
    {
      title: 'Årsrejse',
      subtitle: 'Hele husstanden',
    },
    {
      title: 'Kat',
      subtitle: 'Bastian',
    },
  ];
};
