import { Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  return (
    // <Input borderRadius={20} placeholder="Search games..." variant={"subtle"} />
    <InputGroup flex="1" startElement={<LuSearch />} borderRadius={20}>
      <Input placeholder="Search games..." variant={"subtle"} />
    </InputGroup>
  );
};

export default SearchInput;
