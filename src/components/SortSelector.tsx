import { Button, Menu, MenuItem, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle" size="sm">
          Order by Releveance <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="10rem">
            <Menu.RadioItemGroup>
              <MenuItem value="action">Action</MenuItem>
              {/* {data.map((item) => (
                <Menu.RadioItem
                  key={item.id}
                  value={item.name}
                  onClick={() => onSelectPlatform(item)}
                >
                  {item.name}
                  <Menu.ItemIndicator />
                </Menu.RadioItem>
              ))} */}
            </Menu.RadioItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
