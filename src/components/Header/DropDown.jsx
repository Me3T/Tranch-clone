import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

export function DropdownMenuRadioGroupDemo({ name, item1, item2, item3 }) {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="font-myFont text-2xl font-semibold border-none hover:underline decoration-purple-500"
        >
          {name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup value={position} onValueChange={setPosition}>
          <DropdownMenuItem value="top">{item1}</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem value="top">{item2}</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem value="top">{item3}</DropdownMenuItem>
          <DropdownMenuSeparator />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default DropdownMenu;
