import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight } from "lucide-react";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type Location = {
  address: string;
  _id: string;
};
type AdderssProps = {
  setLocation: Dispatch<SetStateAction<Location>>;
  address1: string;
  onClick: () => void;
  location: Location;
};
export const AddressInput = (props: AdderssProps) => {
  const { address1, setLocation, onClick, location } = props;

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setLocation({ ...location, address: event.target.value });
  };
  return (
    <Dialog>
      <DialogTrigger className="flex">
        Delivery Address:{" "}
        <p className="text-gray-400 flex items-center">
          {address1} <ChevronRight size={20} />
        </p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delivery Address</DialogTitle>
          <DialogDescription>
            <Textarea
              className="flex p-3 flex-col items-start self-stretch w-full h-full mt-5"
              onChange={(event) => onChange(event)}
              placeholder="Please provide specific address details such as building number,
              entrance, and apartment number"
            ></Textarea>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button className="mt-4" onClick={onClick}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
