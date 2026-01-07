import useGameQueryStore from "@/store";
import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  return (
    // <Input borderRadius={20} placeholder="Search games..." variant={"subtle"} />
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
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
