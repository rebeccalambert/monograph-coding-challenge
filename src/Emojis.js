import React from 'react';
import "./Emojis.css";

function Emojis( {update, guests, review} ) {
  
    let emojis_array = "😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 🥰 😗 😙 😚 🙂 🤗 🤩 🤔 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 😲 🙁 😖 😞 😟 😤 😢 😭 😦 😧 😨 😩 🤯 😬 😰 😱 🥵 🥶 😳 🤪 😵 😡 😠 🤒 🤢 🤮 🤧 😇 🥳 🥴 🥺 🧐 🤓 😈 💀 👻 💩 🙌 💃 🕺 🏆 🥇 🥈 🥉 🌠 🎊 🎉 🧡 💚 💙 💜 🖤 💔".split(" ")


    let emojis = emojis_array.map( ( emoji, idx) => {
        return <li className="emoji" key={`emojis-${idx}`}>{emoji}</li>
    });

    const newEmoji = (emoji) => {
       update(guests, review, emoji)
    }
    
    return (
        
        <ul className="emoji-list" onClick={e=> newEmoji(e.target.innerText)}>{emojis}</ul>
       
    );
}

export default Emojis;

