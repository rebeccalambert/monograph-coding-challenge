import React from 'react';
import "./Emojis.css";

function Emojis() {
  
    let face_icons = "😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 🥰 😗 😙 😚 🙂 🤗 🤩 🤔 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 😲 🙁 😖 😞 😟 😤 😢 😭 😦 😧 😨 😩 🤯 😬 😰 😱 🥵 🥶 😳 🤪 😵 😡 😠 🤒 🤢 🤮 🤧 😇 🥳 🥴 🥺 🧐 🤓"
    let other_icons = "😈 💀 👻 💩 🙌 💃 🕺 🏆 🥇 🥈 🥉 🌠 🎊 🎉 🧡 💚 💙 💜 🖤 💔"
    
    return (
        <div>
            <p>{face_icons}</p>
            <p>{other_icons}</p>
        </div>
    );
}

export default Emojis;

