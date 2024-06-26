export type Claim = {
  title: string;
  number: string;
  date: string;
};

export const getClaims = async (): Promise<Claim[]> => {
  await new Promise((resolve) => setTimeout(resolve, 750));
  return [
    {
      title: 'Heltidsulykke - Skade på en person',
      number: '372 521 110',
      date: '17. marts 2022',
    },
    {
      title: 'Personskade - Skade på en person',
      number: '801 522 792',
      date: '17. marts 2022',
    },
  ];
};
