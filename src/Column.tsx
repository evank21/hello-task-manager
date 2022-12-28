import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  text: string;
};

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="Task #1" />
      <Card text="Task #2" />
      <Card text="Task #3" />
      <AddNewItem
        toggleButtonText="+ Add another card"
        onAdd={() => console.log("New Item Added")}
        dark
      />
    </ColumnContainer>
  );
};
