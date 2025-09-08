// import { useState } from "react";
// import {
//   Modal,
//   TextInput,
//   NumberInput,
//   Select,
//   Button,
//   Stack,
//   Box,
//   Group,
// } from "@mantine/core";
// import type { Container } from "react-dom/client";

type AddFoodModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string,
    price: number | string,
    quantity: number | string,
    category: string
  ) => void;
};

export default function AddFoodModal({
  // opened,
  // onClose,
  // onAdd,
}: AddFoodModalProps) {
  // const [name, setName] = useState<string>("");
  // const [price, setPrice] = useState<number | string>(0);
  // const [quantity, setQuantity] = useState<number | string>(0);
  // const [category, setCategory] = useState<string | null>(null);

  // const handleSubmit = () => {
  //   if(!name.trim() || !price || !quantity || !category) return;
  //   onAdd(name,price,quantity,category);
  //   setName("");
  //   setPrice(0);
  //   setQuantity(0);
  //   setCategory(null);
  // };

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  // const nameInput = (event:any) => { 
  //   setName(event.target.value)
  // }
  // const priceInput = (event:any) => {
  //   setPrice(event.target.value)
  // }
  // const quanInput = (event:any) => {
  //   setQuantity(event.target.value)
  // }
  // const cateInput = (event:any) => {
  //   setCategory(event.target.value)
  // }
  
  


  return {
    /* Type additional text here. */
    
    // <Modal opened={opened} onClose={onClose} title="Add an item">
        
    // <Stack>
    //     h={300}
    //     bg="var(--mantine-color-body)"
    //     align="stretch"
    //     justify="center"
    //     gap="md"
    //   >
    //     <TextInput
    //       label="Name of item"
    //       description="Name of item"
    //       error="Name of item is required"
    //       placeholder="Input placeholdere.g., Chicken rice"
    //   />
    //     <NumberInput
    //       label="Price per dish"
    //       description="Price per dish"
    //       error="Price per dish is required"
    //       placeholder="0"
    //       min={0}
    //   />
    //     <NumberInput
    //       label="Quantity"
    //       description="Quantity"
    //       error="Quantity is required"
    //       placeholder="0"
    //       min={0}
    //   />
    //   <Select
    //     label="Category"
    //     description="Category"
    //     error="Category is required"
    //     placeholder="Select a category"
    //     data={['Main Course', 'Drink', 'Dessert']}
    //   />
    // 
    //     <Button onClick={handleSubmit}>Submit</Button>
    //   </Stack>
    // </Modal>



    
  };
}
