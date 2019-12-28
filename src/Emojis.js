import React from 'react';
import "./Emojis.css";

function Emojis({ update, guests, review }) {
  
    let emojis_array = "😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 🥰 😗 😙 😚 🙂 🤗 🤩 🤔 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 😲 🙁 😖 😞 😟 😤 😢 😭 😦 😧 😨 😩 🤯 😬 😰 😱 🥵 🥶 😳 🤪 😵 😡 😠 🤒 🤢 🤮 🤧 😇 🥳 🥴 🥺 🧐 🤓 😈 💀 👻 💩 🙌 💃 🕺 🏆 🥇 🥈 🥉 🌠 🎊 🎉 🧡 💚 💙 💜 🖤 💔".split(" ")

    let emojis = emojis_array.map( (emoji, idx) => {
        return <li className="emoji" key={`emojis-${idx}`}>{emoji}</li>
    });

    const removeHighlight = () => {
       Array.from(document.getElementsByClassName('emoji')).forEach( emoji => {
            emoji.style.cssText = 'text-shadow: none'
        })
    }

    const newEmoji = (e) => {        
        removeHighlight();
        (e.target).style.cssText = 'text-shadow: 0 0 0.5em gold;'
        update(guests, review, e.target.innerText)
    }

    return (
        <ul className="emoji-list" onClick={e => newEmoji(e)}>{emojis}</ul>
    );
}

export default Emojis;

