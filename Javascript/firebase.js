import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAalxeqm5oEtMoYHI3irna7CACdUcFilzk",
  authDomain: "thevoidclicker.firebaseapp.com",
  databaseURL: "https://thevoidclicker-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "thevoidclicker",
  storageBucket: "thevoidclicker.appspot.com",
  messagingSenderId: "394237974349",
  appId: "1:394237974349:web:c645d91eff47a8b0b30904",
  measurementId: "G-NYD0V53G7R",
  languageCode: language,
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const provider = new GoogleAuthProvider();

auth.languageCode = language;

const googleLogin = document.getElementById("login");

googleLogin.addEventListener("click", function() {
    signInWithPopup(auth, provider)
        .then((result) => {
            let user = result.user;
            localStorage.setItem("DisplayName", user.displayName);
            const loginMessage = "You are logged in as " + user.displayName + ".";
            showToast(loginMessage, 3000, "success");
            successfulLogin(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode);
            console.error(errorMessage);
            showToast(translations[language].error, 3000, "warning");
        });
});

function successfulLogin(user) {
    let profilePicture = user.photoURL;
    let username = user.displayName;

    const googleLogin = document.getElementById("login");
    const pfp = document.getElementById("pfp");

    pfp.src = profilePicture;
    pfp.style.display = "flex";
    googleLogin.style.display = "none";

    const uid = user.uid;
    const databaseRef = ref(database, `users/${uid}/data`);
    get(databaseRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const databaseObject = snapshot.val();
                if (MPC <= databaseObject.MPC || MPS <= databaseObject.MPS || money <= databaseObject.money) {
                    importData("auto");
                }
            }
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });

    const loginMessage = translations[language].logged_in + username + "</strong>.";
    showToast(loginMessage, 3000, "success");
}

function successfulLogout() {
    const googleLogin = document.getElementById("login");
    const pfp = document.getElementById("pfp");

    googleLogin.style.display = "inline-block";
    pfp.style.display = "none";

    showToast(translations[language].logged_out, 3000, "info");
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        successfulLogin(user);
    } else {
        showToast(translations[language].not_logged_in, 3000, "info");
    }
});

const pfp = document.getElementById("pfp");
const popup = document.getElementById("pfpInfo");
const usernamePopup = document.getElementById("username");
const signoutButton = document.getElementById("signout");
const overlay = document.querySelector(".overlay");

pfp.addEventListener("click", () => {
    let username = localStorage.getItem("DisplayName");

    overlay.style.display = "block";

    popup.style.display = "block";
    usernamePopup.style.display = "block";


    usernamePopup.innerHTML = translations[language].username + username + "</strong>";

    signoutButton.addEventListener("click", () => {
        auth.signOut().then(() => {
            successfulLogout();
            popup.style.display = "none";
            overlay.style.display = "none";
        }).catch((error) => {
            console.error(error);
            showToast(translations[language].error, 3000, "warning");
        });
    });
});

overlay.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.style.display = "none";
});

const exportButton = document.getElementById("export");
exportButton.addEventListener("click", () => {
    if (!confirm(translations[language].exportConfirm)) {
        showToast(translations[language].cancelled, 3000, "info");
        popup.style.display = "none";
        overlay.style.display = "none";
        return;
    }

    exportData();
});

function exportData(type) {
    const jsonString = localStorage.getItem("Data");
    const databaseObject = JSON.parse(jsonString) || {};
    const user = auth.currentUser;

    if (user) {
        const uid = user.uid;
        const databaseRef = ref(database, `users/${uid}/data`);
        set(databaseRef, databaseObject)
            .then(() => {
                if (type != "auto") {
                    showToast(translations[language].exported, 3000, "success");
                }
            })
            .catch((error) => {
                console.error("Error exporting data:", error);
                showToast(translations[language].error, 3000, "warning");
            });

        popup.style.display = "none";
        overlay.style.display = "none";
    } else {
        showToast(translations[language].not_authenticated, 3000, "warning");
    }
}

const importButton = document.getElementById("import");
importButton.addEventListener("click", () => {
    if (!confirm(translations[language].importConfirm)) {
        showToast(translations[language].cancelled, 3000, "info");
        popup.style.display = "none";
        overlay.style.display = "none";
        return;
    }

    importData();
});

function importData(type) {
    const user = auth.currentUser;

    if (user) {
        const uid = user.uid;
        const databaseRef = ref(database, `users/${uid}/data`);
        get(databaseRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const databaseObject = snapshot.val();
                    localStorage.setItem("Data", JSON.stringify(databaseObject));
                    money = databaseObject.money;
                    upgradeMoney = databaseObject.upgradeMoney;
                    upgradeMoney2 = databaseObject.upgradeMoney2;
                    MPS = databaseObject.MPS;
                    MPC = databaseObject.MPC;
                    totalClicks = databaseObject.totalClicks;
                    playtimeSeconds = databaseObject.seconds;
                    playtimeMinutes = databaseObject.minutes;
                    playtimeHours = databaseObject.hours;
                    if (type != "auto") {
                        showToast(translations[language].imported, 3000, "success");
                    }
                } else {
                    showToast(translations[language].empty, 3000, "info");
                }
                popup.style.display = "none";
                overlay.style.display = "none";
            })
            .catch((error) => {
                console.error("Error importing data:", error);
                showToast(translations[language].error, 3000, "warning");
            });
    } else {
        showToast(translations[language].not_authenticated, 3000, "warning");
    }
}

window.unload = async function() {
    const user = auth.currentUser;

    if (user) {
        const uid = user.uid;
        const databaseRef = ref(database, `users/${uid}/data`);
        const snapshot = await get(databaseRef);
        if (snapshot.exists()) {
            const databaseObject = snapshot.val();
            if (MPC >= databaseObject.MPC || MPS >= databaseObject.MPS || money >= databaseObject.money) {
                exportData("auto");
            }
        }
    }
};

function showToast(message, duration, type) {
    const toast = document.getElementById("toast");
    toast.innerHTML = message;

    if (type === "warning") {
        toast.style.backgroundColor = "rgba(202, 0, 0, 0.6)";
        toast.style.border = "2px solid rgb(255, 0, 0)";
    }

    if (type === "info") {
        toast.style.backgroundColor = "rgba(160, 133, 0, 0.6)";
        toast.style.border = "2px solid rgb(255, 170, 0)";
    }

    if (type === "success") {
        toast.style.backgroundColor = "rgba(0, 160, 16, 0.6)";
        toast.style.border = "2px solid rgb(0, 255, 17)";
    }

    toast.style.opacity = 1;
    toast.style.display = "block";

    setTimeout(() => {
        toast.style.opacity = 0;
        setTimeout(() => {
            toast.style.display = "none";
        }, 1000);
    }, duration);
}