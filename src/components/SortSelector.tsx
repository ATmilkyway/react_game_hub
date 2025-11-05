import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedSortOrder: string;
  onSelectSortOrder: (sortorder: string) => void;
}

const SortSelector = ({ selectedSortOrder, onSelectSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date adeded" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentOrder = sortOrders.find(
    (order) => order.value === selectedSortOrder
  );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle" size="sm">
          {currentOrder?.label || "Order by Releveance"} <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="10rem">
            <Menu.RadioItemGroup>
              {sortOrders.map((item) => (
                <Menu.RadioItem
                  key={item.value}
                  value={item.value}
                  onClick={() => onSelectSortOrder(item.value)}
                >
                  {item.label}
                  <Menu.ItemIndicator />
                </Menu.RadioItem>
              ))}
            </Menu.RadioItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
