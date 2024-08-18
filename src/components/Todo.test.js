
import {  render,screen} from '@testing-library/react';
import Todo from './Todo';
import userEvent from "@testing-library/user-event";

describe("Todo Test",()=>{
    let title,emojiTitle,emojiSymbol,filterInput,copytext;
    beforeEach(()=>{
    render(<Todo />)
    title=screen.getByText("😾 Emoji Search 😾")
     emojiTitle = screen.getByText("100");
    emojiSymbol = screen.getByText("💯");
    filterInput=screen.getByPlaceholderText("emoji giriniz")
   

    })

test("Başlık doğru şekilde render ediliyor mu?" ,()=>{
    expect(title).toBeInTheDocument()
})

test("Emoji listesi doğru bir şekilde render ediliyor mu?", () => {
    expect(emojiTitle).toBeInTheDocument();
    expect(emojiSymbol).toBeInTheDocument();
});

test("Filtreleme şekilde render ediliyor mu?" ,async ()=>{
    const name="Grin"
   await userEvent.type(filterInput, name);  
   expect(screen.getByText("😀")).toBeInTheDocument();//filtrelenmesi gereken 
   expect(screen.getByText("Grinning")).toBeInTheDocument();

   expect(screen.queryByText("😂")).not.toBeInTheDocument();//filtrelenmemesi gereken 
   expect(screen.queryByText("Joy")).not.toBeInTheDocument();
})

})