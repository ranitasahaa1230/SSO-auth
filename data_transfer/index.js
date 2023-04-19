let loginWindow;

const openLogin=()=>{
    loginWindow=window.open("login.html","_blank");
}

const sendMsgToLogin=()=>{
    loginWindow.postMessage({login:"Hello from home page"},"*")
}

const sendMsgToHome=()=>{
    window.opener.postMessage({home:"Hello from login page"},"*");

    setTimeout(() => {
        window.close();
    }, 2000);
}

window.addEventListener("message",(e)=>{
    if(e.data.home){
        console.log("Home page received a msg",e.data.home)
    }

    if(e.data?.login){
        console.log("Login page received a msg",e.data?.login)
    }
})