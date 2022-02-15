import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { categoriesSelector, releaseDatesSelector } from 'store/slices/albumsSlice';
import { useGetAlbums } from 'hooks/useGetAlbums';
import { useLocation } from 'react-router-dom';

import {
  Input,
  Text,
  Flex,
  InputGroup,
  InputLeftElement,
  Select,
  InputRightElement,
  Button,
  AccordionPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  useColorModeValue
} from '@chakra-ui/react';
import FilteredAlbums from 'components/FilteredAlbums';
import FilterOptions from 'components/FilterOptions/FilterOptions';
import { ImSearch } from 'react-icons/im';
import { IoMdArrowDropdown } from 'react-icons/io';

const AdvancedSearch = () => {
  const { data: albums } = useGetAlbums();
  const pathname = useLocation();
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const bgColor = useColorModeValue('white', 'purple.900');
  const color = useColorModeValue('gray.500', 'gray.100');
  const colorSec = useColorModeValue('gray.500', 'white');

  const [clickedCategories, setClickedCategories] = useState(['all']);
  const [clickedDates, setClickedDates] = useState(['all']);
  const [alphabethicOrder, setAlphabethicOrder] = useState('a-z');
  const [searchInput, setSearchInput] = useState('');

  const categories = useSelector(categoriesSelector);
  const releaseDates = useSelector(releaseDatesSelector);

  const handleReset = () => {
    setClickedCategories(['all']);
    setClickedDates(['all']);
    setAlphabethicOrder('a-z');
    setSearchInput('');
  };

  useEffect(() => {
    const tempAlbums = albums;
    tempAlbums?.sort(function (a, b) {
      return a.name[0].charCodeAt(0) - b.name[0].charCodeAt(0);
    });
    setFilteredAlbums(tempAlbums);
  }, [albums]);

  useEffect(() => {
    if (pathname?.state?.category) {
      const tempAlbums = albums;
      let filteredAlbumsByCategory = [];
      tempAlbums?.forEach(
        (album) =>
          album.category === pathname?.state?.category && filteredAlbumsByCategory.push(album)
      );
      setFilteredAlbums(filteredAlbumsByCategory);
      setClickedCategories([pathname?.state?.category]);
    }
  }, [pathname, albums]);

  useEffect(() => {
    let searchData = [];
    let searchDataCategory = [];
    let searchDataYear = [];

    albums?.forEach((album) => {
      const { name, artist } = album;
      if (
        name.toLowerCase().includes(searchInput.toLowerCase()) ||
        artist.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        searchData.push(album);
      }
    });

    if (clickedCategories.includes('all')) {
      searchDataCategory = searchData;
    } else {
      searchData?.forEach(
        (album) => clickedCategories.includes(album.category) && searchDataCategory.push(album)
      );
    }

    if (clickedDates.includes('all')) {
      searchDataYear = searchDataCategory;
    } else {
      searchData?.forEach(
        (album) => clickedDates.includes(album.releaseDate) && searchDataYear.push(album)
      );
    }

    if (alphabethicOrder === 'a-z') {
      searchDataYear.sort((a, b) => a.name[0].charCodeAt(0) - b.name[0].charCodeAt(0));
    } else {
      searchDataYear.sort((a, b) => b.name[0].charCodeAt(0) - a.name[0].charCodeAt(0));
    }

    setFilteredAlbums(searchDataYear);
  }, [clickedCategories, searchInput, clickedDates, alphabethicOrder]);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    if (name === 'search_by_name') setSearchInput(value);
    if (name === 'alphabetic_select') setAlphabethicOrder(value);
  };

  return (
    <>
      <Flex
        p={2}
        gap={2}
        left={0}
        top="80px"
        width="100%"
        bgColor={bgColor}
        position="sticky"
        justify="space-between"
        borderRadius={8}>
        <Accordion variant="search" allowToggle width="100%" border="none">
          <AccordionItem>
            <InputGroup width={{ base: 'calc(100% - 440px)', lg: 'auto' }} flexGrow={1}>
              <InputLeftElement pointerEvents="none">
                <ImSearch color={colorSec} />
              </InputLeftElement>
              <Input
                color={colorSec}
                type="text"
                border="1px solid"
                borderColor="gray.500"
                placeholder="Search for songs, artists..."
                name="search_by_name"
                value={searchInput}
                onChange={handleChange}
              />
              <InputRightElement width="auto">
                <Select
                  color={colorSec}
                  fontWeight="800"
                  textAlign="right"
                  variant="unstyled"
                  width="auto"
                  name="alphabetic_select"
                  value={alphabethicOrder}
                  onChange={handleChange}>
                  <option value="a-z">A-Z</option>
                  <option value="z-a">Z-A</option>
                </Select>
              </InputRightElement>
            </InputGroup>
            <AccordionButton
              as={Button}
              rightIcon={<IoMdArrowDropdown />}
              variant="ghost"
              width={{ base: '100%', lg: '240px' }}
              color={colorSec}>
              Advanced Search Options
            </AccordionButton>
            <AccordionPanel>
              <Text color={color}>{`Found ${filteredAlbums?.length} albums`}</Text>
              <FilterOptions
                title="Filter by the Categories"
                data={categories}
                clickedList={clickedCategories}
                setClickedList={setClickedCategories}
              />

              <FilterOptions
                title="Filter by the Year"
                data={releaseDates}
                clickedList={clickedDates}
                setClickedList={setClickedDates}
              />

              <Flex justify="space-between">
                <Button size="lg" px="0" onClick={handleReset} variant="unstyle" color={colorSec}>
                  Reset Filter
                </Button>
                <AccordionButton
                  as={Button}
                  bgColor="purple.500"
                  variant="solid"
                  width="160px"
                  color="white">
                  Show Albums
                </AccordionButton>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
      {filteredAlbums?.length === 0 ? (
        <Flex
          align="center"
          direction="column"
          justify="center"
          textAlign="center"
          gap="20px"
          color="rgba(255,255,255, 0.8)"
          height="calc(100vh - 260px)">
          <ImSearch fontSize="100px" />
          <Text width="200px">There are no albums matching your search...</Text>
        </Flex>
      ) : (
        <FilteredAlbums filteredAlbums={filteredAlbums} />
      )}
    </>
  );
};

export default AdvancedSearch;
