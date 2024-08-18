import React,{useState} from 'react'
const emoji=[
    {
        "title": "100",
        "symbol": "💯",
        "keywords":
          "hundred points symbol symbol wow wow win win perfect perfect parties parties"
      },
      {
        "title": "1234",
        "symbol": "🔢",
        "keywords": "input symbol for numbers symbol"
      },
      {
        "title": "Grinning",
        "symbol": "😀",
        "keywords": "grinning face happy smiley emotion emotion"
      },
      {
        "title": "Grimacing",
        "symbol": "😬",
        "keywords": "grimacing face silly smiley emotion emotion selfie selfie"
      },
      {
        "title": "Grin",
        "symbol": "😁",
        "keywords":
          "grinning face with smiling eyes happy silly smiley emotion emotion good good selfie selfie"
      },
      {
        "title": "Joy",
        "symbol": "😂",
        "keywords":
          "face with tears of joy happy silly smiley cry laugh laugh emotion emotion sarcastic sarcastic"
      },
      {
        "title": "Smiley",
        "symbol": "😃",
        "keywords":
          "smiling face with open mouth happy smiley emotion emotion good good"
      },
      {
        "title": "Smile",
        "symbol": "😄",
        "keywords":
          "smiling face with open mouth and smiling eyes happy smiley emotion emotion"
      },
      {
        "title": "Sweat Smile",
        "symbol": "😅",
        "keywords":
          "smiling face with open mouth and cold sweat smiley workout sweat emotion emotion"
      }
]
function Todo() {
const [text,setText]=useState("");

const handleChange=(e)=>{//inputta değişiklik olayı
    setText(e.target.value)

}

const searchitem=emoji.filter((item)=>//Filtreleme işlemi
    Object.values(item).some(value=>
    value.toString().toLowerCase().includes(text.toLowerCase())))
  

    const handleCopy=(emoji)=>{//Kopyalama işlemi
            navigator.clipboard.writeText(emoji)
                .then(() => {
                    alert(`Emoji kopyalandı: ${emoji}`);
                })
                .catch(err => {
                    console.error('Kopyalama işlemi başarısız oldu: ', err);
                })  
    }
    
    return (
    <div className='container'>

        <h1 className="title">😾 Emoji Search 😾</h1>
            
         <input value={text} name='text' onChange={handleChange} placeholder='emoji giriniz'/>

<br></br>
<br></br>

<ul className='list'>
{

    searchitem.map((values,index)=><div key={index}>
        <li className="emoji-item">
    <span className="emoji-sembol">{values.symbol}</span> 
    <span className='emoji-title'>{values.title}</span>
    <span id='copy' className="copy-hint" onClick={()=>handleCopy(values.symbol)}>Click to copy emoji</span>
    
    </li>
    
    </div>)
}
</ul>
    </div>
  )
}

export default Todo

