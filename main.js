const firebaseConfig = {
    apiKey: "AIzaSyDM_nJcP7DndgWeNAY4-MswCUYxZEZb52A",
    authDomain: "areyougay-69.firebaseapp.com",
    projectId: "areyougay-69",
    storageBucket: "areyougay-69.appspot.com",
    messagingSenderId: "710200369218",
    appId: "1:710200369218:web:be6ef0ef463349c6664ddb",
    measurementId: "G-YGTGRXE8BY"
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

function yes() {
    document.getElementById("hariu").style.zIndex = 1;
}
function no() {
    let x = Math.random() * 120;
    let y = Math.random() * 150;
    document.getElementById("nope").style.marginTop = y + "px";
    document.getElementById("nope").style.marginLeft = x + "px";
}