import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    // <Input borderRadius={20} placeholder="Search games..." variant={"subtle"} />
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup flex="1" startElement={<LuSearch />} borderRadius={20}>
        <Input
          placeholder="Search games..."
          variant={"subtle"}
          ref={ref}
          // value={ref.current?.value}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
