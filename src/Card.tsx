import { useRef } from "react";
import { throttle } from "throttle-debounce-ts";
import { useAppState } from "./state/AppStateContext";
import { CardContainer } from "./styles";
import { isHidden } from "./utils/isHidden";
import { useItemDrag } from "./utils/useItemDrag";
import { moveTask, setDraggedItem } from "./state/actions";
import { useDrop } from "react-dnd";

type CardProps = {
  text: string;
  id: string;
  columnId: string;
  isPreview?: boolean;
};

export const Card = ({ text, id, columnId, isPreview }: CardProps) => {
  const { draggedItem, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({
    type: "CARD",
    id,
    text,
    columnId,
  });

  const [, drop] = useDrop({
    accept: "CARD",
    hover: throttle(200, () => {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type !== "CARD") {
        return;
      }
      if (draggedItem.id === id) {
        return;
      }

      dispatch(moveTask(draggedItem.id, id, draggedItem.columnId, columnId));

      dispatch(setDraggedItem({ ...draggedItem, columnId }));
    }),
  });

  drag(drop(ref));

  return (
    <CardContainer
      ref={ref}
      isPreview={isPreview}
      isHidden={isHidden(draggedItem, "CARD", id, isPreview)}
    >
      {text}
    </CardContainer>
  );
};
