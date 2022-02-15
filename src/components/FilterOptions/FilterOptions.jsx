import { Flex, Button, Text, useColorModeValue } from '@chakra-ui/react';

const FilterOptions = ({ title, data, clickedList, setClickedList }) => {
  const color = useColorModeValue('gray.500', 'gray.100');

  const handleClickCategory = (value) => {
    const index = clickedList.findIndex((item) => item === value);

    if (value === 'all') {
      index > -1 ? setClickedList([]) : setClickedList(['all']);
    } else {
      if (index > -1) {
        const array = clickedList.filter((item) => item !== value);
        setClickedList(array);
      } else {
        const array = clickedList.filter((item) => item !== 'all');
        setClickedList([...array, value]);
      }
    }
  };

  return (
    <>
      <Text mt={4} color={color} fontWeight="bold">
        {title}
      </Text>
      <Flex display="flex" flexWrap="wrap" gap={2}>
        <Button
          onClick={() => handleClickCategory('all')}
          bgColor={clickedList.includes('all') ? 'purple.500' : 'white'}
          color={clickedList.includes('all') ? 'white' : 'gray.500'}
          variant="filterOption">
          All
        </Button>
        {data?.map((item) => {
          return (
            <Button
              key={item}
              onClick={() => handleClickCategory(item)}
              bgColor={clickedList.includes(item) ? 'purple.500' : 'white'}
              color={clickedList.includes(item) ? 'white' : 'gray.500'}
              variant="filterOption">
              {item}
            </Button>
          );
        })}
      </Flex>
    </>
  );
};
export default FilterOptions;
